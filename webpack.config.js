const path = require("path");
// File system - search and  read file from folder
const fs = require("fs");
// Plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// Plugin that simplifies creation of HTML files to serve your bundles -- https://www.npmjs.com/package/html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Plugin for CSS - https://www.npmjs.com/package/mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false
    });
  });
}

const htmlPlugins = generateHtmlPlugins("./src/html/pages");

const config = {
  entry: ["./src/js/index.js", "./src/assets/style/style.scss", "./src/assets/style/page1.scss"],
  output: {
    filename: "./js/bundle.js"
  },
  devtool: "source-map",
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, "src/assets/style"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: () => [
                require("cssnano")({
                  preset: [
                    "default",
                    {
                      discardComments: {
                        removeAll: true
                      }
                    }
                  ]
                })
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "src/html/components"),
        use: ["raw-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.bundle.css"
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/assets/fonts",
        to: "./fonts"
      },
      {
        from: "./src/assets/favicon",
        to: "./favicon"
      },
      {
        from: "./src/assets/img",
        to: "./img"
      }
    ])
  ].concat(htmlPlugins)
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.plugins.push(new CleanWebpackPlugin());
  }
  return config;
};