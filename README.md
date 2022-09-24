Ultra refined ESLint config 📜
---
This package provides all-purpose, extensible **[ESLint](https://eslint.org/)** config for `ES2022+` syntax.  
With an emphasis on code readability and flaws prevention.

## Prerequisites

For Windows machines:

* [Git](https://gitforwindows.org/) with optional Unix toolset ✅

> npm config set script-shell "C:\\\Program Files\\\Git\\\bin\\\bash.exe"  
> npm config ls -l | grep shell

## Installation

```bash
npm install eslint-config-ultra-refined --save-dev
```

Install peer dependencies if needed.  
You will see the prompt in the shell output upon installation.

In case of somewhat issues run `npm dedup` to fixate correct package resolutions.

### Usage

In `package.json` file:

```json
{
  "eslintConfig": {
    "extends": "ultra-refined"
  }
}
```

With `.eslintrc*` file:

```json
{
  "extends": "ultra-refined"
}
```
