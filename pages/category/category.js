// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     classify:[],
     selectIndex:0,//默认选中
     right:{}
  },
  //处理菜单的点击事件
  handleMenuchange:function(e){
    this.setData({
      // setData（）函数用于将逻辑层数据发送到视图层，同时对应的改变this.data的值
      selectIndex:e.currentTarget.dataset.index,
      // 点击左边对应的内容赋值给右边
      right:this.data.classify[e.currentTarget.dataset.index]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*获取数据*/ 
    let classify = require("../../data/cate-detail")
    // 把左边对应的下标的那个数组与右边相对应
    let right = classify[this.data.selectIndex];
    console.log(classify);
    /*将数据放在data中 */
    this.setData({
      /*放入形式key对应的内容 */
      classify,right
     
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})