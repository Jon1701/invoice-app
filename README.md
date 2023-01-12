# Next.js Application Template

## Status

`Active`

## Project Description

Template repository to quickly start developing Next.js and TypeScript applications.

## Prerequisites

- [Node.js v18.13.0 LTS](https://nodejs.org/) via [Node Version Manager](https://github.com/nvm-sh/nvm)
  - Ensure that [Deeper Shell Integration](https://github.com/nvm-sh/nvm#deeper-shell-integration) is set up
- [GNU Make](https://www.gnu.org/software/make/)
- [Visual Studio Code](https://code.visualstudio.com)
  - [ESLint](https://open-vsx.org/extension/dbaeumer/vscode-eslint) Extension
  - [Prettier - Code Formatter](https://open-vsx.org/extension/esbenp/prettier-vscode) Extension
  - [Stylelint](https://open-vsx.org/extension/stylelint/vscode-stylelint) Extension

## Project Folder Structure

```
|
├── __tests__/                      # Tests only for Pages
|       └── pages/                  # Tests only for Pages
|             └── __snapshots__/    # Generated snapshots
|
├── .next/                          # Build Folder
├── .storybook/                     # Storybook Configuration Files
├── .vscode/
|       └── settings.json           # VSCode Settings
├── components/                     # Reusable Components
├── coverage/                       # Jest Code Coverage Reports
├── node_modules/                   # Node Dependencies Folder
├── pages/                          # Next.js Pages
├── public/                         # Public Assets
├── stories/                        # Storybook Stories for Pages
|     └── pages/                    # Storybook Stories for Pages
|
├── .eslintrc.json                  # ESLint Configuration File
├── .gitignore                      # Files/Folders ignored by Git
├── .npmrc                          # npm Configuration File
├── .prettierignore                 # Files/Folders ignored by Prettier
├── jest.config.ts                  # Jest Configuration File
├── Makefile                        # Contains build targets
├── next-env.d.ts                   # Registers Next.js Types with TS Compiler
├── package-lock.json               # Dependency tree.
├── package.json                    # Project metadata, lists dependencies
├── prettier.config.js              # Prettier Configuration File
├── README.md                       # Repository documentation
├── stylelint.config.js             # Stylelint Configuration File
├── tsconfig.json                   # TypeScript Configuration File
└── tsconfig.tsbuildinfo            # Incremental Compilation Information

```

## Commands

The following `make` commands are available:

- `make install` to install project dependencies
  - `make install-node-modules` to install Node.js dependencies
- `make lint` to run all linters
  - `make run-eslint` to run ESLint
  - `make run-prettier` to run Prettier
  - `make run-stylelint` to run Stylelint
- `make run-storybook` to run Storybook
- `make dev` to start the development server
- `make staging` to start the staging server
- `make build` to create a production build
- `make test` to run all tests
- `make disable-nextjs-telemetry` to disable Next.js telemetry
