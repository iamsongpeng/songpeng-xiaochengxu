var base64 = require("../../image/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      headimg: "../../image/kind/diving.png",
      dictum: "大牛的字典里是没有“坚持”二字的，\n他们只是上瘾了。"
    },
    list: [
      {
        pages: {
          imgurl: "",
          title: "100 字必读版",
          content: "以元学习，认知心理学，刻意练习（并非简单重复！）等知识为理论基础进行游戏化关卡设置，游戏的关卡难易程度，反馈机制，奖励机制等的实践",
          url: 'instruction/instruction'
        }
      },
      {
        pages: {
          imgurl: "",
          title: "100*100 字非必读版",
          content: "以元学习，认知心理学，刻意练习（并非简单重复！）等知识为理论基础进行游戏化关卡设置，游戏的关卡难易程度，反馈机制，奖励机制等的实践",
          url: 'instruction/instruction'
        }
      }
    ],
    list2: [
      {
        pages: {
          imgurl: "",
          title: "第零关：添加自己的知识学习问答卡",
          content: "建立对学习内容的基本认知",
          url: 'card/card'
        }
      },
      {
        pages: {
          imgurl: "",
          title: "第一关：新手",
          content: "建立对学习内容的基本认知",
          url: 'knowledge/knowledge'
        }
      },
      {
        pages: {
          imgurl: "",
          title: "第二关：高级新手",
          content: "拼出学习内容。学习不是登山，而是拼图。因为对于一个全新的学习内容",
          url: 'new/new'
        }
      }, 
      {
        pages: {
          imgurl: "",
          title: "第三关：胜任者",
          content: "建立对学习内容的基本认知",
          url: 'knowledge/knowledge'
        }
      },
      {
        pages: {
          imgurl: "",
          title: "第四关：精通者",
          content: "拼出学习内容。学习不是登山，而是拼图。因为对于一个全新的学习内容",
          url: 'new/new'
        }
      },
      {
        pages: {
          imgurl: "",
          title: "第五关：专家",
          content: "拼出学习内容。学习不是登山，而是拼图。因为对于一个全新的学习内容",
          url: 'new/new'
        }
      }
    ],
    list3: [
      {
        pages: {
          imgurl: "",
          title: "第零关：添加自己的知识学习问答卡",
          content: "建立对学习内容的基本认知",
          url: 'card/card'
        }
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  }
})