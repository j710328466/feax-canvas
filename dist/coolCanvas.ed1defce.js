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
})({"coolCanvas/lessons/1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lesson1;

function lesson1(params) {
  var canvas = document.getElementById('demo1');
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = '#fff';
  ctx.shadowBlur = 6;
  ctx.shadowColor = '#fff';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(80, 80, 60, 0, Math.PI * 0.5, false);
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#ccc';
  ctx.shadowBlur = 5;
  ctx.shadowColor = '#fff';
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(140, 140);
  ctx.lineTo(260, 260);
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#fff';
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeRect(260, 260, 40, 40);
}
},{}],"coolCanvas/lessons/2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lesson2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.getElementById('demo1');
var ctx = canvas.getContext('2d');
var WIDTH = document.documentElement.clientWidth;
var HEIGHT = document.documentElement.clientHeight;
var starNum = 100;
var SPEED = 0.2;
var rounds = [];

function lesson2(params) {
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  for (var i = 0; i < starNum; i++) {
    rounds[i] = new RoundItem({
      index: i,
      x: Math.random() * WIDTH,
      y: Math.random() * HEIGHT
    });
    rounds[i].draw();
  }

  animate(); // 初始化星空

  var initStart = new InitStar({
    width: 100,
    height: 100,
    num: 100
  });
}

var InitStar =
/*#__PURE__*/
function () {
  function InitStar(opt) {
    _classCallCheck(this, InitStar);

    this.opt = {};
  }

  _createClass(InitStar, [{
    key: "animate",
    value: function animate() {}
  }, {
    key: "draw",
    value: function draw() {}
  }]);

  return InitStar;
}(); // 动画执行


function animate() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  for (var i in rounds) {
    rounds[i].move();
  }

  requestAnimationFrame(animate);
}

var RoundItem =
/*#__PURE__*/
function () {
  function RoundItem(opt) {
    _classCallCheck(this, RoundItem);

    this.index = opt.index;
    this.x = opt.x;
    this.y = opt.y;
    this.r = Math.random() * 2;
    var alpha = (Math.floor(Math.random() * 10) + 1) / 10;
    this.color = "rgba(255, 255, 255, ".concat(alpha, ")");
  }

  _createClass(RoundItem, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.r * 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fill();
    }
  }, {
    key: "move",
    value: function move() {
      this.y -= SPEED;

      if (this.y <= -10) {
        this.y = HEIGHT + 10;
      }

      this.draw();
    }
  }]);

  return RoundItem;
}();
},{}],"coolCanvas/lessons/3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lesson3;

function lesson3(ctx, width, height) {
  var para = {
    num: 100,
    color: false,
    r: 0.9,
    o: 0.09,
    a: 1
  };
  var color, color2, mouseX, mouseY;
  var rounds = [];

  window.onmousemove = function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    rounds.push({
      mouseX: mouseX,
      mouseY: mouseY,
      r: para.r,
      // 设置半径每次增大的数值
      o: 1 // 判断圆消失的条件，数值越大，消失越快

    });
  };
}
},{}],"coolCanvas/index.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("./lessons/1"));

var _2 = _interopRequireDefault(require("./lessons/2"));

var _3 = _interopRequireDefault(require("./lessons/3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById('demo1');
var ctx = canvas.getContext('2d');
var WIDTH = document.documentElement.clientWidth;
var HEIGHT = document.documentElement.clientHeight;

window.onload = function () {
  canvas.width = WIDTH;
  canvas.height = HEIGHT; // lesson1()
  // lesson2()

  (0, _3.default)(ctx, WIDTH, HEIGHT);
};
},{"./lessons/1":"coolCanvas/lessons/1.js","./lessons/2":"coolCanvas/lessons/2.js","./lessons/3":"coolCanvas/lessons/3.js"}],"../node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54743" + '/');

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
},{}]},{},["../node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","coolCanvas/index.js"], null)
//# sourceMappingURL=/coolCanvas.ed1defce.js.map