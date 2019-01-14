'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StyleHelper = require('../../libs/StyleHelper.js');

var _StyleHelper2 = _interopRequireDefault(_StyleHelper);

var _WxHelper = require('../../libs/WxHelper.js');

var _WxHelper2 = _interopRequireDefault(_WxHelper);

var _MultiHelper = require('../../libs/MultiHelper.js');

var _MultiHelper2 = _interopRequireDefault(_MultiHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChildPath = '../../ui-segment-item/dist/index';

exports.default = Component({
  relations: _WxHelper2.default.getChildRelation(ChildPath),

  behaviors: [],
  properties: {
    index: {
      type: Number | String,
      value: 0,
      observer: function observer(index) {
        this.handleIndexChange(index, true);
      }
    },
    itemStyle: {
      type: Object | String
    },
    activeItemStyle: {
      type: Object | String
    }
  },
  data: {
    selfIndex: 0,
    children: []
  },
  ready: function ready() {
    this._init();
  },

  methods: {
    _init: function _init() {
      this._initChildren();
      this._setItem();
    },
    _initChildren: function _initChildren() {
      var children = this.getRelationNodes(ChildPath);
      this.setData({
        children: children
      });
    },
    _setItem: function _setItem() {
      var _data = this.data,
          children = _data.children,
          selfIndex = _data.selfIndex,
          itemStyle = _data.itemStyle,
          activeItemStyle = _data.activeItemStyle;


      var style = _StyleHelper2.default.getPlainStyle(itemStyle);
      var activeStyle = _StyleHelper2.default.getMergedPlainStyles([itemStyle, activeItemStyle]);

      children.forEach(function (node, index) {
        node.setData({
          selfStyle: index === selfIndex ? activeStyle : style,
          active: index === selfIndex
        });
      });
    },
    handleIndexChange: function handleIndexChange(index) {
      this.setData({
        selfIndex: index
      });
      this._setItem();
      this.triggerEvent('change', { index: index });
    }
  }
});