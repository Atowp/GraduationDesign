// pages/join/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0
  },
  join (e) {
    const test = e.currentTarget.dataset.test;//test
    //console.log(test);
    //this.data.status.status == 0
    if(this.data.status.status == 0){//判断有无拾荒者身份 0普通 2拾荒者
      wx.navigateTo({
        url: '../staff-login/index'
      });
    }else{
      wx.showToast({
        title: '已有拾荒者权限',
        icon: 'error',
        duration: 2000
      });
    }
  },
  enter (e) {
    const test2 = e.currentTarget.dataset.test2;
    //console.log(test2);
    if(this.data.status.status == 2){//判断有无拾荒者身份
      wx.reLaunch({
        url: '../picker_index/picker_index'
      });
    }else{
      wx.showToast({
        title: '您无拾荒者权限',
        icon: 'error',
        duration: 2000
      })
    };
    //console.log(this.data.status);
  },
  async getUserInfo() {
    const status = await wx.$get("/user/info"); 
    this.setData({
      status
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
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