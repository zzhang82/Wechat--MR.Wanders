'use strict';

module.exports = app => {
  // 将 get/post 请求都转给 home.wechat
  app.all('/wechat/:appid', 'home.prehandle', 'home.wechat');
};

