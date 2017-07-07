var base64 = require("../../image/base64");

Page({
  data: {
    item: {
      headimg: "../../image/kind/fisher.png",
      dictum: "Good artists copy, great artists steal.\n拙匠抄, 巧匠盗!\n乔布斯说过，毕加索也说过"
    },
    list: [
      {
        imgurl: "../../image/my/about.png",
        title: "关于",
        url: '../article/article?id=595f1f7c8d6d810057285260'
      }, {
        imgurl: "../../image/my/feedback.png",
        title: "反馈",
        url: '../article/article?id=595f1f7c8d6d810057285260'
      }, {
        imgurl: "../../image/my/redpacket.png",
        title: "支持开发",
        url: '../article/article?id=595f1f7c8d6d810057285260'
      }, {
        imgurl: "../../image/my/card.png",
        title: "我的知识学习卡",
        url: '../article/article?id=595f1f7c8d6d810057285260'
      }, {
        imgurl: "../../image/my/like.png",
        title: "计划：新增功能投票",
        url: '../article/article?id=595f1f7c8d6d810057285260'
      }
    ]
  },
  onLoad: function () {
    
  }
});