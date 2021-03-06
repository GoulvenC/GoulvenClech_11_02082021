# Kasa

[![Netlify Status](https://api.netlify.com/api/v1/badges/d3b121d4-6665-4f72-8961-92ce3f533732/deploy-status)](https://app.netlify.com/sites/epic-meitner-071d89/deploys)

Kasa is a C2C application for renting apartments. Project 11 of the OpenClassrooms "Front End Developer" course. For this project I'm using [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/) and [React Router](https://reactrouter.com/ ) in a [statically typed](https://fr.wikipedia.org/wiki/Typage_statique) [functional](https://en.wikipedia.org/wiki/Functional_programming) paradigm.

> ⚠️ The project was requested in class components, but I disagree with this choice. To compare, main branch is in functions and a separate branch translates the main components into classes. More details on the [dedicated pull request](https://github.com/GoulvenC/GoulvenClech_11_02082021/pull/1) ! 

**Documentation :**
- [Home page](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki) ([project organisation](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki#project-organisation) | [repository description](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki#project-organisation) | [installation](https://github.com/GoulvenC/GoulvenClech_11_02082021#installation))
- [technical specifications](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Tech-specifications) ([tech stack](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Tech-specifications#technical-stack) | [about TypeScript](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Tech-specifications#my-opinion-on-typescript) | [class or function components](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Tech-specifications#class-or-function-components))
- Pages specifications : [Index](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Page-Index) | [About](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Page-About) | [Housing](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Page-Housing) | [NotFound](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Page-NotFound)
- [API specifications](GoulvenC/GoulvenClech_11_02082021/wiki/API-specification) ([type description](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Tech-specifications#my-opinion-on-typescript) | [mock-up](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki/Tech-specifications#my-opinion-on-typescript))

**Useful links:**
- [Live demo 🌍](https://oc-p11.goulven-clech.dev) 
- [Repository 📖](https://github.com/GoulvenC/GoulvenClech_11_02082021)
- [Documentation 📑](https://github.com/GoulvenC/GoulvenClech_11_02082021/wiki)
- [Figma mock-up 🖼️](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR)

## Installation

Kasa is based on [React](https://reactjs.org/), [React Router](https://reactrouter.com/) and [TypeScript](https://www.typescriptlang.org/). I use the Front End development tool [Vite](https://vitejs.dev/) as well as the package manager [Yarn](https://yarnpkg.com/). To manage styles I use [PostCSS](https://github.com/postcss/postcss) with plugins [TailwindCSS](https://tailwindcss.com/) ([JIT](https://tailwindcss.com/docs/just-in-time-mode)) and [autoprefixer](https://github.com/postcss/autoprefixer). Testing with [Jest](https://jestjs.io) and [TS-Jest](https://github.com/kulshekhar/ts-jest).

1 - Install [Yarn](https://yarnpkg.com/) on your system

2 - Download this project and open the folder

3 - Install the dependencies with `yarn install`

3 - Start [Vite](https://vitejs.dev/) live server with `yarn dev`

4 - Run the tests with `yarn test`. Results can be viewed on the `/coverage/lcov-report/` page.

5 - To obtain a production version do `yarn build`

## License

This project is part of the OpenClassrooms [Front-End Developer](https://openclassrooms.com/fr/paths/314-developpeur-front-end) course. The code is freely reusable, but the images / logo / figma mock-up do not belong to me.

If you are also an OC student, you can freely draw inspiration from my work, but I obviously do not recommend copying parts of it.