/**
 * Este es el archivo de configuracion de webpack
 * con su nombre por defecto
 */

// Requiero a node que incluya este paquete
const path = require('path');    
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    // Cuando se ejecute webpack considerara esto como desarrollo
    // mode: 'production',
    mode: 'development',
    
    optimization: {
        minimizer: [ new OptimizeCssAssetsWebpackPlugin() ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // Aqui empieza la configuracion del webpack
    module: {

        // Las reglas le dicen a webpack que hacer en determinadas ocasiones
        rules: [ {
            
            // Es la condicion que webpack evaluara en los archivos
            test: /\.html$/i, 
            loader: 'html-loader',
            options: {
                attributes: false,
                minimize: false, // Con valor true, se minimiza el html
            }
        }, {
            test: /\.png|svg|jpg|gif$/,
            use: [ {
                loader: 'file-loader',
                options: {
                    esModule: false,
                }
            }]
        }, {
            test: /\.css$/,
            exclude: /styles\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /styles\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        } ]
    },

    // Incluyo los plugins que utilizare
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            // filename: '[name].[hash].css',
            ignoreOrder: false
        }),
        new CopyWebpackPlugin({
            patterns: [ {
                from: 'src/assets',
                to: 'assets/'
            } ]
        }),
    ]
}