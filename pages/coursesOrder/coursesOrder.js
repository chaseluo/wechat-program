//teacherlist.js
//获取应用实例
var app = getApp()
Page({
  data: {
    itemsID: [
      { name: 'Y', value: '是', checked: 'true' },
      { name: 'N', value: '否' }
    ],
    date: '2017-08-28',

    coursesArray: ['课程1', '课程2', '课程3', '课程4'],
    coursesArrayObect: [
      {
        id: 1,
        name: '课程1'
      },
      {
        id: 2,
        name: '课程2'
      },
      {
        id: 3,
        name: '课程3'
      },
      {
        id: 4,
        name: '课程4'
      }
    ],
    index: 1,
  },
  coursesApply: function() {
    wx.navigateTo({
      url: '/pages/couresApply/couresApply',
    })
  },
  coursesCancel: function () {
    wx.navigateTo({
      url: '/pages/coursesCancel/coursesCancel',
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindCoursesChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})