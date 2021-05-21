// pages/order/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderList: []
  },

  panel: function (e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index,
      });
    } else {
      this.setData({
        showIndex: 0,
      });
    };
  },
  
  //获取订单数据
  async getOrderList(e) {
    const orderList = await wx.$get("/user/order"); //详情看上
    this.setData({
      orderList
    })
    console.log(this.data.orderList)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrderList();
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
});
