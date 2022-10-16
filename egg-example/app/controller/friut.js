'use strict';

const { Controller } = require('egg');

class FriutController extends Controller {
  async index() {
    const { ctx } = this;
    const friutInfo = ctx.service.friut.find(1);
    ctx.body = friutInfo;
  }
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };


    this.ctx.cookies.set('count', 1111);
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = FriutController;
