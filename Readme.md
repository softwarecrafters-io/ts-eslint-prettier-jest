# Template - Testing Sostenible con TypeScript

Plantilla base para practicar las katas del curso o para empezar un proyecto nuevo.

Incluye:
* TypeScript
* Jest
* ESLint
* Prettier
* Husky

## Instrucciones
* `npm install`
* `npm test`

Más información sobre el curso en [testingsostenible.com](https://testingsostenible.com).

![Testing Sostenible con TypeScript](cover.png)

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test