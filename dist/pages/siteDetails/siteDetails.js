"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    siteIntroductionContent: "中国地质大学逸夫博物馆是国家三级博物馆，是首家被认定为国家AAAA级旅游景区的高校博物馆，是全国中小学生研学实践教育基地、全国科普教育基地、全国青少年科技教育基地、全国古生物教育基地、全国中小学环境教育社会实践基地、全国国土资源科普基地、武汉市爱国主义教育基地、2017武汉十大博物馆。中国地质大学逸夫博物馆的前身可以追溯到北京地质学院博物馆，始建1952年。建馆初期，标本主要继承了北京大学地质系、清华大学地质系、天津大学（北洋大学）地质系和唐山铁道学院地质科的收藏，历史己逾百年。学校迁址武汉时，部分标本也运至武汉，1982年武汉地质学院博物馆正式对外开放，1987年更名为中国地质大学（武汉）博物馆。2001年，受邵逸夫基金会和教育部专项资金资助，博物馆大楼建设启动，并于2003年落成，并更名为中国地质大学逸夫博物馆。",

    // accordion:{
    // },

    STATUS_BAR_HEIGHT: wx.STATUS_BAR_HEIGHT,
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT
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
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  }
});