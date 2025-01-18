Ultra refined ESLint shareable config 📜
---
This package provides all-purpose, extensible **[ESLint](https://eslint.org/)** config for `ES2025+` syntax.  
With an emphasis on readability and counterchecks against implicit code flaws.

## Prerequisites

For Windows machines:

* [Git](https://gitforwindows.org/) with Unix tools ☑️

```bash
npm config set script-shell "C:\\\Program Files\\\Git\\\bin\\\bash.exe"  
npm config ls -l | grep shell
```

## Installation

```bash
npm install eslint-config-ultra-refined --save-dev
```

Install peer dependencies manually if needed.  
You will see the prompt in the shell output upon installation.

### Usage

In `eslint.config.js` file:

```javascript
import ultraRefined from 'eslint-config-ultra-refined';

export default [
  {
    ignores: ['dist'], // global ignores
  },
  ...ultraRefined,
  // your modifications
  {
    rules: {
      // your modifications
    },
  },
];
```
