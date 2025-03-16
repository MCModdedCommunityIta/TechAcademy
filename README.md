**NON** fare commit che contengano sia file modificati che file alterati dalla propria configurazione di gioco, (ad esempio iris che aggiorna il commento con la data. _Non usiamo gitignore per i questo tipo di file, perchè non si sa mai, se possano avere effettivamente utilità in futuro_)

Separare i primi con un nome significativo e i secondi con un nome diverso, tipo "altro"


Creazione dell'archivio compresso in windows (basato su 7z, git e pwsh):

```pwsh
# scegliere SOLO gli hash dei commit che effettivamente modificano un file di gioco
git show --name-only --pretty=format: HASH1 HASH2 HASH3 | sort -u > file_list.txt

7z a archivio.zip "@file_list.txt"
```

----------------------------------

non è previsto che questa repository arrivi al pubblico, non è prevista la presenza di mod, è solo per lo sviluppo collaborativo di quest,config e script, La proprietà intellettuale è dei rispettivi creatori

this repository is not expected to reach the public, no mods are expected, it is only for collaborative development of quest,config and scripts, The intellectual property is of the respective creators


