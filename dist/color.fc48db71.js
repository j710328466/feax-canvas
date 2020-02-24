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
})({"color/index.js":[function(require,module,exports) {
document.onload = init();

function init() {
  demo1();
  demo2();
  demo3();
  demo4();
  demo5();
  demo6();
  demo7();
  demo8();
  demo9();
  demo10();
  demo11();
  demo12();
}

function demo1() {
  var canvas = document.querySelector('#demo1');
  var ctx = canvas.getContext('2d');

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle = "rgb(".concat(Math.floor(255 - 42.5 * i), ", ").concat(Math.floor(255 - 42.5 * j), ", 0)");
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}

function demo2() {
  var canvas = document.querySelector('#demo2');
  var ctx = canvas.getContext('2d');

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.strokeStyle = "rgb(".concat(Math.floor(255 - 42.5 * i), ", ").concat(Math.floor(255 - 42.5 * j), ", 0)");
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
}

function demo3() {
  var canvas = document.querySelector('#demo3');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fd0';
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = '#6c0';
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = '#09f';
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = '#f30';
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = '#fff';
  ctx.globalAlpha = 0.2;

  for (var i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

function demo4() {
  var canvas = document.querySelector('#demo4');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(255, 221, 0)';
  ctx.fillRect(0, 0, 200, 50);
  ctx.fillStyle = 'rgb(102, 204, 0)';
  ctx.fillRect(0, 50, 200, 50);
  ctx.fillStyle = 'rgb(0, 153, 255)';
  ctx.fillRect(0, 100, 200, 50);
  ctx.fillStyle = 'rgb(255, 51, 0)';
  ctx.fillRect(0, 150, 200, 50);

  for (var i = 0; i < 10; i++) {
    ctx.fillStyle = "rgba(255, 255, 255, ".concat((i + 1) / 10, ")");

    for (var j = 0; j < 4; j++) {
      ctx.fillRect(10 + 18 * i, 5 + j * 50, 18, 40);
    }
  }
}

function demo5() {
  var canvas = document.querySelector('#demo5');
  var ctx = canvas.getContext('2d');

  for (var i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5.5 + i * 14, 5.5);
    ctx.lineTo(5.5 + i * 14, 140.5);
    ctx.stroke();
  }
}

function demo6() {
  var canvas = document.querySelector('#demo6');
  var ctx = canvas.getContext('2d');
  var lineCap = ['butt', 'round', 'square'];
  ctx.strokeStyle = '#09f';
  ctx.beginPath();
  ctx.moveTo(10, 20);
  ctx.lineTo(140, 20);
  ctx.moveTo(10, 130);
  ctx.lineTo(140, 130);
  ctx.stroke();
  ctx.strokeStyle = 'black';

  for (var i = 0; i < lineCap.length; i++) {
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 20);
    ctx.lineTo(25 + i * 50, 130);
    ctx.stroke();
  }
}
/**
 *  round 圆角线段
 *  bevel 不让线段超过最大
 */


function demo7() {
  var canvas = document.querySelector('#demo7');
  var ctx = canvas.getContext('2d');
  var lineJoin = ['round', 'bevel', 'miter'];
  ctx.lineWidth = 10;

  for (var i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  }
}
/**
 *  setLineDash 虚线交替样式
 *  lineDashOffset 偏移量
 */


function demo8() {
  var canvas = document.querySelector('#demo8');
  var ctx = canvas.getContext('2d');
  var offset = 0;

  function march() {
    offset++;

    if (offset > 16) {
      offset = 0;
    }

    _draw();

    setTimeout(march, 50);
  }

  function _draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 2]);
    ctx.lineDashOffset = -offset;
    ctx.strokeRect(10, 10, 100, 100);
  }

  march();
}

function demo9() {
  var canvas = document.querySelector('#demo9');
  var ctx = canvas.getContext('2d');
  var lineargradient = ctx.createLinearGradient(0, 0, 0, 150);
  lineargradient.addColorStop(0, '#00abeb');
  lineargradient.addColorStop(0.5, '#fff');
  lineargradient.addColorStop(0.5, '#26c000');
  lineargradient.addColorStop(1, '#fff');
  var radialgradient = ctx.createLinearGradient(0, 50, 0, 95);
  radialgradient.addColorStop(0.5, '#000');
  radialgradient.addColorStop(1, 'rgba(0, 0, 0, 0');
  ctx.fillStyle = lineargradient;
  ctx.strokeStyle = radialgradient;
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);
}

function demo10() {
  var ctx = document.getElementById('demo10').getContext('2d');
  var radgrad = ctx.createRadialGradient(45, 50, 10, 52, 50, 30);
  radgrad.addColorStop(0, '#a7d30c');
  radgrad.addColorStop(0.9, '#019f62');
  radgrad.addColorStop(1, 'rgba(1, 159, 98, 0');
  var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radgrad2.addColorStop(0, '#fff');
  radgrad2.addColorStop(0.75, '#ff0188');
  radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');
  var radgrad3 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radgrad3.addColorStop(0, '#f4f201');
  radgrad3.addColorStop(0.8, '#00B5E2');
  radgrad3.addColorStop(1, '#00B5E2');
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);
}

function demo11() {
  var ctx = document.getElementById('demo11').getContext('2d'); // 创建 img，作为图案

  var img = new Image();
  img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';

  img.onload = function () {
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);
  };
}

function demo12() {
  var ctx = document.getElementById('demo12').getContext('2d');
  ctx.beginPath();
  ctx.fillStyle = '#aaa';
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill('evenodd');
}
},{}],"../node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","color/index.js"], null)
//# sourceMappingURL=/color.fc48db71.js.map