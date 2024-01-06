#!/usr/bin/env node

const { program } = require('commander');
const settings = require("./settings.json");


const HubCommandProcessor = require('./CommandProcessors/Hub/HubCommandProcessor');
const AppCommandProcessor = require('./CommandProcessors/App/AppCommandProcessor');

program
    .version('1.0.0')


program
.command('hub <op>')
.action((op) => {
    new HubCommandProcessor().Process(settings, op)
});

  
program
.command('app <op> [args...]')
.action((op, args) => {
    new AppCommandProcessor().Process(settings, op, args)
});
  
  program.parse(process.argv);





