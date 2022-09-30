const Koa = require('koa');
const app=new Koa()

app.use((ctx, next) => {
    console.log(ctx)
    if (ctx.url === '/') {
        ctx.type = 'text/html;charset=utf-8'
        ctx.body = `[{name:"kaaka"},
{name:'kkkk}]` }
})
app.listen(3000,()=>console.log('项目已启动'));