#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const ejs = require('ejs');
const { consoleLogger } = require("../consoleLogger");
const prompts = require('../prompts');
const mkdirp = require('mkdirp');

// Updated function to copy directories and their contents
function copyDirectory(src, dest, auth) {
  mkdirp.sync(dest);
  let entries = fs.readdirSync(src, { withFileTypes: true });

  entries.forEach(entry => {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if(auth === "No Authentication") {

      if(entry.name === 'craco.config.js') { 
        return;
      }
    }

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else if (path.extname(entry.name).toLowerCase() !== '.ejs' || entry.name.startsWith('.') ) {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

inquirer.prompt(prompts).then((promptResults) => {
  consoleLogger(promptResults);

    // This is for the other approach where I pass the prompResults to jsx.
    const configString = `export default ${JSON.stringify(promptResults)};`;
    const configPath = path.join(process.cwd(), 'src', 'config.js');
    fs.writeFileSync(configPath, configString);


  let dependencies = {
    "@infineon/infineon-design-system-react": "^23.4.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "react-router": "^6.23.1",
    "react-router-dom": "^6.23.1",
    "sass": "^1.77.6",
  };

  let devDependencies = {
    "@babel/core": "^7.23.5",
    "@babel/eslint-parser": "^7.23.3",
    "@babel/preset-react": "^7.24.1",
    "eslint": "^8.0.0",
    "eslint-config-react-app": "^7.0.1",
    "eslint-plugin-react": "^7.34.1"
  };

  if(promptResults.authRequired !== "No Authentication") {
    dependencies["@miami/miami"] = "^1.1.0";
    dependencies["craco"] = "^0.0.3";
    devDependencies["axios"] = "^1.6.4";
    devDependencies["react-toastify"] = "^10.0.5";
    devDependencies["concurrently"]= "^8.2.2";
  }

  const projectPackageJsonPath = path.resolve(process.cwd(), 'package.json'); 
  const projectPackageJson = JSON.parse(fs.readFileSync(projectPackageJsonPath, 'utf8'));
  
  projectPackageJson.dependencies = { ...projectPackageJson.dependencies, ...dependencies };
  projectPackageJson.devDependencies = { ...projectPackageJson.devDependencies, ...devDependencies };

  const additionalScripts = {
    start: promptResults.authRequired !== "No Authentication" ? "concurrently \"npm run start:dev\" \"npm run start:serve\"" : "react-scripts start",
    build: promptResults.authRequired !== "No Authentication" ? "craco build" : "react-scripts build",
    "test:e2e": "playwright test",
    lint: "eslint --ext .jsx,.js,.cjs,.mjs --fix --ignore-path .gitignore",
    format: "prettier --write src/",
  };

  if (promptResults.authRequired !== "No Authentication") {
    additionalScripts["start:dev"] = "set PORT=8080 && craco start";
    additionalScripts["start:serve"] = "docker compose up || echo 'Docker command failed. Please make sure you have Docker installed.'";
  }

  projectPackageJson.scripts = { ...projectPackageJson.scripts, ...additionalScripts };

  fs.writeFileSync(projectPackageJsonPath, JSON.stringify(projectPackageJson, null, 2));

  const templatesSrcPath = path.resolve(__dirname, './templates/src');
  const projectSrcPath = path.resolve(process.cwd(), 'src');
  copyDirectory(templatesSrcPath, projectSrcPath);

  const templateFilesPath = path.resolve(__dirname, './templateFiles');
  const projectRootPath = process.cwd();
  copyDirectory(templateFilesPath, projectRootPath);

  const templatesPath = path.resolve(__dirname, './templates');
  copyDirectory(templatesPath, projectRootPath, promptResults.authRequired);

  const componentsPath = path.resolve(__dirname, 'templates/src/components');
  processEjsTemplates(componentsPath, promptResults);

});


function processEjsTemplates(srcComponentsPath, promptResults) {

  const entries = fs.readdirSync(srcComponentsPath, { withFileTypes: true });

  for (let entry of entries) {
    const fullPath = path.join(srcComponentsPath, entry.name);

    if (entry.isDirectory()) {
      // Recursively process subdirectories
   
      processEjsTemplates(fullPath, promptResults);
    
    } else if (path.extname(entry.name).toLowerCase() === '.ejs') {
      // If the entry is an .ejs file
 
      const template = fs.readFileSync(fullPath, 'utf8');
      const renderedTemplate = ejs.render(template, { promptResults });

      // Get the base name of the template without the extension
      const componentName = path.basename(entry.name, '.ejs');
      const targetDir = path.join(process.cwd(), 'src/components', componentName);
      const targetPath = path.join(targetDir, `${componentName}.jsx`);

      mkdirp.sync(targetDir);
      
      fs.writeFileSync(targetPath, renderedTemplate);
    
    }
  }
}
