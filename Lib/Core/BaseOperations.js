const HubConsts = require("../Hub/Utils/HubConsts")
const ProcessRunner = require("./ProcessRunner")

class BaseOperations {
    constructor(settings){
        this.settings = settings
        this.processRunner = ProcessRunner
    }

    IsHubIsRunning(){
        // Assuming at leat one port binding
        return this.processRunner(`docker compose -f ${HubConsts.HUB_COMPOSER_FILE_PATH} ps`).toString().includes("0.0.0.0:")
    }
}

module.exports = BaseOperations