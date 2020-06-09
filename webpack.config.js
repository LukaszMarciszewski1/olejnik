const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry:{
     index: './src/js/index.js', 
     subpages: './src/js/pages.js',
    //  calculator: './src/js/modules/calculator.js',
     calculateDp: './src/js/modules/calculate-dp.js',
     calculateLf: './src/js/modules/calculate-lf.js',
     calculateEs: './src/js/modules/calculate-es.js',
     calculateSp: './src/js/modules/calculate-sp.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[contenthash].js',
    },
    module: {
        rules: [{
            // test: /\.m?js$/,
                test: /\.js$/,
                // exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // test: /\.s[ac]ss$/i,
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: ['file-loader']
            },
            // {
            //     test: /\.(png|jpeg|gif|svg|jpg)$/,
            //     loader: 'file-loader',
            //     options:{
            //         name: '[name][contenthash:6].[ext]',
            //         outputPath:'images'
            //     }
            // },
            
            {
              test: /\.(jpg|png|svg|gif|jpeg)$/,
              use: [{
                loader: 'file-loader',
                options: {
                  name: 'images/[name][contenthash:6].[ext]',
                  outputPath: 'images',
                }
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    quality: 70,
                    progressive: true
                  }
                }
              }
              ]
            },
            
            {
                test: require.resolve("jquery"),
                use: [
                  {
                    loader: "expose-loader",
                    options: "$"
                  }
                ]
              },
        ],

    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body',
            chunks: ['index'],
        }),
          new HtmlWebpackPlugin({ 
            filename: 'druk-cyfrowy.html',
            template: './src/template/druk-cyfrowy.html',
            inject: 'body',
            chunks: ['subpages', 'calculateDp'],
          }),
          new HtmlWebpackPlugin({  
            filename: 'druk-wielkoformatowy.html',
            template: './src/template/druk-wielkoformatowy.html',
            inject: 'body',
            chunks: ['subpages', 'calculateLf'],
          }),
          new HtmlWebpackPlugin({  
            filename: 'systemy-wystawiennicze.html',
            template: './src/template/systemy-wystawiennicze.html',
            inject: 'body',
            chunks: ['subpages', 'calculateEs'],
          }),
          new HtmlWebpackPlugin({  
            filename: 'formy-przestrzenne.html',
            template: './src/template/formy-przestrzenne.html',
            inject: 'body',
            chunks: ['subpages', 'calculateSp'],
          }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }),
          new MiniCssExtractPlugin({
              filename: 'css/[name]-[contenthash].css'
          }),
          new CopyPlugin({
            patterns: [
              { from: 'src/images', to: 'images' },
              { from: 'src/contact.php'},
              // { from: 'src/images/img/icons', to: 'images/icons' },
            ],
          }),
      ],
 
};
