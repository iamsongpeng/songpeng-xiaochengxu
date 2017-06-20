const AV = require('../../utils/av-weapp-min');
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    demo: 1,
    item: {
      headimg: "../../image/kind/basketball.png",
      dictum: "这里是可能可以解忧的“杂货铺”，\n我是铺子老板，\n一个在进步的编程运动员——宋鹏"
    },
    article: null,
    list: [
      {
        id: 'Scientificmethod',
        name: '方法论',
        open: false,
        pages: [
          {
            zh: '科学方法论',
            url: 'scientific/scientific'
          }, {
            zh: '知识学习方法论',
            url: 'knowledge/knowledge'
          }, {
            zh: '写作技能方法论',
            url: 'writing/writing'
          }
        ]
      }, {
        id: 'writing',
        name: '写作',
        open: false,
        pages: [
          {
            zh: '科学方法论',
            url: 'scientific/scientific'
          }, {
            zh: '知识学习方法论',
            url: 'knowledge/knowledge'
          }, {
            zh: '写作技能方法论',
            url: 'writing/writing'
          }
        ]
      }, {
        id: 'coffee',
        name: '咖啡',
        open: false,
        pages: [
          {
            zh: '科学方法论',
            url: 'scientific/scientific'
          }, {
            zh: '知识学习方法论',
            url: 'knowledge/knowledge'
          }, {
            zh: '写作技能方法论',
            url: 'writing/writing'
          }
        ]
      }, {
        id: 'guitar',
        name: '吉他',
        open: false,
        pages: [
          {
            zh: '科学方法论',
            url: 'scientific/scientific'
          }, {
            zh: '知识学习方法论',
            url: 'knowledge/knowledge'
          }, {
            zh: '写作技能方法论',
            url: 'writing/writing'
          }
        ]
      }, {
        id: 'coding',
        name: '编程',
        open: false,
        pages: [
          {
            zh: '将学习游戏化',
            url: 'scientific/scientific'
          }, {
            zh: '模仿游戏的设计方法设计自己的学习模式',
            url: 'knowledge/knowledge'
          }, {
            zh: '不要害怕上瘾',
            url: 'writing/writing'
          }, {
            zh: '奖励自己',
            url: 'writing/writing'
          }
        ]
      }, {
        id: 'keepingfit',
        name: '徒手健身',
        open: false,
        pages: [
          {
            zh: '科学方法论',
            url: 'scientific/scientific'
          }, {
            zh: '知识学习方法论',
            url: 'knowledge/knowledge'
          }, {
            zh: '写作技能方法论',
            url: 'writing/writing'
          }
        ]
      }
    ]
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
    this.setData({
      inputVal: e.detail.value
    });
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

