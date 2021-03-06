// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    floorData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getFloorData();
  },
  getFloorData:function(e){
    const floorData = {
      "bannerList": {
        "imgul":
        '/image/list1.png'
      },
     "shopList":[{
          id: 'hongzao',
          imageUrl: '/image/s8.png',
          title: "红枣",
          price: "0.08",
          count: "500",
          unit: "g"
        },
        {
          id: 'qiyiguo',
          imageUrl: '/image/s9.png',
          title: "奇异果",
          price: "1.08",
          count: "2",
          unit: "个"
        },
        {
          id: 'lihuaguo',
          imageUrl: '/image/s7.png',
          title: "梨花带雨果",
          price: "0.55",
          count: "3",
          unit: "个"
        }
      ]
    }
    this.setData({
      floorData 
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