const yargs = require('yargs');

const argv = yargs
  .option('template', {
    alias: 't',
    description: 'Template selection',
    choices: ['template-01', 'template-02'],
    type: 'string',
  })
  .argv;

module.exports = argv;
