Page({
  data: {
    item: {
      headimg: "../../image/fisher.png",
      dictum: "Good artists copy, great artists steal.\n拙匠抄, 巧匠盗!\n乔布斯说过，毕加索也说过"
    },
    list: [
      {
        id: 'about',
        title: "关于",
        url: 'about/about'
      }, {
        id: 'feedback',
        title: "反馈",
        url: '../article/article?id=595f1f7c8d6d810057285260'
      }, {
        id: 'redpacket',
        title: "支持开发",
        url: '../article/article?id=595f1f7c8d6d810057285260'
      }, {
        id: 'card',
        title: "我的知识学习卡",
        url: '../article/article?id=595f1f7c8d6d810057285260'
      }, {
        id: 'like',
        title: "计划：新增功能投票",
        url: '../article/article?id=595f1f7c8d6d810057285260'
      }
    ]
  },
  onLoad: function () {
    
  }
});