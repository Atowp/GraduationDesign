Page({
  data: {
    //索引
    nav: [
      {
        id: 0,
        value: "首页",
        isActive: true,
      },
      {
        id: 1,
        value: "订单",
        isActive: false,
      },
      {
        id: 2,
        value: "个人",
        isActive: false,
      },
    ],
    //展开
    unfold: false,
    userInfo: {
      name: "",
      sex: 0,
      address: "",
      phone: "",
    },
    likeWeight: "",
    likeArea: [],
    likeType: ["一键回收"],
    array: ["按时间筛选", "本月", "三个月内", "一年内", "有史以来"],
    objectArray: [
      {
        id: 0,
        name: "按时间筛选",
      },
      {
        id: 1,
        name: "本月",
      },
      {
        id: 2,
        name: "三个月内",
      },
      {
        id: 1,
        name: "一年内",
      },
      {
        id: 2,
        name: "有史以来",
      },
    ],
    index: 0,

    items: [
      { name: "AREA", value: "按地区筛选" },
      { name: "WEIGHT", value: "按重量筛选" },
      { name: "TYPE", value: "按类型筛选" },
    ],

    region: ["广东省", "珠海市", "香洲区"],
    customItem: "全部",

    weight: [
      { name: "1kg", value: "small" }, //==1kg
      { name: "1-3kg", value: "medium" }, //>1kg&&<=3kg
      { name: "3kg以上", value: "large" }, //>3kg
    ],

    type: [
      { name: "电子产品", value: false },
      { name: "大件家具", value: false },
      { name: "书籍杂志", value: false },
      { name: "可回收物", value: false },
      { name: "有害垃圾", value: false },
      { name: "厨余垃圾", value: false },
      { name: "其他垃圾", value: false },
      { name: "一键回收", value: false },
    ],
    orderList: [],
    filterOrderList: [],
    statusDict: {
      "-1": "交易失败",
      0: "未接取",
      1: "未接取",
      2: "交易成功",
    },
  },
  tapWeight(e) {
    console.log(e, e.currentTarget.dataset);
    this.setData({
      likeWeight: e.currentTarget.dataset.value,
    });
  },
  async checkboxChange(e) {
    const filter = e ? e.detail.value.toString() : "";
    const filterOrderList = await wx.$get("/picker/order?filter=" + filter);
    this.setData({
      filterOrderList,
    });
  }, //打印checkbox
  bindPickerChange: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      likeArea: e.detail.value,
    });
  }, //筛选
  bindRegionChange: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      likeArea: e.detail.value,
    });
  }, //地区
  toToggle(e) {
    const { index } = e.detail;
    let { nav } = this.data;
    nav.map((item) => (item.isActive = false));
    if (index === 0) {
      this.checkboxChange();
      this.getOrderList();
    }
    index === 2 && this.getUserInfo();
    nav[index].isActive = true;
    this.setData({
      nav,
    });
  }, //导航
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
    this.setData({
      orderList,
    });
  },
  async getUserInfo() {
    const userInfo = await wx.$get("/user/info");
    const likeArea = [];
    userInfo.likeArea.map((item) => {
      likeArea.push(item || "全部");
    });
    this.setData({
      userInfo,
      likeArea,
      likeWeight: userInfo.likeWeight,
    });

    const type = Object.assign([], this.data.type);
    type.map((item) => {
      if (userInfo.likeType.includes(item.name)) {
        item.value = true;
      }
    });
    this.setData({ type });
  },
  submit(e) {
    const { likeType, name, address, phone } = e.detail.value;
    const likeArea = [];
    this.data.likeArea.map((item) =>
      likeArea.push(item === "全部" ? "" : item)
    );
    const userInfo = this.data.userInfo;
    const likeWeight = this.data.likeWeight;
    wx.$put(`/user/info/${userInfo._id}`, {
      likeArea,
      likeType,
      name,
      address,
      phone,
      likeWeight,
    }).then(() => {
      wx.showToast({ title: "保存成功" });
    });
  },
  onLoad: function (options) {
    this.getOrderList();
    this.getUserInfo();
    this.checkboxChange();
  },
});
