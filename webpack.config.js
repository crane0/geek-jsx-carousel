module.exports = {
  entry: './carousel/main2.js',
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
      },
      // {
      //   test: /\.view$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: require.resolve('./sfc/my-loader.js')
      //   }
      // }
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'css-loader',
      //   }
      // },
      // 自己的 loader
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('./carousel/css-loader.js')
        }
      },
    ]
  },
  mode: 'development',
  optimization: {
    minimize: false
  }
};