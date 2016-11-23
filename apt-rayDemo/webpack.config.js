module.exports = {
  entry: {
    index: './demo.js'
  },
  output: {
    publicPath: '/dist/', // 服务器根路径
    path: './dist', // 编译到当前目录
    filename: '[name].js' // 编译后的文件名字
  },
  module: {
    loaders: [
      { test: /\.(png|jpg|gif|ico)$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },
      { test: /\.(woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
