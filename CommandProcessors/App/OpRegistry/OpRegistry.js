const DataOp = require("./ops/data")
const RunOp = require("./ops/run")
const UiOp = require("./ops/ui/ui")


const OpRegistry = {
    run: RunOp,
    ui: UiOp,
    data: DataOp
}

module.exports = OpRegistry