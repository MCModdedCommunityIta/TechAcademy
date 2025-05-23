import json
import requests
import os
from pathvalidate import sanitize_filename
import concurrent.futures

# Config
API_URL = "https://api.cfwidget.com/"
KEY_TO_EXTRACT = "projectID"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
JSON_FILE_PATH = os.path.join(BASE_DIR, "manifest.json")

def load_json(filepath):
    """Carica un file JSON e restituisce il dizionario contenente i dati."""
    with open(filepath, 'r') as f:
        return json.load(f)

def extract_values(data, key):
    """Estrae tutti i valori di una certa chiave da una lista di dizionari."""
    return [item[key] for item in data if key in item]

def check_value_through_api(value):
    """Invia richiesta HTTP per controllare un valore."""
    try:
        response = requests.get(f"{API_URL}{value}", timeout=5)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"Errore per valore {value}: {e}")
        return None

def create_file(mods_dir, value, result):
    """Crea un file nella cartella mods con il contenuto del valore."""
    filename = sanitize_filename(f"{result['title']}-{value['fileID']}.track")
    filepath = os.path.join(mods_dir, filename)

    with open(filepath, 'wb') as f:
        f.write(str(value["projectID"]).encode())

def main():
    """
    Funzione principale del programma.

    Carica il file JSON estraendo la lista di valori da controllare.
    Quindi, per ogni valore, invia una richiesta HTTP per controllare
    se  presente.

    Stampa il numero di valori trovati e, per ognuno, il risultato
    ottenuto.
    """
    data = load_json(JSON_FILE_PATH)
    values = data["files"]

    print(f"Trovati {len(values)} valori da controllare.")

    # Svuota la cartella mods prima di elaborare i valori
    mods_dir = os.path.join(BASE_DIR, "mods")
    for f in os.listdir(mods_dir):
        file_path = os.path.join(mods_dir, f)
        try:
            if os.path.isfile(file_path):
                os.unlink(file_path)
        except Exception as e:
            print(f"Errore cancellando {file_path}: {e}")
    os.makedirs(mods_dir, exist_ok=True)

    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(process_value, mods_dir, value) for value in values]
        concurrent.futures.wait(futures)

def process_value(mods_dir, value):
    """Esegue la creazione dei file per un valore."""
    result = check_value_through_api(value["projectID"])
    if result is not None:
        create_file(mods_dir, value, result)

if __name__ == "__main__":
    main()

