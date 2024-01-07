const UIConsts = require("../../../../../../../Lib/Apps/UI/Utils/UIConsts")
const path = require("path")
const fs = require("fs")
const UIAppOperations = require("../UIAppOperations")
const { default: TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

class StartOp extends UIAppOperations{
    constructor(settings, ...args){
        super(settings, args)
        this.uiPath = path.join(this.settings.jempiRootPath, this.settings.jempiAppPath, UIConsts.UI_APP_PATH)
        this.entryPath = path.join(this.settings.jempiRootPath, this.settings.jempiAppPath, UIConsts.ENTRY_FILE_PATH)
        this.outputDir = path.resolve(UIConsts.DATA_PATH, "built-app", "public")
    }

    Run() {
        const config = this.utils.GetWebpackConfig({
            entry: this.entryPath, 
            output: {
                filename: 'bundle.js',
                path: this.outputDir
            },
            resolve: {
                extensions: [".tsx", ".ts", ".js"],
                plugins: [
                  new TsconfigPathsPlugin({
                    configFile: path.resolve(this.uiPath, "tsconfig.json") 
                  }),
                ],
              },  
            context: this.uiPath,
            plugins: [
                new HtmlWebpackPlugin( {
                    template:  path.resolve(this.uiPath, "public", "index.html") ,
                })
            ]
        })

        const server = this.utils.GetWebpackDevServer(this.utils.GetCompilier(config), {
            static: {
                directory: this.outputDir
            },
            devMiddleware: {
                writeToDisk: true,
              },
        })
        
        server.listen(3030, 'localhost', (err) => {
            if (err) {
              console.error(err);
            }
            console.log('UI App [dev] listening on http://localhost:3030');
          });
    }
}

module.exports = StartOp