//app.js
const {
  post,
  get
} = require('./request/index')
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function (options) {
    this.login();
  },
  login() {
    wx.login({
      success: (res) => {
        post("/mpLogin", {
          code: res.code
        }).then((res) => {
          wx.setStorage({
            key: "token",
            data: res.token
          })
        })
      }
    })
  },
  onShow: function (options) {

  },
  onHide: function () {

  },
  onError: function (msg) {

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function (options) {

  }
});