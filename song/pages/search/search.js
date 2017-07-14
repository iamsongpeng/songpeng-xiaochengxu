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
  inputTyping: function (e) {
    // 改为箭头函数可以避免此问题
    var that = this;
    // 找出包含 「咖啡」 的 Article
    var query = new AV.Query('Article');
    query.contains('title', e.detail.value);
    query.find().then(function (results) {
      // results 返回的就是有图片的 Todo 集合
      that.setData({
        //results: [{ attributes: { title: "test1" } }, { attributes: { title: "test2" } }]
        queryResult: results
      });
      for (var i=0; i < results.length;i++) {
        console.log(results[i].id)
      }
      console.log("------------------------")
      console.log(that.data.queryResult)

    }, function (error) {
    });

    
  }
});