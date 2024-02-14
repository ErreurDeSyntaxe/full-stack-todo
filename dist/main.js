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
  --clr-primary: #075099;
  --clr-secondary: #d2b48c;
  --clr-tertiary: #347aa8;
  --clr-text: black;
}

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: space-between;
  font-size: 3rem;
  font-weight: bold;
  padding: 1rem;
  background-color: var(--clr-primary);
  color: var(--clr-text);

  & :first-child {
    display: flex;
  }

  & :last-child {
    display: flex;
    justify-content: right;
  }

  & :last-child:hover {
    cursor: pointer;
  }

  & img {
    width: 2.4rem;
  }
}

main {
  flex: 1;
  display: flex;
}

#sidebar {
  background-color: var(--clr-secondary);
  width: 200px;
  padding: 1rem 0.1rem 0 0.1rem;
}

.invisible {
  display: none;
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
    background-color: #f1d8b6;
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
  background-color: var(--clr-tertiary);
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
  background-color: var(--clr-primary);
  border-radius: 0.4rem;
  color: var(--clr-text);
}

#tasks {
  margin: 1rem;
  padding: 1rem;
}

.taskCard {
  width: 60%;
  background-color: var(--clr-primary);
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
    background-color: #347aa7;
  }
}

footer {
  background-color: var(--clr-primary);
  text-align: center;
  color: var(--clr-text);
  & a {
    color: var(--clr-text);
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAqC;AACvC;;AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,oCAAoC;EACpC,sBAAsB;;EAEtB;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mDAAmD;EACnD;IACE,OAAO;IACP,gBAAgB;IAChB,oBAAoB;EACtB;EACA;IACE,yDAA8C;EAChD;EACA,oCAAoC;EACpC;IACE,6BAA6B;IAC7B,SAAS;IACT,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;EACjB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA,qCAAqC;AACrC;EACE,SAAS;EACT,qBAAqB;EACrB,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,qBAAqB;EACrB,eAAe;EACf,kCAAkC;EAClC,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,qBAAqB;EACrB,eAAe;EACf,kCAAkC;EAClC,UAAU;AACZ;;AAEA,iBAAiB;AACjB;EACE,qCAAqC;EACrC,OAAO;AACT;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,oCAAoC;EACpC,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,UAAU;EACV,oCAAoC;EACpC,qBAAqB;EACrB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;;EAElB;IACE,yBAAyB;EAC3B;EACA;IACE,OAAO;EACT;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;IAC7B,SAAS;IACT,qBAAqB;IACrB,oBAAoB;IACpB,aAAa;EACf;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,sBAAsB;EACtB;IACE,sBAAsB;EACxB;AACF","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./font/Roboto-Regular.ttf');\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\n:root {\n  --clr-primary: #075099;\n  --clr-secondary: #d2b48c;\n  --clr-tertiary: #347aa8;\n  --clr-text: black;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  font-size: 3rem;\n  font-weight: bold;\n  padding: 1rem;\n  background-color: var(--clr-primary);\n  color: var(--clr-text);\n\n  & :first-child {\n    display: flex;\n  }\n\n  & :last-child {\n    display: flex;\n    justify-content: right;\n  }\n\n  & :last-child:hover {\n    cursor: pointer;\n  }\n\n  & img {\n    width: 2.4rem;\n  }\n}\n\nmain {\n  flex: 1;\n  display: flex;\n}\n\n#sidebar {\n  background-color: var(--clr-secondary);\n  width: 200px;\n  padding: 1rem 0.1rem 0 0.1rem;\n}\n\n.invisible {\n  display: none;\n}\n\n#projects > * {\n  display: flex;\n  /* Selects the button containing the project name */\n  & :first-child {\n    flex: 1;\n    text-align: left;\n    padding-left: 0.5rem;\n  }\n  & :first-child::before {\n    background-image: url('./img/check-black.svg');\n  }\n  /* Selects both buttons in the div */\n  & > * {\n    background-color: transparent;\n    border: 0;\n    border-radius: 0.4rem;\n    font-size: 1.3rem;\n    padding: 0.1rem;\n  }\n  & button:hover {\n    background-color: #f1d8b6;\n  }\n}\n\n/* ADD TASK AND ADD PROJECT STYLING */\n.adderBtn {\n  border: 0;\n  border-radius: 0.4rem;\n  font-size: 1.1rem;\n  background-color: transparent;\n  padding: 0.4rem;\n}\n\n#addProjectBtnContainer,\n#addTaskBtnContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.adderBtn:hover {\n  background-color: black;\n  color: white;\n}\n\n.textInput {\n  height: 1.4rem;\n  padding: 0.4rem;\n  border-radius: 0.4rem;\n  margin-bottom: 0.4rem;\n}\n\n.confirmBtn {\n  border: 0;\n  border-radius: 0.4rem;\n  padding: 0.4rem;\n  background-color: rgb(70, 114, 70);\n  width: 50%;\n}\n\n.cancelBtn {\n  border: 0;\n  border-radius: 0.4rem;\n  padding: 0.4rem;\n  background-color: rgb(150, 54, 54);\n  width: 50%;\n}\n\n/* TASK STYLING */\n#container {\n  background-color: var(--clr-tertiary);\n  flex: 7;\n}\n\n#parentProject {\n  font-size: 2rem;\n  text-align: center;\n  margin-top: 2rem;\n  margin-left: auto;\n  margin-right: auto;\n  width: fit-content;\n  padding: 0.7rem;\n  background-color: var(--clr-primary);\n  border-radius: 0.4rem;\n  color: var(--clr-text);\n}\n\n#tasks {\n  margin: 1rem;\n  padding: 1rem;\n}\n\n.taskCard {\n  width: 60%;\n  background-color: var(--clr-primary);\n  border-radius: 0.4rem;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  font-size: 1.33rem;\n\n  & input[type='checkbox'] {\n    margin: 0 0.5rem 0 0.5rem;\n  }\n  & :nth-child(2) {\n    flex: 1;\n  }\n  & input[type='date'] {\n    margin: 0 0.5rem 0 0.5rem;\n  }\n  & button {\n    background-color: transparent;\n    border: 0;\n    border-radius: 0.4rem;\n    margin-right: 0.2rem;\n    width: 1.2rem;\n  }\n  & button:hover {\n    background-color: #347aa7;\n  }\n}\n\nfooter {\n  background-color: var(--clr-primary);\n  text-align: center;\n  color: var(--clr-text);\n  & a {\n    color: var(--clr-text);\n  }\n}\n"],"sourceRoot":""}]);
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

        // Remove the tasks associated with the unwanted project
        for (let j = taskList.length - 1; j >= 0; j--) {
          if (taskList[j].getParent() === unwantedProject) {
            taskList.splice(j, 1);
          }
        }

        // Back to Inbox project
        selectProject('Inbox');
        displayProjects();
        printAll();
        storeLocally();
        return;
      }
    }
  };

  const selectProject = (wanted) => {
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
    storeLocally();
    displayTasks();
  };

  const removeTask = (unwantedTask) => {
    // Check if the task belongs to the right project
    // because two projects could have a task with the same name
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
      const taskDate = task.getDate();
      const fullName = `${parentName}#$%${taskName}#$%${taskDate}`;
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
          const projectTaskDate = item.split('#$%');
          // Select the project first
          selectProject(projectTaskDate[0]);
          // Then add the task to the project
          addTask(projectTaskDate[1]);
          const originalDate = new Date(projectTaskDate[2]);
          taskList[taskList.length - 1].setDate(originalDate);
        });
      }
    }
  };

  const displayTasks = () => {
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

        taskDateInput.addEventListener('change', () => {
          const newDate = new Date(taskDateInput.valueAsDate);
          task.setDate(newDate);
          storeLocally();
        })

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
/* harmony import */ var _img_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu.svg */ "./src/img/menu.svg");




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
  const headerLeft = document.createElement('div');
  const headerText = document.createElement('div');
  const headerRight = document.createElement('div');
  const headerIcon = new Image();
  const menuIcon = new Image();

  menuIcon.setAttribute('id', 'menu');
  menuIcon.src = _img_menu_svg__WEBPACK_IMPORTED_MODULE_2__;
  menuIcon.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('invisible');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 700) {
      sidebar.classList.add('invisible');
    } else {
      sidebar.classList.remove('invisible');
    }
  });

  headerIcon.src = _img_check_black_svg__WEBPACK_IMPORTED_MODULE_1__;
  headerText.textContent = 'To Do';

  headerLeft.appendChild(headerIcon);
  headerLeft.appendChild(headerText);
  headerRight.appendChild(menuIcon);
  header.appendChild(headerLeft);
  header.appendChild(headerRight);

  body.appendChild(header);
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

