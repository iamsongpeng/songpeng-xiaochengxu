var data = require("data/data");

Page({
  data: {
    item: {
      headimg: "../../image/windsurf-1.png",
      dictum: "给自己设计游戏规则和边界，\n不断地获得正反馈"
    },
    list: data.list
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

