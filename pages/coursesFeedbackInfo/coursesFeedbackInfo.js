//teacherlist.js
//获取应用实例
var app = getApp()
Page({
  data: {
    itemsID: [
      { name: 'SFZ', value: '身份证', checked: 'true' },
      { name: 'JZ', value: '驾照' },
      { name: 'HZ', value: '护照' }
    ]
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
  }
})