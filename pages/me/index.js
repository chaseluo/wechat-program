
//  不要在 onLaunch 的时候调用 getCurrentPage()此时 page 还没有生成。 
// getCurrentPage是获取当前页面的实例对象。

Page({
  
    data:{

    
picture: "../../images/0414couser.png",
name: "Chase",
       

// 1.菜单栏数据
  items:[
      {
       icon:'../../images/my_order@2x.png',
       text:'学生信息'
    },

    {
        icon:'../../images/my_wallet@2x.png',
       text:'讲师信息',
       arrow:'../../images/0106arrow3x.png'
    },

      {
        icon:'../../images/my_teacher@2x.png',
       text:'常见问题'
    },
    
      {
        icon:'../../images/my_collecte@2x.png',
       text:'积分奖励'
    },
    
      {
        icon:'../../images/my_about@2x.png',
       text:'使用条款'
    },
    
      {
        icon:'../../images/0128award@2x.png',
       text:'隐私权政策'
    }
  ],

    }
})
