const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    pages: './src/js/pages.js',
    products: './src/js/products.js',
    calculateDp: './src/js/modules/calculate-dp.js',
    calculateLf: './src/js/modules/calculate-lf.js',
    calculateEs: './src/js/modules/calculate-es.js',
    calculateSp: './src/js/modules/calculate-sp.js',
    style: './src/js/style.js',
  },
  performance: {
    hints: false,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[contenthash].js',
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
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
                quality: 90,
                progressive: true
              }
            }
          }
        ]
      },

      {
        test: require.resolve("jquery"),
        use: [{
          loader: "expose-loader",
          options: "$"
        }]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
      chunks: ['index', 'style'],
    }),
    new HtmlWebpackPlugin({
      filename: 'druk-cyfrowy.html',
      template: './src/template/druk-cyfrowy.html',
      inject: 'body',
      chunks: ['pages', 'calculateDp', 'products', 'style'],
    }),
    new HtmlWebpackPlugin({
      filename: 'druk-wielkoformatowy.html',
      template: './src/template/druk-wielkoformatowy.html',
      inject: 'body',
      chunks: ['pages', 'calculateLf', 'products', 'style'],
    }),
    new HtmlWebpackPlugin({
      filename: 'systemy-wystawiennicze.html',
      template: './src/template/systemy-wystawiennicze.html',
      inject: 'body',
      chunks: ['pages', 'calculateEs', 'products', 'style'],
    }),
    new HtmlWebpackPlugin({
      filename: 'formy-przestrzenne.html',
      template: './src/template/formy-przestrzenne.html',
      inject: 'body',
      chunks: ['pages', 'calculateSp', 'products', 'style'],
    }),
    new HtmlWebpackPlugin({
      filename: 'druk-etykiet.html',
      template: './src/template/druk-etykiet.html',
      inject: 'body',
      chunks: ['pages', 'style'],
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy.html',
      template: './src/template/privacy.html',
      inject: 'body',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'

    }),
    new CopyPlugin({
      patterns: [{
          from: 'src/images',
          to: 'images'
        },
        {
          from: 'src/contact.php'
        }
      ],
    }),
  ],

};