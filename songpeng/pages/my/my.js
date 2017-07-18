var data = require("../../localdata/data_my.js");

Page({
  data: {
    item: data.item,
    list: data.list
  },
  onLoad: function () {
    
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我的',
      path: '/pages/my/my',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
});