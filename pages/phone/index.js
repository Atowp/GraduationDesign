// pages/phone/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "12345678901"//注意数据类型
  },

  async getPhone(){
    const phone = await wx.$get("");
    this.setData({
      phone: phone
    })
  },
  revise(e){
    //发送该数字到后台搜索是否存在，不存在即可绑定
    const test = e.currentTarget.dataset.test;
    if(test === 0){
      wx.showToast({
        title: '成功提交修改请求',
        icon: 'success',
        duration: 2000
      }),
      wx.$post('', {
        phone
      })
      //还需要返回一个结果
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