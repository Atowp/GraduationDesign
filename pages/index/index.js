import {request} from "../../request/index.js";
Page({
  data: {
    //轮播图数组
    swiperList:[],
    //导航数组
    navigateList:[],
    navigate2List:[]
  },

  onLoad: function(options){
    this.getSwiperList();
    this.getNavigateList();
    this.getNavigate2List();
  },
  //发送异步请求获取轮播图数据
  getSwiperList(){
    request({url:'/rotate_api0411.json'})
    .then(result=>{
      this.setData({
        swiperList:result.data.message
      })
    })
  },
  dispatchR(e){//e = item.url
    wx.navigateTo({
      url: e.currentTarget.dataset.url//url = data-url的url
      //e.currentTarget.dataset.url = item.url
    })
  },
  //获取导航数据
  getNavigateList(){
    request({url:'/navigate_api0411.json'})
    .then(result=>{
      this.setData({
        navigateList:result.data.message
      })
    })
  },
  dispatchN(e){//e = item.url
    wx.navigateTo({
      url: e.currentTarget.dataset.url//url = data-url的url
      //e.currentTarget.dataset.url = item.url
    })
  },
  //获取导航2数据
  getNavigate2List(){
    request({url:'/navigate2_api0410.json'})
    .then(result=>{
      this.setData({
        navigate2List:result.data.message
      })
    })
  },
  dispatchN2(e){//e = item.url
    wx.navigateTo({
      url: e.currentTarget.dataset.url//url = data-url的url
      //e.currentTarget.dataset.url = item.url
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
