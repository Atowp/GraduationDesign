import {request} from "../../request/index.js";
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
    num: 0
  },
  //接口的返回数据
  Classification: [],

  onLoad: function (options) {
    this.getClassified();
  },
  getClassified(){
    request({
      url: "/recycle_classification0412.json"
    }).then(res => {
      this.Classification = res.data.message;
      let leftMenuList = this.Classification.map(v => v.class_name);
      let rightContent = this.Classification[0].children;

      this.setData({
        leftMenuList, rightContent
      })
    })
  },
  handleItemTap(e){
    const {index} = e.currentTarget.dataset;
    let rightContent = this.Classification[index].children;
    this.setData({
      currentIndex: index, rightContent
    })
  },
  getSelected(e){
    const {id} = e.currentTarget.dataset;//101,102,103,...
    const picked = e.currentTarget.dataset.picked;
    const allId = wx.getStorageSync("allId") || [];
    const {rightContent} = this.data;
    /** opearate allId */
    if(allId.indexOf(+id) !== -1){//已经存在，删除
      allId.splice(allId.indexOf(+id), 1);
    }else{//不存在，添加
      allId.push(+id);
    }
    wx.setStorageSync('allId', allId);
    this.setData({
      num: allId.length, allId
    });
    /** 操作本地视图 */
    const currentRightContent = rightContent.find(item=>+item.class_id === +id);
    if(!currentRightContent) return;
    currentRightContent.picked = !picked;
    this.setData({
      rightContent : [...rightContent]
    });
  }
})