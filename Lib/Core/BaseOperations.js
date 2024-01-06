const ProcessRunner = require("./ProcessRunner")

class BaseOperations {
    constructor(settings){
        this.settings = settings
        this.processRunner = ProcessRunner
    }
}

module.exports = BaseOperations