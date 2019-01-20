"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var app = getApp();

var items = ["账号信息", "收藏", "设置", "关于"];

exports.default = Page({
  data: {
    WIN_WIDTH: wx.WIN_WIDTH,
    STATUS_BAR_HEIGHT: wx.STATUS_BAR_HEIGHT,
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT,
    // motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),

    // NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT,
    // scrollTop: 0,
    items: items,
    imgHeight: parseInt(wx.WIN_WIDTH / 1125 * 628),
    customStyle: {
      "background-color": "#eee",
      height: "46px",
      "line-height": "46px"
    }
  },
  //事件处理函数
  bindViewTap: function bindViewTap() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  onLoad: function onLoad() {
    var _this = this;

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = function (res) {
        _this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: function success(res) {
          app.globalData.userInfo = res.userInfo;
          _this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function getUserInfo(e) {
    console.log(e);
    if (e.detail.hasOwnProperty("userInfo")) {
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      });
    } else {
      // app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: {},
        hasUserInfo: false
      });
    }
  }
});