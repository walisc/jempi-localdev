const AppUtilities = require("../../../Lib/Apps/Utils/AppUtilities")
const BaseOperations = require("../../../Lib/Core/BaseOperations")
const HubUtils = require("../../../Lib/Hub/Utils/HubUtilities")
const path = require("path")
const os = require("os")

class AppOperations extends BaseOperations{
    constructor(settings, ...args){
        super(settings)
        this.utils = AppUtilities
        this.runArgs = args
    }

    GetMavenPath(){
        return this.settings.mavenHome
    }

    GetRunEnv(){
        return HubUtils.GetHubEnv()
    }
}

module.exports = AppOperations