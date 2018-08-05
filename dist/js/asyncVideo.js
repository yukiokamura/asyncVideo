/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@vimeo/player/dist/player.es.js":
/*!******************************************************!*\
  !*** ./node_modules/@vimeo/player/dist/player.es.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*! @vimeo/player v2.6.3 | (c) 2018 Vimeo | MIT License | https://github.com/vimeo/player.js */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * @module lib/functions
 */

/**
 * Check to see this is a node environment.
 * @type {Boolean}
 */

/* global global */
var isNode = typeof global !== 'undefined' && {}.toString.call(global) === '[object global]';
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */

function getMethodName(prop, type) {
  if (prop.indexOf(type.toLowerCase()) === 0) {
    return prop;
  }

  return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */

function isDomElement(element) {
  return element instanceof window.HTMLElement;
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */

function isInteger(value) {
  // eslint-disable-next-line eqeqeq
  return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */

function isVimeoUrl(url) {
  return /^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */

function getVimeoUrl() {
  var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var id = oEmbedParameters.id;
  var url = oEmbedParameters.url;
  var idOrUrl = id || url;

  if (!idOrUrl) {
    throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
  }

  if (isInteger(idOrUrl)) {
    return "https://vimeo.com/".concat(idOrUrl);
  }

  if (isVimeoUrl(idOrUrl)) {
    return idOrUrl.replace('http:', 'https:');
  }

  if (id) {
    throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
  }

  throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}

var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
var postMessageSupport = typeof window !== 'undefined' && typeof window.postMessage !== 'undefined';

if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {
  throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
(function (self) {

  if (self.WeakMap) {
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var defineProperty = function (object, name, value) {
    if (Object.defineProperty) {
      Object.defineProperty(object, name, {
        configurable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  self.WeakMap = function () {
    // ECMA-262 23.3 WeakMap Objects
    function WeakMap() {
      if (this === void 0) {
        throw new TypeError("Constructor WeakMap requires 'new'");
      }

      defineProperty(this, '_id', genId('_WeakMap')); // ECMA-262 23.3.1.1 WeakMap([iterable])

      if (arguments.length > 0) {
        // Currently, WeakMap `iterable` argument is not supported
        throw new TypeError('WeakMap iterable is not supported');
      }
    } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)


    defineProperty(WeakMap.prototype, 'delete', function (key) {
      checkInstance(this, 'delete');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        delete key[this._id];
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)

    defineProperty(WeakMap.prototype, 'get', function (key) {
      checkInstance(this, 'get');

      if (!isObject(key)) {
        return void 0;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return entry[1];
      }

      return void 0;
    }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)

    defineProperty(WeakMap.prototype, 'has', function (key) {
      checkInstance(this, 'has');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)

    defineProperty(WeakMap.prototype, 'set', function (key, value) {
      checkInstance(this, 'set');

      if (!isObject(key)) {
        throw new TypeError('Invalid value used as weak map key');
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        entry[1] = value;
        return this;
      }

      defineProperty(key, this._id, [key, value]);
      return this;
    });

    function checkInstance(x, methodName) {
      if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
        throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
      }
    }

    function genId(prefix) {
      return prefix + '_' + rand() + '.' + rand();
    }

    function rand() {
      return Math.random().toString().substring(2);
    }

    defineProperty(WeakMap, '_polyfill', true);
    return WeakMap;
  }();

  function isObject(x) {
    return Object(x) === x;
  }
})(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);

var npo_src = createCommonjsModule(function (module) {
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
(function UMD(name, context, definition) {
  // special form of UMD for polyfilling across evironments
  context[name] = context[name] || definition();

  if (module.exports) {
    module.exports = context[name];
  } else if (false) {}
})("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {

  var builtInProp,
      cycle,
      scheduling_queue,
      ToString = Object.prototype.toString,
      timer = typeof setImmediate != "undefined" ? function timer(fn) {
    return setImmediate(fn);
  } : setTimeout; // dammit, IE8.

  try {
    Object.defineProperty({}, "x", {});

    builtInProp = function builtInProp(obj, name, val, config) {
      return Object.defineProperty(obj, name, {
        value: val,
        writable: true,
        configurable: config !== false
      });
    };
  } catch (err) {
    builtInProp = function builtInProp(obj, name, val) {
      obj[name] = val;
      return obj;
    };
  } // Note: using a queue instead of array for efficiency


  scheduling_queue = function Queue() {
    var first, last, item;

    function Item(fn, self) {
      this.fn = fn;
      this.self = self;
      this.next = void 0;
    }

    return {
      add: function add(fn, self) {
        item = new Item(fn, self);

        if (last) {
          last.next = item;
        } else {
          first = item;
        }

        last = item;
        item = void 0;
      },
      drain: function drain() {
        var f = first;
        first = last = cycle = void 0;

        while (f) {
          f.fn.call(f.self);
          f = f.next;
        }
      }
    };
  }();

  function schedule(fn, self) {
    scheduling_queue.add(fn, self);

    if (!cycle) {
      cycle = timer(scheduling_queue.drain);
    }
  } // promise duck typing


  function isThenable(o) {
    var _then,
        o_type = typeof o;

    if (o != null && (o_type == "object" || o_type == "function")) {
      _then = o.then;
    }

    return typeof _then == "function" ? _then : false;
  }

  function notify() {
    for (var i = 0; i < this.chain.length; i++) {
      notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
    }

    this.chain.length = 0;
  } // NOTE: This is a separate function to isolate
  // the `try..catch` so that other code can be
  // optimized better


  function notifyIsolated(self, cb, chain) {
    var ret, _then;

    try {
      if (cb === false) {
        chain.reject(self.msg);
      } else {
        if (cb === true) {
          ret = self.msg;
        } else {
          ret = cb.call(void 0, self.msg);
        }

        if (ret === chain.promise) {
          chain.reject(TypeError("Promise-chain cycle"));
        } else if (_then = isThenable(ret)) {
          _then.call(ret, chain.resolve, chain.reject);
        } else {
          chain.resolve(ret);
        }
      }
    } catch (err) {
      chain.reject(err);
    }
  }

  function resolve(msg) {
    var _then,
        self = this; // already triggered?


    if (self.triggered) {
      return;
    }

    self.triggered = true; // unwrap

    if (self.def) {
      self = self.def;
    }

    try {
      if (_then = isThenable(msg)) {
        schedule(function () {
          var def_wrapper = new MakeDefWrapper(self);

          try {
            _then.call(msg, function $resolve$() {
              resolve.apply(def_wrapper, arguments);
            }, function $reject$() {
              reject.apply(def_wrapper, arguments);
            });
          } catch (err) {
            reject.call(def_wrapper, err);
          }
        });
      } else {
        self.msg = msg;
        self.state = 1;

        if (self.chain.length > 0) {
          schedule(notify, self);
        }
      }
    } catch (err) {
      reject.call(new MakeDefWrapper(self), err);
    }
  }

  function reject(msg) {
    var self = this; // already triggered?

    if (self.triggered) {
      return;
    }

    self.triggered = true; // unwrap

    if (self.def) {
      self = self.def;
    }

    self.msg = msg;
    self.state = 2;

    if (self.chain.length > 0) {
      schedule(notify, self);
    }
  }

  function iteratePromises(Constructor, arr, resolver, rejecter) {
    for (var idx = 0; idx < arr.length; idx++) {
      (function IIFE(idx) {
        Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
          resolver(idx, msg);
        }, rejecter);
      })(idx);
    }
  }

  function MakeDefWrapper(self) {
    this.def = self;
    this.triggered = false;
  }

  function MakeDef(self) {
    this.promise = self;
    this.state = 0;
    this.triggered = false;
    this.chain = [];
    this.msg = void 0;
  }

  function Promise(executor) {
    if (typeof executor != "function") {
      throw TypeError("Not a function");
    }

    if (this.__NPO__ !== 0) {
      throw TypeError("Not a promise");
    } // instance shadowing the inherited "brand"
    // to signal an already "initialized" promise


    this.__NPO__ = 1;
    var def = new MakeDef(this);

    this["then"] = function then(success, failure) {
      var o = {
        success: typeof success == "function" ? success : true,
        failure: typeof failure == "function" ? failure : false
      }; // Note: `then(..)` itself can be borrowed to be used against
      // a different promise constructor for making the chained promise,
      // by substituting a different `this` binding.

      o.promise = new this.constructor(function extractChain(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        o.resolve = resolve;
        o.reject = reject;
      });
      def.chain.push(o);

      if (def.state !== 0) {
        schedule(notify, def);
      }

      return o.promise;
    };

    this["catch"] = function $catch$(failure) {
      return this.then(void 0, failure);
    };

    try {
      executor.call(void 0, function publicResolve(msg) {
        resolve.call(def, msg);
      }, function publicReject(msg) {
        reject.call(def, msg);
      });
    } catch (err) {
      reject.call(def, err);
    }
  }

  var PromisePrototype = builtInProp({}, "constructor", Promise,
  /*configurable=*/
  false); // Note: Android 4 cannot use `Object.defineProperty(..)` here

  Promise.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise

  builtInProp(PromisePrototype, "__NPO__", 0,
  /*configurable=*/
  false);
  builtInProp(Promise, "resolve", function Promise$resolve(msg) {
    var Constructor = this; // spec mandated checks
    // note: best "isPromise" check that's practical for now

    if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
      return msg;
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      resolve(msg);
    });
  });
  builtInProp(Promise, "reject", function Promise$reject(msg) {
    return new this(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      reject(msg);
    });
  });
  builtInProp(Promise, "all", function Promise$all(arr) {
    var Constructor = this; // spec mandated checks

    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }

    if (arr.length === 0) {
      return Constructor.resolve([]);
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      var len = arr.length,
          msgs = Array(len),
          count = 0;
      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        msgs[idx] = msg;

        if (++count === len) {
          resolve(msgs);
        }
      }, reject);
    });
  });
  builtInProp(Promise, "race", function Promise$race(arr) {
    var Constructor = this; // spec mandated checks

    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        resolve(msg);
      }, reject);
    });
  });
  return Promise;
});
});

/**
 * @module lib/callbacks
 */
var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */

function storeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!(name in playerCallbacks)) {
    playerCallbacks[name] = [];
  }

  playerCallbacks[name].push(callback);
  callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */

function getCallbacks(player, name) {
  var playerCallbacks = callbackMap.get(player.element) || {};
  return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */

function removeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!playerCallbacks[name]) {
    return true;
  } // If no callback is passed, remove all callbacks for the event


  if (!callback) {
    playerCallbacks[name] = [];
    callbackMap.set(player.element, playerCallbacks);
    return true;
  }

  var index = playerCallbacks[name].indexOf(callback);

  if (index !== -1) {
    playerCallbacks[name].splice(index, 1);
  }

  callbackMap.set(player.element, playerCallbacks);
  return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */

function shiftCallbacks(player, name) {
  var playerCallbacks = getCallbacks(player, name);

  if (playerCallbacks.length < 1) {
    return false;
  }

  var callback = playerCallbacks.shift();
  removeCallback(player, name, callback);
  return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */

function swapCallbacks(oldElement, newElement) {
  var playerCallbacks = callbackMap.get(oldElement);
  callbackMap.set(newElement, playerCallbacks);
  callbackMap.delete(oldElement);
}

/**
 * @module lib/embed
 */
var oEmbedParameters = ['autopause', 'autoplay', 'background', 'byline', 'color', 'height', 'id', 'loop', 'maxheight', 'maxwidth', 'muted', 'playsinline', 'portrait', 'responsive', 'speed', 'title', 'transparent', 'url', 'width'];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */

function getOEmbedParameters(element) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return oEmbedParameters.reduce(function (params, param) {
    var value = element.getAttribute("data-vimeo-".concat(param));

    if (value || value === '') {
      params[param] = value === '' ? 1 : value;
    }

    return params;
  }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */

function createEmbed(_ref, element) {
  var html = _ref.html;

  if (!element) {
    throw new TypeError('An element must be provided');
  }

  if (element.getAttribute('data-vimeo-initialized') !== null) {
    return element.querySelector('iframe');
  }

  var div = document.createElement('div');
  div.innerHTML = html;
  element.appendChild(div.firstChild);
  element.setAttribute('data-vimeo-initialized', 'true');
  return element.querySelector('iframe');
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */

function getOEmbedData(videoUrl) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(function (resolve, reject) {
    if (!isVimeoUrl(videoUrl)) {
      throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
    }

    var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl), "&domain=").concat(window.location.hostname);

    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
      }
    }

    var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status === 404) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
        return;
      }

      if (xhr.status === 403) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
        return;
      }

      try {
        var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed

        if (json.domain_status_code === 403) {
          // We still want to create the embed to give users visual feedback
          createEmbed(json, element);
          reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
          return;
        }

        resolve(json);
      } catch (error) {
        reject(error);
      }
    };

    xhr.onerror = function () {
      var status = xhr.status ? " (".concat(xhr.status, ")") : '';
      reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
    };

    xhr.send();
  });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function initializeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));

  var handleError = function handleError(error) {
    if ('console' in window && console.error) {
      console.error("There was an error creating an embed: ".concat(error));
    }
  };

  elements.forEach(function (element) {
    try {
      // Skip any that have data-vimeo-defer
      if (element.getAttribute('data-vimeo-defer') !== null) {
        return;
      }

      var params = getOEmbedParameters(element);
      var url = getVimeoUrl(params);
      getOEmbedData(url, params, element).then(function (data) {
        return createEmbed(data, element);
      }).catch(handleError);
    } catch (error) {
      handleError(error);
    }
  });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function resizeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    } // 'spacechange' is fired only on embeds with cards


    if (!event.data || event.data.event !== 'spacechange') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow !== event.source) {
        continue;
      } // Change padding-bottom of the enclosing div to accommodate
      // card carousel without distorting aspect ratio


      var space = iframes[i].parentElement;
      space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
      break;
    }
  };

  if (window.addEventListener) {
    window.addEventListener('message', onMessage, false);
  } else if (window.attachEvent) {
    window.attachEvent('onmessage', onMessage);
  }
}

/**
 * @module lib/postmessage
 */
/**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */

function parseMessageData(data) {
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */

function postMessage(player, method, params) {
  if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
    return;
  }

  var message = {
    method: method
  };

  if (params !== undefined) {
    message.value = params;
  } // IE 8 and 9 do not support passing messages, so stringify them


  var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));

  if (ieVersion >= 8 && ieVersion < 10) {
    message = JSON.stringify(message);
  }

  player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */

function processData(player, data) {
  data = parseMessageData(data);
  var callbacks = [];
  var param;

  if (data.event) {
    if (data.event === 'error') {
      var promises = getCallbacks(player, data.data.method);
      promises.forEach(function (promise) {
        var error = new Error(data.data.message);
        error.name = data.data.name;
        promise.reject(error);
        removeCallback(player, data.data.method, promise);
      });
    }

    callbacks = getCallbacks(player, "event:".concat(data.event));
    param = data.data;
  } else if (data.method) {
    var callback = shiftCallbacks(player, data.method);

    if (callback) {
      callbacks.push(callback);
      param = data.value;
    }
  }

  callbacks.forEach(function (callback) {
    try {
      if (typeof callback === 'function') {
        callback.call(player, param);
        return;
      }

      callback.resolve(param);
    } catch (e) {// empty
    }
  });
}

var playerMap = new WeakMap();
var readyMap = new WeakMap();

