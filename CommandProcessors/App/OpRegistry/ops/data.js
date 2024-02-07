const AppOperations = require("../AppOperations")
const path = require("path")

class DataOp extends AppOperations{
    constructor(settings,...args){
        super(settings, args)
        this.appName = "bootstrapper"
        this.appDetails = this.utils.GetAppDetails(this.appName)
        this.args = args
        this.appPath = path.join(this.settings.jempiRootPath, this.settings.jempiAppPath, this.appDetails.appPath)
    }

    GetMvnRunCommand(){
        return `${this.GetMavenPath()} ${["compile", 
                "exec:java", `-Dexec.mainClass="${this.appDetails.mainClass}"`, 
                `-Dexec.workingdir="${this.appPath}"`,
                `-Dexec.args="${this.args.join(" ")}"`].join(" ")}`
    }

    Run(args){
        if (!this.IsHubIsRunning()){
            console.warn(`The app '${this.appName}' requires the hub to be up to run. Errors will most likely occur.`)
        }

        const runCommand = this.GetMvnRunCommand()
        this.processRunner(runCommand, {stdio: "inherit", cwd: this.appPath, env: {...this.GetRunEnv(), ...(this.appDetails.appEnv ? this.appDetails.appEnv : {})}})
    }
}

module.exports = DataOp