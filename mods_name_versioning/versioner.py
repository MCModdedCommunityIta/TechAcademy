"""
Script per rilevare le modifiche alle mod senza violare i TOS di CurseForge in una cartella.

I file sono identificati dal nome del file senza estensione e la versione
estratta dal nome del file. Le modifiche sono rilevate confrontando i
file presenti nella cartella con la lista dei file presenti nella cartella
alla scorsa esecuzione dello script. Le modifiche vengono salvate in un
file YAML.

Lo scirpt si esegue così com'è, usando python e senza argomenti senza spostare la sua cartella

Lo script utilizza due file per memorizzare lo stato precedente:
- snapshot_old.txt: contiene la lista dei file presenti nella cartella
  alla scorsa esecuzione dello script.
- checksum_old.txt: contiene la lista dei file presenti nella cartella
  alla scorsa esecuzione dello script con il loro checksum md5.

Lo script produce un file YAML contenente le modifiche rilevate:
- added: lista dei file aggiunti
- removed: lista dei file rimossi
- updated: dizionario {nome_vecchia_versione: nome_nuova_versione} per i file aggiornati
(Notare che questa lista potrebbe non funzionare in tutti i casi, a cusa di una mancanza di uniformità nei nomi delle mod di CF)
"""

from hashlib import md5
from yaml import dump
from os import chdir, path, listdir

chdir(path.dirname(path.abspath(__file__)))
FOLDER_PATH = "../mods/"

def get_file_list(directory):
    """Ottiene la lista ordinata dei file nella cartella"""
    return sorted(listdir(directory))

def get_checksums(directory):
    """Crea un dizionario {nome_file: checksum} per tutti i file nella cartella"""
    print("Calcolo checksum...")
    checksums = {}
    for file in sorted(listdir(directory)):
        path = path.join(directory, file)
        if path.isfile(path) and file.endswith(".jar"):
            with open(path, "rb") as f:
                checksums[file] = md5(f.read()).hexdigest()
    return checksums

# Caricare vecchi dati
print("Carico vecchi dati...")
try:
    with open("snapshot_old.txt", "r") as f:
        old_files = set(f.read().splitlines())
    with open("checksum_old.txt", "r") as f:
        old_checksums = dict(line.split(maxsplit=1) for line in f.read().splitlines())
except FileNotFoundError:
    old_files = set()
    old_checksums = {}

# Scansiona la cartella
print("Scansiona la cartella...")
new_files = {file for file in get_file_list(FOLDER_PATH) if file.endswith(".jar")}
new_checksums = get_checksums(FOLDER_PATH)

# Identifica i cambiamenti
added = sorted(list(new_files - old_files))
removed = sorted(list(old_files - new_files))

updated = {}

for file_a in list(added):
    
    file_a_split = file_a.split('-', 1)
    file_r = next((file for file in removed if file_a_split[0] in file), None)
    file_r_split = file_r.split('-', 1)
        
    if (file_a_split[0] == file_r_split[0]) and (file_a_split[1]!=file_r_split[1]):
        updated[file_r] = file_a
        added.remove(file_a)
        removed.remove(file_r)
        



for old, old_hash in old_checksums.items():
    try:
        old_name, old_version = old.split('-', 1)
    except ValueError:
        continue
    for new, new_hash in new_checksums.items():
        new_name, new_version = new.split('-', 1)
        if old_name == new_name and old_version != new_version and old_hash != new_hash:
            updated[old] = new

# Verifica se ci sono stati cambiamenti
if not added and not removed and not updated:
    print("Nessun cambiamento rilevato.")
else:
    # Salva i risultati in un file YAML
    print("Salvo i risultati in un file YAML...")
    changes = {
        'added': added,
        'removed': removed,
        'updated': dict(sorted(updated.items()))
    }

    with open("changes.yaml", "w") as f:
        dump(changes, f)

    # Salva il nuovo stato
    print("Salvo il nuovo stato...")
    with open("snapshot_old.txt", "w") as f:
        f.write("\n".join(sorted(new_files)))
    with open("checksum_old.txt", "w") as f:
        f.write("\n".join(f"{h} {f}" for f, h in sorted(new_checksums.items())))


