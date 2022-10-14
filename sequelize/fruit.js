const { Sequelize } = require('sequelize');
const config = require('./config');
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle:30000
  }
})
const Fruit = sequelize.define('fruit', {
  name: Sequelize.STRING(50),
  price:Sequelize.BIGINT
})
async function init() {
 await Fruit.sync();
}
init()

module.exports = Fruit;