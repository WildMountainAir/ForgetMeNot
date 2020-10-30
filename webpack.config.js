module.exports = {
  entry: '/client/src/index.jsx',
  resolve: {extensions: ['.js', '.jsx']},
  output: {
    path: __dirname+ '/client/dist/',
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    inline: false,
    contentBase: '/client/dist',
  },
  // module: {
  //   loaders: [
  //     {
  //       test: /\.jsx?$/,
  //       exclude: /(node_modules)/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['es2015', 'react'],
  //       },
  //     },
  //   ],
  // },

};
