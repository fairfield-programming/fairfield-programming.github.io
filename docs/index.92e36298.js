// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3dFNe":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "29847b6f92e36298";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8FH8c":[function(require,module,exports) {
// Import all plugins
var _bootstrap = require("bootstrap");

},{"bootstrap":"h36JB"}],"h36JB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alert", ()=>Alert
);
parcelHelpers.export(exports, "Button", ()=>Button
);
parcelHelpers.export(exports, "Carousel", ()=>Carousel
);
parcelHelpers.export(exports, "Collapse", ()=>Collapse
);
parcelHelpers.export(exports, "Dropdown", ()=>Dropdown
);
parcelHelpers.export(exports, "Modal", ()=>Modal
);
parcelHelpers.export(exports, "Offcanvas", ()=>Offcanvas
);
parcelHelpers.export(exports, "Popover", ()=>Popover
);
parcelHelpers.export(exports, "ScrollSpy", ()=>ScrollSpy
);
parcelHelpers.export(exports, "Tab", ()=>Tab
);
parcelHelpers.export(exports, "Toast", ()=>Toast
);
parcelHelpers.export(exports, "Tooltip", ()=>Tooltip
);
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ var _core = require("@popperjs/core");
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)
const toType = (obj)=>{
    if (obj === null || obj === undefined) return `${obj}`;
    return ({}).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */ const getUID = (prefix)=>{
    do prefix += Math.floor(Math.random() * MAX_UID);
    while (document.getElementById(prefix))
    return prefix;
};
const getSelector = (element)=>{
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
        let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
        if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) return null;
         // Just in case some CMS puts out a full URL with the anchor appended
        if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) hrefAttr = `#${hrefAttr.split('#')[1]}`;
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }
    return selector;
};
const getSelectorFromElement = (element)=>{
    const selector = getSelector(element);
    if (selector) return document.querySelector(selector) ? selector : null;
    return null;
};
const getElementFromSelector = (element)=>{
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
};
const getTransitionDurationFromElement = (element)=>{
    if (!element) return 0;
     // Get transition-duration of the element
    let { transitionDuration , transitionDelay  } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) return 0;
     // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = (element)=>{
    element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = (obj)=>{
    if (!obj || typeof obj !== 'object') return false;
    if (typeof obj.jquery !== 'undefined') obj = obj[0];
    return typeof obj.nodeType !== 'undefined';
};
const getElement = (obj)=>{
    if (isElement(obj)) // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
    if (typeof obj === 'string' && obj.length > 0) return document.querySelector(obj);
    return null;
};
const typeCheckConfig = (componentName, config, configTypes)=>{
    Object.keys(configTypes).forEach((property)=>{
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = value && isElement(value) ? 'element' : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
    });
};
const isVisible = (element)=>{
    if (!isElement(element) || element.getClientRects().length === 0) return false;
    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};
