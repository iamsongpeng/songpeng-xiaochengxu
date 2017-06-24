const AV = require('../../utils/av-weapp-min');
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
      headimg: "../../image/kind/basketball.png",
      dictum: "这里是可能可以解忧的“杂货铺”，\n我是铺子老板，\n一个在进步的编程运动员——宋鹏"
    },
    audioAction: {
      method: 'pause'
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
            zh: '如何找到最适合你的那杯咖啡',
            url: 'scientific/scientific'
          }, {
            zh: '我眼中的咖啡之理工版',
            url: 'knowledge/knowledge'
          }, {
            zh: '我眼中的咖啡之文艺版(约稿 或 投稿)',
            url: 'writing/writing'
          }
        ]
      }, {
        id: 'guitar',
        name: '吉他',
        open: false,
        pages: [
          {
            zh: '指弹吉他是只弹不唱吗',
            url: 'scientific/scientific'
          }, {
            zh: '别跟我说什么：入门吉他推荐！',
            url: 'knowledge/knowledge'
          }, {
            zh: '好的作品得推荐',
            url: 'writing/writing'
          }, {
            zh: '好的作品的作者的好玩的故事得说说',
            url: 'writing/writing'
          }
        ]
      }, {
        id: 'coding',
        name: '编程',
        open: false,
        pages: [
          {
            zh: '在进步的编程运动员',
            url: 'scientific/scientific'
          }, {
            zh: '"严肃课题"之一个字：穿',
            url: 'knowledge/knowledge'
          }, {
            zh: '哪怕再小！也得是个完整的作品',
            url: 'writing/writing'
          }, {
            zh: '程序员可以懂设计（罗子雄的演讲整理）',
            url: 'writing/writing'
          }
        ]
      }, {
        id: 'keepingfit',
        name: '徒手健身',
        open: false,
        pages: [
          {
            zh: '安全（健身教练，线上线下）',
            url: 'scientific/scientific'
          }, {
            zh: '合理饮食',
            url: 'knowledge/knowledge'
          }, {
            zh: '适当运动',
            url: 'writing/writing'
          }, {
            zh: '心理健康',
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
    new AV.Query('Swiper')
      .descending('594be737fe88c2005f7124ff')
      .find()
      .then((result) => {
        this.setData({ imgUrls: result[0].attributes.imgUrls });
      })
      .catch(console.error);

    // wx.request({
    //   url: 'https://api.leancloud.cn/1.1/classes/Swiper/594be737fe88c2005f7124ff', 
    //   data: {},
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
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

