var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"credits": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/credits/credits.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player~playground"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/credits/credits.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #5100ff */ /* lighter version of #5100ff */ /* even lighter version */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* #575E75 */ /* #5100ff */ /* darker version */ /* 35% transparent version of motion-primary */ /* 15% transparent version */ /* keep this as-is (used for dark mode contrast) */ /* #5100ff */ /* #3d00c7 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* #5100ff */ /* darker version */ /* 35% transparent */ /* opaque version for white bg */ /* lighter highlight of #5100ff */ * {\n    box-sizing: border-box;\n} body {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background: white;\n} body[theme=\"dark\"] {\n    background-color: #111;\n    color: #eee;\n} a {\n    color: blue;\n} [theme=\"dark\"] a {\n    color: #4af;\n} .credits_main_1Rb15 section {\n    max-width: 900px;\n    margin: auto;\n    margin-bottom: 30px;\n} .credits_header-container_10IXn {\n    color: white;\n    background-color: hsla(261, 100%, 50%, 1);\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n} .credits_header-text_2vWAl {\n\n} .credits_users_2AuwB {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n} .credits_user-image_2rw9X {\n    margin-right: 12px;\n} .credits_user_2nYLS {\n    display: flex;\n    align-items: center;\n    width: 300px;\n    padding: 4px;\n    border-radius: 4px;\n    font-size: 1.25rem;\n    color: inherit !important;\n    text-decoration: none;\n    transition: background .2s;\n} .credits_user_2nYLS:link:hover {\n    background: #eee;\n} [theme=\"dark\"] .credits_user_2nYLS:link:hover {\n    background: #222;\n}\n", ""]);

// exports
exports.locals = {
	"main": "credits_main_1Rb15",
	"header-container": "credits_header-container_10IXn",
	"headerContainer": "credits_header-container_10IXn",
	"header-text": "credits_header-text_2vWAl",
	"headerText": "credits_header-text_2vWAl",
	"users": "credits_users_2AuwB",
	"user-image": "credits_user-image_2rw9X",
	"userImage": "credits_user-image_2rw9X",
	"user": "credits_user_2nYLS"
};

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/tw-theme-dark.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GUI */\n:root {\n    background: #111;\n    color: #eee;\n    color-scheme: dark;\n    /* see colors.csss */\n    --ui-primary: rgb(17, 17, 17);\n    --ui-secondary: rgb(30, 30, 30);\n    --ui-seccondary-opacity: rgba(30, 30, 30, 0.26);\n    --ui-tertiary: rgb(46, 46, 46);\n    --ui-modal-overlay: #333a;\n    --ui-black-transparent: rgba(255, 255, 255, 0.15);\n    --text-primary: #eee;\n    /* scratch-paint */\n    --paint-ui-pane-border: var(--ui-black-transparent);\n    --paint-text-primary: #eee;\n    --paint-form-border: var(--ui-black-transparent);\n}\n\n/* Blockly */\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n    color-scheme: light;\n}\n[id^=\"blocklyGridPattern\"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\n/* blocklyFlyoutCheckboxPath stroke and blocklyFlyoutCheckbox fill must match */\n.blocklyFlyoutCheckboxPath {\n    stroke: #111;\n}\n.blocklyFlyoutCheckbox {\n    fill: #111;\n}\n.checked > .blocklyFlyoutCheckbox {\n    stroke: #a1c6fa;\n}\n.checked > .blocklyFlyoutCheckboxPath {\n    stroke: white;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv {\n    color-scheme: light;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: rgba(0, 0, 0, 0.35) !important;     /* transparent black for blur */\n    backdrop-filter: blur(12px) !important;\n    -webkit-backdrop-filter: blur(12px) !important;\n\n    border: 1px solid rgba(255, 255, 255, 0.1) !important; \n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {\n    color: #666 !important;\n}\n.sa-blockly-menu-item-border {\n    border-top-color: var(--ui-black-transparent) !important;\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: rgba(31, 31, 31, 0.445);\n    border-color: transparent; /* remove border */\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\n/* Other / Multipurpose */\n.Popover {\n    /* weird Chrome bug displays white bar above popovers with color-scheme: dark */\n    color-scheme: light;\n}\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-black-transparent);\n}\n"

/***/ }),