const isDisabled = (element)=>{
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.classList.contains('disabled')) return true;
    if (typeof element.disabled !== 'undefined') return element.disabled;
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};
const findShadowRoot = (element)=>{
    if (!document.documentElement.attachShadow) return null;
     // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) return element;
     // when we don't find a shadow root
    if (!element.parentNode) return null;
    return findShadowRoot(element.parentNode);
};
const noop = ()=>{};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */ const reflow = (element)=>{
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
};
const getjQuery = ()=>{
    const { jQuery  } = window;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) return jQuery;
    return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = (callback1)=>{
    if (document.readyState === 'loading') {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) document.addEventListener('DOMContentLoaded', ()=>{
            DOMContentLoadedCallbacks.forEach((callback)=>callback()
            );
        });
        DOMContentLoadedCallbacks.push(callback1);
    } else callback1();
};
const isRTL = ()=>document.documentElement.dir === 'rtl'
;
const defineJQueryPlugin = (plugin)=>{
    onDOMContentLoaded(()=>{
        const $ = getjQuery();
        /* istanbul ignore if */ if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = ()=>{
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
            };
        }
    });
};
const execute = (callback)=>{
    if (typeof callback === 'function') callback();
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true)=>{
    if (!waitForTransition) {
        execute(callback);
        return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target  })=>{
        if (target !== transitionElement) return;
        called = true;
        transitionElement.removeEventListener(TRANSITION_END, handler);
        execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(()=>{
        if (!called) triggerTransitionEnd(transitionElement);
    }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */ const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed)=>{
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed
    if (index === -1) return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    const listLength = list.length;
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage
let uidEvent = 1;
const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
};
const customEventsRegex = /^(mouseenter|mouseleave)/i;
const nativeEvents = new Set([
    'click',
    'dblclick',
    'mouseup',
    'mousedown',
    'contextmenu',
    'mousewheel',
    'DOMMouseScroll',
    'mouseover',
    'mouseout',
    'mousemove',
    'selectstart',
    'selectend',
    'keydown',
    'keypress',
    'keyup',
    'orientationchange',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointerleave',
    'pointercancel',
    'gesturestart',
    'gesturechange',
    'gestureend',
    'focus',
    'blur',
    'change',
    'reset',
    'select',
    'submit',
    'focusin',
    'focusout',
    'load',
    'unload',
    'beforeunload',
    'resize',
    'move',
    'DOMContentLoaded',
    'readystatechange',
    'error',
    'abort',
    'scroll'
]);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */ function getUidEvent(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getEvent(element) {
    const uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
    return function handler(event) {
        event.delegateTarget = element;
        if (handler.oneOff) EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector);
        for(let { target  } = event; target && target !== this; target = target.parentNode){
            for(let i = domElements.length; i--;)if (domElements[i] === target) {
                event.delegateTarget = target;
                if (handler.oneOff) EventHandler.off(element, event.type, selector, fn);
                return fn.apply(target, [
                    event
                ]);
            }
        } // To please ESLint
        return null;
    };
}
function findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);
    for(let i = 0, len = uidEventList.length; i < len; i++){
        const event = events[uidEventList[i]];
        if (event.originalHandler === handler && event.delegationSelector === delegationSelector) return event;
    }
    return null;
}
function normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === 'string';
    const originalHandler = delegation ? delegationFn : handler;
    let typeEvent = getTypeEvent(originalTypeEvent);
    const isNative = nativeEvents.has(typeEvent);
    if (!isNative) typeEvent = originalTypeEvent;
    return [
        delegation,
        originalHandler,
        typeEvent
    ];
}
function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) return;
    if (!handler) {
        handler = delegationFn;
        delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (customEventsRegex.test(originalTypeEvent)) {
        const wrapFn = (fn)=>{
            return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        if (delegationFn) delegationFn = wrapFn(delegationFn);
        else handler = wrapFn(handler);
    }
    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);
    if (previousFn) {
        previousFn.oneOff = previousFn.oneOff && oneOff;
        return;
    }
    const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    const fn1 = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn1.delegationSelector = delegation ? handler : null;
    fn1.originalHandler = originalHandler;
    fn1.oneOff = oneOff;
    fn1.uidEvent = uid;
    handlers[uid] = fn1;
    element.addEventListener(typeEvent, fn1, delegation);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach((handlerKey)=>{
        if (handlerKey.includes(namespace)) {
            const event = storeElementEvent[handlerKey];
            removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
    });
}
function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
}
const EventHandler = {
    on (element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, false);
    },
    one (element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, true);
    },
    off (element, originalTypeEvent, handler, delegationFn) {
        if (typeof originalTypeEvent !== 'string' || !element) return;
        const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = getEvent(element);
        const isNamespace = originalTypeEvent.startsWith('.');
        if (typeof originalHandler !== 'undefined') {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!events || !events[typeEvent]) return;
            removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
            return;
        }
        if (isNamespace) Object.keys(events).forEach((elementEvent)=>{
            removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
        const storeElementEvent = events[typeEvent] || {};
        Object.keys(storeElementEvent).forEach((keyHandlers)=>{
            const handlerKey = keyHandlers.replace(stripUidRegex, '');
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                const event = storeElementEvent[keyHandlers];
                removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
            }
        });
    },
    trigger (element, event, args) {
        if (typeof event !== 'string' || !element) return null;
        const $ = getjQuery();
        const typeEvent = getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        const isNative = nativeEvents.has(typeEvent);
        let jQueryEvent;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        let evt = null;
        if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
        if (isNative) {
            evt = document.createEvent('HTMLEvents');
            evt.initEvent(typeEvent, bubbles, true);
        } else evt = new CustomEvent(event, {
            bubbles,
            cancelable: true
        });
         // merge custom information in our event
        if (typeof args !== 'undefined') Object.keys(args).forEach((key)=>{
            Object.defineProperty(evt, key, {
                get () {
                    return args[key];
                }
            });
        });
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') jQueryEvent.preventDefault();
        return evt;
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const elementMap = new Map();
const Data = {
    set (element, key, instance) {
        if (!elementMap.has(element)) elementMap.set(element, new Map());
        const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            // eslint-disable-next-line no-console
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
        }
        instanceMap.set(key, instance);
    },
    get (element, key) {
        if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
        return null;
    },
    remove (element, key) {
        if (!elementMap.has(element)) return;
        const instanceMap = elementMap.get(element);
        instanceMap.delete(key); // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) elementMap.delete(element);
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const VERSION = '5.1.3';
class BaseComponent {
    constructor(element){
        element = getElement(element);
        if (!element) return;
        this._element = element;
        Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        Object.getOwnPropertyNames(this).forEach((propertyName)=>{
            this[propertyName] = null;
        });
    }
    _queueCallback(callback, element, isAnimated = true) {
        executeAfterTransition(callback, element, isAnimated);
    }
    /** Static */ static getInstance(element) {
        return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }
    static get VERSION() {
        return VERSION;
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const enableDismissTrigger = (component, method = 'hide')=>{
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
        if ([
            'A',
            'AREA'
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        const target = getElementFromSelector(this) || this.closest(`.${name}`);
        const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
        instance[method]();
    });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$d = 'alert';
const DATA_KEY$c = 'bs.alert';
const EVENT_KEY$c = `.${DATA_KEY$c}`;
const EVENT_CLOSE = `close${EVENT_KEY$c}`;
const EVENT_CLOSED = `closed${EVENT_KEY$c}`;
const CLASS_NAME_FADE$5 = 'fade';
const CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Alert extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$d;
    }
    close() {
        const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
        if (closeEvent.defaultPrevented) return;
        this._element.classList.remove(CLASS_NAME_SHOW$8);
        const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
        this._queueCallback(()=>this._destroyElement()
        , this._element, isAnimated);
    }
    _destroyElement() {
        this._element.remove();
        EventHandler.trigger(this._element, EVENT_CLOSED);
        this.dispose();
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Alert.getOrCreateInstance(this);
            if (typeof config !== 'string') return;
            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ enableDismissTrigger(Alert, 'close');
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */ defineJQueryPlugin(Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$c = 'button';
const DATA_KEY$b = 'bs.button';
const EVENT_KEY$b = `.${DATA_KEY$b}`;
const DATA_API_KEY$7 = '.data-api';
const CLASS_NAME_ACTIVE$3 = 'active';
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$b}${DATA_API_KEY$7}`;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Button extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$c;
    }
    toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Button.getOrCreateInstance(this);
            if (config === 'toggle') data[config]();
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event)=>{
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */ defineJQueryPlugin(Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function normalizeData(val) {
    if (val === 'true') return true;
    if (val === 'false') return false;
    if (val === Number(val).toString()) return Number(val);
    if (val === '' || val === 'null') return null;
    return val;
}
function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`
    );
}
const Manipulator = {
    setDataAttribute (element, key, value) {
        element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute (element, key) {
        element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes (element) {
        if (!element) return {};
        const attributes = {};
        Object.keys(element.dataset).filter((key)=>key.startsWith('bs')
        ).forEach((key)=>{
            let pureKey = key.replace(/^bs/, '');
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
        });
        return attributes;
    },
    getDataAttribute (element, key) {
        return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    },
    offset (element) {
        const rect = element.getBoundingClientRect();
        return {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
        };
    },
    position (element) {
        return {
            top: element.offsetTop,
            left: element.offsetLeft
        };
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const NODE_TEXT = 3;
const SelectorEngine = {
    find (selector, element = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne (selector, element = document.documentElement) {
        return Element.prototype.querySelector.call(element, selector);
    },
    children (element, selector) {
        return [].concat(...element.children).filter((child)=>child.matches(selector)
        );
    },
    parents (element, selector) {
        const parents = [];
        let ancestor = element.parentNode;
        while(ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT){
            if (ancestor.matches(selector)) parents.push(ancestor);
            ancestor = ancestor.parentNode;
        }
        return parents;
    },
    prev (element, selector) {
        let previous = element.previousElementSibling;
        while(previous){
            if (previous.matches(selector)) return [
                previous
            ];
            previous = previous.previousElementSibling;
        }
        return [];
    },
    next (element, selector) {
        let next = element.nextElementSibling;
        while(next){
            if (next.matches(selector)) return [
                next
            ];
            next = next.nextElementSibling;
        }
        return [];
    },
    focusableChildren (element) {
        const focusables = [
            'a',
            'button',
            'input',
            'textarea',
            'select',
            'details',
            '[tabindex]',
            '[contenteditable="true"]'
        ].map((selector)=>`${selector}:not([tabindex^="-"])`
        ).join(', ');
        return this.find(focusables, element).filter((el)=>!isDisabled(el) && isVisible(el)
        );
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$b = 'carousel';
const DATA_KEY$a = 'bs.carousel';
const EVENT_KEY$a = `.${DATA_KEY$a}`;
const DATA_API_KEY$6 = '.data-api';
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
const SWIPE_THRESHOLD = 40;
const Default$a = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
};
const DefaultType$a = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
};
const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
};
const EVENT_SLIDE = `slide${EVENT_KEY$a}`;
const EVENT_SLID = `slid${EVENT_KEY$a}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$a}`;
const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$a}`;
const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$a}`;
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$a}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$a}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$a}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$a}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$a}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$a}`;
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$a}${DATA_API_KEY$6}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE$2 = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SELECTOR_ACTIVE$1 = '.active';
const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_INDICATOR = '[data-bs-target]';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Carousel extends BaseComponent {
    constructor(element, config){
        super(element);
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(config);
        this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
        this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent);
        this._addEventListeners();
    }
    static get Default() {
        return Default$a;
    }
    static get NAME() {
        return NAME$b;
    }
    next() {
        this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) this.next();
    }
    prev() {
        this._slide(ORDER_PREV);
    }
    pause(event) {
        if (!event) this._isPaused = true;
        if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
            triggerTransitionEnd(this._element);
            this.cycle(true);
        }
        clearInterval(this._interval);
        this._interval = null;
    }
    cycle(event) {
        if (!event) this._isPaused = false;
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
        if (this._config && this._config.interval && !this._isPaused) {
            this._updateInterval();
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
    }
    to(index) {
        this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        const activeIndex = this._getItemIndex(this._activeElement);
        if (index > this._items.length - 1 || index < 0) return;
        if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, ()=>this.to(index)
            );
            return;
        }
        if (activeIndex === index) {
            this.pause();
            this.cycle();
            return;
        }
        const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
        this._slide(order, this._items[index]);
    }
    _getConfig(config) {
        config = {
            ...Default$a,
            ...Manipulator.getDataAttributes(this._element),
            ...typeof config === 'object' ? config : {}
        };
        typeCheckConfig(NAME$b, config, DefaultType$a);
        return config;
    }
    _handleSwipe() {
        const absDeltax = Math.abs(this.touchDeltaX);
        if (absDeltax <= SWIPE_THRESHOLD) return;
        const direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;
        if (!direction) return;
        this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
    _addEventListeners() {
        if (this._config.keyboard) EventHandler.on(this._element, EVENT_KEYDOWN, (event)=>this._keydown(event)
        );
        if (this._config.pause === 'hover') {
            EventHandler.on(this._element, EVENT_MOUSEENTER, (event)=>this.pause(event)
            );
            EventHandler.on(this._element, EVENT_MOUSELEAVE, (event)=>this.cycle(event)
            );
        }
        if (this._config.touch && this._touchSupported) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        const hasPointerPenTouch = (event)=>{
            return this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
        };
        const start = (event)=>{
            if (hasPointerPenTouch(event)) this.touchStartX = event.clientX;
            else if (!this._pointerEvent) this.touchStartX = event.touches[0].clientX;
        };
        const move = (event)=>{
            // ensure swiping with one touch and not pinching
            this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
        };
        const end = (event1)=>{
            if (hasPointerPenTouch(event1)) this.touchDeltaX = event1.clientX - this.touchStartX;
            this._handleSwipe();
            if (this._config.pause === 'hover') {
                // If it's a touch-enabled device, mouseenter/leave are fired as
                // part of the mouse compatibility events on first tap - the carousel
                // would stop cycling until user tapped out of it;
                // here, we listen for touchend, explicitly pause the carousel
                // (as if it's the second time we tap on it, mouseenter compat event
                // is NOT fired) and after a timeout (to allow for mouse compatibility
                // events to fire) we explicitly restart cycling
                this.pause();
                if (this.touchTimeout) clearTimeout(this.touchTimeout);
                this.touchTimeout = setTimeout((event)=>this.cycle(event)
                , TOUCHEVENT_COMPAT_WAIT + this._config.interval);
            }
        };
        SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach((itemImg)=>{
            EventHandler.on(itemImg, EVENT_DRAG_START, (event)=>event.preventDefault()
            );
        });
        if (this._pointerEvent) {
            EventHandler.on(this._element, EVENT_POINTERDOWN, (event)=>start(event)
            );
            EventHandler.on(this._element, EVENT_POINTERUP, (event)=>end(event)
            );
            this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
            EventHandler.on(this._element, EVENT_TOUCHSTART, (event)=>start(event)
            );
            EventHandler.on(this._element, EVENT_TOUCHMOVE, (event)=>move(event)
            );
            EventHandler.on(this._element, EVENT_TOUCHEND, (event)=>end(event)
            );
        }
    }
    _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) return;
        const direction = KEY_TO_DIRECTION[event.key];
        if (direction) {
            event.preventDefault();
            this._slide(direction);
        }
    }
    _getItemIndex(element) {
        this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
    }
    _getItemByOrder(order, activeElement) {
        const isNext = order === ORDER_NEXT;
        return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
    }
    _triggerSlideEvent(relatedTarget, eventDirectionName) {
        const targetIndex = this._getItemIndex(relatedTarget);
        const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));
        return EventHandler.trigger(this._element, EVENT_SLIDE, {
            relatedTarget,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex
        });
    }
    _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
            const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
            activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
            activeIndicator.removeAttribute('aria-current');
            const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);
            for(let i = 0; i < indicators.length; i++)if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
                indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
                indicators[i].setAttribute('aria-current', 'true');
                break;
            }
        }
    }
    _updateInterval() {
        const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
        if (elementInterval) {
            this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
            this._config.interval = elementInterval;
        } else this._config.interval = this._config.defaultInterval || this._config.interval;
    }
    _slide(directionOrOrder, element) {
        const order = this._directionToOrder(directionOrOrder);
        const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        const activeElementIndex = this._getItemIndex(activeElement);
        const nextElement = element || this._getItemByOrder(order, activeElement);
        const nextElementIndex = this._getItemIndex(nextElement);
        const isCycling = Boolean(this._interval);
        const isNext = order === ORDER_NEXT;
        const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
        const eventDirectionName = this._orderToDirection(order);
        if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
            this._isSliding = false;
            return;
        }
        if (this._isSliding) return;
        const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
        if (slideEvent.defaultPrevented) return;
        if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
        return;
        this._isSliding = true;
        if (isCycling) this.pause();
        this._setActiveIndicatorElement(nextElement);
        this._activeElement = nextElement;
        const triggerSlidEvent = ()=>{
            EventHandler.trigger(this._element, EVENT_SLID, {
                relatedTarget: nextElement,
                direction: eventDirectionName,
                from: activeElementIndex,
                to: nextElementIndex
            });
        };
        if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
            nextElement.classList.add(orderClassName);
            reflow(nextElement);
            activeElement.classList.add(directionalClassName);
            nextElement.classList.add(directionalClassName);
            const completeCallBack = ()=>{
                nextElement.classList.remove(directionalClassName, orderClassName);
                nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
                this._isSliding = false;
                setTimeout(triggerSlidEvent, 0);
            };
            this._queueCallback(completeCallBack, activeElement, true);
        } else {
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            this._isSliding = false;
            triggerSlidEvent();
        }
        if (isCycling) this.cycle();
    }
    _directionToOrder(direction) {
        if (![
            DIRECTION_RIGHT,
            DIRECTION_LEFT
        ].includes(direction)) return direction;
        if (isRTL()) return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
        if (![
            ORDER_NEXT,
            ORDER_PREV
        ].includes(order)) return order;
        if (isRTL()) return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    static carouselInterface(element, config) {
        const data = Carousel.getOrCreateInstance(element, config);
        let { _config  } = data;
        if (typeof config === 'object') _config = {
            ..._config,
            ...config
        };
        const action = typeof config === 'string' ? config : _config.slide;
        if (typeof config === 'number') data.to(config);
        else if (typeof action === 'string') {
            if (typeof data[action] === 'undefined') throw new TypeError(`No method named "${action}"`);
            data[action]();
        } else if (_config.interval && _config.ride) {
            data.pause();
            data.cycle();
        }
    }
    static jQueryInterface(config) {
        return this.each(function() {
            Carousel.carouselInterface(this, config);
        });
    }
    static dataApiClickHandler(event) {
        const target = getElementFromSelector(this);
        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
        const config = {
            ...Manipulator.getDataAttributes(target),
            ...Manipulator.getDataAttributes(this)
        };
        const slideIndex = this.getAttribute('data-bs-slide-to');
        if (slideIndex) config.interval = false;
        Carousel.carouselInterface(target, config);
        if (slideIndex) Carousel.getInstance(target).to(slideIndex);
        event.preventDefault();
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API$2, ()=>{
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for(let i = 0, len = carousels.length; i < len; i++)Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */ defineJQueryPlugin(Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$a = 'collapse';
const DATA_KEY$9 = 'bs.collapse';
const EVENT_KEY$9 = `.${DATA_KEY$9}`;
const DATA_API_KEY$5 = '.data-api';
const Default$9 = {
    toggle: true,
    parent: null
};
const DefaultType$9 = {
    toggle: 'boolean',
    parent: '(null|element)'
};
const EVENT_SHOW$5 = `show${EVENT_KEY$9}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$9}`;
const EVENT_HIDE$5 = `hide${EVENT_KEY$9}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$9}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$9}${DATA_API_KEY$5}`;
const CLASS_NAME_SHOW$7 = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Collapse extends BaseComponent {
    constructor(element, config){
        super(element);
        this._isTransitioning = false;
        this._config = this._getConfig(config);
        this._triggerArray = [];
        const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
        for(let i = 0, len = toggleList.length; i < len; i++){
            const elem = toggleList[i];
            const selector = getSelectorFromElement(elem);
            const filterElement = SelectorEngine.find(selector).filter((foundElem)=>foundElem === this._element
            );
            if (selector !== null && filterElement.length) {
                this._selector = selector;
                this._triggerArray.push(elem);
            }
        }
        this._initializeChildren();
        if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
        if (this._config.toggle) this.toggle();
    }
    static get Default() {
        return Default$9;
    }
    static get NAME() {
        return NAME$a;
    }
    toggle() {
        if (this._isShown()) this.hide();
        else this.show();
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let actives = [];
        let activesData;
        if (this._config.parent) {
            const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
            actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter((elem)=>!children.includes(elem)
            ); // remove children if greater depth
        }
        const container = SelectorEngine.findOne(this._selector);
        if (actives.length) {
            const tempActiveData = actives.find((elem)=>container !== elem
            );
            activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;
            if (activesData && activesData._isTransitioning) return;
        }
        const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);
        if (startEvent.defaultPrevented) return;
        actives.forEach((elemActive)=>{
            if (container !== elemActive) Collapse.getOrCreateInstance(elemActive, {
                toggle: false
            }).hide();
            if (!activesData) Data.set(elemActive, DATA_KEY$9, null);
        });
        const dimension = this._getDimension();
        this._element.classList.remove(CLASS_NAME_COLLAPSE);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        this._addAriaAndCollapsedClass(this._triggerArray, true);
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
            this._element.style[dimension] = '';
            EventHandler.trigger(this._element, EVENT_SHOWN$5);
        };
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
        if (this._isTransitioning || !this._isShown()) return;
        const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);
        if (startEvent.defaultPrevented) return;
        const dimension = this._getDimension();
        this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        const triggerArrayLength = this._triggerArray.length;
        for(let i = 0; i < triggerArrayLength; i++){
            const trigger = this._triggerArray[i];
            const elem = getElementFromSelector(trigger);
            if (elem && !this._isShown(elem)) this._addAriaAndCollapsedClass([
                trigger
            ], false);
        }
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE);
            EventHandler.trigger(this._element, EVENT_HIDDEN$5);
        };
        this._element.style[dimension] = '';
        this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
        return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    _getConfig(config) {
        config = {
            ...Default$9,
            ...Manipulator.getDataAttributes(this._element),
            ...config
        };
        config.toggle = Boolean(config.toggle); // Coerce string values
        config.parent = getElement(config.parent);
        typeCheckConfig(NAME$a, config, DefaultType$9);
        return config;
    }
    _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter((elem)=>!children.includes(elem)
        ).forEach((element)=>{
            const selected = getElementFromSelector(element);
            if (selected) this._addAriaAndCollapsedClass([
                element
            ], this._isShown(selected));
        });
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) return;
        triggerArray.forEach((elem)=>{
            if (isOpen) elem.classList.remove(CLASS_NAME_COLLAPSED);
            else elem.classList.add(CLASS_NAME_COLLAPSED);
            elem.setAttribute('aria-expanded', isOpen);
        });
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const _config = {};
            if (typeof config === 'string' && /show|hide/.test(config)) _config.toggle = false;
            const data = Collapse.getOrCreateInstance(this, _config);
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') event.preventDefault();
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach((element)=>{
        Collapse.getOrCreateInstance(element, {
            toggle: false
        }).toggle();
    });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */ defineJQueryPlugin(Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$9 = 'dropdown';
const DATA_KEY$8 = 'bs.dropdown';
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$4 = '.data-api';
const ESCAPE_KEY$2 = 'Escape';
const SPACE_KEY = 'Space';
const TAB_KEY$1 = 'Tab';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
const EVENT_HIDE$4 = `hide${EVENT_KEY$8}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$8}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$8}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$8}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$8}${DATA_API_KEY$4}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$8}${DATA_API_KEY$4}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$8}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$6 = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_NAVBAR = 'navbar';
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
const Default$8 = {
    offset: [
        0,
        2
    ],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
};
const DefaultType$8 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Dropdown extends BaseComponent {
    constructor(element, config){
        super(element);
        this._popper = null;
        this._config = this._getConfig(config);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();
    }
    static get Default() {
        return Default$8;
    }
    static get DefaultType() {
        return DefaultType$8;
    }
    static get NAME() {
        return NAME$9;
    }
    toggle() {
        return this._isShown() ? this.hide() : this.show();
    }
    show() {
        if (isDisabled(this._element) || this._isShown(this._menu)) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);
        if (showEvent.defaultPrevented) return;
        const parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar
        if (this._inNavbar) Manipulator.setDataAttribute(this._menu, 'popper', 'none');
        else this._createPopper(parent);
         // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) [].concat(...document.body.children).forEach((elem)=>EventHandler.on(elem, 'mouseover', noop)
        );
        this._element.focus();
        this._element.setAttribute('aria-expanded', true);
        this._menu.classList.add(CLASS_NAME_SHOW$6);
        this._element.classList.add(CLASS_NAME_SHOW$6);
        EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
    }
    hide() {
        if (isDisabled(this._element) || !this._isShown(this._menu)) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        this._completeHide(relatedTarget);
    }
    dispose() {
        if (this._popper) this._popper.destroy();
        super.dispose();
    }
    update() {
        this._inNavbar = this._detectNavbar();
        if (this._popper) this._popper.update();
    }
    _completeHide(relatedTarget) {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);
        if (hideEvent.defaultPrevented) return;
         // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) [].concat(...document.body.children).forEach((elem)=>EventHandler.off(elem, 'mouseover', noop)
        );
        if (this._popper) this._popper.destroy();
        this._menu.classList.remove(CLASS_NAME_SHOW$6);
        this._element.classList.remove(CLASS_NAME_SHOW$6);
        this._element.setAttribute('aria-expanded', 'false');
        Manipulator.removeDataAttribute(this._menu, 'popper');
        EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
    }
    _getConfig(config) {
        config = {
            ...this.constructor.Default,
            ...Manipulator.getDataAttributes(this._element),
            ...config
        };
        typeCheckConfig(NAME$9, config, this.constructor.DefaultType);
        if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$9.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return config;
    }
    _createPopper(parent) {
        if (typeof _core === 'undefined') throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        let referenceElement = this._element;
        if (this._config.reference === 'parent') referenceElement = parent;
        else if (isElement(this._config.reference)) referenceElement = getElement(this._config.reference);
        else if (typeof this._config.reference === 'object') referenceElement = this._config.reference;
        const popperConfig = this._getPopperConfig();
        const isDisplayStatic = popperConfig.modifiers.find((modifier)=>modifier.name === 'applyStyles' && modifier.enabled === false
        );
        this._popper = _core.createPopper(referenceElement, this._menu, popperConfig);
        if (isDisplayStatic) Manipulator.setDataAttribute(this._menu, 'popper', 'static');
    }
    _isShown(element = this._element) {
        return element.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getMenuElement() {
        return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }
    _getPlacement() {
        const parentDropdown = this._element.parentNode;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) return PLACEMENT_RIGHT;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) return PLACEMENT_LEFT;
         // We need to trim the value because custom properties can also include spaces
        const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
        return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
    }
    _getOffset() {
        const { offset  } = this._config;
        if (typeof offset === 'string') return offset.split(',').map((val)=>Number.parseInt(val, 10)
        );
        if (typeof offset === 'function') return (popperData)=>offset(popperData, this._element)
        ;
        return offset;
    }
    _getPopperConfig() {
        const defaultBsPopperConfig = {
            placement: this._getPlacement(),
            modifiers: [
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: 'offset',
                    options: {
                        offset: this._getOffset()
                    }
                }
            ]
        }; // Disable Popper if we have a static display
        if (this._config.display === 'static') defaultBsPopperConfig.modifiers = [
            {
                name: 'applyStyles',
                enabled: false
            }
        ];
        return {
            ...defaultBsPopperConfig,
            ...typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
        };
    }
    _selectMenuItem({ key , target  }) {
        const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
        if (!items.length) return;
         // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
        getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Dropdown.getOrCreateInstance(this, config);
            if (typeof config !== 'string') return;
            if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
    static clearMenus(event) {
        if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) return;
        const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);
        for(let i = 0, len = toggles.length; i < len; i++){
            const context = Dropdown.getInstance(toggles[i]);
            if (!context || context._config.autoClose === false) continue;
            if (!context._isShown()) continue;
            const relatedTarget = {
                relatedTarget: context._element
            };
            if (event) {
                const composedPath = event.composedPath();
                const isMenuTarget = composedPath.includes(context._menu);
                if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) continue;
                 // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
                if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
                if (event.type === 'click') relatedTarget.clickEvent = event;
            }
            context._completeHide(relatedTarget);
        }
    }
    static getParentFromElement(element) {
        return getElementFromSelector(element) || element.parentNode;
    }
    static dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) return;
        const isActive = this.classList.contains(CLASS_NAME_SHOW$6);
        if (!isActive && event.key === ESCAPE_KEY$2) return;
        event.preventDefault();
        event.stopPropagation();
        if (isDisabled(this)) return;
        const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
        const instance = Dropdown.getOrCreateInstance(getToggleButton);
        if (event.key === ESCAPE_KEY$2) {
            instance.hide();
            return;
        }
        if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
            if (!isActive) instance.show();
            instance._selectMenuItem(event);
            return;
        }
        if (!isActive || event.key === SPACE_KEY) Dropdown.clearMenus();
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */ defineJQueryPlugin(Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';
class ScrollBarHelper {
    constructor(){
        this._element = document.body;
    }
    getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
        const width = this.getWidth();
        this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width
        this._setElementAttributes(this._element, 'paddingRight', (calculatedValue)=>calculatedValue + width
        ); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
        this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', (calculatedValue)=>calculatedValue + width
        );
        this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', (calculatedValue)=>calculatedValue - width
        );
    }
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, 'overflow');
        this._element.style.overflow = 'hidden';
    }
    _setElementAttributes(selector, styleProp, callback) {
        const scrollbarWidth = this.getWidth();
        const manipulationCallBack = (element)=>{
            if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
            this._saveInitialAttribute(element, styleProp);
            const calculatedValue = window.getComputedStyle(element)[styleProp];
            element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    reset() {
        this._resetElementAttributes(this._element, 'overflow');
        this._resetElementAttributes(this._element, 'paddingRight');
        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');
        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }
    _saveInitialAttribute(element, styleProp) {
        const actualValue = element.style[styleProp];
        if (actualValue) Manipulator.setDataAttribute(element, styleProp, actualValue);
    }
    _resetElementAttributes(selector, styleProp) {
        const manipulationCallBack = (element)=>{
            const value = Manipulator.getDataAttribute(element, styleProp);
            if (typeof value === 'undefined') element.style.removeProperty(styleProp);
            else {
                Manipulator.removeDataAttribute(element, styleProp);
                element.style[styleProp] = value;
            }
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
        if (isElement(selector)) callBack(selector);
        else SelectorEngine.find(selector, this._element).forEach(callBack);
    }
    isOverflowing() {
        return this.getWidth() > 0;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const Default$7 = {
    className: 'modal-backdrop',
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body',
    // give the choice to place backdrop under different elements
    clickCallback: null
};
const DefaultType$7 = {
    className: 'string',
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
};
const NAME$8 = 'backdrop';
const CLASS_NAME_FADE$4 = 'fade';
const CLASS_NAME_SHOW$5 = 'show';
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$8}`;
class Backdrop {
    constructor(config){
        this._config = this._getConfig(config);
        this._isAppended = false;
        this._element = null;
    }
    show(callback) {
        if (!this._config.isVisible) {
            execute(callback);
            return;
        }
        this._append();
        if (this._config.isAnimated) reflow(this._getElement());
        this._getElement().classList.add(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            execute(callback);
        });
    }
    hide(callback) {
        if (!this._config.isVisible) {
            execute(callback);
            return;
        }
        this._getElement().classList.remove(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            this.dispose();
            execute(callback);
        });
    }
    _getElement() {
        if (!this._element) {
            const backdrop = document.createElement('div');
            backdrop.className = this._config.className;
            if (this._config.isAnimated) backdrop.classList.add(CLASS_NAME_FADE$4);
            this._element = backdrop;
        }
        return this._element;
    }
    _getConfig(config) {
        config = {
            ...Default$7,
            ...typeof config === 'object' ? config : {}
        }; // use getElement() with the default "body" to get a fresh Element on each instantiation
        config.rootElement = getElement(config.rootElement);
        typeCheckConfig(NAME$8, config, DefaultType$7);
        return config;
    }
    _append() {
        if (this._isAppended) return;
        this._config.rootElement.append(this._getElement());
        EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, ()=>{
            execute(this._config.clickCallback);
        });
        this._isAppended = true;
    }
    dispose() {
        if (!this._isAppended) return;
        EventHandler.off(this._element, EVENT_MOUSEDOWN);
        this._element.remove();
        this._isAppended = false;
    }
    _emulateAnimation(callback) {
        executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const Default$6 = {
    trapElement: null,
    // The element to trap focus inside of
    autofocus: true
};
const DefaultType$6 = {
    trapElement: 'element',
    autofocus: 'boolean'
};
const NAME$7 = 'focustrap';
const DATA_KEY$7 = 'bs.focustrap';
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$7}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$7}`;
const TAB_KEY = 'Tab';
const TAB_NAV_FORWARD = 'forward';
const TAB_NAV_BACKWARD = 'backward';
class FocusTrap {
    constructor(config){
        this._config = this._getConfig(config);
        this._isActive = false;
        this._lastTabNavDirection = null;
    }
    activate() {
        const { trapElement , autofocus  } = this._config;
        if (this._isActive) return;
        if (autofocus) trapElement.focus();
        EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop
        EventHandler.on(document, EVENT_FOCUSIN$1, (event)=>this._handleFocusin(event)
        );
        EventHandler.on(document, EVENT_KEYDOWN_TAB, (event)=>this._handleKeydown(event)
        );
        this._isActive = true;
    }
    deactivate() {
        if (!this._isActive) return;
        this._isActive = false;
        EventHandler.off(document, EVENT_KEY$7);
    }
    _handleFocusin(event) {
        const { target  } = event;
        const { trapElement  } = this._config;
        if (target === document || target === trapElement || trapElement.contains(target)) return;
        const elements = SelectorEngine.focusableChildren(trapElement);
        if (elements.length === 0) trapElement.focus();
        else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) elements[elements.length - 1].focus();
        else elements[0].focus();
    }
    _handleKeydown(event) {
        if (event.key !== TAB_KEY) return;
        this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
    _getConfig(config) {
        config = {
            ...Default$6,
            ...typeof config === 'object' ? config : {}
        };
        typeCheckConfig(NAME$7, config, DefaultType$6);
        return config;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$6 = 'modal';
const DATA_KEY$6 = 'bs.modal';
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = '.data-api';
const ESCAPE_KEY$1 = 'Escape';
const Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
};
const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
};
const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$6}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE$3 = 'fade';
const CLASS_NAME_SHOW$4 = 'show';
const CLASS_NAME_STATIC = 'modal-static';
const OPEN_SELECTOR$1 = '.modal.show';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Modal extends BaseComponent {
    constructor(element, config){
        super(element);
        this._config = this._getConfig(config);
        this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._isShown = false;
        this._ignoreBackdropClick = false;
        this._isTransitioning = false;
        this._scrollBar = new ScrollBarHelper();
    }
    static get Default() {
        return Default$5;
    }
    static get NAME() {
        return NAME$6;
    }
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown || this._isTransitioning) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
            relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        if (this._isAnimated()) this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add(CLASS_NAME_OPEN);
        this._adjustDialog();
        this._setEscapeEvent();
        this._setResizeEvent();
        EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, ()=>{
            EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, (event)=>{
                if (event.target === this._element) this._ignoreBackdropClick = true;
            });
        });
        this._showBackdrop(()=>this._showElement(relatedTarget)
        );
    }
    hide() {
        if (!this._isShown || this._isTransitioning) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
        if (hideEvent.defaultPrevented) return;
        this._isShown = false;
        const isAnimated = this._isAnimated();
        if (isAnimated) this._isTransitioning = true;
        this._setEscapeEvent();
        this._setResizeEvent();
        this._focustrap.deactivate();
        this._element.classList.remove(CLASS_NAME_SHOW$4);
        EventHandler.off(this._element, EVENT_CLICK_DISMISS);
        EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);
        this._queueCallback(()=>this._hideModal()
        , this._element, isAnimated);
    }
    dispose() {
        [
            window,
            this._dialog
        ].forEach((htmlElement)=>EventHandler.off(htmlElement, EVENT_KEY$6)
        );
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    handleUpdate() {
        this._adjustDialog();
    }
    _initializeBackDrop() {
        return new Backdrop({
            isVisible: Boolean(this._config.backdrop),
            // 'static' option will be translated to true, and booleans will keep their value
            isAnimated: this._isAnimated()
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _getConfig(config) {
        config = {
            ...Default$5,
            ...Manipulator.getDataAttributes(this._element),
            ...typeof config === 'object' ? config : {}
        };
        typeCheckConfig(NAME$6, config, DefaultType$5);
        return config;
    }
    _showElement(relatedTarget) {
        const isAnimated = this._isAnimated();
        const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) // Don't move modal's DOM position
        document.body.append(this._element);
        this._element.style.display = 'block';
        this._element.removeAttribute('aria-hidden');
        this._element.setAttribute('aria-modal', true);
        this._element.setAttribute('role', 'dialog');
        this._element.scrollTop = 0;
        if (modalBody) modalBody.scrollTop = 0;
        if (isAnimated) reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW$4);
        const transitionComplete = ()=>{
            if (this._config.focus) this._focustrap.activate();
            this._isTransitioning = false;
            EventHandler.trigger(this._element, EVENT_SHOWN$3, {
                relatedTarget
            });
        };
        this._queueCallback(transitionComplete, this._dialog, isAnimated);
    }
    _setEscapeEvent() {
        if (this._isShown) EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event)=>{
            if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
                event.preventDefault();
                this.hide();
            } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) this._triggerBackdropTransition();
        });
        else EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
    }
    _setResizeEvent() {
        if (this._isShown) EventHandler.on(window, EVENT_RESIZE, ()=>this._adjustDialog()
        );
        else EventHandler.off(window, EVENT_RESIZE);
    }
    _hideModal() {
        this._element.style.display = 'none';
        this._element.setAttribute('aria-hidden', true);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        this._isTransitioning = false;
        this._backdrop.hide(()=>{
            document.body.classList.remove(CLASS_NAME_OPEN);
            this._resetAdjustments();
            this._scrollBar.reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$3);
        });
    }
    _showBackdrop(callback) {
        EventHandler.on(this._element, EVENT_CLICK_DISMISS, (event)=>{
            if (this._ignoreBackdropClick) {
                this._ignoreBackdropClick = false;
                return;
            }
            if (event.target !== event.currentTarget) return;
            if (this._config.backdrop === true) this.hide();
            else if (this._config.backdrop === 'static') this._triggerBackdropTransition();
        });
        this._backdrop.show(callback);
    }
    _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        if (hideEvent.defaultPrevented) return;
        const { classList , scrollHeight , style  } = this._element;
        const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed
        if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) return;
        if (!isModalOverflowing) style.overflowY = 'hidden';
        classList.add(CLASS_NAME_STATIC);
        this._queueCallback(()=>{
            classList.remove(CLASS_NAME_STATIC);
            if (!isModalOverflowing) this._queueCallback(()=>{
                style.overflowY = '';
            }, this._dialog);
        }, this._dialog);
        this._element.focus();
    }
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------
    _adjustDialog() {
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const scrollbarWidth = this._scrollBar.getWidth();
        const isBodyOverflowing = scrollbarWidth > 0;
        if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) this._element.style.paddingLeft = `${scrollbarWidth}px`;
        if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) this._element.style.paddingRight = `${scrollbarWidth}px`;
    }
    _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
    }
    static jQueryInterface(config, relatedTarget) {
        return this.each(function() {
            const data = Modal.getOrCreateInstance(this, config);
            if (typeof config !== 'string') return;
            if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
            data[config](relatedTarget);
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = getElementFromSelector(this);
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    EventHandler.one(target, EVENT_SHOW$3, (showEvent)=>{
        if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
        return;
        EventHandler.one(target, EVENT_HIDDEN$3, ()=>{
            if (isVisible(this)) this.focus();
        });
    }); // avoid conflict when clicking moddal toggler while another one is open
    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (allReadyOpen) Modal.getInstance(allReadyOpen).hide();
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */ defineJQueryPlugin(Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$5 = 'offcanvas';
const DATA_KEY$5 = 'bs.offcanvas';
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const DATA_API_KEY$2 = '.data-api';
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
const ESCAPE_KEY = 'Escape';
const Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
};
const DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
};
const CLASS_NAME_SHOW$3 = 'show';
const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const OPEN_SELECTOR = '.offcanvas.show';
const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Offcanvas extends BaseComponent {
    constructor(element, config){
        super(element);
        this._config = this._getConfig(config);
        this._isShown = false;
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._addEventListeners();
    }
    static get NAME() {
        return NAME$5;
    }
    static get Default() {
        return Default$4;
    }
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
            relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._element.style.visibility = 'visible';
        this._backdrop.show();
        if (!this._config.scroll) new ScrollBarHelper().hide();
        this._element.removeAttribute('aria-hidden');
        this._element.setAttribute('aria-modal', true);
        this._element.setAttribute('role', 'dialog');
        this._element.classList.add(CLASS_NAME_SHOW$3);
        const completeCallBack = ()=>{
            if (!this._config.scroll) this._focustrap.activate();
            EventHandler.trigger(this._element, EVENT_SHOWN$2, {
                relatedTarget
            });
        };
        this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
        if (!this._isShown) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);
        if (hideEvent.defaultPrevented) return;
        this._focustrap.deactivate();
        this._element.blur();
        this._isShown = false;
        this._element.classList.remove(CLASS_NAME_SHOW$3);
        this._backdrop.hide();
        const completeCallback = ()=>{
            this._element.setAttribute('aria-hidden', true);
            this._element.removeAttribute('aria-modal');
            this._element.removeAttribute('role');
            this._element.style.visibility = 'hidden';
            if (!this._config.scroll) new ScrollBarHelper().reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$2);
        };
        this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    _getConfig(config) {
        config = {
            ...Default$4,
            ...Manipulator.getDataAttributes(this._element),
            ...typeof config === 'object' ? config : {}
        };
        typeCheckConfig(NAME$5, config, DefaultType$4);
        return config;
    }
    _initializeBackDrop() {
        return new Backdrop({
            className: CLASS_NAME_BACKDROP,
            isVisible: this._config.backdrop,
            isAnimated: true,
            rootElement: this._element.parentNode,
            clickCallback: ()=>this.hide()
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _addEventListeners() {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event)=>{
            if (this._config.keyboard && event.key === ESCAPE_KEY) this.hide();
        });
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Offcanvas.getOrCreateInstance(this, config);
            if (typeof config !== 'string') return;
            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = getElementFromSelector(this);
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    EventHandler.one(target, EVENT_HIDDEN$2, ()=>{
        // focus on trigger when it is closed
        if (isVisible(this)) this.focus();
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (allReadyOpen && allReadyOpen !== target) Offcanvas.getInstance(allReadyOpen).hide();
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$1, ()=>SelectorEngine.find(OPEN_SELECTOR).forEach((el)=>Offcanvas.getOrCreateInstance(el).show()
    )
);
enableDismissTrigger(Offcanvas);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */ defineJQueryPlugin(Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const uriAttributes = new Set([
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
]);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
const allowedAttribute = (attribute, allowedAttributeList)=>{
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
        if (uriAttributes.has(attributeName)) return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
        return true;
    }
    const regExp = allowedAttributeList.filter((attributeRegex)=>attributeRegex instanceof RegExp
    ); // Check if a regular expression validates the attribute.
    for(let i = 0, len = regExp.length; i < len; i++){
        if (regExp[i].test(attributeName)) return true;
    }
    return false;
};
const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': [
        'class',
        'dir',
        'id',
        'lang',
        'role',
        ARIA_ATTRIBUTE_PATTERN
    ],
    a: [
        'target',
        'href',
        'title',
        'rel'
    ],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: [
        'src',
        'srcset',
        'alt',
        'title',
        'width',
        'height'
    ],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    if (!unsafeHtml.length) return unsafeHtml;
    if (sanitizeFn && typeof sanitizeFn === 'function') return sanitizeFn(unsafeHtml);
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
    for(let i = 0, len = elements.length; i < len; i++){
        const element = elements[i];
        const elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            continue;
        }
        const attributeList = [].concat(...element.attributes);
        const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
        attributeList.forEach((attribute)=>{
            if (!allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
        });
    }
    return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$4 = 'tooltip';
const DATA_KEY$4 = 'bs.tooltip';
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const CLASS_PREFIX$1 = 'bs-tooltip';
const DISALLOWED_ATTRIBUTES = new Set([
    'sanitize',
    'allowList',
    'sanitizeFn'
]);
const DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
};
const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
};
const Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [
        0,
        0
    ],
    container: false,
    fallbackPlacements: [
        'top',
        'right',
        'bottom',
        'left'
    ],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
};
const Event$2 = {
    HIDE: `hide${EVENT_KEY$4}`,
    HIDDEN: `hidden${EVENT_KEY$4}`,
    SHOW: `show${EVENT_KEY$4}`,
    SHOWN: `shown${EVENT_KEY$4}`,
    INSERTED: `inserted${EVENT_KEY$4}`,
    CLICK: `click${EVENT_KEY$4}`,
    FOCUSIN: `focusin${EVENT_KEY$4}`,
    FOCUSOUT: `focusout${EVENT_KEY$4}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
};
const CLASS_NAME_FADE$2 = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW$2 = 'show';
const HOVER_STATE_SHOW = 'show';
const HOVER_STATE_OUT = 'out';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = 'hide.bs.modal';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Tooltip extends BaseComponent {
    constructor(element, config){
        if (typeof _core === 'undefined') throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
        super(element); // private
        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {};
        this._popper = null; // Protected
        this._config = this._getConfig(config);
        this.tip = null;
        this._setListeners();
    }
    static get Default() {
        return Default$3;
    }
    static get NAME() {
        return NAME$4;
    }
    static get Event() {
        return Event$2;
    }
    static get DefaultType() {
        return DefaultType$3;
    }
    enable() {
        this._isEnabled = true;
    }
    disable() {
        this._isEnabled = false;
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled;
    }
    toggle(event) {
        if (!this._isEnabled) return;
        if (event) {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger.click = !context._activeTrigger.click;
            if (context._isWithActiveTrigger()) context._enter(null, context);
            else context._leave(null, context);
        } else {
            if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
                this._leave(null, this);
                return;
            }
            this._enter(null, this);
        }
    }
    dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this.tip) this.tip.remove();
        this._disposePopper();
        super.dispose();
    }
    show() {
        if (this._element.style.display === 'none') throw new Error('Please use show on visible elements');
        if (!(this.isWithContent() && this._isEnabled)) return;
        const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
        const shadowRoot = findShadowRoot(this._element);
        const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) return;
         // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
        // This will be removed later in favor of a `setContent` method
        if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
            this._disposePopper();
            this.tip.remove();
            this.tip = null;
        }
        const tip = this.getTipElement();
        const tipId = getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this._element.setAttribute('aria-describedby', tipId);
        if (this._config.animation) tip.classList.add(CLASS_NAME_FADE$2);
        const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
        const attachment = this._getAttachment(placement);
        this._addAttachmentClass(attachment);
        const { container  } = this._config;
        Data.set(tip, this.constructor.DATA_KEY, this);
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
        }
        if (this._popper) this._popper.update();
        else this._popper = _core.createPopper(this._element, tip, this._getPopperConfig(attachment));
        tip.classList.add(CLASS_NAME_SHOW$2);
        const customClass = this._resolvePossibleFunction(this._config.customClass);
        if (customClass) tip.classList.add(...customClass.split(' '));
         // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) [].concat(...document.body.children).forEach((element)=>{
            EventHandler.on(element, 'mouseover', noop);
        });
        const complete = ()=>{
            const prevHoverState = this._hoverState;
            this._hoverState = null;
            EventHandler.trigger(this._element, this.constructor.Event.SHOWN);
            if (prevHoverState === HOVER_STATE_OUT) this._leave(null, this);
        };
        const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);
        this._queueCallback(complete, this.tip, isAnimated);
    }
    hide() {
        if (!this._popper) return;
        const tip = this.getTipElement();
        const complete = ()=>{
            if (this._isWithActiveTrigger()) return;
            if (this._hoverState !== HOVER_STATE_SHOW) tip.remove();
            this._cleanTipClass();
            this._element.removeAttribute('aria-describedby');
            EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);
            this._disposePopper();
        };
        const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);
        if (hideEvent.defaultPrevented) return;
        tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) [].concat(...document.body.children).forEach((element)=>EventHandler.off(element, 'mouseover', noop)
        );
        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);
        this._queueCallback(complete, this.tip, isAnimated);
        this._hoverState = '';
    }
    update() {
        if (this._popper !== null) this._popper.update();
    }
    isWithContent() {
        return Boolean(this.getTitle());
    }
    getTipElement() {
        if (this.tip) return this.tip;
        const element = document.createElement('div');
        element.innerHTML = this._config.template;
        const tip = element.children[0];
        this.setContent(tip);
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
        this.tip = tip;
        return this.tip;
    }
    setContent(tip) {
        this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
    }
    _sanitizeAndSetContent(template, content, selector) {
        const templateElement = SelectorEngine.findOne(selector, template);
        if (!content && templateElement) {
            templateElement.remove();
            return;
        } // we use append for html objects to maintain js events
        this.setElementContent(templateElement, content);
    }
    setElementContent(element, content) {
        if (element === null) return;
        if (isElement(content)) {
            content = getElement(content); // content is a DOM node or a jQuery
            if (this._config.html) {
                if (content.parentNode !== element) {
                    element.innerHTML = '';
                    element.append(content);
                }
            } else element.textContent = content.textContent;
            return;
        }
        if (this._config.html) {
            if (this._config.sanitize) content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
            element.innerHTML = content;
        } else element.textContent = content;
    }
    getTitle() {
        const title = this._element.getAttribute('data-bs-original-title') || this._config.title;
        return this._resolvePossibleFunction(title);
    }
    updateAttachment(attachment) {
        if (attachment === 'right') return 'end';
        if (attachment === 'left') return 'start';
        return attachment;
    }
    _initializeOnDelegatedTarget(event, context) {
        return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _getOffset() {
        const { offset  } = this._config;
        if (typeof offset === 'string') return offset.split(',').map((val)=>Number.parseInt(val, 10)
        );
        if (typeof offset === 'function') return (popperData)=>offset(popperData, this._element)
        ;
        return offset;
    }
    _resolvePossibleFunction(content) {
        return typeof content === 'function' ? content.call(this._element) : content;
    }
    _getPopperConfig(attachment) {
        const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [
                {
                    name: 'flip',
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                },
                {
                    name: 'offset',
                    options: {
                        offset: this._getOffset()
                    }
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: 'arrow',
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                },
                {
                    name: 'onChange',
                    enabled: true,
                    phase: 'afterWrite',
                    fn: (data)=>this._handlePopperPlacementChange(data)
                }
            ],
            onFirstUpdate: (data)=>{
                if (data.options.placement !== data.placement) this._handlePopperPlacementChange(data);
            }
        };
        return {
            ...defaultBsPopperConfig,
            ...typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
        };
    }
    _addAttachmentClass(attachment) {
        this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment)}`);
    }
    _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
    }
    _setListeners() {
        const triggers = this._config.trigger.split(' ');
        triggers.forEach((trigger)=>{
            if (trigger === 'click') EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, (event)=>this.toggle(event)
            );
            else if (trigger !== TRIGGER_MANUAL) {
                const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
                const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                EventHandler.on(this._element, eventIn, this._config.selector, (event)=>this._enter(event)
                );
                EventHandler.on(this._element, eventOut, this._config.selector, (event)=>this._leave(event)
                );
            }
        });
        this._hideModalHandler = ()=>{
            if (this._element) this.hide();
        };
        EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this._config.selector) this._config = {
            ...this._config,
            trigger: 'manual',
            selector: ''
        };
        else this._fixTitle();
    }
    _fixTitle() {
        const title = this._element.getAttribute('title');
        const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');
        if (title || originalTitleType !== 'string') {
            this._element.setAttribute('data-bs-original-title', title || '');
            if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) this._element.setAttribute('aria-label', title);
            this._element.setAttribute('title', '');
        }
    }
    _enter(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);
        if (event) context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
        if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
            context._hoverState = HOVER_STATE_SHOW;
            return;
        }
        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_SHOW;
        if (!context._config.delay || !context._config.delay.show) {
            context.show();
            return;
        }
        context._timeout = setTimeout(()=>{
            if (context._hoverState === HOVER_STATE_SHOW) context.show();
        }, context._config.delay.show);
    }
    _leave(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);
        if (event) context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
        if (context._isWithActiveTrigger()) return;
        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_OUT;
        if (!context._config.delay || !context._config.delay.hide) {
            context.hide();
            return;
        }
        context._timeout = setTimeout(()=>{
            if (context._hoverState === HOVER_STATE_OUT) context.hide();
        }, context._config.delay.hide);
    }
    _isWithActiveTrigger() {
        for(const trigger in this._activeTrigger){
            if (this._activeTrigger[trigger]) return true;
        }
        return false;
    }
    _getConfig(config) {
        const dataAttributes = Manipulator.getDataAttributes(this._element);
        Object.keys(dataAttributes).forEach((dataAttr)=>{
            if (DISALLOWED_ATTRIBUTES.has(dataAttr)) delete dataAttributes[dataAttr];
        });
        config = {
            ...this.constructor.Default,
            ...dataAttributes,
            ...typeof config === 'object' && config ? config : {}
        };
        config.container = config.container === false ? document.body : getElement(config.container);
        if (typeof config.delay === 'number') config.delay = {
            show: config.delay,
            hide: config.delay
        };
        if (typeof config.title === 'number') config.title = config.title.toString();
        if (typeof config.content === 'number') config.content = config.content.toString();
        typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
        if (config.sanitize) config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
        return config;
    }
    _getDelegateConfig() {
        const config = {};
        for(const key in this._config)if (this.constructor.Default[key] !== this._config[key]) config[key] = this._config[key];
         // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`
        return config;
    }
    _cleanTipClass() {
        const tip = this.getTipElement();
        const basicClassPrefixRegex = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g');
        const tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);
        if (tabClass !== null && tabClass.length > 0) tabClass.map((token)=>token.trim()
        ).forEach((tClass)=>tip.classList.remove(tClass)
        );
    }
    _getBasicClassPrefix() {
        return CLASS_PREFIX$1;
    }
    _handlePopperPlacementChange(popperData) {
        const { state  } = popperData;
        if (!state) return;
        this.tip = state.elements.popper;
        this._cleanTipClass();
        this._addAttachmentClass(this._getAttachment(state.placement));
    }
    _disposePopper() {
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Tooltip.getOrCreateInstance(this, config);
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */ defineJQueryPlugin(Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$3 = 'popover';
const DATA_KEY$3 = 'bs.popover';
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const CLASS_PREFIX = 'bs-popover';
const Default$2 = {
    ...Tooltip.Default,
    placement: 'right',
    offset: [
        0,
        8
    ],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
};
const DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: '(string|element|function)'
};
const Event$1 = {
    HIDE: `hide${EVENT_KEY$3}`,
    HIDDEN: `hidden${EVENT_KEY$3}`,
    SHOW: `show${EVENT_KEY$3}`,
    SHOWN: `shown${EVENT_KEY$3}`,
    INSERTED: `inserted${EVENT_KEY$3}`,
    CLICK: `click${EVENT_KEY$3}`,
    FOCUSIN: `focusin${EVENT_KEY$3}`,
    FOCUSOUT: `focusout${EVENT_KEY$3}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
};
const SELECTOR_TITLE = '.popover-header';
const SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Popover extends Tooltip {
    // Getters
    static get Default() {
        return Default$2;
    }
    static get NAME() {
        return NAME$3;
    }
    static get Event() {
        return Event$1;
    }
    static get DefaultType() {
        return DefaultType$2;
    }
    isWithContent() {
        return this.getTitle() || this._getContent();
    }
    setContent(tip) {
        this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);
        this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
        return CLASS_PREFIX;
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Popover.getOrCreateInstance(this, config);
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */ defineJQueryPlugin(Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$2 = 'scrollspy';
const DATA_KEY$2 = 'bs.scrollspy';
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY$1 = '.data-api';
const Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
};
const DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
};
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const CLASS_NAME_ACTIVE$1 = 'active';
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
const SELECTOR_NAV_LINKS = '.nav-link';
const SELECTOR_NAV_ITEMS = '.nav-item';
const SELECTOR_LIST_ITEMS = '.list-group-item';
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}, .${CLASS_NAME_DROPDOWN_ITEM}`;
const SELECTOR_DROPDOWN$1 = '.dropdown';
const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const METHOD_OFFSET = 'offset';
const METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class ScrollSpy extends BaseComponent {
    constructor(element, config){
        super(element);
        this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
        this._config = this._getConfig(config);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        EventHandler.on(this._scrollElement, EVENT_SCROLL, ()=>this._process()
        );
        this.refresh();
        this._process();
    }
    static get Default() {
        return Default$1;
    }
    static get NAME() {
        return NAME$2;
    }
    refresh() {
        const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
        const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        const targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
        targets.map((element)=>{
            const targetSelector = getSelectorFromElement(element);
            const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;
            if (target) {
                const targetBCR = target.getBoundingClientRect();
                if (targetBCR.width || targetBCR.height) return [
                    Manipulator[offsetMethod](target).top + offsetBase,
                    targetSelector
                ];
            }
            return null;
        }).filter((item)=>item
        ).sort((a, b)=>a[0] - b[0]
        ).forEach((item)=>{
            this._offsets.push(item[0]);
            this._targets.push(item[1]);
        });
    }
    dispose() {
        EventHandler.off(this._scrollElement, EVENT_KEY$2);
        super.dispose();
    }
    _getConfig(config) {
        config = {
            ...Default$1,
            ...Manipulator.getDataAttributes(this._element),
            ...typeof config === 'object' && config ? config : {}
        };
        config.target = getElement(config.target) || document.documentElement;
        typeCheckConfig(NAME$2, config, DefaultType$1);
        return config;
    }
    _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
    _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
        const scrollTop = this._getScrollTop() + this._config.offset;
        const scrollHeight = this._getScrollHeight();
        const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
        if (this._scrollHeight !== scrollHeight) this.refresh();
        if (scrollTop >= maxScroll) {
            const target = this._targets[this._targets.length - 1];
            if (this._activeTarget !== target) this._activate(target);
            return;
        }
        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
            this._activeTarget = null;
            this._clear();
            return;
        }
        for(let i = this._offsets.length; i--;){
            const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);
            if (isActiveTarget) this._activate(this._targets[i]);
        }
    }
    _activate(target) {
        this._activeTarget = target;
        this._clear();
        const queries = SELECTOR_LINK_ITEMS.split(',').map((selector)=>`${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`
        );
        const link = SelectorEngine.findOne(queries.join(','), this._config.target);
        link.classList.add(CLASS_NAME_ACTIVE$1);
        if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
        else SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach((listGroup)=>{
            // Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
            SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach((item)=>item.classList.add(CLASS_NAME_ACTIVE$1)
            ); // Handle special case when .nav-link is inside .nav-item
            SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach((navItem)=>{
                SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach((item)=>item.classList.add(CLASS_NAME_ACTIVE$1)
                );
            });
        });
        EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
            relatedTarget: target
        });
    }
    _clear() {
        SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter((node)=>node.classList.contains(CLASS_NAME_ACTIVE$1)
        ).forEach((node)=>node.classList.remove(CLASS_NAME_ACTIVE$1)
        );
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = ScrollSpy.getOrCreateInstance(this, config);
            if (typeof config !== 'string') return;
            if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(window, EVENT_LOAD_DATA_API, ()=>{
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach((spy)=>new ScrollSpy(spy)
    );
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */ defineJQueryPlugin(ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME$1 = 'tab';
const DATA_KEY$1 = 'bs.tab';
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const DATA_API_KEY = '.data-api';
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_FADE$1 = 'fade';
const CLASS_NAME_SHOW$1 = 'show';
const SELECTOR_DROPDOWN = '.dropdown';
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ACTIVE_UL = ':scope > li > .active';
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Tab extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$1;
    }
    show() {
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) return;
        let previous;
        const target = getElementFromSelector(this._element);
        const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);
        if (listElement) {
            const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
            previous = SelectorEngine.find(itemSelector, listElement);
            previous = previous[previous.length - 1];
        }
        const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
            relatedTarget: this._element
        }) : null;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
            relatedTarget: previous
        });
        if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) return;
        this._activate(this._element, listElement);
        const complete = ()=>{
            EventHandler.trigger(previous, EVENT_HIDDEN$1, {
                relatedTarget: this._element
            });
            EventHandler.trigger(this._element, EVENT_SHOWN$1, {
                relatedTarget: previous
            });
        };
        if (target) this._activate(target, target.parentNode, complete);
        else complete();
    }
    _activate(element, container, callback) {
        const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
        const active = activeElements[0];
        const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);
        const complete = ()=>this._transitionComplete(element, active, callback)
        ;
        if (active && isTransitioning) {
            active.classList.remove(CLASS_NAME_SHOW$1);
            this._queueCallback(complete, element, true);
        } else complete();
    }
    _transitionComplete(element, active, callback) {
        if (active) {
            active.classList.remove(CLASS_NAME_ACTIVE);
            const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);
            if (dropdownChild) dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
            if (active.getAttribute('role') === 'tab') active.setAttribute('aria-selected', false);
        }
        element.classList.add(CLASS_NAME_ACTIVE);
        if (element.getAttribute('role') === 'tab') element.setAttribute('aria-selected', true);
        reflow(element);
        if (element.classList.contains(CLASS_NAME_FADE$1)) element.classList.add(CLASS_NAME_SHOW$1);
        let parent = element.parentNode;
        if (parent && parent.nodeName === 'LI') parent = parent.parentNode;
        if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
            const dropdownElement = element.closest(SELECTOR_DROPDOWN);
            if (dropdownElement) SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach((dropdown)=>dropdown.classList.add(CLASS_NAME_ACTIVE)
            );
            element.setAttribute('aria-expanded', true);
        }
        if (callback) callback();
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Tab.getOrCreateInstance(this);
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    const data = Tab.getOrCreateInstance(this);
    data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */ defineJQueryPlugin(Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME = 'toast';
const DATA_KEY = 'bs.toast';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
};
const Default = {
    animation: true,
    autohide: true,
    delay: 5000
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Toast extends BaseComponent {
    constructor(element, config){
        super(element);
        this._config = this._getConfig(config);
        this._timeout = null;
        this._hasMouseInteraction = false;
        this._hasKeyboardInteraction = false;
        this._setListeners();
    }
    static get DefaultType() {
        return DefaultType;
    }
    static get Default() {
        return Default;
    }
    static get NAME() {
        return NAME;
    }
    show() {
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
        if (showEvent.defaultPrevented) return;
        this._clearTimeout();
        if (this._config.animation) this._element.classList.add(CLASS_NAME_FADE);
        const complete = ()=>{
            this._element.classList.remove(CLASS_NAME_SHOWING);
            EventHandler.trigger(this._element, EVENT_SHOWN);
            this._maybeScheduleHide();
        };
        this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW);
        this._element.classList.add(CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
        if (!this._element.classList.contains(CLASS_NAME_SHOW)) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
        if (hideEvent.defaultPrevented) return;
        const complete = ()=>{
            this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
            this._element.classList.remove(CLASS_NAME_SHOWING);
            this._element.classList.remove(CLASS_NAME_SHOW);
            EventHandler.trigger(this._element, EVENT_HIDDEN);
        };
        this._element.classList.add(CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
        this._clearTimeout();
        if (this._element.classList.contains(CLASS_NAME_SHOW)) this._element.classList.remove(CLASS_NAME_SHOW);
        super.dispose();
    }
    _getConfig(config) {
        config = {
            ...Default,
            ...Manipulator.getDataAttributes(this._element),
            ...typeof config === 'object' && config ? config : {}
        };
        typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
    }
    _maybeScheduleHide() {
        if (!this._config.autohide) return;
        if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
        this._timeout = setTimeout(()=>{
            this.hide();
        }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
        switch(event.type){
            case 'mouseover':
            case 'mouseout':
                this._hasMouseInteraction = isInteracting;
                break;
            case 'focusin':
            case 'focusout':
                this._hasKeyboardInteraction = isInteracting;
                break;
        }
        if (isInteracting) {
            this._clearTimeout();
            return;
        }
        const nextElement = event.relatedTarget;
        if (this._element === nextElement || this._element.contains(nextElement)) return;
        this._maybeScheduleHide();
    }
    _setListeners() {
        EventHandler.on(this._element, EVENT_MOUSEOVER, (event)=>this._onInteraction(event, true)
        );
        EventHandler.on(this._element, EVENT_MOUSEOUT, (event)=>this._onInteraction(event, false)
        );
        EventHandler.on(this._element, EVENT_FOCUSIN, (event)=>this._onInteraction(event, true)
        );
        EventHandler.on(this._element, EVENT_FOCUSOUT, (event)=>this._onInteraction(event, false)
        );
    }
    _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Toast.getOrCreateInstance(this, config);
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') throw new TypeError(`No method named "${config}"`);
                data[config](this);
            }
        });
    }
}
enableDismissTrigger(Toast);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */ defineJQueryPlugin(Toast);

},{"@popperjs/core":"7unqC","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"7unqC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>_createPopperJs.popperGenerator
) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>_createPopperJs.detectOverflow
);
parcelHelpers.export(exports, "createPopperBase", ()=>_createPopperJs.createPopper
);
parcelHelpers.export(exports, "createPopper", ()=>_popperJs.createPopper
) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>_popperLiteJs.createPopper
);
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"lCAq5","./modifiers/index.js":"cap3W","./createPopper.js":"cHuNp","./popper.js":"1PuRF","./popper-lite.js":"gKW1N","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"lCAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top
);
parcelHelpers.export(exports, "bottom", ()=>bottom
);
parcelHelpers.export(exports, "right", ()=>right
);
parcelHelpers.export(exports, "left", ()=>left
);
parcelHelpers.export(exports, "auto", ()=>auto
);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements
);
parcelHelpers.export(exports, "start", ()=>start
);
parcelHelpers.export(exports, "end", ()=>end
);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents
);
parcelHelpers.export(exports, "viewport", ()=>viewport
);
parcelHelpers.export(exports, "popper", ()=>popper
);
parcelHelpers.export(exports, "reference", ()=>reference
);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements
);
parcelHelpers.export(exports, "placements", ()=>placements
);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead
);
parcelHelpers.export(exports, "read", ()=>read
);
parcelHelpers.export(exports, "afterRead", ()=>afterRead
);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain
);
parcelHelpers.export(exports, "main", ()=>main
);
parcelHelpers.export(exports, "afterMain", ()=>afterMain
);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite
);
parcelHelpers.export(exports, "write", ()=>write
);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite
);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases
);
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"6ZVoT":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cap3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>_applyStylesJsDefault.default
);
parcelHelpers.export(exports, "arrow", ()=>_arrowJsDefault.default
);
parcelHelpers.export(exports, "computeStyles", ()=>_computeStylesJsDefault.default
);
parcelHelpers.export(exports, "eventListeners", ()=>_eventListenersJsDefault.default
);
parcelHelpers.export(exports, "flip", ()=>_flipJsDefault.default
);
parcelHelpers.export(exports, "hide", ()=>_hideJsDefault.default
);
parcelHelpers.export(exports, "offset", ()=>_offsetJsDefault.default
);
parcelHelpers.export(exports, "popperOffsets", ()=>_popperOffsetsJsDefault.default
);
parcelHelpers.export(exports, "preventOverflow", ()=>_preventOverflowJsDefault.default
);
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"4iMn4","./arrow.js":"31HFW","./computeStyles.js":"gDlm2","./eventListeners.js":"hBKsL","./flip.js":"fv5wq","./hide.js":"2g4OF","./offset.js":"3GKVY","./popperOffsets.js":"6I679","./preventOverflow.js":"1AMhb","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"4iMn4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name1) {
        var style = state.styles[name1] || {};
        var attributes = state.attributes[name1] || {};
        var element = state.elements[name1]; // arrow is optional + virtual elements
        if (!_instanceOfJs.isHTMLElement(element) || !_getNodeNameJsDefault.default(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? '' : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style1 = styleProperties.reduce(function(style, property) {
                style[property] = '';
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!_instanceOfJs.isHTMLElement(element) || !_getNodeNameJsDefault.default(element)) return;
            Object.assign(element.style, style1);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: [
        'computeStyles'
    ]
};

},{"../dom-utils/getNodeName.js":"a2Qom","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"a2Qom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}
exports.default = getNodeName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"gYFUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement
);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement
);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot
);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = _getWindowJsDefault.default(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = _getWindowJsDefault.default(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') return false;
    var OwnElement = _getWindowJsDefault.default(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"2SkOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
exports.default = getWindow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"31HFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return _mergePaddingObjectJsDefault.default(typeof padding !== 'number' ? padding : _expandToHashMapJsDefault.default(padding, _enumsJs.basePlacements));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = _getBasePlacementJsDefault.default(state.placement);
    var axis = _getMainAxisFromPlacementJsDefault.default(basePlacement);
    var isVertical = [
        _enumsJs.left,
        _enumsJs.right
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = _getLayoutRectJsDefault.default(arrowElement);
    var minProp = axis === 'y' ? _enumsJs.top : _enumsJs.left;
    var maxProp = axis === 'y' ? _enumsJs.bottom : _enumsJs.right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = _getOffsetParentJsDefault.default(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = _withinJs.within(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!_instanceOfJs.isHTMLElement(arrowElement)) console.error([
        'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
        'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
        'the arrow.'
    ].join(' '));
    if (!_containsJsDefault.default(state.elements.popper, arrowElement)) {
        console.error([
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            'element.'
        ].join(' '));
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};

},{"../utils/getBasePlacement.js":"59Wp3","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/contains.js":"4QxRR","../dom-utils/getOffsetParent.js":"laoYw","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/within.js":"3glSz","../utils/mergePaddingObject.js":"lEIf9","../utils/expandToHashMap.js":"iQlH5","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"59Wp3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split('-')[0];
}
exports.default = getBasePlacement;

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"jvjuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = _getBoundingClientRectJsDefault.default(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}
exports.default = getLayoutRect;

},{"./getBoundingClientRect.js":"9CFSQ","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"9CFSQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) includeScale = false;
    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (_instanceOfJs.isHTMLElement(element) && includeScale) {
        var offsetHeight = element.offsetHeight;
        var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
        // Fallback to 1 in case both values are `0`
        if (offsetWidth > 0) scaleX = _mathJs.round(rect.width) / offsetWidth || 1;
        if (offsetHeight > 0) scaleY = _mathJs.round(rect.height) / offsetHeight || 1;
    }
    return {
        width: rect.width / scaleX,
        height: rect.height / scaleY,
        top: rect.top / scaleY,
        right: rect.right / scaleX,
        bottom: rect.bottom / scaleY,
        left: rect.left / scaleX,
        x: rect.left / scaleX,
        y: rect.top / scaleY
    };
}
exports.default = getBoundingClientRect;

},{"./instanceOf.js":"gYFUC","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"gQqVe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max
);
parcelHelpers.export(exports, "min", ()=>min
);
parcelHelpers.export(exports, "round", ()=>round
);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"4QxRR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && _instanceOfJs.isShadowRoot(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next)
    } // Give up, the result is false
    return false;
}
exports.default = contains;

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"laoYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
function getTrueOffsetParent(element) {
    if (!_instanceOfJs.isHTMLElement(element) || _getComputedStyleJsDefault.default(element).position === 'fixed') return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;
    if (isIE && _instanceOfJs.isHTMLElement(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = _getComputedStyleJsDefault.default(element);
        if (elementCss.position === 'fixed') return null;
    }
    var currentNode = _getParentNodeJsDefault.default(element);
    while(_instanceOfJs.isHTMLElement(currentNode) && [
        'html',
        'body'
    ].indexOf(_getNodeNameJsDefault.default(currentNode)) < 0){
        var css = _getComputedStyleJsDefault.default(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
            'transform',
            'perspective'
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = _getWindowJsDefault.default(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && _isTableElementJsDefault.default(offsetParent) && _getComputedStyleJsDefault.default(offsetParent).position === 'static')offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && (_getNodeNameJsDefault.default(offsetParent) === 'html' || _getNodeNameJsDefault.default(offsetParent) === 'body' && _getComputedStyleJsDefault.default(offsetParent).position === 'static')) return window;
    return offsetParent || getContainingBlock(element) || window;
}
exports.default = getOffsetParent;

},{"./getWindow.js":"2SkOo","./getNodeName.js":"a2Qom","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./isTableElement.js":"2qBb7","./getParentNode.js":"bIHpd","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"3mZjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return _getWindowJsDefault.default(element).getComputedStyle(element);
}
exports.default = getComputedStyle;

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"2qBb7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf(_getNodeNameJsDefault.default(element)) >= 0;
}
exports.default = isTableElement;

},{"./getNodeName.js":"a2Qom","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"bIHpd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if (_getNodeNameJsDefault.default(element) === 'html') return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || element.parentNode || (_instanceOfJs.isShadowRoot(element) ? element.host : null) || // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    _getDocumentElementJsDefault.default(element) // fallback
    );
}
exports.default = getParentNode;

},{"./getNodeName.js":"a2Qom","./getDocumentElement.js":"eJ9Y1","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"eJ9Y1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((_instanceOfJs.isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
exports.default = getDocumentElement;

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"1Xlom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getMainAxisFromPlacement(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}
exports.default = getMainAxisFromPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"3glSz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within
);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp
);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return _mathJs.max(min, _mathJs.min(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"lEIf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, _getFreshSideObjectJsDefault.default(), paddingObject);
}
exports.default = mergePaddingObject;

},{"./getFreshSideObject.js":"g4xOt","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"g4xOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
exports.default = getFreshSideObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"iQlH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}
exports.default = expandToHashMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"gDlm2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles
);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: _mathJs.round(x * dpr) / dpr || 0,
        y: _mathJs.round(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = _enumsJs.left;
    var sideY = _enumsJs.top;
    var win = window;
    if (adaptive) {
        var offsetParent = _getOffsetParentJsDefault.default(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
        if (offsetParent === _getWindowJsDefault.default(popper)) {
            offsetParent = _getDocumentElementJsDefault.default(popper);
            if (_getComputedStyleJsDefault.default(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        if (placement === _enumsJs.top || (placement === _enumsJs.left || placement === _enumsJs.right) && variation === _enumsJs.end) {
            sideY = _enumsJs.bottom;
            var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === _enumsJs.left || (placement === _enumsJs.top || placement === _enumsJs.bottom) && variation === _enumsJs.end) {
            sideX = _enumsJs.right;
            var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty = _getComputedStyleJsDefault.default(state.elements.popper).transitionProperty || '';
    if (adaptive && [
        'transform',
        'top',
        'right',
        'bottom',
        'left'
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        'Popper: Detected CSS transitions on at least one of the following',
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        '\n\n',
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        'for smooth transitions, or remove these properties from the CSS',
        'transition declaration on the popper element if only transitioning',
        'opacity or background-color for example.',
        '\n\n',
        'We recommend using the popper element as a wrapper around an inner',
        'element that can have any CSS property transitioned for animations.'
    ].join(' '));
    var commonStyles = {
        placement: _getBasePlacementJsDefault.default(state.placement),
        variation: _getVariationJsDefault.default(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"lCAq5","../dom-utils/getOffsetParent.js":"laoYw","../dom-utils/getWindow.js":"2SkOo","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getComputedStyle.js":"3mZjB","../utils/getBasePlacement.js":"59Wp3","../utils/getVariation.js":"hIo7Y","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"hIo7Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getVariation(placement) {
    return placement.split('-')[1];
}
exports.default = getVariation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"hBKsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = _getWindowJsDefault.default(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
    });
    if (resize) window.addEventListener('resize', instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, passive);
        });
        if (resize) window.removeEventListener('resize', instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"fv5wq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if (_getBasePlacementJsDefault.default(placement) === _enumsJs.auto) return [];
    var oppositePlacement = _getOppositePlacementJsDefault.default(placement);
    return [
        _getOppositeVariationPlacementJsDefault.default(placement),
        oppositePlacement,
        _getOppositeVariationPlacementJsDefault.default(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = _getBasePlacementJsDefault.default(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        _getOppositePlacementJsDefault.default(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat(_getBasePlacementJsDefault.default(placement) === _enumsJs.auto ? _computeAutoPlacementJsDefault.default(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement1 = placements[i];
        var _basePlacement = _getBasePlacementJsDefault.default(placement1);
        var isStartVariation = _getVariationJsDefault.default(placement1) === _enumsJs.start;
        var isVertical = [
            _enumsJs.top,
            _enumsJs.bottom
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = _detectOverflowJsDefault.default(state, {
            placement: placement1,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? _enumsJs.right : _enumsJs.left : isStartVariation ? _enumsJs.bottom : _enumsJs.top;
        if (referenceRect[len] > popperRect[len]) mainVariationSide = _getOppositePlacementJsDefault.default(mainVariationSide);
        var altVariationSide = _getOppositePlacementJsDefault.default(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement1;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement1, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i1 = numberOfChecks; _i1 > 0; _i1--){
            var _ret = _loop(_i1);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"a8CY0","../utils/getBasePlacement.js":"59Wp3","../utils/getOppositeVariationPlacement.js":"bKTLC","../utils/detectOverflow.js":"ltCuw","../utils/computeAutoPlacement.js":"gytMj","../enums.js":"lCAq5","../utils/getVariation.js":"hIo7Y","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"a8CY0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositePlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"bKTLC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    start: 'end',
    end: 'start'
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositeVariationPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"ltCuw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? _enumsJs.clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? _enumsJs.viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? _enumsJs.popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = _mergePaddingObjectJsDefault.default(typeof padding !== 'number' ? padding : _expandToHashMapJsDefault.default(padding, _enumsJs.basePlacements));
    var altContext = elementContext === _enumsJs.popper ? _enumsJs.reference : _enumsJs.popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = _getClippingRectJsDefault.default(_instanceOfJs.isElement(element) ? element : element.contextElement || _getDocumentElementJsDefault.default(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = _getBoundingClientRectJsDefault.default(state.elements.reference);
    var popperOffsets = _computeOffsetsJsDefault.default({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = _rectToClientRectJsDefault.default(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === _enumsJs.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === _enumsJs.popper && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                _enumsJs.right,
                _enumsJs.bottom
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                _enumsJs.top,
                _enumsJs.bottom
            ].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
exports.default = detectOverflow;

},{"../dom-utils/getClippingRect.js":"eeg2s","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getBoundingClientRect.js":"9CFSQ","./computeOffsets.js":"7jtXk","./rectToClientRect.js":"cQ3tg","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","./mergePaddingObject.js":"lEIf9","./expandToHashMap.js":"iQlH5","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"eeg2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element) {
    var rect = _getBoundingClientRectJsDefault.default(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === _enumsJs.viewport ? _rectToClientRectJsDefault.default(_getViewportRectJsDefault.default(element)) : _instanceOfJs.isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : _rectToClientRectJsDefault.default(_getDocumentRectJsDefault.default(_getDocumentElementJsDefault.default(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = _listScrollParentsJsDefault.default(_getParentNodeJsDefault.default(element));
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf(_getComputedStyleJsDefault.default(element).position) >= 0;
    var clipperElement = canEscapeClipping && _instanceOfJs.isHTMLElement(element) ? _getOffsetParentJsDefault.default(element) : element;
    if (!_instanceOfJs.isElement(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return _instanceOfJs.isElement(clippingParent) && _containsJsDefault.default(clippingParent, clipperElement) && _getNodeNameJsDefault.default(clippingParent) !== 'body';
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = _mathJs.max(rect.top, accRect.top);
        accRect.right = _mathJs.min(rect.right, accRect.right);
        accRect.bottom = _mathJs.min(rect.bottom, accRect.bottom);
        accRect.left = _mathJs.max(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
exports.default = getClippingRect;

},{"../enums.js":"lCAq5","./getViewportRect.js":"cnH2G","./getDocumentRect.js":"d94SC","./listScrollParents.js":"2di3T","./getOffsetParent.js":"laoYw","./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./getBoundingClientRect.js":"9CFSQ","./getParentNode.js":"bIHpd","./contains.js":"4QxRR","./getNodeName.js":"a2Qom","../utils/rectToClientRect.js":"cQ3tg","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"cnH2G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
function getViewportRect(element) {
    var win = _getWindowJsDefault.default(element);
    var html = _getDocumentElementJsDefault.default(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
        // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
        // errors due to floating point numbers, so we need to check precision.
        // Safari returns a number <= 0, usually < -1 when pinch-zoomed
        // Feature detection fails in mobile emulation mode in Chrome.
        // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
        // 0.001
        // Fallback here: "Not Safari" userAgent
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + _getWindowScrollBarXJsDefault.default(element),
        y: y
    };
}
exports.default = getViewportRect;

},{"./getWindow.js":"2SkOo","./getDocumentElement.js":"eJ9Y1","./getWindowScrollBarX.js":"sz4Ld","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"sz4Ld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return _getBoundingClientRectJsDefault.default(_getDocumentElementJsDefault.default(element)).left + _getWindowScrollJsDefault.default(element).scrollLeft;
}
exports.default = getWindowScrollBarX;

},{"./getBoundingClientRect.js":"9CFSQ","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"1XUtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = _getWindowJsDefault.default(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
exports.default = getWindowScroll;

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"d94SC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = _getDocumentElementJsDefault.default(element);
    var winScroll = _getWindowScrollJsDefault.default(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = _mathJs.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = _mathJs.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + _getWindowScrollBarXJsDefault.default(element);
    var y = -winScroll.scrollTop;
    if (_getComputedStyleJsDefault.default(body || html).direction === 'rtl') x += _mathJs.max(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
exports.default = getDocumentRect;

},{"./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./getWindowScrollBarX.js":"sz4Ld","./getWindowScroll.js":"1XUtN","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"2di3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = _getScrollParentJsDefault.default(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = _getWindowJsDefault.default(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], _isScrollParentJsDefault.default(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(_getParentNodeJsDefault.default(target)));
}
exports.default = listScrollParents;

},{"./getScrollParent.js":"jy4ZS","./getParentNode.js":"bIHpd","./getWindow.js":"2SkOo","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"jy4ZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        'html',
        'body',
        '#document'
    ].indexOf(_getNodeNameJsDefault.default(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if (_instanceOfJs.isHTMLElement(node) && _isScrollParentJsDefault.default(node)) return node;
    return getScrollParent(_getParentNodeJsDefault.default(node));
}
exports.default = getScrollParent;

},{"./getParentNode.js":"bIHpd","./isScrollParent.js":"9rLGO","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"9rLGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = _getComputedStyleJsDefault.default(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
exports.default = isScrollParent;

},{"./getComputedStyle.js":"3mZjB","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"cQ3tg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
exports.default = rectToClientRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"7jtXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? _getBasePlacementJsDefault.default(placement) : null;
    var variation = placement ? _getVariationJsDefault.default(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? _getMainAxisFromPlacementJsDefault.default(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
exports.default = computeOffsets;

},{"./getBasePlacement.js":"59Wp3","./getVariation.js":"hIo7Y","./getMainAxisFromPlacement.js":"1Xlom","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"gytMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement1 = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enumsJs.placements : _options$allowedAutoP;
    var variation = _getVariationJsDefault.default(placement1);
    var placements = variation ? flipVariations ? _enumsJs.variationPlacements : _enumsJs.variationPlacements.filter(function(placement) {
        return _getVariationJsDefault.default(placement) === variation;
    }) : _enumsJs.basePlacements;
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
        console.error([
            'Popper: The `allowedAutoPlacements` option did not allow any',
            'placements. Ensure the `placement` option matches the variation',
            'of the allowed placements.',
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(' '));
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = _detectOverflowJsDefault.default(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[_getBasePlacementJsDefault.default(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
exports.default = computeAutoPlacement;

},{"./getVariation.js":"hIo7Y","../enums.js":"lCAq5","./detectOverflow.js":"ltCuw","./getBasePlacement.js":"59Wp3","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"2g4OF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        _enumsJs.top,
        _enumsJs.right,
        _enumsJs.bottom,
        _enumsJs.left
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = _detectOverflowJsDefault.default(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = _detectOverflowJsDefault.default(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: hide
};

},{"../enums.js":"lCAq5","../utils/detectOverflow.js":"ltCuw","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"3GKVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY
);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset1) {
    var basePlacement = _getBasePlacementJsDefault.default(placement);
    var invertDistance = [
        _enumsJs.left,
        _enumsJs.top
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset1 === 'function' ? offset1(Object.assign({}, rects, {
        placement: placement
    })) : offset1, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        _enumsJs.left,
        _enumsJs.right
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = _enumsJs.placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"59Wp3","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"6I679":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = _computeOffsetsJsDefault.default({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"7jtXk","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"1AMhb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = _detectOverflowJsDefault.default(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = _getBasePlacementJsDefault.default(state.placement);
    var variation = _getVariationJsDefault.default(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = _getMainAxisFromPlacementJsDefault.default(basePlacement);
    var altAxis = _getAltAxisJsDefault.default(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === 'y' ? _enumsJs.top : _enumsJs.left;
        var altSide = mainAxis === 'y' ? _enumsJs.bottom : _enumsJs.right;
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === _enumsJs.start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === _enumsJs.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? _getLayoutRectJsDefault.default(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : _getFreshSideObjectJsDefault.default();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = _withinJs.within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && _getOffsetParentJsDefault.default(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = _withinJs.within(tether ? _mathJs.min(min, tetherMin) : min, offset, tether ? _mathJs.max(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === 'x' ? _enumsJs.top : _enumsJs.left;
        var _altSide = mainAxis === 'x' ? _enumsJs.bottom : _enumsJs.right;
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === 'y' ? 'height' : 'width';
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            _enumsJs.top,
            _enumsJs.left
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? _withinJs.withinMaxClamp(_tetherMin, _offset, _tetherMax) : _withinJs.within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};

},{"../enums.js":"lCAq5","../utils/getBasePlacement.js":"59Wp3","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/getAltAxis.js":"59FWE","../utils/within.js":"3glSz","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/getOffsetParent.js":"laoYw","../utils/detectOverflow.js":"ltCuw","../utils/getVariation.js":"hIo7Y","../utils/getFreshSideObject.js":"g4xOt","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"59FWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
exports.default = getAltAxis;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"cHuNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator
);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
);
parcelHelpers.export(exports, "detectOverflow", ()=>_detectOverflowJsDefault.default
);
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getComputedStyleJs = require("./dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _validateModifiersJs = require("./utils/validateModifiers.js");
var _validateModifiersJsDefault = parcelHelpers.interopDefault(_validateModifiersJs);
var _uniqueByJs = require("./utils/uniqueBy.js");
var _uniqueByJsDefault = parcelHelpers.interopDefault(_uniqueByJs);
var _getBasePlacementJs = require("./utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var _enumsJs = require("./enums.js");
var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference1, popper1, options1) {
        if (options1 === void 0) options1 = defaultOptions;
        var state1 = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference1,
                popper: popper1
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state1,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state1.options) : setOptionsAction;
                cleanupModifierEffects();
                state1.options = Object.assign({}, defaultOptions, state1.options, options);
                state1.scrollParents = {
                    reference: _instanceOfJs.isElement(reference1) ? _listScrollParentsJsDefault.default(reference1) : reference1.contextElement ? _listScrollParentsJsDefault.default(reference1.contextElement) : [],
                    popper: _listScrollParentsJsDefault.default(popper1)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = _orderModifiersJsDefault.default(_mergeByNameJsDefault.default([].concat(defaultModifiers, state1.options.modifiers))); // Strip out disabled modifiers
                state1.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = _uniqueByJsDefault.default([].concat(orderedModifiers, state1.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                _validateModifiersJsDefault.default(modifiers);
                if (_getBasePlacementJsDefault.default(state1.options.placement) === _enumsJs.auto) {
                    var flipModifier = state1.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === 'flip';
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        'present and enabled to work.'
                    ].join(' '));
                }
                var _getComputedStyle = _getComputedStyleJsDefault.default(popper1), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if ([
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft
                ].some(function(margin) {
                    return parseFloat(margin);
                })) console.warn([
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    'between the popper and its reference element or boundary.',
                    'To replicate margin, use the `offset` modifier, as well as',
                    'the `padding` option in the `preventOverflow` and `flip`',
                    'modifiers.'
                ].join(' '));
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state1.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state1.rects = {
                    reference: _getCompositeRectJsDefault.default(reference, _getOffsetParentJsDefault.default(popper), state1.options.strategy === 'fixed'),
                    popper: _getLayoutRectJsDefault.default(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state1.reset = false;
                state1.placement = state1.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state1.orderedModifiers.forEach(function(modifier) {
                    return state1.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state1.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state1.reset === true) {
                        state1.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state1.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') state1 = fn({
                        state: state1,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state1;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: _debounceJsDefault.default(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state1);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference1, popper1)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options1).then(function(state) {
            if (!isDestroyed && options1.onFirstUpdate) options1.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state1.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state1,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"ijPls","./dom-utils/getLayoutRect.js":"jvjuf","./dom-utils/listScrollParents.js":"2di3T","./dom-utils/getOffsetParent.js":"laoYw","./dom-utils/getComputedStyle.js":"3mZjB","./utils/orderModifiers.js":"N0VO0","./utils/debounce.js":"g6Chr","./utils/validateModifiers.js":"1S5dQ","./utils/uniqueBy.js":"hhl2M","./utils/getBasePlacement.js":"59Wp3","./utils/mergeByName.js":"2zTVN","./utils/detectOverflow.js":"ltCuw","./dom-utils/instanceOf.js":"gYFUC","./enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"ijPls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = _mathJs.round(rect.width) / element.offsetWidth || 1;
    var scaleY = _mathJs.round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = _instanceOfJs.isHTMLElement(offsetParent);
    var offsetParentIsScaled = _instanceOfJs.isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = _getDocumentElementJsDefault.default(offsetParent);
    var rect = _getBoundingClientRectJsDefault.default(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (_getNodeNameJsDefault.default(offsetParent) !== 'body' || _isScrollParentJsDefault.default(documentElement)) scroll = _getNodeScrollJsDefault.default(offsetParent);
        if (_instanceOfJs.isHTMLElement(offsetParent)) {
            offsets = _getBoundingClientRectJsDefault.default(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = _getWindowScrollBarXJsDefault.default(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
exports.default = getCompositeRect;

},{"./getBoundingClientRect.js":"9CFSQ","./getNodeScroll.js":"bBjCr","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","./getWindowScrollBarX.js":"sz4Ld","./getDocumentElement.js":"eJ9Y1","./isScrollParent.js":"9rLGO","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"bBjCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === _getWindowJsDefault.default(node) || !_instanceOfJs.isHTMLElement(node)) return _getWindowScrollJsDefault.default(node);
    else return _getHTMLElementScrollJsDefault.default(node);
}
exports.default = getNodeScroll;

},{"./getWindowScroll.js":"1XUtN","./getWindow.js":"2SkOo","./instanceOf.js":"gYFUC","./getHTMLElementScroll.js":"6pwY2","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"6pwY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
exports.default = getHTMLElementScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"N0VO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return _enumsJs.modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
exports.default = orderModifiers;

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"g6Chr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}
exports.default = debounce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"1S5dQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatJs = require("./format.js");
var _formatJsDefault = parcelHelpers.interopDefault(_formatJs);
var _enumsJs = require("../enums.js");
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    'name',
    'enabled',
    'phase',
    'fn',
    'effect',
    'requires',
    'options'
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
        .filter(function(value, index, self) {
            return self.indexOf(value) === index;
        }).forEach(function(key) {
            switch(key){
                case 'name':
                    if (typeof modifier.name !== 'string') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
                    break;
                case 'enabled':
                    if (typeof modifier.enabled !== 'boolean') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
                    break;
                case 'phase':
                    if (_enumsJs.modifierPhases.indexOf(modifier.phase) < 0) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enumsJs.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
                    break;
                case 'fn':
                    if (typeof modifier.fn !== 'function') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'effect':
                    if (modifier.effect != null && typeof modifier.effect !== 'function') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'requires':
                    if (modifier.requires != null && !Array.isArray(modifier.requires)) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
                    break;
                case 'requiresIfExists':
                    if (!Array.isArray(modifier.requiresIfExists)) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
                    break;
                case 'options':
                case 'data':
                    break;
                default:
                    console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function(s) {
                        return "\"" + s + "\"";
                    }).join(', ') + "; but \"" + key + "\" was provided.");
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error(_formatJsDefault.default(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}
exports.default = validateModifiers;

},{"./format.js":"baNIW","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"baNIW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}
exports.default = format;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"hhl2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function(item) {
        var identifier = fn(item);
        if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
        }
    });
}
exports.default = uniqueBy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"2zTVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mergeByName(modifiers) {
    var merged1 = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged1).map(function(key) {
        return merged1[key];
    });
}
exports.default = mergeByName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"1PuRF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>_createPopperJs.popperGenerator
);
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers
);
parcelHelpers.export(exports, "detectOverflow", ()=>_createPopperJs.detectOverflow
);
parcelHelpers.export(exports, "createPopperLite", ()=>_popperLiteJs.createPopper
) // eslint-disable-next-line import/no-unused-modules
;
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    _eventListenersJsDefault.default,
    _popperOffsetsJsDefault.default,
    _computeStylesJsDefault.default,
    _applyStylesJsDefault.default,
    _offsetJsDefault.default,
    _flipJsDefault.default,
    _preventOverflowJsDefault.default,
    _arrowJsDefault.default,
    _hideJsDefault.default
];
var createPopper = /*#__PURE__*/ _createPopperJs.popperGenerator({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","./modifiers/offset.js":"3GKVY","./modifiers/flip.js":"fv5wq","./modifiers/preventOverflow.js":"1AMhb","./modifiers/arrow.js":"31HFW","./modifiers/hide.js":"2g4OF","./popper-lite.js":"gKW1N","./modifiers/index.js":"cap3W","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}],"gKW1N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
);
parcelHelpers.export(exports, "popperGenerator", ()=>_createPopperJs.popperGenerator
);
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers
);
parcelHelpers.export(exports, "detectOverflow", ()=>_createPopperJs.detectOverflow
);
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [
    _eventListenersJsDefault.default,
    _popperOffsetsJsDefault.default,
    _computeStylesJsDefault.default,
    _applyStylesJsDefault.default
];
var createPopper = /*#__PURE__*/ _createPopperJs.popperGenerator({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","@parcel/transformer-js/src/esmodule-helpers.js":"6ZVoT"}]},["3dFNe","8FH8c"], "8FH8c", "parcelRequiref212")

//# sourceMappingURL=index.92e36298.js.map
