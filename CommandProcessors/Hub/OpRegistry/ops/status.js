const HubOperations = require("../HubOperations")

class StatusOp extends HubOperations{

    Run(args){
        this.processRunner(`docker compose -f ${this.composeFilePath} ps`, {stdio: "inherit"})
    }
}

module.exports = StatusOp