const path =  require("path")
const CoreConsts = require("../../../Core/Utils/Consts")

const UIConsts = {
    UI_APP_PATH: "JeMPI_UI",
    ENTRY_FILE_PATH: "JeMPI_UI/src/index.tsx",
    BUNDLE_NAME: "bundle.js",
    DATA_PATH: path.join(CoreConsts.DATA_PATH, "ui"),
    PUBLIC_TEMPLATE_FOLDER_PATH: path.join(__dirname, "../Templates/webpack.config.js"),
}

module.exports = UIConsts