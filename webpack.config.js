import webpack from 'webpack'
import autoprefixer from 'autoprefixer'

export default {
  context: __dirname,
  entry: [
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // And then the actual application
    './src/client/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  //try using 'cheap-module-eval-source-map' for a faster recompilation
  //but that can cause some problems with breakpoints while debugging
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        loader: 'url-loader?limit=10000',
        test:   /\.(gif|jpg|png|woff|woff2|eot|ttf|svg|ico)$/
      },
      {
        loader: 'react-hot',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        loader: "babel",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
}
