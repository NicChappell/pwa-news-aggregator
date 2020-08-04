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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! exports provided: renderArticles, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderArticles\", function() { return renderArticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony import */ var _indexedDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexedDb */ \"./assets/js/indexedDb.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./assets/js/utils.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n // Clear the article container and insert placeholder articles\n\nfunction renderPlaceHolders() {\n  var articleContainer = document.querySelector(\".article-container\");\n  var placeholders = createPlaceholders();\n\n  while (articleContainer.firstChild) {\n    articleContainer.removeChild(articleContainer.firstChild);\n  }\n\n  articleContainer.appendChild(placeholders);\n} // Create and return 4 placeholder articles\n\n\nfunction createPlaceholders() {\n  var fragment = document.createDocumentFragment();\n\n  for (var i = 0; i < 4; i++) {\n    var placeholder = createPlaceholder();\n    fragment.appendChild(placeholder);\n  }\n\n  return fragment;\n} // Returns markup for a placeholder article\n\n\nfunction createPlaceholder() {\n  return createElement(\"div\", {\n    \"class\": \"article-skeleton\"\n  }, createElement(\"div\", {\n    \"class\": \"article-skeleton__header\"\n  }, createElement(\"div\", {\n    \"class\": \"article-skeleton__title\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__published\"\n  })), createElement(\"div\", {\n    \"class\": \"article-skeleton__content\"\n  }, createElement(\"div\", {\n    \"class\": \"article-skeleton__image\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  }), createElement(\"div\", {\n    \"class\": \"article-skeleton__text\"\n  })));\n} // Empties article container and appends articles\n\n\nfunction renderArticles(articleData, loadPage) {\n  renderPlaceHolders();\n  var articleContainer = document.querySelector(\".article-container\");\n  var topicHeader = document.querySelector(\"header h1\");\n  var articles = createArticles(articleData, loadPage);\n\n  while (articleContainer.firstChild) {\n    articleContainer.removeChild(articleContainer.firstChild);\n  }\n\n  var _getParams = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getParams\"])(),\n      query = _getParams.query;\n\n  topicHeader.textContent = query;\n  articleContainer.appendChild(articles);\n} // Return HTML for each article provided\n\nfunction createArticles(articleData, loadPage) {\n  var fragment = document.createDocumentFragment();\n  articleData && articleData.forEach(function (data) {\n    var article = createArticle(data, loadPage);\n    fragment.appendChild(article);\n  });\n  return fragment;\n} // Returns markup for a single article\n\n\nfunction createArticle(_ref, loadPage) {\n  var source = _ref.source,\n      author = _ref.author,\n      title = _ref.title,\n      description = _ref.description,\n      url = _ref.url,\n      urlToImage = _ref.urlToImage,\n      publishedAt = _ref.publishedAt,\n      _id = _ref._id,\n      favorite = _ref.favorite;\n  return createElement(\"article\", null, createElement(\"div\", {\n    \"class\": \"article-header\"\n  }, createElement(\"div\", {\n    \"class\": \"article-header__title\"\n  }, createElement(\"h3\", null, title)), createElement(\"div\", {\n    \"class\": \"article-header__published\"\n  }, createElement(\"p\", null, author), createElement(\"p\", null, Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"formatDate\"])(publishedAt)))), createElement(\"div\", {\n    \"class\": \"article-container\"\n  }, createElement(\"p\", null, urlToImage && createElement(\"img\", {\n    src: urlToImage,\n    alt: title\n  }), description), createElement(\"p\", null, createElement(\"small\", null, \"Continue reading at \", createElement(\"a\", {\n    href: url,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, source.name))), !favorite ? createElement(\"button\", {\n    \"class\": \"button button--primary\",\n    onclick: function onclick() {\n      Object(_indexedDb__WEBPACK_IMPORTED_MODULE_0__[\"useIndexedDb\"])(\"articles\", \"ArticleStore\", \"put\", {\n        source: source,\n        author: author,\n        title: title,\n        description: description,\n        url: url,\n        urlToImage: urlToImage,\n        publishedAt: publishedAt,\n        _id: _id\n      });\n      loadPage();\n    }\n  }, \"Save to Favorites\") : createElement(\"button\", {\n    \"class\": \"button button--danger\",\n    onclick: function onclick() {\n      Object(_indexedDb__WEBPACK_IMPORTED_MODULE_0__[\"useIndexedDb\"])(\"articles\", \"ArticleStore\", \"delete\", {\n        _id: _id\n      });\n      loadPage();\n    }\n  }, \"Remove from Favorites\")));\n} // Helper function for creating elements\n\n\nfunction createElement(type, attributes) {\n  var element = document.createElement(type);\n\n  if (attributes !== null && _typeof(attributes) === \"object\") {\n    for (var key in attributes) {\n      if (key.startsWith(\"on\")) {\n        var event = key.substring(2).toLowerCase();\n        var handler = attributes[key];\n        element.addEventListener(event, handler);\n      } else {\n        element.setAttribute(key, attributes[key]);\n      }\n    }\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  children && children.forEach(function (child) {\n    if (typeof child === \"boolean\" || child === null || child === undefined) {\n      return;\n    }\n\n    var node;\n\n    if (child instanceof HTMLElement) {\n      node = child;\n    } else {\n      node = document.createTextNode(child);\n    }\n\n    element.appendChild(node);\n  });\n  return element;\n}\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n // Setting up dummy topics data\n\nvar topicData = [{\n  id: 1,\n  name: \"Politics\"\n}, {\n  id: 2,\n  name: \"Environment\"\n}, {\n  id: 3,\n  name: \"Sports\"\n}, {\n  id: 4,\n  name: \"Entertainment\"\n}];\nvar lastId = 4; // Empty topic container, render topics\n\nfunction renderTopics() {\n  var topicContainer = document.querySelector(\".topic-container\");\n  var topics = createTopics(topicData);\n\n  while (topicContainer.firstChild) {\n    topicContainer.removeChild(topicContainer.firstChild);\n  }\n\n  topicContainer.appendChild(topics);\n} // Return HTML for each topic provided\n\n\nfunction createTopics(topicData) {\n  var fragment = document.createDocumentFragment();\n  topicData.forEach(function (data) {\n    var topic = createTopic(data);\n    fragment.appendChild(topic);\n  });\n  return fragment;\n} // Return markup for a topic object\n\n\nfunction createTopic(_ref) {\n  var name = _ref.name,\n      id = _ref.id;\n  return Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"topic\"\n  }, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n    \"aria-label\": \"Close\",\n    \"data-id\": id,\n    onClick: handleTopicDelete\n  }, \"×\"), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"a\", {\n    href: \"topic.html?query=\".concat(name)\n  }, name));\n} // Deletes a topic on click\n\n\nfunction handleTopicDelete(event) {\n  var id = Number(event.target.getAttribute(\"data-id\"));\n  topicData = topicData.filter(function (topic) {\n    return topic.id !== id;\n  });\n  renderTopics();\n}\n\nfunction handleTopicAdd(event) {\n  event.preventDefault();\n  var input = document.querySelector(\"#add-topic\");\n  var value = input.value.trim();\n\n  if (!value) {\n    return;\n  }\n\n  topicData = [].concat(_toConsumableArray(topicData), [{\n    id: ++lastId,\n    name: value\n  }]);\n  input.value = \"\";\n  renderTopics();\n} // Renders topics on page load\n\n\nrenderTopics(); // Handle new topic submissions\n\ndocument.querySelector(\"#submit-topic\").addEventListener(\"click\", handleTopicAdd);\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/indexedDb.js":
/*!********************************!*\
  !*** ./assets/js/indexedDb.js ***!
  \********************************/
