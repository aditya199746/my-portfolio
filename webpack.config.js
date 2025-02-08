const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "development | production",
    devServer: {
        port: 3000, // Your portfolio app runs on port 3000
    },
    output: {
        publicPath: "auto",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "portfolio",
            remotes: {
                // mergeSort: "mergeSort@https://aditya199746.github.io/mergeSort/remoteEntry.js",
                // insertionSort: "insertionSort@https://aditya199746.github.io/InsertionSort/remoteEntry.js",
            },
            shared: {
                react: { singleton: true, requiredVersion: "^18.0.0" },
                "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
