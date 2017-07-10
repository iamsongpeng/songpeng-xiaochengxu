// article.js
const wemark = require('../../wemark/wemark/wemark');
const AV = require('../../utils/av-weapp-min');
// 测试：需要渲染的Markdown文本
// var md = '# hello, world\n\nI love you, wemark!![songpeng](http://odhng6tv1.bkt.clouddn.com/songpeng.jpg)';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wemark: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求数据
    new AV.Query('Article')
      .get(options.id)
      .then((result) => {
        // console.log(result.attributes);
        this.setData({ article: result.attributes });
        wemark.parse(result.attributes.content, this, {
          // 新版小程序可自适应宽高
          // imageWidth: wx.getSystemInfoSync().windowWidth - 40,
          name: 'wemark'
        })
      })
      .catch(console.error);
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
  
  }
})
