"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    accordion: {}
  },
  onLoad: function onLoad(options) {
    console.log(options.poi);
    var poi = JSON.parse(options.poi);
    this.setData({
      poi: poi,
      markers: [{
        title: poi.title,
        id: poi.id,
        latitude: poi.location.lat,
        longitude: poi.location.lng,
        iconPath: "../../static/images/location-doodle-48-blue.png",
        width: 30,
        height: 30
      }]
    });
  }
});