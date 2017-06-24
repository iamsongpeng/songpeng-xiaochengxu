var base64 = require("../../image/base64");

Page({
  data: {
    item: {
      headimg: "../../image/kind/fisher.png",
      dictum: "Good artists copy, great artists steal.\n拙匠抄, 巧匠盗!\n乔布斯说过，毕加索也说过"
    }
  },
  onLoad: function () {
    // panel 图文列表图标
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  }
});