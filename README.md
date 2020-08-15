Ultra refined ESLint config 📜
----
This package provides all-purpose, extensible **ESLint** config for `ES2020+` syntax.  
With a focus on code readability and prevention of mistakes.

## Prerequisites
For Windows machines:
* [Git](https://gitforwindows.org/) with optional Unix tools ✔

> npm config set script-shell "C:\\\Program Files\\\Git\\\bin\\\bash.exe"  
> npm config ls -l | grep shell

## Installation
```shell
npm install eslint-config-ultra-refined --save-dev
```
Install peer dependencies when complete.  
You will see a prompt in the console after installation.  
Or run the following command:
```shell
node -p "require('eslint-config-ultra-refined/package').peerDependencies" | sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev
```
Before **usage** run `npm dedup` to fixate correct package resolutions.

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