/***/ "./src/lib/tw-theme-hoc.jsx":
/*!**********************************!*\
  !*** ./src/lib/tw-theme-hoc.jsx ***!
  \**********************************/
/*! exports provided: getInitialDarkMode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialDarkMode", function() { return getInitialDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tw-theme-dark.css */ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css");
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }


const THEME_KEY = 'tw:theme';
const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const getInitialDarkMode = () => {
  try {
    const item = localStorage.getItem(THEME_KEY);
    if (item !== null) {
      return item === 'dark';
    }
  } catch (e) {
    // ignore
  }
  return darkMediaQuery.matches;
};
const darkModeStylesheet = document.createElement('style');
darkModeStylesheet.textContent = _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default.a;
const ThemeHOC = function ThemeHOC(WrappedComponent) {
  class ThemeComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.handleQueryChange = this.handleQueryChange.bind(this);
      this.handleClickTheme = this.handleClickTheme.bind(this);
      this.state = {
        dark: getInitialDarkMode()
      };
    }
    componentDidMount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.addEventListener) {
        darkMediaQuery.addEventListener('change', this.handleQueryChange);
      }
      this.updateDark();
    }
    componentDidUpdate() {
      try {
        localStorage.setItem(THEME_KEY, this.state.dark ? 'dark' : 'light');
      } catch (e) {
        // ignore
      }
      this.updateDark();
    }
    componentWillUnmount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.removeEventListener) {
        darkMediaQuery.removeEventListener('change', this.handleQueryChange);
      }
    }
    updateDark() {
      const dark = this.state.dark;
      document.body.setAttribute('theme', dark ? 'dark' : 'light');
      if (dark && !darkModeStylesheet.parentNode) {
        // Append at the start of <body> we override scratch-gui styles in <head>
        // but are overridden by addon styles at the end of <body>
        document.body.insertBefore(darkModeStylesheet, document.body.firstChild);
      } else if (!dark && darkModeStylesheet.parentNode) {
        darkModeStylesheet.parentNode.removeChild(darkModeStylesheet);
      }
    }
    handleQueryChange() {
      this.setState({
        dark: darkMediaQuery.matches
      });
    }
    handleClickTheme() {
      this.setState(state => ({
        dark: !state.dark
      }));
    }
    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
        onClickTheme: this.handleClickTheme,
        isDark: this.state.dark
      }, this.props));
    }
  }
  return ThemeComponent;
};


/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const appTarget = document.getElementById('app');

// Remove everything from the target to fix macOS Safari "Save Page As",
while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}
document.body.classList.add('tw-loaded');
/* harmony default export */ __webpack_exports__["default"] = (appTarget);

/***/ }),

/***/ "./src/playground/credits/credits.css":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./credits.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/credits/credits.jsx":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.jsx ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credits.css */ "./src/playground/credits/credits.css");
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_credits_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/tw-theme-hoc.jsx */ "./src/lib/tw-theme-hoc.jsx");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users */ "./src/playground/credits/users.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }







// import fosshostLogo from './fosshost-light.png';


/* eslint-disable react/jsx-no-literals */

