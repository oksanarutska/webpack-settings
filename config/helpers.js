// Plugin that simplifies creation of HTML files to serve your bundles -- https://www.npmjs.com/package/html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const path = require("path");
const stylesExtensions = ['scss', 'sass', 'css'];


module.exports = {
    /**
     * Generates entries for webpack config. Note that [name].html associated js file will be [name].js and [name].scss/css
     */
    generatateEntries: function (rootPath, pagesDir) {
        const pages = fs.readdirSync(path.resolve(rootPath, pagesDir));

        return pages.reduce((prev, page) => {
            const pageDir = path.resolve(rootPath, pagesDir, page)
            const files = [];

            if (fs.existsSync(path.resolve(pageDir, `${page}.js`))) {
                files.push(`${pagesDir}/${page}/${page}.js`);
            } else {
                console.warn("\x1b[33m", `Your page '${page}.html' doesn't have associated js file '${page}.js'.`, '\x1b[0m')
            }

            const stlylePath = stylesExtensions
                .filter(ext => fs.existsSync(path.resolve(pageDir, `${page}.${ext}`)))
                .map(ext => `${pagesDir}/${page}/${page}.${ext}`)
                .find(() => true);

            if (stlylePath) {
                files.push(stlylePath);
            } else {
                console.warn("\x1b[33m", `Your page '${page}.html' doesn't have associates css/scss/sass file.`, '\x1b[0m')
            }

            if (!files.length) {
                return prev;
            }

            return {
                ...prev,
                [page]: files
            }
        }, {})
    },


    /**
     * Generates HtmlWebPackPlugin for each html page in pagesDir
     */
    generateHtmlPlugins: function (rootPath, pagesDir) {
        const pages = fs.readdirSync(path.resolve(rootPath, pagesDir));


        return pages.map(page => {

            if (!fs.existsSync(path.resolve(rootPath, pagesDir, page, `${page}.html`))) {
                const message = `You forgot to add '${page}.html' file in you '${pagesDir}/${page}' folder`;
                console.error("\x1b[41m", message, '\x1b[0m');
                throw new Error(message);
            }


            return new HtmlWebpackPlugin({
                filename: `${page}.html`,
                chunks: [page],
                template: path.resolve(rootPath, `${pagesDir}/${page}/${page}.html`),
                inject: true
            })
        });
    }
}