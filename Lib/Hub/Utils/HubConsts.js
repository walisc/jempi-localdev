const path = require("path")
const CoreConsts = require("../../Core/Utils/Consts")

const HubConsts = {
    HUB_COMPOSER_FILE_PATH: path.join(__dirname, "../docker-compose.yml"),
    DATA_PATH: path.join(CoreConsts.DATA_PATH, "hubs")
}

module.exports = HubConsts