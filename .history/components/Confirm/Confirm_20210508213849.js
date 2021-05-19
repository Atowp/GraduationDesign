Component({
  data: {
    name: [],
    address: [],
    latitude: [],
    longitude: [],
    hasLocation: false,

    inputValue: 0,

    array: [
      '8:00-9:00', '9:00-10:00', '10:00-11:00','11:00-12:00',
      '14:00-15:00',"15:00-16:00","16:00-17:00"
    ],
    objectArray: [
      {
        id: 0,
        name: '8:00-9:00'
      },
      {
        id: 1,
        name: '9:00-10:00'
      },
      {
        id: 2,
        name: '10:00-11:00'
      },
      {
        id: 3,
        name: '11:00-12:00'
      },
      {
        id: 4,
        name: '14:00-15:00'
      },
      {
        id: 5,
        name: '15:00-16:00'
      },
      {
        id: 6,
        name: '16:00-17:00'
      }
    ],
    index: 0
  },
  properties: {
    
  },
  methods: {
    inputValue(e){
      this.setData({
        inputValue: e.detail.value
      })
    },
    test(){
      wx.getStorage({
      key: '__plugins__/wx76a9a06e5b4e693e/chooseLocation',
      success (res) {
        console.log(res.data);
      }
      })
    },
    selectPoint(){
      const key = 'JJMBZ-Q52CF-PCRJ4-NDBGH-DCTC6-JKBRD'; //使用在腾讯位置服务申请的key
      const referer = '句芒上门回收'; //调用插件的app的名称
      const location = JSON.stringify({
        latitude: 39.89631551,
        longitude: 116.323459711
      });
      wx.navigateTo({
      url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}`,
      });
      wx.getStorage({
        key: 'key',
        success (res) {
          console.log(res.data)
        }
      })
    },

    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    }
  },
})