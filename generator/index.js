#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const ejs = require('ejs');
const { consoleLogger } = require("../consoleLogger");
const prompts = require('../prompts');

function copyFiles(sourceDir, targetDir) {
  const filesToCreate = fs.readdirSync(path.resolve(__dirname, sourceDir));

  filesToCreate.forEach((file) => {
    const origFilePath = path.resolve(__dirname, sourceDir, file);

    if (fs.lstatSync(origFilePath).isDirectory()) {
      return;
    }

    const contents = fs.readFileSync(origFilePath, 'utf8');
    const writePath = path.resolve(targetDir, file);
    fs.writeFileSync(writePath, contents, 'utf8');
  });
}

inquirer.prompt(prompts).then((promptResults) => {
  consoleLogger(promptResults);

  let dependencies = {
    "@infineon/infineon-design-system-react": "^21.8.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "react-router": "^6.23.1",
    "react-router-dom": "^6.23.1",
  };

  let devDependencies = {
    "@babel/core": "^7.23.5",
    "@babel/eslint-parser": "^7.23.3",
    "@babel/preset-react": "^7.24.1",
    "eslint": "^7.32.0",
    "eslint-plugin-react": "^7.34.1"
  };

  if(promptResults.authRequired) {
    dependencies["@miami/miami"] = "^1.1.0"
    devDependencies["axios"] = "^1.6.4";
    devDependencies["react-toastify"] = "^10.0.5";
    devDependencies["concurrently"]= "^8.2.2";
  }

  const projectPackageJsonPath = path.resolve(process.cwd(), 'package.json'); 
  const projectPackageJson = JSON.parse(fs.readFileSync(projectPackageJsonPath, 'utf8'));

  projectPackageJson.dependencies = { ...projectPackageJson.dependencies, ...dependencies };
  projectPackageJson.devDependencies = { ...projectPackageJson.devDependencies, ...devDependencies };

  const additionalScripts = {
    start: promptResults.authRequired ? "concurrently \"npm run start:dev\" \"npm run start:serve\"" : "react-scripts start",
    "start:dev": "PORT=8080 react-scripts start",
    build: "react-scripts build",
    "test:e2e": "playwright test",
    lint: "eslint --ext .jsx,.js,.cjs,.mjs --fix --ignore-path .gitignore",
    format: "prettier --write src/",
  };

  projectPackageJson.scripts = { ...projectPackageJson.scripts, ...additionalScripts };

  if (promptResults.authRequired) {
    projectPackageJson.scripts["start:serve"] = "docker compose up || echo 'Docker command failed. Please make sure you have Docker installed.'";
  }

  fs.writeFileSync(projectPackageJsonPath, JSON.stringify(projectPackageJson, null, 2));

  if(promptResults.authRequired) {
    copyFiles(path.resolve(__dirname, './templateFiles'), process.cwd());
  }

  const template = fs.readFileSync(path.resolve(__dirname, './templates/src/components/TemplateLayout/templateLayout.ejs'), 'utf8');
  const renderedTemplate = ejs.render(template, { promptResults });
  fs.writeFileSync(path.join(process.cwd(), 'TemplateLayout.jsx'), renderedTemplate);

  copyFiles(path.resolve(__dirname, './templates'), process.cwd());
});
