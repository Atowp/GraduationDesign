// pages/order/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    index: 0,

    //折叠展开相关
    showIndex: 0,
    //订单信息
    orderList: [],
    status: [
      {
        index: 0,
        value: "未接取",
      },
      {
        index: 1,
        value: "已接取",
      },
      {
        index: 2,
        value: "交易成功",
      },
      {
        index: -1,
        value: "交易失败",
      },
    ],
    statusDict: {
      "-1": "交易失败",
      0: "未接取",
      1: "未接取",
      2: "交易成功",
    },
    status_index: 0
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
    console.log(orderList);
    for(let i=0; i<orderList.length; i++){
      this.setData({
        orderList,
        status_index: i
      });
      console.log(orderList[i].status);//订单状态 0 1 2 -1
    };
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