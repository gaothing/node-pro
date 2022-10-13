const fs = require('fs');

const mysql = require('../mysql');
const { getUrlValue } = require('../utils');
const router = async (ctx, next) => {
    await mysql.connect()
    console.log(ctx.url)
    if (ctx.url === '/') {
        console.log('kajskdl')
        ctx.type = 'text/html;charset=utf-8'
        ctx.body = `[{name:"kaaka"},
          {name:'kkkk}]` }
    if (ctx.url.indexOf('/json') != -1) {
       const res= await mysql.select()
        console.log(res)
        ctx.body =res;
    }
    if (ctx.url.indexOf('/insert') != -1) {
        const name = getUrlValue('name',ctx.url);
       const res= await mysql.insert(name)
        console.log(res)
        // ctx.type = 'text/plain;charset=utf-8';
        ctx.body =res;
    }
   
}
module.exports = {
  router
}