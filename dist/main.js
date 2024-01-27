/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Roboto-Regular.ttf */ "./src/font/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/check-black.svg */ "./src/img/check-black.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Roboto';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

:root {
  --clr-primary: rgb(0, 0, 0);
  --clr-secondary: rgb(255, 255, 255);
  --clr-text: #16100e;
}

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  font-size: 3rem;
  font-weight: bold;
  padding: 1rem;
  background-color: #8c8e6c;
  color: var(--clr-text);
  & img {
    width: 2.4rem;
  }
}

main {
  flex: 1;
  display: flex;
}

#sidebar {
  background-color: #827484;
  width: 220px;
  padding: 1rem 0.1rem 0 0.1rem;
}

#projects > * {
  display: flex;
  /* Selects the button containing the project name */
  & :first-child {
    flex: 1;
    text-align: left;
    padding-left: 0.5rem;
  }
  & :first-child::before {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  }
  /* Selects both buttons in the div */
  & > * {
    background-color: transparent;
    border: 0;
    border-radius: 0.4rem;
    font-size: 1.3rem;
    padding: 0.1rem;
  }
  & button:hover {
    background-color: #c8aecc;
  }
}

/* ADD TASK AND ADD PROJECT BUTTONS STYLING */
.adderBtn {
  border: 0;
  border-radius: 0.4rem;
  font-size: 1.1rem;
  background-color: transparent;
  padding: 0.4rem;
}

#addProjectBtnContainer,
#addTaskBtnContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.adderBtn:hover {
  background-color: black;
  color: white;
}

/* TASK STYLING */
#container {
  background-color: #c39172;
  flex: 7;
}

#parentProject {
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  padding: 0.7rem;
  background-color: #8c8e6c;
  border-radius: 0.4rem;
}

#tasks {
  margin: 1rem;
  padding: 1rem;
}

.taskCard {
  width: 60%;
  background-color: #8c8e6c;
  border-radius: 0.4rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.33rem;

  & input[type='checkbox'] {
    margin: 0 0.5rem 0 0.5rem;
  }
  & :nth-child(2) {
    flex: 1;
  }
  & input[type='date'] {
    margin: 0 0.5rem 0 0.5rem;
  }
  & button {
    background-color: transparent;
    border: 0;
    border-radius: 0.4rem;
    margin-right: 0.2rem;
    width: 1.2rem;
  }
  & button:hover {
    background-color: #d0d3a1;
  }
}

