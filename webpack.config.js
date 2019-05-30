const webpack = require('webpack');
const pkg = require('./package.json');
const path = require('path');
const libraryName = pkg.name;
module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.js',
        library: libraryName,
        libraryTarget: 'commonjs2',
        publicPath: '/dist/'
    },
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
            }
        ]
    },
    // resolve: {
    //     alias: {
    //         'react': path.resolve(__dirname, './node_modules/react'),
    //         'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    //         'react-redux': path.resolve(__dirname, './node_modules/react-redux'),
    //         'redux': path.resolve(__dirname, './node_modules/redux')
    //     }
    // },
    externals: {
        // Don't bundle react or react-dom
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
            umd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom',
        },
        "react-redux": {
            commonjs: "react-redux",
            commonjs2: "react-redux",
        },
        "redux": {
            commonjs: "redux",
            commonjs2: "redux",
        }
    }
};
