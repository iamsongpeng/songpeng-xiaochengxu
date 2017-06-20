Page({
  data: {
    item: {
      headimg: "../../image/kind/windsurf-1.png",
      dictum: "给自己设计游戏规则和边界，\n不断地获得正反馈"
    },
    list: [
      {
        id: 'new',
        name: '1. 进入新手村',
        open: false,
        pages: ['new'],
        contents: ['1.1-建立对学习内容的基本认知', '1.2-拼出学习内容', '1.3-抢在放弃之前建立正循环']
      }, {
        id: 'high',
        name: '2. 晋级高级新手',
        open: false,
        pages: ['high1', 'high2', 'high3'],
        contents: ['2.1-获得高频小套路', '2.2-加速全盘模仿', '2.3-大量重复练习']
      }, {
        id: 'master',
        name: '3. 跨越到专家',
        open: false,
        pages: ['master1', 'master2', 'master3', 'master-four'],
        contents: ['3.1-将学习游戏化', '3.2-模仿游戏的设计方法设计自己的学习模式', '3.3-不要害怕上瘾', '3.4-奖励自己']
      }
    ]
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

