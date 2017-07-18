//app.js
const AV = require('utils/av-weapp-min');
// LeanCloud 应用的 ID 和 Key
AV.init({
  appId: 'I0DdHf3RvULpcNo9yHMqOiVj-gzGzoHsz',
  appKey: 'ky4DJugyBl5MCEKLLt7pTgg4',
});

// console.log(AV);

App({
  onLaunch: function () {

    //使用当前用户身份登录
    AV.User.loginWithWeapp().then(user => {
      this.globalData.user = user.toJSON();
    }).catch(console.error);

    // 假设已经通过 AV.User.loginWithWeapp() 登录
    // 获得当前登录用户
    const user = AV.User.current(); //为啥把这句放在这就报错呢？
    // 调用小程序 API，得到用户信息
    wx.getUserInfo({
      success: ({userInfo}) => {
        // 更新当前用户的信息
        const user = AV.User.current();
        user.set(userInfo).save().then(user => {
          // 成功，此时可在控制台中看到更新后的用户信息
          this.globalData.user = user.toJSON();
        }).catch(console.error);
      }
    });

  },
  globalData: {
    userInfo: null
  }
});