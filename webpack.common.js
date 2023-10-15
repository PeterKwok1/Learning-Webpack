module.exports = {
    entry: {
        main: "./src/index.js",
        // vendor: "./src/vendor.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: false
                        }
                    }
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: "imgs/[name].[hash][ext]"
                }
            },
        ]
    },
}