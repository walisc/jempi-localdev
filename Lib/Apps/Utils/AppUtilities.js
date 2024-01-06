const AppConsts = require("./AppConsts")

const AppUtilities = {
    GetAppDetails: (appName) => {
        if (!(appName in AppConsts.appDetailsRegistry)){
            throw new Error(`The app '${appName}' is not supported. Available apps are ${Object.keys( AppConsts.appDetailsRegistry).join(", ")}`)
        }
        return  AppConsts.appDetailsRegistry[appName]
    }
}

module.exports = AppUtilities