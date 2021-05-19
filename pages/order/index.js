// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['按时间筛选', '本月', '三个月内','一年内','有史以来'],
    objectArray: [
      {
        id: 0,
        name: '按时间筛选'
      },
      {
        id: 1,
        name: '本月'
      },
      {
        id: 2,
        name: '三个月内'
      },
      {
        id: 1,
        name: '一年内'
      },
      {
        id: 2,
        name: '有史以来'
      }
    ],
    index: 0,
    showIndex: 0
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  panel: function (e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    }else {
      this.setData({
        showIndex: 0
      })
    }
  },
  cancel: function () {
    wx.showModal({
      title: '提示',
      content: '是否确认取消订单',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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