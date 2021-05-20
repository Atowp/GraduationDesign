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

const request2 = ({ url = "", data = {}, method = "POST", header = {} } = {}) => {
    //  const baseUrl = "https://gomong.atowp.top";
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

  export const post = (url, data, options) => {
    return request2({url, data, method: 'POST', ...options})
  }
  
  export const get = (url, options) => {
    return request2({url, method: 'GET', ...options})
  }
  export const put = (url, data, options) => {
    return request2({url, data, method: 'PUT', ...options})
  }
  // 因为delete是JS的关键字
  export const delete1 = (url, options) => {
    return request2({url, method: 'DELETE', ...options})
  }
  
  