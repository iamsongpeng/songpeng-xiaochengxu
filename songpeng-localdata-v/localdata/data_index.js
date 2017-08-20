// 因为数据量不大，所以就放在本地

// 轮播图
var swiper = [
  "http://odhng6tv1.bkt.clouddn.com/swiper-1.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-2.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-3.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-4.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-5.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-6.png",
  "http://odhng6tv1.bkt.clouddn.com/swiper-8.png"
];

// 公共头信息
var item = {
  headimg: "../../image/basketball.png",
  dictum: "这里是可能可以解忧的“杂货铺”，\n我是铺子老板，\n一个在进步的编程运动员——宋鹏"
};

// 面板列表
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
        url: '../article/article?id=596b9671a0bb9f0062bed2a3'
      }, {
        zh: '别跟我说什么：推荐入门吉他！',
        url: '../article/article?id=596b9977128fe155ce1362d1'
      }, {
        zh: '好的作品得推荐',
        url: '../article/article?id=596b9e03ac502e0061586a40'
      }, {
        zh: '好的作品的作者的好玩的故事得说说',
        url: '../article/article?id=596cf1eaac502e006cbfa996'
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
        zh: '哪怕再小！也得是个完整的作品',
        url: '../article/article?id=596ba4448d6d8100576ffd70'
      }, {
        zh: '程序员可以懂些设计',
        url: '../article/article?id=596ba353fe88c2c1d4fcc857'
      }
    ]
  }, {
    id: 'keepingfit',
    name: '徒手健身',
    open: false,
    pages: [
      {
        zh: '安全',
        url: '../article/article?id=596cffef61ff4b006c1fbb27'
      }, {
        zh: '合理饮食',
        url: '../article/article?id=596cfffaa22b9d006a359d64'
      }, {
        zh: '适当运动',
        url: '../article/article?id=596d0007a22b9d006a359d8a'
      }, {
        zh: '心理健康',
        url: '../article/article?id=596d00148d6d8100577d55e2'
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
    "id": "other",
    "name": "还有啥",
    "open": false,
    "pages": [
      {
        "zh": "计划新增功能",
        "url": "../article/article?id=5963ab7b2f301e0064caa8ae"
      }
    ]
  }
];

module.exports = {
  swiper: swiper,
  item: item,
  list: list
}
