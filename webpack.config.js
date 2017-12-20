const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.env.NODE_ENV);
// 一句话理解 path和 publicPath的作用！！！！
// path 用来存放打包后文件的输出目录
// publicPath 用来定义静态资源的引用地址
module.exports = {
  cache: true,
  devtool: 'eval',
  entry: {
    index: [
      'react-hot-loader/patch',
            // 开启 React 代码的模块热替换(HMR) 热替换搭配React和webpack实现不刷新页面的情况下对模块的增删改

      'webpack-dev-server/client?http://localhost:3000',
            // 为 webpack-dev-server 的环境打包代码
            // 然后连接到指定服务器域名与端口

      'webpack/hot/only-dev-server',
            // 为热替换(HMR)打包好代码
            // only- 意味着只有成功更新运行代码才会执行热替换(HMR)

      './index.jsx',
            // app的入口文件
    ],
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].js',
        // 输出的打包文件

    path: `${__dirname}/dist/assets/`,
        // 项目输出路径
    publicPath: '/assets/',
        // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
    chunkFilename: '[name].[chunkhash].js',
  },

  context: `${__dirname}/src`,
  module: {
    rules: [
            // loaders是在打包构建过程中用来处理源文件
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader?cacheDirectory', 'eslint-loader',
        ],
        exclude: /^node_modules$/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /^node_modules$/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
        include: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
          'less-loader',
        ],
        exclude: /node_modules/,
      },
      {
                // 匹配.html文件
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href'],
            },
          },
        ],
        exclude: /^node_modules$/,
      },
      {
        test: /favicon\.png$/,
        use: [
          {
                        // 使用file-loader
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
            },
          },
        ],
        exclude: /^node_modules$/,
      },
      {
                // 处理静态资源
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],

  },
  resolve: {
    extensions: ['.jsx', '.js', '.less', '.json'],
        // alias设置别名.引用时的模块名称(自定义):引用文件的真实地址
    alias: {
      '~': `${__dirname}/src`,
    },
  },
  externals: {
        // require(externals对象的key)
    axios: 'axios',
    react: 'React',
    redux: 'Redux',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    'react-router-dom': 'ReactRouterDOM',
    'prop-types': 'PropTypes',
    'babel-polyfill': 'window',
  },
  plugins: [
        // plugins用来扩展webpack功能，对整个构建过程生效
        // 将第三方库单独打包：new插件
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
    new webpack.HotModuleReplacementPlugin(),
        // 全局的模块热替换(HMR)，实现：修改组件代码后自动刷新
    new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息

    new HtmlWebpackPlugin({
      template: './Template/index.html',
      filename: './index.html', // 生成的html存放路径，相对于 path
    }),
        // 生成html文件
  ],
};
