# JavaScript Bundle Size Demo

A small JavaScript application demonstrating how **code splitting** and **tree shaking** affect production bundle size using Webpack and Chart.js.

This project accompanies my article: [How to Reduce JavaScript Bundle Size: A Practical Guide](https://farhanhalai.com/blog/reduce-javascript-bundle-size).

## What's Covered

- **Baseline:** Static imports that include Chart.js in the initial bundle.
- **Code Splitting:** Dynamic imports that load the chart only when needed.
- **Tree Shaking:** Selective Chart.js imports to reduce unused code.

## Getting Started

Install dependencies:

```bash
npm install
```

Create a production build:

```bash
npm run build
```

Inspect the generated bundles in the `dist/` directory to compare the results.

## Bundle Size Comparison

| Optimization | Initial JS | Deferred Chart.js |
|---|---|---|
| Baseline | 200 KiB | — |
| Code Splitting | 2.61 KiB | ~200 KiB |
| Code Splitting + Tree Shaking | 2.61 KiB | 117 KiB |

*Measurements are from the example builds described in the article. Results may vary depending on configuration and dependencies.*

## Key Takeaway

**Code splitting** changes when JavaScript is loaded, while **tree shaking** helps reduce how much unnecessary JavaScript is included.

For the complete walkthrough, read the [article](https://farhanhalai.com/blog/reduce-javascript-bundle-size).
