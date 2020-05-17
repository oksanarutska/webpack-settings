const { pathNames } = require('./config/pathNames');
const { generatateEntries, generateHtmlPlugins } = require('./config/helpers');

const path = require("path");
// File system - search and  read file from folder
const fs = require("fs");
// Plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const autoprefixer = require('autoprefixer');



// Plugin for CSS - https://www.npmjs.com/package/mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugins = generateHtmlPlugins(__dirname, pathNames.pages);
const entries = generatateEntries(__dirname, pathNames.pages);


const config = {
  entry: {
    ...entries
  },
  output: {
    filename: `${pathNames.output.js}/[name].[hash].js`
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
        test: /\.(sass|scss|css)$/,
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
                autoprefixer(),
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
        include: path.resolve(__dirname, pathNames.components),
        use: ["raw-loader"]
      }
    ]
  },
  plugins: [
    ...htmlPlugins,

    new MiniCssExtractPlugin({
      filename: `${pathNames.output.styles}/[name].[hash].css`
    }),
    new CopyWebpackPlugin([
      {
        from: pathNames.fonts,
        to: pathNames.output.fonts
      },
      {
        from: pathNames.favicon,
        to: pathNames.output.favicon
      },
      {
        from: pathNames.images,
        to: pathNames.output.images
      }
    ])
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.plugins.push(new CleanWebpackPlugin());
  }
  return config;
};