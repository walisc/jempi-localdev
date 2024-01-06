const OpRegistry = require("./OpRegistry/OpRegistry")

class HubCommandProcessor{

    Process(settings, op){
        if (!(op in OpRegistry)){
            throw new Error(`The operation '${op}' is not supported. Available operations are ${Object.keys(OpRegistry).join(', ')}`)
        }
        new OpRegistry[op](settings).Run()
    }
}

module.exports = HubCommandProcessor