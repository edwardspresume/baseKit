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

This will start the server and open the app in a new browser tab, and navigate to: http://localhost:5173/. Changes in the code will automatically rebuild the app and refresh the page.

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
- 🌓 **Theme Toggler**: Supports for light and dark mode themes. Users can easily switch between the two modes.
- 💨 **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- 🤝 **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** & **[clsx](https://github.com/lukeed/clsx)**: Allows you to merge classes together.

### Icons and Progress Indicators

- 🎨 **[Iconify](https://iconify.design/docs/iconify-icon/)**: Extensive SVG icons.
- ⏳ **[Svelte Progress](https://www.npmjs.com/package/@bobbymannino/svelte-progress)**: Loading indicators components.

### Feedback and Communication

- 📧 **[Nodemailer](https://nodemailer.com/about/)**: Allows sending emails directly from the application, enabling feedback and contact features.

### Components and Utilities

- 🔔 **[Toast Notifications](https://github.com/wobsoriano/svelte-sonner)**: Toast notifications for user feedback and alerts.

## Validation and Sanitization

- 📝 **[SvelteKit Superforms](https://superforms.rocks/)**: A comprehensive solution for server and client validation, and client-side display of forms.
- 🛡️ **[Zod](https://github.com/colinhacks/zod)**: TypeScript-first schema validation with static type inference.
- 🧼 **[DOMPurify](https://github.com/cure53/DOMPurify)**: Sanitizes HTML and prevents XSS attacks.

### Code Quality and Testing

- 🗑️ **[Knip](https://www.npmjs.com/package/knip)**: Finds unused files, dependencies, and exports in projects.
- 🛠️ **[ESLint](https://eslint.org/)** & **✨ [Prettier](https://prettier.io/)**: Code quality tools.
- 🧪 **Testing**: Unit tests with [Vitest](https://vitest.dev/), E2E tests with [Playwright](https://playwright.dev/).
- Component tests with [Testing Library for Svelte](https://testing-library.com/docs/svelte-testing-library/intro).
- 📜 **[JSDOM](https://github.com/jsdom/jsdom)**: Simulates the DOM for testing.

### Plugins

- **[@sveltejs/enhanced-img](https://www.npmjs.com/package/@sveltejs/enhanced-img)**: Experimental image optimization.
- **[vite-plugin-kit-routes](https://www.npmjs.com/package/vite-plugin-kit-routes)**: Automatically updates route references in SvelteKit projects.
-

## Additions to the default SvelteKit TSConfig

- `noUnusedLocals`: Avoids unused variable declarations.
- `moduleDetection`: Enhanced module detection.
- `noUnusedParameters`: Checks for unused function parameters.
- `verbatimModuleSyntax`: Preserves module syntax upon import.
- `noUncheckedIndexedAccess`: Enforces checks on indexed access.
- `types`: Includes Vitest's global type definitions.
- `noImplicitReturns`: Ensures all code paths in a function return a value.
- `exactOptionalPropertyTypes`: Treats optional property types as exact, not allowing `undefined` when not specified.
- `noImplicitOverride`: Requires method overrides to be explicitly marked with `override`.
- `noPropertyAccessFromIndexSignature`: Requires that properties accessed using an index signature are explicitly declared.

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the favicon in `static` dir
- [ ] Add sitemap to `static` dir
- [ ] Update `README.md`
- [ ] Update project name in `package.json`
- [ ] Add your email information to `.env` under `SECRET_GMAIL_PASS` and `SECRET_GMAIL_USERNAME` for Nodemailer configuration

## Contributing

I welcome contributions to this project! Here are some ways you can contribute:

- **Issues**: Feel free to open an issue if you find a bug or want to suggest a feature. Please provide as much context as possible.
- **Pull Requests**: If you're able to fix an issue or implement a feature, I'd love to see a pull request. Please ensure your code follows the existing style for this project.

## License

This project is licensed under the MIT License. This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, under the conditions that you include the original copyright notice and disclaimers in any copies of the software or substantial portions of it. For more details, please see the [LICENSE](LICENSE) file.
