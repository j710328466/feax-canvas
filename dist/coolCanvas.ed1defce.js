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
})({"coolCanvas/lessons/lollipop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Lollipop = /*#__PURE__*/function () {
  function Lollipop(opt) {
    _classCallCheck(this, Lollipop);

    this.opt = _objectSpread({
      canvas: document.querySelector('#paper'),
      // 画布
      width: document.documentElement.clientWidth,
      // 宽度
      height: document.documentElement.clientHeight,
      // 高度
      bgColor: '#000'
    }, opt);
    this.ctx = this.opt.canvas.getContext('2d'); // 初始化画布

    this.opt.canvas.width = this.opt.width;
    this.opt.canvas.height = this.opt.height;
    this.opt.canvas.style.backgroundColor = this.opt.bgColor;
    this.render();
  }

  _createClass(Lollipop, [{
    key: "render",
    value: function render() {
      this._drawCircle(this.ctx);

      this._drawStick(this.ctx);

      this._drawHalfCircle(this.ctx);
    }
    /**
     * 画圆
     * @param {*} ctx 
     */

  }, {
    key: "_drawCircle",
    value: function _drawCircle(ctx) {
      ctx.beginPath();
      ctx.arc(300, 300, 50, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = '#fff';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#fff';
      ctx.fill();
    }
    /**
     * 棍子
     * @param {*} ctx 
     */

  }, {
    key: "_drawStick",
    value: function _drawStick(ctx) {
      ctx.beginPath();
      ctx.moveTo(340, 340);
      ctx.lineTo(450, 450);
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#fff';
      ctx.stroke();
      ctx.closePath();
    }
  }, {
    key: "_drawHalfCircle",
    value: function _drawHalfCircle(ctx) {
      ctx.beginPath();
      ctx.arc(300, 300, 30, 0, Math.PI * 0.6, false);
      ctx.shadowBlur = 5;
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#ccc';
      ctx.stroke();
    }
  }]);

  return Lollipop;
}();

exports.default = Lollipop;
},{}],"coolCanvas/lessons/nightSky.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lesson2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function lesson2(params) {
  // 初始化星空
  var nightSky = new NightSky({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
}
/**
 * 星空初始化
 */


var NightSky = /*#__PURE__*/function () {
  function NightSky(opt) {
    _classCallCheck(this, NightSky);

    this.opt = _objectSpread({
      width: 500,
      height: 500,
      num: 120,
      canvas: document.getElementById('paper')
    }, opt);
    this.opt.canvas.width = this.opt.width;
    this.opt.canvas.height = this.opt.height;
    this.ctx = this.opt.canvas.getContext('2d');
    this.opt.canvas.style.backgroundColor = '#000';
    this.starList = [];
    this.draw = this.draw;
    this.init();
  }

  _createClass(NightSky, [{
    key: "init",
    value: function init() {
      this.drawStar();
      this.animate();
    }
  }, {
    key: "drawStar",
    value: function drawStar() {
      var _this$opt = this.opt,
          width = _this$opt.width,
          height = _this$opt.height,
          num = _this$opt.num;

      for (var i = 0; i < num; i++) {
        this.starList[i] = new Star({
          maxRadius: 3,
          ctx: this.ctx,
          width: width,
          height: height
        });
        this.starList[i].draw();
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var ctx = this.ctx;
      var starList = this.starList;
      var _this$opt2 = this.opt,
          width = _this$opt2.width,
          height = _this$opt2.height;

      function _move() {
        ctx.clearRect(0, 0, width, height);

        for (var i in starList) {
          starList[i].move();
        }

        window.requestAnimationFrame(_move);
      }

      window.requestAnimationFrame(_move);
    }
  }, {
    key: "draw",
    value: function draw(val) {
      return val;
    }
  }]);

  return NightSky;
}();

var Star = /*#__PURE__*/function () {
  function Star(opt) {
    _classCallCheck(this, Star);

    var width = opt.width,
        height = opt.height,
        _opt$maxRadius = opt.maxRadius,
        maxRadius = _opt$maxRadius === void 0 ? 2 : _opt$maxRadius,
        ctx = opt.ctx,
        _opt$speed = opt.speed,
        speed = _opt$speed === void 0 ? 0.5 : _opt$speed;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.height = height;
    this.width = width;
    this.speed = speed;
    this.maxRadius = maxRadius;
    this.ctx = ctx;
    this.r = Math.random() * maxRadius;
    var alpha = (Math.floor(Math.random() * 10) + 1) / 10;
    this.color = "rgba(255, 255, 255, ".concat(alpha, ")");
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.shadowBlur = this.r * 2;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.r * Math.random(), 0, 2 * Math.PI, false);
      this.ctx.closePath();
      this.ctx.fill();
    }
  }, {
    key: "move",
    value: function move() {
      this.y -= this.speed;

      if (this.y <= -10) {
        this.y = this.height + 10;
      }

      this.draw();
    }
  }]);

  return Star;
}();
},{}],"coolCanvas/lessons/move.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Move = /*#__PURE__*/function () {
  function Move(opt) {
    _classCallCheck(this, Move);

    var option = _objectSpread({
      canvas: document.getElementById('paper'),
      width: document.documentElement.clientWidth,
      // 宽度
      height: document.documentElement.clientHeight,
      // 高度
      bgColor: '#000',
      para: {
        num: 100,
        color: false,
        //  颜色  如果是false 则是随机渐变颜色
        r: 0.9,
        //   圆每次增加的半径 
        o: 0.09 //      判断圆消失的条件，数值越大，消失的越快

      }
    }, opt);

    var canvas = option.canvas,
        width = option.width,
        height = option.height,
        bgColor = option.bgColor;
    this.option = option;
    this.round_arr = [];
    this.ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    canvas.style.backgroundColor = bgColor;
    this.init(this);
  }

  _createClass(Move, [{
    key: "init",
    value: function init(opt) {
      var tempSum = 0;

      window.onmousemove = function (event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        if (tempSum < 5) {
          tempSum++;
        } else {
          opt.round_arr.push({
            mouseX: mouseX,
            mouseY: mouseY,
            r: opt.option.para.r,
            // 设置半径每次增大的数值        
            o: 1 //  判断圆消失的条件，数值越大，消失得越快

          });
          tempSum = 0;
          opt.animate();
        }
      };
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this$option = this.option,
          para = _this$option.para,
          width = _this$option.width,
          height = _this$option.height;
      var color = 0,
          color2;
      var ctx = this.ctx;
      var round_arr = this.round_arr;

      if (!para.color) {
        color += Math.random();
        color2 = 'hsl(' + color + ',100%,80%)';
      }

      console.log(color);

      function _move() {
        ctx.clearRect(0, 0, width, height);

        for (var i = 0; i < round_arr.length; i++) {
          ctx.fillStyle = color2;
          ctx.beginPath();
          ctx.arc(round_arr[i].mouseX, round_arr[i].mouseY, round_arr[i].r, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
          round_arr[i].r += para.r;
          round_arr[i].o -= para.o;

          if (round_arr[i].o <= 0) {
            round_arr.splice(i, 1);
            i--;
          }
        }
      }

      window.requestAnimationFrame(_move);
    }
  }]);

  return Move;
}();

exports.default = Move;
},{}],"coolCanvas/index.js":[function(require,module,exports) {
"use strict";

var _lollipop = _interopRequireDefault(require("./lessons/lollipop"));

var _nightSky = _interopRequireDefault(require("./lessons/nightSky"));

var _move = _interopRequireDefault(require("./lessons/move"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  var move = new _move.default();
};
},{"./lessons/lollipop":"coolCanvas/lessons/lollipop.js","./lessons/nightSky":"coolCanvas/lessons/nightSky.js","./lessons/move":"coolCanvas/lessons/move.js"}],"../node_modules/_parcel-bundler@1.12.4@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58820" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["../node_modules/_parcel-bundler@1.12.4@parcel-bundler/src/builtins/hmr-runtime.js","coolCanvas/index.js"], null)
//# sourceMappingURL=/coolCanvas.ed1defce.js.map