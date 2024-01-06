const HubOperations = require("../HubOperations")

class DownOp extends HubOperations{

    Run(args){
        if (!this.IsHubIsRunning()){
            console.log(`Hub already down`)
            return
        }

        this.processRunner(`docker compose -f ${this.composeFilePath} down`, {stdio: "inherit"})
    }
}

module.exports = DownOp