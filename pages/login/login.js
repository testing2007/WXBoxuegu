//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
  },

  //事件处理函数
  bindViewTap: function() {
    
  },

  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    var that = this
    wx.request({
      //#CRUD(create: post, read: get, update: put, delete: delete)
      url: 'http://localhost:5000/user/Nicholas',
      method: 'GET',
      success: function(res) {
        app.globalData.userInfo = res.data
        console.log(res.data)
        that.setData({
          userInfo:res.data,
          hasUserInfo: true
        })
        console.log("userInfo name=" + that.data.userInfo.name)
      }
    })
  },

  //事件处理
  onTapLogin: function() {
    console.log("onTapLogin");
  },

  //导航至首页
  onTapIndex: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }

})
