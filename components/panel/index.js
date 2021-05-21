// components/panel/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlota: true,
  },

  properties: {
    item: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    showIndex: 0,
    fold: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle() {
      this.setData({
        fold: !this.data.fold,
      });
    },
    cancel() {
      const that = this;
      wx.showModal({
        title: "提示",
        content: "是否确认取消订单",
        success: (res) => {
          if (res.confirm) {
            wx.$put(`/user/order/${this.data.item._id}`, { status: -1 }).then(() => that.triggerEvent('reload'));
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    delete(e) {
      const that = this;
      wx.showModal({
        title: "提示",
        content: "是否确认删除改订单(无法找回)",
        success: (res) => {
          if (res.confirm) {
            wx.$delete(`/user/order/${this.data.item._id}`).then(() => that.triggerEvent('reload'));
            
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
  },
});
