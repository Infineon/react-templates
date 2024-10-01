#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const getPromptResults = require('./promptResults');  


function copyDirectory(src, dest, templateName) {
  mkdirp.sync(dest);
  let entries = fs.readdirSync(src, { withFileTypes: true });

  entries.forEach(entry => {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      console.log('srcPath', srcPath)

      if(entry.name === 'Layout') { 
        copyDirectory(srcPath, destPath, templateName);
      }
      if(srcPath.includes('Layout')) { 
        console.log('contains layout')
        if(srcPath.includes(`Layout\\${templateName}`)) { 
          copyDirectory(srcPath, destPath, templateName);
        }
      } else { 
        copyDirectory(srcPath, destPath, templateName); 
      }
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

getPromptResults().then((promptResults) => {
    const configString = `export default ${JSON.stringify(promptResults)};`;
    const currentWorkingDirectory = process.cwd();
    const configPath = path.join(currentWorkingDirectory, 'src', 'config.js');
    fs.writeFileSync(configPath, configString); //I don't need this. I can remove it!

  let dependencies = {
    "@infineon/infineon-design-system-react": "^23.4.2",
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

  const projectPackageJsonPath = path.resolve(currentWorkingDirectory, 'package.json'); 
  const projectPackageJson = JSON.parse(fs.readFileSync(projectPackageJsonPath, 'utf8'));
  
  projectPackageJson.dependencies = { ...projectPackageJson.dependencies, ...dependencies };
  projectPackageJson.devDependencies = { ...projectPackageJson.devDependencies, ...devDependencies };

  fs.writeFileSync(projectPackageJsonPath, JSON.stringify(projectPackageJson, null, 2));

  const templatesSrcPath = path.resolve(__dirname, './templates/src');
  const projectSrcPath = path.resolve(currentWorkingDirectory, 'src');
  copyDirectory(templatesSrcPath, projectSrcPath, promptResults.templateName);

  const templatesPath = path.resolve(__dirname, './templates');
  copyDirectory(templatesPath, currentWorkingDirectory);
});

