# Webpack 5 React TypeScript Starter

Simple Webpack 5 React TypeScript Starter. It contains:
- [x] React 18 (v18.2.0)
- [x] Latest Webpack 5 (v5.75.0) and Webpack Dev Server 4 (v4.11.1) with Scope Hoisting enabled
- [x] TypeScript 4 (v4.8.4)
- [x] Babel 7
- [x] ECMAScript 6+ and JSX support
- [x] [Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
- [x] Production config
- [x] Export separate vendor and runtime files
- [x] Sass/SCSS support
- [x] Separate CSS stylesheets generation
- [x] ES6 linting with continuous linting on file change
- [x] Stylelint
- [x] Prettier
- [x] Linting files and commit messages on commit
- [x] SVG and image files support
- [x] Commitizen
- [x] Webpack Bundle Analyzer

## Prerequisites

* [Node](https://nodejs.org/) (Make sure you have the node 12+ installed)

## Getting Started

1. Clone the repository `gh repo clone piotrlewandowski/webpack-5-react-typescript-starter` (or if you're not using GitHub CLI: `git clone git@github.com:piotrlewandowski/webpack-5-react-typescript-starter.git`)
2. If you're using NVM run `nvm use` inside project directory to use node version set in `.nvmrc` file
3. Run `yarn install` to install all the dependencies
4. To begin development task, run `yarn start`
5. Open [http://localhost:8080](http://localhost:8080)

## Available commands

- `yarn clean` - delete the `dist` folder
- `yarn start` - start the dev server and watch for changes
- `yarn build` - create a production ready build in `dist` folder
- `yarn profile` - generate interactive treemap visualization of the contents of the bundle
- `yarn eslint:check` - execute eslint check
- `yarn eslint:fix` - execute eslint check and automatically fix problems
- `yarn stylelint:check` - execute stylelint check
- `yarn stylelint:fix` - execute stylelint check and automatically fix problems
