const BaseOperations = require("../../../Lib/Core/BaseOperations")
const HubConsts = require("../../../Lib/Hub/Utils/HubConsts")
const HubUtils = require("../../../Lib/Hub/Utils/HubUtilities")

class HubOperations extends BaseOperations{
    constructor(settings){
        super(settings)
        this.utils = HubUtils
        this.composeFilePath = HubConsts.HUB_COMPOSER_FILE_PATH
    }

    IsHubIsRunning(){
        // Assuming at leat one port binding
        return this.processRunner(`docker compose -f ${this.composeFilePath} ps`).toString().includes("0.0.0.0:")
    }
}

module.exports = HubOperations