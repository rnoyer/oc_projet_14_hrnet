# HRnet
Welcome to HRnet! This is our company's internal application to create and view employee records.

## Launch the project

```bash
npm run dev
```


# React router project init steps
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
