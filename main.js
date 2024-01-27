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

/* ADD TASK AND ADD PROJECT STYLING */
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

.textInput {
  height: 1.4rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  margin-bottom: 0.4rem;
}

.confirmBtn {
  border: 0;
  border-radius: 0.4rem;
  padding: 0.4rem;
  background-color: rgb(70, 114, 70);
  width: 50%;
}

.cancelBtn {
  border: 0;
  border-radius: 0.4rem;
  padding: 0.4rem;
  background-color: rgb(150, 54, 54);
  width: 50%;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAqC;AACvC;;AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,2BAA2B;EAC3B,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,yBAAyB;EACzB,sBAAsB;EACtB;IACE,aAAa;EACf;AACF;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mDAAmD;EACnD;IACE,OAAO;IACP,gBAAgB;IAChB,oBAAoB;EACtB;EACA;IACE,yDAA8C;EAChD;EACA,oCAAoC;EACpC;IACE,6BAA6B;IAC7B,SAAS;IACT,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;EACjB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA,qCAAqC;AACrC;EACE,SAAS;EACT,qBAAqB;EACrB,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,qBAAqB;EACrB,eAAe;EACf,kCAAkC;EAClC,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,qBAAqB;EACrB,eAAe;EACf,kCAAkC;EAClC,UAAU;AACZ;;AAEA,iBAAiB;AACjB;EACE,yBAAyB;EACzB,OAAO;AACT;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,qBAAqB;EACrB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;;EAElB;IACE,yBAAyB;EAC3B;EACA;IACE,OAAO;EACT;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;IAC7B,SAAS;IACT,qBAAqB;IACrB,oBAAoB;IACpB,aAAa;EACf;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;EACtB;IACE,cAAc;EAChB;AACF","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./font/Roboto-Regular.ttf');\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\n:root {\n  --clr-primary: rgb(0, 0, 0);\n  --clr-secondary: rgb(255, 255, 255);\n  --clr-text: #16100e;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  font-size: 3rem;\n  font-weight: bold;\n  padding: 1rem;\n  background-color: #8c8e6c;\n  color: var(--clr-text);\n  & img {\n    width: 2.4rem;\n  }\n}\n\nmain {\n  flex: 1;\n  display: flex;\n}\n\n#sidebar {\n  background-color: #827484;\n  width: 220px;\n  padding: 1rem 0.1rem 0 0.1rem;\n}\n\n#projects > * {\n  display: flex;\n  /* Selects the button containing the project name */\n  & :first-child {\n    flex: 1;\n    text-align: left;\n    padding-left: 0.5rem;\n  }\n  & :first-child::before {\n    background-image: url('./img/check-black.svg');\n  }\n  /* Selects both buttons in the div */\n  & > * {\n    background-color: transparent;\n    border: 0;\n    border-radius: 0.4rem;\n    font-size: 1.3rem;\n    padding: 0.1rem;\n  }\n  & button:hover {\n    background-color: #c8aecc;\n  }\n}\n\n/* ADD TASK AND ADD PROJECT STYLING */\n.adderBtn {\n  border: 0;\n  border-radius: 0.4rem;\n  font-size: 1.1rem;\n  background-color: transparent;\n  padding: 0.4rem;\n}\n\n#addProjectBtnContainer,\n#addTaskBtnContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.adderBtn:hover {\n  background-color: black;\n  color: white;\n}\n\n.textInput {\n  height: 1.4rem;\n  padding: 0.4rem;\n  border-radius: 0.4rem;\n  margin-bottom: 0.4rem;\n}\n\n.confirmBtn {\n  border: 0;\n  border-radius: 0.4rem;\n  padding: 0.4rem;\n  background-color: rgb(70, 114, 70);\n  width: 50%;\n}\n\n.cancelBtn {\n  border: 0;\n  border-radius: 0.4rem;\n  padding: 0.4rem;\n  background-color: rgb(150, 54, 54);\n  width: 50%;\n}\n\n/* TASK STYLING */\n#container {\n  background-color: #c39172;\n  flex: 7;\n}\n\n#parentProject {\n  font-size: 2rem;\n  text-align: center;\n  margin-top: 2rem;\n  margin-left: auto;\n  margin-right: auto;\n  width: fit-content;\n  padding: 0.7rem;\n  background-color: #8c8e6c;\n  border-radius: 0.4rem;\n}\n\n#tasks {\n  margin: 1rem;\n  padding: 1rem;\n}\n\n.taskCard {\n  width: 60%;\n  background-color: #8c8e6c;\n  border-radius: 0.4rem;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  font-size: 1.33rem;\n\n  & input[type='checkbox'] {\n    margin: 0 0.5rem 0 0.5rem;\n  }\n  & :nth-child(2) {\n    flex: 1;\n  }\n  & input[type='date'] {\n    margin: 0 0.5rem 0 0.5rem;\n  }\n  & button {\n    background-color: transparent;\n    border: 0;\n    border-radius: 0.4rem;\n    margin-right: 0.2rem;\n    width: 1.2rem;\n  }\n  & button:hover {\n    background-color: #d0d3a1;\n  }\n}\n\nfooter {\n  background-color: #8c8e6c;\n  text-align: center;\n  color: var(--clr-text);\n  & a {\n    color: #6e4b30;\n  }\n}\n"],"sourceRoot":""}]);
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
    if (newProject === '') return;

    // Check if the project already exists
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
    storeLocally();
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
    if (newTask === '') return;

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
    displayTasks();
    storeLocally();
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
    if (taskList.length === 0) return;
    const taskNames = taskList.map((task) => {
      const parentName = task.getParent();
      const taskName = task.getName();
      const fullName = `${parentName}#$%${taskName}`;
      return fullName;
    });

    console.table(taskNames);
    localStorage.setItem('localTasks', JSON.stringify(taskNames));
  };

  const readLocally = () => {
    // Retrieve the projects from storage
    const localProjects = JSON.parse(localStorage.getItem('localProjects'));

    // If there's something in storage
    if (localProjects) {
      if (localProjects.length > 0) {
        localProjects.forEach((project) => {
          // Add each name found in storage as a project
          addProject(project);
        });
      }
    }

    // Retrieve the tasks from storage
    const localTasks = JSON.parse(localStorage.getItem('localTasks'));

    // If there's something in storage
    if (localTasks) {
      if (localTasks.length > 0) {
        localTasks.forEach((item) => {
          const projectTask = item.split('#$%');
          // Select the project first
          selectProject(projectTask[0]);
          // Then add the task to the project
          addTask(projectTask[1]);
        });
      }
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
      if (projectInput.value !== '') {
        addProject(projectInput.value);
        selectProject(projectInput.value);
        projectInput.value = '';
        hiddenDiv.setAttribute('hidden', true);
        addProjectBtn.removeAttribute('hidden');
      } else {
        projectInput.focus();
      }
    });

    projectCancel.addEventListener('click', () => {
      projectInput.value = '';
      hiddenDiv.setAttribute('hidden', true);
      addProjectBtn.removeAttribute('hidden');
    });
  };

  const newTaskInput = () => {
    // The input and buttons and everything should be built in page.js
    // Here, all I should do i activate the buttons and make the divs
    // either hidden or visible, then process the input. Tomorrow!
    const addTaskBtn = document.getElementById('addTaskBtn');
    const hiddenDiv = document.getElementById('hiddenTask');
    const taskConfirm = document.getElementById('taskConfirm');
    const taskCancel = document.getElementById('taskCancel');
    const taskInput = document.getElementById('taskInput');

    taskConfirm.addEventListener('click', () => {
      if (taskInput.value !== '') {
        addTask(taskInput.value);
        taskInput.value = '';
        hiddenDiv.setAttribute('hidden', true);
        addTaskBtn.removeAttribute('hidden');
      } else {
        taskInput.focus();
      }
    });

    taskCancel.addEventListener('click', () => {
      taskInput.value = '';
      hiddenDiv.setAttribute('hidden', true);
      addTaskBtn.removeAttribute('hidden');
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
    newTaskInput,
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
  confirmBtn.classList.add('confirmBtn');

  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('id', 'projectCancel');
  cancelBtn.classList.add('cancelBtn');

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
    const hiddenDiv = document.getElementById('hiddenTask');
    const taskInput = document.getElementById('taskInput');
    addTaskBtn.setAttribute('hidden', true);
    hiddenDiv.removeAttribute('hidden');
    taskInput.focus();
  });

  addTask.appendChild(addTaskBtn);
  container.appendChild(parentProject);
  container.appendChild(tasks);
  container.appendChild(addTask);
  main.appendChild(container);
}

