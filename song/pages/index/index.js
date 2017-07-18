const AV = require('../../utils/av-weapp-min');
var data = require("../../localdata/data_index.js");

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    imgUrls: data.swiper,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    demo: 1,
    item: data.item,
    list: data.list
    //list: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady: function () {
    // 页面渲染完成
    /* new AV.Query('Index')
      .descending('5968eec961ff4b006cf93cbe')
      .find()
      .then((result) => {
        console.log(result);
        this.setData({ imgUrls: result[0].attributes.swiper });
        this.setData({ list: result[0].attributes.list });
      })
      .catch(console.error); */
  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '宋鹏首页',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  inputTyping: function (e) {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})

