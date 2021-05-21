// pages/staff-login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  submit(e){
    const {name,sexual,phone,time,area} = e.detail.value;
    if(name <=0 ){
      wx.showToast({
        title: '姓名必填',
        icon: 'error',
        duration: 2000
      })
    }else if(sexual <= 0){
      wx.showToast({
        title: '性别必填',
        icon: 'error',
        duration: 2000
      })
    }else if(phone <= 0){
      wx.showToast({
        title: '手机号必填',
        icon: 'error',
        duration: 2000
      })
    }else if(time <= 0){
      wx.showToast({
        title: '时间必填',
        icon: 'error',
        duration: 2000
      })
    }else if(area <= 0){
      wx.showToast({
        title: '地区必填',
        icon: 'error',
        duration: 2000
      })
    }else{
      wx.$post("/user/info",{name,sexual,phone,time,area});
      wx.reLaunch({
        url: '../success/index'
      })
    }
    //console.log(area);
  },
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

  }
})