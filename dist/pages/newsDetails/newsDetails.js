'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {},
  onLoad: function onLoad(options) {
    var news = JSON.parse(options.news);
    this.setData({
      news: news
    });
  }
});