footer {
  background-color: #8c8e6c;
  text-align: center;
  color: var(--clr-text);
  & a {
    color: #6e4b30;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAqC;AACvC;;AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,2BAA2B;EAC3B,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,yBAAyB;EACzB,sBAAsB;EACtB;IACE,aAAa;EACf;AACF;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mDAAmD;EACnD;IACE,OAAO;IACP,gBAAgB;IAChB,oBAAoB;EACtB;EACA;IACE,yDAA8C;EAChD;EACA,oCAAoC;EACpC;IACE,6BAA6B;IAC7B,SAAS;IACT,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;EACjB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA,6CAA6C;AAC7C;EACE,SAAS;EACT,qBAAqB;EACrB,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA,iBAAiB;AACjB;EACE,yBAAyB;EACzB,OAAO;AACT;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,qBAAqB;EACrB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;;EAElB;IACE,yBAAyB;EAC3B;EACA;IACE,OAAO;EACT;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;IAC7B,SAAS;IACT,qBAAqB;IACrB,oBAAoB;IACpB,aAAa;EACf;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;EACtB;IACE,cAAc;EAChB;AACF","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./font/Roboto-Regular.ttf');\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\n:root {\n  --clr-primary: rgb(0, 0, 0);\n  --clr-secondary: rgb(255, 255, 255);\n  --clr-text: #16100e;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  font-size: 3rem;\n  font-weight: bold;\n  padding: 1rem;\n  background-color: #8c8e6c;\n  color: var(--clr-text);\n  & img {\n    width: 2.4rem;\n  }\n}\n\nmain {\n  flex: 1;\n  display: flex;\n}\n\n#sidebar {\n  background-color: #827484;\n  width: 220px;\n  padding: 1rem 0.1rem 0 0.1rem;\n}\n\n#projects > * {\n  display: flex;\n  /* Selects the button containing the project name */\n  & :first-child {\n    flex: 1;\n    text-align: left;\n    padding-left: 0.5rem;\n  }\n  & :first-child::before {\n    background-image: url('./img/check-black.svg');\n  }\n  /* Selects both buttons in the div */\n  & > * {\n    background-color: transparent;\n    border: 0;\n    border-radius: 0.4rem;\n    font-size: 1.3rem;\n    padding: 0.1rem;\n  }\n  & button:hover {\n    background-color: #c8aecc;\n  }\n}\n\n/* ADD TASK AND ADD PROJECT BUTTONS STYLING */\n.adderBtn {\n  border: 0;\n  border-radius: 0.4rem;\n  font-size: 1.1rem;\n  background-color: transparent;\n  padding: 0.4rem;\n}\n\n#addProjectBtnContainer,\n#addTaskBtnContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.adderBtn:hover {\n  background-color: black;\n  color: white;\n}\n\n/* TASK STYLING */\n#container {\n  background-color: #c39172;\n  flex: 7;\n}\n\n#parentProject {\n  font-size: 2rem;\n  text-align: center;\n  margin-top: 2rem;\n  margin-left: auto;\n  margin-right: auto;\n  width: fit-content;\n  padding: 0.7rem;\n  background-color: #8c8e6c;\n  border-radius: 0.4rem;\n}\n\n#tasks {\n  margin: 1rem;\n  padding: 1rem;\n}\n\n.taskCard {\n  width: 60%;\n  background-color: #8c8e6c;\n  border-radius: 0.4rem;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  font-size: 1.33rem;\n\n  & input[type='checkbox'] {\n    margin: 0 0.5rem 0 0.5rem;\n  }\n  & :nth-child(2) {\n    flex: 1;\n  }\n  & input[type='date'] {\n    margin: 0 0.5rem 0 0.5rem;\n  }\n  & button {\n    background-color: transparent;\n    border: 0;\n    border-radius: 0.4rem;\n    margin-right: 0.2rem;\n    width: 1.2rem;\n  }\n  & button:hover {\n    background-color: #d0d3a1;\n  }\n}\n\nfooter {\n  background-color: #8c8e6c;\n  text-align: center;\n  color: var(--clr-text);\n  & a {\n    color: #6e4b30;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoApp: () => (/* binding */ todoApp)
/* harmony export */ });
function todoApp() {
  const projectList = [];
  const taskList = [];
  let currentProject = 0;

  const printAll = () => {
    console.log('\n******Project List:******');
    for (let i = 0; i < projectList.length; i++) {
      if (currentProject === i) {
        console.log(projectList[i].getName() + ' <<<<<<');
      } else {
        console.log(projectList[i].getName());
      }
    }
    console.log('\n++++++++Task List:++++++++');
    for (const task of taskList) {
      console.log(task.getParent() + ': ' + task.getName());
    }
  };

  const addProject = (newProject) => {
    for (const project of projectList) {
      if (project.getName() === newProject) {
        console.log(`A project called '${newProject}' already exists.`);
        return;
      }
    }

    projectList.push(Project(newProject));
    displayProjects();
    // The newly created project becomes the focus
    currentProject = projectList.length - 1;
  };

  const removeProject = (unwantedProject) => {
    if (unwantedProject === 'Inbox') {
      return;
    }

    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].getName() === unwantedProject) {
        projectList.splice(i, 1);

        // TODO: remove the tasks belonging to the deleted project
        for (let j = taskList.length - 1; j >= 0; j--) {
          if (taskList[j].getParent() === unwantedProject) {
            taskList.splice(j, 1);
          }
        }

        // Back to Inbox project
        selectProject('Inbox');
        displayProjects();
        printAll();
        return;
      }
    }
  };

  const selectProject = (wanted) => {
    /*
     * I chose a for loop rather than an Array method because the
     * currentProject variable is an index of the projectList array
     */
    for (let i = 0; i < projectList.length; i++) {
      if (wanted === projectList[i].getName()) {
        currentProject = i;
        displayTasks();
      }
    }

    const parentProject = document.getElementById('parentProject');
    parentProject.textContent = wanted;
  };

  const getProjects = () => projectList;

  const getCurrentProject = () => currentProject;

  const addTask = (newTask) => {
    // Check if task already exists
    if (taskList.length !== 0) {
      for (const task of taskList) {
        if (
          task.getParent() === getProjects()[getCurrentProject()].getName() &&
          task.getName() === newTask
        ) {
          // Refuse to add task because it exists
          console.log(
            `A task called '${newTask}' in project '${getProjects()[
              getCurrentProject()
            ].getName()}' already exists.`
          );
          return;
        }
      }
    }

    // Add task to task list
    taskList.push(Task(newTask, getProjects()[getCurrentProject()].getName()));
    console.log(
      `New task '${newTask}' in project '${getProjects()[
        getCurrentProject()
      ].getName()}' added.`
    );
  };

  const removeTask = (unwantedTask) => {
    /*
     * I chose to use a for loop instead of an Array method because
     * the splice method is so useful and requires the array index
     */
    for (let i = 0; i < taskList.length; i++) {
      if (
        taskList[i].getName() === unwantedTask &&
        taskList[i].getParent() === getProjects()[getCurrentProject()].getName()
      ) {
        taskList.splice(i, 1);
        displayTasks();
        printAll();
        return;
      }
    }
  };

  const storeLocally = () => {
    // Store the projects
    const projectNames = projectList.map((project) => {
      return project.getName();
    });
    localStorage.setItem('localProjects', JSON.stringify(projectNames));

    // Store the tasks
    const taskNames = taskList.map((task) => {
      const parentName = task.getParent();
      const taskName = task.getName();
      const fullName = `${parentName}#$%${taskName}`;
      return fullName;
    });

    localStorage.setItem('localTasks', JSON.stringify(taskNames));
  };

  const readLocally = () => {
    // Retrieve the projects from storage
    const localProjects = JSON.parse(localStorage.getItem('localProjects'));

    // If there's something in storage
    if (localProjects) {
      localProjects.forEach((project) => {
        // Add each name found in storage as a project
        addProject(project);
      });
    }

    // Retrieve the tasks from storage
    const localTasks = JSON.parse(localStorage.getItem('localTasks'));

    // If there's something in storage
    if (localTasks) {
      localTasks.forEach((item) => {
        const projectTask = item.split('#$%');
        // Select the project first
        selectProject(projectTask[0]);
        // Then add the task to the project
        addTask(projectTask[1]);
      });
    }
  };

  const displayTasks = () => {
    // TODO: display tasks from the current project only
    const tasksDiv = document.getElementById('tasks');
    const currentProjectName = projectList[getCurrentProject()].getName();

    // Remove all tasks from the container, add current project tasks
    while (tasksDiv.firstChild) {
      tasksDiv.removeChild(tasksDiv.lastChild);
    }

    // Add relevant tasks to the container
    for (const task of taskList) {
      if (task.getParent() === currentProjectName) {
        const taskCard = document.createElement('div');
        const taskCheck = document.createElement('div');
        const taskCheckInput = document.createElement('input');
        const taskName = document.createElement('div');
        const taskDate = document.createElement('div');
        const taskDateInput = document.createElement('input');
        const taskDelete = document.createElement('div');
        const taskDeleteBtn = document.createElement('button');

        taskCard.classList.add('taskCard');
        taskCheckInput.setAttribute('type', 'checkbox');
        taskName.textContent = task.getName();
        taskDateInput.setAttribute('type', 'date');
        taskDateInput.valueAsDate = task.getDate();
        taskDeleteBtn.textContent = '✖';

        taskDeleteBtn.addEventListener('click', () => {
          removeTask(task.getName());
        });

        taskCheck.appendChild(taskCheckInput);
        taskDate.appendChild(taskDateInput);
        taskDelete.appendChild(taskDeleteBtn);
        taskCard.appendChild(taskCheck);
        taskCard.appendChild(taskName);
        taskCard.appendChild(taskDate);
        taskCard.appendChild(taskDate);
        taskCard.appendChild(taskDelete);
        tasksDiv.appendChild(taskCard);
      }
    }
  };

  const displayProjects = () => {
    const projectsDiv = document.getElementById('projects');

    // Remove all projects from the sidebar, re-add them later
    while (projectsDiv.firstChild) {
      projectsDiv.removeChild(projectsDiv.lastChild);
    }

    // FIXME: This can't be the best way to accomplish the goal
    projectList.forEach((element) => {
      const project = document.createElement('div');
      const selectMe = document.createElement('button');
      const deleteMe = document.createElement('button');
      const elementName = element.getName();

      selectMe.textContent = elementName;
      deleteMe.textContent = '✖';

      selectMe.addEventListener('click', () => {
        selectProject(elementName);
      });

      deleteMe.addEventListener('click', () => {
        removeProject(elementName);
      });

      project.appendChild(selectMe);
      if (elementName !== 'Inbox') project.appendChild(deleteMe);
      projectsDiv.appendChild(project);
    });

    // Add a black line between the projects and the 'add project' button
    const line = document.createElement('hr');
    line.style.borderColor = 'black';
    line.style.marginTop = '10px';
    line.style.marginBottom = '10px';
    projectsDiv.appendChild(line);
  };

  const newProjectInput = () => {
    // The input and buttons and everything should be built in page.js
    // Here, all I should do i activate the buttons and make the divs
    // either hidden or visible, then process the input. Tomorrow!
    const addProjectBtn = document.getElementById('addProjectBtn');
    const hiddenDiv = document.getElementById('hiddenProject');
    const projectConfirm = document.getElementById('projectConfirm');
    const projectCancel = document.getElementById('projectCancel');
    const projectInput = document.getElementById('projectInput');

    projectConfirm.addEventListener('click', () => {
      console.log('Do something more than console.log');
      addProject(projectInput.value);
      projectInput.value = '';
      hiddenDiv.setAttribute('hidden', true);
      addProjectBtn.removeAttribute('hidden');
    });

    projectCancel.addEventListener('click', () => {
      console.log('Do something more than console.log');
      projectInput.value = '';
      hiddenDiv.setAttribute('hidden', true);
      addProjectBtn.removeAttribute('hidden');
    });
  };

  return {
    printAll,
    addProject,
    removeProject,
    getCurrentProject,
    getProjects,
    selectProject,
    addTask,
    removeTask,
    storeLocally,
    readLocally,
    newProjectInput,
  };
}

