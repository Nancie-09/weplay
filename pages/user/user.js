//index.js
//获取应用实例
var app = getApp()
var myData = require('../../utils/data')
var util = require('../../utils/util')

Page({
  // 页面初始数据
  data: {
    userData:myData.userData(),
    addrDate:util.replacePhone(myData.userData().addrs,true)
  }
})
