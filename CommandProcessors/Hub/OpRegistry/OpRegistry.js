const DownOp = require("./ops/down");
const StatusOp = require("./ops/status");
const UpOp = require("./ops/up");

const OpRegistry = {
    up: UpOp,
    status: StatusOp,
    down: DownOp

}

module.exports = OpRegistry