import {request} from "../../request/index.js";
Page({
  data: {
    //轮播图数组
    swiperList:[]
  },

  onLoad: function(options){
    //发送异步请求获取轮播图数据
    request({url:'http://localhost:3000/message'})
      .then(result=>{
        this.setData({
          swiperList:result.data
        })
      })
    
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});