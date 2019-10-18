// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    imgs: [
      '/temp/images/1.jpg', '/temp/images/2.jpg', '/temp/images/3.jpg'
    ],
 
    titles: ["流行", "新款", "精选", "流行", "新款", "精选"],

  },
  tabClick(e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      search: this.search.bind(this)
    })
  },
  search: function(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
      }, 200)
    })
  },
  selectResult: function(e) {
    console.log('select result', e.detail)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

})