/*! exports provided: checkForIndexedDb, useIndexedDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForIndexedDb\", function() { return checkForIndexedDb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useIndexedDb\", function() { return useIndexedDb; });\nfunction checkForIndexedDb() {\n  if (!window.indexedDB) {\n    console.log(\"Your browser doesn't support a stable version of IndexedDB.\");\n    return false;\n  }\n\n  return true;\n}\nfunction useIndexedDb(databaseName, storeName, method, object) {\n  return new Promise(function (resolve, reject) {\n    var request = window.indexedDB.open(databaseName, 1);\n    var db, tx, store;\n\n    request.onupgradeneeded = function (e) {\n      var db = request.result;\n      db.createObjectStore(storeName, {\n        keyPath: \"_id\"\n      });\n    };\n\n    request.onerror = function (e) {\n      console.log(\"There was an error\");\n    };\n\n    request.onsuccess = function (e) {\n      db = request.result;\n      tx = db.transaction(storeName, \"readwrite\");\n      store = tx.objectStore(storeName);\n\n      db.onerror = function (e) {\n        console.log(\"error\");\n      };\n\n      if (method === \"put\") {\n        store.put(object);\n      } else if (method === \"get\") {\n        var all = store.getAll();\n\n        all.onsuccess = function () {\n          resolve(all.result);\n        };\n      } else if (method === \"delete\") {\n        store[\"delete\"](object._id);\n      }\n\n      tx.oncomplete = function () {\n        db.close();\n      };\n    };\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/indexedDb.js?");

/***/ }),

/***/ "./assets/js/utils.js":
/*!****************************!*\
  !*** ./assets/js/utils.js ***!
  \****************************/
/*! exports provided: createArticleIds, getParams, formatDate, removeSpecialCharsFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createArticleIds\", function() { return createArticleIds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getParams\", function() { return getParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeSpecialCharsFromString\", function() { return removeSpecialCharsFromString; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// Creates pseudo-unique ids for articles\nfunction createArticleIds(articles) {\n  return articles && articles.map(function (article) {\n    article._id = removeSpecialCharsFromString(article.url);\n    return article;\n  });\n} // Returns URL query params as object\n\nfunction getParams() {\n  return location.search.substring(1).split(\"&\").reduce(function (acc, curr) {\n    var _curr$split = curr.split(\"=\"),\n        _curr$split2 = _slicedToArray(_curr$split, 2),\n        key = _curr$split2[0],\n        value = _curr$split2[1];\n\n    acc[key] = value;\n    return acc;\n  }, {});\n} // Formats and returns date in MMMM/DD/YYYY format\n\nfunction formatDate(dateStr) {\n  var date = new Date(dateStr);\n  var options = {\n    year: \"numeric\",\n    month: \"long\",\n    day: \"numeric\"\n  };\n  return date.toLocaleDateString(options);\n}\nfunction removeSpecialCharsFromString(str) {\n  return str.replace(/[.,/#!$%^&*;:{}=\\-_`~()]/g, \"\").replace(/\\s/g, \"\");\n}\n\n//# sourceURL=webpack:///./assets/js/utils.js?");

/***/ })

/******/ });