Component({
  data: {
    
  },
  properties: {
    nav: {
      type: Array,
      value: []
    }
  },
  methods: {
    handleItemTap(e){
      //console.log(e.currentTarget.dataset.index);
      const {index} = e.currentTarget.dataset//0,1,2
      this.triggerEvent("toggle",{index});
    },
    dispatch(e){
      //console.log(this.current);
      wx.redirectTo({
        url: e.currentTarget.dataset.url
      })
    }
  }
})