function Project(string) {
  // const id = 1;
  let name = string;

  const getName = () => {
    return name;
  };

  const setName = (newName) => {
    name = newName;
  };

  return { getName, setName };
}

function Task(taskName, projectName) {
  // const id = 1;
  let parentProject = projectName;
  let name = taskName;
  let dueDate = new Date();

  const getDate = () => {
    return dueDate;
  };

  const setDate = (newDate) => {
    dueDate = newDate;
  };

  const getName = () => {
    return name;
  };

  const getParent = () => {
    return parentProject;
  };

  const setName = (newName) => {
    name = newName;
  };

  return { getDate, setDate, getName, getParent, setName };
}




/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildPage: () => (/* binding */ buildPage)
/* harmony export */ });
/* harmony import */ var _img_check_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/check.svg */ "./src/img/check.svg");
/* harmony import */ var _img_check_black_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/check-black.svg */ "./src/img/check-black.svg");



function changeFavicon() {
  const head = document.querySelector('head');
  const linkEl = document.createElement('link');
  linkEl.rel = 'icon';
  linkEl.href = _img_check_svg__WEBPACK_IMPORTED_MODULE_0__;
  head.appendChild(linkEl);
}

function buildHeader() {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  const headerIcon = new Image();

  headerIcon.src = _img_check_black_svg__WEBPACK_IMPORTED_MODULE_1__;
  header.textContent = 'To Do';

  header.prepend(headerIcon);
  body.prepend(header);
}

function buildSidebar() {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  const sidebar = document.createElement('div');
  const projects = document.createElement('div');
  const addProject = document.createElement('div');
  const addProjectBtn = document.createElement('button');

  sidebar.setAttribute('id', 'sidebar');
  projects.setAttribute('id', 'projects');

  addProject.setAttribute('id', 'addProjectBtnContainer');

  addProjectBtn.textContent = '+Project';
  addProjectBtn.setAttribute('id', 'addProjectBtn');
  addProjectBtn.classList.add('adderBtn');
  addProjectBtn.addEventListener('click', () => {
    const hiddenDiv = document.getElementById('hiddenProject');
    const projectInput = document.getElementById('projectInput');
    console.log('I need to be built! (probably in another module)');
    addProjectBtn.setAttribute('hidden', true);
    hiddenDiv.removeAttribute('hidden');
    projectInput.focus();
  });

  addProject.appendChild(addProjectBtn);
  sidebar.appendChild(projects);
  sidebar.appendChild(addProject);
  addProject.appendChild(addProjectBtn);
  main.appendChild(sidebar);
  body.appendChild(main);
}

function buildSidebarInput() {
  const newProjectDiv = document.getElementById('addProjectBtnContainer');
  const hiddenDiv = document.createElement('div');
  const inputDiv = document.createElement('div');
  const inputText = document.createElement('input');
  const btnDiv = document.createElement('div');
  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  hiddenDiv.setAttribute('hidden', true);
  hiddenDiv.setAttribute('id', 'hiddenProject');

  inputText.setAttribute('type', 'text');
  inputText.setAttribute('placeholder', 'Project Name');
  inputText.classList.add('textInput');
  inputText.setAttribute('id', 'projectInput');

  confirmBtn.textContent = 'Confirm';
  confirmBtn.setAttribute('id', 'projectConfirm');

  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('id', 'projectCancel');

  btnDiv.appendChild(confirmBtn);
  btnDiv.appendChild(cancelBtn);
  inputDiv.appendChild(inputText);
  inputDiv.appendChild(btnDiv);
  hiddenDiv.appendChild(inputDiv);
  hiddenDiv.appendChild(btnDiv);
  newProjectDiv.appendChild(hiddenDiv);
}

