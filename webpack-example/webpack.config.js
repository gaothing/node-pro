const path = require('path');
const ConsolePlugin = require('./plugin/console');
module.exports = {
  mode:'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].bundle.js'
  },
  plugins:[new ConsolePlugin({name:'haha'})]
}