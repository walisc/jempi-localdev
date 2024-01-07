const CoreConsts = require("../../../Core/Utils/Consts");
const path = require("path");

const baseConfig = {
  mode: process.env.NODE_ENV ?? "development",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: path.resolve(CoreConsts.ROOT_PATH, 'node_modules/ts-loader'),
        options: { 
                    compilerOptions: {
                      noEmit:false,
                      outDir: "./dist/",
                    } 
                  }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            },
          },
        ],
      },
    ],
  }
};

module.exports = baseConfig;
