const inquirer = require('inquirer');
const prompts = require('../prompts');
const argv = require('./argv');  

const getPromptResults = async () => {
  const promptResults = {};

  if (argv.menu) {
    promptResults.isSideBarRequired = argv.menu;
  } else {
    const menuAnswer = await inquirer.prompt(prompts[0]);
    promptResults.isSideBarRequired = menuAnswer.isSideBarRequired;
  }

  if (argv.version) {
    promptResults.version = argv.version;
  } else {
    const versionAnswer = await inquirer.prompt(prompts[1]);
    promptResults.version = versionAnswer.version;
  }

  if (argv.auth) {
    promptResults.authRequired = argv.auth;
  } else {
    const authAnswer = await inquirer.prompt(prompts[2]);
    promptResults.authRequired = authAnswer.authRequired;
  }

  return promptResults;
};

module.exports = getPromptResults;
