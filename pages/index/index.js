import { request } from "../../request/index.js";
Page({
  data: {
    //轮播图数组
    swiperList: [],
    //导航数组
    navigateList: [],
    navigate2List: [
      {
        name: "可回收物",
        image_src:
          "https://prl.yuyisoft.net/images/%E5%8F%AF%E5%9B%9E%E6%94%B6%E7%89%A9.png",
        url: "../recycle_classified/index",
        key: 'recycle'
      },
      {
        name: "有害垃圾",
        image_src:
          "https://prl.yuyisoft.net/images/%E6%9C%89%E5%AE%B3%E5%9E%83%E5%9C%BE.png",
        url: "../harmful_classified/index",
        key: 'harmful'
      },
      {
        name: "厨余垃圾",
        image_src:
          "https://prl.yuyisoft.net/images/%E5%8E%A8%E4%BD%99%E5%9E%83%E5%9C%BE.png",
        url: "../kitchen_classified/index",
        key: 'kitchen'
      },
      {
        name: "其他垃圾",
        image_src:
          "https://prl.yuyisoft.net/images/%E5%85%B6%E4%BB%96%E5%9E%83%E5%9C%BE.png",
        url: "../other_classified/index",
        key: 'other'
      },
    ],
  },

  onLoad: function (options) {
    this.getSwiperList();
    this.getNavigateList();
  },
  //发送异步请求获取轮播图数据
  getSwiperList() {
    request({ url: "/rotate_api0411.json" }).then((result) => {
      this.setData({
        swiperList: result.data.message,
      });
    });
  },
  dispatchR(e) {
    //e = item.url
    wx.navigateTo({
      url: e.currentTarget.dataset.url, //url = data-url的url
      //e.currentTarget.dataset.url = item.url
    });
  },
  //获取导航数据
  getNavigateList() {
    request({ url: "/navigate_api0411.json" }).then((result) => {
      this.setData({
        navigateList: result.data.message,
      });
    });
  },
  dispatchN(e) {
    //e = item.url
    wx.navigateTo({
      url: e.currentTarget.dataset.url, //url = data-url的url
      //e.currentTarget.dataset.url = item.url
    });
  },
  //获取导航2数据
  getNavigate2List() {
    request({ url: "/navigate2_api0410.json" }).then((result) => {
      this.setData({
        navigate2List: result.data.message,
      });
    });
  },
  dispatchN2(e) {
    const key = e.currentTarget.dataset.key;
    wx.navigateTo({
      url: `/pages/classified/index?key=${key}`,
    });
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
});
