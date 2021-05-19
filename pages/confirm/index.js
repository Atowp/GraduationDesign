const chooseLocation = requirePlugin('chooseLocation');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    concat: "AG",
    phone: "18718518397",
    address: "详细地址",
    latitude: [],
    longitude: [],
    detail: [],
    type: "",
    hasLocation: false,
    weight: 0,

    array: [
      '8:00-9:00', '9:00-10:00', '10:00-11:00','11:00-12:00',
      '14:00-15:00',"15:00-16:00","16:00-17:00"
    ],
    objectArray: [
      {
        id: 0,
        name: '8:00-9:00'
      },
      {
        id: 1,
        name: '9:00-10:00'
      },
      {
        id: 2,
        name: '10:00-11:00'
      },
      {
        id: 3,
        name: '11:00-12:00'
      },
      {
        id: 4,
        name: '14:00-15:00'
      },
      {
        id: 5,
        name: '15:00-16:00'
      },
      {
        id: 6,
        name: '16:00-17:00'
      }
    ],

    index: 0,

    region: ['广东省','珠海市', '香洲区'],

    type: ""
  },
  inputValue(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  selectPoint(){
    const key = 'JJMBZ-Q52CF-PCRJ4-NDBGH-DCTC6-JKBRD'; //使用在腾讯位置服务申请的key
    const referer = '句芒上门回收'; //调用插件的app的名称
    const location = JSON.stringify({
      latitude: 39.89631551,
      longitude: 116.323459711
    });
    wx.navigateTo({
    url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}`,
    success: (res) => {
      this.setData({
        hasLocation: true
      })
    }
    });
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  submit(){
    const {concat, phone, time, date, region, address} = this.data;
    console.log(concat, phone, time, date, region, address, 'concat, phone, time, date, region, address')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {type, detail} = this.options;
    this.setData({
      type, 
      detail: detail && JSON.parse(detail)
    }),
    console.log(type);
    console.log(detail);
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
    const location = chooseLocation.getLocation();
    //console.log(location);
    this.setData({
      point: location
    });
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