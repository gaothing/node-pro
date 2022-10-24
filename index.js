const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFields:200*1024*1024
  }
}))
//mysql
// const { router } = require('./router');
//sequelize
const { router } = require('./router/sequelize');
app.use(router)

app.listen(3000,()=>console.log("lisent:3000"));