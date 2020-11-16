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
})({"compositing/index.ts":[function(require,module,exports) {
var canvas1 = document.createElement('canvas');
var canvas2 = document.createElement('canvas');
var WIDTH = 320;
var HEIGHT = 340;
var gco = ['source-over', 'source-in', 'source-out', 'source-atop', 'destination-over', 'destination-in', 'destination-out', 'destination-atop', 'lighter', 'copy', 'xor', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
var gcoText = ['这是默认设置，并在现有画布上下文之上绘制新图形。', '新图形只在新图形和目标画布重叠的地方绘制。其他的都是透明的。', '在不与现有画布内容重叠的地方绘制新图形。', '新图形只在与现有画布内容重叠的地方绘制。', '在现有的画布内容后面绘制新的图形。', '现有的画布内容保持在新图形和现有画布内容重叠的位置。其他的都是透明的。', '现有内容保持在新图形不重叠的地方。', '现有的画布只保留与新图形重叠的部分，新的图形是在画布内容后面绘制的。', '两个重叠图形的颜色是通过颜色值相加来确定的。', '只显示新图形。', '图像中，那些重叠和正常绘制之外的其他地方是透明的。', '将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。', '像素被倒转，相乘，再倒转，结果是一幅更明亮的图片。', 'multiply和screen的结合，原本暗的地方更暗，原本亮的地方更亮。', '保留两个图层中最暗的像素。', '保留两个图层中最亮的像素。', '将底层除以顶层的反置。', '将反置的底层除以顶层，然后将结果反过来。', '屏幕相乘（A combination of multiply and screen）类似于叠加，但上下图层互换了。', '用顶层减去底层或者相反来得到一个正值。', '一个柔和版本的强光（hard-light）。纯黑或纯白不会导致纯黑或纯白。', '和difference相似，但对比度较低。', '保留了底层的亮度（luma）和色度（chroma），同时采用了顶层的色调（hue）。', '保留底层的亮度（luma）和色调（hue），同时采用顶层的色度（chroma）。', '保留了底层的亮度（luma），同时采用了顶层的色调(hue)和色度(chroma)。', '保持底层的色调（hue）和色度（chroma），同时采用顶层的亮度（luma）。'];

window.onload = function () {
  canvas1.width = WIDTH;
  canvas2.width = WIDTH;
  canvas1.height = HEIGHT;
  canvas2.height = HEIGHT;
  lightMix();
  colorSphere();
  runComposite();
  return;
};
/**
 * 新建 canvas
 */


var createCanvas = function createCanvas() {
  var canvas = document.createElement('canvas');
  canvas.style.background = '#ccc';
  canvas.style.border = '1px solid #eee';
  canvas.style.margin = '5px';
  canvas.width = WIDTH / 2;
  canvas.height = HEIGHT / 2;
  return canvas;
};

var runComposite = function runComposite() {
  var dl = document.createElement('dl');
  document.body.appendChild(dl);

  while (gco.length) {
    var pop = gco.pop();
    var dt = document.createElement('dt');
    dt.textContent = pop;
    dl.appendChild(dt);
    var dd = document.createElement('dd');
    var p = document.createElement('p');
    p.textContent = gcoText.pop();
    dd.appendChild(p);
    var canvasToDrawOn = createCanvas();
    var canvasToDrawFrom = createCanvas();
    var canvasToDrawResult = createCanvas();
    var ctx = canvasToDrawResult.getContext('2d');
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, WIDTH / 2, HEIGHT / 2);
    ctx.globalCompositeOperation = pop;
    ctx.drawImage(canvas2, 0, 0, WIDTH / 2, HEIGHT / 2);
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, HEIGHT / 2 - 20, WIDTH / 2, 20);
    ctx.fillStyle = '#fff';
    ctx.font = '14px arial';
    ctx.fillText(pop, 5, HEIGHT / 2 - 5);
    ctx.restore();
    var ctx2 = canvasToDrawOn.getContext('2d');
    ctx2.clearRect(0, 0, WIDTH, HEIGHT);
    ctx2.save();
    ctx2.drawImage(canvas1, 0, 0, WIDTH / 2, HEIGHT / 2);
    ctx2.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx2.fillRect(0, HEIGHT / 2 - 20, WIDTH / 2, 20);
    ctx2.fillStyle = "#FFF";
    ctx2.font = "14px arial";
    ctx2.fillText('existing content', 5, HEIGHT / 2 - 5);
    ctx2.restore();
    var ctx3 = canvasToDrawFrom.getContext('2d');
    ctx3.clearRect(0, 0, WIDTH, HEIGHT);
    ctx3.save();
    ctx3.drawImage(canvas2, 0, 0, WIDTH / 2, HEIGHT / 2);
    ctx3.fillStyle = "rgba(0,0,0,0.8)";
    ctx3.fillRect(0, HEIGHT / 2 - 20, WIDTH / 2, 20);
    ctx3.fillStyle = "#FFF";
    ctx3.font = "14px arial";
    ctx3.fillText('new content', 5, HEIGHT / 2 - 5);
    ctx3.restore();
    dd.appendChild(canvasToDrawOn);
    dd.appendChild(canvasToDrawFrom);
    dd.appendChild(canvasToDrawResult);
    dl.appendChild(dd);
  }
};

var lightMix = function lightMix() {
  var ctx = canvas2.getContext('2d');
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.arc(100, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.arc(220, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 255, 0, 1)';
  ctx.arc(160, 100, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 30, 30);
  ctx.fill();
};

var HSV_RGB = function HSV_RGB(o) {
  var H = o.H;
  var S = o.S;
  var V = o.V;
  var R, G, B;
  var A, C, D;

  if (S == 0) {
    R = G = B = Math.round(V * 255);
  } else {
    if (H >= 1) H = 0;
    H = 6 * H;
    D = H - Math.floor(H);
    A = Math.round(255 * V * (1 - S));
    B = Math.round(255 * V * (1 - S * D));
    C = Math.round(255 * V * (1 - S * (1 - D)));
    V = Math.round(255 * V);

    switch (Math.floor(H)) {
      case 0:
        R = V;
        G = C;
        B = A;
        break;

      case 1:
        R = B;
        G = V;
        B = A;
        break;

      case 2:
        R = A;
        G = V;
        B = C;
        break;

      case 3:
        R = A;
        G = B;
        B = V;
        break;

      case 4:
        R = C;
        G = A;
        B = V;

      case 5:
        R = V;
        G = A;
        B = B;
    }
  }

  return {
    R: R,
    G: G,
    B: B
  };
};

var colorSphere = function colorSphere() {
  var ctx = canvas1.getContext('2d');
  var width = 360;
  var halfWidth = width / 2;
  var rotate = 1 / 360 * Math.PI * 2;
  var offset = 0;
  var oleft = -20;
  var otop = -20;

  for (var n = 0; n < 360; n++) {
    var gradient = ctx.createLinearGradient(oleft, halfWidth, otop, oleft + halfWidth, otop + halfWidth);
    var color = HSV_RGB({
      H: (n + 300) % 360,
      S: 100,
      V: 100
    });
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(0.7, "rgb(" + color.R + ", " + color.G + ", " + color.B + ")");
    gradient.addColorStop(1, 'rgb(255, 255, 255');
    ctx.beginPath();
    ctx.moveTo(oleft + halfWidth, otop);
    ctx.lineTo(oleft + halfWidth, otop + halfWidth);
    ctx.lineTo(oleft + halfWidth + 6, otop);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.translate(oleft + halfWidth, otop + halfWidth);
    ctx.rotate(rotate);
    ctx.translate(-(oleft + halfWidth), -(otop + halfWidth));
  }

  ctx.beginPath();
  ctx.fillStyle = '#00f';
  ctx.fillRect(15, 15, 30, 30);
  ctx.fill();
  return ctx.canvas;
};

var createInterlace = function createInterlace(size, color1, color2) {
  var proto = document.createElement('canvas').getContext('2d');
  proto.canvas.width = size * 2;
  proto.canvas.height = size * 2;
  proto.fillStyle = color1;
  proto.fillRect(0, 0, size, size);
  proto.fillStyle = color2;
  proto.fillRect(size, 0, size, size);
  proto.fillStyle = color2;
  proto.fillRect(0, size, size, size);
  proto.fillStyle = color1;
  proto.fillRect(size, size, size, size);
  var pattern = proto.createPattern(proto.canvas, 'repeat');
  pattern.data = proto.canvas.toDataURL();
  return pattern;
};

var op_8x8 = createInterlace(8, "#FFF", "#eee");
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
},{}]},{},["../node_modules/_parcel-bundler@1.12.4@parcel-bundler/src/builtins/hmr-runtime.js","compositing/index.ts"], null)
//# sourceMappingURL=/compositing.243174dc.js.map