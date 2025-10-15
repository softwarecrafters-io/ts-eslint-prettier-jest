# TypeScript Template with ESLint, Prettier & Jest

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9.32-4B32C3.svg)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.6-F7B93E.svg)](https://prettier.io/)
[![Jest](https://img.shields.io/badge/Jest-30.0-C21325.svg)](https://jestjs.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, production-ready TypeScript template with integrated linting, formatting, and testing. Perfect for starting new projects or practicing katas in our Software Craftsmanship courses.

## 📚 About This Template

This template is used in the following courses at [Software Crafters](https://softwarecrafters.io):

- **🧪 Testing Sostenible** - Sustainable Testing
- **🏗️ Diseño Sostenible** - Sustainable Design
- **♻️ Refactoring Sostenible** - Sustainable Refactoring

Learn more about our courses and workshops at [softwarecrafters.io](https://softwarecrafters.io)

## ✨ Features

- **TypeScript 5.8** - Latest TypeScript with strict mode enabled
- **ESLint 9** - Flat config system with TypeScript support
- **Prettier 3.6** - Opinionated code formatter
- **Jest 30** - Delightful JavaScript Testing Framework with coverage thresholds
- **Husky 9** - Git hooks made easy (pre-commit & pre-push)
- **lint-staged** - Run linters on git staged files
- **Strict TypeScript** - Comprehensive type checking for better code quality

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20.12
- npm >= 10.5

### Installation

```bash
# Clone or download this template
git clone <repository-url>

# Install dependencies
npm install

# Run tests to verify everything works
npm test
```

## 📋 Available Scripts

### Development

```bash
npm run dev              # Watch mode for TypeScript compilation
npm run compile          # Type-check without emitting files
npm run compile:watch    # Type-check in watch mode
```

### Building

```bash
npm run build           # Clean and compile TypeScript to JavaScript
npm run clean           # Remove lib/ and coverage/ directories
```

### Linting & Formatting

```bash
npm run lint            # Run ESLint
npm run lint:fix        # Run ESLint and auto-fix issues
npm run format          # Check formatting with Prettier
npm run format:check    # Verify code formatting
npm run format:fix      # Format code with Prettier
npm run analyze         # Run lint:fix + compile
```

### Testing

```bash
npm test                # Run tests with Jest
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Run tests with coverage report
npm run test:ci         # Run tests in CI mode with coverage
```

### Quality Assurance

```bash
npm run validate        # Run compile + lint + test (full check)
```

### Dependencies

```bash
npm run upgrade         # Interactive dependency updates
npm run upgrade:all     # Update all dependencies (non-interactive)
```

## 📁 Project Structure

```
.
├── src/
│   ├── core/           # Application core logic
│   └── tests/          # Test files
├── lib/                # Compiled JavaScript output (generated)
├── coverage/           # Test coverage reports (generated)
├── .husky/             # Git hooks configuration
│   ├── pre-commit      # Runs lint-staged
│   └── pre-push        # Runs tests
├── eslint.config.js    # ESLint configuration (flat config)
├── jest.config.js      # Jest configuration
├── tsconfig.json       # TypeScript configuration
├── .prettierrc         # Prettier configuration
└── package.json        # Project dependencies and scripts
```

## ⚙️ Configuration

### TypeScript

- **Target**: ES2020
- **Strict Mode**: Enabled
- **Source Maps**: Enabled
- **Declaration Files**: Generated (.d.ts)

### ESLint

- TypeScript support with `@typescript-eslint`
- Prettier integration
- No console warnings
- Custom rules in `eslint.config.js`

### Jest

- **Preset**: ts-jest
- **Coverage Thresholds**: 80% (branches, functions, lines, statements)
- **Reporters**: text, lcov, html

### Prettier

- Single quotes
- 120 character line width
- Semicolons enabled
- ES5 trailing commas
- 2 spaces indentation

### Husky & lint-staged

- **pre-commit**: 
  - Runs ESLint and Prettier on staged TypeScript files (via lint-staged)
  - Runs TypeScript type-checking on the entire project (compile)
  - Blocks commit if there are type errors or unfixable linting issues
- **pre-push**: 
  - Runs full validation (compile + lint + test)
  - Ensures all code is properly typed, linted, and tested before pushing

## 🎓 Learning Resources

### Courses

Visit [softwarecrafters.io](https://softwarecrafters.io) to learn more about it.

### Documentation

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [ESLint v9 Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide)

## 🛡️ Security

```bash
npm audit          # Check for vulnerabilities
npm audit fix      # Fix vulnerabilities automatically
```

## 🤝 Contributing

This template is maintained by [Software Crafters](https://softwarecrafters.io). Feel free to use it for your projects and katas!

## 📄 License

MIT © [Softwarecrafters.io](https://softwarecrafters.io)

---

**Happy Coding!** 🚀

For more information about our courses and training programs, visit [softwarecrafters.io](https://softwarecrafters.io)
