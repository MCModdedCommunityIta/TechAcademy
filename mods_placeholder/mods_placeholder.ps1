Write-Host "==> Generazione placeholder delle mod..."

$modsFolder = "$PSScriptRoot\..\mods"
$placeholdersFolder = "$PSScriptRoot\..\mods_placeholder\mods"

Write-Host "Generazione dei placeholder per le mod..."

# Se la cartella dei placeholder non esiste, creala
if (-Not (Test-Path $placeholdersFolder)) {
    New-Item -ItemType Directory -Path $placeholdersFolder | Out-Null
}

# Elimina eventuali placeholder esistenti nella cartella
Get-ChildItem $placeholdersFolder -File | Remove-Item -Force

# Per ogni file .jar in mods, crea un file vuoto nella cartella dei placeholder
Get-ChildItem $modsFolder -Filter *.jar -File | ForEach-Object {
    $fileName = $_.Name
    $placeholderPath = Join-Path $placeholdersFolder $fileName
    New-Item -ItemType File -Path $placeholderPath | Out-Null
}

Write-Host "Generazione completata."