/***/ }),

/***/ "./src/img/menu.svg":
/*!**************************!*\
  !*** ./src/img/menu.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b778cb1777612594612f.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtIQUE0QztBQUN4Riw0Q0FBNEMsdUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFh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QUFDQTtBQUNBLDBCQUEwQixXQUFXLEtBQUssU0FBUyxLQUFLLFNBQVM7QUFDakU7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxL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QUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUNEOztBQUVsQyxnREFBUztBQUNULFlBQVksK0NBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2NoZWNrLWJsYWNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAtLWNsci1wcmltYXJ5OiAjMDc1MDk5O1xuICAtLWNsci1zZWNvbmRhcnk6ICNkMmI0OGM7XG4gIC0tY2xyLXRlcnRpYXJ5OiAjMzQ3YWE4O1xuICAtLWNsci10ZXh0OiBibGFjaztcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xuXG4gICYgOmZpcnN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgJiA6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICB9XG5cbiAgJiA6bGFzdC1jaGlsZDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJiBpbWcge1xuICAgIHdpZHRoOiAyLjRyZW07XG4gIH1cbn1cblxubWFpbiB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNzaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMXJlbSAwLjFyZW0gMCAwLjFyZW07XG59XG5cbi5pbnZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jcHJvamVjdHMgPiAqIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogU2VsZWN0cyB0aGUgYnV0dG9uIGNvbnRhaW5pbmcgdGhlIHByb2plY3QgbmFtZSAqL1xuICAmIDpmaXJzdC1jaGlsZCB7XG4gICAgZmxleDogMTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICB9XG4gICYgOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgfVxuICAvKiBTZWxlY3RzIGJvdGggYnV0dG9ucyBpbiB0aGUgZGl2ICovXG4gICYgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHBhZGRpbmc6IDAuMXJlbTtcbiAgfVxuICAmIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZDhiNjtcbiAgfVxufVxuXG4vKiBBREQgVEFTSyBBTkQgQUREIFBST0pFQ1QgU1RZTElORyAqL1xuLmFkZGVyQnRuIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMC40cmVtO1xufVxuXG4jYWRkUHJvamVjdEJ0bkNvbnRhaW5lcixcbiNhZGRUYXNrQnRuQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGRlckJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0SW5wdXQge1xuICBoZWlnaHQ6IDEuNHJlbTtcbiAgcGFkZGluZzogMC40cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbn1cblxuLmNvbmZpcm1CdG4ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgcGFkZGluZzogMC40cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDExNCwgNzApO1xuICB3aWR0aDogNTAlO1xufVxuXG4uY2FuY2VsQnRuIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgNTQsIDU0KTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogVEFTSyBTVFlMSU5HICovXG4jY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXRlcnRpYXJ5KTtcbiAgZmxleDogNztcbn1cblxuI3BhcmVudFByb2plY3Qge1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAwLjdyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xufVxuXG4jdGFza3Mge1xuICBtYXJnaW46IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi50YXNrQ2FyZCB7XG4gIHdpZHRoOiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAwLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDEuMzNyZW07XG5cbiAgJiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICBtYXJnaW46IDAgMC41cmVtIDAgMC41cmVtO1xuICB9XG4gICYgOm50aC1jaGlsZCgyKSB7XG4gICAgZmxleDogMTtcbiAgfVxuICAmIGlucHV0W3R5cGU9J2RhdGUnXSB7XG4gICAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTtcbiAgfVxuICAmIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcbiAgICB3aWR0aDogMS4ycmVtO1xuICB9XG4gICYgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ3YWE3O1xuICB9XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xuICAmIGEge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBcUM7QUFDdkM7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsc0JBQXNCOztFQUV0QjtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbURBQW1EO0VBQ25EO0lBQ0UsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlEQUE4QztFQUNoRDtFQUNBLG9DQUFvQztFQUNwQztJQUNFLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UscUNBQXFDO0VBQ3JDLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCOztFQUVsQjtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsT0FBTztFQUNUO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEI7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKCcuL2ZvbnQvUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNsci1wcmltYXJ5OiAjMDc1MDk5O1xcbiAgLS1jbHItc2Vjb25kYXJ5OiAjZDJiNDhjO1xcbiAgLS1jbHItdGVydGlhcnk6ICMzNDdhYTg7XFxuICAtLWNsci10ZXh0OiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWNsci10ZXh0KTtcXG5cXG4gICYgOmZpcnN0LWNoaWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gICYgOmxhc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgfVxcblxcbiAgJiA6bGFzdC1jaGlsZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICYgaW1nIHtcXG4gICAgd2lkdGg6IDIuNHJlbTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuICB3aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAxcmVtIDAuMXJlbSAwIDAuMXJlbTtcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBTZWxlY3RzIHRoZSBidXR0b24gY29udGFpbmluZyB0aGUgcHJvamVjdCBuYW1lICovXFxuICAmIDpmaXJzdC1jaGlsZCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcbiAgJiA6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvY2hlY2stYmxhY2suc3ZnJyk7XFxuICB9XFxuICAvKiBTZWxlY3RzIGJvdGggYnV0dG9ucyBpbiB0aGUgZGl2ICovXFxuICAmID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG4gIH1cXG4gICYgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZDhiNjtcXG4gIH1cXG59XFxuXFxuLyogQUREIFRBU0sgQU5EIEFERCBQUk9KRUNUIFNUWUxJTkcgKi9cXG4uYWRkZXJCdG4ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG59XFxuXFxuI2FkZFByb2plY3RCdG5Db250YWluZXIsXFxuI2FkZFRhc2tCdG5Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGRlckJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRleHRJbnB1dCB7XFxuICBoZWlnaHQ6IDEuNHJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG59XFxuXFxuLmNvbmZpcm1CdG4ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCAxMTQsIDcwKTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jYW5jZWxCdG4ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgNTQsIDU0KTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi8qIFRBU0sgU1RZTElORyAqL1xcbiNjb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXRlcnRpYXJ5KTtcXG4gIGZsZXg6IDc7XFxufVxcblxcbiNwYXJlbnRQcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxufVxcblxcbiN0YXNrcyB7XFxuICBtYXJnaW46IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udGFza0NhcmQge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDEuMzNyZW07XFxuXFxuICAmIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICBtYXJnaW46IDAgMC41cmVtIDAgMC41cmVtO1xcbiAgfVxcbiAgJiA6bnRoLWNoaWxkKDIpIHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG4gICYgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTtcXG4gIH1cXG4gICYgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gIH1cXG4gICYgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0N2FhNztcXG4gIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxuICAmIGEge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHRvZG9BcHAoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG4gIGNvbnN0IHRhc2tMaXN0ID0gW107XG4gIGxldCBjdXJyZW50UHJvamVjdCA9IDA7XG5cbiAgY29uc3QgcHJpbnRBbGwgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1xcbioqKioqKlByb2plY3QgTGlzdDoqKioqKionKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY3VycmVudFByb2plY3QgPT09IGkpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3RbaV0uZ2V0TmFtZSgpICsgJyA8PDw8PDwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0W2ldLmdldE5hbWUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdcXG4rKysrKysrK1Rhc2sgTGlzdDorKysrKysrKycpO1xuICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrTGlzdCkge1xuICAgICAgY29uc29sZS5sb2codGFzay5nZXRQYXJlbnQoKSArICc6ICcgKyB0YXNrLmdldE5hbWUoKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgIGlmIChuZXdQcm9qZWN0ID09PSAnJykgcmV0dXJuO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHByb2plY3QgYWxyZWFkeSBleGlzdHNcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdExpc3QpIHtcbiAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gbmV3UHJvamVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQSBwcm9qZWN0IGNhbGxlZCAnJHtuZXdQcm9qZWN0fScgYWxyZWFkeSBleGlzdHMuYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9qZWN0TGlzdC5wdXNoKFByb2plY3QobmV3UHJvamVjdCkpO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIC8vIFRoZSBuZXdseSBjcmVhdGVkIHByb2plY3QgYmVjb21lcyB0aGUgZm9jdXNcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0Lmxlbmd0aCAtIDE7XG4gICAgc3RvcmVMb2NhbGx5KCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICh1bndhbnRlZFByb2plY3QpID0+IHtcbiAgICBpZiAodW53YW50ZWRQcm9qZWN0ID09PSAnSW5ib3gnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RMaXN0W2ldLmdldE5hbWUoKSA9PT0gdW53YW50ZWRQcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3RMaXN0LnNwbGljZShpLCAxKTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHRhc2tzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdW53YW50ZWQgcHJvamVjdFxuICAgICAgICBmb3IgKGxldCBqID0gdGFza0xpc3QubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICBpZiAodGFza0xpc3Rbal0uZ2V0UGFyZW50KCkgPT09IHVud2FudGVkUHJvamVjdCkge1xuICAgICAgICAgICAgdGFza0xpc3Quc3BsaWNlKGosIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhY2sgdG8gSW5ib3ggcHJvamVjdFxuICAgICAgICBzZWxlY3RQcm9qZWN0KCdJbmJveCcpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgcHJpbnRBbGwoKTtcbiAgICAgICAgc3RvcmVMb2NhbGx5KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9ICh3YW50ZWQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAod2FudGVkID09PSBwcm9qZWN0TGlzdFtpXS5nZXROYW1lKCkpIHtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBpO1xuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudFByb2plY3QnKTtcbiAgICBwYXJlbnRQcm9qZWN0LnRleHRDb250ZW50ID0gd2FudGVkO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdExpc3Q7XG5cbiAgY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiBjdXJyZW50UHJvamVjdDtcblxuICBjb25zdCBhZGRUYXNrID0gKG5ld1Rhc2spID0+IHtcbiAgICBpZiAobmV3VGFzayA9PT0gJycpIHJldHVybjtcblxuICAgIC8vIENoZWNrIGlmIHRhc2sgYWxyZWFkeSBleGlzdHNcbiAgICBpZiAodGFza0xpc3QubGVuZ3RoICE9PSAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza0xpc3QpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhc2suZ2V0UGFyZW50KCkgPT09IGdldFByb2plY3RzKClbZ2V0Q3VycmVudFByb2plY3QoKV0uZ2V0TmFtZSgpICYmXG4gICAgICAgICAgdGFzay5nZXROYW1lKCkgPT09IG5ld1Rhc2tcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gUmVmdXNlIHRvIGFkZCB0YXNrIGJlY2F1c2UgaXQgZXhpc3RzXG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgQSB0YXNrIGNhbGxlZCAnJHtuZXdUYXNrfScgaW4gcHJvamVjdCAnJHtnZXRQcm9qZWN0cygpW1xuICAgICAgICAgICAgICBnZXRDdXJyZW50UHJvamVjdCgpXG4gICAgICAgICAgICBdLmdldE5hbWUoKX0nIGFscmVhZHkgZXhpc3RzLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCB0YXNrIHRvIHRhc2sgbGlzdFxuICAgIHRhc2tMaXN0LnB1c2goVGFzayhuZXdUYXNrLCBnZXRQcm9qZWN0cygpW2dldEN1cnJlbnRQcm9qZWN0KCldLmdldE5hbWUoKSkpO1xuICAgIHN0b3JlTG9jYWxseSgpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAodW53YW50ZWRUYXNrKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHRhc2sgYmVsb25ncyB0byB0aGUgcmlnaHQgcHJvamVjdFxuICAgIC8vIGJlY2F1c2UgdHdvIHByb2plY3RzIGNvdWxkIGhhdmUgYSB0YXNrIHdpdGggdGhlIHNhbWUgbmFtZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGFza0xpc3RbaV0uZ2V0TmFtZSgpID09PSB1bndhbnRlZFRhc2sgJiZcbiAgICAgICAgdGFza0xpc3RbaV0uZ2V0UGFyZW50KCkgPT09IGdldFByb2plY3RzKClbZ2V0Q3VycmVudFByb2plY3QoKV0uZ2V0TmFtZSgpXG4gICAgICApIHtcbiAgICAgICAgdGFza0xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgcHJpbnRBbGwoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdG9yZUxvY2FsbHkgPSAoKSA9PiB7XG4gICAgLy8gU3RvcmUgdGhlIHByb2plY3RzXG4gICAgY29uc3QgcHJvamVjdE5hbWVzID0gcHJvamVjdExpc3QubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICByZXR1cm4gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TmFtZXMpKTtcblxuICAgIC8vIFN0b3JlIHRoZSB0YXNrc1xuICAgIGlmICh0YXNrTGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCB0YXNrTmFtZXMgPSB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudE5hbWUgPSB0YXNrLmdldFBhcmVudCgpO1xuICAgICAgY29uc3QgdGFza05hbWUgPSB0YXNrLmdldE5hbWUoKTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gdGFzay5nZXREYXRlKCk7XG4gICAgICBjb25zdCBmdWxsTmFtZSA9IGAke3BhcmVudE5hbWV9IyQlJHt0YXNrTmFtZX0jJCUke3Rhc2tEYXRlfWA7XG4gICAgICByZXR1cm4gZnVsbE5hbWU7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLnRhYmxlKHRhc2tOYW1lcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrTmFtZXMpKTtcbiAgfTtcblxuICBjb25zdCByZWFkTG9jYWxseSA9ICgpID0+IHtcbiAgICAvLyBSZXRyaWV2ZSB0aGUgcHJvamVjdHMgZnJvbSBzdG9yYWdlXG4gICAgY29uc3QgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsUHJvamVjdHMnKSk7XG5cbiAgICAvLyBJZiB0aGVyZSdzIHNvbWV0aGluZyBpbiBzdG9yYWdlXG4gICAgaWYgKGxvY2FsUHJvamVjdHMpIHtcbiAgICAgIGlmIChsb2NhbFByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgLy8gQWRkIGVhY2ggbmFtZSBmb3VuZCBpbiBzdG9yYWdlIGFzIGEgcHJvamVjdFxuICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRoZSB0YXNrcyBmcm9tIHN0b3JhZ2VcbiAgICBjb25zdCBsb2NhbFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxUYXNrcycpKTtcblxuICAgIC8vIElmIHRoZXJlJ3Mgc29tZXRoaW5nIGluIHN0b3JhZ2VcbiAgICBpZiAobG9jYWxUYXNrcykge1xuICAgICAgaWYgKGxvY2FsVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICBsb2NhbFRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9qZWN0VGFza0RhdGUgPSBpdGVtLnNwbGl0KCcjJCUnKTtcbiAgICAgICAgICAvLyBTZWxlY3QgdGhlIHByb2plY3QgZmlyc3RcbiAgICAgICAgICBzZWxlY3RQcm9qZWN0KHByb2plY3RUYXNrRGF0ZVswXSk7XG4gICAgICAgICAgLy8gVGhlbiBhZGQgdGhlIHRhc2sgdG8gdGhlIHByb2plY3RcbiAgICAgICAgICBhZGRUYXNrKHByb2plY3RUYXNrRGF0ZVsxXSk7XG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gbmV3IERhdGUocHJvamVjdFRhc2tEYXRlWzJdKTtcbiAgICAgICAgICB0YXNrTGlzdFt0YXNrTGlzdC5sZW5ndGggLSAxXS5zZXREYXRlKG9yaWdpbmFsRGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdE5hbWUgPSBwcm9qZWN0TGlzdFtnZXRDdXJyZW50UHJvamVjdCgpXS5nZXROYW1lKCk7XG5cbiAgICAvLyBSZW1vdmUgYWxsIHRhc2tzIGZyb20gdGhlIGNvbnRhaW5lciwgYWRkIGN1cnJlbnQgcHJvamVjdCB0YXNrc1xuICAgIHdoaWxlICh0YXNrc0Rpdi5maXJzdENoaWxkKSB7XG4gICAgICB0YXNrc0Rpdi5yZW1vdmVDaGlsZCh0YXNrc0Rpdi5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIC8vIEFkZCByZWxldmFudCB0YXNrcyB0byB0aGUgY29udGFpbmVyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tMaXN0KSB7XG4gICAgICBpZiAodGFzay5nZXRQYXJlbnQoKSA9PT0gY3VycmVudFByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrQ2hlY2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpO1xuICAgICAgICB0YXNrQ2hlY2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLmdldE5hbWUoKTtcbiAgICAgICAgdGFza0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICB0YXNrRGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gdGFzay5nZXREYXRlKCk7XG4gICAgICAgIHRhc2tEZWxldGVCdG4udGV4dENvbnRlbnQgPSAn4pyWJztcblxuICAgICAgICB0YXNrRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHJlbW92ZVRhc2sodGFzay5nZXROYW1lKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUodGFza0RhdGVJbnB1dC52YWx1ZUFzRGF0ZSk7XG4gICAgICAgICAgdGFzay5zZXREYXRlKG5ld0RhdGUpO1xuICAgICAgICAgIHN0b3JlTG9jYWxseSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRhc2tDaGVjay5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tJbnB1dCk7XG4gICAgICAgIHRhc2tEYXRlLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXQpO1xuICAgICAgICB0YXNrRGVsZXRlLmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2spO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcbiAgICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcblxuICAgIC8vIFJlbW92ZSBhbGwgcHJvamVjdHMgZnJvbSB0aGUgc2lkZWJhciwgcmUtYWRkIHRoZW0gbGF0ZXJcbiAgICB3aGlsZSAocHJvamVjdHNEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQocHJvamVjdHNEaXYubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvLyBGSVhNRTogVGhpcyBjYW4ndCBiZSB0aGUgYmVzdCB3YXkgdG8gYWNjb21wbGlzaCB0aGUgZ29hbFxuICAgIHByb2plY3RMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IHNlbGVjdE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb25zdCBkZWxldGVNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgZWxlbWVudE5hbWUgPSBlbGVtZW50LmdldE5hbWUoKTtcblxuICAgICAgc2VsZWN0TWUudGV4dENvbnRlbnQgPSBlbGVtZW50TmFtZTtcbiAgICAgIGRlbGV0ZU1lLnRleHRDb250ZW50ID0gJ+Kclic7XG5cbiAgICAgIHNlbGVjdE1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZWxlY3RQcm9qZWN0KGVsZW1lbnROYW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICBkZWxldGVNZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChlbGVtZW50TmFtZSk7XG4gICAgICB9KTtcblxuICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChzZWxlY3RNZSk7XG4gICAgICBpZiAoZWxlbWVudE5hbWUgIT09ICdJbmJveCcpIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlTWUpO1xuICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYSBibGFjayBsaW5lIGJldHdlZW4gdGhlIHByb2plY3RzIGFuZCB0aGUgJ2FkZCBwcm9qZWN0JyBidXR0b25cbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBsaW5lLnN0eWxlLmJvcmRlckNvbG9yID0gJ2JsYWNrJztcbiAgICBsaW5lLnN0eWxlLm1hcmdpblRvcCA9ICcxMHB4JztcbiAgICBsaW5lLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMHB4JztcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChsaW5lKTtcbiAgfTtcblxuICBjb25zdCBuZXdQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuJyk7XG4gICAgY29uc3QgaGlkZGVuRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlblByb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0Q29uZmlybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Q29uZmlybScpO1xuICAgIGNvbnN0IHByb2plY3RDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdENhbmNlbCcpO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SW5wdXQnKTtcblxuICAgIHByb2plY3RDb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHByb2plY3RJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgICBzZWxlY3RQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdElucHV0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0Q2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgIGFkZFByb2plY3RCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBuZXdUYXNrSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gICAgY29uc3QgaGlkZGVuRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlblRhc2snKTtcbiAgICBjb25zdCB0YXNrQ29uZmlybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQ29uZmlybScpO1xuICAgIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0NhbmNlbCcpO1xuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5wdXQnKTtcblxuICAgIHRhc2tDb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRhc2tJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgYWRkVGFzayh0YXNrSW5wdXQudmFsdWUpO1xuICAgICAgICB0YXNrSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIGFkZFRhc2tCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tJbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICBhZGRUYXNrQnRuLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcmludEFsbCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgZ2V0Q3VycmVudFByb2plY3QsXG4gICAgZ2V0UHJvamVjdHMsXG4gICAgc2VsZWN0UHJvamVjdCxcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgc3RvcmVMb2NhbGx5LFxuICAgIHJlYWRMb2NhbGx5LFxuICAgIG5ld1Byb2plY3RJbnB1dCxcbiAgICBuZXdUYXNrSW5wdXQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2plY3Qoc3RyaW5nKSB7XG4gIGxldCBuYW1lID0gc3RyaW5nO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgbmFtZSA9IG5ld05hbWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0TmFtZSwgc2V0TmFtZSB9O1xufVxuXG5mdW5jdGlvbiBUYXNrKHRhc2tOYW1lLCBwcm9qZWN0TmFtZSkge1xuICBsZXQgcGFyZW50UHJvamVjdCA9IHByb2plY3ROYW1lO1xuICBsZXQgbmFtZSA9IHRhc2tOYW1lO1xuICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZHVlRGF0ZTtcbiAgfTtcblxuICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICBkdWVEYXRlID0gbmV3RGF0ZTtcbiAgfTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xuXG4gIGNvbnN0IGdldFBhcmVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gcGFyZW50UHJvamVjdDtcbiAgfTtcblxuICBjb25zdCBzZXROYW1lID0gKG5ld05hbWUpID0+IHtcbiAgICBuYW1lID0gbmV3TmFtZTtcbiAgfTtcblxuICByZXR1cm4geyBnZXREYXRlLCBzZXREYXRlLCBnZXROYW1lLCBnZXRQYXJlbnQsIHNldE5hbWUgfTtcbn1cblxuZXhwb3J0IHsgdG9kb0FwcCB9O1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9pbWcvY2hlY2suc3ZnJztcbmltcG9ydCBJY29uQmxhY2sgZnJvbSAnLi9pbWcvY2hlY2stYmxhY2suc3ZnJztcbmltcG9ydCBNZW51IGZyb20gJy4vaW1nL21lbnUuc3ZnJztcblxuZnVuY3Rpb24gY2hhbmdlRmF2aWNvbigpIHtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgY29uc3QgbGlua0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICBsaW5rRWwucmVsID0gJ2ljb24nO1xuICBsaW5rRWwuaHJlZiA9IEljb247XG4gIGhlYWQuYXBwZW5kQ2hpbGQobGlua0VsKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRIZWFkZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVhZGVySWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBtZW51SWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gIG1lbnVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICBtZW51SWNvbi5zcmMgPSBNZW51O1xuICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2ludmlzaWJsZScpO1xuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3MDApIHtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgfVxuICB9KTtcblxuICBoZWFkZXJJY29uLnNyYyA9IEljb25CbGFjaztcbiAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdUbyBEbyc7XG5cbiAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJJY29uKTtcbiAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQobWVudUljb24pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGVmdCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBidWlsZFNpZGViYXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NpZGViYXInKTtcbiAgcHJvamVjdHMuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cycpO1xuXG4gIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcm9qZWN0QnRuQ29udGFpbmVyJyk7XG5cbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICcrUHJvamVjdCc7XG4gIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcm9qZWN0QnRuJyk7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWRkZXJCdG4nKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBoaWRkZW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuUHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SW5wdXQnKTtcbiAgICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgaGlkZGVuRGl2LnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgcHJvamVjdElucHV0LmZvY3VzKCk7XG4gIH0pO1xuXG4gIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICBtYWluLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5mdW5jdGlvbiBidWlsZFNpZGViYXJJbnB1dCgpIHtcbiAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuQ29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuUHJvamVjdCcpO1xuXG4gIGlucHV0VGV4dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IE5hbWUnKTtcbiAgaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHRJbnB1dCcpO1xuICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0SW5wdXQnKTtcblxuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdENvbmZpcm0nKTtcbiAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdjb25maXJtQnRuJyk7XG5cbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RDYW5jZWwnKTtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbEJ0bicpO1xuXG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGJ0bkRpdik7XG4gIGhpZGRlbkRpdi5hcHBlbmRDaGlsZChpbnB1dERpdik7XG4gIGhpZGRlbkRpdi5hcHBlbmRDaGlsZChidG5EaXYpO1xuICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGhpZGRlbkRpdik7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVGFza0NvbnRhaW5lcigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBhcmVudFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgcGFyZW50UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhcmVudFByb2plY3QnKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyJyk7XG4gIHRhc2tzLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza3MnKTtcblxuICBhZGRUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0J0bkNvbnRhaW5lcicpO1xuXG4gIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnK1Rhc2snO1xuICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0J0bicpO1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZGVyQnRuJyk7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaGlkZGVuRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlblRhc2snKTtcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0lucHV0Jyk7XG4gICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgIGhpZGRlbkRpdi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIHRhc2tJbnB1dC5mb2N1cygpO1xuICB9KTtcblxuICBhZGRUYXNrLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFyZW50UHJvamVjdCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBidWlsZFRhc2tDb250YWluZXJJbnB1dCgpIHtcbiAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuQ29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuVGFzaycpO1xuXG4gIGlucHV0VGV4dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIE5hbWUnKTtcbiAgaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHRJbnB1dCcpO1xuICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrSW5wdXQnKTtcblxuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0NvbmZpcm0nKTtcbiAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdjb25maXJtQnRuJyk7XG5cbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tDYW5jZWwnKTtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbEJ0bicpO1xuXG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGJ0bkRpdik7XG4gIGhpZGRlbkRpdi5hcHBlbmRDaGlsZChpbnB1dERpdik7XG4gIGhpZGRlbkRpdi5hcHBlbmRDaGlsZChidG5EaXYpO1xuICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKGhpZGRlbkRpdik7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBmb290ZXIuaW5uZXJIVE1MID0gYEJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZXJyZXVyRGVTeW50YXhlL1wiPkVycmV1ckRlU3ludGF4ZTwvYT4gZm9yXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiPlRoZSBPZGluIFByb2plY3Q8L2E+YDtcblxuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUGFnZSgpIHtcbiAgY2hhbmdlRmF2aWNvbigpO1xuICBidWlsZEhlYWRlcigpO1xuICBidWlsZFNpZGViYXIoKTtcbiAgYnVpbGRTaWRlYmFySW5wdXQoKTtcbiAgYnVpbGRUYXNrQ29udGFpbmVyKCk7XG4gIGJ1aWxkVGFza0NvbnRhaW5lcklucHV0KCk7XG4gIGJ1aWxkRm9vdGVyKCk7XG59XG5cbmV4cG9ydCB7IGJ1aWxkUGFnZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGJ1aWxkUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgeyB0b2RvQXBwIH0gZnJvbSAnLi9sb2dpYyc7XG5cbmJ1aWxkUGFnZSgpO1xuY29uc3QgYXBwID0gdG9kb0FwcCgpO1xuYXBwLm5ld1Byb2plY3RJbnB1dCgpO1xuYXBwLm5ld1Rhc2tJbnB1dCgpO1xuYXBwLnJlYWRMb2NhbGx5KCk7XG5hcHAuYWRkUHJvamVjdCgnSW5ib3gnKTtcbmFwcC5zZWxlY3RQcm9qZWN0KCdJbmJveCcpO1xuYXBwLnByaW50QWxsKCk7XG5hcHAuc3RvcmVMb2NhbGx5KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=