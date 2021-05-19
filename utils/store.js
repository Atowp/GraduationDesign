class Station {
    constructor() {
      /** 用于储存所有订阅者 */
      this.pools = []
    }
    /**
     * @func 订阅一个频道
     * @param { String } channel 频道名
     * @param { Function } callback 回调函数，接收到相同频道信息时触发
     */
    subscribe(channel, callback) {
      this.pools.push({ channel, callback })
    }
    /**
     * @func 取消订阅
     * @param { String } channel 频道名
     */
    unSubscribe(channel) {
      const itemIndex = this.pools.findIndex((item) => item.channel === channel)
      if (itemIndex !== -1) {
        this.pools.splice(itemIndex, 1)
        /** 递归取消订阅 */
        this.unSubscribe(channel)
      }
    }
    /**
     * @func 发布广播
     * @param { String } channel
     * @param { Any } value
     */
    publish(channel, value) {
      for (const item of this.pools.filter((item) => item.channel === channel)) {
        item.callback(value)
      }
    }
  }
  
  export default new Station();
  