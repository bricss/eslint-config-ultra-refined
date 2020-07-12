Ultra refined ESLint config 📜
----
This package provides extensible **ESLint** config for `ES2020+`.

## Installation
```shell
npm install @babel/parser @babel/types babel-eslint eslint eslint-config-ultra-refined --save-dev
```
Before **setup** run `npm dedup` to fixate correct package resolutions.

### Setup
In `package.json` file:
```json
{
  "eslintConfig": {
    "extends": "ultra-refined"
  }
}
```
Or in `.eslintrc*` file:
```json
{
  "extends": "ultra-refined"
}
```
