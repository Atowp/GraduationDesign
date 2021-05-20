// pages/search/index.js
Page({
  data: {
    itemSources: [],
    keyword: "",
  },
  onLoad: function (options) {},
  async searchHanlde(e) {
    const list = await wx.$get(`/user/order?keyword=${this.data.keyword}`);
    console.log(list, "list");
  },
  inputHandle(e) {
    this.setData({
      keyword: e.detail.value,
    });
  },
});
