module.exports = {
  entry: './carousel/main.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // plugins 可以直接配置在 options 中。
            // pragma 表示将 jsx 编译后的函数名，默认是 React.createElement
            plugins: [["@babel/plugin-transform-react-jsx",{ pragma: 'createElement'}]]
          }
        }
      }
    ]
  },
  mode: 'development',
  optimization: {
    minimize: false
  }
};