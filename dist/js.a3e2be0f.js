// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"rouletteWheel/js/global.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Global =
/*#__PURE__*/
function () {
  function Global() {
    _classCallCheck(this, Global);
  }

  _createClass(Global, [{
    key: "IsPC",

    /**
     * 判断是否为 PC 端，若是则返回 true，否则返回 flase
     */
    value: function IsPC() {
      var userAgentInfo = navigator.userAgent,
          flag = true,
          Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];

      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }

      return flag;
    }
  }, {
    key: "easeOut",

    /**
     * 缓动函数，由快到慢
     * @param {Num} t 当前时间
     * @param {Num} b 初始值
     * @param {Num} c 变化值
     * @param {Num} d 持续时间
     */
    value: function easeOut(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
      return -c / 2 * (--t * (t - 2) - 1) + b;
    }
  }, {
    key: "windowToCanvas",
    value: function windowToCanvas(canvas, e) {
      var bbox = canvas.getBoundingClientRect(),
          x = this.IsPC() ? e.clientX || event.clientX : e.changedTouches[0].clientX,
          y = this.IsPC() ? e.clientY || event.clientY : e.changedTouches[0].clientY;
      return {
        x: x - bbox.left,
        y: y - bbox.top
      };
    }
  }, {
    key: "drawText",

    /**
     * 绘制自动换行的文本
     * @param {Obj} context
     * @param {Str} t          文本内容
     * @param {Num} x          坐标
     * @param {Num} y          坐标
     * @param {Num} w          文本限制宽度
     * @param {Num} lineHeight 行高
     */
    value: function drawText(context, t, x, y, w) {
      var lineHeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 20;
      var chr = t.split(''),
          temp = '',
          row = [];

      for (var a = 0; a < chr.length; a++) {
        if (context.measureText(temp).width < w) {
          ;
        } else {
          row.push(temp);
          temp = '';
        }

        temp += chr[a];
      }

      ;
      row.push(temp);

      for (var b = 0; b < row.length; b++) {
        context.fillText(row[b], x, y + (b + 1) * lineHeight);
      }

      ;
    }
  }, {
    key: "roundedRect",

    /**
     * 定义圆角矩形的方法
     * @param {Obj} context
     * @param {Num} cornerX 
     * @param {Num} cornerY 
     * @param {Num} width 
     * @param {Num} height 
     * @param {Num} cornerRadius 
     */
    value: function roundedRect(context, cornerX, cornerY, width, height, cornerRadius) {
      if (width > 0) context.moveTo(cornerX + cornerRadius, cornerY);else context.moveTo(cornerX - cornerRadius, cornerY);
      context.arcTo(cornerX + width, cornerY, cornerX + width, cornerY + height, cornerRadius);
      context.arcTo(cornerX + width, cornerY + height, cornerX, cornerY + height, cornerRadius);
      context.arcTo(cornerX, cornerY + height, cornerX, cornerY, cornerRadius);

      if (width > 0) {
        context.arcTo(cornerX, cornerY, cornerX + cornerRadius, cornerY, cornerRadius);
      } else {
        context.arcTo(cornerX, cornerY, cornerX - cornerRadius, cornerY, cornerRadius);
      }
    }
  }]);

  return Global;
}();

exports.default = Global;
},{}],"rouletteWheel/js/index.js":[function(require,module,exports) {
"use strict";

var _global = _interopRequireDefault(require("./global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

window.onload = function () {
  var rw = new RouletteWheel({
    canvasName: '#rw',
    width: '500',
    height: '500',
    awards: [// 转盘内的奖品个数以及内容
    '大保健', '话费10元', '话费20元', '话费30元', '保时捷911', '周大福土豪金项链']
  });
};

var RouletteWheel =
/*#__PURE__*/
function (_Global) {
  _inherits(RouletteWheel, _Global);

  function RouletteWheel(params) {
    var _this;

    _classCallCheck(this, RouletteWheel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RouletteWheel).call(this));
    _this.width = params.width;
    _this.height = params.height;
    _this.centerX = params.centerX;
    _this.centerY = params.centerY;
    _this.outsideRadius = params.outsideRadius;
    _this.evenColor = params.evenColor;
    _this.oddColor = params.oddColor;
    _this.loseColor = params.odd;
    _this.textColor = params.textColor;
    _this.awards = params.awards || [];
    _this.startRadian = params.startRadian || 0;
    _this.duration = params.duration || 4000;
    _this.velocity = params.velocity || 10; // 回调函数

    _this.finish = params.finish;
    return _this;
  }

  _createClass(RouletteWheel, [{
    key: "initCanvas",
    value: function initCanvas() {
      var canvas = document.querySelector(this.canvasName);
      canvas.width = this.width;
      canvas.height = this.height;
      var ctx = canvas.getContext('2d');

      for (var i = 0; i < this.awards.length; i++) {
        // const award = awards[i]
        var _startR = this.startRadian + this.awardRadian * i;

        var _endR = _startR + this.awardRadian;

        if (i % 2 === 0) ctx.fillStyle = "#FF6766";else ctx.fillStyle = "#FD5757";
        ctx.beginPath(); //开始绘制路径

        ctx.moveTo(250, 250); //将当前位置移动到新的目标点

        ctx.arc(250, 250, this.radius, _startR, _endR);
        ctx.closePath(); //绘制路径

        ctx.fill();
      } // ctx.beginPath(); //开始绘制路径
      // ctx.moveTo(250, 250); //将当前位置移动到新的目标点
      // ctx.arc(250, 250, 250, Math.PI / 2, Math.PI);
      // ctx.closePath(); //绘制路径
      // ctx.fillStyle = "#ccc"; //填充背景颜色
      // ctx.fill();
      // ctx.beginPath(); //开始绘制路径
      // ctx.moveTo(250, 250); //将当前位置移动到新的目标点
      // ctx.arc(250, 250, 250, Math.PI, Math.PI * 1.5);
      // ctx.closePath(); //绘制路径
      // ctx.fillStyle = "#ddd"; //填充背景颜色
      // ctx.fill();
      // ctx.beginPath(); //开始绘制路径
      // ctx.moveTo(250, 250); //将当前位置移动到新的目标点
      // ctx.arc(250, 250, 250, Math.PI * 1.5, Math.PI * 2);
      // ctx.closePath(); //绘制路径
      // ctx.fillStyle = "#aaa"; //填充背景颜色
      // ctx.fill();

    }
  }]);

  return RouletteWheel;
}(_global.default);
},{"./global":"rouletteWheel/js/global.js"}],"../node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56721" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","rouletteWheel/js/index.js"], null)
//# sourceMappingURL=/js.a3e2be0f.js.map