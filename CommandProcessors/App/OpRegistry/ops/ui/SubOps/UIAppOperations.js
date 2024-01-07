const UIUtils = require("../../../../../../Lib/Apps/UI/Utils/UIUtilities");
const AppOperations = require("../../../AppOperations");

class UIAppOperations extends AppOperations{
    constructor(settings, ...args){
        super(settings)
        this.utils = UIUtils
        this.runArgs = args
    }
}

module.exports = UIAppOperations