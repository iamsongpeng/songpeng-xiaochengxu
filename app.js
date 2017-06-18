//app.js
const AV = require('./utils/av-weapp-min');
// LeanCloud 应用的 ID 和 Key
AV.init({
  appId: 'I0DdHf3RvULpcNo9yHMqOiVj-gzGzoHsz',
  appKey: 'ky4DJugyBl5MCEKLLt7pTgg4',
});

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})