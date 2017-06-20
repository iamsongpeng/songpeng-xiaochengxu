var base64 = require("../../image/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      headimg: "../../image/kind/diving.png",
      dictum: "大牛的字典里是没有“坚持”二字的，\n他们只是上瘾了。"
    },
    list: [
      {
        pages: {
          imgurl: "",
          title: "新手 No.1",
          content: "建立对学习内容的基本认知",
          url: 'knowledge/knowledge'
        }
      }, {
        pages: {
          imgurl: "",
          title: "新手 No.2",
          content: "拼出学习内容。学习不是登山，而是拼图。因为对于一个全新的学习内容",
          url: 'new/new'
        }
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  }
})