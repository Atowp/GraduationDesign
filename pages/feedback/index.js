// pages/feedback/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['系统问题', '服务问题', '改进意见'],
    objectArray: [
      {
        id: 0,
        name: '系统问题'
      },
      {
        id: 1,
        name: '服务问题'
      },
      {
        id: 2,
        name: '改进意见'
      }
    ],
    index: 0
  },
  bindPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  feedback(e){
    let type = this.data.array[e.detail.value.picker];
    //console.log(type);
    let content = e.detail.value.content;
    content = content.replace(/\s+/g,"");//去掉空格
    if(content == null || content.length <= 0){//判断是否为空
      wx.showToast({
        title: '内容不得为空',
        icon: 'error',
        duration: 2000
      })
    }else{
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
    };
    wx.$post("",{type,content});
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