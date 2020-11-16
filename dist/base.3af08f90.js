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
})({"base/index.js":[function(require,module,exports) {
window.onload = draw();

function draw() {
  fillRect();
  tri();
  drawArc();
  bezier();
  beziers();
  fillSmile();
  bean();
}
/**
 *  绘制矩形
 *  fillRect(x, y, w, h) 填充矩形
 *  strokeRect(x, y, w, h) 边框矩形
 *  clearRect(x, y, w, h) 清除指定区域
 */


function fillRect() {
  var canvas = document.querySelector('#fillRect');
  var ctx = canvas.getContext('2d'); // 实心矩形

  ctx.fillStyle = 'red';
  ctx.fillRect(25, 25, 50, 50); // 空心矩形

  ctx.lineWidth = 1;
  ctx.fillStyle = 'black';
  ctx.strokeRect(75, 75, 50, 50); // 清除区域

  ctx.clearRect(50, 50, 50, 50);
} // 绘制三角形


function tri() {
  var canvas = document.querySelector('#tri');
  var ctx = canvas.getContext('2d'); // 实心三角形

  ctx.beginPath();
  ctx.moveTo(90, 25);
  ctx.lineTo(25, 90);
  ctx.lineTo(155, 90);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(90, 155);
  ctx.lineTo(25, 90);
  ctx.lineTo(155, 90);
  ctx.closePath();
  ctx.stroke();
} // 绘制圆弧


function drawArc() {
  var canvas = document.querySelector('#arc');
  var ctx = canvas.getContext('2d');
  var x = 90,
      y = 90,
      r = 30,
      startAngle = 0,
      endAngle = Math.PI / 180 * 180;
  ctx.beginPath();
  ctx.arc(x, y, r, startAngle, endAngle, false);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y, r, startAngle, endAngle, true);
  ctx.stroke();
} // 绘制贝塞尔曲线

/**
 *  quadraticCurveTo(cp1x, cp1y, x, y) cp1 为控制点
 *  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) cp1、cp2 为控制点
 *  x、y 为结束点
 */


function bezier() {
  var canvas = document.querySelector('#bezier');
  var ctx = canvas.getContext('2d'); // 二次贝塞尔曲线

  ctx.beginPath();
  ctx.moveTo(30, 90);
  ctx.quadraticCurveTo(15, 15, 90, 30);
  ctx.quadraticCurveTo(165, 15, 150, 90);
  ctx.quadraticCurveTo(148, 130, 70, 120);
  ctx.quadraticCurveTo(65, 140, 40, 140);
  ctx.quadraticCurveTo(65, 135, 55, 120);
  ctx.quadraticCurveTo(30, 115, 30, 90);
  ctx.stroke();
  ctx.font = '18px bold 黑体';
  ctx.fillStyle = 'black';
  ctx.fillText('聊天框', 120, 160);
}
/**
 * 绘制三次贝塞尔曲线
 *
 */


function beziers() {
  var canvas = document.querySelector('#beziers');
  var ctx = canvas.getContext('2d'); // 三次贝塞尔曲线

  ctx.beginPath();
  ctx.moveTo(90, 40);
  ctx.bezierCurveTo(90, 36, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 120, 90, 140);
  ctx.bezierCurveTo(110, 135, 155, 110, 160, 62.5);
  ctx.bezierCurveTo(160, 22, 140, 25, 130, 25);
  ctx.bezierCurveTo(120, 25, 110, 30, 90, 40);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.font = '18px bold 黑体';
  ctx.fillStyle = 'black';
  ctx.fillText('爱心', 120, 160);
}
/**
 *  绘制笑脸
 *
 */


function fillSmile() {
  var canvas = document.querySelector('#fillSmile');
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.font = '18px bold 黑体';
  ctx.fillStyle = 'black';
  ctx.fillText('笑脸', 120, 160);
}
/**
 * 吃豆人
 *
 */


function bean() {
  var canvas = document.querySelector('#bean');
  var ctx = canvas.getContext('2d'); // 外墙

  _roundedRect(ctx, 12, 12, 160, 160, 15);

  _roundedRect(ctx, 18, 18, 148, 148, 9); // 内墙


  _roundedRect(ctx, 45, 50, 45, 30, 6);

  _roundedRect(ctx, 115, 50, 45, 30, 6);

  _roundedRect(ctx, 115, 110, 45, 50, 6);

  _roundedRect(ctx, 45, 110, 45, 25, 6); // 绘制吃豆人


  ctx.beginPath();
  ctx.arc(35, 35, 10, Math.PI / 7, -Math.PI / 7, false);
  ctx.lineTo(31, 37);
  ctx.fill(); // 绘制魔鬼

  ctx.beginPath();
  ctx.moveTo(83, 116);
  ctx.lineTo(83, 102);
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
  ctx.lineTo(111, 116);
  ctx.lineTo(106.3, 111.3);
  ctx.lineTo(97.3, 111);
  ctx.lineTo(92, 116);
  ctx.lineTo(87, 111);
  ctx.lineTo(83, 116);
  ctx.fill(); // 绘制小点

  for (var i = 0; i < 7; i++) {
    ctx.fillRect(52 + i * 16, 35, 4, 4);
  } // 绘制小点


  for (var _i = 0; _i < 7; _i++) {
    ctx.fillRect(28, 52 + _i * 16, 4, 4);
  } // 绘制小点


  for (var _i2 = 0; _i2 < 7; _i2++) {
    ctx.fillRect(100, 52 + _i2 * 16, 4, 4);
  } // 绘制小点


  for (var _i3 = 0; _i3 < 8; _i3++) {
    ctx.fillRect(44 + _i3 * 16, 92, 4, 4);
  } // 绘制小点


  for (var _i4 = 0; _i4 < 3; _i4++) {
    ctx.fillRect(44 + _i4 * 16, 148, 4, 4);
  }

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(91, 96);
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
  ctx.moveTo(103, 96);
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
  ctx.fill(); // 右眼

  ctx.fillStyle = 'blue';
  ctx.beginPath();
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
  ctx.fill(); // 左眼

  ctx.beginPath();
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.font = '18px bold 黑体';
  ctx.fillStyle = 'black';
  ctx.fillText('吃豆人', 180, 180);
  ctx.clearRect(150, 0, 100, 200);
  /**
   * 绘制圆角矩形的函数
   *
   * @param {*} ctx 画笔
   * @param {*} x x 坐标
   * @param {*} y y 坐标
   * @param {*} w 宽
   * @param {*} h 高
   * @param {*} r 半径
   */

  function _roundedRect(ctx, x, y, w, h, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + h - radius);
    ctx.quadraticCurveTo(x, y + h, x + radius, y + h);
    ctx.lineTo(x + w - radius, y + h);
    ctx.quadraticCurveTo(x + w, y + h, x + w, y + h - radius);
    ctx.lineTo(x + w, y + radius);
    ctx.quadraticCurveTo(x + w, y, x + w - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
  }
}
},{}],"../node_modules/_parcel-bundler@1.12.4@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../node_modules/_parcel-bundler@1.12.4@parcel-bundler/src/builtins/hmr-runtime.js","base/index.js"], null)
//# sourceMappingURL=/base.3af08f90.js.map