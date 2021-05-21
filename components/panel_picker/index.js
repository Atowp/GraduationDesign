// components/panel2/index.js
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
    statusDict: {
      "-1": "交易失败",
      0: "未接取",
      1: "未接取",
      2: "交易成功",
    }
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
    gain(){
      const that = this;
      wx.showModal({
        title: "提示",
        content: "是否确认接取订单",
        success: (res) => {
          if (res.confirm) {
            wx.$put(`/picker/order/${this.data.item._id}`, { status: 1 }).then(() => that.triggerEvent('reload'));
          } else if (res.gain) {
            console.log("用户点击接取");
          };
        }
      })
    },
    finish(){
      const that = this;
      wx.showModal({
        title: "提示",
        content: "是否确认完成订单",
        success: (res) => {
          if (res.confirm) {
            wx.$put(`/picker/order/${this.data.item._id}`, { status: 2 }).then(() => that.triggerEvent('reload'));
          } else if (res.gain) {
            console.log("用户点击完成");
          };
        }
      })
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
    }
  },
});
