#!/usr/bin/env node

const { program } = require('commander');
const settings = require("./settings.json");


const HubCommandProcessor = require('./CommandProcessors/Hub/HubCommandProcessor');

program
    .version('1.0.0')


program
.command('hub <op>')
.action((op) => {
    new HubCommandProcessor().Process(settings, op)
});


  
  program.parse(process.argv);
  
// program
// .command('app <op> <appName> [args...]')
// .action((op, appName, args) => {
//     new AppCommandProcessor(op, appName, args)
// });




