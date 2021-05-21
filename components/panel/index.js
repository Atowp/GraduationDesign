// components/panel/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlota: true
  },

  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    panel: function (e) {
      if (e.currentTarget.dataset.index != this.data.showIndex) {
        this.setData({
          showIndex: e.currentTarget.dataset.index,
        });
      } else {
        this.setData({
          showIndex: 0,
        });
      };
    }
  }
})
