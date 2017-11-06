Page({

  onLoad: function (options) {
    //加载时就获取后台的数据
    this.get_data()
  },

  data: {

    //1. 轮播图片数据
    imgUrls: [
      '../../images/home_banner1.png',
      '../../images/home_banner2.png',
      '../../images/home_banner3.png'
    ],

    //2. 轮播配置
    autoplay: true,
    interval: 3000,
    duration: 1200,

    // 3.导航栏
    navs: [
      {
        image: '../../images/home_entity.png',
        text: '实体课程'
      },

      {
        image: '../../images/home_play.png',
        text: '在线直播'
      },


      {
        image: '../../images/home_door.png',
        text: '上门家教'
      }
    ],


    // 5.推荐课程
    cell: [
      {
        image: '../../images/0414couser.png',
        title: '北冰洋心肺复苏课程第一次',
        time: '8月16日 18:30/3小时',
        grade: '15人',
        price: '￥58.0'
      },

      {
        image: '../../images/0414couser.png',
        title: '北冰洋心肺复苏课程第二次',
        time: '8月18日 18:30/3小时',
        grade: '15人',
        price: '￥100'
      }
    ],


  },

  get_data:function(){
    // 获取数据
    var that=this;
    wx.request({
      url: 'https://www.heart.com/Heart/User',
      data: {
       
      },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        if(res.data.success){
          that.setData({
            aKey: res.data.result.userId,
            aValue: res.data.result.name,
            aType: res.data.result.userLevel
          })
        }
      }
    })
  }

})