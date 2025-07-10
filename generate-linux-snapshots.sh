#!/bin/bash

echo "🐧 Génération des snapshots Linux pour CI..."

# Vérifie si Docker est disponible
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez installer Docker pour générer les snapshots Linux."
    exit 1
fi

# Création du Dockerfile temporaire
cat > Dockerfile.snapshot << 'EOF'
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
EOF

echo "🔧 Construction de l'image Docker..."
docker build -f Dockerfile.snapshot -t components-library-snapshots .

echo "📸 Génération des snapshots Linux..."
docker run --rm -v "$(pwd)/tests:/app/tests" components-library-snapshots

echo "🧹 Nettoyage..."
rm Dockerfile.snapshot

echo "✅ Snapshots Linux générés ! Vous pouvez maintenant les committer."
echo "   git add tests/**/*-snapshots/*-linux.png"
echo "   git commit -m 'Add Linux snapshots for CI'"
echo "   git push"
