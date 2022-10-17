// class Kaka {
//   constructor() {
//     this.list = [];
//     this.ctx = { name: '111' };
//     this.go.bind(this);
//     this.use.bind(this);
//   }
//   use(mid) {
//     this.list.push(mid);
//   }
//   go() {
//     this.ctx = this.list.reduce((pre, cur) => {
//       const ret = cur(pre, 1);
//       return ret.ctx;
//     }, this.ctx);
//     console.log(this.ctx);
//   }

// }
// const instance = new Kaka();
// function fn1(ctx, kk) {
//   ctx.name = '222';
//   return { ctx, kk };
// }
// function fn2(ctx, kk) {
//   console.log('fn2');
//   return { ctx, kk };
// }
// instance.use(fn1);
// instance.use(fn2);
// instance.go();


const url = 'https://www.baaidu.com?name=gaoyanpeng&id=1&id=2&price=123';
const paramsToObject = url => {

  const paramStr = url.split('?');
  const paramArr = paramStr[paramStr.length - 1];
  const params = {};
  paramArr.split('&').forEach(item => {
    let [ key, value ] = item.split('=');
    value = decodeURIComponent(value);
    if (params[key]) {
      params[key] = [ params[key], value ];
    } else {
      params[key] = value;
    }


  });
  return params;

};
// const res = paramsToObject(url);
// console.log({ res });
const template = '我是{{name}}，年龄{{age}}，性别{{sex}}'; const data = {
  name: '姓名',
  age: 18 };

const render = (template, data) => {
  const reg = /\{\{(-w+)\}\}/g;
  const regArr = reg.exec(template);
  console.log(regArr);
};
render(template, data); // 我是姓名，年龄18，性别undefined

