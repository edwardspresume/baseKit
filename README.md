# SvelteKit Starter Template

This is a starter template for [SvelteKit](https://kit.svelte.dev/) applications. It's configured with a number of tools to help me develop high-quality, maintainable code.

## Features

- 📘 **[TypeScript](https://www.typescriptlang.org/)**: Empowers development with static types.
- 🔧 **[TS Reset](https://www.totaltypescript.com/ts-reset)**: Tightens TypeScript's type checking.
- 🎨 **[PostCSS Preset Env](https://www.npmjs.com/package/postcss-preset-env)**: Facilitates the use of modern CSS features.
- 💨 **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- 🤝 **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** & **[clsx](https://github.com/lukeed/clsx)**: Allows you to merge classes together.
- 🎨 **[Iconify](https://iconify.design/docs/iconify-icon/)**: Extensive icon library.
- ⏳ **[Svelte Progress](https://www.npmjs.com/package/@bobbymannino/svelte-progress)**: Provides loading indicators.
- 🛠️ **[ESLint](https://eslint.org/)** & **✨ [Prettier](https://prettier.io/)**: Enforces code consistency.
- 🧪 **Testing**: Unit tests with [Vitest](https://vitest.dev/), E2E tests with [Playwright](https://playwright.dev/).
- 📜 **[JSDOM](https://github.com/jsdom/jsdom)**: Simulates the DOM for testing.

## Plugins

- **[@sveltejs/enhanced-img](https://www.npmjs.com/package/@sveltejs/enhanced-img)**: Experimental Vite plugin which runs a Svelte preprocessor to locate images and then transform them at build-time.

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

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have `pnpm` installed on your system. If you don't have `pnpm` installed, you can install it by running:

```bash
npm install -g pnpm
```

### Installation

To install the dependencies, run the following command:

```bash
pnpm install
```

### Development

To start the development server, run:

```bash
pnpm dev
```

This will start the server and open the app in a new browser tab by visiting http://localhost:5173/. Changes in the code will automatically rebuild the app and refresh the page.

### Build

To build the application for production, use:

```bash
pnpm build
```
