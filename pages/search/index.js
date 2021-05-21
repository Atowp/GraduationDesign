// pages/search/index.js
Page({
  data: {
    itemSources: [],
    keyword: "",
    list: [],
    index: 0
  },
  onLoad: function (options) {},
  async searchHanlde(e) {
    const list = await wx.$get(`/user/order?keyword=${this.data.keyword}`);
    //console.log(list);
    let index = 0;
    for(let i=0; i<list.length; i++){
      this.setData({
        list: list,
        index: i
      });
      console.log(i);
    }
  },
  inputHandle(e) {
    this.setData({
      keyword: e.detail.value,
    });
  },
});