var Player =
/*#__PURE__*/
function () {
  /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */
  function Player(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Player);

    /* global jQuery */
    if (window.jQuery && element instanceof jQuery) {
      if (element.length > 1 && window.console && console.warn) {
        console.warn('A jQuery object with multiple elements was passed, using the first element.');
      }

      element = element[0];
    } // Find an element by ID


    if (typeof document !== 'undefined' && typeof element === 'string') {
      element = document.getElementById(element);
    } // Not an element!


    if (!isDomElement(element)) {
      throw new TypeError('You must pass either a valid element or a valid id.');
    } // Already initialized an embed in this div, so grab the iframe


    if (element.nodeName !== 'IFRAME') {
      var iframe = element.querySelector('iframe');

      if (iframe) {
        element = iframe;
      }
    } // iframe url is not a Vimeo url


    if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
      throw new Error('The player element passed isn’t a Vimeo embed.');
    } // If there is already a player object in the map, return that


    if (playerMap.has(element)) {
      return playerMap.get(element);
    }

    this.element = element;
    this.origin = '*';
    var readyPromise = new npo_src(function (resolve, reject) {
      var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
          return;
        }

        if (_this.origin === '*') {
          _this.origin = event.origin;
        }

        var data = parseMessageData(event.data);
        var isReadyEvent = 'event' in data && data.event === 'ready';
        var isPingResponse = 'method' in data && data.method === 'ping';

        if (isReadyEvent || isPingResponse) {
          _this.element.setAttribute('data-ready', 'true');

          resolve();
          return;
        }

        processData(_this, data);
      };

      if (window.addEventListener) {
        window.addEventListener('message', onMessage, false);
      } else if (window.attachEvent) {
        window.attachEvent('onmessage', onMessage);
      }

      if (_this.element.nodeName !== 'IFRAME') {
        var params = getOEmbedParameters(element, options);
        var url = getVimeoUrl(params);
        getOEmbedData(url, params, element).then(function (data) {
          var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
          // but store reference to the original element

          _this.element = iframe;
          _this._originalElement = element;
          swapCallbacks(element, iframe);
          playerMap.set(_this.element, _this);
          return data;
        }).catch(function (error) {
          return reject(error);
        });
      }
    }); // Store a copy of this Player in the map

    readyMap.set(this, readyPromise);
    playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
    // the player is already ready.

    if (this.element.nodeName === 'IFRAME') {
      postMessage(this, 'ping');
    }

    return this;
  }
  /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */


  _createClass(Player, [{
    key: "callMethod",
    value: function callMethod(name) {
      var _this2 = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new npo_src(function (resolve, reject) {
        // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return
        return _this2.ready().then(function () {
          storeCallback(_this2, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this2, name, args);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
    /**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'get'); // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return

        return _this3.ready().then(function () {
          storeCallback(_this3, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this3, name);
        });
      });
    }
    /**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */

  }, {
    key: "set",
    value: function set(name, value) {
      var _this4 = this;

      return npo_src.resolve(value).then(function (val) {
        name = getMethodName(name, 'set');

        if (val === undefined || val === null) {
          throw new TypeError('There must be a value to set.');
        }

        return _this4.ready().then(function () {
          return new npo_src(function (resolve, reject) {
            storeCallback(_this4, name, {
              resolve: resolve,
              reject: reject
            });
            postMessage(_this4, name, val);
          });
        });
      });
    }
    /**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */

  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (!callback) {
        throw new TypeError('You must pass a callback function.');
      }

      if (typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var callbacks = getCallbacks(this, "event:".concat(eventName));

      if (callbacks.length === 0) {
        this.callMethod('addEventListener', eventName).catch(function () {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }

      storeCallback(this, "event:".concat(eventName), callback);
    }
    /**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn’t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */

  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (callback && typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener

      if (lastCallback) {
        this.callMethod('removeEventListener', eventName).catch(function (e) {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }
    }
    /**
     * A promise to load a new video.
     *
     * @promise LoadVideoPromise
     * @fulfill {number} The video with this id successfully loaded.
     * @reject {TypeError} The id was not a number.
     */

    /**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number} id The id of the video.
     * @return {LoadVideoPromise}
     */

  }, {
    key: "loadVideo",
    value: function loadVideo(id) {
      return this.callMethod('loadVideo', id);
    }
    /**
     * A promise to perform an action when the Player is ready.
     *
     * @todo document errors
     * @promise LoadVideoPromise
     * @fulfill {void}
     */

    /**
     * Trigger a function when the player iframe has initialized. You do not
     * need to wait for `ready` to trigger to begin adding event listeners
     * or calling other methods.
     *
     * @return {ReadyPromise}
     */

  }, {
    key: "ready",
    value: function ready() {
      var readyPromise = readyMap.get(this) || new npo_src(function (resolve, reject) {
        reject(new Error('Unknown player. Probably unloaded.'));
      });
      return npo_src.resolve(readyPromise);
    }
    /**
     * A promise to add a cue point to the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point to use for removeCuePoint.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */

  }, {
    key: "addCuePoint",
    value: function addCuePoint(time) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.callMethod('addCuePoint', {
        time: time,
        data: data
      });
    }
    /**
     * A promise to remove a cue point from the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point that was removed.
     * @reject {InvalidCuePoint} The cue point with the specified id was not
     *         found.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */

  }, {
    key: "removeCuePoint",
    value: function removeCuePoint(id) {
      return this.callMethod('removeCuePoint', id);
    }
    /**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human‐readable label for the track.
     */

    /**
     * A promise to enable a text track.
     *
     * @promise EnableTextTrackPromise
     * @fulfill {VimeoTextTrack} The text track that was enabled.
     * @reject {InvalidTrackLanguageError} No track was available with the
     *         specified language.
     * @reject {InvalidTrackError} No track was available with the specified
     *         language and kind.
     */

    /**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */

  }, {
    key: "enableTextTrack",
    value: function enableTextTrack(language, kind) {
      if (!language) {
        throw new TypeError('You must pass a language.');
      }

      return this.callMethod('enableTextTrack', {
        language: language,
        kind: kind
      });
    }
    /**
     * A promise to disable the active text track.
     *
     * @promise DisableTextTrackPromise
     * @fulfill {void} The track was disabled.
     */

    /**
     * Disable the currently-active text track.
     *
     * @return {DisableTextTrackPromise}
     */

  }, {
    key: "disableTextTrack",
    value: function disableTextTrack() {
      return this.callMethod('disableTextTrack');
    }
    /**
     * A promise to pause the video.
     *
     * @promise PausePromise
     * @fulfill {void} The video was paused.
     */

    /**
     * Pause the video if it’s playing.
     *
     * @return {PausePromise}
     */

  }, {
    key: "pause",
    value: function pause() {
      return this.callMethod('pause');
    }
    /**
     * A promise to play the video.
     *
     * @promise PlayPromise
     * @fulfill {void} The video was played.
     */

    /**
     * Play the video if it’s paused. **Note:** on iOS and some other
     * mobile devices, you cannot programmatically trigger play. Once the
     * viewer has tapped on the play button in the player, however, you
     * will be able to use this function.
     *
     * @return {PlayPromise}
     */

  }, {
    key: "play",
    value: function play() {
      return this.callMethod('play');
    }
    /**
     * A promise to unload the video.
     *
     * @promise UnloadPromise
     * @fulfill {void} The video was unloaded.
     */

    /**
     * Return the player to its initial state.
     *
     * @return {UnloadPromise}
     */

  }, {
    key: "unload",
    value: function unload() {
      return this.callMethod('unload');
    }
    /**
     * Cleanup the player and remove it from the DOM
     *
     * It won't be usable and a new one should be constructed
     *  in order to do any operations.
     *
     * @return {Promise}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      return new npo_src(function (resolve) {
        readyMap.delete(_this5);
        playerMap.delete(_this5.element);

        if (_this5._originalElement) {
          playerMap.delete(_this5._originalElement);

          _this5._originalElement.removeAttribute('data-vimeo-initialized');
        }

        if (_this5.element && _this5.element.nodeName === 'IFRAME') {
          _this5.element.remove();
        }

        resolve();
      });
    }
    /**
     * A promise to get the autopause behavior of the video.
     *
     * @promise GetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Get the autopause behavior for this player.
     *
     * @return {GetAutopausePromise}
     */

  }, {
    key: "getAutopause",
    value: function getAutopause() {
      return this.get('autopause');
    }
    /**
     * A promise to set the autopause behavior of the video.
     *
     * @promise SetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */

  }, {
    key: "setAutopause",
    value: function setAutopause(autopause) {
      return this.set('autopause', autopause);
    }
    /**
     * A promise to get the color of the player.
     *
     * @promise GetColorPromise
     * @fulfill {string} The hex color of the player.
     */

    /**
     * Get the color for this player.
     *
     * @return {GetColorPromise}
     */

  }, {
    key: "getColor",
    value: function getColor() {
      return this.get('color');
    }
    /**
     * A promise to set the color of the player.
     *
     * @promise SetColorPromise
     * @fulfill {string} The color was successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     */

    /**
     * Set the color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */

  }, {
    key: "setColor",
    value: function setColor(color) {
      return this.set('color', color);
    }
    /**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     */

    /**
     * A promise to get the cue points of a video.
     *
     * @promise GetCuePointsPromise
     * @fulfill {VimeoCuePoint[]} The cue points added to the video.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Get an array of the cue points added to the video.
     *
     * @return {GetCuePointsPromise}
     */

  }, {
    key: "getCuePoints",
    value: function getCuePoints() {
      return this.get('cuePoints');
    }
    /**
     * A promise to get the current time of the video.
     *
     * @promise GetCurrentTimePromise
     * @fulfill {number} The current time in seconds.
     */

    /**
     * Get the current playback position in seconds.
     *
     * @return {GetCurrentTimePromise}
     */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.get('currentTime');
    }
    /**
     * A promise to set the current time of the video.
     *
     * @promise SetCurrentTimePromise
     * @fulfill {number} The actual current time that was set.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     */

    /**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */

  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(currentTime) {
      return this.set('currentTime', currentTime);
    }
    /**
     * A promise to get the duration of the video.
     *
     * @promise GetDurationPromise
     * @fulfill {number} The duration in seconds.
     */

    /**
     * Get the duration of the video in seconds. It will be rounded to the
     * nearest second before playback begins, and to the nearest thousandth
     * of a second after playback begins.
     *
     * @return {GetDurationPromise}
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.get('duration');
    }
    /**
     * A promise to get the ended state of the video.
     *
     * @promise GetEndedPromise
     * @fulfill {boolean} Whether or not the video has ended.
     */

    /**
     * Get the ended state of the video. The video has ended if
     * `currentTime === duration`.
     *
     * @return {GetEndedPromise}
     */

  }, {
    key: "getEnded",
    value: function getEnded() {
      return this.get('ended');
    }
    /**
     * A promise to get the loop state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the player is set to loop.
     */

    /**
     * Get the loop state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getLoop",
    value: function getLoop() {
      return this.get('loop');
    }
    /**
     * A promise to set the loop state of the player.
     *
     * @promise SetLoopPromise
     * @fulfill {boolean} The loop state that was set.
     */

    /**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */

  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      return this.set('loop', loop);
    }
    /**
     * A promise to get the paused state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the video is paused.
     */

    /**
     * Get the paused state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getPaused",
    value: function getPaused() {
      return this.get('paused');
    }
    /**
     * A promise to get the playback rate of the player.
     *
     * @promise GetPlaybackRatePromise
     * @fulfill {number} The playback rate of the player on a scale from 0.5 to 2.
     */

    /**
     * Get the playback rate of the player on a scale from `0.5` to `2`.
     *
     * @return {GetPlaybackRatePromise}
     */

  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      return this.get('playbackRate');
    }
    /**
     * A promise to set the playbackrate of the player.
     *
     * @promise SetPlaybackRatePromise
     * @fulfill {number} The playback rate was set.
     * @reject {RangeError} The playback rate was less than 0.5 or greater than 2.
     */

    /**
     * Set the playback rate of the player on a scale from `0.5` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */

  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(playbackRate) {
      return this.set('playbackRate', playbackRate);
    }
    /**
     * A promise to get the text tracks of a video.
     *
     * @promise GetTextTracksPromise
     * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
     */

    /**
     * Get an array of the text tracks that exist for the video.
     *
     * @return {GetTextTracksPromise}
     */

  }, {
    key: "getTextTracks",
    value: function getTextTracks() {
      return this.get('textTracks');
    }
    /**
     * A promise to get the embed code for the video.
     *
     * @promise GetVideoEmbedCodePromise
     * @fulfill {string} The `<iframe>` embed code for the video.
     */

    /**
     * Get the `<iframe>` embed code for the video.
     *
     * @return {GetVideoEmbedCodePromise}
     */

  }, {
    key: "getVideoEmbedCode",
    value: function getVideoEmbedCode() {
      return this.get('videoEmbedCode');
    }
    /**
     * A promise to get the id of the video.
     *
     * @promise GetVideoIdPromise
     * @fulfill {number} The id of the video.
     */

    /**
     * Get the id of the video.
     *
     * @return {GetVideoIdPromise}
     */

  }, {
    key: "getVideoId",
    value: function getVideoId() {
      return this.get('videoId');
    }
    /**
     * A promise to get the title of the video.
     *
     * @promise GetVideoTitlePromise
     * @fulfill {number} The title of the video.
     */

    /**
     * Get the title of the video.
     *
     * @return {GetVideoTitlePromise}
     */

  }, {
    key: "getVideoTitle",
    value: function getVideoTitle() {
      return this.get('videoTitle');
    }
    /**
     * A promise to get the native width of the video.
     *
     * @promise GetVideoWidthPromise
     * @fulfill {number} The native width of the video.
     */

    /**
     * Get the native width of the currently‐playing video. The width of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoWidthPromise}
     */

  }, {
    key: "getVideoWidth",
    value: function getVideoWidth() {
      return this.get('videoWidth');
    }
    /**
     * A promise to get the native height of the video.
     *
     * @promise GetVideoHeightPromise
     * @fulfill {number} The native height of the video.
     */

    /**
     * Get the native height of the currently‐playing video. The height of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoHeightPromise}
     */

  }, {
    key: "getVideoHeight",
    value: function getVideoHeight() {
      return this.get('videoHeight');
    }
    /**
     * A promise to get the vimeo.com url for the video.
     *
     * @promise GetVideoUrlPromise
     * @fulfill {number} The vimeo.com url for the video.
     * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
     */

    /**
     * Get the vimeo.com url for the video.
     *
     * @return {GetVideoUrlPromise}
     */

  }, {
    key: "getVideoUrl",
    value: function getVideoUrl() {
      return this.get('videoUrl');
    }
    /**
     * A promise to get the volume level of the player.
     *
     * @promise GetVolumePromise
     * @fulfill {number} The volume level of the player on a scale from 0 to 1.
     */

    /**
     * Get the current volume level of the player on a scale from `0` to `1`.
     *
     * Most mobile devices do not support an independent volume from the
     * system volume. In those cases, this method will always return `1`.
     *
     * @return {GetVolumePromise}
     */

  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.get('volume');
    }
    /**
     * A promise to set the volume level of the player.
     *
     * @promise SetVolumePromise
     * @fulfill {number} The volume was set.
     * @reject {RangeError} The volume was less than 0 or greater than 1.
     */

    /**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer’s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */

  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      return this.set('volume', volume);
    }
  }]);

  return Player;
}(); // Setup embed only if this is not a node environment
// and if there is no existing Vimeo Player object


if (!isNode && window.Vimeo && !window.Vimeo.Player) {
  initializeEmbeds();
  resizeEmbeds();
}

/* harmony default export */ __webpack_exports__["default"] = (Player);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/main.es6":
/*!*************************!*\
  !*** ./src/js/main.es6 ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _videoAPI_YTController_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoAPI/YTController.es6 */ "./src/js/videoAPI/YTController.es6");
/* harmony import */ var _videoAPI_VMController_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoAPI/VMController.es6 */ "./src/js/videoAPI/VMController.es6");
/* harmony import */ var _model_Urlpurse_es6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Urlpurse.es6 */ "./src/js/model/Urlpurse.es6");
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var AsyncVideo = function () {
  function AsyncVideo() {
    var _this = this;

    var calssName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'video-async';

    _classCallCheck(this, AsyncVideo);

    this.isYoutube = false;
    this.target = document.getElementsByClassName("video-async");
    this.videoData = [];
    var urlPurse = new _model_Urlpurse_es6__WEBPACK_IMPORTED_MODULE_2__["default"]();

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.target[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        var _urlPurse$getIDs = urlPurse.getIDs(this.get_dataURL(item, 'videoUrl')),
            _urlPurse$getIDs2 = _slicedToArray(_urlPurse$getIDs, 2),
            ids = _urlPurse$getIDs2[0],
            videoType = _urlPurse$getIDs2[1];

        console.log(ids, videoType);
        var allowAutoPlay = this.get_dataURL(item, 'videoAllowAutoplay') || 0;
        if (!this.isYoutube && videoType == 'youtube') {
          this.isYoutube = true;
        }
        console.log(allowAutoPlay);
        var r = this.get_randomID();
        var videoData = {
          videoType: videoType,
          id: ids,
          divID: r,
          isAutoPlay: allowAutoPlay,
          width: item.clientWidth,
          height: item.clientHeight
        };
        this.setInner(item, r);
        this.videoData.push(videoData);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    console.log(this.isYoutube);
    if (this.isYoutube) {
      this.embedYTTag();
    }

    //window load event
    window.onload = function () {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _this.videoData[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _item = _step2.value;

          if (_item.videoType == 'youtube') {
            var ytController = new _videoAPI_YTController_es6__WEBPACK_IMPORTED_MODULE_0__["default"](_item);
          } else if (_item.videoType == 'vimeo') {
            var vmController = new _videoAPI_VMController_es6__WEBPACK_IMPORTED_MODULE_1__["default"](_item);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    };
  }

  _createClass(AsyncVideo, [{
    key: 'get_dataURL',
    value: function get_dataURL() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'videoUrl';

      if (!element) return false;
      return element.dataset[key];
    }
  }, {
    key: 'setInner',
    value: function setInner() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var divID = arguments[1];

      if (!element) return false;

      element.insertAdjacentHTML('afterbegin', '<div class="video-async--inner" id="' + divID + '"></div>');
    }
  }, {
    key: 'get_randomID',
    value: function get_randomID() {
      var l = 8;
      var c = 'abcdefghijklmnopqrstuvwxyz';
      var cl = c.length;
      var r = '';
      for (var i = 0; i < l; i++) {
        r += c[Math.floor(Math.random() * cl)];
      }
      return r;
    }
  }, {
    key: 'embedYTTag',
    value: function embedYTTag() {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }]);

  return AsyncVideo;
}();

var a = new AsyncVideo();

/***/ }),

/***/ "./src/js/model/Urlpurse.es6":
/*!***********************************!*\
  !*** ./src/js/model/Urlpurse.es6 ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URLPurse = function () {
  function URLPurse() {
    _classCallCheck(this, URLPurse);
  }

  _createClass(URLPurse, [{
    key: 'getIDs',
    value: function getIDs(url) {
      var ytRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
      var vmRegex = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i;
      var videoType = '';
      if (ytRegex.test(url)) {
        videoType = 'youtube';
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
          this.IDs = match[2];
        } else {
          this.IDs = 0;
        }
      } else if (vmRegex.test(url)) {
        videoType = 'vimeo';
        var _match = url.match(vmRegex);
        if (_match && _match[1].length == 9) {
          this.IDs = _match[1];
        }
        console.log(url.match(vmRegex));
      } else {
        this.IDs = 0;
      }
      return [this.IDs, videoType];
    }
  }]);

  return URLPurse;
}();

/* harmony default export */ __webpack_exports__["default"] = (URLPurse);

/***/ }),

/***/ "./src/js/videoAPI/VMController.es6":
/*!******************************************!*\
  !*** ./src/js/videoAPI/VMController.es6 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vimeo/player */ "./node_modules/@vimeo/player/dist/player.es.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var VMController = function VMController(videoData) {
  _classCallCheck(this, VMController);

  var options = {
    id: videoData.id,
    width: videoData.width,
    height: videoData.height,
    autoplay: videoData.isAutoPlay
  };
  var vm = new _vimeo_player__WEBPACK_IMPORTED_MODULE_0__["default"](videoData.divID, options);
};

/* harmony default export */ __webpack_exports__["default"] = (VMController);

/***/ }),

