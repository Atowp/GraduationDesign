// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //筛选
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
    //折叠展开相关
    showIndex: 0,
    //订单信息
    orderList: [],
    //contact: "",//联系人
    //phone: 0,//电话（number）
    //time: "",//预约的时间
    //type: "",//回收类型
    //detail: [],//详细类型
    //weight: 0,//千克数
    //date: "",//日期
    //address: "",//地址
    //remark: "",//备注
    //openId: "",//下单的用户唯一标识
    //takeBy: "",//接单的拾荒者标识
    //status: 0,//订单状态，0未接取，1已接取，2成功，-1失败

    //状态！
    status: [
      {
        index: 0,
        value: "未接取"
      },
      {
        index: 1,
        value: "已接取"
      },
      {
        index: 2,
        value: "交易成功"
      },
      {
        index: -1,
        value: "交易失败"
      }
    ],
    status_index: 0,
  },
  //筛选相关
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
  //取消
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
  delete: function () {
    
  },
  //获取订单数据
  async getOrderList(e){
    const orderList  = await wx.$get("/user/order");//还不晓得长啥样
    const status_index = orderList.status;
    this.setData({
      orderList,
      status_index
      //contact: orderList.contact,
      //phone: orderList.phone,
      //time: orderList.time,
      //type: orderList.type,
      //detail: orderList.detail,
      //weight: orderList.weight,
      //date: orderList.date,
      //address: orderList.address,
      //remark: orderList.remark,
      //openId: orderList.openId,
      //takeBy: orderList.takeBy,
      //status: orderList.status
    })
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
  onShareAppMessage: function () {}
})