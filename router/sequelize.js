

const fruit = require('../sequelize/fruit');
const { getUrlValue } = require('../utils');

const fs = require('fs');
const router = async (ctx, next) => {
  //查
  if (ctx.url === '/') {
    const rows = await fruit.findAll({ attributes: ['name', 'id', 'price'] });
    console.log(rows)
    ctx.type = 'text/html;charset=utf-8'
    ctx.body = rows;
  }
//增
    if (ctx.url.indexOf('/insert') != -1) {
      const name = getUrlValue('name', ctx.url);
      const price = getUrlValue('price', ctx.url);
      await fruit.create({
        name,price
      })
      const rows = await fruit.findAll({ attributes: ['name', 'id', 'price'] });
      ctx.body =rows;
    }
  //改
    if (ctx.url.indexOf('/update') != -1) {
      const id = getUrlValue('id', ctx.url);
      const price = getUrlValue('price', ctx.url);
      await fruit.update(
       { price },
       {where:{id}}
      )
      const rows = await fruit.findAll({ attributes: ['name', 'id', 'price'] });
      ctx.body =rows;
    }
  //删
    if (ctx.url.indexOf('/delete') != -1) {
      const id = getUrlValue('id', ctx.url);
     await fruit.destroy({where:{id} });
      const rows = await fruit.findAll({ attributes: ['name', 'id', 'price'] });
      ctx.body =rows;
    }
  if (ctx.url.indexOf('/upload') != -1) {
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return ctx.body = "上传成功！";
  }
   
}
module.exports = {
  router
}