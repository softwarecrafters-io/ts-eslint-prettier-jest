# TypeScript Template with ESLint, Prettier & Jest

[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3.svg)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.8-F7B93E.svg)](https://prettier.io/)
[![Jest](https://img.shields.io/badge/Jest-30-C21325.svg)](https://jestjs.io/)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220.svg)](https://pnpm.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, production-ready TypeScript template with integrated linting, formatting, and testing. Perfect for starting new projects or practicing katas in our Software Craftsmanship courses.

## 📚 About This Template

This template is used in the following courses at [Software Crafters](https://softwarecrafters.io):

- **🧪 Testing Sostenible** - Sustainable Testing
- **🏗️ Diseño Sostenible** - Sustainable Design
- **♻️ Refactoring Sostenible** - Sustainable Refactoring

Learn more about our courses and workshops at [softwarecrafters.io](https://softwarecrafters.io)

## ✨ Features

- **TypeScript 6** - Latest TypeScript with strict mode enabled (`node16` module resolution)
- **ESLint 10** - Flat config system with TypeScript support
- **Prettier 3.8** - Opinionated code formatter
- **Jest 30** - Delightful JavaScript Testing Framework with coverage thresholds
- **Husky 9** - Git hooks made easy (pre-commit & pre-push)
- **lint-staged** - Run linters on git staged files
- **pnpm only** - Package manager enforced via `only-allow` (npm & yarn are blocked)
- **Strict TypeScript** - Comprehensive type checking for better code quality

## 🚀 Quick Start

### Prerequisites

- **Node.js >= 24** (this repo pins `24.11.1` via `.nvmrc` — run `nvm use`)
- **pnpm >= 10** (the only supported package manager — npm & yarn are blocked)

> 💡 The easiest way to get the right pnpm version is [Corepack](https://nodejs.org/api/corepack.html),
> which ships with Node and reads the `packageManager` field automatically:
>
> ```bash
> corepack enable
> ```

### Installation

#### Option 1: Use as GitHub Template (Recommended)

1. Click the **"Use this template"** button at the top of the GitHub repository
2. Create a new repository from this template
3. Clone your new repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

# Use the Node version pinned in .nvmrc
nvm use

# Install dependencies (pnpm only)
pnpm install

# Run tests to verify everything works
pnpm test
```

#### Option 2: Clone Directly

```bash
# Clone this repository
git clone https://github.com/softwarecrafters-io/ts-eslint-prettier-jest.git
cd ts-eslint-prettier-jest

# Remove the original git history (optional)
rm -rf .git
git init

# Use the Node version pinned in .nvmrc
nvm use

# Install dependencies (pnpm only)
pnpm install

# Run tests to verify everything works
pnpm test
```

#### Option 3: Download as ZIP

1. Download the repository as ZIP from GitHub
2. Extract the files
3. Install dependencies:

```bash
cd ts-eslint-prettier-jest
nvm use
pnpm install
pnpm test
```

## 📋 Available Scripts

### Development

```bash
pnpm dev                 # Watch mode for TypeScript compilation
pnpm compile             # Type-check without emitting files
pnpm compile:watch       # Type-check in watch mode
```

### Building

```bash
pnpm build              # Clean and compile TypeScript to JavaScript
pnpm clean              # Remove lib/ and coverage/ directories
```

### Linting & Formatting

```bash
pnpm lint               # Run ESLint
pnpm lint:fix           # Run ESLint and auto-fix issues
pnpm format             # Check formatting with Prettier
pnpm format:check       # Verify code formatting
pnpm format:fix         # Format code with Prettier
pnpm analyze            # Run lint:fix + compile
```

### Testing

```bash
pnpm test               # Run tests with Jest
pnpm test:watch         # Run tests in watch mode
pnpm test:coverage      # Run tests with coverage report
pnpm test:ci            # Run tests in CI mode with coverage
```

### Quality Assurance

```bash
pnpm validate           # Run compile + lint + test (full check)
```


## 📦 Package Manager (pnpm only)

This project **enforces pnpm** as the only allowed package manager. Several layers guarantee it:

- **`preinstall` hook** — `npx only-allow pnpm` blocks `npm install` and `yarn` with a clear error.
- **`packageManager` field** — Corepack pins the exact pnpm version.
- **`engines` + `engine-strict`** — `.npmrc` enforces Node `>=24` and pnpm `>=10`.

If you try to install with npm or yarn you'll see:

```
Use "pnpm install" for installation in this project.
```

To upgrade dependencies use the bundled helper:

```bash
pnpm upgrade            # Interactive upgrade (npm-check-updates)
pnpm upgrade:all        # Upgrade everything to latest
```

## ⚙️ Husky & lint-staged

- **pre-commit**: 
  - Runs ESLint and Prettier on staged TypeScript files (via lint-staged)
  - Runs TypeScript type-checking on the entire project (compile)
  - Blocks commit if there are type errors or unfixable linting issues
- **pre-push**: 
  - Runs full validation (compile + lint + test)
  - Ensures all code is properly typed, linted, and tested before pushing


## 🤝 Contributing

This template is maintained by [Software Crafters](https://softwarecrafters.io). Feel free to use it for your projects and katas!

## 📄 License

MIT © [Softwarecrafters.io](https://softwarecrafters.io)

---

**Happy Coding!** 🚀

For more information about our courses and training programs, visit [softwarecrafters.io](https://softwarecrafters.io)
