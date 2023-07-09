const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './assets/vue/app.js', // Path to your main.js file
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.js', // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './assets'),
      '@public': path.resolve(__dirname, './public'),
    },
  },
};