const pluginName = "Console";
class ConsolePlugin{
  constructor(name) {
    this.name = name;
  }
  apply(compiler) {
    compiler.hooks.emit.tap(pluginName, (compilation) => {

      // console.log(Object.keys(compilation))
      console.log(1, compilation.namedChunks)
      // for (let item in compilation.namedChunks) {
      //   console.log(item)
      //   const contents = '正在构建';
      //   compilation[item] = {
      //     source: function () {
      //       return contents;
      //     },
      //     size: function () {
      //       return contents.length;
      //     }
      //   }
      // } 
      // compilation.hooks.make.tap({
      //   name: pluginName,
      //   // stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
      //   // additionalAssets: true
      // }, (assets /* 资源文件映射 */) => { 
      //   // Object.keys(assets)
      //   console.log('--------------------------------------')
      //   console.log('--------------------------------------')
      //   console.log('--------------------------------------')
      //   console.log('--------------------------------------')
      //   console.log(Object.keys(assets))
      //   // console.log(assets.chunks)
      // })
      
    })
  }
}
module.exports = ConsolePlugin;