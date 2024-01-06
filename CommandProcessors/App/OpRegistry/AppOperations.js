const AppUtilities = require("../../../Lib/Apps/Utils/AppUtilities")
const BaseOperations = require("../../../Lib/Core/BaseOperations")
const HubUtils = require("../../../Lib/Hub/Utils/HubUtilities")

class AppOperations extends BaseOperations{
    constructor(settings, ...args){
        super(settings)
        this.utils = AppUtilities
        this.runArgs = args
    }

    GetRunEnv(){
        return HubUtils.GetHubEnv()
    }
}

module.exports = AppOperations