function buildTaskContainer() {
  const main = document.querySelector('main');
  const container = document.createElement('div');
  const parentProject = document.createElement('div');
  const tasks = document.createElement('div');
  const addTask = document.createElement('div');
  const addTaskBtn = document.createElement('button');

  parentProject.setAttribute('id', 'parentProject');
  container.setAttribute('id', 'container');
  tasks.setAttribute('id', 'tasks');

  addTask.setAttribute('id', 'addTaskBtnContainer');

  addTaskBtn.textContent = '+Task';
  addTaskBtn.setAttribute('id', 'addTaskBtn');
  addTaskBtn.classList.add('adderBtn');
  addTaskBtn.addEventListener('click', () => {
    console.log('I need to be built! (probably in another module)');
  });

  addTask.appendChild(addTaskBtn);
  container.appendChild(parentProject);
  container.appendChild(tasks);
  container.appendChild(addTask);
  main.appendChild(container);
}

function buildFooter() {
  const body = document.querySelector('body');
  const footer = document.createElement('footer');

  footer.innerHTML = `By <a href="https://github.com/erreurDeSyntaxe/">ErreurDeSyntaxe</a> for
      <a href="https://www.theodinproject.com/">The Odin Project</a>`;

  body.appendChild(footer);
}

function buildPage() {
  changeFavicon();
  buildHeader();
  buildSidebar();
  buildSidebarInput();
  buildTaskContainer();
  buildFooter();
}




/***/ }),

/***/ "./src/font/Roboto-Regular.ttf":
/*!*************************************!*\
  !*** ./src/font/Roboto-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/img/check-black.svg":
/*!*********************************!*\
  !*** ./src/img/check-black.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "796248e3a5212ae9aae9.svg";

/***/ }),

