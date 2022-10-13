const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
    console.log(ctx)
    if (ctx.url === '/') {
        ctx.type = 'text/html;charset=utf-8'
        ctx.body = `[{name:"kaaka"},
          {name:'kkkk}]` }
    if (ctx.url.indexOf('/json')!=-1) {
        ctx.body = [
            { name: "kaaka" },
            { name: '22' }
        ];
    }
    
})

app.listen(3000,()=>console.log("loccal:serve connect"));