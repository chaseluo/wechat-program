  Page({


    onLoad: function () {
      this.loadtest();
      console.info("loadtest....")

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

   loadtest: function () {
     wx.request({
       url: 'http://127.0.0.1:8088/Heart/User',
       data: {

       },
       header: {
         'content-type': 'application/json'
       },
       success: function (res) {
         console.log('success=========' + res.data)
       },

     })
   },

   
})

 





  