/***/ "./src/img/check.svg":
/*!***************************!*\
  !*** ./src/img/check.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a21712602264c1aece0e.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/logic.js");




(0,_page__WEBPACK_IMPORTED_MODULE_1__.buildPage)();
const app = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.todoApp)();
app.newProjectInput();
app.readLocally();
app.addProject('Inbox');
app.selectProject('Inbox');
app.addProject('Exercise');
app.selectProject('Exercise');
app.addTask('Jog 20 minutes');
app.addProject('Work');
app.selectProject('Work');
app.addProject('Reading');
app.selectProject('Reading');
app.selectProject('Inbox');
app.addTask('Live and let die');
app.selectProject('Reading');
app.addTask('LOTR');
app.printAll();
app.storeLocally();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFZnQjtBQUNXOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQ0FBSTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpREFBUztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZJckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUNEOztBQUVsQyxnREFBUztBQUNULFlBQVksK0NBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvY2hlY2stYmxhY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gIC0tY2xyLXByaW1hcnk6IHJnYigwLCAwLCAwKTtcbiAgLS1jbHItc2Vjb25kYXJ5OiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0tY2xyLXRleHQ6ICMxNjEwMGU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oZWFkZXIge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM4ZTZjO1xuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xuICAmIGltZyB7XG4gICAgd2lkdGg6IDIuNHJlbTtcbiAgfVxufVxuXG5tYWluIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI3NpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI3NDg0O1xuICB3aWR0aDogMjIwcHg7XG4gIHBhZGRpbmc6IDFyZW0gMC4xcmVtIDAgMC4xcmVtO1xufVxuXG4jcHJvamVjdHMgPiAqIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogU2VsZWN0cyB0aGUgYnV0dG9uIGNvbnRhaW5pbmcgdGhlIHByb2plY3QgbmFtZSAqL1xuICAmIDpmaXJzdC1jaGlsZCB7XG4gICAgZmxleDogMTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICB9XG4gICYgOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgfVxuICAvKiBTZWxlY3RzIGJvdGggYnV0dG9ucyBpbiB0aGUgZGl2ICovXG4gICYgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHBhZGRpbmc6IDAuMXJlbTtcbiAgfVxuICAmIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4YWVjYztcbiAgfVxufVxuXG4vKiBBREQgVEFTSyBBTkQgQUREIFBST0pFQ1QgQlVUVE9OUyBTVFlMSU5HICovXG4uYWRkZXJCdG4ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjRyZW07XG59XG5cbiNhZGRQcm9qZWN0QnRuQ29udGFpbmVyLFxuI2FkZFRhc2tCdG5Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZGVyQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogVEFTSyBTVFlMSU5HICovXG4jY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzOTE3MjtcbiAgZmxleDogNztcbn1cblxuI3BhcmVudFByb2plY3Qge1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAwLjdyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzhlNmM7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbn1cblxuI3Rhc2tzIHtcbiAgbWFyZ2luOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4udGFza0NhcmQge1xuICB3aWR0aDogNjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM4ZTZjO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4zM3JlbTtcblxuICAmIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XG4gIH1cbiAgJiA6bnRoLWNoaWxkKDIpIHtcbiAgICBmbGV4OiAxO1xuICB9XG4gICYgaW5wdXRbdHlwZT0nZGF0ZSddIHtcbiAgICBtYXJnaW46IDAgMC41cmVtIDAgMC41cmVtO1xuICB9XG4gICYgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xuICAgIHdpZHRoOiAxLjJyZW07XG4gIH1cbiAgJiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGQzYTE7XG4gIH1cbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjOGU2YztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xuICAmIGEge1xuICAgIGNvbG9yOiAjNmU0YjMwO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQXFDO0FBQ3ZDOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QjtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1EQUFtRDtFQUNuRDtJQUNFLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5REFBOEM7RUFDaEQ7RUFDQSxvQ0FBb0M7RUFDcEM7SUFDRSw2QkFBNkI7SUFDN0IsU0FBUztJQUNULHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0UsU0FBUztFQUNULHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx5QkFBeUI7RUFDekIsT0FBTztBQUNUOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjs7RUFFbEI7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLE9BQU87RUFDVDtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsU0FBUztJQUNULHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsYUFBYTtFQUNmO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCO0lBQ0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4vZm9udC9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2xyLXByaW1hcnk6IHJnYigwLCAwLCAwKTtcXG4gIC0tY2xyLXNlY29uZGFyeTogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS1jbHItdGV4dDogIzE2MTAwZTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM4ZTZjO1xcbiAgY29sb3I6IHZhcigtLWNsci10ZXh0KTtcXG4gICYgaW1nIHtcXG4gICAgd2lkdGg6IDIuNHJlbTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyNzQ4NDtcXG4gIHdpZHRoOiAyMjBweDtcXG4gIHBhZGRpbmc6IDFyZW0gMC4xcmVtIDAgMC4xcmVtO1xcbn1cXG5cXG4jcHJvamVjdHMgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBTZWxlY3RzIHRoZSBidXR0b24gY29udGFpbmluZyB0aGUgcHJvamVjdCBuYW1lICovXFxuICAmIDpmaXJzdC1jaGlsZCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcbiAgJiA6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvY2hlY2stYmxhY2suc3ZnJyk7XFxuICB9XFxuICAvKiBTZWxlY3RzIGJvdGggYnV0dG9ucyBpbiB0aGUgZGl2ICovXFxuICAmID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG4gIH1cXG4gICYgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4YWVjYztcXG4gIH1cXG59XFxuXFxuLyogQUREIFRBU0sgQU5EIEFERCBQUk9KRUNUIEJVVFRPTlMgU1RZTElORyAqL1xcbi5hZGRlckJ0biB7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC40cmVtO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ0bkNvbnRhaW5lcixcXG4jYWRkVGFza0J0bkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZGVyQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBUQVNLIFNUWUxJTkcgKi9cXG4jY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzkxNzI7XFxuICBmbGV4OiA3O1xcbn1cXG5cXG4jcGFyZW50UHJvamVjdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM4ZTZjO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhc2tDYXJkIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM4ZTZjO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMC40cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zM3JlbTtcXG5cXG4gICYgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XFxuICB9XFxuICAmIDpudGgtY2hpbGQoMikge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcbiAgJiBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBtYXJnaW46IDAgMC41cmVtIDAgMC41cmVtO1xcbiAgfVxcbiAgJiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgfVxcbiAgJiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkM2ExO1xcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjOGU2YztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxuICAmIGEge1xcbiAgICBjb2xvcjogIzZlNGIzMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiB0b2RvQXBwKCkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICBjb25zdCB0YXNrTGlzdCA9IFtdO1xuICBsZXQgY3VycmVudFByb2plY3QgPSAwO1xuXG4gIGNvbnN0IHByaW50QWxsID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdcXG4qKioqKipQcm9qZWN0IExpc3Q6KioqKioqJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSBpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0W2ldLmdldE5hbWUoKSArICcgPDw8PDw8Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdFtpXS5nZXROYW1lKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnXFxuKysrKysrKytUYXNrIExpc3Q6KysrKysrKysnKTtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza0xpc3QpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2suZ2V0UGFyZW50KCkgKyAnOiAnICsgdGFzay5nZXROYW1lKCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gbmV3UHJvamVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQSBwcm9qZWN0IGNhbGxlZCAnJHtuZXdQcm9qZWN0fScgYWxyZWFkeSBleGlzdHMuYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9qZWN0TGlzdC5wdXNoKFByb2plY3QobmV3UHJvamVjdCkpO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIC8vIFRoZSBuZXdseSBjcmVhdGVkIHByb2plY3QgYmVjb21lcyB0aGUgZm9jdXNcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0Lmxlbmd0aCAtIDE7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICh1bndhbnRlZFByb2plY3QpID0+IHtcbiAgICBpZiAodW53YW50ZWRQcm9qZWN0ID09PSAnSW5ib3gnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RMaXN0W2ldLmdldE5hbWUoKSA9PT0gdW53YW50ZWRQcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3RMaXN0LnNwbGljZShpLCAxKTtcblxuICAgICAgICAvLyBUT0RPOiByZW1vdmUgdGhlIHRhc2tzIGJlbG9uZ2luZyB0byB0aGUgZGVsZXRlZCBwcm9qZWN0XG4gICAgICAgIGZvciAobGV0IGogPSB0YXNrTGlzdC5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgIGlmICh0YXNrTGlzdFtqXS5nZXRQYXJlbnQoKSA9PT0gdW53YW50ZWRQcm9qZWN0KSB7XG4gICAgICAgICAgICB0YXNrTGlzdC5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmFjayB0byBJbmJveCBwcm9qZWN0XG4gICAgICAgIHNlbGVjdFByb2plY3QoJ0luYm94Jyk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICBwcmludEFsbCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSAod2FudGVkKSA9PiB7XG4gICAgLypcbiAgICAgKiBJIGNob3NlIGEgZm9yIGxvb3AgcmF0aGVyIHRoYW4gYW4gQXJyYXkgbWV0aG9kIGJlY2F1c2UgdGhlXG4gICAgICogY3VycmVudFByb2plY3QgdmFyaWFibGUgaXMgYW4gaW5kZXggb2YgdGhlIHByb2plY3RMaXN0IGFycmF5XG4gICAgICovXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHdhbnRlZCA9PT0gcHJvamVjdExpc3RbaV0uZ2V0TmFtZSgpKSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gaTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJlbnRQcm9qZWN0Jyk7XG4gICAgcGFyZW50UHJvamVjdC50ZXh0Q29udGVudCA9IHdhbnRlZDtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RMaXN0O1xuXG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4gY3VycmVudFByb2plY3Q7XG5cbiAgY29uc3QgYWRkVGFzayA9IChuZXdUYXNrKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGFzayBhbHJlYWR5IGV4aXN0c1xuICAgIGlmICh0YXNrTGlzdC5sZW5ndGggIT09IDApIHtcbiAgICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrTGlzdCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGFzay5nZXRQYXJlbnQoKSA9PT0gZ2V0UHJvamVjdHMoKVtnZXRDdXJyZW50UHJvamVjdCgpXS5nZXROYW1lKCkgJiZcbiAgICAgICAgICB0YXNrLmdldE5hbWUoKSA9PT0gbmV3VGFza1xuICAgICAgICApIHtcbiAgICAgICAgICAvLyBSZWZ1c2UgdG8gYWRkIHRhc2sgYmVjYXVzZSBpdCBleGlzdHNcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBBIHRhc2sgY2FsbGVkICcke25ld1Rhc2t9JyBpbiBwcm9qZWN0ICcke2dldFByb2plY3RzKClbXG4gICAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KClcbiAgICAgICAgICAgIF0uZ2V0TmFtZSgpfScgYWxyZWFkeSBleGlzdHMuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRhc2sgdG8gdGFzayBsaXN0XG4gICAgdGFza0xpc3QucHVzaChUYXNrKG5ld1Rhc2ssIGdldFByb2plY3RzKClbZ2V0Q3VycmVudFByb2plY3QoKV0uZ2V0TmFtZSgpKSk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgTmV3IHRhc2sgJyR7bmV3VGFza30nIGluIHByb2plY3QgJyR7Z2V0UHJvamVjdHMoKVtcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QoKVxuICAgICAgXS5nZXROYW1lKCl9JyBhZGRlZC5gXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrID0gKHVud2FudGVkVGFzaykgPT4ge1xuICAgIC8qXG4gICAgICogSSBjaG9zZSB0byB1c2UgYSBmb3IgbG9vcCBpbnN0ZWFkIG9mIGFuIEFycmF5IG1ldGhvZCBiZWNhdXNlXG4gICAgICogdGhlIHNwbGljZSBtZXRob2QgaXMgc28gdXNlZnVsIGFuZCByZXF1aXJlcyB0aGUgYXJyYXkgaW5kZXhcbiAgICAgKi9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRhc2tMaXN0W2ldLmdldE5hbWUoKSA9PT0gdW53YW50ZWRUYXNrICYmXG4gICAgICAgIHRhc2tMaXN0W2ldLmdldFBhcmVudCgpID09PSBnZXRQcm9qZWN0cygpW2dldEN1cnJlbnRQcm9qZWN0KCldLmdldE5hbWUoKVxuICAgICAgKSB7XG4gICAgICAgIHRhc2tMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIHByaW50QWxsKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RvcmVMb2NhbGx5ID0gKCkgPT4ge1xuICAgIC8vIFN0b3JlIHRoZSBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2plY3ROYW1lcyA9IHByb2plY3RMaXN0Lm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIHByb2plY3QuZ2V0TmFtZSgpO1xuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdE5hbWVzKSk7XG5cbiAgICAvLyBTdG9yZSB0aGUgdGFza3NcbiAgICBjb25zdCB0YXNrTmFtZXMgPSB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudE5hbWUgPSB0YXNrLmdldFBhcmVudCgpO1xuICAgICAgY29uc3QgdGFza05hbWUgPSB0YXNrLmdldE5hbWUoKTtcbiAgICAgIGNvbnN0IGZ1bGxOYW1lID0gYCR7cGFyZW50TmFtZX0jJCUke3Rhc2tOYW1lfWA7XG4gICAgICByZXR1cm4gZnVsbE5hbWU7XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tOYW1lcykpO1xuICB9O1xuXG4gIGNvbnN0IHJlYWRMb2NhbGx5ID0gKCkgPT4ge1xuICAgIC8vIFJldHJpZXZlIHRoZSBwcm9qZWN0cyBmcm9tIHN0b3JhZ2VcbiAgICBjb25zdCBsb2NhbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxQcm9qZWN0cycpKTtcblxuICAgIC8vIElmIHRoZXJlJ3Mgc29tZXRoaW5nIGluIHN0b3JhZ2VcbiAgICBpZiAobG9jYWxQcm9qZWN0cykge1xuICAgICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vIEFkZCBlYWNoIG5hbWUgZm91bmQgaW4gc3RvcmFnZSBhcyBhIHByb2plY3RcbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRoZSB0YXNrcyBmcm9tIHN0b3JhZ2VcbiAgICBjb25zdCBsb2NhbFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxUYXNrcycpKTtcblxuICAgIC8vIElmIHRoZXJlJ3Mgc29tZXRoaW5nIGluIHN0b3JhZ2VcbiAgICBpZiAobG9jYWxUYXNrcykge1xuICAgICAgbG9jYWxUYXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrID0gaXRlbS5zcGxpdCgnIyQlJyk7XG4gICAgICAgIC8vIFNlbGVjdCB0aGUgcHJvamVjdCBmaXJzdFxuICAgICAgICBzZWxlY3RQcm9qZWN0KHByb2plY3RUYXNrWzBdKTtcbiAgICAgICAgLy8gVGhlbiBhZGQgdGhlIHRhc2sgdG8gdGhlIHByb2plY3RcbiAgICAgICAgYWRkVGFzayhwcm9qZWN0VGFza1sxXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuICAgIC8vIFRPRE86IGRpc3BsYXkgdGFza3MgZnJvbSB0aGUgY3VycmVudCBwcm9qZWN0IG9ubHlcbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0TmFtZSA9IHByb2plY3RMaXN0W2dldEN1cnJlbnRQcm9qZWN0KCldLmdldE5hbWUoKTtcblxuICAgIC8vIFJlbW92ZSBhbGwgdGFza3MgZnJvbSB0aGUgY29udGFpbmVyLCBhZGQgY3VycmVudCBwcm9qZWN0IHRhc2tzXG4gICAgd2hpbGUgKHRhc2tzRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRhc2tzRGl2LnJlbW92ZUNoaWxkKHRhc2tzRGl2Lmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlbGV2YW50IHRhc2tzIHRvIHRoZSBjb250YWluZXJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza0xpc3QpIHtcbiAgICAgIGlmICh0YXNrLmdldFBhcmVudCgpID09PSBjdXJyZW50UHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tDaGVja0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkJyk7XG4gICAgICAgIHRhc2tDaGVja0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0TmFtZSgpO1xuICAgICAgICB0YXNrRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIHRhc2tEYXRlSW5wdXQudmFsdWVBc0RhdGUgPSB0YXNrLmdldERhdGUoKTtcbiAgICAgICAgdGFza0RlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICfinJYnO1xuXG4gICAgICAgIHRhc2tEZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlVGFzayh0YXNrLmdldE5hbWUoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhc2tDaGVjay5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tJbnB1dCk7XG4gICAgICAgIHRhc2tEYXRlLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXQpO1xuICAgICAgICB0YXNrRGVsZXRlLmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2spO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcbiAgICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcblxuICAgIC8vIFJlbW92ZSBhbGwgcHJvamVjdHMgZnJvbSB0aGUgc2lkZWJhciwgcmUtYWRkIHRoZW0gbGF0ZXJcbiAgICB3aGlsZSAocHJvamVjdHNEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQocHJvamVjdHNEaXYubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvLyBGSVhNRTogVGhpcyBjYW4ndCBiZSB0aGUgYmVzdCB3YXkgdG8gYWNjb21wbGlzaCB0aGUgZ29hbFxuICAgIHByb2plY3RMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IHNlbGVjdE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb25zdCBkZWxldGVNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgZWxlbWVudE5hbWUgPSBlbGVtZW50LmdldE5hbWUoKTtcblxuICAgICAgc2VsZWN0TWUudGV4dENvbnRlbnQgPSBlbGVtZW50TmFtZTtcbiAgICAgIGRlbGV0ZU1lLnRleHRDb250ZW50ID0gJ+Kclic7XG5cbiAgICAgIHNlbGVjdE1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZWxlY3RQcm9qZWN0KGVsZW1lbnROYW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICBkZWxldGVNZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChlbGVtZW50TmFtZSk7XG4gICAgICB9KTtcblxuICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChzZWxlY3RNZSk7XG4gICAgICBpZiAoZWxlbWVudE5hbWUgIT09ICdJbmJveCcpIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlTWUpO1xuICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYSBibGFjayBsaW5lIGJldHdlZW4gdGhlIHByb2plY3RzIGFuZCB0aGUgJ2FkZCBwcm9qZWN0JyBidXR0b25cbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBsaW5lLnN0eWxlLmJvcmRlckNvbG9yID0gJ2JsYWNrJztcbiAgICBsaW5lLnN0eWxlLm1hcmdpblRvcCA9ICcxMHB4JztcbiAgICBsaW5lLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMHB4JztcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChsaW5lKTtcbiAgfTtcblxuICBjb25zdCBuZXdQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gICAgLy8gVGhlIGlucHV0IGFuZCBidXR0b25zIGFuZCBldmVyeXRoaW5nIHNob3VsZCBiZSBidWlsdCBpbiBwYWdlLmpzXG4gICAgLy8gSGVyZSwgYWxsIEkgc2hvdWxkIGRvIGkgYWN0aXZhdGUgdGhlIGJ1dHRvbnMgYW5kIG1ha2UgdGhlIGRpdnNcbiAgICAvLyBlaXRoZXIgaGlkZGVuIG9yIHZpc2libGUsIHRoZW4gcHJvY2VzcyB0aGUgaW5wdXQuIFRvbW9ycm93IVxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuICAgIGNvbnN0IGhpZGRlbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW5Qcm9qZWN0Jyk7XG4gICAgY29uc3QgcHJvamVjdENvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdENvbmZpcm0nKTtcbiAgICBjb25zdCBwcm9qZWN0Q2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RDYW5jZWwnKTtcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0Jyk7XG5cbiAgICBwcm9qZWN0Q29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdEbyBzb21ldGhpbmcgbW9yZSB0aGFuIGNvbnNvbGUubG9nJyk7XG4gICAgICBhZGRQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgYWRkUHJvamVjdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdEbyBzb21ldGhpbmcgbW9yZSB0aGFuIGNvbnNvbGUubG9nJyk7XG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgYWRkUHJvamVjdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJpbnRBbGwsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICAgIGdldFByb2plY3RzLFxuICAgIHNlbGVjdFByb2plY3QsXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICAgIHN0b3JlTG9jYWxseSxcbiAgICByZWFkTG9jYWxseSxcbiAgICBuZXdQcm9qZWN0SW5wdXQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2plY3Qoc3RyaW5nKSB7XG4gIC8vIGNvbnN0IGlkID0gMTtcbiAgbGV0IG5hbWUgPSBzdHJpbmc7XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBjb25zdCBzZXROYW1lID0gKG5ld05hbWUpID0+IHtcbiAgICBuYW1lID0gbmV3TmFtZTtcbiAgfTtcblxuICByZXR1cm4geyBnZXROYW1lLCBzZXROYW1lIH07XG59XG5cbmZ1bmN0aW9uIFRhc2sodGFza05hbWUsIHByb2plY3ROYW1lKSB7XG4gIC8vIGNvbnN0IGlkID0gMTtcbiAgbGV0IHBhcmVudFByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgbGV0IG5hbWUgPSB0YXNrTmFtZTtcbiAgbGV0IGR1ZURhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGR1ZURhdGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgZHVlRGF0ZSA9IG5ld0RhdGU7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBhcmVudFByb2plY3Q7XG4gIH07XG5cbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgbmFtZSA9IG5ld05hbWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0RGF0ZSwgc2V0RGF0ZSwgZ2V0TmFtZSwgZ2V0UGFyZW50LCBzZXROYW1lIH07XG59XG5cbmV4cG9ydCB7IHRvZG9BcHAgfTtcbiIsImltcG9ydCBJY29uIGZyb20gJy4vaW1nL2NoZWNrLnN2Zyc7XG5pbXBvcnQgSWNvbkJsYWNrIGZyb20gJy4vaW1nL2NoZWNrLWJsYWNrLnN2Zyc7XG5cbmZ1bmN0aW9uIGNoYW5nZUZhdmljb24oKSB7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gIGNvbnN0IGxpbmtFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgbGlua0VsLnJlbCA9ICdpY29uJztcbiAgbGlua0VsLmhyZWYgPSBJY29uO1xuICBoZWFkLmFwcGVuZENoaWxkKGxpbmtFbCk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVySWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gIGhlYWRlckljb24uc3JjID0gSWNvbkJsYWNrO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVG8gRG8nO1xuXG4gIGhlYWRlci5wcmVwZW5kKGhlYWRlckljb24pO1xuICBib2R5LnByZXBlbmQoaGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRTaWRlYmFyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIHNpZGViYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlYmFyJyk7XG4gIHByb2plY3RzLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHMnKTtcblxuICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdEJ0bkNvbnRhaW5lcicpO1xuXG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnK1Byb2plY3QnO1xuICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdEJ0bicpO1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZGVyQnRuJyk7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaGlkZGVuRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlblByb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0Jyk7XG4gICAgY29uc29sZS5sb2coJ0kgbmVlZCB0byBiZSBidWlsdCEgKHByb2JhYmx5IGluIGFub3RoZXIgbW9kdWxlKScpO1xuICAgIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICBoaWRkZW5EaXYucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICBwcm9qZWN0SW5wdXQuZm9jdXMoKTtcbiAgfSk7XG5cbiAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU2lkZWJhcklucHV0KCkge1xuICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdG5Db250YWluZXInKTtcbiAgY29uc3QgaGlkZGVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW5Qcm9qZWN0Jyk7XG5cbiAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGlucHV0VGV4dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgTmFtZScpO1xuICBpbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgndGV4dElucHV0Jyk7XG4gIGlucHV0VGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RJbnB1dCcpO1xuXG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Q29uZmlybScpO1xuXG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Q2FuY2VsJyk7XG5cbiAgYnRuRGl2LmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRUZXh0KTtcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgaGlkZGVuRGl2LmFwcGVuZENoaWxkKGlucHV0RGl2KTtcbiAgaGlkZGVuRGl2LmFwcGVuZENoaWxkKGJ0bkRpdik7XG4gIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQoaGlkZGVuRGl2KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRUYXNrQ29udGFpbmVyKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGFyZW50UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBwYXJlbnRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncGFyZW50UHJvamVjdCcpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbiAgdGFza3Muc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrcycpO1xuXG4gIGFkZFRhc2suc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnRuQ29udGFpbmVyJyk7XG5cbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICcrVGFzayc7XG4gIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnRuJyk7XG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkZXJCdG4nKTtcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnSSBuZWVkIHRvIGJlIGJ1aWx0ISAocHJvYmFibHkgaW4gYW5vdGhlciBtb2R1bGUpJyk7XG4gIH0pO1xuXG4gIGFkZFRhc2suYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJlbnRQcm9qZWN0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2spO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBmb290ZXIuaW5uZXJIVE1MID0gYEJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZXJyZXVyRGVTeW50YXhlL1wiPkVycmV1ckRlU3ludGF4ZTwvYT4gZm9yXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiPlRoZSBPZGluIFByb2plY3Q8L2E+YDtcblxuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUGFnZSgpIHtcbiAgY2hhbmdlRmF2aWNvbigpO1xuICBidWlsZEhlYWRlcigpO1xuICBidWlsZFNpZGViYXIoKTtcbiAgYnVpbGRTaWRlYmFySW5wdXQoKTtcbiAgYnVpbGRUYXNrQ29udGFpbmVyKCk7XG4gIGJ1aWxkRm9vdGVyKCk7XG59XG5cbmV4cG9ydCB7IGJ1aWxkUGFnZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGJ1aWxkUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgeyB0b2RvQXBwIH0gZnJvbSAnLi9sb2dpYyc7XG5cbmJ1aWxkUGFnZSgpO1xuY29uc3QgYXBwID0gdG9kb0FwcCgpO1xuYXBwLm5ld1Byb2plY3RJbnB1dCgpO1xuYXBwLnJlYWRMb2NhbGx5KCk7XG5hcHAuYWRkUHJvamVjdCgnSW5ib3gnKTtcbmFwcC5zZWxlY3RQcm9qZWN0KCdJbmJveCcpO1xuYXBwLmFkZFByb2plY3QoJ0V4ZXJjaXNlJyk7XG5hcHAuc2VsZWN0UHJvamVjdCgnRXhlcmNpc2UnKTtcbmFwcC5hZGRUYXNrKCdKb2cgMjAgbWludXRlcycpO1xuYXBwLmFkZFByb2plY3QoJ1dvcmsnKTtcbmFwcC5zZWxlY3RQcm9qZWN0KCdXb3JrJyk7XG5hcHAuYWRkUHJvamVjdCgnUmVhZGluZycpO1xuYXBwLnNlbGVjdFByb2plY3QoJ1JlYWRpbmcnKTtcbmFwcC5zZWxlY3RQcm9qZWN0KCdJbmJveCcpO1xuYXBwLmFkZFRhc2soJ0xpdmUgYW5kIGxldCBkaWUnKTtcbmFwcC5zZWxlY3RQcm9qZWN0KCdSZWFkaW5nJyk7XG5hcHAuYWRkVGFzaygnTE9UUicpO1xuYXBwLnByaW50QWxsKCk7XG5hcHAuc3RvcmVMb2NhbGx5KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=