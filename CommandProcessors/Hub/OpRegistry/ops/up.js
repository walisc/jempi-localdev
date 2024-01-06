const HubOperations = require("../HubOperations")

class UpOp extends HubOperations{

    Run(args){
        if (this.IsHubIsRunning()){
            throw new Error(`Hub already running. Please stop it first using 'hub stop'`)
        }

        this.processRunner(`docker compose -f ${this.composeFilePath} up`, {stdio: "inherit"})
    }
}

module.exports = UpOp