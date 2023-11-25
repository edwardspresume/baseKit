# SvelteKit Starter Template

This is a starter template for [SvelteKit](https://kit.svelte.dev/) applications. It's configured with a number of tools to help me develop high-quality, maintainable code.

## Features

- 📘 **[TypeScript](https://www.typescriptlang.org/)**: Empowers development with static types.
- 🔧 **[TS Reset](https://www.totaltypescript.com/ts-reset)**: Tightens TypeScript's type checking.
- 🎨 **[PostCSS Preset Env](https://www.npmjs.com/package/postcss-preset-env)**: Facilitates the use of modern CSS features.
- 💨 **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- 🤝 **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** & **[clsx](https://github.com/lukeed/clsx)**: Allows you to merge classes together.
- 🎨 **[Tabler Icons](https://github.com/tabler/tabler-icons)**: Extensive icon library.
- ⏳ **[Svelte Progress](https://www.npmjs.com/package/@bobbymannino/svelte-progress)**: Provides loading indicators.
- 🛠️ **[ESLint](https://eslint.org/)** & **✨ [Prettier](https://prettier.io/)**: Enforces code consistency.
- 🧪 **Testing**: Unit tests with [Vitest](https://vitest.dev/), E2E tests with [Playwright](https://playwright.dev/).
- 📜 **[JSDOM](https://github.com/jsdom/jsdom)**: Simulates the DOM for testing.

## Additions to the default SvelteKit TSConfig

- `noUnusedLocals`: Avoids unused variable declarations.
- `moduleDetection`: Enhanced module detection.
- `noUnusedParameters`: Checks for unused function parameters.
- `verbatimModuleSyntax`: Preserves module syntax upon import.
- `noUncheckedIndexedAccess`: Enforces checks on indexed access.
- `types`: Includes Vitest's global type definitions.

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the favicon in `static`
- [ ] Add sitemap to `static`