document.documentElement.lang = 'en';
const User = _ref => {
  let {
    image,
    text,
    href
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.user
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.userImage,
    src: image,
    width: "60",
    height: "60"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.userInfo
  }, text));
};
User.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
const UserList = _ref2 => {
  let {
    users
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.users
  }, users.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, _extends({
    key: index
  }, data))));
};
UserList.propTypes = {
  users: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
};
const Credits = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerText
}, "ArkIDE Credits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Penguinmod")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Thank you"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Without TurboWarp, PenguinMod may have never existed. Thank you to everyone who worked on Scratch and TurboWarp, you have made many people finally be able to make whatever they can imagine."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/donate"
}, "Donate to support Scratch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/sponsors/GarboMuffin"
}, "Donate to support TurboWarp."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Contributors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "PenguinMod is made by a small bunch of developers. A list is below, but you can also check ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/orgs/PenguinMod/people"
}, "our GitHub"), " incase this one is out of date."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"].pmDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "There are even community members who have helped develop PenguinMod. People like ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "you!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "ArkIDE Devs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"].arkideDevs
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This project is by me and a few of my friends, so updates will be very infrequent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Penguinmod continues here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"].pmPullRequestDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We've also included work from other open-source projects inside of ArkIDE. Here's a list of some other projects you should check out:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"].pmCodeUsedFrom
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Code for \"Center\" option in Costume editor is from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/Nitro-Bolt/scratch-paint/blob/develop/src/containers/mode-tools.jsx#L203-L216"
}, "Cubester@Nitro-Bolt")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "GitHub Pages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We currently use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://pages.github.com/"
}, "GitHub Pages"), " to host PenguinMod."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://pages.github.com/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/collections/github-pages-examples/github-pages-examples.png",
  width: "160",
  height: "160"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Domain Provider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://penguinmod.com"
}, "penguinmod.com"), " (and any subdomains) are currently provided by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/enderhacker"
}, "enderhacker"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/enderhacker"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: "https://avatars.githubusercontent.com/u/61245488?v=4",
  style: {
    width: "128px"
  }
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Server Host"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "PenguinMod's Project Sharing server is currently hosted by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/ianyourgod"
}, "ianyourgod"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/ianyourgod"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: "https://avatars.githubusercontent.com/u/104151459?v=4",
  style: {
    width: "128px"
  }
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The PenguinMod Server API is maintained by many people. A list is below, but you can also check ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/PenguinMod/PenguinMod-IntermediateBackendApi/graphs/contributors"
}, "the GitHub repository"), " incase this one is out of date."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"].pmApiDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Costumes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "All PenguinMod costumes are downloaded or created from:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://publicdomainvectors.org/"
}, "https://publicdomainvectors.org/")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://discord.gg/aPRchS3Zdp"
}, "User-submissions from the PenguinMod Discord Server")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The PenguinMod Developers")), "All costumes exclusive to PenguinMod are included under Public Domain licenses or licenses such as MIT and CC0."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is the current list of user-submitted costume creators:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"].pmCostumeSubmittors
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Sound Effects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "All PenguinMod sounds are downloaded or created from:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://freesound.org/"
}, "https://freesound.org/")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://archive.org/"
}, "https://archive.org/")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://discord.gg/aPRchS3Zdp"
}, "User-submissions from the PenguinMod Discord Server")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The PenguinMod Developers")), "All sounds exclusive to PenguinMod are included under Public Domain licenses or licenses such as MIT and CC0."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is the current list of user-submitted sound creators:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"].pmSoundSubmittors
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Accounts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Scratch login on PenguinMod is managed with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://oauth2.scratch-wiki.info/"
}, "ScratchOAuth2"), ", see their ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/ScratchVerifier/ScratchOAuth2"
}, "GitHub repository"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "\"ScratchOAuth2\" is not actually affiliated with Scratch, the Scratch Team, or the Scratch Foundation."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "PenguinMod & TurboWarp")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Extensions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "If you are an extension developer who wants their extension removed from PenguinMod's extensions list, contact us as soon as you can. We'll get it removed as soon as we are able to.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We use some MIT licensed extensions from TurboWarp as they are really useful! Check out the full list of TurboWarp extensions ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://extensions.turbowarp.org/"
}, "here"), ", and see individual contributors below:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"].extensionDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "PenguinMod also has a few people who made and submitted extensions too! This list may get outdated sometimes, but here they are listed below:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"].pmExtensionDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The Scratch Auth extension has a login system managed with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://auth.itinerary.eu.org/"
}, "Scratch Auth"), ", created by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/users/Looky1173/"
}, "Looky1173"), ". (thanks for adding us to the user list!)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "\"Scratch Auth\" is not actually affiliated with Scratch, the Scratch Team, or the Scratch Foundation."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Addons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here are the developers that made the addons from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratchaddons.com/"
}, "Scratch Addons"), " available."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"].addonDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "PenguinMod-exclusive addons are created by the contributors listed in the Contributors section.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "TurboWarp")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The TurboWarp project is made possible by the work of many volunteers.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "You can check out TurboWarp's individual credits ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://turbowarp.org/credits.html"
}, "here"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/sponsors/GarboMuffin"
}, "Donate to support TurboWarp."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Scratch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "TurboWarp is based on the work of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/credits"
}, "Scratch contributors"), " but is not endorsed by Scratch in any way."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/donate"
}, "Donate to support Scratch."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Translators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "More than 100 people have helped translate TurboWarp and its addons into many languages \u2014 far more than we could hope to list here."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "PenguinMod is also (very very slowly) getting translated into other languages, in the future hopefully the same number of languages can be supported. It'll take a while until we get there though."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here is the current list of PenguinMod Translators:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_6__["default"].pmTranslators
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Individual contributors are listed in no particular order. The order is randomized each visit."))));
document.body.setAttribute('theme', 'dark');
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Credits, null), _app_target__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./src/playground/credits/users.js":
/*!*****************************************!*\
  !*** ./src/playground/credits/users.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shuffle = list => {
  for (let i = list.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const tmp = list[i];
    list[i] = list[random];
    list[random] = tmp;
  }
  return list;
};
const fromHardcoded = _ref => {
  let {
    userId,
    username,
    name
  } = _ref;
  return {
    image: "https://trampoline.turbowarp.org/avatars/".concat(userId),
    href: "https://scratch.mit.edu/users/".concat(username, "/"),
    text: name || username
  };
};
const fromHardcodedGithub = username => ({
  image: "https://github.com/".concat(username, ".png"),
  href: "https://github.com/".concat(username, "/"),
  text: username
});
const fromHardcodedNamed = username => ({
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#",
  text: username
});
const addonDevelopers = [{
  userId: '34018398',
  username: 'Jeffalo'
}, {
  userId: '64184234',
  username: 'ErrorGamer2000'
}, {
  userId: '41616512',
  username: 'pufferfish101007'
}, {
  userId: '61409215',
  username: 'TheColaber'
}, {
  userId: '1882674',
  username: 'griffpatch'
}, {
  userId: '10817178',
  username: 'apple502j'
}, {
  userId: '16947341',
  username: '--Explosion--'
}, {
  userId: '14880401',
  username: 'Sheep_maker'
}, {
  userId: '9981676',
  username: 'NitroCipher'
}, {
  userId: '2561680',
  username: 'lisa_wolfgang'
}, {
  userId: '60000111',
  username: 'GDUcrash'
}, {
  userId: '4648559',
  username: 'World_Languages'
}, {
  userId: '17340565',
  username: 'GarboMuffin'
}, {
  userId: '5354974',
  username: 'Chrome_Cat'
}, {
  // actual ID is 34455896 but their avatar is the wrong resolution and looks really weird
  userId: '0',
  username: 'summerscar'
}, {
  userId: '55742784',
  username: 'RedGuy7'
}, {
  userId: '9636514',
  username: 'Tacodiva7729'
}, {
  userId: '14792872',
  username: '_nix'
}, {
  userId: '30323614',
  username: 'BarelySmooth'
}, {
  userId: '64691048',
  username: 'CST1229'
}, {
  userId: '12498592',
  username: 'LilyMakesThings'
}].map(fromHardcoded);
const pmDevelopers = ['enderhacker', 'FreshPenguin112', 'Ianyourgod', 'JoshAtticus', 'JeremyGamer13', 'jwklong', 'tnix100', 'RedMan13', 'SharkPool-SP', 'showierdata9978'].map(fromHardcodedGithub);
const arkideDevs = [{
  text: 'Arc360 (Lead Developer, Owner)',
  image: "http://arkideapi.arc360hub.com/api/v1/users/getpfp?username=ark",
  href: "https://arkide.site/profile?user=ark"
}, {
  text: 'Insomnia (Co-Owner, Main art lead)',
  image: "http://arkideapi.arc360hub.com/api/v1/users/getpfp?username=insomnia64",
  href: "https://arkide.site/profile?user=insomnia64"
},
//{
//    text: 'w9pti (Moderator)',
//    image: `http://arkideapi.arc360hub.com/api/v1/users/getpfp?username=w9pti`,
//    href: "https://arkide.site/profile?user=w9pti",
//},
{
  text: 'battman (Creator of the old mascot)',
  image: "http://arkideapi.arc360hub.com/api/v1/users/getpfp?username=battman",
  href: "https://arkide.site/profile?user=battman"
}, {
  text: 'cosmic (Ark but its his alt account)',
  image: "http://arkideapi.arc360hub.com/api/v1/users/getpfp?username=cosmic",
  href: "https://arkide.site/profile?user=cosmic"
}];
const pmPullRequestDevelopers = [
// these people made a PR that got merged, or got a dev to add something they made
{
  text: 'NexusKitten',
  image: "https://github.com/NexusKitten.png",
  href: "https://github.com/NexusKitten/"
}, {
  text: 'LilyMakesThings',
  image: "https://github.com/LilyMakesThings.png",
  href: "https://github.com/LilyMakesThings/"
}, {
  text: 'MikeDev101',
  image: "https://github.com/MikeDev101.png",
  href: "https://github.com/MikeDev101/"
}, {
  text: 'kokofixcomputers',
  image: "https://github.com/kokofixcomputers.png",
  href: "https://github.com/kokofixcomputers/"
}, {
  text: 'PPPDUD',
  image: "https://github.com/PPPDUD.png",
  href: "https://github.com/PPPDUD/"
}, {
  text: 'qbjl',
  image: "https://github.com/qbjl.png",
  href: "https://github.com/qbjl/"
}, {
  text: 'minidogg',
  image: "https://github.com/minidogg.png",
  href: "https://github.com/minidogg/"
}, {
  text: 'concertalyis',
  image: "https://github.com/concertalyis.png",
  href: "https://github.com/concertalyis/"
}, {
  text: 'Steve0Greatness',
  image: "https://github.com/Steve0Greatness.png",
  href: "https://github.com/Steve0Greatness/"
}, {
  text: 'ilikecoding-197',
  image: "https://github.com/ilikecoding-197.png",
  href: "https://github.com/ilikecoding-197/"
}, {
  text: 'NotEmbin',
  image: "https://github.com/NotEmbin.png",
  href: "https://github.com/NotEmbin/"
}, {
  // rx or ry single fix
  text: 'NotCryptid',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://github.com/NotCryptid/"
}, {
  text: 'DogeisCut',
  image: "https://github.com/DogeisCut.png",
  href: "https://github.com/Dogeiscut/"
}, {
  text: 'BiglyDerv',
  image: "https://github.com/biglyderv.png",
  href: "https://github.com/biglyderv/"
}
// list could be missing some people, but theres not really a way to tell
];
const pmApiDevelopers = ['JeremyGamer13', 'RedMan13', 'tnix100', 'Ianyourgod', 'Jwklong'].map(fromHardcodedGithub);
const pmTranslators = [{
  text: 'kolikiscool',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'n0name',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'onetoanother',
  image: "https://trampoline.turbowarp.org/avatars/by-username/onetoanother",
  href: "https://scratch.mit.edu/users/onetoanother/"
}, {
  text: 'NamelessCat',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=cat",
  href: "https://penguinmod.com/profile?user=cat"
}, {
  text: 'Just-Noone',
  image: "https://trampoline.turbowarp.org/avatars/by-username/Just-Noone",
  href: "https://scratch.mit.edu/users/Just-Noone/"
}, {
  text: 'goose_but_smart',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'Le_Blob77',
  image: "https://trampoline.turbowarp.org/avatars/by-username/Le_Blob77",
  href: "https://scratch.mit.edu/users/Le_Blob77/"
}, {
  text: 'MrRedstonia',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=mrredstonia",
  href: "https://penguinmod.com/profile?user=mrredstonia"
}, {
  text: 'TheShovel',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=TheShovel",
  href: "https://penguinmod.com/profile?user=TheShovel"
}, {
  text: 'SmolBoi37',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'GigantTech',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=GigantTech",
  href: "https://penguinmod.com/profile?user=GigantTech"
}, {
  text: 'hacker_anonimo',
  image: "https://trampoline.turbowarp.org/avatars/by-username/hacker_anonimo",
  href: "https://scratch.mit.edu/users/hacker_anonimo/"
}, {
  text: 'zaaxd52',
  image: "https://trampoline.turbowarp.org/avatars/by-username/zaaxd52",
  href: "https://scratch.mit.edu/users/zaaxd52/"
}, {
  text: 'G1nX',
  image: "https://trampoline.turbowarp.org/avatars/by-username/G1nX",
  href: "https://scratch.mit.edu/users/G1nX/"
}, {
  text: 'FNFFortune',
  image: "https://trampoline.turbowarp.org/avatars/by-username/FNFFortune",
  href: "https://scratch.mit.edu/users/FNFFortune/"
}, {
  text: 'Gabberythethughunte',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'keriyo',
  image: "https://trampoline.turbowarp.org/avatars/by-username/keriyo",
  href: "https://scratch.mit.edu/users/keriyo/"
}, {
  text: 'DenPlayTS',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=denplayts",
  href: "https://penguinmod.com/profile?user=denplayts"
}, {
  text: 'Tsalbre',
  image: "https://trampoline.turbowarp.org/avatars/by-username/Tsalbre",
  href: "https://scratch.mit.edu/users/Tsalbre/"
}, {
  text: 'MubiLop',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=MubiLop",
  href: "https://penguinmod.com/profile?user=MubiLop"
}, {
  text: 'TLP136',
  image: "https://trampoline.turbowarp.org/avatars/by-username/TLP136",
  href: "https://scratch.mit.edu/users/TLP136/"
}, {
  text: 'Cymock',
  image: "https://trampoline.turbowarp.org/avatars/by-username/Cymock",
  href: "https://scratch.mit.edu/users/Cymock/"
}, {
  text: 'ItzzEndr',
  image: "https://trampoline.turbowarp.org/avatars/by-username/ItzzEndr",
  href: "https://scratch.mit.edu/users/ItzzEndr/"
}, {
  text: 'Capysussa',
  image: "https://trampoline.turbowarp.org/avatars/by-username/Capysussa",
  href: "https://scratch.mit.edu/users/Capysussa/"
}, {
  text: 'con-zie',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'ImNotScratchY_lolol',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=ImNotScratchY_lolol",
  href: "https://penguinmod.com/profile?user=ImNotScratchY_lolol"
}, {
  text: 'justablock',
  image: "https://trampoline.turbowarp.org/avatars/by-username/justablock",
  href: "https://scratch.mit.edu/users/justablock/"
}, {
  text: 'inventionpro',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=inventionpro",
  href: "https://penguinmod.com/profile?user=inventionpro"
}, {
  text: 'SkyBuilder1717',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=SkyBuilder1717",
  href: "https://penguinmod.com/profile?user=SkyBuilder1717"
}, {
  text: 'Parham1258',
  image: "https://avatars.githubusercontent.com/u/95162943?v=4",
  href: "https://github.com/Parham1258"
}, {
  text: 'lem0n0fficial',
  image: "https://trampoline.turbowarp.org/avatars/by-username/lem0n0fficial",
  href: "https://scratch.mit.edu/users/lem0n0fficial/"
}, {
  text: 'Oldcoinmania',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=Oldcoinmania",
  href: "https://penguinmod.com/profile?user=Oldcoinmania"
}, {
  text: 'mariocraft987',
  image: "https://avatars.githubusercontent.com/u/154646419?v=4",
  href: "https://github.com/mariocraft987"
}, {
  text: 'Chip',
  image: "https://avatars.githubusercontent.com/u/116580105?s=96&v=4",
  href: "https://github.com/triisdang"
}, {
  text: 'enduh',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=enduh",
  href: "https://penguinmod.com/profile?user=enduh"
}, {
  text: 'riwataNOUVEAU',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=riwataNOUVEAU",
  href: "https://penguinmod.com/profile?user=riwataNOUVEAU"
}, {
  text: 'Prode',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=Prode",
  href: "https://penguinmod.com/profile?user=Prode"
}];
const pmCostumeSubmittors = [
// accounts
{
  text: 'budc123',
  image: "https://github.com/budc123.png",
  href: "https://github.com/budc123/"
}, {
  text: 'concertalyis',
  image: "https://github.com/concertalyis.png",
  href: "https://github.com/concertalyis/"
}, {
  text: 'WojtekCodesToday',
  image: "https://github.com/WojtekCodesToday.png",
  href: "https://github.com/WojtekCodesToday/"
}, {
  text: 'ddededodediamante',
  image: "https://github.com/ddededodediamante.png",
  href: "https://github.com/ddededodediamante/"
}, {
  text: 'G1nX',
  image: "https://trampoline.turbowarp.org/avatars/by-username/G1nX",
  href: "https://scratch.mit.edu/users/G1nX/"
},
// unknown
{
  text: 'maroonmball',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'eviepepsi',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: '1340073',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'cubeycreator',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'novaspiderultra',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'poundpound0209',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'gdplayer1035',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'cognitixsammy',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'thebusyman',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'skyglide5',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'cxnnie09',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'hoveras',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'blockgamer904',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: "Anonygoose's Dog (Max)",
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=anonygoosedog",
  href: "https://penguinmod.com/profile?user=anonygoosedog"
}, {
  text: 'mildannerofc',
  image: "https://github.com/mildannerofc.png",
  href: "https://github.com/mildannerofc/"
}, {
  text: 'bonemaster96',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'phicicle',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'ron027257',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'fur1na__',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: '00ee8a',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'alf2003_14729',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'pedrotheawsomeguy',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'david342013',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}];
const pmSoundSubmittors = [
// accounts
{
  text: 'ddededodediamante',
  image: "https://github.com/ddededodediamante.png",
  href: "https://github.com/ddededodediamante/"
}, {
  text: 'concertalyis',
  image: "https://github.com/concertalyis.png",
  href: "https://github.com/concertalyis/"
}, {
  text: 'G1nX',
  image: "https://trampoline.turbowarp.org/avatars/by-username/G1nX",
  href: "https://scratch.mit.edu/users/G1nX/"
},
// unknown
{
  text: 'maroonmball',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'jn567',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'lukepuke311',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'ma_01',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'poundpound0209',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'cognitixsammy',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'mememaster9000',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'rydia_theawesome',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'jackunavailable',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'hammouda101010',
  image: "https://github.com/hammouda101010.png",
  href: "https://github.com/hammouda101010/"
}, {
  text: 'gdplayer1035',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}];
const extensionDevelopers = ['GarboMuffin', 'griffpatch', 'DT-is-not-available', 'Xeltalliv', 'MikeDev101', 'LilyMakesThings'].map(fromHardcodedGithub);
const pmExtensionDevelopers = ['qbjl', 'NexusKitten', 'Gen1x-ALT', 'SharkPool-SP', 'DogeisCut',
// listed as a collaborator on a SharkPool extension
'David-Orangemoon', 'pooiod', 'WAYLIVES', 'MrRedstonia', 'MikeDev101', 'liablelua', 'AlexSchoolOH', 'Monochromasity', 'LilyMakesThings', 'TheShovel', 'skyhigh173', 'Ruby-Devs', 'oc9x97', 'lego7set', 'mariocraft987', 'AshimeeAlt'].map(fromHardcodedGithub);
const pmCodeUsedFrom = [{
  text: "Gandi-IDE",
  image: "https://github.com/Gandi-IDE.png",
  href: "https://github.com/Gandi-IDE/"
}, {
  text: "TurboWarp",
  image: "https://github.com/TurboWarp.png",
  href: "https://github.com/TurboWarp/"
}, {
  text: "scratchfoundation",
  image: "https://github.com/scratchfoundation.png",
  href: "https://github.com/scratchfoundation/"
}, {
  text: "Nitro-Bolt",
  image: "https://github.com/Nitro-Bolt.png",
  href: "https://github.com/Nitro-Bolt/"
}
// TODO: There are 1000% more projects we've used some stuff from but I don't remember
];
/* harmony default export */ __webpack_exports__["default"] = ({
  addonDevelopers: shuffle(addonDevelopers),
  pmDevelopers: shuffle(pmDevelopers),
  arkideDevs: shuffle(arkideDevs),
  extensionDevelopers: shuffle(extensionDevelopers),
  pmExtensionDevelopers: shuffle(pmExtensionDevelopers),
  pmApiDevelopers: shuffle(pmApiDevelopers),
  pmTranslators: shuffle(pmTranslators),
  pmSoundSubmittors: shuffle(pmSoundSubmittors),
  pmCostumeSubmittors: shuffle(pmCostumeSubmittors),
  pmPullRequestDevelopers: shuffle(pmPullRequestDevelopers),
  pmCodeUsedFrom: shuffle(pmCodeUsedFrom)
});

/***/ })

/******/ });
//# sourceMappingURL=credits.js.map