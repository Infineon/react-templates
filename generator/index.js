#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { consoleLogger } = require("../consoleLogger");
const mkdirp = require('mkdirp');
const getPromptResults = require('./promptResults');  


function copyDirectory(src, dest, auth) {
  mkdirp.sync(dest);
  let entries = fs.readdirSync(src, { withFileTypes: true });
  const appName = path.basename(process.cwd()); 

  entries.forEach(entry => {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.name === '.gitlab-ci.ejs' || entry.name === 'catalog-info.ejs') {
      const template = fs.readFileSync(srcPath, 'utf8');
      const renderedTemplate = ejs.render(template, { appName });

      const baseName = path.basename(entry.name, '.ejs');
      const targetPath = path.join(process.cwd(), `${baseName}.yaml`);

      mkdirp.sync(path.dirname(targetPath));

      fs.writeFileSync(targetPath, renderedTemplate);
      return; 
    }

    if (auth === "No Authentication" && entry.name === 'craco.config.js') {
      return;
    }

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath, auth);
    } else if (path.extname(entry.name).toLowerCase() !== '.ejs') {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

getPromptResults().then((promptResults) => {
  consoleLogger(promptResults);

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
      processEjsTemplates(fullPath, promptResults);
    
    } else if (path.extname(entry.name).toLowerCase() === '.ejs') {
      const template = fs.readFileSync(fullPath, 'utf8');
      const renderedTemplate = ejs.render(template, { promptResults });

      const componentName = path.basename(entry.name, '.ejs' || entry.name.startsWith('.') );
      const targetDir = path.join(process.cwd(), 'src/components', componentName);
      const targetPath = path.join(targetDir, `${componentName}.jsx`);

      mkdirp.sync(targetDir);
      
      fs.writeFileSync(targetPath, renderedTemplate);
    }
  }
}
