# Components Library

Une librairie de composants React moderne construite avec TypeScript, Vite, et Tailwind CSS.

## 🚀 Fonctionnalités

- ⚡ **Vite** - Build tool ultra-rapide
- 🔷 **TypeScript** - Typage statique pour une meilleure DX
- 🎨 **Tailwind CSS** - Framework CSS utilitaire
- 🧪 **Testing** - Tests unitaires avec Vitest + Testing Library
- 🎭 **Playwright** - Tests visuels et E2E
- 🔍 **ESLint** - Linting avec configuration proche d'Airbnb
- 💅 **Prettier** - Formatage automatique du code
- 📦 **GitHub Actions** - CI/CD automatisé

## 📦 Installation

```bash
npm install components-library
```

## 🏗️ Développement

### Prérequis

- Node.js 20+
- npm

### Installation des dépendances

```bash
npm install
```

### Scripts disponibles

#### Développement

```bash
npm run dev          # Démarre le serveur de développement
npm run build        # Compile la librairie
npm run preview      # Prévisualise le build
```

#### Qualité du code

```bash
npm run lint         # Vérifie le code avec ESLint
npm run lint:fix     # Corrige automatiquement les erreurs ESLint
npm run format       # Formate le code avec Prettier
npm run format:check # Vérifie le formatage
npm run typecheck    # Vérifie les types TypeScript
```

#### Tests

```bash
npm test             # Lance les tests unitaires en mode watch
npm run test:run     # Lance les tests une fois
npm run test:coverage # Lance les tests avec coverage
npm run test:e2e     # Lance les tests E2E avec Playwright
npm run test:visual  # Lance les tests visuels
```

## 🧪 Tests

### Tests unitaires

Les tests unitaires utilisent **Vitest** et **Testing Library**.

### Tests visuels

Les tests visuels utilisent **Playwright** pour s'assurer que les composants s'affichent correctement.

## 📝 Configuration ESLint

La configuration ESLint utilise des règles proches d'Airbnb avec TypeScript.

## 🎨 Styling

Cette librairie utilise **Tailwind CSS** pour le styling. Les classes personnalisées sont définies dans `src/index.css`.

## 🔧 Structure du projet

```
components-library/
├── src/
│   ├── components/          # Composants de la librairie
│   ├── App.tsx             # Application de démonstration
│   ├── main.tsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── tests/                  # Tests E2E et visuels
├── .github/
│   └── workflows/
│       └── ci.yaml         # Pipeline CI/CD
├── eslint.config.js        # Configuration ESLint
├── prettier.config.js      # Configuration Prettier
├── tailwind.config.js      # Configuration Tailwind
├── vite.config.ts          # Configuration Vite
└── package.json
```

## 🚀 CI/CD

Le pipeline GitHub Actions automatise :

1. **Vérification du formatage** - Prettier
2. **Linting** - ESLint
3. **Vérification des types** - TypeScript
4. **Compilation** - Vite
5. **Tests unitaires** - Vitest
6. **Tests visuels** - Playwright
7. **Publication** - NPM (sur push vers main)

## 👥 Collaborateurs
  * Léo Riché
  * Raphaël Chiche
  * Alyssia Lorsold Pradon


## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
