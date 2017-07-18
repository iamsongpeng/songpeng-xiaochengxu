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
    // console.log(options);
    // 判断是 id 还是 content 
    if (options.content) {
      wemark.parse(options.content, this, {
        name: 'wemark'
      })
    } else if (options.id) {
      // 请求数据
      new AV.Query('Article')
        .get(options.id)
        .then((result) => {
          // console.log(result.attributes);
          //this.setData({ article: result.attributes });
          wemark.parse(result.attributes.content, this, {
            // 新版小程序可自适应宽高
            name: 'wemark'
          })
        })
        .catch(console.error);
    } else {
      wemark.parse("# 应用抽风了！请稍后再试", this, {
        name: 'wemark'
      })
    }
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

  }
})
