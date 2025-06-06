# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Install React router

```bash
npm i react-router
```

## Install Tailwind

1. Install tailwindcss and @tailwindcss/vite via npm.
```bash
npm install tailwindcss @tailwindcss/vite
```

2. Add the @tailwindcss/vite plugin to your Vite configuration.
```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

3. Add an @import to your CSS file that imports Tailwind CSS.
```css
@import "tailwindcss";
```

## Install DaisyUI

1. Install daisyUI as a Node package:
```bash
npm i -D daisyui@latest
```
2. Add daisyUI to app.css:
```css
@import "tailwindcss";
@plugin "daisyui";
```

## Install React Redux
```bash
npm install react-redux @reduxjs/toolkit
```
