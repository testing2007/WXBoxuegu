// pages/index/index.js

const homePageCourseInfoUrl = require('../../network.test.config').homePageCourseInfoUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ads: ['/image/index/1.png', '/image/index/2.png', '/image/index/3.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,

    indexPath: {
      row: -1,
      column:-1
    },

    careerCourse: [],
  },

  careerCourseName:function(index) {
    
  }




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
      },
    })
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
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', new Date())
    this.reqHomePageCourseInfo();
  },

  reqHomePageCourseInfo: function() {
    var self=this
    wx.request({
      url: homePageCourseInfoUrl,
      method: 'get',
      header: {'Content-Type':'application/json'},
      success: function(res) {
        console.log(res);
        self.setData( {careerCourse: res.data.resultObject.careerCourse } );
      },
      fail:function(res) {
        console.log('fail'+res);
      },
      complete:function(res) {
        console.log('complete'+res)
      }
    })
//   reqHomePageCourseInfo: function req() {

//     //这行很重要, 类似于objc里面调用block之前的处理, 否则下面的 使用 this.setData 在 console 里面报 setData 未定义错误
//     var self = this

//     wx.request({
//       url: homePageCourseInfoUrl,
//       method: 'post',
//       header: { 'Content-Type': 'application/json' },
//       success: function (res) {
//         var responseData = res.data;
//         if (responseData.success) {
//           console.log(`success=true`);
//           console.log(res.data.resultObject);

//           // self.setData({ result: { 
//           //   careerCourse: careerCourseItems
//           //   }
//           // })
//           self.setData({ result: res.data.resultObject })
//         }

//         return YES
//       },

//       fail: function () {
//         console.log('url= ${url} and failure')
//         return NO
//       }
//     })
//   }
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

  // 点击某就业课
  onDidSelectCareerItem:function(e) {
    wx.navigateTo({
      url: '/pages/courseDetail/courseDetail',
    })
  }
})


//////////
// //index.js

// const homePageCourseInfoUrl = require('../../testEnvConfig').homePageCourseInfoUrl

// Page({
//   data: {
//     result: {
//       careerCourse: [{ courseId: '111' }]
//     },
//   },


//   onPullDownRefresh: function () {
//     wx.showToast({
//       title: 'loading...',
//       icon: 'loading'
//     })
//     console.log('onPullDownRefresh', new Date())
//     this.reqHomePageCourseInfo();
//     // this.setData({ result: { 
//     //   careerCourse: [{ abc:'abc', courseId: '2222' }, { courseId: '33333' }]
//     //   }
//     // })
//   },

//   stopPullDownRefresh: function () {
//     wx.stopPullDownRefresh({
//       complete: function (res) {
//         wx.hideToast()
//         console.log(res, new Date())
//       }
//     })
//   },

//   reqHomePageCourseInfo: function req() {

//     //这行很重要, 类似于objc里面调用block之前的处理, 否则下面的 使用 this.setData 在 console 里面报 setData 未定义错误
//     var self = this

//     wx.request({
//       url: homePageCourseInfoUrl,
//       method: 'post',
//       header: { 'Content-Type': 'application/json' },
//       success: function (res) {
//         var responseData = res.data;
//         if (responseData.success) {
//           console.log(`success=true`);
//           console.log(res.data.resultObject);

//           // self.setData({ result: { 
//           //   careerCourse: careerCourseItems
//           //   }
//           // })
//           self.setData({ result: res.data.resultObject })
//         }

//         return YES
//       },

//       fail: function () {
//         console.log('url= ${url} and failure')
//         return NO
//       }
//     })
//   }

// })