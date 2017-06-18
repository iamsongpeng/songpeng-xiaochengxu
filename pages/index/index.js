const AV = require('../../utils/av-weapp-min');
var WxParse = require('../../common/wxParse/wxParse.js');
var request = require('../../common/request.js');
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
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

