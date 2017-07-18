// 因为数据量不大，所以就放在本地
var item = {
  headimg: "../../image/fisher.png",
  dictum: "Good artists copy, great artists steal.\n拙匠抄, 巧匠盗! 乔布斯说过，毕加索也说过"
};

var list = [
  {
    id: 'about',
    title: "关于",
    url: '../about/about'
  }, {
    id: 'feedback',
    title: "反馈",
    url: '../article/article?id=5963a3808d6d8100575d8c9b'
  }, {
    id: 'redpacket',
    title: "支持开发",
    url: '../article/article?id=596360fc8d6d81005759a1ec'
  }, {
    id: 'card',
    title: "我的知识学习卡",
    url: '../article/article?id=5963a50b0ce463005825687f'
  }, {
    id: 'like',
    title: "计划：2.0 版本新增功能",
    url: '../article/article?id=5963ab7b2f301e0064caa8ae'
  }
];

module.exports = {
  item: item,
  list: list
}
