# Script PowerShell pour générer les snapshots Linux

Write-Host "🐧 Génération des snapshots Linux pour CI..." -ForegroundColor Cyan

# Vérifie si Docker est disponible
if (!(Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Docker n'est pas installé. Veuillez installer Docker pour générer les snapshots Linux." -ForegroundColor Red
    exit 1
}

# Création du Dockerfile temporaire
$dockerfileContent = @"
FROM mcr.microsoft.com/playwright:v1.40.0-focal

WORKDIR /app

# Copie des fichiers de configuration
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY playwright.config.ts ./
COPY tailwind.config.js ./
COPY postcss.config.js ./

# Installation des dépendances
RUN npm ci

# Copie du code source
COPY src/ ./src/
COPY tests/ ./tests/
COPY public/ ./public/
COPY index.html ./

# Build du projet
RUN npm run build

# Génération des snapshots
CMD ["sh", "-c", "npm run preview & sleep 5 && npx playwright test --update-snapshots && pkill -f preview"]
"@

$dockerfileContent | Out-File -FilePath "Dockerfile.snapshot" -Encoding UTF8

Write-Host "🔧 Construction de l'image Docker..." -ForegroundColor Yellow
docker build -f Dockerfile.snapshot -t components-library-snapshots .

Write-Host "📸 Génération des snapshots Linux..." -ForegroundColor Yellow
$currentDir = (Get-Location).Path.Replace('\', '/')
docker run --rm -v "${currentDir}/tests:/app/tests" components-library-snapshots

Write-Host "🧹 Nettoyage..." -ForegroundColor Yellow
Remove-Item "Dockerfile.snapshot"

Write-Host "✅ Snapshots Linux générés ! Vous pouvez maintenant les committer." -ForegroundColor Green
Write-Host "   git add tests/**/*-snapshots/*-linux.png" -ForegroundColor Gray
Write-Host "   git commit -m 'Add Linux snapshots for CI'" -ForegroundColor Gray
Write-Host "   git push" -ForegroundColor Gray