/***/ "./src/js/videoAPI/YTController.es6":
/*!******************************************!*\
  !*** ./src/js/videoAPI/YTController.es6 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var YTController = function YTController(videoData) {
  _classCallCheck(this, YTController);

  var player = new YT.Player(videoData.divID, {
    width: videoData.width,
    height: videoData.height,
    videoId: videoData.id,
    playerVars: { 'autoplay': videoData.isAutoPlay }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (YTController);

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/main.es6 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/main.es6 */"./src/js/main.es6");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2aW1lby9wbGF5ZXIvZGlzdC9wbGF5ZXIuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWwvVXJscHVyc2UuZXM2Iiwid2VicGFjazovLy8uL3NyYy9qcy92aWRlb0FQSS9WTUNvbnRyb2xsZXIuZXM2Iiwid2VicGFjazovLy8uL3NyYy9qcy92aWRlb0FQSS9ZVENvbnRyb2xsZXIuZXM2Il0sIm5hbWVzIjpbIkFzeW5jVmlkZW8iLCJjYWxzc05hbWUiLCJpc1lvdXR1YmUiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ2aWRlb0RhdGEiLCJ1cmxQdXJzZSIsIml0ZW0iLCJnZXRJRHMiLCJnZXRfZGF0YVVSTCIsImlkcyIsInZpZGVvVHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhbGxvd0F1dG9QbGF5IiwiciIsImdldF9yYW5kb21JRCIsImlkIiwiZGl2SUQiLCJpc0F1dG9QbGF5Iiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInNldElubmVyIiwicHVzaCIsImVtYmVkWVRUYWciLCJ3aW5kb3ciLCJvbmxvYWQiLCJ5dENvbnRyb2xsZXIiLCJ2bUNvbnRyb2xsZXIiLCJlbGVtZW50Iiwia2V5IiwiZGF0YXNldCIsImluc2VydEFkamFjZW50SFRNTCIsImwiLCJjIiwiY2wiLCJsZW5ndGgiLCJpIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGFnIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImZpcnN0U2NyaXB0VGFnIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYSIsIlVSTFB1cnNlIiwidXJsIiwieXRSZWdleCIsInZtUmVnZXgiLCJ0ZXN0IiwicmVnRXhwIiwibWF0Y2giLCJJRHMiLCJWTUNvbnRyb2xsZXIiLCJvcHRpb25zIiwiYXV0b3BsYXkiLCJ2bSIsIllUQ29udHJvbGxlciIsInBsYXllciIsIllUIiwiUGxheWVyIiwidmlkZW9JZCIsInBsYXllclZhcnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsWUFBWSxFQUFFO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxtQkFJSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxjQUFjOztBQUVqQjtBQUNBLDRCQUE0QixTQUFTOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pMRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7O0lBRU1BLFU7QUFHSix3QkFBc0M7QUFBQTs7QUFBQSxRQUExQkMsU0FBMEIsdUVBQWQsYUFBYzs7QUFBQTs7QUFDcEMsU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFNBQUtDLE1BQUwsR0FBZUMsU0FBU0Msc0JBQVQsQ0FBaUMsYUFBakMsQ0FBZjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxRQUFNQyxXQUFXLElBQUksMkRBQUosRUFBakI7O0FBSm9DO0FBQUE7QUFBQTs7QUFBQTtBQU1wQywyQkFBbUIsS0FBS0osTUFBeEIsOEhBQStCO0FBQUEsWUFBcEJLLElBQW9COztBQUFBLCtCQUNMRCxTQUFTRSxNQUFULENBQWdCLEtBQUtDLFdBQUwsQ0FBaUJGLElBQWpCLEVBQXNCLFVBQXRCLENBQWhCLENBREs7QUFBQTtBQUFBLFlBQ3RCRyxHQURzQjtBQUFBLFlBQ2xCQyxTQURrQjs7QUFFN0JDLGdCQUFRQyxHQUFSLENBQVlILEdBQVosRUFBZ0JDLFNBQWhCO0FBQ0EsWUFBTUcsZ0JBQWdCLEtBQUtMLFdBQUwsQ0FBaUJGLElBQWpCLEVBQXNCLG9CQUF0QixLQUErQyxDQUFyRTtBQUNBLFlBQUksQ0FBQyxLQUFLTixTQUFOLElBQW1CVSxhQUFhLFNBQXBDLEVBQStDO0FBQzdDLGVBQUtWLFNBQUwsR0FBaUIsSUFBakI7QUFDRDtBQUNEVyxnQkFBUUMsR0FBUixDQUFZQyxhQUFaO0FBQ0EsWUFBTUMsSUFBSSxLQUFLQyxZQUFMLEVBQVY7QUFDQSxZQUFNWCxZQUFZO0FBQ2hCTSxxQkFBWUEsU0FESTtBQUVoQk0sY0FBR1AsR0FGYTtBQUdoQlEsaUJBQU1ILENBSFU7QUFJaEJJLHNCQUFhTCxhQUpHO0FBS2hCTSxpQkFBTWIsS0FBS2MsV0FMSztBQU1oQkMsa0JBQU9mLEtBQUtnQjtBQU5JLFNBQWxCO0FBUUEsYUFBS0MsUUFBTCxDQUFjakIsSUFBZCxFQUFtQlEsQ0FBbkI7QUFDQSxhQUFLVixTQUFMLENBQWVvQixJQUFmLENBQW9CcEIsU0FBcEI7QUFFRDtBQTFCbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEyQnBDTyxZQUFRQyxHQUFSLENBQVksS0FBS1osU0FBakI7QUFDQSxRQUFJLEtBQUtBLFNBQVQsRUFBb0I7QUFDbEIsV0FBS3lCLFVBQUw7QUFDRDs7QUFFRDtBQUNBQyxXQUFPQyxNQUFQLEdBQWdCLFlBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbEIsOEJBQW1CLE1BQUt2QixTQUF4QixtSUFBbUM7QUFBQSxjQUF4QkUsS0FBd0I7O0FBQ2pDLGNBQUlBLE1BQUtJLFNBQUwsSUFBa0IsU0FBdEIsRUFBaUM7QUFDL0IsZ0JBQU1rQixlQUFlLElBQUksa0VBQUosQ0FBaUJ0QixLQUFqQixDQUFyQjtBQUNELFdBRkQsTUFFTSxJQUFHQSxNQUFLSSxTQUFMLElBQWtCLE9BQXJCLEVBQTZCO0FBQ2pDLGdCQUFNbUIsZUFBZSxJQUFJLGtFQUFKLENBQWlCdkIsS0FBakIsQ0FBckI7QUFDRDtBQUNGO0FBUGlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRbkIsS0FSRDtBQVdEOzs7O2tDQUUwQztBQUFBLFVBQS9Cd0IsT0FBK0IsdUVBQXJCLEtBQXFCO0FBQUEsVUFBZkMsR0FBZSx1RUFBWCxVQUFXOztBQUN6QyxVQUFJLENBQUNELE9BQUwsRUFBYyxPQUFPLEtBQVA7QUFDZCxhQUFPQSxRQUFRRSxPQUFSLENBQWdCRCxHQUFoQixDQUFQO0FBQ0Q7OzsrQkFFOEI7QUFBQSxVQUF0QkQsT0FBc0IsdUVBQVosS0FBWTtBQUFBLFVBQU5iLEtBQU07O0FBQzdCLFVBQUksQ0FBQ2EsT0FBTCxFQUFjLE9BQU8sS0FBUDs7QUFFZEEsY0FBUUcsa0JBQVIsQ0FBMkIsWUFBM0IsMkNBQ3lDaEIsS0FEekM7QUFHRDs7O21DQUVhO0FBQ1osVUFBTWlCLElBQUksQ0FBVjtBQUNBLFVBQU1DLElBQUksNEJBQVY7QUFDQSxVQUFNQyxLQUFLRCxFQUFFRSxNQUFiO0FBQ0EsVUFBSXZCLElBQUksRUFBUjtBQUNBLFdBQUksSUFBSXdCLElBQUUsQ0FBVixFQUFhQSxJQUFFSixDQUFmLEVBQWtCSSxHQUFsQixFQUFzQjtBQUNwQnhCLGFBQUtxQixFQUFFSSxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBY0wsRUFBekIsQ0FBRixDQUFMO0FBQ0Q7QUFDRCxhQUFPdEIsQ0FBUDtBQUNEOzs7aUNBR1c7QUFDVixVQUFNNEIsTUFBTXhDLFNBQVN5QyxhQUFULENBQXVCLFFBQXZCLENBQVo7QUFDQUQsVUFBSUUsR0FBSixHQUFVLG9DQUFWO0FBQ0EsVUFBTUMsaUJBQWlCM0MsU0FBUzRDLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQXZCO0FBQ0FELHFCQUFlRSxVQUFmLENBQTBCQyxZQUExQixDQUF1Q04sR0FBdkMsRUFBNENHLGNBQTVDO0FBQ0Q7Ozs7OztBQUdILElBQU1JLElBQUksSUFBSW5ELFVBQUosRUFBVixDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ3RGcUJvRCxROzs7Ozs7OzJCQUNaQyxHLEVBQUk7QUFDVCxVQUFNQyxVQUFVLHdEQUFoQjtBQUNBLFVBQU1DLFVBQVUsZ0pBQWhCO0FBQ0EsVUFBSTNDLFlBQVksRUFBaEI7QUFDQSxVQUFJMEMsUUFBUUUsSUFBUixDQUFhSCxHQUFiLENBQUosRUFBdUI7QUFDckJ6QyxvQkFBWSxTQUFaO0FBQ0EsWUFBTTZDLFNBQVMsa0VBQWY7QUFDQSxZQUFNQyxRQUFRTCxJQUFJSyxLQUFKLENBQVVELE1BQVYsQ0FBZDtBQUNBLFlBQUlDLFNBQVNBLE1BQU0sQ0FBTixFQUFTbkIsTUFBVCxJQUFtQixFQUFoQyxFQUFvQztBQUNsQyxlQUFLb0IsR0FBTCxHQUFXRCxNQUFNLENBQU4sQ0FBWDtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtDLEdBQUwsR0FBVyxDQUFYO0FBQ0Q7QUFDRixPQVRELE1BU00sSUFBR0osUUFBUUMsSUFBUixDQUFhSCxHQUFiLENBQUgsRUFBcUI7QUFDekJ6QyxvQkFBWSxPQUFaO0FBQ0EsWUFBTThDLFNBQVFMLElBQUlLLEtBQUosQ0FBVUgsT0FBVixDQUFkO0FBQ0EsWUFBSUcsVUFBU0EsT0FBTSxDQUFOLEVBQVNuQixNQUFULElBQW1CLENBQWhDLEVBQW1DO0FBQ2pDLGVBQUtvQixHQUFMLEdBQVdELE9BQU0sQ0FBTixDQUFYO0FBQ0Q7QUFDRDdDLGdCQUFRQyxHQUFSLENBQVl1QyxJQUFJSyxLQUFKLENBQVVILE9BQVYsQ0FBWjtBQUNELE9BUEssTUFPRDtBQUNILGFBQUtJLEdBQUwsR0FBVyxDQUFYO0FBQ0Q7QUFDRCxhQUFPLENBQUMsS0FBS0EsR0FBTixFQUFVL0MsU0FBVixDQUFQO0FBQ0Q7Ozs7OzsrREF6QmtCd0MsUTs7Ozs7Ozs7Ozs7Ozs7OztBQ0NyQjs7SUFDcUJRLFksR0FDbkIsc0JBQVl0RCxTQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLE1BQUl1RCxVQUFVO0FBQ1YzQyxRQUFJWixVQUFVWSxFQURKO0FBRVZHLFdBQU9mLFVBQVVlLEtBRlA7QUFHVkUsWUFBT2pCLFVBQVVpQixNQUhQO0FBSVZ1QyxjQUFTeEQsVUFBVWM7QUFKVCxHQUFkO0FBTUEsTUFBTTJDLEtBQUssSUFBSSxxREFBSixDQUFnQnpELFVBQVVhLEtBQTFCLEVBQWdDMEMsT0FBaEMsQ0FBWDtBQUNELEM7OytEQVRrQkQsWTs7Ozs7Ozs7Ozs7Ozs7O0lDRkFJLFksR0FDbkIsc0JBQVkxRCxTQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLE1BQU0yRCxTQUFTLElBQUlDLEdBQUdDLE1BQVAsQ0FBYzdELFVBQVVhLEtBQXhCLEVBQThCO0FBQzNDRSxXQUFNZixVQUFVZSxLQUQyQjtBQUUzQ0UsWUFBT2pCLFVBQVVpQixNQUYwQjtBQUczQzZDLGFBQVM5RCxVQUFVWSxFQUh3QjtBQUkzQ21ELGdCQUFZLEVBQUUsWUFBWS9ELFVBQVVjLFVBQXhCO0FBSitCLEdBQTlCLENBQWY7QUFNRCxDOzsrREFSa0I0QyxZIiwiZmlsZSI6ImFzeW5jVmlkZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKiEgQHZpbWVvL3BsYXllciB2Mi42LjMgfCAoYykgMjAxOCBWaW1lbyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3ZpbWVvL3BsYXllci5qcyAqL1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG4vKipcbiAqIEBtb2R1bGUgbGliL2Z1bmN0aW9uc1xuICovXG5cbi8qKlxuICogQ2hlY2sgdG8gc2VlIHRoaXMgaXMgYSBub2RlIGVudmlyb25tZW50LlxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cblxuLyogZ2xvYmFsIGdsb2JhbCAqL1xudmFyIGlzTm9kZSA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsKSA9PT0gJ1tvYmplY3QgZ2xvYmFsXSc7XG4vKipcbiAqIEdldCB0aGUgbmFtZSBvZiB0aGUgbWV0aG9kIGZvciBhIGdpdmVuIGdldHRlciBvciBzZXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgRWl0aGVyIOKAnGdldOKAnSBvciDigJxzZXTigJ0uXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZ2V0TWV0aG9kTmFtZShwcm9wLCB0eXBlKSB7XG4gIGlmIChwcm9wLmluZGV4T2YodHlwZS50b0xvd2VyQ2FzZSgpKSA9PT0gMCkge1xuICAgIHJldHVybiBwcm9wO1xuICB9XG5cbiAgcmV0dXJuIFwiXCIuY29uY2F0KHR5cGUudG9Mb3dlckNhc2UoKSkuY29uY2F0KHByb3Auc3Vic3RyKDAsIDEpLnRvVXBwZXJDYXNlKCkpLmNvbmNhdChwcm9wLnN1YnN0cigxKSk7XG59XG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgRE9NIEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IFRoZSBvYmplY3QgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzRG9tRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50O1xufVxuLyoqXG4gKiBDaGVjayB0byBzZWUgd2hldGhlciB0aGUgdmFsdWUgaXMgYSBudW1iZXIuXG4gKlxuICogQHNlZSBodHRwOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS91LzM1MTQ2L2pzL3Rlc3RzL2lzTnVtYmVyLmh0bWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtib29sZWFufSBpbnRlZ2VyIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyBhbiBpbnRlZ2VyLlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSkgJiYgTWF0aC5mbG9vcih2YWx1ZSkgPT0gdmFsdWU7XG59XG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgVVJMIGlzIGEgVmltZW8gdXJsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCBzdHJpbmcuXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzVmltZW9VcmwodXJsKSB7XG4gIHJldHVybiAvXihodHRwcz86KT9cXC9cXC8oKHBsYXllcnx3d3cpLik/dmltZW8uY29tKD89JHxcXC8pLy50ZXN0KHVybCk7XG59XG4vKipcbiAqIEdldCB0aGUgVmltZW8gVVJMIGZyb20gYW4gZWxlbWVudC5cbiAqIFRoZSBlbGVtZW50IG11c3QgaGF2ZSBlaXRoZXIgYSBkYXRhLXZpbWVvLWlkIG9yIGRhdGEtdmltZW8tdXJsIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb0VtYmVkUGFyYW1ldGVycyBUaGUgb0VtYmVkIHBhcmFtZXRlcnMuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZ2V0VmltZW9VcmwoKSB7XG4gIHZhciBvRW1iZWRQYXJhbWV0ZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGlkID0gb0VtYmVkUGFyYW1ldGVycy5pZDtcbiAgdmFyIHVybCA9IG9FbWJlZFBhcmFtZXRlcnMudXJsO1xuICB2YXIgaWRPclVybCA9IGlkIHx8IHVybDtcblxuICBpZiAoIWlkT3JVcmwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuIGlkIG9yIHVybCBtdXN0IGJlIHBhc3NlZCwgZWl0aGVyIGluIGFuIG9wdGlvbnMgb2JqZWN0IG9yIGFzIGEgZGF0YS12aW1lby1pZCBvciBkYXRhLXZpbWVvLXVybCBhdHRyaWJ1dGUuJyk7XG4gIH1cblxuICBpZiAoaXNJbnRlZ2VyKGlkT3JVcmwpKSB7XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly92aW1lby5jb20vXCIuY29uY2F0KGlkT3JVcmwpO1xuICB9XG5cbiAgaWYgKGlzVmltZW9VcmwoaWRPclVybCkpIHtcbiAgICByZXR1cm4gaWRPclVybC5yZXBsYWNlKCdodHRwOicsICdodHRwczonKTtcbiAgfVxuXG4gIGlmIChpZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXHUyMDFDXCIuY29uY2F0KGlkLCBcIlxcdTIwMUQgaXMgbm90IGEgdmFsaWQgdmlkZW8gaWQuXCIpKTtcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXHUyMDFDXCIuY29uY2F0KGlkT3JVcmwsIFwiXFx1MjAxRCBpcyBub3QgYSB2aW1lby5jb20gdXJsLlwiKSk7XG59XG5cbnZhciBhcnJheUluZGV4T2ZTdXBwb3J0ID0gdHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mICE9PSAndW5kZWZpbmVkJztcbnZhciBwb3N0TWVzc2FnZVN1cHBvcnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnBvc3RNZXNzYWdlICE9PSAndW5kZWZpbmVkJztcblxuaWYgKCFpc05vZGUgJiYgKCFhcnJheUluZGV4T2ZTdXBwb3J0IHx8ICFwb3N0TWVzc2FnZVN1cHBvcnQpKSB7XG4gIHRocm93IG5ldyBFcnJvcignU29ycnksIHRoZSBWaW1lbyBQbGF5ZXIgQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyLicpO1xufVxuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyohXG4gKiB3ZWFrbWFwLXBvbHlmaWxsIHYyLjAuMCAtIEVDTUFTY3JpcHQ2IFdlYWtNYXAgcG9seWZpbGxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wb2x5Z29ucGxhbmV0L3dlYWttYXAtcG9seWZpbGxcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDE2IHBvbHlnb24gcGxhbmV0IDxwb2x5Z29uLnBsYW5ldC5hcXVhQGdtYWlsLmNvbT5cbiAqIEBsaWNlbnNlIE1JVFxuICovXG4oZnVuY3Rpb24gKHNlbGYpIHtcblxuICBpZiAoc2VsZi5XZWFrTWFwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIHNlbGYuV2Vha01hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBFQ01BLTI2MiAyMy4zIFdlYWtNYXAgT2JqZWN0c1xuICAgIGZ1bmN0aW9uIFdlYWtNYXAoKSB7XG4gICAgICBpZiAodGhpcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDb25zdHJ1Y3RvciBXZWFrTWFwIHJlcXVpcmVzICduZXcnXCIpO1xuICAgICAgfVxuXG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2lkJywgZ2VuSWQoJ19XZWFrTWFwJykpOyAvLyBFQ01BLTI2MiAyMy4zLjEuMSBXZWFrTWFwKFtpdGVyYWJsZV0pXG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBDdXJyZW50bHksIFdlYWtNYXAgYGl0ZXJhYmxlYCBhcmd1bWVudCBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1dlYWtNYXAgaXRlcmFibGUgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgfVxuICAgIH0gLy8gRUNNQS0yNjIgMjMuMy4zLjIgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcblxuXG4gICAgZGVmaW5lUHJvcGVydHkoV2Vha01hcC5wcm90b3R5cGUsICdkZWxldGUnLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBjaGVja0luc3RhbmNlKHRoaXMsICdkZWxldGUnKTtcblxuICAgICAgaWYgKCFpc09iamVjdChrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVudHJ5ID0ga2V5W3RoaXMuX2lkXTtcblxuICAgICAgaWYgKGVudHJ5ICYmIGVudHJ5WzBdID09PSBrZXkpIHtcbiAgICAgICAgZGVsZXRlIGtleVt0aGlzLl9pZF07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7IC8vIEVDTUEtMjYyIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXG5cbiAgICBkZWZpbmVQcm9wZXJ0eShXZWFrTWFwLnByb3RvdHlwZSwgJ2dldCcsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGNoZWNrSW5zdGFuY2UodGhpcywgJ2dldCcpO1xuXG4gICAgICBpZiAoIWlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgIH1cblxuICAgICAgdmFyIGVudHJ5ID0ga2V5W3RoaXMuX2lkXTtcblxuICAgICAgaWYgKGVudHJ5ICYmIGVudHJ5WzBdID09PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5WzFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH0pOyAvLyBFQ01BLTI2MiAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuXG4gICAgZGVmaW5lUHJvcGVydHkoV2Vha01hcC5wcm90b3R5cGUsICdoYXMnLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBjaGVja0luc3RhbmNlKHRoaXMsICdoYXMnKTtcblxuICAgICAgaWYgKCFpc09iamVjdChrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVudHJ5ID0ga2V5W3RoaXMuX2lkXTtcblxuICAgICAgaWYgKGVudHJ5ICYmIGVudHJ5WzBdID09PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTsgLy8gRUNNQS0yNjIgMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG5cbiAgICBkZWZpbmVQcm9wZXJ0eShXZWFrTWFwLnByb3RvdHlwZSwgJ3NldCcsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBjaGVja0luc3RhbmNlKHRoaXMsICdzZXQnKTtcblxuICAgICAgaWYgKCFpc09iamVjdChrZXkpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdmFsdWUgdXNlZCBhcyB3ZWFrIG1hcCBrZXknKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVudHJ5ID0ga2V5W3RoaXMuX2lkXTtcblxuICAgICAgaWYgKGVudHJ5ICYmIGVudHJ5WzBdID09PSBrZXkpIHtcbiAgICAgICAgZW50cnlbMV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGRlZmluZVByb3BlcnR5KGtleSwgdGhpcy5faWQsIFtrZXksIHZhbHVlXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrSW5zdGFuY2UoeCwgbWV0aG9kTmFtZSkge1xuICAgICAgaWYgKCFpc09iamVjdCh4KSB8fCAhaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnX2lkJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtZXRob2ROYW1lICsgJyBtZXRob2QgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlciAnICsgdHlwZW9mIHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbklkKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHByZWZpeCArICdfJyArIHJhbmQoKSArICcuJyArIHJhbmQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByYW5kKCkge1xuICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgfVxuXG4gICAgZGVmaW5lUHJvcGVydHkoV2Vha01hcCwgJ19wb2x5ZmlsbCcsIHRydWUpO1xuICAgIHJldHVybiBXZWFrTWFwO1xuICB9KCk7XG5cbiAgZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiBPYmplY3QoeCkgPT09IHg7XG4gIH1cbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBjb21tb25qc0dsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBjb21tb25qc0dsb2JhbCA6IGNvbW1vbmpzR2xvYmFsKTtcblxudmFyIG5wb19zcmMgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4vKiEgTmF0aXZlIFByb21pc2UgT25seVxuICAgIHYwLjguMSAoYykgS3lsZSBTaW1wc29uXG4gICAgTUlUIExpY2Vuc2U6IGh0dHA6Ly9nZXRpZnkubWl0LWxpY2Vuc2Uub3JnXG4qL1xuKGZ1bmN0aW9uIFVNRChuYW1lLCBjb250ZXh0LCBkZWZpbml0aW9uKSB7XG4gIC8vIHNwZWNpYWwgZm9ybSBvZiBVTUQgZm9yIHBvbHlmaWxsaW5nIGFjcm9zcyBldmlyb25tZW50c1xuICBjb250ZXh0W25hbWVdID0gY29udGV4dFtuYW1lXSB8fCBkZWZpbml0aW9uKCk7XG5cbiAgaWYgKG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZXh0W25hbWVdO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT0gXCJmdW5jdGlvblwiICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICB1bmRlZmluZWQoZnVuY3Rpb24gJEFNRCQoKSB7XG4gICAgICByZXR1cm4gY29udGV4dFtuYW1lXTtcbiAgICB9KTtcbiAgfVxufSkoXCJQcm9taXNlXCIsIHR5cGVvZiBjb21tb25qc0dsb2JhbCAhPSBcInVuZGVmaW5lZFwiID8gY29tbW9uanNHbG9iYWwgOiBjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gREVGKCkge1xuXG4gIHZhciBidWlsdEluUHJvcCxcbiAgICAgIGN5Y2xlLFxuICAgICAgc2NoZWR1bGluZ19xdWV1ZSxcbiAgICAgIFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICAgIHRpbWVyID0gdHlwZW9mIHNldEltbWVkaWF0ZSAhPSBcInVuZGVmaW5lZFwiID8gZnVuY3Rpb24gdGltZXIoZm4pIHtcbiAgICByZXR1cm4gc2V0SW1tZWRpYXRlKGZuKTtcbiAgfSA6IHNldFRpbWVvdXQ7IC8vIGRhbW1pdCwgSUU4LlxuXG4gIHRyeSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInhcIiwge30pO1xuXG4gICAgYnVpbHRJblByb3AgPSBmdW5jdGlvbiBidWlsdEluUHJvcChvYmosIG5hbWUsIHZhbCwgY29uZmlnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwge1xuICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBjb25maWcgIT09IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBidWlsdEluUHJvcCA9IGZ1bmN0aW9uIGJ1aWx0SW5Qcm9wKG9iaiwgbmFtZSwgdmFsKSB7XG4gICAgICBvYmpbbmFtZV0gPSB2YWw7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gIH0gLy8gTm90ZTogdXNpbmcgYSBxdWV1ZSBpbnN0ZWFkIG9mIGFycmF5IGZvciBlZmZpY2llbmN5XG5cblxuICBzY2hlZHVsaW5nX3F1ZXVlID0gZnVuY3Rpb24gUXVldWUoKSB7XG4gICAgdmFyIGZpcnN0LCBsYXN0LCBpdGVtO1xuXG4gICAgZnVuY3Rpb24gSXRlbShmbiwgc2VsZikge1xuICAgICAgdGhpcy5mbiA9IGZuO1xuICAgICAgdGhpcy5zZWxmID0gc2VsZjtcbiAgICAgIHRoaXMubmV4dCA9IHZvaWQgMDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQoZm4sIHNlbGYpIHtcbiAgICAgICAgaXRlbSA9IG5ldyBJdGVtKGZuLCBzZWxmKTtcblxuICAgICAgICBpZiAobGFzdCkge1xuICAgICAgICAgIGxhc3QubmV4dCA9IGl0ZW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlyc3QgPSBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdCA9IGl0ZW07XG4gICAgICAgIGl0ZW0gPSB2b2lkIDA7XG4gICAgICB9LFxuICAgICAgZHJhaW46IGZ1bmN0aW9uIGRyYWluKCkge1xuICAgICAgICB2YXIgZiA9IGZpcnN0O1xuICAgICAgICBmaXJzdCA9IGxhc3QgPSBjeWNsZSA9IHZvaWQgMDtcblxuICAgICAgICB3aGlsZSAoZikge1xuICAgICAgICAgIGYuZm4uY2FsbChmLnNlbGYpO1xuICAgICAgICAgIGYgPSBmLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9KCk7XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGUoZm4sIHNlbGYpIHtcbiAgICBzY2hlZHVsaW5nX3F1ZXVlLmFkZChmbiwgc2VsZik7XG5cbiAgICBpZiAoIWN5Y2xlKSB7XG4gICAgICBjeWNsZSA9IHRpbWVyKHNjaGVkdWxpbmdfcXVldWUuZHJhaW4pO1xuICAgIH1cbiAgfSAvLyBwcm9taXNlIGR1Y2sgdHlwaW5nXG5cblxuICBmdW5jdGlvbiBpc1RoZW5hYmxlKG8pIHtcbiAgICB2YXIgX3RoZW4sXG4gICAgICAgIG9fdHlwZSA9IHR5cGVvZiBvO1xuXG4gICAgaWYgKG8gIT0gbnVsbCAmJiAob190eXBlID09IFwib2JqZWN0XCIgfHwgb190eXBlID09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgIF90aGVuID0gby50aGVuO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgX3RoZW4gPT0gXCJmdW5jdGlvblwiID8gX3RoZW4gOiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hhaW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vdGlmeUlzb2xhdGVkKHRoaXMsIHRoaXMuc3RhdGUgPT09IDEgPyB0aGlzLmNoYWluW2ldLnN1Y2Nlc3MgOiB0aGlzLmNoYWluW2ldLmZhaWx1cmUsIHRoaXMuY2hhaW5baV0pO1xuICAgIH1cblxuICAgIHRoaXMuY2hhaW4ubGVuZ3RoID0gMDtcbiAgfSAvLyBOT1RFOiBUaGlzIGlzIGEgc2VwYXJhdGUgZnVuY3Rpb24gdG8gaXNvbGF0ZVxuICAvLyB0aGUgYHRyeS4uY2F0Y2hgIHNvIHRoYXQgb3RoZXIgY29kZSBjYW4gYmVcbiAgLy8gb3B0aW1pemVkIGJldHRlclxuXG5cbiAgZnVuY3Rpb24gbm90aWZ5SXNvbGF0ZWQoc2VsZiwgY2IsIGNoYWluKSB7XG4gICAgdmFyIHJldCwgX3RoZW47XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGNiID09PSBmYWxzZSkge1xuICAgICAgICBjaGFpbi5yZWplY3Qoc2VsZi5tc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNiID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0ID0gc2VsZi5tc2c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0ID0gY2IuY2FsbCh2b2lkIDAsIHNlbGYubXNnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXQgPT09IGNoYWluLnByb21pc2UpIHtcbiAgICAgICAgICBjaGFpbi5yZWplY3QoVHlwZUVycm9yKFwiUHJvbWlzZS1jaGFpbiBjeWNsZVwiKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoZW4gPSBpc1RoZW5hYmxlKHJldCkpIHtcbiAgICAgICAgICBfdGhlbi5jYWxsKHJldCwgY2hhaW4ucmVzb2x2ZSwgY2hhaW4ucmVqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGFpbi5yZXNvbHZlKHJldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNoYWluLnJlamVjdChlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmUobXNnKSB7XG4gICAgdmFyIF90aGVuLFxuICAgICAgICBzZWxmID0gdGhpczsgLy8gYWxyZWFkeSB0cmlnZ2VyZWQ/XG5cblxuICAgIGlmIChzZWxmLnRyaWdnZXJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYudHJpZ2dlcmVkID0gdHJ1ZTsgLy8gdW53cmFwXG5cbiAgICBpZiAoc2VsZi5kZWYpIHtcbiAgICAgIHNlbGYgPSBzZWxmLmRlZjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaWYgKF90aGVuID0gaXNUaGVuYWJsZShtc2cpKSB7XG4gICAgICAgIHNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZGVmX3dyYXBwZXIgPSBuZXcgTWFrZURlZldyYXBwZXIoc2VsZik7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX3RoZW4uY2FsbChtc2csIGZ1bmN0aW9uICRyZXNvbHZlJCgpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZS5hcHBseShkZWZfd3JhcHBlciwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICRyZWplY3QkKCkge1xuICAgICAgICAgICAgICByZWplY3QuYXBwbHkoZGVmX3dyYXBwZXIsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdC5jYWxsKGRlZl93cmFwcGVyLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm1zZyA9IG1zZztcbiAgICAgICAgc2VsZi5zdGF0ZSA9IDE7XG5cbiAgICAgICAgaWYgKHNlbGYuY2hhaW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNjaGVkdWxlKG5vdGlmeSwgc2VsZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlamVjdC5jYWxsKG5ldyBNYWtlRGVmV3JhcHBlcihzZWxmKSwgZXJyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWplY3QobXNnKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzOyAvLyBhbHJlYWR5IHRyaWdnZXJlZD9cblxuICAgIGlmIChzZWxmLnRyaWdnZXJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYudHJpZ2dlcmVkID0gdHJ1ZTsgLy8gdW53cmFwXG5cbiAgICBpZiAoc2VsZi5kZWYpIHtcbiAgICAgIHNlbGYgPSBzZWxmLmRlZjtcbiAgICB9XG5cbiAgICBzZWxmLm1zZyA9IG1zZztcbiAgICBzZWxmLnN0YXRlID0gMjtcblxuICAgIGlmIChzZWxmLmNoYWluLmxlbmd0aCA+IDApIHtcbiAgICAgIHNjaGVkdWxlKG5vdGlmeSwgc2VsZik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXRlcmF0ZVByb21pc2VzKENvbnN0cnVjdG9yLCBhcnIsIHJlc29sdmVyLCByZWplY3Rlcikge1xuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGFyci5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAoZnVuY3Rpb24gSUlGRShpZHgpIHtcbiAgICAgICAgQ29uc3RydWN0b3IucmVzb2x2ZShhcnJbaWR4XSkudGhlbihmdW5jdGlvbiAkcmVzb2x2ZXIkKG1zZykge1xuICAgICAgICAgIHJlc29sdmVyKGlkeCwgbXNnKTtcbiAgICAgICAgfSwgcmVqZWN0ZXIpO1xuICAgICAgfSkoaWR4KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBNYWtlRGVmV3JhcHBlcihzZWxmKSB7XG4gICAgdGhpcy5kZWYgPSBzZWxmO1xuICAgIHRoaXMudHJpZ2dlcmVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBNYWtlRGVmKHNlbGYpIHtcbiAgICB0aGlzLnByb21pc2UgPSBzZWxmO1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgIHRoaXMudHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgdGhpcy5jaGFpbiA9IFtdO1xuICAgIHRoaXMubXNnID0gdm9pZCAwO1xuICB9XG5cbiAgZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGlmICh0eXBlb2YgZXhlY3V0b3IgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fX05QT19fICE9PSAwKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBwcm9taXNlXCIpO1xuICAgIH0gLy8gaW5zdGFuY2Ugc2hhZG93aW5nIHRoZSBpbmhlcml0ZWQgXCJicmFuZFwiXG4gICAgLy8gdG8gc2lnbmFsIGFuIGFscmVhZHkgXCJpbml0aWFsaXplZFwiIHByb21pc2VcblxuXG4gICAgdGhpcy5fX05QT19fID0gMTtcbiAgICB2YXIgZGVmID0gbmV3IE1ha2VEZWYodGhpcyk7XG5cbiAgICB0aGlzW1widGhlblwiXSA9IGZ1bmN0aW9uIHRoZW4oc3VjY2VzcywgZmFpbHVyZSkge1xuICAgICAgdmFyIG8gPSB7XG4gICAgICAgIHN1Y2Nlc3M6IHR5cGVvZiBzdWNjZXNzID09IFwiZnVuY3Rpb25cIiA/IHN1Y2Nlc3MgOiB0cnVlLFxuICAgICAgICBmYWlsdXJlOiB0eXBlb2YgZmFpbHVyZSA9PSBcImZ1bmN0aW9uXCIgPyBmYWlsdXJlIDogZmFsc2VcbiAgICAgIH07IC8vIE5vdGU6IGB0aGVuKC4uKWAgaXRzZWxmIGNhbiBiZSBib3Jyb3dlZCB0byBiZSB1c2VkIGFnYWluc3RcbiAgICAgIC8vIGEgZGlmZmVyZW50IHByb21pc2UgY29uc3RydWN0b3IgZm9yIG1ha2luZyB0aGUgY2hhaW5lZCBwcm9taXNlLFxuICAgICAgLy8gYnkgc3Vic3RpdHV0aW5nIGEgZGlmZmVyZW50IGB0aGlzYCBiaW5kaW5nLlxuXG4gICAgICBvLnByb21pc2UgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihmdW5jdGlvbiBleHRyYWN0Q2hhaW4ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x2ZSAhPSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJlamVjdCAhPSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG8ucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIG8ucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgfSk7XG4gICAgICBkZWYuY2hhaW4ucHVzaChvKTtcblxuICAgICAgaWYgKGRlZi5zdGF0ZSAhPT0gMCkge1xuICAgICAgICBzY2hlZHVsZShub3RpZnksIGRlZik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXNbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uICRjYXRjaCQoZmFpbHVyZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih2b2lkIDAsIGZhaWx1cmUpO1xuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IuY2FsbCh2b2lkIDAsIGZ1bmN0aW9uIHB1YmxpY1Jlc29sdmUobXNnKSB7XG4gICAgICAgIHJlc29sdmUuY2FsbChkZWYsIG1zZyk7XG4gICAgICB9LCBmdW5jdGlvbiBwdWJsaWNSZWplY3QobXNnKSB7XG4gICAgICAgIHJlamVjdC5jYWxsKGRlZiwgbXNnKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0LmNhbGwoZGVmLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBQcm9taXNlUHJvdG90eXBlID0gYnVpbHRJblByb3Aoe30sIFwiY29uc3RydWN0b3JcIiwgUHJvbWlzZSxcbiAgLypjb25maWd1cmFibGU9Ki9cbiAgZmFsc2UpOyAvLyBOb3RlOiBBbmRyb2lkIDQgY2Fubm90IHVzZSBgT2JqZWN0LmRlZmluZVByb3BlcnR5KC4uKWAgaGVyZVxuXG4gIFByb21pc2UucHJvdG90eXBlID0gUHJvbWlzZVByb3RvdHlwZTsgLy8gYnVpbHQtaW4gXCJicmFuZFwiIHRvIHNpZ25hbCBhbiBcInVuaW5pdGlhbGl6ZWRcIiBwcm9taXNlXG5cbiAgYnVpbHRJblByb3AoUHJvbWlzZVByb3RvdHlwZSwgXCJfX05QT19fXCIsIDAsXG4gIC8qY29uZmlndXJhYmxlPSovXG4gIGZhbHNlKTtcbiAgYnVpbHRJblByb3AoUHJvbWlzZSwgXCJyZXNvbHZlXCIsIGZ1bmN0aW9uIFByb21pc2UkcmVzb2x2ZShtc2cpIHtcbiAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzOyAvLyBzcGVjIG1hbmRhdGVkIGNoZWNrc1xuICAgIC8vIG5vdGU6IGJlc3QgXCJpc1Byb21pc2VcIiBjaGVjayB0aGF0J3MgcHJhY3RpY2FsIGZvciBub3dcblxuICAgIGlmIChtc2cgJiYgdHlwZW9mIG1zZyA9PSBcIm9iamVjdFwiICYmIG1zZy5fX05QT19fID09PSAxKSB7XG4gICAgICByZXR1cm4gbXNnO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfVxuXG4gICAgICByZXNvbHZlKG1zZyk7XG4gICAgfSk7XG4gIH0pO1xuICBidWlsdEluUHJvcChQcm9taXNlLCBcInJlamVjdFwiLCBmdW5jdGlvbiBQcm9taXNlJHJlamVjdChtc2cpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfVxuXG4gICAgICByZWplY3QobXNnKTtcbiAgICB9KTtcbiAgfSk7XG4gIGJ1aWx0SW5Qcm9wKFByb21pc2UsIFwiYWxsXCIsIGZ1bmN0aW9uIFByb21pc2UkYWxsKGFycikge1xuICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7IC8vIHNwZWMgbWFuZGF0ZWQgY2hlY2tzXG5cbiAgICBpZiAoVG9TdHJpbmcuY2FsbChhcnIpICE9IFwiW29iamVjdCBBcnJheV1cIikge1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yLnJlamVjdChUeXBlRXJyb3IoXCJOb3QgYW4gYXJyYXlcIikpO1xuICAgIH1cblxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3IucmVzb2x2ZShbXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVzb2x2ZSAhPSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJlamVjdCAhPSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoLFxuICAgICAgICAgIG1zZ3MgPSBBcnJheShsZW4pLFxuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgIGl0ZXJhdGVQcm9taXNlcyhDb25zdHJ1Y3RvciwgYXJyLCBmdW5jdGlvbiByZXNvbHZlcihpZHgsIG1zZykge1xuICAgICAgICBtc2dzW2lkeF0gPSBtc2c7XG5cbiAgICAgICAgaWYgKCsrY291bnQgPT09IGxlbikge1xuICAgICAgICAgIHJlc29sdmUobXNncyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG4gIH0pO1xuICBidWlsdEluUHJvcChQcm9taXNlLCBcInJhY2VcIiwgZnVuY3Rpb24gUHJvbWlzZSRyYWNlKGFycikge1xuICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7IC8vIHNwZWMgbWFuZGF0ZWQgY2hlY2tzXG5cbiAgICBpZiAoVG9TdHJpbmcuY2FsbChhcnIpICE9IFwiW29iamVjdCBBcnJheV1cIikge1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yLnJlamVjdChUeXBlRXJyb3IoXCJOb3QgYW4gYXJyYXlcIikpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfVxuXG4gICAgICBpdGVyYXRlUHJvbWlzZXMoQ29uc3RydWN0b3IsIGFyciwgZnVuY3Rpb24gcmVzb2x2ZXIoaWR4LCBtc2cpIHtcbiAgICAgICAgcmVzb2x2ZShtc2cpO1xuICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBQcm9taXNlO1xufSk7XG59KTtcblxuLyoqXG4gKiBAbW9kdWxlIGxpYi9jYWxsYmFja3NcbiAqL1xudmFyIGNhbGxiYWNrTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogU3RvcmUgYSBjYWxsYmFjayBmb3IgYSBtZXRob2Qgb3IgZXZlbnQgZm9yIGEgcGxheWVyLlxuICpcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgVGhlIHBsYXllciBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbWV0aG9kIG9yIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0geyhmdW5jdGlvbih0aGlzOlBsYXllciwgKik6IHZvaWR8e3Jlc29sdmU6IGZ1bmN0aW9uLCByZWplY3Q6IGZ1bmN0aW9ufSl9IGNhbGxiYWNrXG4gKiAgICAgICAgVGhlIGNhbGxiYWNrIHRvIGNhbGwgb3IgYW4gb2JqZWN0IHdpdGggcmVzb2x2ZSBhbmQgcmVqZWN0IGZ1bmN0aW9ucyBmb3IgYSBwcm9taXNlLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuXG5mdW5jdGlvbiBzdG9yZUNhbGxiYWNrKHBsYXllciwgbmFtZSwgY2FsbGJhY2spIHtcbiAgdmFyIHBsYXllckNhbGxiYWNrcyA9IGNhbGxiYWNrTWFwLmdldChwbGF5ZXIuZWxlbWVudCkgfHwge307XG5cbiAgaWYgKCEobmFtZSBpbiBwbGF5ZXJDYWxsYmFja3MpKSB7XG4gICAgcGxheWVyQ2FsbGJhY2tzW25hbWVdID0gW107XG4gIH1cblxuICBwbGF5ZXJDYWxsYmFja3NbbmFtZV0ucHVzaChjYWxsYmFjayk7XG4gIGNhbGxiYWNrTWFwLnNldChwbGF5ZXIuZWxlbWVudCwgcGxheWVyQ2FsbGJhY2tzKTtcbn1cbi8qKlxuICogR2V0IHRoZSBjYWxsYmFja3MgZm9yIGEgcGxheWVyIGFuZCBldmVudCBvciBtZXRob2QuXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBUaGUgcGxheWVyIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBtZXRob2Qgb3IgZXZlbnQgbmFtZVxuICogQHJldHVybiB7ZnVuY3Rpb25bXX1cbiAqL1xuXG5mdW5jdGlvbiBnZXRDYWxsYmFja3MocGxheWVyLCBuYW1lKSB7XG4gIHZhciBwbGF5ZXJDYWxsYmFja3MgPSBjYWxsYmFja01hcC5nZXQocGxheWVyLmVsZW1lbnQpIHx8IHt9O1xuICByZXR1cm4gcGxheWVyQ2FsbGJhY2tzW25hbWVdIHx8IFtdO1xufVxuLyoqXG4gKiBSZW1vdmUgYSBzdG9yZWQgY2FsbGJhY2sgZm9yIGEgbWV0aG9kIG9yIGV2ZW50IGZvciBhIHBsYXllci5cbiAqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIFRoZSBwbGF5ZXIgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG1ldGhvZCBvciBldmVudCBuYW1lXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIFRoZSBzcGVjaWZpYyBjYWxsYmFjayB0byByZW1vdmUuXG4gKiBAcmV0dXJuIHtib29sZWFufSBXYXMgdGhpcyB0aGUgbGFzdCBjYWxsYmFjaz9cbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVDYWxsYmFjayhwbGF5ZXIsIG5hbWUsIGNhbGxiYWNrKSB7XG4gIHZhciBwbGF5ZXJDYWxsYmFja3MgPSBjYWxsYmFja01hcC5nZXQocGxheWVyLmVsZW1lbnQpIHx8IHt9O1xuXG4gIGlmICghcGxheWVyQ2FsbGJhY2tzW25hbWVdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gSWYgbm8gY2FsbGJhY2sgaXMgcGFzc2VkLCByZW1vdmUgYWxsIGNhbGxiYWNrcyBmb3IgdGhlIGV2ZW50XG5cblxuICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgcGxheWVyQ2FsbGJhY2tzW25hbWVdID0gW107XG4gICAgY2FsbGJhY2tNYXAuc2V0KHBsYXllci5lbGVtZW50LCBwbGF5ZXJDYWxsYmFja3MpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGluZGV4ID0gcGxheWVyQ2FsbGJhY2tzW25hbWVdLmluZGV4T2YoY2FsbGJhY2spO1xuXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBwbGF5ZXJDYWxsYmFja3NbbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGNhbGxiYWNrTWFwLnNldChwbGF5ZXIuZWxlbWVudCwgcGxheWVyQ2FsbGJhY2tzKTtcbiAgcmV0dXJuIHBsYXllckNhbGxiYWNrc1tuYW1lXSAmJiBwbGF5ZXJDYWxsYmFja3NbbmFtZV0ubGVuZ3RoID09PSAwO1xufVxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IHN0b3JlZCBjYWxsYmFjayBmb3IgYSBwbGF5ZXIgYW5kIGV2ZW50IG9yIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIFRoZSBwbGF5ZXIgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG1ldGhvZCBvciBldmVudCBuYW1lLlxuICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjYWxsYmFjaywgb3IgZmFsc2UgaWYgdGhlcmUgd2VyZSBub25lXG4gKi9cblxuZnVuY3Rpb24gc2hpZnRDYWxsYmFja3MocGxheWVyLCBuYW1lKSB7XG4gIHZhciBwbGF5ZXJDYWxsYmFja3MgPSBnZXRDYWxsYmFja3MocGxheWVyLCBuYW1lKTtcblxuICBpZiAocGxheWVyQ2FsbGJhY2tzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgY2FsbGJhY2sgPSBwbGF5ZXJDYWxsYmFja3Muc2hpZnQoKTtcbiAgcmVtb3ZlQ2FsbGJhY2socGxheWVyLCBuYW1lLCBjYWxsYmFjayk7XG4gIHJldHVybiBjYWxsYmFjaztcbn1cbi8qKlxuICogTW92ZSBjYWxsYmFja3MgYXNzb2NpYXRlZCB3aXRoIGFuIGVsZW1lbnQgdG8gYW5vdGhlciBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9sZEVsZW1lbnQgVGhlIG9sZCBlbGVtZW50LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbmV3RWxlbWVudCBUaGUgbmV3IGVsZW1lbnQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5cbmZ1bmN0aW9uIHN3YXBDYWxsYmFja3Mob2xkRWxlbWVudCwgbmV3RWxlbWVudCkge1xuICB2YXIgcGxheWVyQ2FsbGJhY2tzID0gY2FsbGJhY2tNYXAuZ2V0KG9sZEVsZW1lbnQpO1xuICBjYWxsYmFja01hcC5zZXQobmV3RWxlbWVudCwgcGxheWVyQ2FsbGJhY2tzKTtcbiAgY2FsbGJhY2tNYXAuZGVsZXRlKG9sZEVsZW1lbnQpO1xufVxuXG4vKipcbiAqIEBtb2R1bGUgbGliL2VtYmVkXG4gKi9cbnZhciBvRW1iZWRQYXJhbWV0ZXJzID0gWydhdXRvcGF1c2UnLCAnYXV0b3BsYXknLCAnYmFja2dyb3VuZCcsICdieWxpbmUnLCAnY29sb3InLCAnaGVpZ2h0JywgJ2lkJywgJ2xvb3AnLCAnbWF4aGVpZ2h0JywgJ21heHdpZHRoJywgJ211dGVkJywgJ3BsYXlzaW5saW5lJywgJ3BvcnRyYWl0JywgJ3Jlc3BvbnNpdmUnLCAnc3BlZWQnLCAndGl0bGUnLCAndHJhbnNwYXJlbnQnLCAndXJsJywgJ3dpZHRoJ107XG4vKipcbiAqIEdldCB0aGUgJ2RhdGEtdmltZW8nLXByZWZpeGVkIGF0dHJpYnV0ZXMgZnJvbSBhbiBlbGVtZW50IGFzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IFtkZWZhdWx0cz17fV0gVGhlIGRlZmF1bHQgdmFsdWVzIHRvIHVzZS5cbiAqIEByZXR1cm4ge09iamVjdDxzdHJpbmcsIHN0cmluZz59XG4gKi9cblxuZnVuY3Rpb24gZ2V0T0VtYmVkUGFyYW1ldGVycyhlbGVtZW50KSB7XG4gIHZhciBkZWZhdWx0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBvRW1iZWRQYXJhbWV0ZXJzLnJlZHVjZShmdW5jdGlvbiAocGFyYW1zLCBwYXJhbSkge1xuICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS12aW1lby1cIi5jb25jYXQocGFyYW0pKTtcblxuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHBhcmFtc1twYXJhbV0gPSB2YWx1ZSA9PT0gJycgPyAxIDogdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfSwgZGVmYXVsdHMpO1xufVxuLyoqXG4gKiBDcmVhdGUgYW4gZW1iZWQgZnJvbSBvRW1iZWQgZGF0YSBpbnNpZGUgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgb0VtYmVkIGRhdGEuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHB1dCB0aGUgaWZyYW1lIGluLlxuICogQHJldHVybiB7SFRNTElGcmFtZUVsZW1lbnR9IFRoZSBpZnJhbWUgZW1iZWQuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRW1iZWQoX3JlZiwgZWxlbWVudCkge1xuICB2YXIgaHRtbCA9IF9yZWYuaHRtbDtcblxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbiBlbGVtZW50IG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aW1lby1pbml0aWFsaXplZCcpICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG4gIH1cblxuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmltZW8taW5pdGlhbGl6ZWQnLCAndHJ1ZScpO1xuICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbn1cbi8qKlxuICogTWFrZSBhbiBvRW1iZWQgY2FsbCBmb3IgdGhlIHNwZWNpZmllZCBVUkwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZpZGVvVXJsIFRoZSB2aW1lby5jb20gdXJsIGZvciB0aGUgdmlkZW8uXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gUGFyYW1ldGVycyB0byBwYXNzIHRvIG9FbWJlZC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5cbmZ1bmN0aW9uIGdldE9FbWJlZERhdGEodmlkZW9VcmwpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBlbGVtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFpc1ZpbWVvVXJsKHZpZGVvVXJsKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlxcdTIwMUNcIi5jb25jYXQodmlkZW9VcmwsIFwiXFx1MjAxRCBpcyBub3QgYSB2aW1lby5jb20gdXJsLlwiKSk7XG4gICAgfVxuXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHZpZGVvVXJsKSwgXCImZG9tYWluPVwiKS5jb25jYXQod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcblxuICAgIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgdXJsICs9IFwiJlwiLmNvbmNhdChwYXJhbSwgXCI9XCIpLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW3BhcmFtXSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB4aHIgPSAnWERvbWFpblJlcXVlc3QnIGluIHdpbmRvdyA/IG5ldyBYRG9tYWluUmVxdWVzdCgpIDogbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG5cbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKFwiXFx1MjAxQ1wiLmNvbmNhdCh2aWRlb1VybCwgXCJcXHUyMDFEIHdhcyBub3QgZm91bmQuXCIpKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKFwiXFx1MjAxQ1wiLmNvbmNhdCh2aWRlb1VybCwgXCJcXHUyMDFEIGlzIG5vdCBlbWJlZGRhYmxlLlwiKSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTsgLy8gQ2hlY2sgYXBpIHJlc3BvbnNlIGZvciA0MDMgb24gb2VtYmVkXG5cbiAgICAgICAgaWYgKGpzb24uZG9tYWluX3N0YXR1c19jb2RlID09PSA0MDMpIHtcbiAgICAgICAgICAvLyBXZSBzdGlsbCB3YW50IHRvIGNyZWF0ZSB0aGUgZW1iZWQgdG8gZ2l2ZSB1c2VycyB2aXN1YWwgZmVlZGJhY2tcbiAgICAgICAgICBjcmVhdGVFbWJlZChqc29uLCBlbGVtZW50KTtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiXFx1MjAxQ1wiLmNvbmNhdCh2aWRlb1VybCwgXCJcXHUyMDFEIGlzIG5vdCBlbWJlZGRhYmxlLlwiKSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoanNvbik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzID8gXCIgKFwiLmNvbmNhdCh4aHIuc3RhdHVzLCBcIilcIikgOiAnJztcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIGVtYmVkIGNvZGUgZnJvbSBWaW1lb1wiLmNvbmNhdChzdGF0dXMsIFwiLlwiKSkpO1xuICAgIH07XG5cbiAgICB4aHIuc2VuZCgpO1xuICB9KTtcbn1cbi8qKlxuICogSW5pdGlhbGl6ZSBhbGwgZW1iZWRzIHdpdGhpbiBhIHNwZWNpZmljIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbcGFyZW50PWRvY3VtZW50XSBUaGUgcGFyZW50IGVsZW1lbnQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5cbmZ1bmN0aW9uIGluaXRpYWxpemVFbWJlZHMoKSB7XG4gIHZhciBwYXJlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGRvY3VtZW50O1xuICB2YXIgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12aW1lby1pZF0sIFtkYXRhLXZpbWVvLXVybF0nKSk7XG5cbiAgdmFyIGhhbmRsZUVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAoJ2NvbnNvbGUnIGluIHdpbmRvdyAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGNyZWF0aW5nIGFuIGVtYmVkOiBcIi5jb25jYXQoZXJyb3IpKTtcbiAgICB9XG4gIH07XG5cbiAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBTa2lwIGFueSB0aGF0IGhhdmUgZGF0YS12aW1lby1kZWZlclxuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpbWVvLWRlZmVyJykgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyYW1zID0gZ2V0T0VtYmVkUGFyYW1ldGVycyhlbGVtZW50KTtcbiAgICAgIHZhciB1cmwgPSBnZXRWaW1lb1VybChwYXJhbXMpO1xuICAgICAgZ2V0T0VtYmVkRGF0YSh1cmwsIHBhcmFtcywgZWxlbWVudCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRW1iZWQoZGF0YSwgZWxlbWVudCk7XG4gICAgICB9KS5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGhhbmRsZUVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBSZXNpemUgZW1iZWRzIHdoZW4gbWVzc2FnZWQgYnkgdGhlIHBsYXllci5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbcGFyZW50PWRvY3VtZW50XSBUaGUgcGFyZW50IGVsZW1lbnQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5cbmZ1bmN0aW9uIHJlc2l6ZUVtYmVkcygpIHtcbiAgdmFyIHBhcmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZG9jdW1lbnQ7XG5cbiAgdmFyIG9uTWVzc2FnZSA9IGZ1bmN0aW9uIG9uTWVzc2FnZShldmVudCkge1xuICAgIGlmICghaXNWaW1lb1VybChldmVudC5vcmlnaW4pKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyAnc3BhY2VjaGFuZ2UnIGlzIGZpcmVkIG9ubHkgb24gZW1iZWRzIHdpdGggY2FyZHNcblxuXG4gICAgaWYgKCFldmVudC5kYXRhIHx8IGV2ZW50LmRhdGEuZXZlbnQgIT09ICdzcGFjZWNoYW5nZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaWZyYW1lcyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdpZnJhbWUnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlmcmFtZXNbaV0uY29udGVudFdpbmRvdyAhPT0gZXZlbnQuc291cmNlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSAvLyBDaGFuZ2UgcGFkZGluZy1ib3R0b20gb2YgdGhlIGVuY2xvc2luZyBkaXYgdG8gYWNjb21tb2RhdGVcbiAgICAgIC8vIGNhcmQgY2Fyb3VzZWwgd2l0aG91dCBkaXN0b3J0aW5nIGFzcGVjdCByYXRpb1xuXG5cbiAgICAgIHZhciBzcGFjZSA9IGlmcmFtZXNbaV0ucGFyZW50RWxlbWVudDtcbiAgICAgIHNwYWNlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIlwiLmNvbmNhdChldmVudC5kYXRhLmRhdGFbMF0uYm90dG9tLCBcInB4XCIpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAod2luZG93LmF0dGFjaEV2ZW50KSB7XG4gICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbm1lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICB9XG59XG5cbi8qKlxuICogQG1vZHVsZSBsaWIvcG9zdG1lc3NhZ2VcbiAqL1xuLyoqXG4gKiBQYXJzZSBhIG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBwb3N0TWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGEgVGhlIGRhdGEgcmVjZWl2ZWQgZnJvbSBwb3N0TWVzc2FnZS5cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZU1lc3NhZ2VEYXRhKGRhdGEpIHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4vKipcbiAqIFBvc3QgYSBtZXNzYWdlIHRvIHRoZSBzcGVjaWZpZWQgdGFyZ2V0LlxuICpcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgVGhlIHBsYXllciBvYmplY3QgdG8gdXNlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBUaGUgQVBJIG1ldGhvZCB0byBjYWxsLlxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBUaGUgcGFyYW1ldGVycyB0byBzZW5kIHRvIHRoZSBwbGF5ZXIuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5cbmZ1bmN0aW9uIHBvc3RNZXNzYWdlKHBsYXllciwgbWV0aG9kLCBwYXJhbXMpIHtcbiAgaWYgKCFwbGF5ZXIuZWxlbWVudC5jb250ZW50V2luZG93IHx8ICFwbGF5ZXIuZWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgbWV0aG9kOiBtZXRob2RcbiAgfTtcblxuICBpZiAocGFyYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICBtZXNzYWdlLnZhbHVlID0gcGFyYW1zO1xuICB9IC8vIElFIDggYW5kIDkgZG8gbm90IHN1cHBvcnQgcGFzc2luZyBtZXNzYWdlcywgc28gc3RyaW5naWZ5IHRoZW1cblxuXG4gIHZhciBpZVZlcnNpb24gPSBwYXJzZUZsb2F0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9eLiptc2llIChcXGQrKS4qJC8sICckMScpKTtcblxuICBpZiAoaWVWZXJzaW9uID49IDggJiYgaWVWZXJzaW9uIDwgMTApIHtcbiAgICBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG4gIH1cblxuICBwbGF5ZXIuZWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHBsYXllci5vcmlnaW4pO1xufVxuLyoqXG4gKiBQYXJzZSB0aGUgZGF0YSByZWNlaXZlZCBmcm9tIGEgbWVzc2FnZSBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIFRoZSBwbGF5ZXIgdGhhdCByZWNlaXZlZCB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7KE9iamVjdHxzdHJpbmcpfSBkYXRhIFRoZSBtZXNzYWdlIGRhdGEuIFN0cmluZ3Mgd2lsbCBiZSBwYXJzZWQgaW50byBKU09OLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuXG5mdW5jdGlvbiBwcm9jZXNzRGF0YShwbGF5ZXIsIGRhdGEpIHtcbiAgZGF0YSA9IHBhcnNlTWVzc2FnZURhdGEoZGF0YSk7XG4gIHZhciBjYWxsYmFja3MgPSBbXTtcbiAgdmFyIHBhcmFtO1xuXG4gIGlmIChkYXRhLmV2ZW50KSB7XG4gICAgaWYgKGRhdGEuZXZlbnQgPT09ICdlcnJvcicpIHtcbiAgICAgIHZhciBwcm9taXNlcyA9IGdldENhbGxiYWNrcyhwbGF5ZXIsIGRhdGEuZGF0YS5tZXRob2QpO1xuICAgICAgcHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoZGF0YS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICBlcnJvci5uYW1lID0gZGF0YS5kYXRhLm5hbWU7XG4gICAgICAgIHByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmVtb3ZlQ2FsbGJhY2socGxheWVyLCBkYXRhLmRhdGEubWV0aG9kLCBwcm9taXNlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhbGxiYWNrcyA9IGdldENhbGxiYWNrcyhwbGF5ZXIsIFwiZXZlbnQ6XCIuY29uY2F0KGRhdGEuZXZlbnQpKTtcbiAgICBwYXJhbSA9IGRhdGEuZGF0YTtcbiAgfSBlbHNlIGlmIChkYXRhLm1ldGhvZCkge1xuICAgIHZhciBjYWxsYmFjayA9IHNoaWZ0Q2FsbGJhY2tzKHBsYXllciwgZGF0YS5tZXRob2QpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICBwYXJhbSA9IGRhdGEudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChwbGF5ZXIsIHBhcmFtKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjay5yZXNvbHZlKHBhcmFtKTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gZW1wdHlcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgcGxheWVyTWFwID0gbmV3IFdlYWtNYXAoKTtcbnZhciByZWFkeU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbnZhciBQbGF5ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ3JlYXRlIGEgUGxheWVyLlxuICAgKlxuICAgKiBAcGFyYW0geyhIVE1MSUZyYW1lRWxlbWVudHxIVE1MRWxlbWVudHxzdHJpbmd8alF1ZXJ5KX0gZWxlbWVudCBBIHJlZmVyZW5jZSB0byB0aGUgVmltZW9cbiAgICogICAgICAgIHBsYXllciBpZnJhbWUsIGFuZCBpZCwgb3IgYSBqUXVlcnkgb2JqZWN0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIG9FbWJlZCBwYXJhbWV0ZXJzIHRvIHVzZSB3aGVuIGNyZWF0aW5nIGFuIGVtYmVkIGluIHRoZSBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtQbGF5ZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBQbGF5ZXIoZWxlbWVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGxheWVyKTtcblxuICAgIC8qIGdsb2JhbCBqUXVlcnkgKi9cbiAgICBpZiAod2luZG93LmpRdWVyeSAmJiBlbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICBpZiAoZWxlbWVudC5sZW5ndGggPiAxICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0EgalF1ZXJ5IG9iamVjdCB3aXRoIG11bHRpcGxlIGVsZW1lbnRzIHdhcyBwYXNzZWQsIHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50LicpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudFswXTtcbiAgICB9IC8vIEZpbmQgYW4gZWxlbWVudCBieSBJRFxuXG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcbiAgICB9IC8vIE5vdCBhbiBlbGVtZW50IVxuXG5cbiAgICBpZiAoIWlzRG9tRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBlaXRoZXIgYSB2YWxpZCBlbGVtZW50IG9yIGEgdmFsaWQgaWQuJyk7XG4gICAgfSAvLyBBbHJlYWR5IGluaXRpYWxpemVkIGFuIGVtYmVkIGluIHRoaXMgZGl2LCBzbyBncmFiIHRoZSBpZnJhbWVcblxuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgIT09ICdJRlJBTUUnKSB7XG4gICAgICB2YXIgaWZyYW1lID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcblxuICAgICAgaWYgKGlmcmFtZSkge1xuICAgICAgICBlbGVtZW50ID0gaWZyYW1lO1xuICAgICAgfVxuICAgIH0gLy8gaWZyYW1lIHVybCBpcyBub3QgYSBWaW1lbyB1cmxcblxuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdJRlJBTUUnICYmICFpc1ZpbWVvVXJsKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzcmMnKSB8fCAnJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHBsYXllciBlbGVtZW50IHBhc3NlZCBpc27igJl0IGEgVmltZW8gZW1iZWQuJyk7XG4gICAgfSAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgcGxheWVyIG9iamVjdCBpbiB0aGUgbWFwLCByZXR1cm4gdGhhdFxuXG5cbiAgICBpZiAocGxheWVyTWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuIHBsYXllck1hcC5nZXQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9yaWdpbiA9ICcqJztcbiAgICB2YXIgcmVhZHlQcm9taXNlID0gbmV3IG5wb19zcmMoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIG9uTWVzc2FnZSA9IGZ1bmN0aW9uIG9uTWVzc2FnZShldmVudCkge1xuICAgICAgICBpZiAoIWlzVmltZW9VcmwoZXZlbnQub3JpZ2luKSB8fCBfdGhpcy5lbGVtZW50LmNvbnRlbnRXaW5kb3cgIT09IGV2ZW50LnNvdXJjZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5vcmlnaW4gPT09ICcqJykge1xuICAgICAgICAgIF90aGlzLm9yaWdpbiA9IGV2ZW50Lm9yaWdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhID0gcGFyc2VNZXNzYWdlRGF0YShldmVudC5kYXRhKTtcbiAgICAgICAgdmFyIGlzUmVhZHlFdmVudCA9ICdldmVudCcgaW4gZGF0YSAmJiBkYXRhLmV2ZW50ID09PSAncmVhZHknO1xuICAgICAgICB2YXIgaXNQaW5nUmVzcG9uc2UgPSAnbWV0aG9kJyBpbiBkYXRhICYmIGRhdGEubWV0aG9kID09PSAncGluZyc7XG5cbiAgICAgICAgaWYgKGlzUmVhZHlFdmVudCB8fCBpc1BpbmdSZXNwb25zZSkge1xuICAgICAgICAgIF90aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXJlYWR5JywgJ3RydWUnKTtcblxuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwcm9jZXNzRGF0YShfdGhpcywgZGF0YSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LmF0dGFjaEV2ZW50KSB7XG4gICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25tZXNzYWdlJywgb25NZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLmVsZW1lbnQubm9kZU5hbWUgIT09ICdJRlJBTUUnKSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSBnZXRPRW1iZWRQYXJhbWV0ZXJzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB2YXIgdXJsID0gZ2V0VmltZW9VcmwocGFyYW1zKTtcbiAgICAgICAgZ2V0T0VtYmVkRGF0YSh1cmwsIHBhcmFtcywgZWxlbWVudCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHZhciBpZnJhbWUgPSBjcmVhdGVFbWJlZChkYXRhLCBlbGVtZW50KTsgLy8gT3ZlcndyaXRlIGVsZW1lbnQgd2l0aCB0aGUgbmV3IGlmcmFtZSxcbiAgICAgICAgICAvLyBidXQgc3RvcmUgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBlbGVtZW50XG5cbiAgICAgICAgICBfdGhpcy5lbGVtZW50ID0gaWZyYW1lO1xuICAgICAgICAgIF90aGlzLl9vcmlnaW5hbEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgIHN3YXBDYWxsYmFja3MoZWxlbWVudCwgaWZyYW1lKTtcbiAgICAgICAgICBwbGF5ZXJNYXAuc2V0KF90aGlzLmVsZW1lbnQsIF90aGlzKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pOyAvLyBTdG9yZSBhIGNvcHkgb2YgdGhpcyBQbGF5ZXIgaW4gdGhlIG1hcFxuXG4gICAgcmVhZHlNYXAuc2V0KHRoaXMsIHJlYWR5UHJvbWlzZSk7XG4gICAgcGxheWVyTWFwLnNldCh0aGlzLmVsZW1lbnQsIHRoaXMpOyAvLyBTZW5kIGEgcGluZyB0byB0aGUgaWZyYW1lIHNvIHRoZSByZWFkeSBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgaWZcbiAgICAvLyB0aGUgcGxheWVyIGlzIGFscmVhZHkgcmVhZHkuXG5cbiAgICBpZiAodGhpcy5lbGVtZW50Lm5vZGVOYW1lID09PSAnSUZSQU1FJykge1xuICAgICAgcG9zdE1lc3NhZ2UodGhpcywgJ3BpbmcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogR2V0IGEgcHJvbWlzZSBmb3IgYSBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBBUEkgbWV0aG9kIHRvIGNhbGwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbYXJncz17fV0gQXJndW1lbnRzIHRvIHNlbmQgdmlhIHBvc3RNZXNzYWdlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhQbGF5ZXIsIFt7XG4gICAga2V5OiBcImNhbGxNZXRob2RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsbE1ldGhvZChuYW1lKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgcmV0dXJuIG5ldyBucG9fc3JjKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gV2UgYXJlIHN0b3JpbmcgdGhlIHJlc29sdmUvcmVqZWN0IGhhbmRsZXJzIHRvIGNhbGwgbGF0ZXIsIHNvIHdlXG4gICAgICAgIC8vIGNhbuKAmXQgcmV0dXJuIGhlcmUuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL2Fsd2F5cy1yZXR1cm5cbiAgICAgICAgcmV0dXJuIF90aGlzMi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0b3JlQ2FsbGJhY2soX3RoaXMyLCBuYW1lLCB7XG4gICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgcmVqZWN0OiByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwb3N0TWVzc2FnZShfdGhpczIsIG5hbWUsIGFyZ3MpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBwcm9taXNlIGZvciB0aGUgdmFsdWUgb2YgYSBwbGF5ZXIgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgcHJvcGVydHkgbmFtZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gbmV3IG5wb19zcmMoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBuYW1lID0gZ2V0TWV0aG9kTmFtZShuYW1lLCAnZ2V0Jyk7IC8vIFdlIGFyZSBzdG9yaW5nIHRoZSByZXNvbHZlL3JlamVjdCBoYW5kbGVycyB0byBjYWxsIGxhdGVyLCBzbyB3ZVxuICAgICAgICAvLyBjYW7igJl0IHJldHVybiBoZXJlLlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9hbHdheXMtcmV0dXJuXG5cbiAgICAgICAgcmV0dXJuIF90aGlzMy5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0b3JlQ2FsbGJhY2soX3RoaXMzLCBuYW1lLCB7XG4gICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgcmVqZWN0OiByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwb3N0TWVzc2FnZShfdGhpczMsIG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBwcm9taXNlIGZvciBzZXR0aW5nIHRoZSB2YWx1ZSBvZiBhIHBsYXllciBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBBUEkgbWV0aG9kIHRvIGNhbGwuXG4gICAgICogQHBhcmFtIHttaXhlZH0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBucG9fc3JjLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICBuYW1lID0gZ2V0TWV0aG9kTmFtZShuYW1lLCAnc2V0Jyk7XG5cbiAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZXJlIG11c3QgYmUgYSB2YWx1ZSB0byBzZXQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXM0LnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBucG9fc3JjKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHN0b3JlQ2FsbGJhY2soX3RoaXM0LCBuYW1lLCB7XG4gICAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvc3RNZXNzYWdlKF90aGlzNCwgbmFtZSwgdmFsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LiBXaWxsIGNhbGwgdGhlXG4gICAgICogY2FsbGJhY2sgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIsIGBkYXRhYCwgdGhhdCBjb250YWlucyB0aGUgZGF0YSBmb3JcbiAgICAgKiB0aGF0IGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZXZlbnQgZmlyZXMuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmICghZXZlbnROYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gZXZlbnQgbmFtZS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgY2FsbGJhY2sgZnVuY3Rpb24uJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbGxiYWNrcyA9IGdldENhbGxiYWNrcyh0aGlzLCBcImV2ZW50OlwiLmNvbmNhdChldmVudE5hbWUpKTtcblxuICAgICAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5jYWxsTWV0aG9kKCdhZGRFdmVudExpc3RlbmVyJywgZXZlbnROYW1lKS5jYXRjaChmdW5jdGlvbiAoKSB7Ly8gSWdub3JlIHRoZSBlcnJvci4gVGhlcmUgd2lsbCBiZSBhbiBlcnJvciBldmVudCBmaXJlZCB0aGF0XG4gICAgICAgICAgLy8gd2lsbCB0cmlnZ2VyIHRoZSBlcnJvciBjYWxsYmFjayBpZiB0aGV5IGFyZSBsaXN0ZW5pbmcuXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzdG9yZUNhbGxiYWNrKHRoaXMsIFwiZXZlbnQ6XCIuY29uY2F0KGV2ZW50TmFtZSksIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LiBXaWxsIHJlbW92ZSBhbGxcbiAgICAgKiBsaXN0ZW5lcnMgZm9yIHRoYXQgZXZlbnQgaWYgYSBgY2FsbGJhY2tgIGlzbuKAmXQgcGFzc2VkLCBvciBvbmx5IHRoYXRcbiAgICAgKiBzcGVjaWZpYyBjYWxsYmFjayBpZiBpdCBpcyBwYXNzZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIFRoZSBzcGVjaWZpYyBjYWxsYmFjayB0byByZW1vdmUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBldmVudCBuYW1lLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXN0Q2FsbGJhY2sgPSByZW1vdmVDYWxsYmFjayh0aGlzLCBcImV2ZW50OlwiLmNvbmNhdChldmVudE5hbWUpLCBjYWxsYmFjayk7IC8vIElmIHRoZXJlIGFyZSBubyBjYWxsYmFja3MgbGVmdCwgcmVtb3ZlIHRoZSBsaXN0ZW5lclxuXG4gICAgICBpZiAobGFzdENhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2FsbE1ldGhvZCgncmVtb3ZlRXZlbnRMaXN0ZW5lcicsIGV2ZW50TmFtZSkuY2F0Y2goZnVuY3Rpb24gKGUpIHsvLyBJZ25vcmUgdGhlIGVycm9yLiBUaGVyZSB3aWxsIGJlIGFuIGVycm9yIGV2ZW50IGZpcmVkIHRoYXRcbiAgICAgICAgICAvLyB3aWxsIHRyaWdnZXIgdGhlIGVycm9yIGNhbGxiYWNrIGlmIHRoZXkgYXJlIGxpc3RlbmluZy5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBsb2FkIGEgbmV3IHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgTG9hZFZpZGVvUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtudW1iZXJ9IFRoZSB2aWRlbyB3aXRoIHRoaXMgaWQgc3VjY2Vzc2Z1bGx5IGxvYWRlZC5cbiAgICAgKiBAcmVqZWN0IHtUeXBlRXJyb3J9IFRoZSBpZCB3YXMgbm90IGEgbnVtYmVyLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogTG9hZCBhIG5ldyB2aWRlbyBpbnRvIHRoaXMgZW1iZWQuIFRoZSBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgaWZcbiAgICAgKiB0aGUgdmlkZW8gaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCwgb3IgaXQgd2lsbCBiZSByZWplY3RlZCBpZiBpdCBjb3VsZFxuICAgICAqIG5vdCBiZSBsb2FkZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWQgVGhlIGlkIG9mIHRoZSB2aWRlby5cbiAgICAgKiBAcmV0dXJuIHtMb2FkVmlkZW9Qcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFZpZGVvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRWaWRlbyhpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbE1ldGhvZCgnbG9hZFZpZGVvJywgaWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gcGVyZm9ybSBhbiBhY3Rpb24gd2hlbiB0aGUgUGxheWVyIGlzIHJlYWR5LlxuICAgICAqXG4gICAgICogQHRvZG8gZG9jdW1lbnQgZXJyb3JzXG4gICAgICogQHByb21pc2UgTG9hZFZpZGVvUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHt2b2lkfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBhIGZ1bmN0aW9uIHdoZW4gdGhlIHBsYXllciBpZnJhbWUgaGFzIGluaXRpYWxpemVkLiBZb3UgZG8gbm90XG4gICAgICogbmVlZCB0byB3YWl0IGZvciBgcmVhZHlgIHRvIHRyaWdnZXIgdG8gYmVnaW4gYWRkaW5nIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqIG9yIGNhbGxpbmcgb3RoZXIgbWV0aG9kcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1JlYWR5UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlYWR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgdmFyIHJlYWR5UHJvbWlzZSA9IHJlYWR5TWFwLmdldCh0aGlzKSB8fCBuZXcgbnBvX3NyYyhmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1Vua25vd24gcGxheWVyLiBQcm9iYWJseSB1bmxvYWRlZC4nKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBucG9fc3JjLnJlc29sdmUocmVhZHlQcm9taXNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGFkZCBhIGN1ZSBwb2ludCB0byB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHByb21pc2UgQWRkQ3VlUG9pbnRQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge3N0cmluZ30gVGhlIGlkIG9mIHRoZSBjdWUgcG9pbnQgdG8gdXNlIGZvciByZW1vdmVDdWVQb2ludC5cbiAgICAgKiBAcmVqZWN0IHtSYW5nZUVycm9yfSB0aGUgdGltZSB3YXMgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIHRoZVxuICAgICAqICAgICAgICAgdmlkZW/igJlzIGR1cmF0aW9uLlxuICAgICAqIEByZWplY3Qge1Vuc3VwcG9ydGVkRXJyb3J9IEN1ZSBwb2ludHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0aGUgY3VycmVudFxuICAgICAqICAgICAgICAgcGxheWVyIG9yIGJyb3dzZXIuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBjdWUgcG9pbnQgdG8gdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIFRoZSB0aW1lIGZvciB0aGUgY3VlIHBvaW50LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbZGF0YV0gQXJiaXRyYXJ5IGRhdGEgdG8gYmUgcmV0dXJuZWQgd2l0aCB0aGUgY3VlIHBvaW50LlxuICAgICAqIEByZXR1cm4ge0FkZEN1ZVBvaW50UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEN1ZVBvaW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEN1ZVBvaW50KHRpbWUpIHtcbiAgICAgIHZhciBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ2FkZEN1ZVBvaW50Jywge1xuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIHJlbW92ZSBhIGN1ZSBwb2ludCBmcm9tIHRoZSBwbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBBZGRDdWVQb2ludFByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7c3RyaW5nfSBUaGUgaWQgb2YgdGhlIGN1ZSBwb2ludCB0aGF0IHdhcyByZW1vdmVkLlxuICAgICAqIEByZWplY3Qge0ludmFsaWRDdWVQb2ludH0gVGhlIGN1ZSBwb2ludCB3aXRoIHRoZSBzcGVjaWZpZWQgaWQgd2FzIG5vdFxuICAgICAqICAgICAgICAgZm91bmQuXG4gICAgICogQHJlamVjdCB7VW5zdXBwb3J0ZWRFcnJvcn0gQ3VlIHBvaW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICogICAgICAgICBwbGF5ZXIgb3IgYnJvd3Nlci5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGN1ZSBwb2ludCBmcm9tIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIGN1ZSBwb2ludCB0byByZW1vdmUuXG4gICAgICogQHJldHVybiB7UmVtb3ZlQ3VlUG9pbnRQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ3VlUG9pbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ3VlUG9pbnQoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ3JlbW92ZUN1ZVBvaW50JywgaWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHJlcHJlc2VudGF0aW9uIG9mIGEgdGV4dCB0cmFjayBvbiBhIHZpZGVvLlxuICAgICAqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gVmltZW9UZXh0VHJhY2tcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIElTTyBsYW5ndWFnZSBjb2RlLlxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBraW5kIFRoZSBraW5kIG9mIHRyYWNrIGl0IGlzIChjYXB0aW9ucyBvciBzdWJ0aXRsZXMpLlxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgaHVtYW7igJByZWFkYWJsZSBsYWJlbCBmb3IgdGhlIHRyYWNrLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGVuYWJsZSBhIHRleHQgdHJhY2suXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBFbmFibGVUZXh0VHJhY2tQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge1ZpbWVvVGV4dFRyYWNrfSBUaGUgdGV4dCB0cmFjayB0aGF0IHdhcyBlbmFibGVkLlxuICAgICAqIEByZWplY3Qge0ludmFsaWRUcmFja0xhbmd1YWdlRXJyb3J9IE5vIHRyYWNrIHdhcyBhdmFpbGFibGUgd2l0aCB0aGVcbiAgICAgKiAgICAgICAgIHNwZWNpZmllZCBsYW5ndWFnZS5cbiAgICAgKiBAcmVqZWN0IHtJbnZhbGlkVHJhY2tFcnJvcn0gTm8gdHJhY2sgd2FzIGF2YWlsYWJsZSB3aXRoIHRoZSBzcGVjaWZpZWRcbiAgICAgKiAgICAgICAgIGxhbmd1YWdlIGFuZCBraW5kLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoZSB0ZXh0IHRyYWNrIHdpdGggdGhlIHNwZWNpZmllZCBsYW5ndWFnZSwgYW5kIG9wdGlvbmFsbHkgdGhlXG4gICAgICogc3BlY2lmaWVkIGtpbmQgKGNhcHRpb25zIG9yIHN1YnRpdGxlcykuXG4gICAgICpcbiAgICAgKiBXaGVuIHNldCB2aWEgdGhlIEFQSSwgdGhlIHRyYWNrIGxhbmd1YWdlIHdpbGwgbm90IGNoYW5nZSB0aGUgdmlld2Vy4oCZc1xuICAgICAqIHN0b3JlZCBwcmVmZXJlbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSB0d2/igJBsZXR0ZXIgbGFuZ3VhZ2UgY29kZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2tpbmRdIFRoZSBraW5kIG9mIHRyYWNrIHRvIGVuYWJsZSAoY2FwdGlvbnMgb3Igc3VidGl0bGVzKS5cbiAgICAgKiBAcmV0dXJuIHtFbmFibGVUZXh0VHJhY2tQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW5hYmxlVGV4dFRyYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZVRleHRUcmFjayhsYW5ndWFnZSwga2luZCkge1xuICAgICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgbGFuZ3VhZ2UuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ2VuYWJsZVRleHRUcmFjaycsIHtcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgICAgICBraW5kOiBraW5kXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGRpc2FibGUgdGhlIGFjdGl2ZSB0ZXh0IHRyYWNrLlxuICAgICAqXG4gICAgICogQHByb21pc2UgRGlzYWJsZVRleHRUcmFja1Byb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7dm9pZH0gVGhlIHRyYWNrIHdhcyBkaXNhYmxlZC5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgdGhlIGN1cnJlbnRseS1hY3RpdmUgdGV4dCB0cmFjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Rpc2FibGVUZXh0VHJhY2tQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzYWJsZVRleHRUcmFja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlVGV4dFRyYWNrKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbE1ldGhvZCgnZGlzYWJsZVRleHRUcmFjaycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gcGF1c2UgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgUGF1c2VQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge3ZvaWR9IFRoZSB2aWRlbyB3YXMgcGF1c2VkLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUGF1c2UgdGhlIHZpZGVvIGlmIGl04oCZcyBwbGF5aW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiB7UGF1c2VQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicGF1c2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxsTWV0aG9kKCdwYXVzZScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gcGxheSB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBQbGF5UHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHt2b2lkfSBUaGUgdmlkZW8gd2FzIHBsYXllZC5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFBsYXkgdGhlIHZpZGVvIGlmIGl04oCZcyBwYXVzZWQuICoqTm90ZToqKiBvbiBpT1MgYW5kIHNvbWUgb3RoZXJcbiAgICAgKiBtb2JpbGUgZGV2aWNlcywgeW91IGNhbm5vdCBwcm9ncmFtbWF0aWNhbGx5IHRyaWdnZXIgcGxheS4gT25jZSB0aGVcbiAgICAgKiB2aWV3ZXIgaGFzIHRhcHBlZCBvbiB0aGUgcGxheSBidXR0b24gaW4gdGhlIHBsYXllciwgaG93ZXZlciwgeW91XG4gICAgICogd2lsbCBiZSBhYmxlIHRvIHVzZSB0aGlzIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7UGxheVByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwbGF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxsTWV0aG9kKCdwbGF5Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byB1bmxvYWQgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgVW5sb2FkUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHt2b2lkfSBUaGUgdmlkZW8gd2FzIHVubG9hZGVkLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBwbGF5ZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtVbmxvYWRQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5sb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVubG9hZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ3VubG9hZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhbnVwIHRoZSBwbGF5ZXIgYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSBET01cbiAgICAgKlxuICAgICAqIEl0IHdvbid0IGJlIHVzYWJsZSBhbmQgYSBuZXcgb25lIHNob3VsZCBiZSBjb25zdHJ1Y3RlZFxuICAgICAqICBpbiBvcmRlciB0byBkbyBhbnkgb3BlcmF0aW9ucy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyBucG9fc3JjKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHJlYWR5TWFwLmRlbGV0ZShfdGhpczUpO1xuICAgICAgICBwbGF5ZXJNYXAuZGVsZXRlKF90aGlzNS5lbGVtZW50KTtcblxuICAgICAgICBpZiAoX3RoaXM1Ll9vcmlnaW5hbEVsZW1lbnQpIHtcbiAgICAgICAgICBwbGF5ZXJNYXAuZGVsZXRlKF90aGlzNS5fb3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgICAgIF90aGlzNS5fb3JpZ2luYWxFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS12aW1lby1pbml0aWFsaXplZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzNS5lbGVtZW50ICYmIF90aGlzNS5lbGVtZW50Lm5vZGVOYW1lID09PSAnSUZSQU1FJykge1xuICAgICAgICAgIF90aGlzNS5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIGF1dG9wYXVzZSBiZWhhdmlvciBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRBdXRvcGF1c2VQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge2Jvb2xlYW59IFdoZXRoZXIgYXV0b3BhdXNlIGlzIHR1cm5lZCBvbiBvciBvZmYuXG4gICAgICogQHJlamVjdCB7VW5zdXBwb3J0ZWRFcnJvcn0gQXV0b3BhdXNlIGlzIG5vdCBzdXBwb3J0ZWQgd2l0aCB0aGUgY3VycmVudFxuICAgICAqICAgICAgICAgcGxheWVyIG9yIGJyb3dzZXIuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGF1dG9wYXVzZSBiZWhhdmlvciBmb3IgdGhpcyBwbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRBdXRvcGF1c2VQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXV0b3BhdXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEF1dG9wYXVzZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgnYXV0b3BhdXNlJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBzZXQgdGhlIGF1dG9wYXVzZSBiZWhhdmlvciBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBTZXRBdXRvcGF1c2VQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge2Jvb2xlYW59IFdoZXRoZXIgYXV0b3BhdXNlIGlzIHR1cm5lZCBvbiBvciBvZmYuXG4gICAgICogQHJlamVjdCB7VW5zdXBwb3J0ZWRFcnJvcn0gQXV0b3BhdXNlIGlzIG5vdCBzdXBwb3J0ZWQgd2l0aCB0aGUgY3VycmVudFxuICAgICAqICAgICAgICAgcGxheWVyIG9yIGJyb3dzZXIuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgYXV0b3BhdXNlIGJlaGF2aW9yIG9mIHRoaXMgcGxheWVyLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgd2hlbiBhbm90aGVyIHZpZGVvIGlzIHBsYXllZCBpbiB0aGUgc2FtZSBicm93c2VyLCB0aGlzXG4gICAgICogcGxheWVyIHdpbGwgYXV0b21hdGljYWxseSBwYXVzZS4gVW5sZXNzIHlvdSBoYXZlIGEgc3BlY2lmaWMgcmVhc29uXG4gICAgICogZm9yIGRvaW5nIHNvLCB3ZSByZWNvbW1lbmQgdGhhdCB5b3UgbGVhdmUgYXV0b3BhdXNlIHNldCB0byB0aGVcbiAgICAgKiBkZWZhdWx0IChgdHJ1ZWApLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBhdXRvcGF1c2VcbiAgICAgKiBAcmV0dXJuIHtTZXRBdXRvcGF1c2VQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0QXV0b3BhdXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEF1dG9wYXVzZShhdXRvcGF1c2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldCgnYXV0b3BhdXNlJywgYXV0b3BhdXNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgY29sb3Igb2YgdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldENvbG9yUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtzdHJpbmd9IFRoZSBoZXggY29sb3Igb2YgdGhlIHBsYXllci5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY29sb3IgZm9yIHRoaXMgcGxheWVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0Q29sb3JQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q29sb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29sb3IoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ2NvbG9yJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBzZXQgdGhlIGNvbG9yIG9mIHRoZSBwbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBTZXRDb2xvclByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7c3RyaW5nfSBUaGUgY29sb3Igd2FzIHN1Y2Nlc3NmdWxseSBzZXQuXG4gICAgICogQHJlamVjdCB7VHlwZUVycm9yfSBUaGUgc3RyaW5nIHdhcyBub3QgYSB2YWxpZCBoZXggb3IgcmdiIGNvbG9yLlxuICAgICAqIEByZWplY3Qge0NvbnRyYXN0RXJyb3J9IFRoZSBjb2xvciB3YXMgc2V0LCBidXQgdGhlIGNvbnRyYXN0IGlzXG4gICAgICogICAgICAgICBvdXRzaWRlIG9mIHRoZSBhY2NlcHRhYmxlIHJhbmdlLlxuICAgICAqIEByZWplY3Qge0VtYmVkU2V0dGluZ3NFcnJvcn0gVGhlIG93bmVyIG9mIHRoZSBwbGF5ZXIgaGFzIGNob3NlbiB0b1xuICAgICAqICAgICAgICAgdXNlIGEgc3BlY2lmaWMgY29sb3IuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNvbG9yIG9mIHRoaXMgcGxheWVyIHRvIGEgaGV4IG9yIHJnYiBzdHJpbmcuIFNldHRpbmcgdGhlXG4gICAgICogY29sb3IgbWF5IGZhaWwgaWYgdGhlIG93bmVyIG9mIHRoZSB2aWRlbyBoYXMgc2V0IHRoZWlyIGVtYmVkXG4gICAgICogcHJlZmVyZW5jZXMgdG8gZm9yY2UgYSBzcGVjaWZpYyBjb2xvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciBUaGUgaGV4IG9yIHJnYiBjb2xvciBzdHJpbmcgdG8gc2V0LlxuICAgICAqIEByZXR1cm4ge1NldENvbG9yUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldENvbG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoJ2NvbG9yJywgY29sb3IpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHJlcHJlc2VudGF0aW9uIG9mIGEgY3VlIHBvaW50LlxuICAgICAqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gVmltZW9DdWVQb2ludFxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aW1lIFRoZSB0aW1lIG9mIHRoZSBjdWUgcG9pbnQuXG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgcGFzc2VkIHdoZW4gYWRkaW5nIHRoZSBjdWUgcG9pbnQuXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGlkIFRoZSB1bmlxdWUgaWQgZm9yIHVzZSB3aXRoIHJlbW92ZUN1ZVBvaW50LlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgY3VlIHBvaW50cyBvZiBhIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0Q3VlUG9pbnRzUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtWaW1lb0N1ZVBvaW50W119IFRoZSBjdWUgcG9pbnRzIGFkZGVkIHRvIHRoZSB2aWRlby5cbiAgICAgKiBAcmVqZWN0IHtVbnN1cHBvcnRlZEVycm9yfSBDdWUgcG9pbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGhlIGN1cnJlbnRcbiAgICAgKiAgICAgICAgIHBsYXllciBvciBicm93c2VyLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IGFuIGFycmF5IG9mIHRoZSBjdWUgcG9pbnRzIGFkZGVkIHRvIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldEN1ZVBvaW50c1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRDdWVQb2ludHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VlUG9pbnRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdjdWVQb2ludHMnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgY3VycmVudCB0aW1lIG9mIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldEN1cnJlbnRUaW1lUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtudW1iZXJ9IFRoZSBjdXJyZW50IHRpbWUgaW4gc2Vjb25kcy5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvbiBpbiBzZWNvbmRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0Q3VycmVudFRpbWVQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q3VycmVudFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ2N1cnJlbnRUaW1lJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBzZXQgdGhlIGN1cnJlbnQgdGltZSBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBTZXRDdXJyZW50VGltZVByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgYWN0dWFsIGN1cnJlbnQgdGltZSB0aGF0IHdhcyBzZXQuXG4gICAgICogQHJlamVjdCB7UmFuZ2VFcnJvcn0gdGhlIHRpbWUgd2FzIGxlc3MgdGhhbiAwIG9yIGdyZWF0ZXIgdGhhbiB0aGVcbiAgICAgKiAgICAgICAgIHZpZGVv4oCZcyBkdXJhdGlvbi5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvbiBpbiBzZWNvbmRzLiBJZiB0aGUgcGxheWVyIHdhc1xuICAgICAqIHBhdXNlZCwgaXQgd2lsbCByZW1haW4gcGF1c2VkLiBMaWtld2lzZSwgaWYgdGhlIHBsYXllciB3YXMgcGxheWluZyxcbiAgICAgKiBpdCB3aWxsIHJlc3VtZSBwbGF5aW5nIG9uY2UgdGhlIHZpZGVvIGhhcyBidWZmZXJlZC5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gcHJvdmlkZSBhbiBhY2N1cmF0ZSB0aW1lIGFuZCB0aGUgcGxheWVyIHdpbGwgYXR0ZW1wdCB0byBzZWVrXG4gICAgICogdG8gYXMgY2xvc2UgdG8gdGhhdCB0aW1lIGFzIHBvc3NpYmxlLiBUaGUgZXhhY3QgdGltZSB3aWxsIGJlIHRoZVxuICAgICAqIGZ1bGZpbGxlZCB2YWx1ZSBvZiB0aGUgcHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50VGltZVxuICAgICAqIEByZXR1cm4ge1NldEN1cnJlbnRUaW1lUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldEN1cnJlbnRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEN1cnJlbnRUaW1lKGN1cnJlbnRUaW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoJ2N1cnJlbnRUaW1lJywgY3VycmVudFRpbWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBkdXJhdGlvbiBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXREdXJhdGlvblByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgZHVyYXRpb24gaW4gc2Vjb25kcy5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZHVyYXRpb24gb2YgdGhlIHZpZGVvIGluIHNlY29uZHMuIEl0IHdpbGwgYmUgcm91bmRlZCB0byB0aGVcbiAgICAgKiBuZWFyZXN0IHNlY29uZCBiZWZvcmUgcGxheWJhY2sgYmVnaW5zLCBhbmQgdG8gdGhlIG5lYXJlc3QgdGhvdXNhbmR0aFxuICAgICAqIG9mIGEgc2Vjb25kIGFmdGVyIHBsYXliYWNrIGJlZ2lucy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldER1cmF0aW9uUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldER1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdkdXJhdGlvbicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBlbmRlZCBzdGF0ZSBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRFbmRlZFByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIHZpZGVvIGhhcyBlbmRlZC5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZW5kZWQgc3RhdGUgb2YgdGhlIHZpZGVvLiBUaGUgdmlkZW8gaGFzIGVuZGVkIGlmXG4gICAgICogYGN1cnJlbnRUaW1lID09PSBkdXJhdGlvbmAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRFbmRlZFByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRFbmRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFbmRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgnZW5kZWQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgbG9vcCBzdGF0ZSBvZiB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0TG9vcFByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIHBsYXllciBpcyBzZXQgdG8gbG9vcC5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbG9vcCBzdGF0ZSBvZiB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0TG9vcFByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRMb29wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvb3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ2xvb3AnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIHNldCB0aGUgbG9vcCBzdGF0ZSBvZiB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHByb21pc2UgU2V0TG9vcFByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7Ym9vbGVhbn0gVGhlIGxvb3Agc3RhdGUgdGhhdCB3YXMgc2V0LlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBsb29wIHN0YXRlIG9mIHRoZSBwbGF5ZXIuIFdoZW4gc2V0IHRvIGB0cnVlYCwgdGhlIHBsYXllclxuICAgICAqIHdpbGwgc3RhcnQgb3ZlciBpbW1lZGlhdGVseSBvbmNlIHBsYXliYWNrIGVuZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3BcbiAgICAgKiBAcmV0dXJuIHtTZXRMb29wUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldExvb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TG9vcChsb29wKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoJ2xvb3AnLCBsb29wKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgcGF1c2VkIHN0YXRlIG9mIHRoZSBwbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRMb29wUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCB0aGUgdmlkZW8gaXMgcGF1c2VkLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBwYXVzZWQgc3RhdGUgb2YgdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldExvb3BQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGF1c2VkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhdXNlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgncGF1c2VkJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIHBsYXliYWNrIHJhdGUgb2YgdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldFBsYXliYWNrUmF0ZVByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgcGxheWJhY2sgcmF0ZSBvZiB0aGUgcGxheWVyIG9uIGEgc2NhbGUgZnJvbSAwLjUgdG8gMi5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcGxheWJhY2sgcmF0ZSBvZiB0aGUgcGxheWVyIG9uIGEgc2NhbGUgZnJvbSBgMC41YCB0byBgMmAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRQbGF5YmFja1JhdGVQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGxheWJhY2tSYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBsYXliYWNrUmF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgncGxheWJhY2tSYXRlJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBzZXQgdGhlIHBsYXliYWNrcmF0ZSBvZiB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHByb21pc2UgU2V0UGxheWJhY2tSYXRlUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtudW1iZXJ9IFRoZSBwbGF5YmFjayByYXRlIHdhcyBzZXQuXG4gICAgICogQHJlamVjdCB7UmFuZ2VFcnJvcn0gVGhlIHBsYXliYWNrIHJhdGUgd2FzIGxlc3MgdGhhbiAwLjUgb3IgZ3JlYXRlciB0aGFuIDIuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHBsYXliYWNrIHJhdGUgb2YgdGhlIHBsYXllciBvbiBhIHNjYWxlIGZyb20gYDAuNWAgdG8gYDJgLiBXaGVuIHNldFxuICAgICAqIHZpYSB0aGUgQVBJLCB0aGUgcGxheWJhY2sgcmF0ZSB3aWxsIG5vdCBiZSBzeW5jaHJvbml6ZWQgdG8gb3RoZXJcbiAgICAgKiBwbGF5ZXJzIG9yIHN0b3JlZCBhcyB0aGUgdmlld2VyJ3MgcHJlZmVyZW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwbGF5YmFja1JhdGVcbiAgICAgKiBAcmV0dXJuIHtTZXRQbGF5YmFja1JhdGVQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UGxheWJhY2tSYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBsYXliYWNrUmF0ZShwbGF5YmFja1JhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldCgncGxheWJhY2tSYXRlJywgcGxheWJhY2tSYXRlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgdGV4dCB0cmFja3Mgb2YgYSB2aWRlby5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldFRleHRUcmFja3NQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge1ZpbWVvVGV4dFRyYWNrW119IFRoZSB0ZXh0IHRyYWNrcyBhc3NvY2lhdGVkIHdpdGggdGhlIHZpZGVvLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IGFuIGFycmF5IG9mIHRoZSB0ZXh0IHRyYWNrcyB0aGF0IGV4aXN0IGZvciB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRUZXh0VHJhY2tzUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFRleHRUcmFja3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGV4dFRyYWNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgndGV4dFRyYWNrcycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBlbWJlZCBjb2RlIGZvciB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRWaWRlb0VtYmVkQ29kZVByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7c3RyaW5nfSBUaGUgYDxpZnJhbWU+YCBlbWJlZCBjb2RlIGZvciB0aGUgdmlkZW8uXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGA8aWZyYW1lPmAgZW1iZWQgY29kZSBmb3IgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0VmlkZW9FbWJlZENvZGVQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VmlkZW9FbWJlZENvZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlkZW9FbWJlZENvZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZpZGVvRW1iZWRDb2RlJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIGlkIG9mIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldFZpZGVvSWRQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge251bWJlcn0gVGhlIGlkIG9mIHRoZSB2aWRlby5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaWQgb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0VmlkZW9JZFByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRWaWRlb0lkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpZGVvSWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZpZGVvSWQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgdGl0bGUgb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0VmlkZW9UaXRsZVByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgdGl0bGUgb2YgdGhlIHZpZGVvLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB0aXRsZSBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRWaWRlb1RpdGxlUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFZpZGVvVGl0bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlkZW9UaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgndmlkZW9UaXRsZScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBuYXRpdmUgd2lkdGggb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0VmlkZW9XaWR0aFByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgbmF0aXZlIHdpZHRoIG9mIHRoZSB2aWRlby5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmF0aXZlIHdpZHRoIG9mIHRoZSBjdXJyZW50bHnigJBwbGF5aW5nIHZpZGVvLiBUaGUgd2lkdGggb2ZcbiAgICAgKiB0aGUgaGlnaGVzdOKAkHJlc29sdXRpb24gYXZhaWxhYmxlIHdpbGwgYmUgdXNlZCBiZWZvcmUgcGxheWJhY2sgYmVnaW5zLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0VmlkZW9XaWR0aFByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRWaWRlb1dpZHRoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpZGVvV2lkdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZpZGVvV2lkdGgnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgbmF0aXZlIGhlaWdodCBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRWaWRlb0hlaWdodFByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgbmF0aXZlIGhlaWdodCBvZiB0aGUgdmlkZW8uXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5hdGl2ZSBoZWlnaHQgb2YgdGhlIGN1cnJlbnRseeKAkHBsYXlpbmcgdmlkZW8uIFRoZSBoZWlnaHQgb2ZcbiAgICAgKiB0aGUgaGlnaGVzdOKAkHJlc29sdXRpb24gYXZhaWxhYmxlIHdpbGwgYmUgdXNlZCBiZWZvcmUgcGxheWJhY2sgYmVnaW5zLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0VmlkZW9IZWlnaHRQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VmlkZW9IZWlnaHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlkZW9IZWlnaHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZpZGVvSGVpZ2h0Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIHZpbWVvLmNvbSB1cmwgZm9yIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldFZpZGVvVXJsUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtudW1iZXJ9IFRoZSB2aW1lby5jb20gdXJsIGZvciB0aGUgdmlkZW8uXG4gICAgICogQHJlamVjdCB7UHJpdmFjeUVycm9yfSBUaGUgdXJsIGlzbuKAmXQgYXZhaWxhYmxlIGJlY2F1c2Ugb2YgdGhlIHZpZGVv4oCZcyBwcml2YWN5IHNldHRpbmcuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZpbWVvLmNvbSB1cmwgZm9yIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldFZpZGVvVXJsUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFZpZGVvVXJsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpZGVvVXJsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd2aWRlb1VybCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSB2b2x1bWUgbGV2ZWwgb2YgdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldFZvbHVtZVByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgdm9sdW1lIGxldmVsIG9mIHRoZSBwbGF5ZXIgb24gYSBzY2FsZSBmcm9tIDAgdG8gMS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCB2b2x1bWUgbGV2ZWwgb2YgdGhlIHBsYXllciBvbiBhIHNjYWxlIGZyb20gYDBgIHRvIGAxYC5cbiAgICAgKlxuICAgICAqIE1vc3QgbW9iaWxlIGRldmljZXMgZG8gbm90IHN1cHBvcnQgYW4gaW5kZXBlbmRlbnQgdm9sdW1lIGZyb20gdGhlXG4gICAgICogc3lzdGVtIHZvbHVtZS4gSW4gdGhvc2UgY2FzZXMsIHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBgMWAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRWb2x1bWVQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Vm9sdW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZvbHVtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgndm9sdW1lJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBzZXQgdGhlIHZvbHVtZSBsZXZlbCBvZiB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHByb21pc2UgU2V0Vm9sdW1lUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtudW1iZXJ9IFRoZSB2b2x1bWUgd2FzIHNldC5cbiAgICAgKiBAcmVqZWN0IHtSYW5nZUVycm9yfSBUaGUgdm9sdW1lIHdhcyBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gMS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdm9sdW1lIG9mIHRoZSBwbGF5ZXIgb24gYSBzY2FsZSBmcm9tIGAwYCB0byBgMWAuIFdoZW4gc2V0XG4gICAgICogdmlhIHRoZSBBUEksIHRoZSB2b2x1bWUgbGV2ZWwgd2lsbCBub3QgYmUgc3luY2hyb25pemVkIHRvIG90aGVyXG4gICAgICogcGxheWVycyBvciBzdG9yZWQgYXMgdGhlIHZpZXdlcuKAmXMgcHJlZmVyZW5jZS5cbiAgICAgKlxuICAgICAqIE1vc3QgbW9iaWxlIGRldmljZXMgZG8gbm90IHN1cHBvcnQgc2V0dGluZyB0aGUgdm9sdW1lLiBBbiBlcnJvciB3aWxsXG4gICAgICogKm5vdCogYmUgdHJpZ2dlcmVkIGluIHRoYXQgc2l0dWF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZVxuICAgICAqIEByZXR1cm4ge1NldFZvbHVtZVByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRWb2x1bWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vm9sdW1lKHZvbHVtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KCd2b2x1bWUnLCB2b2x1bWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQbGF5ZXI7XG59KCk7IC8vIFNldHVwIGVtYmVkIG9ubHkgaWYgdGhpcyBpcyBub3QgYSBub2RlIGVudmlyb25tZW50XG4vLyBhbmQgaWYgdGhlcmUgaXMgbm8gZXhpc3RpbmcgVmltZW8gUGxheWVyIG9iamVjdFxuXG5cbmlmICghaXNOb2RlICYmIHdpbmRvdy5WaW1lbyAmJiAhd2luZG93LlZpbWVvLlBsYXllcikge1xuICBpbml0aWFsaXplRW1iZWRzKCk7XG4gIHJlc2l6ZUVtYmVkcygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiIsImltcG9ydCBZVENvbnRyb2xsZXIgZnJvbSAnLi92aWRlb0FQSS9ZVENvbnRyb2xsZXIuZXM2JztcbmltcG9ydCBWTUNvbnRyb2xsZXIgZnJvbSAnLi92aWRlb0FQSS9WTUNvbnRyb2xsZXIuZXM2JztcbmltcG9ydCBVUkxQdXJzZSBmcm9tICcuL21vZGVsL1VybHB1cnNlLmVzNic7XG5cbmNsYXNzIEFzeW5jVmlkZW8ge1xuXG5cbiAgY29uc3RydWN0b3IoY2Fsc3NOYW1lID0gJ3ZpZGVvLWFzeW5jJyl7XG4gICAgdGhpcy5pc1lvdXR1YmUgPSBmYWxzZTtcbiAgICB0aGlzLnRhcmdldCA9ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBcInZpZGVvLWFzeW5jXCIgKTtcbiAgICB0aGlzLnZpZGVvRGF0YSA9IFtdO1xuICAgIGNvbnN0IHVybFB1cnNlID0gbmV3IFVSTFB1cnNlKCk7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy50YXJnZXQpe1xuICAgICAgY29uc3QgW2lkcyx2aWRlb1R5cGVdID0gdXJsUHVyc2UuZ2V0SURzKHRoaXMuZ2V0X2RhdGFVUkwoaXRlbSwndmlkZW9VcmwnKSk7XG4gICAgICBjb25zb2xlLmxvZyhpZHMsdmlkZW9UeXBlKTtcbiAgICAgIGNvbnN0IGFsbG93QXV0b1BsYXkgPSB0aGlzLmdldF9kYXRhVVJMKGl0ZW0sJ3ZpZGVvQWxsb3dBdXRvcGxheScpIHx8IDA7XG4gICAgICBpZiAoIXRoaXMuaXNZb3V0dWJlICYmIHZpZGVvVHlwZSA9PSAneW91dHViZScpIHtcbiAgICAgICAgdGhpcy5pc1lvdXR1YmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYWxsb3dBdXRvUGxheSk7XG4gICAgICBjb25zdCByID0gdGhpcy5nZXRfcmFuZG9tSUQoKTtcbiAgICAgIGNvbnN0IHZpZGVvRGF0YSA9IHtcbiAgICAgICAgdmlkZW9UeXBlIDogdmlkZW9UeXBlLFxuICAgICAgICBpZDppZHMsXG4gICAgICAgIGRpdklEOnIsXG4gICAgICAgIGlzQXV0b1BsYXkgOiBhbGxvd0F1dG9QbGF5LFxuICAgICAgICB3aWR0aDppdGVtLmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6aXRlbS5jbGllbnRIZWlnaHRcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0SW5uZXIoaXRlbSxyKTtcbiAgICAgIHRoaXMudmlkZW9EYXRhLnB1c2godmlkZW9EYXRhKTtcblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLmlzWW91dHViZSk7XG4gICAgaWYgKHRoaXMuaXNZb3V0dWJlKSB7XG4gICAgICB0aGlzLmVtYmVkWVRUYWcoKTtcbiAgICB9XG5cbiAgICAvL3dpbmRvdyBsb2FkIGV2ZW50XG4gICAgd2luZG93Lm9ubG9hZCA9ICgpPT57XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy52aWRlb0RhdGEpIHtcbiAgICAgICAgaWYgKGl0ZW0udmlkZW9UeXBlID09ICd5b3V0dWJlJykge1xuICAgICAgICAgIGNvbnN0IHl0Q29udHJvbGxlciA9IG5ldyBZVENvbnRyb2xsZXIoaXRlbSk7XG4gICAgICAgIH1lbHNlIGlmKGl0ZW0udmlkZW9UeXBlID09ICd2aW1lbycpe1xuICAgICAgICAgIGNvbnN0IHZtQ29udHJvbGxlciA9IG5ldyBWTUNvbnRyb2xsZXIoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG5cbiAgZ2V0X2RhdGFVUkwoZWxlbWVudCA9IGZhbHNlLGtleT0ndmlkZW9VcmwnKXtcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0W2tleV07XG4gIH1cblxuICBzZXRJbm5lcihlbGVtZW50ID0gZmFsc2UsZGl2SUQpe1xuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLFxuICAgICAgYDxkaXYgY2xhc3M9XCJ2aWRlby1hc3luYy0taW5uZXJcIiBpZD1cIiR7ZGl2SUR9XCI+PC9kaXY+YFxuICAgICk7XG4gIH1cblxuICBnZXRfcmFuZG9tSUQoKXtcbiAgICBjb25zdCBsID0gODtcbiAgICBjb25zdCBjID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JztcbiAgICBjb25zdCBjbCA9IGMubGVuZ3RoO1xuICAgIGxldCByID0gJyc7XG4gICAgZm9yKHZhciBpPTA7IGk8bDsgaSsrKXtcbiAgICAgIHIgKz0gY1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqY2wpXTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cblxuXG4gIGVtYmVkWVRUYWcoKXtcbiAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB0YWcuc3JjID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCI7XG4gICAgY29uc3QgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgZmlyc3RTY3JpcHRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFnLCBmaXJzdFNjcmlwdFRhZyk7XG4gIH1cbn1cblxuY29uc3QgYSA9IG5ldyBBc3luY1ZpZGVvKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVUkxQdXJzZXtcbiAgZ2V0SURzKHVybCl7XG4gICAgY29uc3QgeXRSZWdleCA9IC9eKGh0dHBzP1xcOlxcL1xcLyk/KHd3d1xcLik/KHlvdXR1YmVcXC5jb218eW91dHVcXC4/YmUpXFwvLiskLztcbiAgICBjb25zdCB2bVJlZ2V4ID0gLyg/Ond3d1xcLnxwbGF5ZXJcXC4pP3ZpbWVvLmNvbVxcLyg/OmNoYW5uZWxzXFwvKD86XFx3K1xcLyk/fGdyb3Vwc1xcLyg/OlteXFwvXSopXFwvdmlkZW9zXFwvfGFsYnVtXFwvKD86XFxkKylcXC92aWRlb1xcL3x2aWRlb1xcL3wpKFxcZCspKD86W2EtekEtWjAtOV9cXC1dKyk/L2k7XG4gICAgbGV0IHZpZGVvVHlwZSA9ICcnO1xuICAgIGlmICh5dFJlZ2V4LnRlc3QodXJsKSkge1xuICAgICAgdmlkZW9UeXBlID0gJ3lvdXR1YmUnXG4gICAgICBjb25zdCByZWdFeHAgPSAvXi4qKHlvdXR1XFwuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLztcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHJlZ0V4cCk7XG4gICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoID09IDExKSB7XG4gICAgICAgIHRoaXMuSURzID0gbWF0Y2hbMl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLklEcyA9IDA7XG4gICAgICB9XG4gICAgfWVsc2UgaWYodm1SZWdleC50ZXN0KHVybCkpe1xuICAgICAgdmlkZW9UeXBlID0gJ3ZpbWVvJztcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHZtUmVnZXgpO1xuICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdLmxlbmd0aCA9PSA5KSB7XG4gICAgICAgIHRoaXMuSURzID0gbWF0Y2hbMV07XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh1cmwubWF0Y2godm1SZWdleCkpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5JRHMgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gW3RoaXMuSURzLHZpZGVvVHlwZV07XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgVmltb2VQbGF5ZXIgZnJvbSAnQHZpbWVvL3BsYXllcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWTUNvbnRyb2xsZXJ7XG4gIGNvbnN0cnVjdG9yKHZpZGVvRGF0YSl7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGlkOiB2aWRlb0RhdGEuaWQsXG4gICAgICAgIHdpZHRoOiB2aWRlb0RhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDp2aWRlb0RhdGEuaGVpZ2h0LFxuICAgICAgICBhdXRvcGxheTp2aWRlb0RhdGEuaXNBdXRvUGxheVxuICAgIH07XG4gICAgY29uc3Qgdm0gPSBuZXcgVmltb2VQbGF5ZXIodmlkZW9EYXRhLmRpdklELG9wdGlvbnMpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBZVENvbnRyb2xsZXJ7XG4gIGNvbnN0cnVjdG9yKHZpZGVvRGF0YSl7XG4gICAgY29uc3QgcGxheWVyID0gbmV3IFlULlBsYXllcih2aWRlb0RhdGEuZGl2SUQse1xuICAgICAgd2lkdGg6dmlkZW9EYXRhLndpZHRoLFxuICAgICAgaGVpZ2h0OnZpZGVvRGF0YS5oZWlnaHQsXG4gICAgICB2aWRlb0lkOiB2aWRlb0RhdGEuaWQsXG4gICAgICBwbGF5ZXJWYXJzOiB7ICdhdXRvcGxheSc6IHZpZGVvRGF0YS5pc0F1dG9QbGF5IH0sXG4gICAgfSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==