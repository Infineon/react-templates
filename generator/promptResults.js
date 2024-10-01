const inquirer = require('inquirer');
const prompts = require('../prompts');
const argv = require('./argv');  

const getPromptResults = async () => {
  const promptResults = {};

  if (argv.template) {
    promptResults.templateName = argv.template;
  } else {
    const selectedTemplate = await inquirer.prompt(prompts[0]);
    promptResults.templateName = selectedTemplate.templateName;
  }

  return promptResults;
};

module.exports = getPromptResults;
