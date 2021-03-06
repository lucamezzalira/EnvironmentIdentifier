(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvironmentIdentifier = undefined;

var _EnvironmentRegEx = require("./EnvironmentRegEx");

var _EnvironmentRegEx2 = _interopRequireDefault(_EnvironmentRegEx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EnvironmentIdentifier = exports.EnvironmentIdentifier = (function () {
  function EnvironmentIdentifier() {
    _classCallCheck(this, EnvironmentIdentifier);

    this.userAgent = window.navigator.userAgent.toLowerCase();
  }

  _createClass(EnvironmentIdentifier, [{
    key: "isChromeForAndroid",
    value: function isChromeForAndroid() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.CHROME_ANDROID, this.userAgent);
    }
  }, {
    key: "isChromeForIOS",
    value: function isChromeForIOS() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.CHROME_IOS, this.userAgent);
    }
  }, {
    key: "isSafariForIOS",
    value: function isSafariForIOS() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.SAFARI, this.userAgent);
    }
  }, {
    key: "isStockBrowser",
    value: function isStockBrowser() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.STOCK_BROWSER, this.userAgent);
    }
  }, {
    key: "isInternetExplorerMobile",
    value: function isInternetExplorerMobile() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.IE, this.userAgent);
    }
  }, {
    key: "isTablet",
    value: function isTablet() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.TABLET, this.userAgent);
    }
  }, {
    key: "isSmartphone",
    value: function isSmartphone() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.SMARTPHONE, this.userAgent);
    }
  }, {
    key: "isIOS",
    value: function isIOS() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.IOS, this.userAgent);
    }
  }, {
    key: "isAndroid",
    value: function isAndroid() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.ANDROID, this.userAgent);
    }
  }, {
    key: "isMac",
    value: function isMac() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.MAC, this.userAgent);
    }
  }, {
    key: "isWindows",
    value: function isWindows() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.WINDOWS, this.userAgent);
    }
  }, {
    key: "isWindowsPhone",
    value: function isWindowsPhone() {
      return this._checkWithRegEx(_EnvironmentRegEx2.default.WINDOWS_PHONE, this.userAgent);
    }
  }, {
    key: "_checkWithRegEx",
    value: function _checkWithRegEx(regex, str) {
      var re = new RegExp(regex, "i");
      return re.test(str);
    }
  }]);

  return EnvironmentIdentifier;
})();

if (window) window.EnvironmentIdentifier = EnvironmentIdentifier;

},{"./EnvironmentRegEx":2}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EnvironmentRegEx = (function () {
  function EnvironmentRegEx() {
    _classCallCheck(this, EnvironmentRegEx);
  }

  _createClass(EnvironmentRegEx, null, [{
    key: "CHROME_IOS",
    get: function get() {
      return "(?=.*chrios)(?=.*iphone)(?=.*ipad).*";
    }
  }, {
    key: "CHROME_ANDROID",
    get: function get() {
      return "(?=.*chrome|chromium)(?=.*android)";
    }
  }, {
    key: "SAFARI",
    get: function get() {
      return "^((?!opera|firefox|chrome|edge|msie).)*$";
    }
  }, {
    key: "IE",
    get: function get() {
      return "msie|trident";
    }
  }, {
    key: "STOCK_BROWSER",
    get: function get() {
      return "linux-u|linux; u;";
    }
  }, {
    key: "TABLET",
    get: function get() {
      return "ipad|(?=.*android)(?!mobile)";
    }
  }, {
    key: "IOS",
    get: function get() {
      return "ipad|iphone|ipod";
    }
  }, {
    key: "ANDROID",
    get: function get() {
      return "android";
    }
  }, {
    key: "SMARTPHONE",
    get: function get() {
      return "iphone|(?=.*mobile)(?=.*safari).*";
    }
  }, {
    key: "MAC",
    get: function get() {
      return "^((?!iphone|ipad|win|linux).)*$";
    }
  }, {
    key: "WINDOWS",
    get: function get() {
      return "^((?!iphone|ipad|mac|linux).)*$";
    }
  }, {
    key: "WINDOWS_PHONE",
    get: function get() {
      return "(?=.*windows)(?=.*(iemobile|edge))(?=.*phone).*";
    }
  }]);

  return EnvironmentRegEx;
})();

exports.default = EnvironmentRegEx;

},{}]},{},[1]);
