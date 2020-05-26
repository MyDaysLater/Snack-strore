// pages/cart/cart.js
import { asyncShowModal } from "../../asyncUtil/asyncUtil.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[],
    allchecked:true,//默认被选中
    totleprice:0
  },
  // 按钮的点击事件
  handleItemCheck:function(e){
    console.log(e)
    // 点击项所在的位置
    let index = e.currentTarget.dataset.index;
    //  获取小车的数据
    let carts = this.data.carts;
    // 修改小车项 checked 的原先值 取反
    carts[index].checked = !carts[index].checked;
    if( carts[index].checked===false){
      this.setData({
        allchecked:false
      })
    }else{
      this.setData({
        allchecked:true
      })
    }
    this.saveCart(carts)
  },
  handAllCheck:function(e){
      // 全局全选的按钮
   let flag = this.data.allchecked
   flag = !flag
   this.setData({
     allchecked:flag
   })
    //  获取小车的数据
    let carts = this.data.carts;
    //遍历carts,得到每个数组对象里面的checked的值
    //再根据这个值做出改变
    carts.map(function(v,i){
       if(!v.checked){//!false===true
         v.checked = !v.checked;
       }
    })
    this.saveCart(carts)
  },

  sub: async function(e){
    //功能当点击减的时候会对应发生数量变化,并且对应的总价也跟着变化
   // 点击项所在的位置
   let index = e.currentTarget.dataset.index;
   //  获取小车的数据
   let carts = wx.getStorageSync("carts")
   // 改变的是原数据!!注意
   
      if(carts[index].num-1===0){
        let res = await asyncShowModal("您确定要删除该商品吗?");
         if(res.confirm){
           carts.splice(index,1);
         }
        }else{
          carts[index].num--;
        }
        this.saveCart(carts);
  },
  add:function(e){
    let index = e.currentTarget.dataset.index;
   //  获取小车的数据
   let carts = wx.getStorageSync("carts")
   // 改变的是原数据!!注意
   carts[index].num++
       this.setData({
          carts
       })
       
       wx.setStorageSync('carts', carts)
      //  wx.setStorageSync("carts",carts)
  },
  removeitem(e){
   // 获取当前点击的项
   let index = e.currentTarget.dataset.index;
   // 获取小车的数据
   let carts = this.data.carts;
   // 移除该商品项
   carts.splice(index,1);
   this.saveCart(carts);
  },
  //小车的逻辑
  saveCart(carts){
    //计算总价
    let totleprice = 0;
    carts.forEach(function(v,i){
      if(v.checked){
        totleprice += v.num*v.data.price;
      }
    })
    this.setData({
      carts,totleprice
    })
    wx.setStorageSync('carts', carts)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
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
    let carts = wx.getStorageSync("carts") || [];
    //计算总价
    let totleprice = 0;
    carts.forEach(function(v,i){
      if(v.checked){
        totleprice += v.num * v.data.price;
      }
    })
    this.setData({
       carts,totleprice
    })
    console.log(carts)
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