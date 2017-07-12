const AV = require('../../utils/av-weapp-min');
const data = require('data/data');
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    demo: 1,
    item: {
      headimg: "../../image/basketball.png",
      dictum: "这里是可能可以解忧的“杂货铺”，\n我是铺子老板，\n一个在进步的编程运动员——宋鹏"
    },
    audioAction: {
      method: 'pause'
    },
    article: null,
    list: data.list
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady: function () {
    // 页面渲染完成
    new AV.Query('Swiper')
      .descending('594be737fe88c2005f7124ff')
      .find()
      .then((result) => {
        // console.log(result);
        this.setData({ imgUrls: result[0].attributes.imgUrls });
      })
      .catch(console.error);
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

