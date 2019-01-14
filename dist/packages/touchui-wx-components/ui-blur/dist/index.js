'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StyleHelper = require('../../libs/StyleHelper.js');

var _StyleHelper2 = _interopRequireDefault(_StyleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Component({
  behaviors: [],
  properties: {
    url: {
      type: String,
      observer: function observer(val) {
        this.setBlur();
      }
    },
    height: {
      type: Number | String
    }
  },
  data: {
    selfStyle: {}
  },
  ready: function ready() {
    this.setBlur();
  },

  methods: {
    setBlur: function setBlur() {
      var style = { height: this.data.height };
      var blurStyle = {};
      var blurClass = '';

      if (wx.IS_IOS) {
        style.background = 'url(\'' + this.data.url + '\') no-repeat center -100px / 210%';
        blurClass = 'ui-blur-ios';
      } else {
        blurStyle.backgroundImage = 'url(\'' + this.data.url + '\')';
        blurClass = 'ui-blur-android';
      }
      this.setData({
        selfStyle: _StyleHelper2.default.getPlainStyle(style),
        blurStyle: _StyleHelper2.default.getPlainStyle(blurStyle),
        blurClass: blurClass
      });
    }
  }
});