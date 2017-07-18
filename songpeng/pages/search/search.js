const AV = require('../../utils/av-weapp-min');

Page({
  data: {
    inputShowed: false,
    queryResult: []
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  // 更改为“确认”键后执行搜索，减少请求
  inputTyping: function (e) {
    var param = e.detail.value
    // 改为箭头函数可以避免此问题
    var that = this;
    // 找出包含 「搜索内容」 的 Article
    var query = new AV.Query('Article');
    // 判断输入内容不为空，需要优化
    if (param) {
      query.contains('title', param)
        .find()
        .then(function (results) {
          that.setData({
            queryResult: results
          });
          console.log(that.data.queryResult);
        }, function (error) {
        });
    }
  }
});