const AV = require('../../utils/av-weapp-min');

// test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  testIndex: function () {
    console.log("success")
    // 声明一个 Index 类型
    var Index = AV.Object.extend('Index');
    // 新建一个 Index 对象
    var index = new Index();
    index.set('swiper', swiper);
    index.set('list', list);
    index.save().then(function (index) {
      // 成功保存之后，执行其他逻辑.
      console.log('New object created with objectId: ' + index.id);
    }, function (error) {
      // 异常处理
      console.error('Failed to create new object, with error message: ' + error.message);
    });
  },
  testSearch: function() {
    // 找出开头是「早餐」的 Article
    console.log("query")
    var query = new AV.Query('Article');
    query.contains('title', '咖啡');
    query.find().then(function (results) {
      // results 返回的就是有图片的 Todo 集合
      console.log(results)
    }, function (error) {
    });
  },
  // 更改为“确认”键后执行搜索，减少请求？？？
  inputTyping: function (e) {
    var param = e.detail.value
    // 改为箭头函数可以避免此问题
    var that = this;
    // 找出包含 「咖啡」 的 Article
    var query = new AV.Query('Article');
    // 判断输入内容不为空，需要优化
    if (param) {
      query.contains('title', param)
        .find()
        .then(function (results) {
          that.setData({
            queryResult: results
          });
          console.log(that.data.queryResult)
          console.log(results[0].id)
        }, function (error) {
        });
    }
  }
})

var swiper = [
  "http://odhng6tv1.bkt.clouddn.com/swiper-1.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-2.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-3.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-4.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-5.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-6.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-8.png"
];

var list = [
  {
    id: 'Scientificmethod',
    name: '方法论',
    open: false,
    pages: [
      {
        zh: '科学方法论',
        url: '../article/article?id=595919580ce4630058aa9a51'
      }, {
        zh: '知识学习方法论',
        url: '../article/article?id=595e50752f301e00648bfa4a'
      }, {
        zh: '制作知识学习卡',
        url: '../article/article?id=5963a50b0ce463005825687f'
      }
    ]
  }, {
    id: 'writing',
    name: '写作',
    open: false,
    pages: [
      {
        zh: '如何写？',
        url: '../article/article?id=595f1944ac502e006bb7ed27'
      }, {
        zh: '写什么？',
        url: '../article/article?id=595f19605c497d0063734297'
      }, {
        zh: '为了啥？',
        url: '../article/article?id=595f19745c497d006373432e'
      }, {
        zh: '有啥用？',
        url: '../article/article?id=595f1983570c350058aa31fd'
      }
    ]
  }, {
    id: 'coffee',
    name: '咖啡',
    open: false,
    pages: [
      {
        zh: '如何找到最适合你的那杯咖啡',
        url: '../article/article?id=595e79d5a22b9d006b614aa4'
      }, {
        zh: '一杯热咖啡的灵魂是什么？',
        url: '../article/article?id=595f1d480ce4630058eec90f'
      }, {
        zh: '吃货（褒义词）、咖啡、还有蛋炒饭',
        url: '../article/article?id=595f1c2ea22b9d006b672d8d'
      }
    ]
  }, {
    id: 'guitar',
    name: '吉他',
    open: false,
    pages: [
      {
        zh: '指弹吉他是只弹不唱吗',
        url: '../article/article?id=1'
      }, {
        zh: '别跟我说什么：推荐入门吉他！',
        url: '../article/article?id=1'
      }, {
        zh: '好的作品得推荐',
        url: '../article/article?id=1'
      }, {
        zh: '好的作品的作者的好玩的故事得说说',
        url: '../article/article?id=1'
      }
    ]
  }, {
    id: 'coding',
    name: '编程',
    open: false,
    pages: [
      {
        zh: '在进步的编程运动员',
        url: '../article/article?id=595e6b3d0ce4630058e897f3'
      }, {
        zh: '"严肃课题"之一个字：穿',
        url: '../article/article?id=595e6b3d0ce4630058e897f3'
      }, {
        zh: '哪怕再小！也得是个完整的作品',
        url: '../article/article?id=595e6b3d0ce4630058e897f3'
      }, {
        zh: '程序员可以懂些设计',
        url: '../article/article?id=595e6b3d0ce4630058e897f3'
      }, {
        zh: '数据结构与算法的幸福生活',
        url: '../article/article?id=595e6b3d0ce4630058e897f3'
      }, {
        zh: '设计模式与我的工作模式',
        url: '../article/article?id=595e6b3d0ce4630058e897f3'
      }
    ]
  }, {
    id: 'keepingfit',
    name: '徒手健身',
    open: false,
    pages: [
      {
        zh: '安全',
        url: '../article/article?id=1'
      }, {
        zh: '合理饮食',
        url: '../article/article?id=1'
      }, {
        zh: '适当运动',
        url: '../article/article?id=1'
      }, {
        zh: '心理健康',
        url: '../article/article?id=1'
      }
    ]
  }, {
    id: 'sciencehumanity',
    name: '科技与人文',
    open: false,
    pages: [
      {
        zh: '世界上第一款网络摄像头是因何发明的？',
        url: '../article/article?id=595e2938ac502e7589f1018f'
      }
    ]
  }, {
    id: 'other',
    name: '还有啥',
    open: false,
    pages: [
      {
        zh: '别说话，看我！',
        url: '../article/article?id=595e6f622f301e00648d5340'
      }
    ]
  }
];