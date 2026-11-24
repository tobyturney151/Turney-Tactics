# TurneyTactics

A pixel-art tactics RPG that runs in the browser.

**Play it:** https://tobyturney151.github.io/Turney-Tactics/

## How it's built

- The whole game lives in [`src/TurneyTactics.jsx`](src/TurneyTactics.jsx), a single React component.
- [`src/main.jsx`](src/main.jsx) mounts it on the page; [`src/storage.js`](src/storage.js) saves campaign progress to the browser's localStorage, so a run can be resumed on the same device and browser.
- [Vite](https://vite.dev) bundles it, and Tailwind CSS generates the utility classes it uses.
- Every push to `main` (or the working branch) runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the game and publishes it to GitHub Pages.

## Updating the game

Replace `src/TurneyTactics.jsx` with the new version and push. The site rebuilds and redeploys automatically in a minute or two. The file only needs to `export default` its component and import from `react` and `lucide-react`.

## Running locally

```sh
npm install
npm run dev      # dev server with hot reload
npm run build    # production build in dist/
```
