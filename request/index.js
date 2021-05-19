export const request = (params) => {
    //定义公共的url

    const baseUrl = "https://prl.yuyisoft.net/api";
    return new Promise((resolve,reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (result)=>{
                resolve(result);
            },
            fail: (err)=>{
                reject(err);
            }
        });
    })
}

export const request2 = ({ url = "", data = {}, method = "POST", header = {} } = {}) => {
    const baseUrl = "http://localhost:8310";
    return new Promise((resolve, reject) => {
      const token  = wx.getStorageSync('token');
      if (token) {
        header.Authorization = token;
      }
      if (!url.startsWith('http')) {
        url = baseUrl + url
      }
      return wx.request({
        method,
        url,
        data,
        header,
        success:({data, statusCode}) => {
            // 根据http状态码判断请求状态，如果是401，403之类的没有权限的或者是
            // token过期了，就把token清掉，返回登录页面
            // if (statusCode > 401 && statusCode < 405) {
            //   wx.removeStorageSync('token');
            //   wx.redirectTo({url: '/login'})
            //   return false;
            // } 
            resolve(data);
        },
        fail: (response => {
          reject(response);
        })
      });
    });
  }