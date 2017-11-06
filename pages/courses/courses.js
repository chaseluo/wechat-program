Page({
  data: {
    courses: 'top-hoverd-btn',
    teacher: '',
    winHeight:750,
    // tab切换  
    currentTab: 0
  },
  onLaunch: function () {
    console.log('douban Launching ...');
  },
  toHot: function () {
    console.log('courses');
    this.updateBtnStatus('courses');
  },
  toTeacher: function () {
    console.log('toTeacher');
    this.updateBtnStatus('teacher');
  }, 
  updateBtnStatus: function (k) {
    this.setData({
      hot: this.getHoverd('courses', k),
      film: this.getHoverd('teacher', k)
    }); 
  },
  getHoverd: function (src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  },
  toAttendCourses: function () {
    wx.navigateTo({
      url: '../attendCourses/attendCourses',
    })
  },
  toOrderCourses: function () {
    wx.navigateTo({
      url: '../coursesOrder/coursesOrder',
    })
  },
  toCoursesFeedback: function () {
    wx.navigateTo({
      url: '../coursesFeedback/coursesFeedback',
    })
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /** 
  * 点击tab切换 
  */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }  
});