const Koa = require('koa');
const app = new Koa();
//mysql
// const { router } = require('./router');
//sequelize
const {router}=require('./router/sequelize')
app.use(router)

app.listen(3000,()=>console.log("lisent:3000"));