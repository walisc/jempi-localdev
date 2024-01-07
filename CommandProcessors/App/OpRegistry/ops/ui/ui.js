const AppOperations = require("../../AppOperations")
const SubOpsRegistry = require("./SubOps/SubOpsRegistry")

class UiOp extends AppOperations{
    constructor(settings, uiOp, ...args){
        super(settings)
        this.uiOp = uiOp
    }

    Run(){
        if (!(this.uiOp in SubOpsRegistry)){
            throw new Error(`The operation '${this.uiOp}' is not supported for the ui command. Available operations are ${Object.keys(SubOpsRegistry).join(', ')}`)
        }
        new SubOpsRegistry[this.uiOp](this.settings, this.args).Run()
    }
}

module.exports = UiOp