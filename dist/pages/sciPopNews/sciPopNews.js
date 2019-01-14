"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    newsArray: [{
      newsImageSrc: "http://filecloud.kepu.gov.cn/kepufile/article/XDyTrEnB2K44jMAA2rHYp2D6S2G7SKts.jpg",
      title: "最全！2018年度国家科学技术奖励名单",
      content: "1月8日，2018年度国家科学技术奖在京揭晓，共评出285个项目（人选）。其中，国家自然科学奖38项，国家技术发明奖67项，国家科学技术进步奖173项。中华人民共和国国际科学技术合作奖，授予简·迪安·米勒等5人。备受关注的国家最高科学技术奖，授予了两位“80后”科学家——哈尔滨工业大学刘永坦院士，中国人民解放军陆军工程大学钱七虎院士。"
    }, {
      newsImageSrc: "http://filecloud.kepu.gov.cn/kepufile/article/dF6bWxcWwRNKH8nwwRmCWJRRRZPWNXPQ.jpg",
      title: "百度推出《科学大咖秀》AI科普书 带你走进会动的科普世界",
      content: "近日，2019年北京图书订货会在中国国际展览中心拉开帷幕，许多家长都带着孩子来到现场挑选心仪的图书，凛冽的寒风也挡不住小朋友们对知识的向往。而1月10日下午，在百度联合人民东方出版传媒有限公司举办“AI科普书新书发布会”上，正式宣布推出的《百度AI科普书-科学大咖秀》图书，将带领青少年走进一个全新、生动、立体的科普世界。"
    }, {
      newsImageSrc: "http://filecloud.kepu.gov.cn/kepufile/article/8Ak3jQ8fYfSardWAzW6dWMh3zGMnfRHk.jpg",
      title: "张柏春：传统工艺的科学认知",
      content: "2015年，中国共产党十八届五中全会作出“构建中华优秀传统文化传承体系，加强文化遗产保护，振兴传统工艺”的战略决策。为落实中央的决策，国务院在2017年3月发布《中国传统工艺振兴计划》，明确提出振兴传统工艺的要求、任务和措施。领会国家的战略部署，分析传统工艺的丰富科技内涵，我们深感科技界肩负着研究、保护和振兴传统工艺的使命。"
    }]
  },
  switchToNewsDetails: function switchToNewsDetails(e) {
    var index = e.currentTarget.id;
    var news = this.data.newsArray[index];

    wx.navigateTo({
      url: "/pages/newsDetails/newsDetails?news=" + JSON.stringify(news)
    });
  }
});