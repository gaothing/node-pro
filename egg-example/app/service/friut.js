const Service = require('egg').Service;
class FriutService extends Service {
  async find(id) {
    const friut = await this.ctx.db.query(
      'select * from friut where id = ?',
      id
    );
    return friut;
  }
}
module.exports = FriutService;
