// pages/phone/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "12345678901"//注意数据类型
  },

  async getPhone(){
    //const userInfo = await wx.$get("/user/info");
    //this.setData({
    //  phone: userInfo.phone
    //})
    //console.log(phone);
  },
  revise(e){
    //发送该数字到后台搜索是否存在，不存在即可绑定
    const test = e.currentTarget.dataset.test;
    const {phone} = e.detail.value;
    console.log(phone.length);
    if((phone.length) < 11 || (phone.length) > 11){
      wx.showToast({
        title: '非法长度',
        icon: 'error',
        duration: 2000
      })
      //wx.$post('', {
      //  phone
      //})
      //还需要返回一个结果
    }else if(phone){
      wx.showToast({
        title: '成功提交修改请求',
        icon: 'success',
        duration: 2000
      });
    }else{
      wx.showToast({
        title: '该号码已被绑定',
        icon: 'error',
        duration: 2000
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //从后台拿已绑定的手机号
    this.getPhone();
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