# Create a storybook component system

## Start building the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Then it was cleaned, uninstalling react-scripts and removing files up to get the following structure:

```
|- src
| |- index.tsx
|- .gitignore
|- package-lock.json
|- package.json
|- README.md
|- tsconfig.json
```

### Install storybook

```
npx storybook init
```

### Create dist folder

Becouse this project is done with typescript, i've used `tsc` transpiler command to create dist folder and javascript transpiled files.
Every time `tsc` command is executed, it's convenient to delete dist folder, if exists, and create a new one.
To do this, I've used rimraf npm package and execute `rimraf dist/`
To manage css files and to copy them into dist folder, I've used copyfiles npm package
