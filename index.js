const Koa = require('koa');
const app = new Koa();
const { router } = require('./router');
app.use(router)

app.listen(3000,()=>console.log("lisent:3000"));