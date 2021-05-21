Page({
  data: {
    //索引
    nav: [
      {
        id: 0,
        value: "首页",
        isActive: true
      },
      {
        id: 1,
        value: "订单",
        isActive: false
      },
      {
        id: 2,
        value: "个人",
        isActive: false
      }
    ],
    //展开
    unfold: false,

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

    items: [
      { name: 'AREA', value: '按地区筛选' },
      { name: 'WEIGHT', value: '按重量筛选'},
      { name: 'TYPE', value: '按类型筛选' }
    ],

    region: ['广东省', '珠海市', '香洲区'],
    customItem: '全部',

    weight: [
      { name: '1kg', value: '1kg'},//==1kg
      { name: '1-3kg', value: '1-3kg'},//>1kg&&<=3kg
      { name: '3kg以上', value: '3kg以上'}//>3kg
    ],

    type: [
      { name: '电子产品', value: '电子产品'},
      { name: '大件家具', value: '大件家具'},
      { name: '书籍杂志', value: '书籍杂志'},
      { name: '可回收物', value: '可回收物'},
      { name: '有害垃圾', value: '有害垃圾'},
      { name: '厨余垃圾', value: '厨余垃圾'},
      { name: '其他垃圾', value: '其他垃圾'},
      { name: '一键回收', value: '一键回收'}
    ],

    //折叠展开相关
    showIndex: 0,

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
    }
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },//打印checkbox
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },//筛选
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },//地区
  toToggle(e){
    //console.log(e);
    const {index} = e.detail;
    let {nav} = this.data;
    nav.forEach((v,i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      nav
    })
  },//导航
  //panel: function (e) {
  //  if (e.currentTarget.dataset.index != this.data.showIndex) {
  //    this.setData({
  //      showIndex: e.currentTarget.dataset.index,
  //    });
  //  } else {
  //    this.setData({
  //      showIndex: 0,
  //    });
  //  };
  //},
  async getOrderList(e) {
    const orderList = await wx.$get("/user/order");
    //console.log(orderList);
    this.setData({
      orderList
    });
  },
  onLoad: function (options) {
      this.getOrderList();
  }
})