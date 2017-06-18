// markdown.js
// const AV = require('../../../utils/av-weapp-min');
// var WxParse = require('../../../common/wxParse/wxParse.js');
// var request = require('../../../common/request.js');
Page({
  data: {
    demo: 1,
    article: null
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady: function () {
    // 页面渲染完成
    // new AV.Query('Article')
    //   .include('avatar') // avatar is an AV.File
    //   .get('5942ca358d6d810058cb6893')
    //   .then(article => {
    //     this.setData({ article });
    //     WxParse.wxParse('article', 'md', article.attributes.test, this, 5);
    //     console.log(article.attributes.test);
    //   })
    //   .catch(console.error);
  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})