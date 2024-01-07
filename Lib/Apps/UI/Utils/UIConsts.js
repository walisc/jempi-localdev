const path =  require("path")
const CoreConsts = require("../../../Core/Utils/Consts")

const UIConsts = {
    UI_APP_PATH: "JeMPI_UI",
    ENTRY_FILE_PATH: "JeMPI_UI/src/index.tsx",
    DATA_PATH: path.join(CoreConsts.DATA_PATH, "ui")
}

module.exports = UIConsts