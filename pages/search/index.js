// pages/search/index.js
Page({
  data: {
    itemSources: [],
    keyword: ""
  },
  onLoad: function (options) {},
  async searchHanlde(e) {
    const itemSources = await wx.$get(`/user/order?keyword=${this.data.keyword}`);
    this.setData({
      itemSources
    })
  },
  inputHandle(e) {
    this.setData({
      keyword: e.detail.value,
    });
  },
});
