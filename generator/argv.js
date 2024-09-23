const yargs = require('yargs');

const argv = yargs
  .version(false) 
  .option('menu', {
    alias: 'm',
    description: 'Set the menu type',
    choices: ['Horizontal Menu', 'Vertical Menu'],
    type: 'string',
  })
  .option('version', {
    alias: 'v',
    description: 'Set the initial version of your application',
    type: 'string',
  })
  .option('auth', {
    alias: 'a',
    description: 'Set the auth type required',
    choices: ['No Authentication', 'Authentication using MIAMI (OAuth)'],
    type: 'string',
  })
  .argv;

module.exports = argv;
