import { request } from "../../request/index.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //侧边栏
    leftMenuList: [],
    //内容
    rightContent: [],
    //侧边栏索引
    currentIndex: 0,
    //选中的id
    allId: [],
    num: 0,
    key: "harmful",
    selected: [],
    dict: {
      harmful: {
        txt: "有害垃圾",
        url: "/harmful_garbage.json",
      },
      recycle: {
        txt: "可回收垃圾",
        url: "/recycle_classification0412.json",
      },
      kitchen: {
        txt: "厨余垃圾",
        url: "/kitchen_waste.json",
      },
      other: {
        txt: "其他垃圾",
        url: "/other_garbage.json",
      },
    },
  },
  //接口的返回数据
  Classification: [],

  onLoad: function (options) {
    this.data.key = options.key ? options.key : this.data.key;
    this.getClassified();
    this.setData({
      selected: new Set(),
    });
  },
  getClassified() {
    const url = this.data.dict[this.data.key].url;
    request({
      url,
    }).then((res) => {
      this.Classification = res.data.message;
      let leftMenuList = this.Classification.map((v) => v.class_name);
      let rightContent = this.Classification[0].children;

      this.setData({
        leftMenuList,
        rightContent,
      });
    });
  },
  handleItemTap(e) {
    const { index } = e.currentTarget.dataset;
    let rightContent = this.Classification[index].children;
    this.setData({
      currentIndex: index,
      rightContent,
    });
  },
  handleClass() {
    const params = JSON.stringify([...this.data.selected]);
    wx.navigateTo({
      url: '/pages/confirm/index?detail='+params,
    })
  },
  getSelected(e) {
    const { id } = e.currentTarget.dataset; //101,102,103,...
    const picked = e.currentTarget.dataset.picked;
    const allId = wx.getStorageSync("allId") || [];
    const { rightContent } = this.data;
    /** opearate allId */
    if (allId.indexOf(+id) !== -1) {
      //已经存在，删除
      allId.splice(allId.indexOf(+id), 1);
    } else {
      //不存在，添加
      allId.push(+id);
    }
    wx.setStorageSync("allId", allId);
    this.setData({
      num: allId.length,
      allId,
    });
    /** 操作本地视图 */
    const currentRightContent = rightContent.find(
      (item) => +item.class_id === +id
    );
    if (!currentRightContent) return;
    currentRightContent.picked = !picked;
    this.setData({
      rightContent: [...rightContent],
    });
    // 新加一个Set对象管理选中的元素
    const { selected } = this.data;
    const { class_name } = currentRightContent;
    if (selected.has(class_name)) {
      selected.delete(class_name);
    } else {
      selected.add(class_name);
    }
    this.setData({
      selected,
      num: selected.size
    })
  },
});
