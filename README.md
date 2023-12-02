# SvelteKit Starter Template

This starter template is designed for developers looking to jumpstart their [SvelteKit](https://kit.svelte.dev/) projects. It comes pre-configured with a suite of tools in aim to enforce best practices and ensure high-quality, maintainable code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have `pnpm` installed on your system for efficient package management. For installation instructions, visit the [official pnpm installation guide](https://pnpm.io/installation).

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

## Features

### Language and Typing

- 📘 **[TypeScript](https://www.typescriptlang.org/)**: Static types for JavaScript.
- 🔧 **[TS Reset](https://www.totaltypescript.com/ts-reset)**: Improved TypeScript type checking.

### Styling and UI

- 🎨 **[PostCSS Preset Env](https://www.npmjs.com/package/postcss-preset-env)**: Facilitates the use of modern CSS features.
- 🧩 **[Shadcn-svelte](https://www.shadcn-svelte.com/)**: Accessible and customizable component library.
- 💨 **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- 🤝 **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** & **[clsx](https://github.com/lukeed/clsx)**: Allows you to merge classes together.

### Icons and Progress Indicators

- 🎨 **[Iconify](https://iconify.design/docs/iconify-icon/)**: Extensive SVG icons.
- ⏳ **[Svelte Progress](https://www.npmjs.com/package/@bobbymannino/svelte-progress)**: Loading indicators components.

## Validation and Sanitization

- 📝 **[SvelteKit Superforms](https://github.com/janosh/sveltekit-superforms)**: A comprehensive solution for server and client validation, and client-side display of forms.
- 🛡️ **[Zod](https://github.com/colinhacks/zod)**: TypeScript-first schema validation with static type inference.
- 🧼 **[DOMPurify](https://github.com/cure53/DOMPurify)**: Sanitizes HTML and prevents XSS attacks.

### Code Quality and Testing

- 🛠️ **[ESLint](https://eslint.org/)** & **✨ [Prettier](https://prettier.io/)**: Code quality tools.
- 🧪 **Testing**: Unit tests with [Vitest](https://vitest.dev/), E2E tests with [Playwright](https://playwright.dev/).
- Component tests with [Testing Library for Svelte](https://testing-library.com/docs/svelte-testing-library/intro).
- 📜 **[JSDOM](https://github.com/jsdom/jsdom)**: Simulates the DOM for testing.

### Plugins

- **[@sveltejs/enhanced-img](https://www.npmjs.com/package/@sveltejs/enhanced-img)**: Experimental image optimization.

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
- [ ] Update `README.md`
- [ ] Update project name in `package.json`