function buildTaskContainerInput() {
  const newTaskDiv = document.getElementById('addTaskBtnContainer');
  const hiddenDiv = document.createElement('div');
  const inputDiv = document.createElement('div');
  const inputText = document.createElement('input');
  const btnDiv = document.createElement('div');
  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  hiddenDiv.setAttribute('hidden', true);
  hiddenDiv.setAttribute('id', 'hiddenTask');

  inputText.setAttribute('type', 'text');
  inputText.setAttribute('placeholder', 'Task Name');
  inputText.classList.add('textInput');
  inputText.setAttribute('id', 'taskInput');

  confirmBtn.textContent = 'Confirm';
  confirmBtn.setAttribute('id', 'taskConfirm');
  confirmBtn.classList.add('confirmBtn');

  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('id', 'taskCancel');
  cancelBtn.classList.add('cancelBtn');

  btnDiv.appendChild(confirmBtn);
  btnDiv.appendChild(cancelBtn);
  inputDiv.appendChild(inputText);
  inputDiv.appendChild(btnDiv);
  hiddenDiv.appendChild(inputDiv);
  hiddenDiv.appendChild(btnDiv);
  newTaskDiv.appendChild(hiddenDiv);
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
  buildTaskContainerInput();
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
app.newTaskInput();
app.readLocally();
app.addProject('Inbox');
app.selectProject('Inbox');
app.printAll();
app.storeLocally();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtIQUE0QztBQUN4Riw0Q0FBNEMsdUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3WGdCO0FBQ1c7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJDQUFJO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlEQUFTO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvS3JCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7QUFDRDs7QUFFbEMsZ0RBQVM7QUFDVCxZQUFZLCtDQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9jaGVjay1ibGFjay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgLS1jbHItcHJpbWFyeTogcmdiKDAsIDAsIDApO1xuICAtLWNsci1zZWNvbmRhcnk6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1jbHItdGV4dDogIzE2MTAwZTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzhlNmM7XG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XG4gICYgaW1nIHtcbiAgICB3aWR0aDogMi40cmVtO1xuICB9XG59XG5cbm1haW4ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Mjc0ODQ7XG4gIHdpZHRoOiAyMjBweDtcbiAgcGFkZGluZzogMXJlbSAwLjFyZW0gMCAwLjFyZW07XG59XG5cbiNwcm9qZWN0cyA+ICoge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBTZWxlY3RzIHRoZSBidXR0b24gY29udGFpbmluZyB0aGUgcHJvamVjdCBuYW1lICovXG4gICYgOmZpcnN0LWNoaWxkIHtcbiAgICBmbGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIH1cbiAgJiA6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICB9XG4gIC8qIFNlbGVjdHMgYm90aCBidXR0b25zIGluIHRoZSBkaXYgKi9cbiAgJiA+ICoge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgcGFkZGluZzogMC4xcmVtO1xuICB9XG4gICYgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhhZWNjO1xuICB9XG59XG5cbi8qIEFERCBUQVNLIEFORCBBREQgUFJPSkVDVCBTVFlMSU5HICovXG4uYWRkZXJCdG4ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjRyZW07XG59XG5cbiNhZGRQcm9qZWN0QnRuQ29udGFpbmVyLFxuI2FkZFRhc2tCdG5Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZGVyQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHRJbnB1dCB7XG4gIGhlaWdodDogMS40cmVtO1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xufVxuXG4uY29uZmlybUJ0biB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgMTE0LCA3MCk7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jYW5jZWxCdG4ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgcGFkZGluZzogMC40cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCA1NCwgNTQpO1xuICB3aWR0aDogNTAlO1xufVxuXG4vKiBUQVNLIFNUWUxJTkcgKi9cbiNjb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM5MTcyO1xuICBmbGV4OiA3O1xufVxuXG4jcGFyZW50UHJvamVjdCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAuN3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjOGU2YztcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xufVxuXG4jdGFza3Mge1xuICBtYXJnaW46IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi50YXNrQ2FyZCB7XG4gIHdpZHRoOiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzhlNmM7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMC40cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxLjMzcmVtO1xuXG4gICYgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTtcbiAgfVxuICAmIDpudGgtY2hpbGQoMikge1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgJiBpbnB1dFt0eXBlPSdkYXRlJ10ge1xuICAgIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XG4gIH1cbiAgJiBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XG4gICAgd2lkdGg6IDEuMnJlbTtcbiAgfVxuICAmIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDNhMTtcbiAgfVxufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM4ZTZjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XG4gICYgYSB7XG4gICAgY29sb3I6ICM2ZTRiMzA7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBcUM7QUFDdkM7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbURBQW1EO0VBQ25EO0lBQ0UsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlEQUE4QztFQUNoRDtFQUNBLG9DQUFvQztFQUNwQztJQUNFLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UseUJBQXlCO0VBQ3pCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7O0VBRWxCO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxPQUFPO0VBQ1Q7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGFBQWE7RUFDZjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QjtJQUNFLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKCcuL2ZvbnQvUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNsci1wcmltYXJ5OiByZ2IoMCwgMCwgMCk7XFxuICAtLWNsci1zZWNvbmRhcnk6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tY2xyLXRleHQ6ICMxNjEwMGU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjOGU2YztcXG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxuICAmIGltZyB7XFxuICAgIHdpZHRoOiAyLjRyZW07XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Mjc0ODQ7XFxuICB3aWR0aDogMjIwcHg7XFxuICBwYWRkaW5nOiAxcmVtIDAuMXJlbSAwIDAuMXJlbTtcXG59XFxuXFxuI3Byb2plY3RzID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogU2VsZWN0cyB0aGUgYnV0dG9uIGNvbnRhaW5pbmcgdGhlIHByb2plY3QgbmFtZSAqL1xcbiAgJiA6Zmlyc3QtY2hpbGQge1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG4gICYgOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2NoZWNrLWJsYWNrLnN2ZycpO1xcbiAgfVxcbiAgLyogU2VsZWN0cyBib3RoIGJ1dHRvbnMgaW4gdGhlIGRpdiAqL1xcbiAgJiA+ICoge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAwLjFyZW07XFxuICB9XFxuICAmIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGFlY2M7XFxuICB9XFxufVxcblxcbi8qIEFERCBUQVNLIEFORCBBREQgUFJPSkVDVCBTVFlMSU5HICovXFxuLmFkZGVyQnRuIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxufVxcblxcbiNhZGRQcm9qZWN0QnRuQ29udGFpbmVyLFxcbiNhZGRUYXNrQnRuQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkZXJCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50ZXh0SW5wdXQge1xcbiAgaGVpZ2h0OiAxLjRyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5jb25maXJtQnRuIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgMTE0LCA3MCk7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uY2FuY2VsQnRuIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDU0LCA1NCk7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4vKiBUQVNLIFNUWUxJTkcgKi9cXG4jY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzkxNzI7XFxuICBmbGV4OiA3O1xcbn1cXG5cXG4jcGFyZW50UHJvamVjdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM4ZTZjO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhc2tDYXJkIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM4ZTZjO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMC40cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zM3JlbTtcXG5cXG4gICYgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XFxuICB9XFxuICAmIDpudGgtY2hpbGQoMikge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcbiAgJiBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBtYXJnaW46IDAgMC41cmVtIDAgMC41cmVtO1xcbiAgfVxcbiAgJiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgfVxcbiAgJiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkM2ExO1xcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjOGU2YztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxuICAmIGEge1xcbiAgICBjb2xvcjogIzZlNGIzMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiB0b2RvQXBwKCkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICBjb25zdCB0YXNrTGlzdCA9IFtdO1xuICBsZXQgY3VycmVudFByb2plY3QgPSAwO1xuXG4gIGNvbnN0IHByaW50QWxsID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdcXG4qKioqKipQcm9qZWN0IExpc3Q6KioqKioqJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSBpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0W2ldLmdldE5hbWUoKSArICcgPDw8PDw8Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdFtpXS5nZXROYW1lKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnXFxuKysrKysrKytUYXNrIExpc3Q6KysrKysrKysnKTtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza0xpc3QpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2suZ2V0UGFyZW50KCkgKyAnOiAnICsgdGFzay5nZXROYW1lKCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBpZiAobmV3UHJvamVjdCA9PT0gJycpIHJldHVybjtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBwcm9qZWN0IGFscmVhZHkgZXhpc3RzXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgPT09IG5ld1Byb2plY3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEEgcHJvamVjdCBjYWxsZWQgJyR7bmV3UHJvamVjdH0nIGFscmVhZHkgZXhpc3RzLmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvamVjdExpc3QucHVzaChQcm9qZWN0KG5ld1Byb2plY3QpKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAvLyBUaGUgbmV3bHkgY3JlYXRlZCBwcm9qZWN0IGJlY29tZXMgdGhlIGZvY3VzXG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5sZW5ndGggLSAxO1xuICAgIHN0b3JlTG9jYWxseSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAodW53YW50ZWRQcm9qZWN0KSA9PiB7XG4gICAgaWYgKHVud2FudGVkUHJvamVjdCA9PT0gJ0luYm94Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0TGlzdFtpXS5nZXROYW1lKCkgPT09IHVud2FudGVkUHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaSwgMSk7XG5cbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHRoZSB0YXNrcyBiZWxvbmdpbmcgdG8gdGhlIGRlbGV0ZWQgcHJvamVjdFxuICAgICAgICBmb3IgKGxldCBqID0gdGFza0xpc3QubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICBpZiAodGFza0xpc3Rbal0uZ2V0UGFyZW50KCkgPT09IHVud2FudGVkUHJvamVjdCkge1xuICAgICAgICAgICAgdGFza0xpc3Quc3BsaWNlKGosIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhY2sgdG8gSW5ib3ggcHJvamVjdFxuICAgICAgICBzZWxlY3RQcm9qZWN0KCdJbmJveCcpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgcHJpbnRBbGwoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gKHdhbnRlZCkgPT4ge1xuICAgIC8qXG4gICAgICogSSBjaG9zZSBhIGZvciBsb29wIHJhdGhlciB0aGFuIGFuIEFycmF5IG1ldGhvZCBiZWNhdXNlIHRoZVxuICAgICAqIGN1cnJlbnRQcm9qZWN0IHZhcmlhYmxlIGlzIGFuIGluZGV4IG9mIHRoZSBwcm9qZWN0TGlzdCBhcnJheVxuICAgICAqL1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh3YW50ZWQgPT09IHByb2plY3RMaXN0W2ldLmdldE5hbWUoKSkge1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IGk7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyZW50UHJvamVjdCcpO1xuICAgIHBhcmVudFByb2plY3QudGV4dENvbnRlbnQgPSB3YW50ZWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0TGlzdDtcblxuICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IGN1cnJlbnRQcm9qZWN0O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAobmV3VGFzaykgPT4ge1xuICAgIGlmIChuZXdUYXNrID09PSAnJykgcmV0dXJuO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGFzayBhbHJlYWR5IGV4aXN0c1xuICAgIGlmICh0YXNrTGlzdC5sZW5ndGggIT09IDApIHtcbiAgICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrTGlzdCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGFzay5nZXRQYXJlbnQoKSA9PT0gZ2V0UHJvamVjdHMoKVtnZXRDdXJyZW50UHJvamVjdCgpXS5nZXROYW1lKCkgJiZcbiAgICAgICAgICB0YXNrLmdldE5hbWUoKSA9PT0gbmV3VGFza1xuICAgICAgICApIHtcbiAgICAgICAgICAvLyBSZWZ1c2UgdG8gYWRkIHRhc2sgYmVjYXVzZSBpdCBleGlzdHNcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBBIHRhc2sgY2FsbGVkICcke25ld1Rhc2t9JyBpbiBwcm9qZWN0ICcke2dldFByb2plY3RzKClbXG4gICAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0KClcbiAgICAgICAgICAgIF0uZ2V0TmFtZSgpfScgYWxyZWFkeSBleGlzdHMuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRhc2sgdG8gdGFzayBsaXN0XG4gICAgdGFza0xpc3QucHVzaChUYXNrKG5ld1Rhc2ssIGdldFByb2plY3RzKClbZ2V0Q3VycmVudFByb2plY3QoKV0uZ2V0TmFtZSgpKSk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gICAgc3RvcmVMb2NhbGx5KCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9ICh1bndhbnRlZFRhc2spID0+IHtcbiAgICAvKlxuICAgICAqIEkgY2hvc2UgdG8gdXNlIGEgZm9yIGxvb3AgaW5zdGVhZCBvZiBhbiBBcnJheSBtZXRob2QgYmVjYXVzZVxuICAgICAqIHRoZSBzcGxpY2UgbWV0aG9kIGlzIHNvIHVzZWZ1bCBhbmQgcmVxdWlyZXMgdGhlIGFycmF5IGluZGV4XG4gICAgICovXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB0YXNrTGlzdFtpXS5nZXROYW1lKCkgPT09IHVud2FudGVkVGFzayAmJlxuICAgICAgICB0YXNrTGlzdFtpXS5nZXRQYXJlbnQoKSA9PT0gZ2V0UHJvamVjdHMoKVtnZXRDdXJyZW50UHJvamVjdCgpXS5nZXROYW1lKClcbiAgICAgICkge1xuICAgICAgICB0YXNrTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICBwcmludEFsbCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0b3JlTG9jYWxseSA9ICgpID0+IHtcbiAgICAvLyBTdG9yZSB0aGUgcHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBwcm9qZWN0TGlzdC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3ROYW1lcykpO1xuXG4gICAgLy8gU3RvcmUgdGhlIHRhc2tzXG4gICAgaWYgKHRhc2tMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IHRhc2tOYW1lcyA9IHRhc2tMaXN0Lm1hcCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgcGFyZW50TmFtZSA9IHRhc2suZ2V0UGFyZW50KCk7XG4gICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2suZ2V0TmFtZSgpO1xuICAgICAgY29uc3QgZnVsbE5hbWUgPSBgJHtwYXJlbnROYW1lfSMkJSR7dGFza05hbWV9YDtcbiAgICAgIHJldHVybiBmdWxsTmFtZTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUudGFibGUodGFza05hbWVzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tOYW1lcykpO1xuICB9O1xuXG4gIGNvbnN0IHJlYWRMb2NhbGx5ID0gKCkgPT4ge1xuICAgIC8vIFJldHJpZXZlIHRoZSBwcm9qZWN0cyBmcm9tIHN0b3JhZ2VcbiAgICBjb25zdCBsb2NhbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxQcm9qZWN0cycpKTtcblxuICAgIC8vIElmIHRoZXJlJ3Mgc29tZXRoaW5nIGluIHN0b3JhZ2VcbiAgICBpZiAobG9jYWxQcm9qZWN0cykge1xuICAgICAgaWYgKGxvY2FsUHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAvLyBBZGQgZWFjaCBuYW1lIGZvdW5kIGluIHN0b3JhZ2UgYXMgYSBwcm9qZWN0XG4gICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgdGhlIHRhc2tzIGZyb20gc3RvcmFnZVxuICAgIGNvbnN0IGxvY2FsVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbFRhc2tzJykpO1xuXG4gICAgLy8gSWYgdGhlcmUncyBzb21ldGhpbmcgaW4gc3RvcmFnZVxuICAgIGlmIChsb2NhbFRhc2tzKSB7XG4gICAgICBpZiAobG9jYWxUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxvY2FsVGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb2plY3RUYXNrID0gaXRlbS5zcGxpdCgnIyQlJyk7XG4gICAgICAgICAgLy8gU2VsZWN0IHRoZSBwcm9qZWN0IGZpcnN0XG4gICAgICAgICAgc2VsZWN0UHJvamVjdChwcm9qZWN0VGFza1swXSk7XG4gICAgICAgICAgLy8gVGhlbiBhZGQgdGhlIHRhc2sgdG8gdGhlIHByb2plY3RcbiAgICAgICAgICBhZGRUYXNrKHByb2plY3RUYXNrWzFdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcbiAgICAvLyBUT0RPOiBkaXNwbGF5IHRhc2tzIGZyb20gdGhlIGN1cnJlbnQgcHJvamVjdCBvbmx5XG4gICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdE5hbWUgPSBwcm9qZWN0TGlzdFtnZXRDdXJyZW50UHJvamVjdCgpXS5nZXROYW1lKCk7XG5cbiAgICAvLyBSZW1vdmUgYWxsIHRhc2tzIGZyb20gdGhlIGNvbnRhaW5lciwgYWRkIGN1cnJlbnQgcHJvamVjdCB0YXNrc1xuICAgIHdoaWxlICh0YXNrc0Rpdi5maXJzdENoaWxkKSB7XG4gICAgICB0YXNrc0Rpdi5yZW1vdmVDaGlsZCh0YXNrc0Rpdi5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIC8vIEFkZCByZWxldmFudCB0YXNrcyB0byB0aGUgY29udGFpbmVyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tMaXN0KSB7XG4gICAgICBpZiAodGFzay5nZXRQYXJlbnQoKSA9PT0gY3VycmVudFByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrQ2hlY2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpO1xuICAgICAgICB0YXNrQ2hlY2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLmdldE5hbWUoKTtcbiAgICAgICAgdGFza0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICB0YXNrRGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gdGFzay5nZXREYXRlKCk7XG4gICAgICAgIHRhc2tEZWxldGVCdG4udGV4dENvbnRlbnQgPSAn4pyWJztcblxuICAgICAgICB0YXNrRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHJlbW92ZVRhc2sodGFzay5nZXROYW1lKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrQ2hlY2suYXBwZW5kQ2hpbGQodGFza0NoZWNrSW5wdXQpO1xuICAgICAgICB0YXNrRGF0ZS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcbiAgICAgICAgdGFza0RlbGV0ZS5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnRuKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0NoZWNrKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZSk7XG4gICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG5cbiAgICAvLyBSZW1vdmUgYWxsIHByb2plY3RzIGZyb20gdGhlIHNpZGViYXIsIHJlLWFkZCB0aGVtIGxhdGVyXG4gICAgd2hpbGUgKHByb2plY3RzRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHByb2plY3RzRGl2Lmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gRklYTUU6IFRoaXMgY2FuJ3QgYmUgdGhlIGJlc3Qgd2F5IHRvIGFjY29tcGxpc2ggdGhlIGdvYWxcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBzZWxlY3RNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgZGVsZXRlTWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IGVsZW1lbnROYW1lID0gZWxlbWVudC5nZXROYW1lKCk7XG5cbiAgICAgIHNlbGVjdE1lLnRleHRDb250ZW50ID0gZWxlbWVudE5hbWU7XG4gICAgICBkZWxldGVNZS50ZXh0Q29udGVudCA9ICfinJYnO1xuXG4gICAgICBzZWxlY3RNZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2VsZWN0UHJvamVjdChlbGVtZW50TmFtZSk7XG4gICAgICB9KTtcblxuICAgICAgZGVsZXRlTWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZVByb2plY3QoZWxlbWVudE5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoc2VsZWN0TWUpO1xuICAgICAgaWYgKGVsZW1lbnROYW1lICE9PSAnSW5ib3gnKSBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZU1lKTtcbiAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGEgYmxhY2sgbGluZSBiZXR3ZWVuIHRoZSBwcm9qZWN0cyBhbmQgdGhlICdhZGQgcHJvamVjdCcgYnV0dG9uXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgbGluZS5zdHlsZS5ib3JkZXJDb2xvciA9ICdibGFjayc7XG4gICAgbGluZS5zdHlsZS5tYXJnaW5Ub3AgPSAnMTBweCc7XG4gICAgbGluZS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMTBweCc7XG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH07XG5cbiAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gKCkgPT4ge1xuICAgIC8vIFRoZSBpbnB1dCBhbmQgYnV0dG9ucyBhbmQgZXZlcnl0aGluZyBzaG91bGQgYmUgYnVpbHQgaW4gcGFnZS5qc1xuICAgIC8vIEhlcmUsIGFsbCBJIHNob3VsZCBkbyBpIGFjdGl2YXRlIHRoZSBidXR0b25zIGFuZCBtYWtlIHRoZSBkaXZzXG4gICAgLy8gZWl0aGVyIGhpZGRlbiBvciB2aXNpYmxlLCB0aGVuIHByb2Nlc3MgdGhlIGlucHV0LiBUb21vcnJvdyFcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdG4nKTtcbiAgICBjb25zdCBoaWRkZW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuUHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RDb25maXJtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RDb25maXJtJyk7XG4gICAgY29uc3QgcHJvamVjdENhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Q2FuY2VsJyk7XG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJbnB1dCcpO1xuXG4gICAgcHJvamVjdENvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAocHJvamVjdElucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICAgIHNlbGVjdFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0SW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgYWRkUHJvamVjdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG5ld1Rhc2tJbnB1dCA9ICgpID0+IHtcbiAgICAvLyBUaGUgaW5wdXQgYW5kIGJ1dHRvbnMgYW5kIGV2ZXJ5dGhpbmcgc2hvdWxkIGJlIGJ1aWx0IGluIHBhZ2UuanNcbiAgICAvLyBIZXJlLCBhbGwgSSBzaG91bGQgZG8gaSBhY3RpdmF0ZSB0aGUgYnV0dG9ucyBhbmQgbWFrZSB0aGUgZGl2c1xuICAgIC8vIGVpdGhlciBoaWRkZW4gb3IgdmlzaWJsZSwgdGhlbiBwcm9jZXNzIHRoZSBpbnB1dC4gVG9tb3Jyb3chXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gICAgY29uc3QgaGlkZGVuRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlblRhc2snKTtcbiAgICBjb25zdCB0YXNrQ29uZmlybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQ29uZmlybScpO1xuICAgIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0NhbmNlbCcpO1xuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5wdXQnKTtcblxuICAgIHRhc2tDb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRhc2tJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgYWRkVGFzayh0YXNrSW5wdXQudmFsdWUpO1xuICAgICAgICB0YXNrSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIGFkZFRhc2tCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tJbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICBhZGRUYXNrQnRuLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcmludEFsbCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgZ2V0Q3VycmVudFByb2plY3QsXG4gICAgZ2V0UHJvamVjdHMsXG4gICAgc2VsZWN0UHJvamVjdCxcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgc3RvcmVMb2NhbGx5LFxuICAgIHJlYWRMb2NhbGx5LFxuICAgIG5ld1Byb2plY3RJbnB1dCxcbiAgICBuZXdUYXNrSW5wdXQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2plY3Qoc3RyaW5nKSB7XG4gIC8vIGNvbnN0IGlkID0gMTtcbiAgbGV0IG5hbWUgPSBzdHJpbmc7XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBjb25zdCBzZXROYW1lID0gKG5ld05hbWUpID0+IHtcbiAgICBuYW1lID0gbmV3TmFtZTtcbiAgfTtcblxuICByZXR1cm4geyBnZXROYW1lLCBzZXROYW1lIH07XG59XG5cbmZ1bmN0aW9uIFRhc2sodGFza05hbWUsIHByb2plY3ROYW1lKSB7XG4gIC8vIGNvbnN0IGlkID0gMTtcbiAgbGV0IHBhcmVudFByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgbGV0IG5hbWUgPSB0YXNrTmFtZTtcbiAgbGV0IGR1ZURhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGR1ZURhdGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgZHVlRGF0ZSA9IG5ld0RhdGU7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBhcmVudFByb2plY3Q7XG4gIH07XG5cbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgbmFtZSA9IG5ld05hbWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0RGF0ZSwgc2V0RGF0ZSwgZ2V0TmFtZSwgZ2V0UGFyZW50LCBzZXROYW1lIH07XG59XG5cbmV4cG9ydCB7IHRvZG9BcHAgfTtcbiIsImltcG9ydCBJY29uIGZyb20gJy4vaW1nL2NoZWNrLnN2Zyc7XG5pbXBvcnQgSWNvbkJsYWNrIGZyb20gJy4vaW1nL2NoZWNrLWJsYWNrLnN2Zyc7XG5cbmZ1bmN0aW9uIGNoYW5nZUZhdmljb24oKSB7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gIGNvbnN0IGxpbmtFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgbGlua0VsLnJlbCA9ICdpY29uJztcbiAgbGlua0VsLmhyZWYgPSBJY29uO1xuICBoZWFkLmFwcGVuZENoaWxkKGxpbmtFbCk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVySWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gIGhlYWRlckljb24uc3JjID0gSWNvbkJsYWNrO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVG8gRG8nO1xuXG4gIGhlYWRlci5wcmVwZW5kKGhlYWRlckljb24pO1xuICBib2R5LnByZXBlbmQoaGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRTaWRlYmFyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIHNpZGViYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlYmFyJyk7XG4gIHByb2plY3RzLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHMnKTtcblxuICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdEJ0bkNvbnRhaW5lcicpO1xuXG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnK1Byb2plY3QnO1xuICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdEJ0bicpO1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZGVyQnRuJyk7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaGlkZGVuRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlblByb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0Jyk7XG4gICAgYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgIGhpZGRlbkRpdi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIHByb2plY3RJbnB1dC5mb2N1cygpO1xuICB9KTtcblxuICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRTaWRlYmFySW5wdXQoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bkNvbnRhaW5lcicpO1xuICBjb25zdCBoaWRkZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlblByb2plY3QnKTtcblxuICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lJyk7XG4gIGlucHV0VGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0SW5wdXQnKTtcbiAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdElucHV0Jyk7XG5cbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RDb25maXJtJyk7XG4gIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnY29uZmlybUJ0bicpO1xuXG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Q2FuY2VsJyk7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxCdG4nKTtcblxuICBidG5EaXYuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBpbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dFRleHQpO1xuICBpbnB1dERpdi5hcHBlbmRDaGlsZChidG5EaXYpO1xuICBoaWRkZW5EaXYuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xuICBoaWRkZW5EaXYuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChoaWRkZW5EaXYpO1xufVxuXG5mdW5jdGlvbiBidWlsZFRhc2tDb250YWluZXIoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIHBhcmVudFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwYXJlbnRQcm9qZWN0Jyk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuICB0YXNrcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tzJyk7XG5cbiAgYWRkVGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tCdG5Db250YWluZXInKTtcblxuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJytUYXNrJztcbiAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRhc2tCdG4nKTtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRlckJ0bicpO1xuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGhpZGRlbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW5UYXNrJyk7XG4gICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbnB1dCcpO1xuICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICBoaWRkZW5EaXYucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICB0YXNrSW5wdXQuZm9jdXMoKTtcbiAgfSk7XG5cbiAgYWRkVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmVudFByb2plY3QpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3MpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRUYXNrQ29udGFpbmVySW5wdXQoKSB7XG4gIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bkNvbnRhaW5lcicpO1xuICBjb25zdCBoaWRkZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlblRhc2snKTtcblxuICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBOYW1lJyk7XG4gIGlucHV0VGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0SW5wdXQnKTtcbiAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0lucHV0Jyk7XG5cbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tDb25maXJtJyk7XG4gIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnY29uZmlybUJ0bicpO1xuXG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrQ2FuY2VsJyk7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxCdG4nKTtcblxuICBidG5EaXYuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBpbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dFRleHQpO1xuICBpbnB1dERpdi5hcHBlbmRDaGlsZChidG5EaXYpO1xuICBoaWRkZW5EaXYuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xuICBoaWRkZW5EaXYuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChoaWRkZW5EaXYpO1xufVxuXG5mdW5jdGlvbiBidWlsZEZvb3RlcigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgZm9vdGVyLmlubmVySFRNTCA9IGBCeSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VycmV1ckRlU3ludGF4ZS9cIj5FcnJldXJEZVN5bnRheGU8L2E+IGZvclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIj5UaGUgT2RpbiBQcm9qZWN0PC9hPmA7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBidWlsZFBhZ2UoKSB7XG4gIGNoYW5nZUZhdmljb24oKTtcbiAgYnVpbGRIZWFkZXIoKTtcbiAgYnVpbGRTaWRlYmFyKCk7XG4gIGJ1aWxkU2lkZWJhcklucHV0KCk7XG4gIGJ1aWxkVGFza0NvbnRhaW5lcigpO1xuICBidWlsZFRhc2tDb250YWluZXJJbnB1dCgpO1xuICBidWlsZEZvb3RlcigpO1xufVxuXG5leHBvcnQgeyBidWlsZFBhZ2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBidWlsZFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgdG9kb0FwcCB9IGZyb20gJy4vbG9naWMnO1xuXG5idWlsZFBhZ2UoKTtcbmNvbnN0IGFwcCA9IHRvZG9BcHAoKTtcbmFwcC5uZXdQcm9qZWN0SW5wdXQoKTtcbmFwcC5uZXdUYXNrSW5wdXQoKTtcbmFwcC5yZWFkTG9jYWxseSgpO1xuYXBwLmFkZFByb2plY3QoJ0luYm94Jyk7XG5hcHAuc2VsZWN0UHJvamVjdCgnSW5ib3gnKTtcbmFwcC5wcmludEFsbCgpO1xuYXBwLnN0b3JlTG9jYWxseSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9