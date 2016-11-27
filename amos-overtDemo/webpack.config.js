module.exports = {
  entry: {
    index: './index.js',
    pstn: './pstn.js',
    container: './container.js',
    performance: './performance.js',
    statictis: './statictis.js',
    mix: './mix.js',
    animate: './animate.js',
    layout: './layout.js'
  },
  output: {
    path: './dist', // 编译到当前目录
    publicPath: '/dist/', // 服务器根路径
    filename: '[name].js' // 编译后的文件名字
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
