/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(8)
	function run(){
	    var html = document.querySelector('html');
	    var oWidth = html.getBoundingClientRect().width;
	    var oHeight = html.getBoundingClientRect().height;
	    var bg = document.querySelector('#bg');
	    var pop = 750 / 1206;
	    var a = oWidth / oHeight;
	    var b,c,g;
	    if (a < pop) {
	        b = (oWidth / pop);
	        c  = oWidth;
	    } else {
	        c = (oHeight * pop);
	        b = oHeight;
	    }
	    bg.style.width = c+'px';
	    bg.style.height = b+'px';
	    bg.style.margin = ''+(-b/2)+'px 0 0 '+(-c/2)+'px';
	    var d = oWidth / pop;
	    var e = oHeight*pop;
	    //console.log(d+"=="+e);
	}
	run();
	window.addEventListener('resize',function(){
	    run();

	});

	/*
	 *
	 *
	 *
	 * */




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/.0.26.2@css-loader/index.js!./base.css", function() {
				var newContent = require("!!./node_modules/.0.26.2@css-loader/index.js!./base.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "*,\r\n::after,\r\n::before {\r\n  padding: 0;\r\n  margin: 0;\r\n  -webkit-tap-highlight-color: transparent; /*清除ios默认的点击时产生的高亮区块   rgba(0,0,0,0)*/\r\n  tap-highlight-color: transparent;\r\n  -webkit-box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  font-family: \"sans-serif\";\r\n  font-size: 14px;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #333;\r\n}\r\n\r\ninput, textarea {\r\n  border: 0;\r\n  outline: none;\r\n  resize: none;\r\n  /*-webkit-appearance: none; !*清楚ios浏览器默认的样式*!*/\r\n  /*appearance: none;*/\r\n}\r\n\r\nimg {\r\n  vertical-align: middle; /*清除3px的bug*/\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.clearfix::after,\r\n.clearfix::before {\r\n  content: '';\r\n  clear: both;\r\n  display: block;\r\n  height: 0;\r\n  line-height: 0;\r\n  visibility: hidden;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n}\r\n\r\nvideo{\r\n  display: none;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c76c94ab11a4b871a1e40cc64829c85d.png";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/.0.26.2@css-loader/index.js!./css2.css", function() {
				var newContent = require("!!./node_modules/.0.26.2@css-loader/index.js!./css2.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html,body{\r\n    height:100%;\r\n    width:100%;\r\n    background:url(" + __webpack_require__(7) + ") center top;\r\n}\r\n#bg{\r\n    width:10rem;\r\n    height:16.08rem;\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    margin:-8.04rem 0 0 -5rem;\r\n\ttext-align:center;\r\n}\r\n#bg .head-logo{\r\n    width:82%;\r\n    margin:1% auto;\r\n\tposition:relative;\r\n\tz-index:5;\r\n}\r\n#bg .head-logo img{\r\n    width:100%;\r\n    height:100%;\r\n}\r\n#bg .video{\r\n    width:72%;\r\n    height:36%;\r\n    margin:8% auto;\r\n    position:relative;\r\n\tz-index:5;\r\n}\r\n#bg .video .v1,#bg .video .v2,#bg .video .v3,#bg .video .v4{\r\n    width:46%;\r\n}\r\n#bg .video .v1{\r\n    float:left;\r\n}\r\n#bg .video .v2{\r\n    float:right;\r\n}\r\n#bg .video .v3{\r\n    position:absolute;\r\n    left:0;\r\n    bottom:0;\r\n}\r\n#bg .video .v4{\r\n    position:absolute;\r\n    right:0;\r\n    bottom:0;\r\n}\r\n#bg .video img{\r\n    width:100%;\r\n    height:100%;\r\n}\r\n#bg .ty{\r\n    height:20px;\r\n    margin:0 auto;\r\n\tdisplay:inline-block;\r\n\tposition:relative;\r\n\tz-index:5;\r\n}\r\n#bg .ty .dg{\r\n    float:left;\r\n    border:1px solid #FAE4AB;\r\n    height:14px;\r\n    width:14px;\r\n    margin-top:0.05rem;\r\n}\r\n#bg .ty .dr{\r\n    color:#FAE4AB;\r\n    font-size:0.21rem;\r\n}\r\n#bg .ty .dr span{\r\n    font-size:inherit;\r\n}\r\n#bg .ty .dr a{\r\n    color:#3F0BF7;\r\n    font-size:inherit;\r\n}\r\n#bg .xf{\r\n    width:26%;\r\n    margin:4% auto;\r\n\tposition:relative;\r\n\tz-index:5;\r\n    background-color:#fae4ab;\r\n    border-radius:5px;\r\n    color:#d82232;\r\n    padding:5px 0;\r\n    letter-spacing:0.1rem;\r\n}\r\n#bg .xf img{\r\n    width:100%;\r\n    height:100%;\r\n}\r\n#bg .sz{\r\n    width:30%;\r\n    margin:4% auto;\r\n\tposition:relative;\r\n\tz-index:5;\r\n    background-color:#fae4ab;\r\n    color:#d82232;\r\n    border-radius:5px;\r\n    letter-spacing:0.1rem;\r\n    padding:5px 0;\r\n}\r\n#bg .sz img{\r\n    width:100%;\r\n    height:100%;\r\n}\r\n#bg2{\r\n    width:80.5%;\r\n    height:32.58%;\r\n    position:absolute;\r\n    bottom:0;\r\n    left:50%;\r\n    margin-left:-40.25%;\r\n}\r\n#bg2 img{\r\n    width:100%;\r\n    height:100%;\r\n    margin-left:0;\r\n    left:0;\r\n    position:relative;\r\n}", ""]);

	// exports


/***/ }
/******/ ]);