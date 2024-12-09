#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const getPromptResults = require('./promptResults');  

function copyDirectory(src, dest, templateName) {
  let entries = fs.readdirSync(src, { withFileTypes: true });

  entries.forEach(entry => {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if(!srcPath.includes(`Layout`)) {
      mkdirp.sync(dest);
    }

    if (entry.isDirectory()) {

      if(entry.name === 'Layout') { 
        copyDirectory(srcPath, destPath, templateName);
      }
      if(srcPath.includes('Layout')) {
        if(srcPath.includes(`Layout${path.sep}${templateName}`)) { 
          copyDirectory(srcPath, destPath, templateName);
        }
      } else { 
        copyDirectory(srcPath, destPath, templateName); 
      }
    } else {
      if(srcPath.includes(`Layout${path.sep}${templateName}`)) { 
        destPath = destPath.replace(`${path.sep}Layout${path.sep}${templateName}${path.sep}`, `${path.sep}`);
        mkdirp.sync(path.dirname(destPath));
      }
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

getPromptResults().then((promptResults) => {
  const currentWorkingDirectory = process.cwd();

  let dependencies = {
    "@infineon/infineon-design-system-react": "^29.2.1",
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

