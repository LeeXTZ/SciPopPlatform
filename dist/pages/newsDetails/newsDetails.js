"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    STATUS_BAR_HEIGHT: wx.STATUS_BAR_HEIGHT,
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT
  },
  onLoad: function onLoad(options) {
    var news = JSON.parse(options.news);
    this.setData({
      news: news
    });
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  }
});