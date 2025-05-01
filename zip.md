```pwsh
# scegliere SOLO gli hash dei commit che effettivamente modificano un file di gioco utile all'update

7z a -spf archivio.zip (git show --name-only --pretty=format: HASH1 HASH2 HASH3 | Sort-Object -Unique | Where-Object { $_.Trim() -ne '' })
```
