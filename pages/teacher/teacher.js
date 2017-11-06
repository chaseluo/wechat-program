Page({
  data: {
    courses: '',
    teacher: 'top-hoverd-btn'
  },
  onLaunch: function () {
    console.log('attendCourses Launching ...');
  },
  toCourses: function () {
    console.log('courses');
    this.updateBtnStatus('courses');
    wx.navigateTo({
      url: '../courses/courses',
    })
  },
  toTeacher: function () {
    console.log('teacher');
    this.updateBtnStatus('teacher');
  },
  updateBtnStatus: function (k) {
    this.setData({
      courses: this.getHoverd('courses', k),
      teacher: this.getHoverd('teacher', k)
    });
  },
  getHoverd: function (src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  }

});