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
        pages: [
          {
            zh: '建立对学习内容的基本认知',
            url: 'new/new'
          }, {
            zh: '拼出学习内容',
            url: 'new/new'
          }, {
            zh: '抢在放弃之前建立正循环',
            url: 'new/new'
          }
        ]
      }, {
        id: 'high',
        name: '2. 晋级高级新手',
        open: false,
        pages: [
          {
            zh: '获得高频小套路',
            url: 'high/high'
          }, {
            zh: '加速全盘模仿',
            url: 'high/high'
          }, {
            zh: '大量重复练习',
            url: 'high/high'
          }
        ]
      }, {
        id: 'master',
        name: '3. 跨越到专家',
        open: false,
        pages: [
          {
            zh: '将学习游戏化',
            url: 'master/master'
          }, {
            zh: '模仿游戏的设计方法设计自己的学习模式',
            url: 'master/master'
          }, {
            zh: '不要害怕上瘾',
            url: 'master/master'
          }, {
            zh: '奖励自己',
            url: 'master/master'
          }
        ]
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

