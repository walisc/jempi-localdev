const RunOp = require("./ops/run")
const UiOp = require("./ops/ui/ui")


const OpRegistry = {
    run: RunOp,
    ui: UiOp
}

module.exports = OpRegistry