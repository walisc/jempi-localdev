const AppOperations = require("../AppOperations")
const path = require("path")

class RunOp extends AppOperations{
    constructor(settings, appName, ...args){
        super(settings, [appName, args])
        this.appName = appName
        this.appDetails = this.utils.GetAppDetails(appName)
        this.args = args
        this.appPath = path.join(this.settings.jempiRootPath, this.settings.jempiAppPath, this.appDetails.appPath)
    }

    GetMvnRunCommand(){
        return `mvn ${["compile", 
                        "exec:java", `-Dexec.mainClass="${this.appDetails.mainClass}"`, 
                        `-Dexec.workingdir="${this.appPath}"`,
                        `-Dexec.args="${this.args.join(" ")}"`].join(" ")}`
    }

    Run(args){
        if (!this.IsHubIsRunning()){
            console.warn(`The app '${this.appName}' requires the hub to be up to run. Errors will most likely occur.`)
        }

        const runCommand = this.GetMvnRunCommand()
        console.log(`Running app start command '${runCommand}'`)
        this.processRunner(runCommand, {stdio: "inherit", cwd: this.appPath, env: {...this.GetRunEnv(), ...(this.appDetails.appEnv ? this.appDetails.appEnv : {})}})
    }
}

module.exports = RunOp