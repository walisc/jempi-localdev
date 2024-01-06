const OpRegistry = require("./OpRegistry/OpRegistry")

class AppCommandProcessor{

    Process(settings, op, args){
        if (!(op in OpRegistry)){
            throw new Error(`The operation '${op}' is not supported. Available operations are ${Object.keys(OpRegistry).join(', ')}`)
        }
        new OpRegistry[op](settings, ...args).Run()
    }
}

module.exports = AppCommandProcessor