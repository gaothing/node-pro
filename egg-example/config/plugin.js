'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  view: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
};
