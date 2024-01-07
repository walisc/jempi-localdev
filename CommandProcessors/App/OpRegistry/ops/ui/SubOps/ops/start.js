const UIConsts = require("../../../../../../../Lib/Apps/UI/Utils/UIConsts")
const HubUtils = require("../../../../../../../Lib/Hub/Utils/HubUtilities")
const path = require("path")
const fs = require("fs")
const fsExtra = require("fs-extra")
const UIAppOperations = require("../UIAppOperations")
const { default: TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

class StartOp extends UIAppOperations{
    constructor(settings, ...args){
        super(settings, args)
        this.uiPath = path.join(this.settings.jempiRootPath, this.settings.jempiAppPath, UIConsts.UI_APP_PATH)
        this.entryPath = path.join(this.settings.jempiRootPath, this.settings.jempiAppPath, UIConsts.ENTRY_FILE_PATH)
        this.outputDir = path.resolve(UIConsts.DATA_PATH, "built-app", "public")
        this.bundleName = UIConsts.BUNDLE_NAME
    }

    Run() {
        const config = this.utils.GetWebpackConfig({
            entry: this.entryPath, 
            output: {
                filename: this.bundleName,
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
                {
                    apply: (compiler) => {
                        let firstEmitDone = false;
                        const replacer = (path, replaceDic, startContent, endContent, outPath=null) => {
                            let content = fs.readFileSync(path).toString()
                            for (const [key, value] of Object.entries(replaceDic)){
                                content = content.replaceAll(`${startContent}${key}${endContent}`, value)
                            }
                            fs.writeFileSync(outPath ?? path, content)
                        }

                        const addContent = (path, location, extraContent) => {
                            let content = fs.readFileSync(path).toString().split(location)
                            fs.writeFileSync(path, [content[0], location, extraContent, content[1]].join(""))
                        }

                        compiler.hooks.afterEmit.tap('MyCustomPlugin', (compilation) => {
                            if (!firstEmitDone){
                                fsExtra.copySync(path.resolve(this.uiPath, "public"),  path.resolve(this.outputDir) )

                                replacer(path.resolve(this.outputDir, "index.html"), 
                                                    { PUBLIC_URL: "http://localhost:3030" }, '%', '%')

                                addContent(path.resolve(this.outputDir, "index.html"), "</title>", `<script defer src="${this.bundleName}"></script>`)
    
                                replacer(path.resolve(this.outputDir, "config-template.json"), 
                                            { ...HubUtils.GetHubEnv(), ...this.utils.GetUiEnv() }, "${", "}", 
                                            path.resolve(this.outputDir,  "config.json"))
                                firstEmitDone = true
                            }
                        
                        });
                      },
                }
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