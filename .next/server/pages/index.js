module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/arrowEven.svg":
/*!**********************************!*\
  !*** ./src/assets/arrowEven.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMjA0IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC40ODEyMDEgMTAuMjU3MUMwLjQ4MTIwMSAxMC4yNTcxIDkyLjc4MTIgODEuNzg0NyAxOTUuNDgxIDEwLjI1NzEiIHN0cm9rZT0iI0MyQ0JERSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNSIvPgo8cGF0aCBkPSJNMTgwLjcgMy40NzQ1NUMxODAuNyAzLjQ3NDU1IDE5OS44MTUgLTIuMDUxNzcgMjAxLjYzNyA0LjIwOTE2QzIwMy40NTkgMTAuNDcwMSAyMDIuMDkzIDE2Ljk0NDQgMTk2LjE3NiAyNS44MTQyIiBzdHJva2U9IiNDMkNCREUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/arrowOdd.svg":
/*!*********************************!*\
  !*** ./src/assets/arrowOdd.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMjA0IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC45OTk3NTYgMzIuNzE5NUMwLjk5OTc1NiAzMi43MTk1IDkzLjI5OTggLTM4LjgwODEgMTk2IDMyLjcxOTUiIHN0cm9rZT0iI0MyQ0JERSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNSIvPgo8cGF0aCBkPSJNMTgxLjIxOSAzOS40OTc2QzE4MS4yMTkgMzkuNDk3NiAyMDAuMzM0IDQ1LjAyNCAyMDIuMTU2IDM4Ljc2M0MyMDMuOTc4IDMyLjUwMTkgMjAyLjYxMSAyNi4wMjc1IDE5Ni42OTQgMTcuMTU3NSIgc3Ryb2tlPSIjQzJDQkRFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/banner-thumb.png":
/*!*************************************!*\
  !*** ./src/assets/banner-thumb.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-thumb-1a98425e051ab734dc76af7ddefa5259.png";

/***/ }),

/***/ "./src/assets/core-feature.png":
/*!*************************************!*\
  !*** ./src/assets/core-feature.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/core-feature-749dc086eec25ac14ed0c92a6876d29e.png";

/***/ }),

/***/ "./src/assets/excersise.png":
/*!**********************************!*\
  !*** ./src/assets/excersise.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/excersise-62df093369744fa17a7852f01704b401.png";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-2affb75e3e26e9bd51e236586b5cce03.svg";

/***/ }),

/***/ "./src/assets/novigo-head-logo.svg":
/*!*****************************************!*\
  !*** ./src/assets/novigo-head-logo.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQ3OCIgaGVpZ2h0PSIyNjcyIiB2aWV3Qm94PSIwIDAgMjQ3OCAyNjcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEyMTMgMTg3MVYyNDUxLjE3QzEyMTMgMjQ3Ny4xNSAxMjI1LjQxIDI1MzUuMDYgMTI3NS4wNCAyNTU4Ljg2QzEzMjQuNjcgMjU4Mi42NiAxNjQzLjY5IDI1NjguNzggMTc5NyAyNTU4Ljg2IiBzdHJva2U9IiNFNThDMjIiIHN0cm9rZS13aWR0aD0iNTAiLz4NCjxwYXRoIGQ9Ik0xMzg1LjU0IDkxMy41ODNMMTM3MS44NSAzMzMuNTcxQzEzNzEuMjQgMzA3LjU5OCAxMzgyLjI4IDI0OS40MTIgMTQzMS4zMyAyMjQuNDVDMTQ4MC4zOSAxOTkuNDg5IDE3OTkuNjUgMjA1Ljg0IDE5NTMuMTUgMjEyLjEzNiIgc3Ryb2tlPSIjRTY4QzIyIiBzdHJva2Utd2lkdGg9IjUwIi8+DQo8cGF0aCBkPSJNMTY3NS44NiAxNDA1LjE5TDIyNTUuOTkgMTM5OC4zOEMyMjgxLjk3IDEzOTguMDcgMjMzOS43MyAxMzg0Ljk5IDIzNjIuOTQgMTMzNS4wOEMyMzg2LjE2IDEyODUuMTcgMjM2OC41MyA5NjYuMzMzIDIzNTYuODEgODEzLjE1NCIgc3Ryb2tlPSIjMkFCREVDIiBzdHJva2Utd2lkdGg9IjUwIi8+DQo8cGF0aCBkPSJNODAxLjg5OSAxMzc4TDIyMS44MDkgMTM4Ny44M0MxOTUuODMzIDEzODguMjcgMTM4LjE0MiAxNDAxLjY2IDExNS4xODkgMTQ1MS42OEM5Mi4yMzU3IDE1MDEuNzEgMTExLjUyIDE4MjAuNDUgMTI0LjAzMSAxOTczLjU3IiBzdHJva2U9IiNFNThDMjIiIHN0cm9rZS13aWR0aD0iNTAiLz4NCjxwYXRoIGQ9Ik0xMDk1LjgzIDkxMy45OUwxMDkyLjY1IDMzMy44MjVDMTA5Mi41MSAzMDcuODQ1IDEwNzkuNzkgMjUwLjAwNCAxMDMwLjAyIDIyNi40NzlDOTgwLjI2MSAyMDIuOTUzIDY2MS4zMjEgMjE4LjU4IDUwOC4wNzIgMjI5LjMzNCIgc3Ryb2tlPSIjMkFCREVDIiBzdHJva2Utd2lkdGg9IjUwIi8+DQo8cmVjdCB4PSI2NjMuNTI4IiB5PSI4MTUuOCIgd2lkdGg9IjEwNzMuMTIiIGhlaWdodD0iMTE3Mi45MSIgcng9IjIwMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTEuMjUwODUgNjYzLjUyOCA4MTUuOCkiIGZpbGw9IiMwQjVGREQiLz4NCjxlbGxpcHNlIGN4PSIyNzAuNSIgY3k9IjQ5IiByeD0iMC41IiByeT0iNDkiIGZpbGw9IiNEOUQ5RDkiLz4NCjxlbGxpcHNlIGN4PSI0NTYiIGN5PSIxOTguNSIgcng9IjEwMSIgcnk9IjEwMC41IiBmaWxsPSIjMkFCREVDIi8+DQo8ZWxsaXBzZSBjeD0iMjM3NyIgY3k9IjcxMi41IiByeD0iMTAxIiByeT0iMTAwLjUiIGZpbGw9IiMyQUJERUMiLz4NCjxlbGxpcHNlIGN4PSIyMDIzIiBjeT0iMjEyLjUiIHJ4PSIxMDEiIHJ5PSIxMDAuNSIgZmlsbD0iI0U1OEMyMiIvPg0KPGVsbGlwc2UgY3g9IjE4NjMiIGN5PSIyNTcxLjUiIHJ4PSIxMDEiIHJ5PSIxMDAuNSIgZmlsbD0iI0U1OEMyMiIvPg0KPGVsbGlwc2UgY3g9IjEwMSIgY3k9IjIwNzQuNSIgcng9IjEwMSIgcnk9IjEwMC41IiBmaWxsPSIjRTU4QzIyIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/assets/novigo-logo.svg":
/*!************************************!*\
  !*** ./src/assets/novigo-logo.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTE0NyIgaGVpZ2h0PSIyNjcyIiB2aWV3Qm94PSIwIDAgNTE0NyAyNjcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEyMTMgMTg3MVYyNDUxLjE3QzEyMTMgMjQ3Ny4xNSAxMjI1LjQxIDI1MzUuMDYgMTI3NS4wNCAyNTU4Ljg2QzEzMjQuNjcgMjU4Mi42NiAxNjQzLjY5IDI1NjguNzggMTc5NyAyNTU4Ljg2IiBzdHJva2U9IiNFNThDMjIiIHN0cm9rZS13aWR0aD0iNTAiLz4NCjxwYXRoIGQ9Ik0xMzg1LjU0IDkxMy41ODNMMTM3MS44NSAzMzMuNTcxQzEzNzEuMjQgMzA3LjU5OCAxMzgyLjI4IDI0OS40MTIgMTQzMS4zMyAyMjQuNDVDMTQ4MC4zOSAxOTkuNDg5IDE3OTkuNjUgMjA1Ljg0IDE5NTMuMTUgMjEyLjEzNiIgc3Ryb2tlPSIjRTY4QzIyIiBzdHJva2Utd2lkdGg9IjUwIi8+DQo8cGF0aCBkPSJNMTY3NS44NiAxNDA1LjE5TDIyNTUuOTkgMTM5OC4zOEMyMjgxLjk3IDEzOTguMDcgMjMzOS43MyAxMzg0Ljk5IDIzNjIuOTQgMTMzNS4wOEMyMzg2LjE2IDEyODUuMTcgMjM2OC41MyA5NjYuMzMzIDIzNTYuODEgODEzLjE1NCIgc3Ryb2tlPSIjMkFCREVDIiBzdHJva2Utd2lkdGg9IjUwIi8+DQo8cGF0aCBkPSJNODAxLjg5OSAxMzc4TDIyMS44MDkgMTM4Ny44M0MxOTUuODMzIDEzODguMjcgMTM4LjE0MiAxNDAxLjY2IDExNS4xODkgMTQ1MS42OEM5Mi4yMzU3IDE1MDEuNzEgMTExLjUyIDE4MjAuNDUgMTI0LjAzMSAxOTczLjU3IiBzdHJva2U9IiNFNThDMjIiIHN0cm9rZS13aWR0aD0iNTAiLz4NCjxwYXRoIGQ9Ik0xMDk1LjgzIDkxMy45OUwxMDkyLjY1IDMzMy44MjVDMTA5Mi41MSAzMDcuODQ1IDEwNzkuNzkgMjUwLjAwNCAxMDMwLjAyIDIyNi40NzlDOTgwLjI2MSAyMDIuOTUzIDY2MS4zMjEgMjE4LjU4IDUwOC4wNzIgMjI5LjMzNCIgc3Ryb2tlPSIjMkFCREVDIiBzdHJva2Utd2lkdGg9IjUwIi8+DQo8cmVjdCB4PSI2NjMuNTI4IiB5PSI4MTUuOCIgd2lkdGg9IjEwNzMuMTIiIGhlaWdodD0iMTE3Mi45MSIgcng9IjIwMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTEuMjUwODUgNjYzLjUyOCA4MTUuOCkiIGZpbGw9IiMwQjVGREQiLz4NCjxlbGxpcHNlIGN4PSIyNzAuNSIgY3k9IjQ5IiByeD0iMC41IiByeT0iNDkiIGZpbGw9IiNEOUQ5RDkiLz4NCjxlbGxpcHNlIGN4PSI0NTYiIGN5PSIxOTguNSIgcng9IjEwMSIgcnk9IjEwMC41IiBmaWxsPSIjMkFCREVDIi8+DQo8ZWxsaXBzZSBjeD0iMjM3NyIgY3k9IjcxMi41IiByeD0iMTAxIiByeT0iMTAwLjUiIGZpbGw9IiMyQUJERUMiLz4NCjxlbGxpcHNlIGN4PSIyMDIzIiBjeT0iMjEyLjUiIHJ4PSIxMDEiIHJ5PSIxMDAuNSIgZmlsbD0iI0U1OEMyMiIvPg0KPGVsbGlwc2UgY3g9IjE4NjMiIGN5PSIyNTcxLjUiIHJ4PSIxMDEiIHJ5PSIxMDAuNSIgZmlsbD0iI0U1OEMyMiIvPg0KPGVsbGlwc2UgY3g9IjEwMSIgY3k9IjIwNzQuNSIgcng9IjEwMSIgcnk9IjEwMC41IiBmaWxsPSIjRTU4QzIyIi8+DQo8cGF0aCBkPSJNMjU0Ni42IDE0OTJWMTAwMkgyNjE0LjVMMjkxNC4xIDE0MDMuMUwyOTAyLjkgMTQwOS40QzI5MDEuMDMgMTM5Ny43MyAyODk5LjQgMTM4NS4xMyAyODk4IDEzNzEuNkMyODk2LjYgMTM1Ny42IDI4OTUuMiAxMzQyLjkgMjg5My44IDEzMjcuNUMyODkyLjg3IDEzMTEuNjMgMjg5MS45MyAxMjk1LjA3IDI4OTEgMTI3Ny44QzI4OTAuNTMgMTI2MC4wNyAyODkwLjA3IDEyNDEuNjMgMjg4OS42IDEyMjIuNUMyODg5LjEzIDEyMDMuMzcgMjg4OC45IDExODMuNTMgMjg4OC45IDExNjNWMTAwMkgyOTY0LjVWMTQ5MkgyODk1LjJMMjYwMC41IDExMDUuNkwyNjA4LjIgMTA5NS44QzI2MTAuNTMgMTEyNC4yNyAyNjEyLjQgMTE0OC41MyAyNjEzLjggMTE2OC42QzI2MTUuNjcgMTE4OC4yIDI2MTcuMDcgMTIwNSAyNjE4IDEyMTlDMjYxOS40IDEyMzIuNTMgMjYyMC4zMyAxMjQzLjczIDI2MjAuOCAxMjUyLjZDMjYyMS4yNyAxMjYxIDI2MjEuNSAxMjY4IDI2MjEuNSAxMjczLjZDMjYyMS45NyAxMjc5LjIgMjYyMi4yIDEyODQuMSAyNjIyLjIgMTI4OC4zVjE0OTJIMjU0Ni42Wk0zMTA4LjY4IDE0OTlDMzA3Mi43NCAxNDk5IDMwNDAuNTQgMTQ5MC44MyAzMDEyLjA4IDE0NzQuNUMyOTg0LjA4IDE0NTcuNyAyOTYxLjkxIDE0MzUuMDcgMjk0NS41OCAxNDA2LjZDMjkyOS4yNCAxMzc3LjY3IDI5MjEuMDggMTM0NC43NyAyOTIxLjA4IDEzMDcuOUMyOTIxLjA4IDEyNzEuMDMgMjkyOS4yNCAxMjM4LjM3IDI5NDUuNTggMTIwOS45QzI5NjEuOTEgMTE4MC45NyAyOTg0LjA4IDExNTguMzMgMzAxMi4wOCAxMTQyQzMwNDAuNTQgMTEyNS4yIDMwNzIuNzQgMTExNi44IDMxMDguNjggMTExNi44QzMxNDQuMTQgMTExNi44IDMxNzUuODggMTEyNS4yIDMyMDMuODggMTE0MkMzMjMyLjM0IDExNTguMzMgMzI1NC43NCAxMTgwLjk3IDMyNzEuMDggMTIwOS45QzMyODcuNDEgMTIzOC4zNyAzMjk1LjU4IDEyNzEuMDMgMzI5NS41OCAxMzA3LjlDMzI5NS41OCAxMzQ0Ljc3IDMyODcuNDEgMTM3Ny42NyAzMjcxLjA4IDE0MDYuNkMzMjU0Ljc0IDE0MzUuMDcgMzIzMi4zNCAxNDU3LjcgMzIwMy44OCAxNDc0LjVDMzE3NS44OCAxNDkwLjgzIDMxNDQuMTQgMTQ5OSAzMTA4LjY4IDE0OTlaTTMxMDguNjggMTQzMy4yQzMxMzAuNjEgMTQzMy4yIDMxNTAuMjEgMTQyNy44MyAzMTY3LjQ4IDE0MTcuMUMzMTg0Ljc0IDE0MDUuOSAzMTk4LjI4IDEzOTAuOTcgMzIwOC4wOCAxMzcyLjNDMzIxNy44OCAxMzUzLjE3IDMyMjIuNTQgMTMzMS43IDMyMjIuMDggMTMwNy45QzMyMjIuNTQgMTI4My42MyAzMjE3Ljg4IDEyNjIuMTcgMzIwOC4wOCAxMjQzLjVDMzE5OC4yOCAxMjI0LjM3IDMxODQuNzQgMTIwOS40MyAzMTY3LjQ4IDExOTguN0MzMTUwLjIxIDExODcuOTcgMzEzMC42MSAxMTgyLjYgMzEwOC42OCAxMTgyLjZDMzA4Ni43NCAxMTgyLjYgMzA2Ni45MSAxMTg4LjIgMzA0OS4xOCAxMTk5LjRDMzAzMS45MSAxMjEwLjEzIDMwMTguMzggMTIyNS4wNyAzMDA4LjU4IDEyNDQuMkMyOTk4Ljc4IDEyNjIuODcgMjk5NC4xMSAxMjg0LjEgMjk5NC41OCAxMzA3LjlDMjk5NC4xMSAxMzMxLjcgMjk5OC43OCAxMzUzLjE3IDMwMDguNTggMTM3Mi4zQzMwMTguMzggMTM5MC45NyAzMDMxLjkxIDE0MDUuOSAzMDQ5LjE4IDE0MTcuMUMzMDY2LjkxIDE0MjcuODMgMzA4Ni43NCAxNDMzLjIgMzEwOC42OCAxNDMzLjJaTTMzNDQuMjkgMTQ5MkwzMTg4Ljg5IDExMjQuNUgzMjY2LjU5TDMzNzguNTkgMTM5OS42TDMzNjUuMjkgMTQwNS45TDM0ODQuOTkgMTEyNC41SDM1NTkuMTlMMzM5Ni4wOSAxNDkySDMzNDQuMjlaTTM0OTcuMDYgMTQ5MlYxMTI0LjVIMzU2OS4xNlYxNDkySDM0OTcuMDZaTTM1MzIuMDYgMTA0My4zQzM1MTYuNjYgMTA0My4zIDM1MDQuNzYgMTAzOS4zMyAzNDk2LjM2IDEwMzEuNEMzNDg3Ljk2IDEwMjMuNDcgMzQ4My43NiAxMDEyLjI3IDM0ODMuNzYgOTk3LjhDMzQ4My43NiA5ODQuMjY3IDM0ODcuOTYgOTczLjMgMzQ5Ni4zNiA5NjQuOUMzNTA1LjIyIDk1Ni41IDM1MTcuMTIgOTUyLjMgMzUzMi4wNiA5NTIuM0MzNTQ3LjQ2IDk1Mi4zIDM1NTkuMzYgOTU2LjI2NyAzNTY3Ljc2IDk2NC4yQzM1NzYuMTYgOTcyLjEzMyAzNTgwLjM2IDk4My4zMzMgMzU4MC4zNiA5OTcuOEMzNTgwLjM2IDEwMTEuMzMgMzU3NS45MiAxMDIyLjMgMzU2Ny4wNiAxMDMwLjdDMzU1OC42NiAxMDM5LjEgMzU0Ni45OSAxMDQzLjMgMzUzMi4wNiAxMDQzLjNaTTM3MDQuNDggMTY1M0MzNjc4LjM1IDE2NTMgMzY1Mi4yMiAxNjQ4LjggMzYyNi4wOCAxNjQwLjRDMzYwMC40MiAxNjMyLjQ3IDM1NzkuNjUgMTYyMS45NyAzNTYzLjc4IDE2MDguOUwzNTkwLjM4IDE1NTIuOUMzNTk5LjcyIDE1NTkuOSAzNjEwLjY4IDE1NjUuOTcgMzYyMy4yOCAxNTcxLjFDMzYzNS44OCAxNTc2LjcgMzY0OS4xOCAxNTgwLjkgMzY2My4xOCAxNTgzLjdDMzY3Ny4xOCAxNTg2Ljk3IDM2OTAuOTUgMTU4OC42IDM3MDQuNDggMTU4OC42QzM3MzAuMTUgMTU4OC42IDM3NTEuNjIgMTU4NC40IDM3NjguODggMTU3NkMzNzg2LjE1IDE1NjcuNiAzNzk5LjIyIDE1NTUuMjMgMzgwOC4wOCAxNTM4LjlDMzgxNi45NSAxNTIyLjU3IDM4MjEuMzggMTUwMi4yNyAzODIxLjM4IDE0NzhWMTQwNy4zTDM4MjkuMDggMTQxMi4yQzM4MjYuNzUgMTQyNi42NyAzODE5LjA1IDE0NDAuNjcgMzgwNS45OCAxNDU0LjJDMzc5My4zOCAxNDY3LjI3IDM3NzcuNTIgMTQ3OCAzNzU4LjM4IDE0ODYuNEMzNzM5LjI1IDE0OTQuOCAzNzE5LjY1IDE0OTkgMzY5OS41OCAxNDk5QzM2NjQuNTggMTQ5OSAzNjMzLjMyIDE0OTAuODMgMzYwNS43OCAxNDc0LjVDMzU3OC43MiAxNDU3LjcgMzU1Ny4yNSAxNDM1LjA3IDM1NDEuMzggMTQwNi42QzM1MjUuNTIgMTM3Ny42NyAzNTE3LjU4IDEzNDQuNzcgMzUxNy41OCAxMzA3LjlDMzUxNy41OCAxMjcxLjAzIDM1MjUuMjggMTIzOC4zNyAzNTQwLjY4IDEyMDkuOUMzNTU2LjU1IDExODAuOTcgMzU3OC4wMiAxMTU4LjMzIDM2MDUuMDggMTE0MkMzNjMyLjYyIDExMjUuMiAzNjYzLjQyIDExMTYuOCAzNjk3LjQ4IDExMTYuOEMzNzExLjQ4IDExMTYuOCAzNzI1LjAyIDExMTguNjcgMzczOC4wOCAxMTIyLjRDMzc1MS4xNSAxMTI1LjY3IDM3NjMuMjggMTEzMC41NyAzNzc0LjQ4IDExMzcuMUMzNzg1LjY4IDExNDMuMTcgMzc5NS43MiAxMTQ5LjkzIDM4MDQuNTggMTE1Ny40QzM4MTMuNDUgMTE2NC44NyAzODIwLjY4IDExNzIuOCAzODI2LjI4IDExODEuMkMzODMxLjg4IDExODkuNiAzODM1LjM4IDExOTcuNTMgMzgzNi43OCAxMjA1TDM4MjEuMzggMTIxMC42VjExMjQuNUgzODkzLjQ4VjE0NjkuNkMzODkzLjQ4IDE0OTkgMzg4OS4wNSAxNTI0LjkgMzg4MC4xOCAxNTQ3LjNDMzg3MS43OCAxNTcwLjE3IDM4NTkuNDIgMTU4OS4zIDM4NDMuMDggMTYwNC43QzM4MjYuNzUgMTYyMC41NyAzODA2LjkyIDE2MzIuNDcgMzc4My41OCAxNjQwLjRDMzc2MC4yNSAxNjQ4LjggMzczMy44OCAxNjUzIDM3MDQuNDggMTY1M1pNMzcwNy4yOCAxNDMyLjVDMzczMC4xNSAxNDMyLjUgMzc1MC40NSAxNDI3LjEzIDM3NjguMTggMTQxNi40QzM3ODUuOTIgMTQwNS42NyAzNzk5LjY4IDEzOTAuOTcgMzgwOS40OCAxMzcyLjNDMzgxOS4yOCAxMzUzLjYzIDM4MjQuMTggMTMzMi4xNyAzODI0LjE4IDEzMDcuOUMzODI0LjE4IDEyODMuNjMgMzgxOS4wNSAxMjYyLjE3IDM4MDguNzggMTI0My41QzM3OTguOTggMTIyNC4zNyAzNzg1LjIyIDEyMDkuNDMgMzc2Ny40OCAxMTk4LjdDMzc1MC4yMiAxMTg3Ljk3IDM3MzAuMTUgMTE4Mi42IDM3MDcuMjggMTE4Mi42QzM2ODQuODggMTE4Mi42IDM2NjQuODIgMTE4OC4yIDM2NDcuMDggMTE5OS40QzM2MjkuODIgMTIxMC4xMyAzNjE2LjA1IDEyMjUuMDcgMzYwNS43OCAxMjQ0LjJDMzU5NS45OCAxMjYyLjg3IDM1OTEuMDggMTI4NC4xIDM1OTEuMDggMTMwNy45QzM1OTEuMDggMTMzMS43IDM1OTUuOTggMTM1My4xNyAzNjA1Ljc4IDEzNzIuM0MzNjE2LjA1IDEzOTAuOTcgMzYyOS44MiAxNDA1LjY3IDM2NDcuMDggMTQxNi40QzM2NjQuODIgMTQyNy4xMyAzNjg0Ljg4IDE0MzIuNSAzNzA3LjI4IDE0MzIuNVpNNDAxOS43NyAxNDk5QzM5ODMuODQgMTQ5OSAzOTUxLjY0IDE0OTAuODMgMzkyMy4xNyAxNDc0LjVDMzg5NS4xNyAxNDU3LjcgMzg3My4wMSAxNDM1LjA3IDM4NTYuNjcgMTQwNi42QzM4NDAuMzQgMTM3Ny42NyAzODMyLjE3IDEzNDQuNzcgMzgzMi4xNyAxMzA3LjlDMzgzMi4xNyAxMjcxLjAzIDM4NDAuMzQgMTIzOC4zNyAzODU2LjY3IDEyMDkuOUMzODczLjAxIDExODAuOTcgMzg5NS4xNyAxMTU4LjMzIDM5MjMuMTcgMTE0MkMzOTUxLjY0IDExMjUuMiAzOTgzLjg0IDExMTYuOCA0MDE5Ljc3IDExMTYuOEM0MDU1LjI0IDExMTYuOCA0MDg2Ljk3IDExMjUuMiA0MTE0Ljk3IDExNDJDNDE0My40NCAxMTU4LjMzIDQxNjUuODQgMTE4MC45NyA0MTgyLjE3IDEyMDkuOUM0MTk4LjUxIDEyMzguMzcgNDIwNi42NyAxMjcxLjAzIDQyMDYuNjcgMTMwNy45QzQyMDYuNjcgMTM0NC43NyA0MTk4LjUxIDEzNzcuNjcgNDE4Mi4xNyAxNDA2LjZDNDE2NS44NCAxNDM1LjA3IDQxNDMuNDQgMTQ1Ny43IDQxMTQuOTcgMTQ3NC41QzQwODYuOTcgMTQ5MC44MyA0MDU1LjI0IDE0OTkgNDAxOS43NyAxNDk5Wk00MDE5Ljc3IDE0MzMuMkM0MDQxLjcxIDE0MzMuMiA0MDYxLjMxIDE0MjcuODMgNDA3OC41NyAxNDE3LjFDNDA5NS44NCAxNDA1LjkgNDEwOS4zNyAxMzkwLjk3IDQxMTkuMTcgMTM3Mi4zQzQxMjguOTcgMTM1My4xNyA0MTMzLjY0IDEzMzEuNyA0MTMzLjE3IDEzMDcuOUM0MTMzLjY0IDEyODMuNjMgNDEyOC45NyAxMjYyLjE3IDQxMTkuMTcgMTI0My41QzQxMDkuMzcgMTIyNC4zNyA0MDk1Ljg0IDEyMDkuNDMgNDA3OC41NyAxMTk4LjdDNDA2MS4zMSAxMTg3Ljk3IDQwNDEuNzEgMTE4Mi42IDQwMTkuNzcgMTE4Mi42QzM5OTcuODQgMTE4Mi42IDM5NzguMDEgMTE4OC4yIDM5NjAuMjcgMTE5OS40QzM5NDMuMDEgMTIxMC4xMyAzOTI5LjQ3IDEyMjUuMDcgMzkxOS42NyAxMjQ0LjJDMzkwOS44NyAxMjYyLjg3IDM5MDUuMjEgMTI4NC4xIDM5MDUuNjcgMTMwNy45QzM5MDUuMjEgMTMzMS43IDM5MDkuODcgMTM1My4xNyAzOTE5LjY3IDEzNzIuM0MzOTI5LjQ3IDEzOTAuOTcgMzk0My4wMSAxNDA1LjkgMzk2MC4yNyAxNDE3LjFDMzk3OC4wMSAxNDI3LjgzIDM5OTcuODQgMTQzMy4yIDQwMTkuNzcgMTQzMy4yWiIgZmlsbD0iYmxhY2siLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/patternBG.png":
/*!**********************************!*\
  !*** ./src/assets/patternBG.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/patternBG-f25af38e357096ca23290d5f5bcb3355.png";

/***/ }),

/***/ "./src/assets/service-thumb.png":
/*!**************************************!*\
  !*** ./src/assets/service-thumb.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/service-thumb-0a5ac5aae7621b13f0ef8d5f5b13da52.png";

/***/ }),

/***/ "./src/assets/services/blockchain.png":
/*!********************************************!*\
  !*** ./src/assets/services/blockchain.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blockchain-0b012e611a0174fdb3c71f5845dc7b93.png";

/***/ }),

/***/ "./src/assets/services/nodejs.png":
/*!****************************************!*\
  !*** ./src/assets/services/nodejs.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nodejs-7096563b2b0008e0956b7c10ccc31c99.png";

/***/ }),

/***/ "./src/assets/services/react.png":
/*!***************************************!*\
  !*** ./src/assets/services/react.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/react-6388e1f6911f7dfd08e222fd6b0ff049.png";

/***/ }),

/***/ "./src/assets/services/shopify.png":
/*!*****************************************!*\
  !*** ./src/assets/services/shopify.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shopify-06d56a06bc5ef512c037e9c8acc6c08b.png";

/***/ }),

/***/ "./src/assets/services/wordpress.png":
/*!*******************************************!*\
  !*** ./src/assets/services/wordpress.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wordpress-c42ad450f8d08fb7e5ab945e4147dc5c.png";

/***/ }),

/***/ "./src/assets/shape-left.png":
/*!***********************************!*\
  !*** ./src/assets/shape-left.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-left-13fa8b3d988ca4eb9d7c2da935c2d73a.png";

/***/ }),

/***/ "./src/assets/shape-pattern1.png":
/*!***************************************!*\
  !*** ./src/assets/shape-pattern1.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-pattern1-d99df506f0cb8cf704bea5bc18b431e3.png";

/***/ }),

/***/ "./src/assets/shape-pattern2.png":
/*!***************************************!*\
  !*** ./src/assets/shape-pattern2.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-pattern2-4bd72c344fccac3b19031e7c31d42096.png";

/***/ }),

/***/ "./src/assets/shape-right.png":
/*!************************************!*\
  !*** ./src/assets/shape-right.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-right-dbc79b79a05b2f223741e50a97a627aa.png";

/***/ }),

/***/ "./src/assets/team/ali.jpg":
/*!*********************************!*\
  !*** ./src/assets/team/ali.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ali-471ed527ee31acd58fc9ed049873d2e1.jpg";

/***/ }),

/***/ "./src/assets/team/mo.png":
/*!********************************!*\
  !*** ./src/assets/team/mo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mo-b848d203b98df68031680eea14a6933c.png";

/***/ }),

/***/ "./src/assets/testimonial/avatar1.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar2.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar2.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar3.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar3.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar4.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar4.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/workflow/workflow.png":
/*!******************************************!*\
  !*** ./src/assets/workflow/workflow.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/workflow-c7a3e8f25ed0afad07a0da56274b29cc.png";

/***/ }),

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\components\\drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Drawer(_ref) {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: `drawer ${className || ''}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    levle: null,
    duration: '0.4s'
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "div",
    onClick: toggleHandler,
    sx: closeBtnStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: drawerStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, drawerHandler));
}
;
Drawer.defaultProps = {
  width: '320px',
  placement: 'left'
};

/***/ }),

/***/ "./src/components/footer/footer.data.js":
/*!**********************************************!*\
  !*** ./src/components/footer/footer.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  menuItem: [{
    path: '/',
    label: 'Home'
  }, {
    path: '/',
    label: 'Adversite'
  }, {
    path: '/',
    label: 'Supports'
  }, {
    path: '/',
    label: 'Marketing'
  }, {
    path: '/',
    label: 'Contact'
  }]
});

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Footer() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  });
}
const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column'
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary'
      }
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%'
    }
  }
};

/***/ }),

/***/ "./src/components/header/header.data.js":
/*!**********************************************!*\
  !*** ./src/components/header/header.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'home',
  label: 'Home'
}, {
  path: 'services',
  label: 'Services'
}, {
  path: 'blog',
  label: 'Blog'
}, {
  path: 'our-team',
  label: 'Our Team'
}]);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var assets_novigo_logo_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/novigo-logo.svg */ "./src/assets/novigo-logo.svg");
/* harmony import */ var assets_novigo_logo_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_novigo_logo_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\components\\header\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








function Header({
  className,
  contactUsRef
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", {
    sx: styles.header,
    className: className,
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_novigo_logo_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map((menuItem, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "active",
    to: menuItem.path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, menuItem.label))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })));
}
const positionAnim = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;
const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0]
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text"
      }
    }
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block"
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "black"
      },
      "&.active": {
        color: "primary"
      }
    }
  }
};

/***/ }),

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\components\\header\\mobile-drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function MobileDrawer() {
  const {
    0: isDrawerOpen,
    1: setIsDrawerOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdMenu"], {
      size: "26px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    })),
    open: isDrawerOpen,
    toggleHandler: () => setIsDrawerOpen(prevState => !prevState),
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdClose"], {
      size: "24px",
      color: "#00000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 18
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map((menuItem, i) => __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    activeClass: "active",
    to: menuItem.path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, menuItem.label))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }))));
}
;
const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 1024px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary'
      },
      '&.active': {
        color: 'secondary'
      }
    }
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0'
      },
      '&:hover': {
        color: 'secondary'
      }
    }
  },
  button: {
    color: 'black',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0'
  }
};

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @jsx jsx */





function Layout({
  children,
  contactUsRef
}) {
  const {
    0: isSticky,
    1: setIsSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleStateChange = status => {
    if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  const headerProps = {
    contactUsRef,
    className: `${isSticky ? 'sticky' : 'unSticky'}`
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    innerZ: 1001,
    top: 0,
    onStateChange: handleStateChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_header_header__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, headerProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    id: "content",
    sx: {
      variant: 'layout.main'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, children), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: NavLink, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\components\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function NavLink(_ref) {
  let {
    path,
    label,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "NavLink");
}
function Link(_ref2) {
  let {
    path,
    label,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({}, rest, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), children || label);
}

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\components\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function Logo(_ref) {
  let {
    src
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["src"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
    path: "/",
    sx: {
      variant: "links.logo",
      display: "flex",
      cursor: "pointer",
      mr: 15,
      height: "100%",
      width: "12%"
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: "novigo landing page logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/rating.js":
/*!**********************************!*\
  !*** ./src/components/rating.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\components\\rating.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Rating = () => {
  return __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "Rating");
};

/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./src/components/section-header.js":
/*!******************************************!*\
  !*** ./src/components/section-header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\components\\section-header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SectionHeader({
  title,
  slogan,
  isWhite
}) {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      variant: 'sectionHeader'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: {
      variant: 'sectionHeader.subTitle',
      color: isWhite ? 'white' : 'primary',
      opacity: isWhite ? 0.7 : 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, slogan), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: {
      variant: 'sectionHeader.subTitle',
      color: isWhite ? 'white' : 'primary'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, title));
}

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_novigo_head_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/novigo-head-logo.svg */ "./src/assets/novigo-head-logo.svg");
/* harmony import */ var assets_novigo_head_logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_novigo_head_logo_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\components\\seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SEO({
  description = 'startup product landing page',
  author = 'JSM',
  meta,
  title = 'startup landing title'
}) {
  const metaData = [{
    name: `description`,
    content: description
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }, {
    name: `twitter:creator`,
    content: author
  }, {
    name: `twitter:title`,
    content: title
  }, {
    name: `twitter:description`,
    content: description
  }].concat(meta);
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, title), metaData.map(({
    name,
    content
  }, i) => __jsx("meta", {
    key: i,
    name: name,
    content: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: assets_novigo_head_logo_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }));
}
SEO.defaultProps = {
  lang: `en`,
  meta: []
};

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/*! exports provided: mediumClientId, mediumClientSecret, mediumCallback, mediumAuthorizationToken, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mediumClientId\":\"f7e0525a46ad\",\"mediumClientSecret\":\"4425a75f00304a9f4d8e5ca5f05a6066d4d5cb74\",\"mediumCallback\":\"https://novigo.info/callback/medium\",\"mediumAuthorizationToken\":\"Bearer 25d94e35a72f4d0073fe76964cbd442dee331debc4cfd37317b08e3cce5fcb4dc\"}");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var sections_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sections/banner */ "./src/sections/banner/index.js");
/* harmony import */ var sections_services_offered__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sections/services-offered */ "./src/sections/services-offered/index.js");
/* harmony import */ var sections_core_features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sections/core-features */ "./src/sections/core-features/index.js");
/* harmony import */ var sections_workflow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sections/workflow */ "./src/sections/workflow/index.js");
/* harmony import */ var sections_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sections/blog */ "./src/sections/blog/index.js");
/* harmony import */ var sections_contact_us__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sections/contact-us */ "./src/sections/contact-us/index.js");
/* harmony import */ var sections_about_us__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sections/about-us */ "./src/sections/about-us/index.js");
/* harmony import */ var sections_rates__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sections/rates */ "./src/sections/rates/index.js");
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function IndexPage() {
  const contactUsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // const checkout = typeof window !== 'undefined' ? localStorage.getItem('checkout') : null

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    contactUsRef: contactUsRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Novigo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(sections_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    contactUsRef: contactUsRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(sections_services_offered__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(sections_core_features__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(sections_workflow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx(sections_about_us__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(sections_blog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), __jsx(sections_contact_us__WEBPACK_IMPORTED_MODULE_10__["default"], {
    ref: contactUsRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })));
}

/***/ }),

/***/ "./src/sections/about-us/data.js":
/*!***************************************!*\
  !*** ./src/sections/about-us/data.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_team_mo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/team/mo.png */ "./src/assets/team/mo.png");
/* harmony import */ var assets_team_mo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_team_mo_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_team_ali_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/team/ali.jpg */ "./src/assets/team/ali.jpg");
/* harmony import */ var assets_team_ali_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_team_ali_jpg__WEBPACK_IMPORTED_MODULE_1__);


const data = [{
  id: 1,
  imgSrc: assets_team_ali_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
  altText: 'Senior Engineer',
  title: 'Senior FullStack Engineer/Product Manager',
  text: 'I am driven, quick, and a efficient learner. Who will provide your organization a consistent level of professionalism, great communication, and someone who can adapt quickly to changing technologies and different tasks. My skills in numerous technologies such as React, React Native, C#, and AngularJS can be a great asset to your organization.With 5+ Years of Industry Experience',
  href: 'https://www.linkedin.com/company/novigo-industries/'
}, {
  altText: "CEO/Lead Engineer",
  title: "CEO/Lead Engineer",
  text: `
    Manages and directs the company toward its primary goals and objectives.
     Oversees employment decisions at the executive level of the company.
     Responsible for deployments, clean and efficient code practices, testing, and making sure the final product meets company standards.
     Reader of historical non-fiction novels, listener of dan carlin's hardcore history podcast, travel lover, and harsh food critic.(According to my friends and colleagues)
    `,
  href: "https://www.linkedin.com/in/ali-alhaddad/"
}, {
  id: 2,
  imgSrc: assets_team_mo_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  altText: "Junior Engineer",
  title: "Junior Engineer/Brand Ambassador",
  text: `
        Driven, and motivated software engineer who is eager to continue to learn, someone who will apply my knowledge to create efficient, and verbose applications.
        Responsible for promoting novigo's image and services offered. 
        Avid basketball watcher and athlete, lover of music, active learner and current college student.
    `,
  href: "https://www.linkedin.com/in/mohamad-alhaddad-002a30161/"
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/sections/about-us/index.js":
/*!****************************************!*\
  !*** ./src/sections/about-us/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutUs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/sections/about-us/styles.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/sections/about-us/data.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\sections\\about-us\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function AboutUs() {
  const handleClick = e => {
    e.preventDefault(); // setVideoOpen(true);
  };

  return __jsx("section", {
    sx: _objectSpread({
      varaint: 'section.our-team'
    }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].aboutusContainer),
    id: "our-team",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Our Team"), _data__WEBPACK_IMPORTED_MODULE_3__["default"].map(dataItem => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    key: dataItem.id,
    sx: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].aboutusSubContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: dataItem.imgSrc,
    alt: dataItem.altText,
    sx: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].aboutusImg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, dataItem.title), __jsx("p", {
    sx: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].aboutus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, dataItem.text, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaLinkedin"], {
    style: {
      color: '#0077B5',
      fontSize: '2em'
    },
    onClick: () => window.open(dataItem.href, '_blank'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  })))));
}

/***/ }),

/***/ "./src/sections/about-us/styles.js":
/*!*****************************************!*\
  !*** ./src/sections/about-us/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  aboutusContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  aboutusSubContainer: {
    width: '100%'
  },
  aboutus: {
    width: '100%'
  },
  aboutusImg: {
    height: '20em',
    width: '20em',
    borderStyle: 'dashed',
    padding: '1em',
    borderWidth: ['0.25em', '0.3em', '0.35em'],
    borderColor: '#0B5FDD',
    borderRadius: '50%'
  },
  shapeBox: {
    position: "absolute",
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ["none", null, null, null, null, "inline-block"]
  },
  contentBox: {
    width: ["100%", null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ["center", null, null, "left"]
  },
  grid: {
    pr: [2, 0, null, null, 6, "70px"],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: "auto",
    width: ["100%", 370, 420, "100%"],
    gridGap: ["35px 0", null, null, null, "50px 0"],
    gridTemplateColumns: ["repeat(1,1fr)"]
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    transition: "all 0.3s"
  },
  icon: {
    width: ["45px", null, null, null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, null, null, null, 4]
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    "> span": {
      backgroundColor: "rgba(255,255,255,0.5)",
      width: "inherit",
      height: "inherit",
      textAlign: "center",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.5s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 2
    },
    subTitle: {
      fontSize: [1, null, null, "14px", 1],
      fontWeight: 400,
      lineHeight: 1.9
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/sections/banner/index.js":
/*!**************************************!*\
  !*** ./src/sections/banner/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_excersise_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/excersise.png */ "./src/assets/excersise.png");
/* harmony import */ var assets_excersise_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_excersise_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/banner-thumb.png */ "./src/assets/banner-thumb.png");
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/sections/banner/styles.js");
/* harmony import */ var sections_contact_us_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sections/contact-us/index */ "./src/sections/contact-us/index.js");
/* harmony import */ var pages_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pages/index */ "./src/pages/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll-to-bottom */ "react-scroll-to-bottom");
/* harmony import */ var react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\sections\\banner\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;










function Banner({
  className,
  contactUsRef
}) {
  // const ScrollButton = () =>{
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */

    });
  }; // window.addEventListener('scroll', toggleVisible);
  // const contactUsReff = useRef();


  return __jsx("section", {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].banner,
    id: "home",
    style: {
      background: "linear-gradient(110deg, #E58C22 60%, #2ABDEC 60%)",
      marginTop: "8em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    as: "h1",
    varaint: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Top Quality Services to Explore"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "Check out our Website to find Amazing Software Products and deals! If you need Website, Application, or Even having Struggles Improving Current Software ? Search no Further Here at Novigo we are here to Serve!"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    className: "donate__btn",
    variant: "secondary",
    "aria-label": "Check out our Rates",
    display: "flex",
    bg: "white",
    padding: "1.5em",
    onClick: e => {
      e.preventDefault();
      window.location.href = "https://docs.google.com/document/d/1mqTM1xI0CkUAct-xiiaFWr9q4ApjsEgPhvrdED_yodU/edit?usp=sharing_eil_se_dm&ts=62c12a61";
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Check Our Rates")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    className: "donate__btn",
    variant: "secondary",
    bg: "white",
    color: "blue",
    "aria-label": "Contact us",
    padding: "1.5em",
    lineHeight: "2em",
    onClick: scrollToBottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "Contact Us"))));
}

/***/ }),

/***/ "./src/sections/banner/styles.js":
/*!***************************************!*\
  !*** ./src/sections/banner/styles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/shape-left.png */ "./src/assets/shape-left.png");
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/shape-right.png */ "./src/assets/shape-right.png");
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_1__);


const styles = {
  buttons: {
    primary: {
      bg: 'color',
      minWidth: 120
    }
  },
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    mt: ['10em'],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      content: '""',
      top: 10,
      bottom: 6,
      left: 0,
      height: '30em',
      width: '100vw',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left 10em'
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      zIndex: -1,
      backgroundImage: `url(${assets_shape_right_png__WEBPACK_IMPORTED_MODULE_1___default.a})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right'
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      pt: '10em'
    },
    button: {// display: 'flex',
      // // position: 'absolute',
      // padding: '1.5em',
      // top:'50%',
      // border: 'none',
      // borderRadius: '10px',
      // color: 'white',
      // borderRadius: '2em !important'
    },
    contentBox: {
      width: ['100%', '100%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', '40px', null, null, null, 7]
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto']
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/sections/blog/data.js":
/*!***********************************!*\
  !*** ./src/sections/blog/data.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_3__);




const data = [{
  id: 1,
  title: "Modern look & trending design",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 4
}, {
  id: 2,
  title: "Design Quality & performance",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 5
}, {
  id: 3,
  title: "Layout and organized layers",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 5
}, {
  id: 4,
  title: "Modern look & trending design",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 4
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/sections/blog/index.js":
/*!************************************!*\
  !*** ./src/sections/blog/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blogs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/sections/blog/styles.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/sections/blog/data.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! config.json */ "./src/config.json");
var config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! config.json */ "./src/config.json", 1);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\sections\\blog\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Blogs(props) {
  const {
    0: blogTutorials,
    1: setBlogTutorials
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getMediumBlogData() {
      console.log("JSON:", config_json__WEBPACK_IMPORTED_MODULE_7__);
      const mediumResponse = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alialhaddad");

      if (mediumResponse.data.status === "ok") {
        setBlogTutorials(mediumResponse.data.items);
        setLoading(false);
      }
    }

    getMediumBlogData();
  }, []);
  return __jsx("section", {
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].blogsContainer,
    id: "blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Blogs"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].blogTutorialsContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, loading ? __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    sx: {
      height: "5em",
      width: "5em",
      transition: "height ease-in-out 400"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }) : blogTutorials.map((blogTutorial, blogTutorialIdx) => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    key: blogTutorialIdx,
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].blogTutorialContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, blogTutorial.title), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].blogTutorialContainerImg,
    src: blogTutorial.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn",
    variant: "secondary",
    "aria-label": "Go to Button",
    onClick: () => window.open(blogTutorial.link, "_blank"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "Go to Medium"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Date Published:", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(blogTutorial.pubDate), "MM/dd/yyyy"))))));
}

/***/ }),

/***/ "./src/sections/blog/styles.js":
/*!*************************************!*\
  !*** ./src/sections/blog/styles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  blogsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxHeight: '30em'
  },
  blogTutorialsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-start',
    minHeight: '10em',
    maxHeight: '60em',
    overflowY: 'auto',
    flexWrap: "wrap",
    width: '100%',
    paddingLeft: ['0px', '0px', '0px']
  },
  blogTutorialContainer: {
    display: "flex",
    paddingLeft: ['0px', '0px', '0px'],
    flexDirection: "column",
    width: ["90%", "50%", "31%"],
    margin: '0.5em',
    minHeight: "20em",
    height: 'auto',
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    p: {
      justifySelf: 'flex-end',
      fontSize: ['0.7em', '0.7em', '0.8em']
    },
    button: {
      margin: '1em'
    }
  },
  blogTutorialContainerImg: {
    minHeight: '10em',
    minWidth: '100%',
    width: 'auto',
    height: 'auto'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/sections/contact-us/index.js":
/*!******************************************!*\
  !*** ./src/sections/contact-us/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/sections/contact-us/styles.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emailjs/browser */ "@emailjs/browser");
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\sections\\contact-us\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */







const ErrorText = ({
  children
}) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].errorText,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, children);

const ContactUs = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
  const {
    0: result,
    1: showResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: contactUsForm,
    1: setContactUsForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: ""
  });

  const sendEmail = form => {
    _emailjs_browser__WEBPACK_IMPORTED_MODULE_5___default.a.sendForm("service_hkwfhor", "template_c0cut8i", form, "lp3n9c12kH59C65ah").then(result => {
      setContactUsForm(form);
      console.log(result.text);
    }, error => {
      console.log(error.text);
    });
    e.target.reset();
    showResult(true);
  };

  const inputStyles = error => {
    if (error) return _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_3__["default"].input), _styles__WEBPACK_IMPORTED_MODULE_3__["default"].errorInput);
    return _styles__WEBPACK_IMPORTED_MODULE_3__["default"].input;
  };

  const handleInputChange = (e, setFieldValue) => {
    e.preventDefault();
    setFieldValue(e.target.id, e.target.value);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    ref: ref,
    id: "contact-us",
    sx: _objectSpread({
      variant: "section.contactUs"
    }, _styles__WEBPACK_IMPORTED_MODULE_3__["default"].container),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].containerBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      firstName: contactUsForm.firstName,
      lastName: contactUsForm.lastName,
      phoneNumber: contactUsForm.phoneNumber,
      email: contactUsForm.email
    },
    validate: values => {
      debugger;
      const errors = {};
      if (!values.firstName) errors.firstName = "First name is required";
      if (!values.lastName) errors.lastName = "Last name is required";
      if (!values.email) errors.email = "Email is required";
      if (!values.email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) errors.email = "Provide a valid email";
      return errors;
    },
    onSubmit: (values, {
      setValues,
      setIsSubmitting
    }) => {
      debugger;
      sendEmail(values);
      setValues(values);
      setIsSubmitting(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, ({
    values,
    errors,
    setFieldValue,
    handleSubmit
  }) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("form", {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].form,
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h2", {
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "Reach Out to Us!"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].inputContainer50,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].inputContainer50Text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, "First Name *"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    sx: inputStyles(errors.firstName),
    onChange: e => handleInputChange(e, setFieldValue),
    value: values.firstName,
    id: "firstName",
    type: "text",
    name: "firstName",
    placeholder: "First Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ErrorText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, errors.firstName && errors.firstName)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].inputContainer50,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].inputContainer50Text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, "Last Name *"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    sx: inputStyles(errors.lastName),
    onChange: e => handleInputChange(e, setFieldValue),
    value: values.lastName,
    id: "lastName",
    type: "text",
    name: "lastName",
    placeholder: "Last Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ErrorText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, errors.lastName && errors.lastName)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].inputContainer50,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].inputContainer50Text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, "Phone Number"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].input,
    onChange: e => handleInputChange(e, setFieldValue),
    value: values.phoneNumber,
    id: "phoneNumber",
    type: "text",
    name: "phone",
    placeholder: "Phone Number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].inputContainer50,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].inputContainer50Text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, "Email *"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    sx: inputStyles(errors.email),
    onChange: e => handleInputChange(e, setFieldValue),
    value: values.email,
    id: "email",
    type: "text",
    name: "email",
    placeholder: "Email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ErrorText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, errors.email && errors.email)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].textAreaContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].inputContainer50Text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, "Message"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Textarea"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].textArea,
    name: "message",
    defaultValue: "hello",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].submitButton,
    className: "btn",
    "aria-label": "Send Message",
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, "Send Message ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaPaperPlane"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 34
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }, result ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Result, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 50
    }
  }) : null))))));
});
/* harmony default export */ __webpack_exports__["default"] = (ContactUs);

/***/ }),

/***/ "./src/sections/contact-us/styles.js":
/*!*******************************************!*\
  !*** ./src/sections/contact-us/styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  container: {
    width: '110%',
    marginLeft: '0'
  },
  containerBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '0'
  },
  errorText: {
    color: '#ff3333'
  },
  errorInput: {
    border: 'solid 2px	#ff3333',
    '&::placeholder': {
      color: '#ff3333'
    },
    msInputPlaceholderColor: '#ff3333'
  },
  form: {
    marginLeft: '0',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  inputContainer50: {
    display: 'flex',
    marginTop: '1.5em',
    flexDirection: 'column',
    width: ['90%', '47%', '47%']
  },
  inputContainer50Text: {
    paddingLeft: '0.2em'
  },
  input: {
    margin: 0,
    width: '100%',
    outline: 0,
    swebkitTapHighlightColor: 'rgba(255,255,255,0)',
    textAlign: 'left',
    lineHeight: '1.21428571em',
    padding: '.67857143em 1em',
    background: '#fff',
    border: '1px solid rgba(34,36,38,.15)',
    color: 'rgba(0,0,0,.87)',
    borderRadius: '.28571429rem',
    webkitTransition: 'border-color .1s ease,-webkit-box-shadow .1s ease',
    transition: 'border-color .1s ease,-webkit-box-shadow .1s ease',
    transition: 'box-shadow .1s ease,border-color .1s ease',
    transition: 'box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease',
    webkitBoxShadow: 'none',
    boxShadow: 'none'
  },
  textAreaContainer: {
    width: '100%',
    height: '15em',
    marginTop: '1.5em'
  },
  textArea: {
    resize: 'none',
    fontFamily: 'Poppins, sans-serif'
  },
  submitButton: {
    bg: '#4BB543',
    padding: '1em !important',
    borderRadius: '5px !important'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/sections/core-features/data.js":
/*!********************************************!*\
  !*** ./src/sections/core-features/data.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = {
  subTitle: 'Core features',
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnName: 'Get Started',
  btnURL: '#'
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/sections/core-features/index.js":
/*!*********************************************!*\
  !*** ./src/sections/core-features/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/core-feature.png */ "./src/assets/core-feature.png");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/shape-pattern2.png */ "./src/assets/shape-pattern2.png");
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/sections/core-features/styles.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/sections/core-features/data.js");
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\sections\\core-features\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





function CoreFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.coreFeature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Providing solutions to keep our customers happy.")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_core_feature_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  })))));
}

/***/ }),

/***/ "./src/sections/core-features/styles.js":
/*!**********************************************!*\
  !*** ./src/sections/core-features/styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7]
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6]
    }
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/sections/rates/index.js":
/*!*************************************!*\
  !*** ./src/sections/rates/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rates; });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./src/sections/rates/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\sections\\rates\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Rates() {
  const targetBudget = Number(window.localStorage.getItem("targetBudget") || 2000);
  const currentBudget = Number(window.localStorage.getItem("currentBudget") || 4000);
  const maintanceBudget = Number(window.localStorage.getItem("maintanceBudget") || 100);
  const ContributionFrequency = Number(window.localStorage.getItem("contributionFrequency") || "Monthly");
  const projectDuration = Number(window.localStorage.getItem("projectDuration") || 2);
  const {
    0: projDuration,
    1: setProjDuration
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(projectDuration);
  const {
    0: targBudget,
    1: setTargBudget
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(targetBudget);
  const {
    0: curBudget,
    1: setCurBudget
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(currentBudget);
  const {
    0: mainBudget,
    1: setMainBudget
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(maintanceBudget);
  const {
    0: contributeFrequency,
    1: setContributeFrequency
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(ContributionFrequency);
  const formater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.localStorage.setItem("targetBudget", targBudget);
    window.localStorage.setItem("currentBudget", curBudget);
    window.localStorage.setItem("maintanceBudget", mainBudget);
    window.localStorage.setItem("contributionFrequency", contributeFrequency);
    window.localStorage.setItem("projectDuration", projDuration);
    let Estimate = curBudget + contributeFrequency + mainBudget * projDuration;
    let updatedCost = (targetBudget + Estimate) / 2;
    setTargBudget(updatedCost);
  }, [targetBudget, currentBudget, ContributionFrequency, projectDuration, mainBudget]);
  return __jsx("div", {
    className: "rates",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Novigo Service Calculator "), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Get An Estimate for Your Vison!", projectDuration), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Target Product Budget: ", formater.format(targetBudget)), __jsx("form", {
    className: "budget-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Current Budget", __jsx("input", {
    type: "number",
    value: currentBudget,
    onChange: e => setCurBudget(parseInt(e.target.value) || 0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  })), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Maintance Budget", __jsx("input", {
    type: "number",
    value: maintanceBudget,
    onChange: e => setMainBudget(parseInt(e.target.value) || 0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  })), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, "Contribution Frequency", __jsx("input", {
    type: "number",
    value: ContributionFrequency,
    onChange: e => setContributeFrequency(parseInt(e.target.value) || 0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  })), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "number",
    value: projectDuration,
    onChange: e => setProjDuration(parseInt(e.target.value) || 0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  })), __jsx("select", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "monthly",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, "Monthly"), __jsx("option", {
    value: "yearly",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "Yearly"))));
}

/***/ }),

/***/ "./src/sections/rates/styles.js":
/*!**************************************!*\
  !*** ./src/sections/rates/styles.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const styles = {
  budgetForm: {// display: flex,
    // flexdirection: column,
    // alignitems: flex-start,
  }
};

/***/ }),

/***/ "./src/sections/services-offered/data.js":
/*!***********************************************!*\
  !*** ./src/sections/services-offered/data.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/shape-pattern1.png */ "./src/assets/shape-pattern1.png");
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_services_nodejs_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/services/nodejs.png */ "./src/assets/services/nodejs.png");
/* harmony import */ var assets_services_nodejs_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_services_nodejs_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_services_react_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/services/react.png */ "./src/assets/services/react.png");
/* harmony import */ var assets_services_react_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_services_react_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_services_shopify_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/services/shopify.png */ "./src/assets/services/shopify.png");
/* harmony import */ var assets_services_shopify_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_services_shopify_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_services_wordpress_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/services/wordpress.png */ "./src/assets/services/wordpress.png");
/* harmony import */ var assets_services_wordpress_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_services_wordpress_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_services_blockchain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/services/blockchain.png */ "./src/assets/services/blockchain.png");
/* harmony import */ var assets_services_blockchain_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_services_blockchain_png__WEBPACK_IMPORTED_MODULE_5__);






const data = [{
  id: 1,
  imgSrc: assets_services_nodejs_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  altText: 'Node JS',
  title: 'Node JS Server Side Development',
  text: `
      Orchestrate server-side node.js development that is efficient and performant that would handle incoming traffic to make your application highly available. 
      We will build a stable application that is easily maintainable for future development on new features. 
      Follow best security practices and cryptography to keep your applications secure.
      Improve existing node.js applications to be maintainable and documented for developer training. Fix security vulnerabilities in existing applications. Implement minor testing or use test driven development to ensure you have a suite that will make sure new features will work 99% of time.
    `
}, {
  id: 2,
  imgSrc: assets_services_react_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  altText: 'React',
  title: 'React Client Side Development',
  text: `
      Our team would build modern single page apps that would improvise application performance. 
      Implement best practices to ensure your single page app is maintainable and expandable. 
      Allowing the future development on new features easier and quicker. 
      Implement typescript to ensure strongly typed props for UI components.
    `
}, {
  id: 3,
  imgSrc: assets_services_shopify_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  altText: 'Shopify',
  title: 'Shopify Client Side Development',
  text: `
      Develop interactive and competent e-commerce stores that would drive sales and revenue. 
      We use a variety of plugins to improve search engine optimization, and a aesthetic that would bring more customers to your site. 
      Our team will edit existing shopify themes that currently in use to follow ui/ux best practices to bring more traffic.
    `
}, {
  id: 4,
  imgSrc: assets_services_wordpress_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'WordPress',
  title: 'WordPress Client Side Development',
  text: `
      Our team will design and implement aesthetically pleasing websites. 
      Implement plugins and themes to boost website sales and user traffic. 
      Use search engine optimization to get more users visiting your site.
    `
}, {
  id: 5,
  imgSrc: assets_services_blockchain_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Blockchain',
  title: 'Blockchain Development',
  text: `
      Implement the ability for your application to use a digital shared ledger to store transactions.
      Integrate third-party api's such as FTX to place orders on decentralized exchanges.
      Use solidity to create dapp's(Decentralized Applications) to stored details on the ethereum blockchain.
    `
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/sections/services-offered/index.js":
/*!************************************************!*\
  !*** ./src/sections/services-offered/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/sections/services-offered/styles.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/sections/services-offered/data.js");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/service-thumb.png */ "./src/assets/service-thumb.png");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\sections\\services-offered\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function ServiceSection() {
  const handleClick = e => {
    e.preventDefault(); // setVideoOpen(true);
  };

  return __jsx("section", {
    sx: _objectSpread({
      varaint: 'section.services'
    }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].servicesContainer),
    id: "services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].map(dataItem => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    key: dataItem.id,
    sx: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].servicesSubContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: dataItem.imgSrc,
    alt: dataItem.altText,
    sx: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].serviceImg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, dataItem.title), __jsx("p", {
    sx: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].service,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, dataItem.text))));
}

/***/ }),

/***/ "./src/sections/services-offered/styles.js":
/*!*************************************************!*\
  !*** ./src/sections/services-offered/styles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const playPluse = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
from {
  transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
  opacity: 1;
}

to {
  transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
  opacity: 0;
}
`;
const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: "relative"
  },
  containerBox: {
    display: "flex",
    alignItems: ["flex-start", null, null, "center"],
    justifyContent: ["flex-start", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    pb: [0, null, null, null, null, 7]
  },
  thumbnail: {
    mr: ["auto", null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ["auto", null, null, 0],
    display: "inline-flex",
    position: "relative",
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"]
    }
  },
  servicesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  servicesSubContainer: {
    width: '100%'
  },
  service: {
    width: '100%'
  },
  serviceImg: {
    maxWidth: '30em',
    maxHeight: '25em',
    width: 'auto',
    height: 'auto'
  },
  shapeBox: {
    position: "absolute",
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ["none", null, null, null, null, "inline-block"]
  },
  videoBtn: {
    zIndex: 2,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: ["60px", null, "80px", null, "100px"],
    height: ["60px", null, "80px", null, "100px"],
    p: "0px !important",
    backgroundColor: "transparent",
    "&::before": {
      position: "absolute",
      content: '""',
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      display: "block",
      width: ["60px", null, "80px", null, "100px"],
      height: ["60px", null, "80px", null, "100px"],
      backgroundColor: "primary",
      borderRadius: "50%",
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5
    },
    "> span": {
      backgroundColor: "rgba(255,255,255,0.5)",
      width: "inherit",
      height: "inherit",
      textAlign: "center",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.5s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 2
    },
    svg: {
      fontSize: [40, null, 48, null, 62]
    }
  },
  contentBox: {
    width: ["100%", null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ["center", null, null, "left"]
  },
  grid: {
    pr: [2, 0, null, null, 6, "70px"],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: "auto",
    width: ["100%", 370, 420, "100%"],
    gridGap: ["35px 0", null, null, null, "50px 0"],
    gridTemplateColumns: ["repeat(1,1fr)"]
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    transition: "all 0.3s"
  },
  icon: {
    width: ["45px", null, null, null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, null, null, null, 4]
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    subTitle: {
      fontSize: [1, null, null, "14px", 1],
      fontWeight: 400,
      lineHeight: 1.9
    }
  },
  videoWrapper: {
    maxWidth: "100%",
    position: "relative",
    width: "900px",
    "&:before": {
      content: '""',
      display: "block",
      paddingTop: "56.25%"
    },
    iframe: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/sections/workflow/data.js":
/*!***************************************!*\
  !*** ./src/sections/workflow/data.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = [{
  id: 1,
  title: 'Communicate with Client',
  text: 'Communicate with client to retrieve initial requirements on how to improve your current project or create a new project'
}, {
  id: 2,
  title: 'Contract',
  text: 'Determine Timeline On When your looking for services to be completely met, and assess Cost of Service'
}, {
  id: 3,
  title: 'Constant Communication',
  text: "Constant communication to ensure the customer get's best project possible."
}, {
  id: 4,
  title: 'Novigo receives funds payment',
  text: 'At Least 10% of proposal will be paid upfront to serve as a retainer for any cloud service cost incurred upon compl'
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/sections/workflow/index.js":
/*!****************************************!*\
  !*** ./src/sections/workflow/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_workflow_workflow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/workflow/workflow.png */ "./src/assets/workflow/workflow.png");
/* harmony import */ var assets_workflow_workflow_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_workflow_workflow_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/sections/workflow/styles.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/sections/workflow/data.js");
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\sections\\workflow\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function WorkFlow() {
  return __jsx("section", {
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].workflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_workflow_workflow_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "workflow",
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].workflowImg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/sections/workflow/styles.js":
/*!*****************************************!*\
  !*** ./src/sections/workflow/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/arrowOdd.svg */ "./src/assets/arrowOdd.svg");
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/arrowEven.svg */ "./src/assets/arrowEven.svg");
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_2__);



const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${assets_patternBG_png__WEBPACK_IMPORTED_MODULE_0___default.a})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10]
  },
  workflowImg: {
    minHeight: '12em',
    minWidth: '25em',
    height: 'auto',
    width: 'auto'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#0F2137',
    // primary heading color
    heading_secondary: '#0F2137',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E5ECF4',
    // border color
    yellow: '#FFA740',
    // border color
    primary: '#0B5FDD',
    // primary button and link color
    secondary: 'transparent',
    // secondary color - can be used for hover states
    muted: '#E4E4E4',
    // muted color
    accent: '#609',
    // a contrast color for emphasizing UI
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: ['0 5vw', '0 10vw', '0 20vw']
    }
  },
  section: {
    keyFeature: {
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px']
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    coreFeature: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
      overflow: 'hidden'
    },
    testimonial: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '190px'],
      overflow: 'hidden'
    },
    services: {
      pb: ['90px', null, 9, null, null, 10, null, '150px']
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px']
    }
  },
  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px'
    },
    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading'
    },
    heroPrimary: {
      color: 'heading',
      fontSize: ['32px', '36px', '42px', '40px', '42px', '52px', '58px', '66px'],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontSize: [2, null, '17px', null, null, '19px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: 'heading'
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    default: {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary'
      }
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      display: 'flex'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      // Modal Global Style
      '.modal-video-close-btn': {
        cursor: 'pointer'
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto'
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

/***/ }),

/***/ "@emailjs/browser":
/*!***********************************!*\
  !*** external "@emailjs/browser" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emailjs/browser");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-scroll-to-bottom":
/*!*****************************************!*\
  !*** external "react-scroll-to-bottom" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-to-bottom");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Fycm93RXZlbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvd09kZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY29yZS1mZWF0dXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2V4Y2Vyc2lzZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL25vdmlnby1oZWFkLWxvZ28uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbm92aWdvLWxvZ28uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGF0dGVybkJHLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NlcnZpY2UtdGh1bWIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZXMvYmxvY2tjaGFpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlcy9ub2RlanMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZXMvcmVhY3QucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZXMvc2hvcGlmeS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlcy93b3JkcHJlc3MucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2hhcGUtbGVmdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1yaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWFtL2FsaS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWFtL21vLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ya2Zsb3cvd29ya2Zsb3cucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbW9iaWxlLWRyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9hYm91dC11cy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9hYm91dC11cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYWJvdXQtdXMvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9iYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jsb2cvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYmxvZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYmxvZy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QtdXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2NvbnRhY3QtdXMvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9jb3JlLWZlYXR1cmVzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZXMvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9yYXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcmF0ZXMvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9zZXJ2aWNlcy1vZmZlcmVkL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2VzLW9mZmVyZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2VzLW9mZmVyZWQvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy93b3JrZmxvdy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy93b3JrZmxvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvd29ya2Zsb3cvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1haWxqcy9icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy1kcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsLXRvLWJvdHRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiIl0sIm5hbWVzIjpbImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicmVzb2x2ZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiY2xlYW5QYXRobmFtZSIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJ2YWx1ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiRHJhd2VyIiwiY2xhc3NOYW1lIiwiY2xvc2VCdXR0b24iLCJjbG9zZUJ1dHRvblN0eWxlIiwiZHJhd2VySGFuZGxlciIsInRvZ2dsZUhhbmRsZXIiLCJvcGVuIiwid2lkdGgiLCJwbGFjZW1lbnQiLCJkcmF3ZXJTdHlsZSIsImNsb3NlQnRuU3R5bGUiLCJ0cmltIiwiZGlzcGxheSIsImRlZmF1bHRQcm9wcyIsIm1lbnVJdGVtIiwibGFiZWwiLCJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJwdCIsInBiIiwidGV4dEFsaWduIiwiZmxleERpcmVjdGlvbiIsIm1lbnVzIiwibXQiLCJtYiIsIm5hdiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwibGluayIsImZvbnRTaXplIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInRleHREZWNvcmF0aW9uIiwibGluZUhlaWdodCIsInB4IiwiY29weXJpZ2h0IiwiSGVhZGVyIiwiY29udGFjdFVzUmVmIiwiaGVhZGVyIiwiY29udGFpbmVyIiwiTm92aWdvTG9nbyIsIm1lbnVJdGVtcyIsIm1hcCIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsInB5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiYW5pbWF0aW9uIiwiZmxleFNocmluayIsIm1yIiwibWwiLCJib3hTaGFkb3ciLCJteCIsImEiLCJNb2JpbGVEcmF3ZXIiLCJpc0RyYXdlck9wZW4iLCJzZXRJc0RyYXdlck9wZW4iLCJ1c2VTdGF0ZSIsInByZXZTdGF0ZSIsImRyYXdlciIsImNsb3NlIiwiY29udGVudCIsIm1lbnUiLCJtZW51Rm9vdGVyIiwiaGVpZ2h0IiwicmlnaHQiLCJ6SW5kZXgiLCJib3JkZXJCb3R0b20iLCJzb2NpYWwiLCJpY29uIiwiYnV0dG9uIiwiZnciLCJib3JkZXJSYWRpdXMiLCJMYXlvdXQiLCJpc1N0aWNreSIsInNldElzU3RpY2t5IiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJzdGF0dXMiLCJTdGlja3kiLCJTVEFUVVNfRklYRUQiLCJTVEFUVVNfT1JJR0lOQUwiLCJoZWFkZXJQcm9wcyIsInZhcmlhbnQiLCJOYXZMaW5rIiwicmVzdCIsIkxvZ28iLCJzcmMiLCJSYXRpbmciLCJTZWN0aW9uSGVhZGVyIiwidGl0bGUiLCJzbG9nYW4iLCJpc1doaXRlIiwib3BhY2l0eSIsIlNFTyIsImRlc2NyaXB0aW9uIiwiYXV0aG9yIiwibWV0YSIsIm1ldGFEYXRhIiwicHJvcGVydHkiLCJjb25jYXQiLCJub3ZpZ29IZWFkTG9nbyIsImxhbmciLCJJbmRleFBhZ2UiLCJ1c2VSZWYiLCJ0aGVtZSIsImlkIiwiaW1nU3JjIiwiYWxpIiwiYWx0VGV4dCIsInRleHQiLCJtbyIsIkFib3V0VXMiLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwidmFyYWludCIsImFib3V0dXNDb250YWluZXIiLCJkYXRhSXRlbSIsImFib3V0dXNTdWJDb250YWluZXIiLCJhYm91dHVzSW1nIiwiYWJvdXR1cyIsImJvcmRlclN0eWxlIiwicGFkZGluZyIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJzaGFwZUJveCIsImJvdHRvbSIsImNvbnRlbnRCb3giLCJncmlkIiwicHIiLCJwbCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiY2FyZCIsIndyYXBwZXIiLCJzdWJUaXRsZSIsIkJhbm5lciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidG9nZ2xlVmlzaWJsZSIsInNjcm9sbGVkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsVG9Cb3R0b20iLCJzY3JvbGxUbyIsInNjcm9sbEhlaWdodCIsImJlaGF2aW9yIiwiYmFubmVyIiwiYmFja2dyb3VuZCIsIm1hcmdpblRvcCIsImxvY2F0aW9uIiwiYnV0dG9ucyIsInByaW1hcnkiLCJiZyIsIm1pbldpZHRoIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRJbWFnZSIsIlNoYXBlUmlnaHQiLCJtaW5IZWlnaHQiLCJpbWFnZUJveCIsImltZyIsImF2YXRhciIsIkF2YXRhcjEiLCJkZXNpZ25hdGlvbiIsInJldmlldyIsIkF2YXRhcjIiLCJBdmF0YXIzIiwiQXZhdGFyNCIsIkJsb2dzIiwiYmxvZ1R1dG9yaWFscyIsInNldEJsb2dUdXRvcmlhbHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImdldE1lZGl1bUJsb2dEYXRhIiwibG9nIiwiY29uZmlnIiwibWVkaXVtUmVzcG9uc2UiLCJheGlvcyIsIml0ZW1zIiwiYmxvZ3NDb250YWluZXIiLCJibG9nVHV0b3JpYWxzQ29udGFpbmVyIiwiYmxvZ1R1dG9yaWFsIiwiYmxvZ1R1dG9yaWFsSWR4IiwiYmxvZ1R1dG9yaWFsQ29udGFpbmVyIiwiYmxvZ1R1dG9yaWFsQ29udGFpbmVySW1nIiwidGh1bWJuYWlsIiwiZm9ybWF0IiwiRGF0ZSIsInB1YkRhdGUiLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImp1c3RpZnlTZWxmIiwiRXJyb3JUZXh0IiwiZXJyb3JUZXh0IiwiQ29udGFjdFVzIiwiZm9yd2FyZFJlZiIsInNob3dSZXN1bHQiLCJjb250YWN0VXNGb3JtIiwic2V0Q29udGFjdFVzRm9ybSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGhvbmVOdW1iZXIiLCJlbWFpbCIsInNlbmRFbWFpbCIsImZvcm0iLCJlbWFpbGpzIiwic2VuZEZvcm0iLCJ0aGVuIiwicmVzZXQiLCJpbnB1dFN0eWxlcyIsImlucHV0IiwiZXJyb3JJbnB1dCIsImhhbmRsZUlucHV0Q2hhbmdlIiwic2V0RmllbGRWYWx1ZSIsImNvbnRhaW5lckJveCIsInZhbHVlcyIsImVycm9ycyIsIm1hdGNoIiwic2V0VmFsdWVzIiwic2V0SXNTdWJtaXR0aW5nIiwiaGFuZGxlU3VibWl0IiwiaW5wdXRDb250YWluZXI1MCIsImlucHV0Q29udGFpbmVyNTBUZXh0IiwidGV4dEFyZWFDb250YWluZXIiLCJ0ZXh0QXJlYSIsInN1Ym1pdEJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJib3JkZXIiLCJtc0lucHV0UGxhY2Vob2xkZXJDb2xvciIsImlucHV0Q29udGFpbmVyIiwib3V0bGluZSIsInN3ZWJraXRUYXBIaWdobGlnaHRDb2xvciIsIndlYmtpdFRyYW5zaXRpb24iLCJ3ZWJraXRCb3hTaGFkb3ciLCJyZXNpemUiLCJmb250RmFtaWx5IiwiYnRuTmFtZSIsImJ0blVSTCIsIkNvcmVGZWF0dXJlIiwiRmVhdHVyZVRodW1iIiwic2hhcGVQYXR0ZXJuIiwiUmF0ZXMiLCJ0YXJnZXRCdWRnZXQiLCJOdW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY3VycmVudEJ1ZGdldCIsIm1haW50YW5jZUJ1ZGdldCIsIkNvbnRyaWJ1dGlvbkZyZXF1ZW5jeSIsInByb2plY3REdXJhdGlvbiIsInByb2pEdXJhdGlvbiIsInNldFByb2pEdXJhdGlvbiIsInRhcmdCdWRnZXQiLCJzZXRUYXJnQnVkZ2V0IiwiY3VyQnVkZ2V0Iiwic2V0Q3VyQnVkZ2V0IiwibWFpbkJ1ZGdldCIsInNldE1haW5CdWRnZXQiLCJjb250cmlidXRlRnJlcXVlbmN5Iiwic2V0Q29udHJpYnV0ZUZyZXF1ZW5jeSIsImZvcm1hdGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJzZXRJdGVtIiwiRXN0aW1hdGUiLCJ1cGRhdGVkQ29zdCIsImJ1ZGdldEZvcm0iLCJub2RlIiwicmVhY3QiLCJzaG9waWZ5Iiwid29yZHByZXNzIiwiYmxvY2tjaGFpbiIsIlNlcnZpY2VTZWN0aW9uIiwic2VydmljZXNDb250YWluZXIiLCJzZXJ2aWNlc1N1YkNvbnRhaW5lciIsInNlcnZpY2VJbWciLCJzZXJ2aWNlIiwicGxheVBsdXNlIiwiY29yZUZlYXR1cmUiLCJvcmRlciIsIm1heFdpZHRoIiwidmlkZW9CdG4iLCJ0cmFuc2Zvcm0iLCJzdmciLCJ2aWRlb1dyYXBwZXIiLCJwYWRkaW5nVG9wIiwiaWZyYW1lIiwiV29ya0Zsb3ciLCJ3b3JrZmxvdyIsIldvcmtmbG93Iiwid29ya2Zsb3dJbWciLCJQYXR0ZXJuQkciLCJiYWNrZ3JvdW5kU2l6ZSIsImNvbG9ycyIsInRleHRfc2Vjb25kYXJ5IiwiaGVhZGluZyIsImhlYWRpbmdfc2Vjb25kYXJ5IiwiYmFja2dyb3VuZF9zZWNvbmRhcnkiLCJib3JkZXJfY29sb3IiLCJ5ZWxsb3ciLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsInRvb2xiYXIiLCJtYWluIiwic2VjdGlvbiIsImtleUZlYXR1cmUiLCJmZWF0dXJlIiwibmV3cyIsIm92ZXJmbG93IiwidGVzdGltb25pYWwiLCJzZXJ2aWNlcyIsInByaWNpbmciLCJzZWN0aW9uSGVhZGVyIiwibWFyZ2luQm90dG9tIiwibGV0dGVyU3BhY2luZyIsInRleHRUcmFuc2Zvcm0iLCJoZXJvUHJpbWFyeSIsImhlcm9TZWNvbmRhcnkiLCJsZWFkIiwibGlua3MiLCJkZWZhdWx0IiwiYmxvZyIsImxvZ28iLCJpbWFnZXMiLCJkZWZhdWx0QnRuIiwid2hpdGVCdXR0b24iLCJ0ZXh0QnV0dG9uIiwiY2FyZHMiLCJvZmZlciIsImZsZXgiLCJmZWF0dXJlQ2FyZCIsImZvcm1zIiwidCIsImJhZGdlcyIsInJvb3QiLCJmb250U21vb3RoaW5nIiwiaHIiLCJ1bCIsImxpc3RTdHlsZSIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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LENBQVA7QUFHSzs7QUFBQSxNQUFNMFAsRUFBRSxHQUFHLHVCQUFYOztBQUNBLE1BQU0vSSxFQUFFLEdBQ2IrSSxFQUFFLElBQ0YsT0FBTzlJLFdBQVcsQ0FBbEIsU0FEQThJLGNBRUEsT0FBTzlJLFdBQVcsQ0FBbEIsWUFISzs7Ozs7Ozs7Ozs7OztBQ2pZTSx3QkFBd0IsMENBQTBDLGdEQUFnRCxnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7Ozs7QUNEQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7OztBQ0E3QyxxQ0FBcUMsZ2tCOzs7Ozs7Ozs7OztBQ0FyQyxxQ0FBcUMsNGpCOzs7Ozs7Ozs7OztBQ0FyQywwRjs7Ozs7Ozs7Ozs7QUNBQSwwRjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSxrRjs7Ozs7Ozs7Ozs7QUNBQSxxQ0FBcUMsZytEOzs7Ozs7Ozs7OztBQ0FyQyxxQ0FBcUMsNHVSOzs7Ozs7Ozs7OztBQ0FyQyx1Rjs7Ozs7Ozs7Ozs7QUNBQSwyRjs7Ozs7Ozs7Ozs7QUNBQSx3Rjs7Ozs7Ozs7Ozs7QUNBQSxvRjs7Ozs7Ozs7Ozs7QUNBQSxtRjs7Ozs7Ozs7Ozs7QUNBQSxxRjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSx3Rjs7Ozs7Ozs7Ozs7QUNBQSw0Rjs7Ozs7Ozs7Ozs7QUNBQSw0Rjs7Ozs7Ozs7Ozs7QUNBQSx5Rjs7Ozs7Ozs7Ozs7QUNBQSxpRjs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsb3JSOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2hSOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsbzdROzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDRTOzs7Ozs7Ozs7OztBQ0FqQyxzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTK0ksTUFBVCxPQWFaO0FBQUEsTUFiNkI7QUFDOUJDLGFBRDhC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QUFFO0FBVk47QUExQkY7QUF4V0ssQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNakEwSWlCb1pXbG5hSFE5SWpReklpQjJhV1YzUW05NFBTSXdJREFnTWpBMElEUXpJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGdvOGNHRjBhQ0JrUFNKTk1DNDBPREV5TURFZ01UQXVNalUzTVVNd0xqUTRNVEl3TVNBeE1DNHlOVGN4SURreUxqYzRNVElnT0RFdU56ZzBOeUF4T1RVdU5EZ3hJREV3TGpJMU56RWlJSE4wY205clpUMGlJME15UTBKRVJTSWdjM1J5YjJ0bExYZHBaSFJvUFNJeExqVWlJSE4wY205clpTMWtZWE5vWVhKeVlYazlJalVnTlNJdlBnbzhjR0YwYUNCa1BTSk5NVGd3TGpjZ015NDBOelExTlVNeE9EQXVOeUF6TGpRM05EVTFJREU1T1M0NE1UVWdMVEl1TURVeE56Y2dNakF4TGpZek55QTBMakl3T1RFMlF6SXdNeTQwTlRrZ01UQXVORGN3TVNBeU1ESXVNRGt6SURFMkxqazBORFFnTVRrMkxqRTNOaUF5TlM0NE1UUXlJaUJ6ZEhKdmEyVTlJaU5ETWtOQ1JFVWlJSE4wY205clpTMTNhV1IwYUQwaU1TNDFJaUJ6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVQU0kwSURRaUx6NEtQQzl6ZG1jK0NnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNakEwSWlCb1pXbG5hSFE5SWpReklpQjJhV1YzUW05NFBTSXdJREFnTWpBMElEUXpJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGdvOGNHRjBhQ0JrUFNKTk1DNDVPVGszTlRZZ016SXVOekU1TlVNd0xqazVPVGMxTmlBek1pNDNNVGsxSURrekxqSTVPVGdnTFRNNExqZ3dPREVnTVRrMklETXlMamN4T1RVaUlITjBjbTlyWlQwaUkwTXlRMEpFUlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l4TGpVaUlITjBjbTlyWlMxa1lYTm9ZWEp5WVhrOUlqVWdOU0l2UGdvOGNHRjBhQ0JrUFNKTk1UZ3hMakl4T1NBek9TNDBPVGMyUXpFNE1TNHlNVGtnTXprdU5EazNOaUF5TURBdU16TTBJRFExTGpBeU5DQXlNREl1TVRVMklETTRMamMyTTBNeU1ETXVPVGM0SURNeUxqVXdNVGtnTWpBeUxqWXhNU0F5Tmk0d01qYzFJREU1Tmk0Mk9UUWdNVGN1TVRVM05TSWdjM1J5YjJ0bFBTSWpRekpEUWtSRklpQnpkSEp2YTJVdGQybGtkR2c5SWpFdU5TSWdjM1J5YjJ0bExXUmhjMmhoY25KaGVUMGlOQ0EwSWk4K0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lci10aHVtYi0xYTk4NDI1ZTA1MWFiNzM0ZGM3NmFmN2RkZWZhNTI1OS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY29yZS1mZWF0dXJlLTc0OWRjMDg2ZWVjMjVhYzE0ZWQwYzkyYTY4NzZkMjllLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9leGNlcnNpc2UtNjJkZjA5MzM2OTc0NGZhMTdhNzg1MmYwMTcwNGI0MDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tMmFmZmI3NWUzZTI2ZTliZDUxZTIzNjU4NmI1Y2NlMDMuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qUTNPQ0lnYUdWcFoyaDBQU0l5TmpjeUlpQjJhV1YzUW05NFBTSXdJREFnTWpRM09DQXlOamN5SWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQSEJoZEdnZ1pEMGlUVEV5TVRNZ01UZzNNVll5TkRVeExqRTNRekV5TVRNZ01qUTNOeTR4TlNBeE1qSTFMalF4SURJMU16VXVNRFlnTVRJM05TNHdOQ0F5TlRVNExqZzJRekV6TWpRdU5qY2dNalU0TWk0Mk5pQXhOalF6TGpZNUlESTFOamd1TnpnZ01UYzVOeUF5TlRVNExqZzJJaUJ6ZEhKdmEyVTlJaU5GTlRoRE1qSWlJSE4wY205clpTMTNhV1IwYUQwaU5UQWlMejROQ2p4d1lYUm9JR1E5SWsweE16ZzFMalUwSURreE15NDFPRE5NTVRNM01TNDROU0F6TXpNdU5UY3hRekV6TnpFdU1qUWdNekEzTGpVNU9DQXhNemd5TGpJNElESTBPUzQwTVRJZ01UUXpNUzR6TXlBeU1qUXVORFZETVRRNE1DNHpPU0F4T1RrdU5EZzVJREUzT1RrdU5qVWdNakExTGpnMElERTVOVE11TVRVZ01qRXlMakV6TmlJZ2MzUnliMnRsUFNJalJUWTRRekl5SWlCemRISnZhMlV0ZDJsa2RHZzlJalV3SWk4K0RRbzhjR0YwYUNCa1BTSk5NVFkzTlM0NE5pQXhOREExTGpFNVRESXlOVFV1T1RrZ01UTTVPQzR6T0VNeU1qZ3hMamszSURFek9UZ3VNRGNnTWpNek9TNDNNeUF4TXpnMExqazVJREl6TmpJdU9UUWdNVE16TlM0d09FTXlNemcyTGpFMklERXlPRFV1TVRjZ01qTTJPQzQxTXlBNU5qWXVNek16SURJek5UWXVPREVnT0RFekxqRTFOQ0lnYzNSeWIydGxQU0lqTWtGQ1JFVkRJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqVXdJaTgrRFFvOGNHRjBhQ0JrUFNKTk9EQXhMamc1T1NBeE16YzRUREl5TVM0NE1Ea2dNVE00Tnk0NE0wTXhPVFV1T0RNeklERXpPRGd1TWpjZ01UTTRMakUwTWlBeE5EQXhMalkySURFeE5TNHhPRGtnTVRRMU1TNDJPRU01TWk0eU16VTNJREUxTURFdU56RWdNVEV4TGpVeUlERTRNakF1TkRVZ01USTBMakF6TVNBeE9UY3pMalUzSWlCemRISnZhMlU5SWlORk5UaERNaklpSUhOMGNtOXJaUzEzYVdSMGFEMGlOVEFpTHo0TkNqeHdZWFJvSUdROUlrMHhNRGsxTGpneklEa3hNeTQ1T1V3eE1Ea3lMalkxSURNek15NDRNalZETVRBNU1pNDFNU0F6TURjdU9EUTFJREV3TnprdU56a2dNalV3TGpBd05DQXhNRE13TGpBeUlESXlOaTQwTnpsRE9UZ3dMakkyTVNBeU1ESXVPVFV6SURZMk1TNHpNakVnTWpFNExqVTRJRFV3T0M0d056SWdNakk1TGpNek5DSWdjM1J5YjJ0bFBTSWpNa0ZDUkVWRElpQnpkSEp2YTJVdGQybGtkR2c5SWpVd0lpOCtEUW84Y21WamRDQjRQU0kyTmpNdU5USTRJaUI1UFNJNE1UVXVPQ0lnZDJsa2RHZzlJakV3TnpNdU1USWlJR2hsYVdkb2REMGlNVEUzTWk0NU1TSWdjbmc5SWpJd01DSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9MVEV1TWpVd09EVWdOall6TGpVeU9DQTRNVFV1T0NraUlHWnBiR3c5SWlNd1FqVkdSRVFpTHo0TkNqeGxiR3hwY0hObElHTjRQU0l5TnpBdU5TSWdZM2s5SWpRNUlpQnllRDBpTUM0MUlpQnllVDBpTkRraUlHWnBiR3c5SWlORU9VUTVSRGtpTHo0TkNqeGxiR3hwY0hObElHTjRQU0kwTlRZaUlHTjVQU0l4T1RndU5TSWdjbmc5SWpFd01TSWdjbms5SWpFd01DNDFJaUJtYVd4c1BTSWpNa0ZDUkVWRElpOCtEUW84Wld4c2FYQnpaU0JqZUQwaU1qTTNOeUlnWTNrOUlqY3hNaTQxSWlCeWVEMGlNVEF4SWlCeWVUMGlNVEF3TGpVaUlHWnBiR3c5SWlNeVFVSkVSVU1pTHo0TkNqeGxiR3hwY0hObElHTjRQU0l5TURJeklpQmplVDBpTWpFeUxqVWlJSEo0UFNJeE1ERWlJSEo1UFNJeE1EQXVOU0lnWm1sc2JEMGlJMFUxT0VNeU1pSXZQZzBLUEdWc2JHbHdjMlVnWTNnOUlqRTROak1pSUdONVBTSXlOVGN4TGpVaUlISjRQU0l4TURFaUlISjVQU0l4TURBdU5TSWdabWxzYkQwaUkwVTFPRU15TWlJdlBnMEtQR1ZzYkdsd2MyVWdZM2c5SWpFd01TSWdZM2s5SWpJd056UXVOU0lnY25nOUlqRXdNU0lnY25rOUlqRXdNQzQxSWlCbWFXeHNQU0lqUlRVNFF6SXlJaTgrRFFvOEwzTjJaejROQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5URTBOeUlnYUdWcFoyaDBQU0l5TmpjeUlpQjJhV1YzUW05NFBTSXdJREFnTlRFME55QXlOamN5SWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQSEJoZEdnZ1pEMGlUVEV5TVRNZ01UZzNNVll5TkRVeExqRTNRekV5TVRNZ01qUTNOeTR4TlNBeE1qSTFMalF4SURJMU16VXVNRFlnTVRJM05TNHdOQ0F5TlRVNExqZzJRekV6TWpRdU5qY2dNalU0TWk0Mk5pQXhOalF6TGpZNUlESTFOamd1TnpnZ01UYzVOeUF5TlRVNExqZzJJaUJ6ZEhKdmEyVTlJaU5GTlRoRE1qSWlJSE4wY205clpTMTNhV1IwYUQwaU5UQWlMejROQ2p4d1lYUm9JR1E5SWsweE16ZzFMalUwSURreE15NDFPRE5NTVRNM01TNDROU0F6TXpNdU5UY3hRekV6TnpFdU1qUWdNekEzTGpVNU9DQXhNemd5TGpJNElESTBPUzQwTVRJZ01UUXpNUzR6TXlBeU1qUXVORFZETVRRNE1DNHpPU0F4T1RrdU5EZzVJREUzT1RrdU5qVWdNakExTGpnMElERTVOVE11TVRVZ01qRXlMakV6TmlJZ2MzUnliMnRsUFNJalJUWTRRekl5SWlCemRISnZhMlV0ZDJsa2RHZzlJalV3SWk4K0RRbzhjR0YwYUNCa1BTSk5NVFkzTlM0NE5pQXhOREExTGpFNVRESXlOVFV1T1RrZ01UTTVPQzR6T0VNeU1qZ3hMamszSURFek9UZ3VNRGNnTWpNek9TNDNNeUF4TXpnMExqazVJREl6TmpJdU9UUWdNVE16TlM0d09FTXlNemcyTGpFMklERXlPRFV1TVRjZ01qTTJPQzQxTXlBNU5qWXVNek16SURJek5UWXVPREVnT0RFekxqRTFOQ0lnYzNSeWIydGxQU0lqTWtGQ1JFVkRJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqVXdJaTgrRFFvOGNHRjBhQ0JrUFNKTk9EQXhMamc1T1NBeE16YzRUREl5TVM0NE1Ea2dNVE00Tnk0NE0wTXhPVFV1T0RNeklERXpPRGd1TWpjZ01UTTRMakUwTWlBeE5EQXhMalkySURFeE5TNHhPRGtnTVRRMU1TNDJPRU01TWk0eU16VTNJREUxTURFdU56RWdNVEV4TGpVeUlERTRNakF1TkRVZ01USTBMakF6TVNBeE9UY3pMalUzSWlCemRISnZhMlU5SWlORk5UaERNaklpSUhOMGNtOXJaUzEzYVdSMGFEMGlOVEFpTHo0TkNqeHdZWFJvSUdROUlrMHhNRGsxTGpneklEa3hNeTQ1T1V3eE1Ea3lMalkxSURNek15NDRNalZETVRBNU1pNDFNU0F6TURjdU9EUTFJREV3TnprdU56a2dNalV3TGpBd05DQXhNRE13TGpBeUlESXlOaTQwTnpsRE9UZ3dMakkyTVNBeU1ESXVPVFV6SURZMk1TNHpNakVnTWpFNExqVTRJRFV3T0M0d056SWdNakk1TGpNek5DSWdjM1J5YjJ0bFBTSWpNa0ZDUkVWRElpQnpkSEp2YTJVdGQybGtkR2c5SWpVd0lpOCtEUW84Y21WamRDQjRQU0kyTmpNdU5USTRJaUI1UFNJNE1UVXVPQ0lnZDJsa2RHZzlJakV3TnpNdU1USWlJR2hsYVdkb2REMGlNVEUzTWk0NU1TSWdjbmc5SWpJd01DSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9MVEV1TWpVd09EVWdOall6TGpVeU9DQTRNVFV1T0NraUlHWnBiR3c5SWlNd1FqVkdSRVFpTHo0TkNqeGxiR3hwY0hObElHTjRQU0l5TnpBdU5TSWdZM2s5SWpRNUlpQnllRDBpTUM0MUlpQnllVDBpTkRraUlHWnBiR3c5SWlORU9VUTVSRGtpTHo0TkNqeGxiR3hwY0hObElHTjRQU0kwTlRZaUlHTjVQU0l4T1RndU5TSWdjbmc5SWpFd01TSWdjbms5SWpFd01DNDFJaUJtYVd4c1BTSWpNa0ZDUkVWRElpOCtEUW84Wld4c2FYQnpaU0JqZUQwaU1qTTNOeUlnWTNrOUlqY3hNaTQxSWlCeWVEMGlNVEF4SWlCeWVUMGlNVEF3TGpVaUlHWnBiR3c5SWlNeVFVSkVSVU1pTHo0TkNqeGxiR3hwY0hObElHTjRQU0l5TURJeklpQmplVDBpTWpFeUxqVWlJSEo0UFNJeE1ERWlJSEo1UFNJeE1EQXVOU0lnWm1sc2JEMGlJMFUxT0VNeU1pSXZQZzBLUEdWc2JHbHdjMlVnWTNnOUlqRTROak1pSUdONVBTSXlOVGN4TGpVaUlISjRQU0l4TURFaUlISjVQU0l4TURBdU5TSWdabWxzYkQwaUkwVTFPRU15TWlJdlBnMEtQR1ZzYkdsd2MyVWdZM2c5SWpFd01TSWdZM2s5SWpJd056UXVOU0lnY25nOUlqRXdNU0lnY25rOUlqRXdNQzQxSWlCbWFXeHNQU0lqUlRVNFF6SXlJaTgrRFFvOGNHRjBhQ0JrUFNKTk1qVTBOaTQySURFME9USldNVEF3TWtneU5qRTBMalZNTWpreE5DNHhJREUwTURNdU1Vd3lPVEF5TGprZ01UUXdPUzQwUXpJNU1ERXVNRE1nTVRNNU55NDNNeUF5T0RrNUxqUWdNVE00TlM0eE15QXlPRGs0SURFek56RXVOa015T0RrMkxqWWdNVE0xTnk0MklESTRPVFV1TWlBeE16UXlMamtnTWpnNU15NDRJREV6TWpjdU5VTXlPRGt5TGpnM0lERXpNVEV1TmpNZ01qZzVNUzQ1TXlBeE1qazFMakEzSURJNE9URWdNVEkzTnk0NFF6STRPVEF1TlRNZ01USTJNQzR3TnlBeU9Ea3dMakEzSURFeU5ERXVOak1nTWpnNE9TNDJJREV5TWpJdU5VTXlPRGc1TGpFeklERXlNRE11TXpjZ01qZzRPQzQ1SURFeE9ETXVOVE1nTWpnNE9DNDVJREV4TmpOV01UQXdNa2d5T1RZMExqVldNVFE1TWtneU9EazFMakpNTWpZd01DNDFJREV4TURVdU5rd3lOakE0TGpJZ01UQTVOUzQ0UXpJMk1UQXVOVE1nTVRFeU5DNHlOeUF5TmpFeUxqUWdNVEUwT0M0MU15QXlOakV6TGpnZ01URTJPQzQyUXpJMk1UVXVOamNnTVRFNE9DNHlJREkyTVRjdU1EY2dNVEl3TlNBeU5qRTRJREV5TVRsRE1qWXhPUzQwSURFeU16SXVOVE1nTWpZeU1DNHpNeUF4TWpRekxqY3pJREkyTWpBdU9DQXhNalV5TGpaRE1qWXlNUzR5TnlBeE1qWXhJREkyTWpFdU5TQXhNalk0SURJMk1qRXVOU0F4TWpjekxqWkRNall5TVM0NU55QXhNamM1TGpJZ01qWXlNaTR5SURFeU9EUXVNU0F5TmpJeUxqSWdNVEk0T0M0elZqRTBPVEpJTWpVME5pNDJXazB6TVRBNExqWTRJREUwT1RsRE16QTNNaTQzTkNBeE5EazVJRE13TkRBdU5UUWdNVFE1TUM0NE15QXpNREV5TGpBNElERTBOelF1TlVNeU9UZzBMakE0SURFME5UY3VOeUF5T1RZeExqa3hJREUwTXpVdU1EY2dNamswTlM0MU9DQXhOREEyTGpaRE1qa3lPUzR5TkNBeE16YzNMalkzSURJNU1qRXVNRGdnTVRNME5DNDNOeUF5T1RJeExqQTRJREV6TURjdU9VTXlPVEl4TGpBNElERXlOekV1TURNZ01qa3lPUzR5TkNBeE1qTTRMak0zSURJNU5EVXVOVGdnTVRJd09TNDVRekk1TmpFdU9URWdNVEU0TUM0NU55QXlPVGcwTGpBNElERXhOVGd1TXpNZ016QXhNaTR3T0NBeE1UUXlRek13TkRBdU5UUWdNVEV5TlM0eUlETXdOekl1TnpRZ01URXhOaTQ0SURNeE1EZ3VOamdnTVRFeE5pNDRRek14TkRRdU1UUWdNVEV4Tmk0NElETXhOelV1T0RnZ01URXlOUzR5SURNeU1ETXVPRGdnTVRFME1rTXpNak15TGpNMElERXhOVGd1TXpNZ016STFOQzQzTkNBeE1UZ3dMamszSURNeU56RXVNRGdnTVRJd09TNDVRek15T0RjdU5ERWdNVEl6T0M0ek55QXpNamsxTGpVNElERXlOekV1TURNZ016STVOUzQxT0NBeE16QTNMamxETXpJNU5TNDFPQ0F4TXpRMExqYzNJRE15T0RjdU5ERWdNVE0zTnk0Mk55QXpNamN4TGpBNElERTBNRFl1TmtNek1qVTBMamMwSURFME16VXVNRGNnTXpJek1pNHpOQ0F4TkRVM0xqY2dNekl3TXk0NE9DQXhORGMwTGpWRE16RTNOUzQ0T0NBeE5Ea3dMamd6SURNeE5EUXVNVFFnTVRRNU9TQXpNVEE0TGpZNElERTBPVGxhVFRNeE1EZ3VOamdnTVRRek15NHlRek14TXpBdU5qRWdNVFF6TXk0eUlETXhOVEF1TWpFZ01UUXlOeTQ0TXlBek1UWTNMalE0SURFME1UY3VNVU16TVRnMExqYzBJREUwTURVdU9TQXpNVGs0TGpJNElERXpPVEF1T1RjZ016SXdPQzR3T0NBeE16Y3lMak5ETXpJeE55NDRPQ0F4TXpVekxqRTNJRE15TWpJdU5UUWdNVE16TVM0M0lETXlNakl1TURnZ01UTXdOeTQ1UXpNeU1qSXVOVFFnTVRJNE15NDJNeUF6TWpFM0xqZzRJREV5TmpJdU1UY2dNekl3T0M0d09DQXhNalF6TGpWRE16RTVPQzR5T0NBeE1qSTBMak0zSURNeE9EUXVOelFnTVRJd09TNDBNeUF6TVRZM0xqUTRJREV4T1RndU4wTXpNVFV3TGpJeElERXhPRGN1T1RjZ016RXpNQzQyTVNBeE1UZ3lMallnTXpFd09DNDJPQ0F4TVRneUxqWkRNekE0Tmk0M05DQXhNVGd5TGpZZ016QTJOaTQ1TVNBeE1UZzRMaklnTXpBME9TNHhPQ0F4TVRrNUxqUkRNekF6TVM0NU1TQXhNakV3TGpFeklETXdNVGd1TXpnZ01USXlOUzR3TnlBek1EQTRMalU0SURFeU5EUXVNa015T1RrNExqYzRJREV5TmpJdU9EY2dNams1TkM0eE1TQXhNamcwTGpFZ01qazVOQzQxT0NBeE16QTNMamxETWprNU5DNHhNU0F4TXpNeExqY2dNams1T0M0M09DQXhNelV6TGpFM0lETXdNRGd1TlRnZ01UTTNNaTR6UXpNd01UZ3VNemdnTVRNNU1DNDVOeUF6TURNeExqa3hJREUwTURVdU9TQXpNRFE1TGpFNElERTBNVGN1TVVNek1EWTJMamt4SURFME1qY3VPRE1nTXpBNE5pNDNOQ0F4TkRNekxqSWdNekV3T0M0Mk9DQXhORE16TGpKYVRUTXpORFF1TWprZ01UUTVNa3d6TVRnNExqZzVJREV4TWpRdU5VZ3pNalkyTGpVNVRETXpOemd1TlRrZ01UTTVPUzQyVERNek5qVXVNamtnTVRRd05TNDVURE0wT0RRdU9Ua2dNVEV5TkM0MVNETTFOVGt1TVRsTU16TTVOaTR3T1NBeE5Ea3lTRE16TkRRdU1qbGFUVE0wT1RjdU1EWWdNVFE1TWxZeE1USTBMalZJTXpVMk9TNHhObFl4TkRreVNETTBPVGN1TURaYVRUTTFNekl1TURZZ01UQTBNeTR6UXpNMU1UWXVOallnTVRBME15NHpJRE0xTURRdU56WWdNVEF6T1M0ek15QXpORGsyTGpNMklERXdNekV1TkVNek5EZzNMamsySURFd01qTXVORGNnTXpRNE15NDNOaUF4TURFeUxqSTNJRE0wT0RNdU56WWdPVGszTGpoRE16UTRNeTQzTmlBNU9EUXVNalkzSURNME9EY3VPVFlnT1RjekxqTWdNelE1Tmk0ek5pQTVOalF1T1VNek5UQTFMakl5SURrMU5pNDFJRE0xTVRjdU1USWdPVFV5TGpNZ016VXpNaTR3TmlBNU5USXVNME16TlRRM0xqUTJJRGsxTWk0eklETTFOVGt1TXpZZ09UVTJMakkyTnlBek5UWTNMamMySURrMk5DNHlRek0xTnpZdU1UWWdPVGN5TGpFek15QXpOVGd3TGpNMklEazRNeTR6TXpNZ016VTRNQzR6TmlBNU9UY3VPRU16TlRnd0xqTTJJREV3TVRFdU16TWdNelUzTlM0NU1pQXhNREl5TGpNZ016VTJOeTR3TmlBeE1ETXdMamRETXpVMU9DNDJOaUF4TURNNUxqRWdNelUwTmk0NU9TQXhNRFF6TGpNZ016VXpNaTR3TmlBeE1EUXpMak5hVFRNM01EUXVORGdnTVRZMU0wTXpOamM0TGpNMUlERTJOVE1nTXpZMU1pNHlNaUF4TmpRNExqZ2dNell5Tmk0d09DQXhOalF3TGpSRE16WXdNQzQwTWlBeE5qTXlMalEzSURNMU56a3VOalVnTVRZeU1TNDVOeUF6TlRZekxqYzRJREUyTURndU9Vd3pOVGt3TGpNNElERTFOVEl1T1VNek5UazVMamN5SURFMU5Ua3VPU0F6TmpFd0xqWTRJREUxTmpVdU9UY2dNell5TXk0eU9DQXhOVGN4TGpGRE16WXpOUzQ0T0NBeE5UYzJMamNnTXpZME9TNHhPQ0F4TlRnd0xqa2dNelkyTXk0eE9DQXhOVGd6TGpkRE16WTNOeTR4T0NBeE5UZzJMamszSURNMk9UQXVPVFVnTVRVNE9DNDJJRE0zTURRdU5EZ2dNVFU0T0M0MlF6TTNNekF1TVRVZ01UVTRPQzQySURNM05URXVOaklnTVRVNE5DNDBJRE0zTmpndU9EZ2dNVFUzTmtNek56ZzJMakUxSURFMU5qY3VOaUF6TnprNUxqSXlJREUxTlRVdU1qTWdNemd3T0M0d09DQXhOVE00TGpsRE16Z3hOaTQ1TlNBeE5USXlMalUzSURNNE1qRXVNemdnTVRVd01pNHlOeUF6T0RJeExqTTRJREUwTnpoV01UUXdOeTR6VERNNE1qa3VNRGdnTVRReE1pNHlRek00TWpZdU56VWdNVFF5Tmk0Mk55QXpPREU1TGpBMUlERTBOREF1TmpjZ016Z3dOUzQ1T0NBeE5EVTBMakpETXpjNU15NHpPQ0F4TkRZM0xqSTNJRE0zTnpjdU5USWdNVFEzT0NBek56VTRMak00SURFME9EWXVORU16TnpNNUxqSTFJREUwT1RRdU9DQXpOekU1TGpZMUlERTBPVGtnTXpZNU9TNDFPQ0F4TkRrNVF6TTJOalF1TlRnZ01UUTVPU0F6TmpNekxqTXlJREUwT1RBdU9ETWdNell3TlM0M09DQXhORGMwTGpWRE16VTNPQzQzTWlBeE5EVTNMamNnTXpVMU55NHlOU0F4TkRNMUxqQTNJRE0xTkRFdU16Z2dNVFF3Tmk0MlF6TTFNalV1TlRJZ01UTTNOeTQyTnlBek5URTNMalU0SURFek5EUXVOemNnTXpVeE55NDFPQ0F4TXpBM0xqbERNelV4Tnk0MU9DQXhNamN4TGpBeklETTFNalV1TWpnZ01USXpPQzR6TnlBek5UUXdMalk0SURFeU1Ea3VPVU16TlRVMkxqVTFJREV4T0RBdU9UY2dNelUzT0M0d01pQXhNVFU0TGpNeklETTJNRFV1TURnZ01URTBNa016TmpNeUxqWXlJREV4TWpVdU1pQXpOall6TGpReUlERXhNVFl1T0NBek5qazNMalE0SURFeE1UWXVPRU16TnpFeExqUTRJREV4TVRZdU9DQXpOekkxTGpBeUlERXhNVGd1TmpjZ016Y3pPQzR3T0NBeE1USXlMalJETXpjMU1TNHhOU0F4TVRJMUxqWTNJRE0zTmpNdU1qZ2dNVEV6TUM0MU55QXpOemMwTGpRNElERXhNemN1TVVNek56ZzFMalk0SURFeE5ETXVNVGNnTXpjNU5TNDNNaUF4TVRRNUxqa3pJRE00TURRdU5UZ2dNVEUxTnk0MFF6TTRNVE11TkRVZ01URTJOQzQ0TnlBek9ESXdMalk0SURFeE56SXVPQ0F6T0RJMkxqSTRJREV4T0RFdU1rTXpPRE14TGpnNElERXhPRGt1TmlBek9ETTFMak00SURFeE9UY3VOVE1nTXpnek5pNDNPQ0F4TWpBMVRETTRNakV1TXpnZ01USXhNQzQyVmpFeE1qUXVOVWd6T0RrekxqUTRWakUwTmprdU5rTXpPRGt6TGpRNElERTBPVGtnTXpnNE9TNHdOU0F4TlRJMExqa2dNemc0TUM0eE9DQXhOVFEzTGpORE16ZzNNUzQzT0NBeE5UY3dMakUzSURNNE5Ua3VORElnTVRVNE9TNHpJRE00TkRNdU1EZ2dNVFl3TkM0M1F6TTRNall1TnpVZ01UWXlNQzQxTnlBek9EQTJMamt5SURFMk16SXVORGNnTXpjNE15NDFPQ0F4TmpRd0xqUkRNemMyTUM0eU5TQXhOalE0TGpnZ016Y3pNeTQ0T0NBeE5qVXpJRE0zTURRdU5EZ2dNVFkxTTFwTk16Y3dOeTR5T0NBeE5ETXlMalZETXpjek1DNHhOU0F4TkRNeUxqVWdNemMxTUM0ME5TQXhOREkzTGpFeklETTNOamd1TVRnZ01UUXhOaTQwUXpNM09EVXVPVElnTVRRd05TNDJOeUF6TnprNUxqWTRJREV6T1RBdU9UY2dNemd3T1M0ME9DQXhNemN5TGpORE16Z3hPUzR5T0NBeE16VXpMall6SURNNE1qUXVNVGdnTVRNek1pNHhOeUF6T0RJMExqRTRJREV6TURjdU9VTXpPREkwTGpFNElERXlPRE11TmpNZ016Z3hPUzR3TlNBeE1qWXlMakUzSURNNE1EZ3VOemdnTVRJME15NDFRek0zT1RndU9UZ2dNVEl5TkM0ek55QXpOemcxTGpJeUlERXlNRGt1TkRNZ016YzJOeTQwT0NBeE1UazRMamRETXpjMU1DNHlNaUF4TVRnM0xqazNJRE0zTXpBdU1UVWdNVEU0TWk0MklETTNNRGN1TWpnZ01URTRNaTQyUXpNMk9EUXVPRGdnTVRFNE1pNDJJRE0yTmpRdU9ESWdNVEU0T0M0eUlETTJORGN1TURnZ01URTVPUzQwUXpNMk1qa3VPRElnTVRJeE1DNHhNeUF6TmpFMkxqQTFJREV5TWpVdU1EY2dNell3TlM0M09DQXhNalEwTGpKRE16VTVOUzQ1T0NBeE1qWXlMamczSURNMU9URXVNRGdnTVRJNE5DNHhJRE0xT1RFdU1EZ2dNVE13Tnk0NVF6TTFPVEV1TURnZ01UTXpNUzQzSURNMU9UVXVPVGdnTVRNMU15NHhOeUF6TmpBMUxqYzRJREV6TnpJdU0wTXpOakUyTGpBMUlERXpPVEF1T1RjZ016WXlPUzQ0TWlBeE5EQTFMalkzSURNMk5EY3VNRGdnTVRReE5pNDBRek0yTmpRdU9ESWdNVFF5Tnk0eE15QXpOamcwTGpnNElERTBNekl1TlNBek56QTNMakk0SURFME16SXVOVnBOTkRBeE9TNDNOeUF4TkRrNVF6TTVPRE11T0RRZ01UUTVPU0F6T1RVeExqWTBJREUwT1RBdU9ETWdNemt5TXk0eE55QXhORGMwTGpWRE16ZzVOUzR4TnlBeE5EVTNMamNnTXpnM015NHdNU0F4TkRNMUxqQTNJRE00TlRZdU5qY2dNVFF3Tmk0MlF6TTROREF1TXpRZ01UTTNOeTQyTnlBek9ETXlMakUzSURFek5EUXVOemNnTXpnek1pNHhOeUF4TXpBM0xqbERNemd6TWk0eE55QXhNamN4TGpBeklETTROREF1TXpRZ01USXpPQzR6TnlBek9EVTJMalkzSURFeU1Ea3VPVU16T0RjekxqQXhJREV4T0RBdU9UY2dNemc1TlM0eE55QXhNVFU0TGpNeklETTVNak11TVRjZ01URTBNa016T1RVeExqWTBJREV4TWpVdU1pQXpPVGd6TGpnMElERXhNVFl1T0NBME1ERTVMamMzSURFeE1UWXVPRU0wTURVMUxqSTBJREV4TVRZdU9DQTBNRGcyTGprM0lERXhNalV1TWlBME1URTBMamszSURFeE5ESkROREUwTXk0ME5DQXhNVFU0TGpNeklEUXhOalV1T0RRZ01URTRNQzQ1TnlBME1UZ3lMakUzSURFeU1Ea3VPVU0wTVRrNExqVXhJREV5TXpndU16Y2dOREl3Tmk0Mk55QXhNamN4TGpBeklEUXlNRFl1TmpjZ01UTXdOeTQ1UXpReU1EWXVOamNnTVRNME5DNDNOeUEwTVRrNExqVXhJREV6TnpjdU5qY2dOREU0TWk0eE55QXhOREEyTGpaRE5ERTJOUzQ0TkNBeE5ETTFMakEzSURReE5ETXVORFFnTVRRMU55NDNJRFF4TVRRdU9UY2dNVFEzTkM0MVF6UXdPRFl1T1RjZ01UUTVNQzQ0TXlBME1EVTFMakkwSURFME9Ua2dOREF4T1M0M055QXhORGs1V2swME1ERTVMamMzSURFME16TXVNa00wTURReExqY3hJREUwTXpNdU1pQTBNRFl4TGpNeElERTBNamN1T0RNZ05EQTNPQzQxTnlBeE5ERTNMakZETkRBNU5TNDROQ0F4TkRBMUxqa2dOREV3T1M0ek55QXhNemt3TGprM0lEUXhNVGt1TVRjZ01UTTNNaTR6UXpReE1qZ3VPVGNnTVRNMU15NHhOeUEwTVRNekxqWTBJREV6TXpFdU55QTBNVE16TGpFM0lERXpNRGN1T1VNME1UTXpMalkwSURFeU9ETXVOak1nTkRFeU9DNDVOeUF4TWpZeUxqRTNJRFF4TVRrdU1UY2dNVEkwTXk0MVF6UXhNRGt1TXpjZ01USXlOQzR6TnlBME1EazFMamcwSURFeU1Ea3VORE1nTkRBM09DNDFOeUF4TVRrNExqZEROREEyTVM0ek1TQXhNVGczTGprM0lEUXdOREV1TnpFZ01URTRNaTQySURRd01Ua3VOemNnTVRFNE1pNDJRek01T1RjdU9EUWdNVEU0TWk0MklETTVOemd1TURFZ01URTRPQzR5SURNNU5qQXVNamNnTVRFNU9TNDBRek01TkRNdU1ERWdNVEl4TUM0eE15QXpPVEk1TGpRM0lERXlNalV1TURjZ016a3hPUzQyTnlBeE1qUTBMakpETXprd09TNDROeUF4TWpZeUxqZzNJRE01TURVdU1qRWdNVEk0TkM0eElETTVNRFV1TmpjZ01UTXdOeTQ1UXpNNU1EVXVNakVnTVRNek1TNDNJRE01TURrdU9EY2dNVE0xTXk0eE55QXpPVEU1TGpZM0lERXpOekl1TTBNek9USTVMalEzSURFek9UQXVPVGNnTXprME15NHdNU0F4TkRBMUxqa2dNemsyTUM0eU55QXhOREUzTGpGRE16azNPQzR3TVNBeE5ESTNMamd6SURNNU9UY3VPRFFnTVRRek15NHlJRFF3TVRrdU56Y2dNVFF6TXk0eVdpSWdabWxzYkQwaVlteGhZMnNpTHo0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BhdHRlcm5CRy1mMjVhZjM4ZTM1NzA5NmNhMjMyOTBkNWY1YmNiMzM1NS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2VydmljZS10aHVtYi0wYTVhYzVhYWU3NjIxYjEzZjBlZjhkNWY1YjEzZGE1Mi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmxvY2tjaGFpbi0wYjAxMmU2MTFhMDE3NGZkYjNjNzFmNTg0NWRjN2I5My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbm9kZWpzLTcwOTY1NjNiMmIwMDA4ZTA5NTZiN2MxMGNjYzMxYzk5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9yZWFjdC02Mzg4ZTFmNjkxMWY3ZGZkMDhlMjIyZmQ2YjBmZjA0OS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hvcGlmeS0wNmQ1NmEwNmJjNWVmNTEyYzAzN2U5YzhhY2M2YzA4Yi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd29yZHByZXNzLWM0MmFkNDUwZjhkMDhmYjdlNWFiOTQ1ZTQxNDdkYzVjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaGFwZS1sZWZ0LTEzZmE4YjNkOTg4Y2E0ZWI5ZDdjMmRhOTM1YzJkNzNhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaGFwZS1wYXR0ZXJuMS1kOTlkZjUwNmYwY2I4Y2Y3MDRiZWE1YmMxOGI0MzFlMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hhcGUtcGF0dGVybjItNGJkNzJjMzQ0ZmNjYWMzYjE5MDMxZTdjMzFkNDIwOTYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NoYXBlLXJpZ2h0LWRiYzc5Yjc5YTA1YjJmMjIzNzQxZTUwYTk3YTYyN2FhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hbGktNDcxZWQ1MjdlZTMxYWNkNThmYzllZDA0OTg3M2QyZTEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21vLWI4NDhkMjAzYjk4ZGY2ODAzMTY4MGVlYTE0YTY5MzNjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCbVVTVVJCVkhnQnJWcFprRnhuZGY3dTF2czZ1MFl6b3g1WmtpWExSbU1ic0RDNEdOa1VvWXBBeHBWVXdLRXF3RU5DVVVWaCt6RjVzUWp3a0VxcUxDZVY0S3BVU3BnWFRCS0NBamcyY2VHTVNmQUNNaDVqeWJac3lXb3RzMjg5UFRPOTMzdnpuZk4zejlqeEptTmY2V3BhdCsvODl6L2JkNzV6enJYd1BoL0g3L3BTTHBMMkptTHg3S0ZNTmxOSTVISmowWFF1WnpsT3J0V3M2VDJlRXkxRmt0bGk0UHVsYXIwNU5mbUx4eCt2TmxwVFI0L2RYOFQ3ZUZoNEg0N3hzYkhjTmJ2NzdoenV6by9IWXM1NFBoMkhaN3RJSlZQSUQrNUVwcWNmVGIrRjZtWVoweGN2NGZMc0V0WTI2NmpVVzFndWw1SFA1ZEZxMXRIYjB6MlZTS1VlNkJuS25QanlWNDhXOFI2UDl5VGMwTURBZUNvWnV5Zml1T05SeDBGdlBvV2huaHdLL1YxSXVpRjZjem5zMkgwVnVvWUxxRzJ1NCtYVHAvRExrNmV3Vm0xaW85WkVyZEZFSWhuSDZNZ2dkdThhUnVHcXZiQmREMTRraHA3dS9JbStvUjMzRGUrOWZoSy80K0hpZHpnS08zZU9lYTU5TDNVekhnWWhta0dMbWc5UW1WL0YzSElaaTB0bDdPcExJaG1Kd3FiNmJEZUNSQ1lQSjVaQ2IzY2V1VmFEMTIxa015bjA5V2FRcFlBOXc4UG9HUmxDTmo4RU41YkcrbnA1b2xuM0o1Wm16azgyNjdVdjd4ZzlVTVM3UE42VmNJVkNJZWNGL2ozOGVKZEhEZWZTS2FTaXJwcS8xZlJSYi9GczFERzl1Z0tFRFl4MFoyRlpBZUtwREtLcEhNWVNhUXdOZCtPVlo1L0RLOFVabkZ0YXdNV2lpLzYrTEs3bUdsMER1N2lXTDZzaDA1Vkh2VjVINkFmalRpUnlmbkg2M05IZW5WZDk0OTNzMTc3U0d3c0RBNFd3V1grV3U3M0xvdFo5MzBlVEZyQXNud0Jod1hGc1JEMFhIaytmMWx6ZHFLRk0xN01pSGlLSkJLS012MlF5Z2RtTGwvSE0xQXM0WFp4SGNXRVQ1eGNyV0toYUtGVmR6Q3lXY1BIaVJUUnFtd2hiZGNSamNjQ2g4aXlxTHd5T1B2bnpINTgvZkhpc2NLVjd2aUxocmlvVUpyaEpDbVlYd2pEa2xSQWhuMWV1TkxDeTJjSmFnOWZpU1RSNHNSVllqQ1VmbTgwV2ZOdEdoRUo1VVc3U3B0dVdWM0htK1pjeFY2cGlvd0dzTVBaZVhWakdJNzk4SHYvdy9ZZng0RThmeDh6eUpwYm1GOUNxVnhENERZUzIyV0lRK0xEQ3NOQ2J6ajk3NDlqWXhKWHMreDJGR3h1NzhVN0hjWDRVaGxhT3AyclJrZ2Z5WjZWV3cveEtDYTlPeitKVkl1RHM4aHJXS2xVS2JrTlVJR0FSVGFYMC9wQ1c5aG1iNlZ3YWtWZ1VwVW9ORVFLSHkzaHN0Rm9ZR2QySGNybU9iMzc3Yi9Iamh4OUdaWDJabnIxSmdacWlTbFdveThkR0kyNHU5QnMvdXVXakg3bnJuZmIrdGpFMzlxR1AzT25YcThkYWZMaDRocVVQb1VhSUVrMWVjN2hwbXlnWk1EWmMrYzZqRUx6dXVTN2lVUS9aYklyYUR4RFEybllZSUJwTFlQZmUzVmdwclRPeUlvd3NDOTJwS08vdlIyRkhGZ2NPSE1EUTV6Nk5tY3NYc0hUcEFwTHhCR3d2Qm91dVNRMUI0dHgxSGJXaVl6bjMzbnJycC9IWVl3OGRlOWZDM1hqTGJSTmh2WDZzUlkxVDVWUWNOY2U0Q3JoSnkvSW9tRVBFQ3hIeFBIU25rMGdUWEJnWHFGWnI4Qm1MMlZpRXdxV1JUR1dKZnR3ZzE0bkdVK2d2N0VIeWhaZlFuNGxobzI3aWFuVFhFSzQ2c0FlN0R1d2xXdlpnLzlVRjJINmRidVdwaDBBOEpYUm9hUStwZUJSeFBqTWVqNlBoUk84ZHYyMmlPUG56RXlmZVRJWTNkY3V4dytPRk1QQ1ArMEhBamZycWloM1hrTU9oNWNUeEl0Uml4SE1RNVUrZjdDTWdDTGgyaUh3bWdiekFlemFMUkNyUGdKRW5PZkFTU2ZTUGpPTFE0WnN4TkRTQXdtQWZCcm96U0VTQWlFMzIwbGpYTTJDODJSVElvZ0NFS2dwb3poaVZZMVBKSDlpL0IxLzUwenZnVXU3QXNvNGZIcDhvdkprY3pwdGRIQnplL1N6M1BtRFJZdlhxR2xxKzhYc1J6Ukx2bzl1SkZlT1JDR0xSQ1A4djdta2prNHloSzVOa2ZER0djaW1NM1hBRDhqdEc2RXEwdUd5VGJtWFQ2cm1lYnZSMDVSUmxkK3djd09ESVRpb2hSa1c1RkpMMjhpeU5SWnRBWkRtMG51Tm92Z3pJWWxCWnc1NmhIYmh4dUF2RlVnMXpTNldZN1ZvVG84UDdIeWdXWDZxOXJWdmVjUFA0UFRTVW9xSllyTlh5OWJwYVQ2N1prZ1lDSm1adUl1S2dpeTRacC9WaU1SZFJXbTExdllvTU4zYnc2cXVRN2U1VGR3d2JoRWE3U2ZQRW1NaWpjR29lQm1qQlRFOFgxcGJtd0xoR2MzMlZXb3NnRklHSXZLN0VtdTN4ZEtrWVl3T1hwT0RtOFNPSWNVL1REOTZQa1o3OWVNWlM4eFY4TzVUOGUvZGJ1cVc0b3hWYVJ5MjFrRmlLRmd2OXJlODdYQzFrYkluYjBLVElKNkxvenlmUm00alJMWDBWNXRyZFE5aTFhMVEzR0RBbGlDV0pBb3pkVnR2RnVESXRFT0dLdVhTZWNabEJULzhRa3RrZTVzTXVlUEVjckdpU3drWVphcTV1VXdMRG9SVmppUXlhWEROcXRlajJDUTBWMlE5dnVPdm04WW14dDdRY0gzdTh2WHY1U3d1MVlQS2FzWnlsWDRVRUZhRFo0SGQwbzBhOUJpY1o0YjREaGZRa2czMGdueU5rZXhTV3lxRlFsaDFWVUFoNVQraFFNVVM3K3NvOHYyL1I5WmpnYVIxV0NSUXF5ZFJCbWhaaFhuU2phamtWVEx5R09nNEpWQzZCU29oQm9qZkg5TU4wWVhabExPVllwSVE0OGdiTDBXcmpGR2s4YkNkb1F3cDgvUkNxc0tGYVN6OEhSc0E2aVcrOTNpU1lVREJxczlrUU10ekFScW1FOHZ3c0tzdUxDdU1XcVplVDZxRkxKaEZzcm1MNTNITm9yTTRUTzFiUjNDanA1bDJITHV2RkRleFRPSXRXVXl2ckZ2azhXanRvVmxHOStDSkNndGY2eUhYNHhYTkZtTTBhdDZMNnh6ODJQakgrQnVINCszZnF4aEcyaFdGK29vdlpiYzBGdEVBbkRpVVp5MzBOdXVFbWhkdGc0cGF6WHZkUjJxaWllSGtCcTVmblVWdFpVSlloTm04RlRPN2N0SnZJb2pvOWc0M3BpNmpNenFHMVNhcFZxNXZjeFQrMkd6TWdvbFl6c1dieDJUYTl5RTMxd3ErVTRUQUVIbm1GcUJwWUJ1RzI5aHlLaFBlOFRyaXhzZkVDdjVrUTZUczNTWnpJNzBuQzdnZ21DVnYxWXhtZENMRFVhTEVLWGJUT3N5V3U2WWM0dDdDQzJkSXFOcGVYNEcrVTRaZExPUHZFZjZPK2VCRTJHWCtzZHdEbGxUV3lrREpxeXl1bzgyZlFiREN4VzhZVmxVK2F4STEyR3ZMRkw1MFFVY2FtY05iL2ZlYU1lbGFnNGJaZHVkR1E0K1BqRTdsdHk3bitoTkdBaVMyakNkK2tnQ0RzV0YwdENRMXNXeGMwY1dpRWJVbE81TDJKYUF5WFMyV2NXU2hoczd6SmFxR0oyZWVmeFVQZitTNGUvdmEzMEpoK0VSSEdXVExmaHhLSjh1cnNQT3FiRzFRbWxTZG9LWmhQZDl6T3E1SkVHSnYwbHViS0hCemZ4YWt6NTFFakFSQnVZYW14MUwrMkJLelp3VjFid29WVytFVVJRazVGRWdFQnRZendRZDhzb0ZZMHVyQ1prTWszTzI1QUpiUlVPS0ZaNVkyS0NudG1aZ0VYVnNyS1lsSU0vcy85MlIzWS82RVBZSE4rSHBGTUQzSjdyMFV0Y0xCV1drT3R2TUZLdmFGYkZGY01kWi8wRmdwa0JRWnRMU0VCMlg3WVJOVFRyeFNwQlBOc1VVS2dhTmsyUVNnR3RqNnUrOXcvZHJqQUsyTWR4SkZZVTRRVDBKQ1k0L09VY3RuR1VpS1VKT3lPWUhMREprR2sybXhwRGt5bDR1aG5najR3UElnMGsvcXJVMDlUVnkxMFhYMFFReCs3RGJHZUFTUjRab2RHa1IwZVFZbldMYzNQTVRldlVrbFNRclVWckRnWUdDSGwrYUp6cnQrd0kzanB6R2xoZWlxUXRZVWFuWEFSN2hUU05jZHp0dWQ0WTYvdE5uUktHcUZlNWlHZDVHMjEwWksvTG92eWFjeUpxTE5JTFF1WUNMbG1Zcyt4ZjFMb3plTDZ2U080YXJUQTVFeXJFQ0Y5VVV3aUJTZWQ1YzhNWWt6d2hSdkcwT1M2cGVWVjFGam1OQ3ZyV2ozWUtveHZCQk1CNVRPVjdYRHpQL25odi9KN2NkMWdLd2VIblgySDJ4U3g1aWNtWEN0c2pZc2ZoRzBCMVJqOHQ4bkZiUHErdEJDRTMxbWgwM1pKL2s5dW9nWFZIWGsyZUtiSlBGd0tFS2Y3REtiSUlidXk2aW5wYko2d3Y0SDBvQlN1VVVWQmFwUVVLOFcyd2o3MEZZYXdkUFlDMXRlV1VhUDFrcjFEREljbW4rMTI4aEdxcTZ0NGNuSVN6NXgrQ2NWWFRpT1IzNkZ4THg3VmtuRFNxRE5paHBZSkQ3SzhNWmZ4ZHFnalZzZlZOSXpiTVlUWDVEaXJiVFdUTndrZ2tzeUZlUENEcEFTTjhFMkMwTklHSzlFNjlnenZ3TTZkTzhDMkYzUGV5NGgyTTlmdEdvVGRTMXJGS2lLYTdrWnZZUjhXTDA0VE1vaThHeXNrQXhWNFliUWRaK0lwTFR4MzZqUysvWGYvaEIzMGlPSHVPSWxBcUlRK0NEdjVEVzJyZFF3WENtd1VTS3p0bkluZ3NJMThvWEdKME5mUGdYelc0QTBVeFlTV0dRRXRFOE50bTYreitHd1N3c01JTmMzMW1uT0xLSzl0b0RLOWdqNENTSno5a3hqck9lLzBlYnBsRkpIQkhpeUZGY3pPckRCZUF3V2trTmJ3bVJMY29FUFRiSTM5SjU3OEZkdC9TZXdheUNCT2h0TWdXUmVYdElKTzltNVhMVzM1TERVS0RybEV5SUtDUlJ2YVJhZ09EQ3NLdGRPREZJcW10TnBHeW1nMHFxQVRZWFVnbG9ha2lIUUN3MnpWSGJ6eGc5aEg4aHlzTEdMZllZSlhJMEFzazJFK1k3M0hwRDI5dElSLy9KdmptRHQvQ1lkR3NqaEV0MDczOWlsWWlWSkRUVTFTUy9yNDFjbG5XRW81SmhWUk9GZDZObEpQdGttOEdxMmRzalJIQytrSWc1eTRhcTVqVmVXTm1oS29TZkpDV2N5aklDNUxuQVkxS3ZjNFhGaFNoTndybGJqY0d5UFhFejlJUk1nUkNUQnJLNnRJWjNKdzR4bEVHSHN1UHplSmNwV2FXTVhHMmFlZlFmblJKL0dGUFIvQW4vL3hKOGxIUTNRTkRpS1I2eVd2OUxaY1RGenpzVWNmeGVMaWlpUlpKS2tBU1JVZUszNWhOQm91blRSbGJZT2lHSVdYY3U1V0tmTzY1TjNTOW9CSmpJSG1QMkVuaGdNNmFrRXBoVFR2aGUxY0tNMGd1bU9PQml5d216WHpiejlGbGNpWXBRdGxUODZSeGJQdUV3TE5PTnlmM0lYd1l3ZmdEU1p4L3NMVHFKY3ZJVHN3U0dKQ3R3NmFLcHk0bGhEcmZ6NytQZjIvQUVpRDlWeGNhajRLNXlpZ0JZYWRoR0hISTdHZDB0ZzUyUGJWVU1zS3NZVG1PWEZCV2FCaHVLRUNTdHRGbTF0V2REU28yVnZVNnB5UmdvWTRFMWxKaHNRM1JwVE1NZGFzODNOSXNBRVUyejJLNko0aHVpNGJRMTBlTjFmQmdIdEFVMFc2djQvQ01KRlRRRTFYVk5qRFAzMElNM1BMdXJiQW9meU1SbzFsZFovYlliWWxrTG5XYmloeEswTExjM3FUSUdRbnY0V2RuR2ZhUWlaNUd4WW5LU0tRRWxJQVI2NDRwaEtYdEdHem92WVlkK251SExwWWs2VjV4a2RIRUQyNEczSFdlVTRtaXlCcUsvdXcrWGlYU2hpNTlnYVdiaWtsaG00a1FibGFtTGwwR2ZmOS9YZVVQMW9zZnVVeGNxOVBsMHZ3LzVidEsvd0xhaG9EV1laaEtXNm9ONVlrbVpUNEtXZUVNRUdwS2FEdHcxdHBnSitUUkxrS1dieGxPZXJqdnNhbnIvN2ZLWWRhaE9sYWhKUXB6OTdLU0ErODNpNDRPM3RnOWJGd2pYRloxelNjZ3REMFpseHlVUytlVXZmbXFzcENtbXd5M1hQMG0wb01SR21pNlhxdHBYZ2d5dmVZSnlYdXRVb1BBbXozNVV3S2t5RGsya1hHWXpnVnRoRWw5QTJuVkxnM2hGekJKTVpBbHVRdDNXVHhjMm4xQ1dkc2U0c1dxbkkvZXhudDlNSEV6clBwa3pqN05iSVkvbXpWdUQ1ZDNHOW9IQ3RWa3ZYamFUZ2swcGFRWmphYUVEVHc2OStjeEF3ckM5dVdocUd0UXNuOWxpUDBMcUVrUUI2c1paSnRkeEpkSnl1MGpRSmFMZ2d2R0pmY05xbG9TK3BVRVV3V0ZCZktzQWVwTTRHV3J5MDJ4M0czTENiWG9xekFIWU0vblBhazJZSnprTXF3dGRmVmczUitCSEhtT3BmRmFCaTJLWVBreEhhK0RBZ2l5bVVaeTNZeWc1UFAvaFlDWjlLakZGL3l1TFl2U3BPZWpzUjNHLzZiUlBST01idFZoMjdIM25NdTl6TFZvUzZHV0ZzYUM3NWRKNWkwRkdyanRGd2k3cUc4WG1NUHgyc0Rpd2x3MC9ZTE5GNEYwYVNtYTNHVDZoNzhHOC8wSWthSWw3UWduV2h4SlZPTTJtcU5rQllGVHltQUhUSVdnZkV5NjdzbVFTa1Jad2RNbENpeHlMYUQ4RmczNWRFampJS0NEcEFFNFJZbkR0dVlRYzR4eWV6VFBJR08wVUxEVW55Nm5lOGJVaHBqenlJYU5kWDRacVdpYlQxSm5BMCszTkhrYm05MU1RUjBKT0RYcW5VQ1JFUkdxRzFyQ2hFT0ZBR0Y2ZHRhVmxIckxWYm45VTN0YmprcGRzcG8yU1lyN1RyN01oQWwyQUlKUmhrT2VXbURGQy9DWVVxVlJGMjhCcUVoR2xzRmR2c1VOL1pEZThxZW1wb3FVZmVUVzlRc05MbE9OdVFwV3dnNG5VbWl4QmI0ZGhZeDFibTRyUWlubGJyaE5HaUYwbm9Jc0xpNnp1NXpCYlhhT3VxVmt2WS9aWExUcXEzQnI1YlpYaWlod1E1WVFBUzBZemxqVWY1dWRXTU5GeTVNcXd1NmJLZkgwaHgvc1pxUTlhTWNselhJZEpyYVRmT1YzMXFCOFJxMFN6VzVrWjQ0TmZYVUkwWFhNSUhnY2RLZGNZT0tvYmJPSkZBRmtpUHNITmVxZGUxWGREcGhBaTRpV0xWdFNkdXl0bW9LNlhvdGtXZXVzaFV3ZDJsR0tacFUzdExFYlRrbGsyWEU5ZG5EakdkN2FhQ29La1ZpTVdRMWNPNlZGekF6dllnV2ZVcUdrSXJXM0tWSEZ4WlhOWEtFMnVDdDY0emQzbzYxTmp2aHZ3L0libFE0MXcyT3RRTDdIb1ZjdWtUWUtVNXRVM0lJaVpWZmN1a2VUWmIzMG1YV3VrdFlDVjJ2VWpQMW5ybUg3c3N1V0xubDR2eENHUnQrRWN2ODNxUDF4WXFicFEzc09iZ2ZJd2R1VUNUVWtGQnlidFBDWmZ6UDVDKzAzR3BRMEt2MzdVYXhlRmx6V2RRTE5ZSExwRWRDeGxGbXRSMTVuZVJ0QkExMGRxQkYydHpjWEsydnIzL2NiOVFMZ2RaU1VLaFBKdUpLZ1ZJY1F5MlJMd3A1bHJ3bVZuQmRUNXV3T1ZiZURRb2p1VEhDSjhka2RrRHJTVG5FdVNobTFxcDQ4ZUljRmxpVENmTDI5WFhyV0N1Ujd1SmdKSzdXbGhHeXROa3ZuVDJGQngvOGR3NHVHOW96dmZldi94SWZ2RzR2Vy9UY1IyMERXWStoWWt0Y3U1Z3ZOVlVKSnZhMnVURU44eDlUVDAvZXZ5V2NISmxFNmdLZi9TVlBSa1NrUVdJZHU2MlN6YzI2YWExUVl6TE5hWEF1SndJSXVVNUVIVVhKT3IrTDg1cVEyaXh6VVlNdUk1UFVLdDN6N013eSt4NHplT0hzSERmRk9DVHFiWkFNQ1BJMldnM2QxTXJTWmZ6TGd6L0FiMTZZZ2U5RWNlMTFCekh4bVU5cVh0dlpuOFBCZmJ1b3JWWEpldG9yWGE3NHFOUWJKaGR1RVg3dC8zeDFicVpZM0hKTE9jNFd6MDRlMnI5M2tsMmxjWWtoY2IrUTZDY3hVMlV2WDhkdlRPSUNFb0ZXQllGcVhGcDdpYWd3L3JyR1hwdTJzaktQY2VOczJJYW1TcWRqWXBXTm9KTy9QWWVUcDg2cmF5VTV2dXJoVUVTSXVzeS9telMzYnduejkvR0oyMjdSOGtwQ0lVb0tKMTR5T0R4TWtMdUVicllvYnYzRUtDN05MbklRc29icDJSSXV6YTNncFhPWEpsODhjMnF5STlQcjJ1bkptSGQzdlZaOUZ1MmFUVW15Vkx3YVgwNmJkOUkxV0w5SmZkWGlQTnhuenBHeVNGQlR2bk9sTlNIRHlEakpNV0ZjV24wOXVRalc1OWVVTm9VS0FKWnFXaHBMZFdFaWpxa25YZVkwaCtpY3ppYng0ZXNQcWtDS3lqcHI5M1RXdHhoYzRsNmFPbkhkMlp2Q1FKWlczcG5tR2dYV2k1Lzk4cEU3dnJvbHorc0dJVTlNdlREbGVwSDdraHpRaXdVRW5jUk54UjRjMTJwOFNFdEJrRlRtQW9xQWJiK1hlR3NQdWRTVlk2NHlSVFBXNHNBaTRkbzZvaEtoQkdrN2JZdE9KYUxER3Y0Ukd2eDdSMjVCT3U2aXRyNkN4aVpiZnhzYlRDRk1MV3VMK3FKT2cvTTdlVHNpUDFCQXZuOG56MEd5b2N3M0tGanh0Zks4WVlUbE5vT2ptMzcxRHhqUUJRRVVNekkySlkrODNtUzFPWnhZMDZYQWRXcmZEeUtrV3pHZEhjaDlwanRtck9odzBOK1ZTbk1nR1dGN3hUZUpYbXBGNlY1YkpqOWFWaWVSV09najBmN01wMjVocDNvZHBhVnA1cjJTa3VvbUFhVzhOSzlVTUU3azdkMnhDeDdiRmh1bEpkUWRyM2pqSDM3OTZQK1g1UTJUMWFsaXNVVHZPa0pzTHltNTFRcUJjRit0YXhVZ0JXV3phWm96d2kvbE5TZ0JpR2piS3BJYUpDMklWYnVJcEs0TUUybTFRVzVhZXBxZXJWUllyZStSTEd2ZGFCbFhqUktjL3VvdnZzYktIdGlnbGNvTE15aHhQcjZ4T0VlMHJISkdIa052YjQ5V0pkRWtKMGx4VG03VFBTVTdtem1DTnpuZWRMSzZWQ3FWK25MNU0wVEJ6eXVpTlZ0YjM0bmxQTWVVSExKcGFUc0lvNUZadGJKOGNVY0JHeGl1S2JIYWFBWGFnYXd5Rmx0c0VVckxRc2kyY0doSEc3eW0rWm9oRzNuaWlhZndrMGNleDhIOSt6QzZiejhTN0x2RWlMcXBmRGRkY2szSFl2SnExZFVmdXRXTXhSemNzZi9RYlUrOW1SeHYrYXJHaThYaWlYZ3NjamVVc1RUYnpSaURrbHR2TldpT2FnOUw2R0lKVVhrWWF2NFJwVWlUeCtYMTdsd2FhK3ViR05yUnp6VTQrZzN0OW9UVzlFR2tkU0Z1dnJ5OGpGY3Z6R0p1Y1JXL2Z1RThNdjI3MEQxeURZbDNOeko5b3pyRFc1bWpHN0psYi9ybTl0MGplejU0NHExa2VOdjNVSjZjT24yTXFlRnVlYmdrYWczNk5nTVhFS2kzaFpabWJMWGVVaGVVWm0yREFPTmJydFo0U1E0bUJRRjdPSkQwMlFQcDc4a3hrV2RoK3JxdXNvOGE4NllTZGU0M2s4dWdNL3gwQkNIei9YVEJQR091aWxSdWtNVnlEV3ZMNnhLTGR3OE03VC8yZHZ0L3g1ZHNmbnZtMVdPTld2VjJOb0ZLK3NCT1lRaGpNZGxVcHpzbWdxMnRyeU9WVG12eWRtM1hUSW90U2ZBMm9tUTF2LytKajJNb0c4R0hiN3lPaU1yaWwwcnJVRGtwZStMTWp6Lzh3WEY4L1d0ZjBYZFFaRTZlcHdVM2xtYlFQYlNQajRpVVZoWlhidDkxemMzSDNtbnZWL1I2MUxuWmhSTkJLN2llT2FjbytjMUF1WlJHb1hiSkpHUk1MOU0zSlJPdkxYR00xV2hack0wcVN0czgyL1QvaFh0bTJXTGZ1N3VBVzI0YVUyUVZRREh0VlV1cmovOTg2R0dOWGVsTlNxbGtlL0x1V0ZaYTVNWHJQbnJiOWQ4NjhlU0pLOW4zRmIvWVZweWJLNzQ2UFR0S3gveUdLVkJOZ3BkaVV2S2JWQWNpWlRhVHdCSUhHeDRyZ1EyaXFEU08xOVlxMkwxcmdJQ3dqb2QvTm9uZnZId1JGNmRuZGNadGMzQWZJUXNTcmlwdkdQbHNRMFNseWF0SzgwMFp3eU8zYzk5OTMvdmUvZGQvNUk2N2kxZTZad2Z2OHBoZkxVLzJkbWNlNEJSb2pQRlhpRVNrTkdLeWw0cVpQdGpIRnNQeVJyMWRsVGVSeTZUVWV1bHNUQ3ZxK2RVSyt5dXV0czQ5RnFBM1hYY05YajU3am9vS3RibjdoYy9mamovNW84OUtRMDA5Z2ZFOVNTZTVmZWlhbTc0NytkVHIzek41cCtPS0xmZmFZK3FsWXZIVXVVdEhtTTJPMU91dEUvSkNqTGhpMHplUUwwZlFIZ2FXaUpKeHRndVdWbW9ZWUVXUXA1QlNWaTBzTE9LWFQ1OUVycnNiTjk5MGcxcS9TdWJ4MGl2bjhMTkhINU4zeUNZWmowZDI3TDd1U04vb3RWUDRIUTRMNzhQeHFjTmpoVnFsT3BIUGVWOGM2azJQblo5Ynd5cXR0V2RudjlLbzNueUN5QnFTV2NUaHNMcityeWZPWVdYVEpPVWtjK1cwb0Y5ZGlGY3dHYmJDeDIzV2wwV1NDYnpINDMwUjdyWEg4YU5mS256L0o1Tmo2MDE3ZkZkLzlsRFM4M0pYanc0VUhDK2VrODVrT2gvRE04OWZMcDJmWHl0WmpqTjE1T1lQWC9qdUR4NmFhdnJKRThYaTFIc1c2TFhIL3dFYy9EQ0VxbE5mWHdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCa2dTVVJCVkhnQnJWcHBiRnpuZFQzdnpaczMrOFp0dUd1b2hTSmwyWkljMjdGYk9LYmJKRTBDTkpXQkFrMytORENLQmkzUTF2YnZBclVOOUwrVjVrY0t0SVVUQklhUnBxbVpwVEdDeEJHOVJMSmpXNlFrVzdKRWMxL0VJWWV6Ny9PV251OTdiNGFVSThleTR5Y05odk5tM3B2dmZ2ZmVjODY5ZHhSOHlzZnNDOC9HMTdibVQ0Y0NpUk56TTYra0xLdCtNcFlJeHJQcFN0eUNCMWJEUUxqTG45Y0RudVZLdnBFZkdUOHdwL2p3Y2pRNk9QZmx2MzlxR1ovaW9lQlRPR1puWDRpSHJhN0hOdVl2VHNGdVRkMVl1b3IwZWg3dlhsckRRQ3lBb2NOSnJDMXVvbEN6RVZCVmpOODFqSHF0Z2ZXVlhaeThmeEpldncrSnZuNUVrME56WHMzL3ZXclJtSDdna2E4djR3ODgvaURqbGk2L09hVjQ4R1Nwa0p2S3JLOGdmZjBpTExPR1REcUxOMlkza0NtMk1CRFhjWGkwRzQxeUU2czdKVlRvdVQrNjd5QXVYOXRFWDI4RXh5YUgwZDNmQjlXajhLSFJxMzNRTlIvODhlN3AzdUhEM3hvWXUzTUduL0RROEFtT3BkbmZuSVRYK3d5M1pzcTJiTmlXUVlkVlVkamRSWGtuQTF1MVVXc2FLRFl0eEJpS3E2dTdDT28rTkZVTk5kUEU0a29PYXp0VmpBMTFvVkZ2eW50bXQ3WlFMbFl3Tm1FRDBRU0MwZWhwRytycHJlWHJNN1p0UGpvd05ybU1qM21vSCtmRHM3T3o4YVYzM25qRzFyUlp2bVFJMmpETkZtclZJallYcnRESUtsb3RDNXFtNGJOM2pTRG9vekZWQStseUMvbGFDOXVsT3Z3OHQ3SmRRaXdVUUo2ZUxPV3FXRjlhdytMVk5WU3lkUlF5dTJnMjZtangwYXlXQWR1Y1VsVnRhV2R0NlVsOHpPTzJqYnM2ZXo0Vjh6Um02YWpIYlJyRi96QmFMZXhzckdENTdYUEliMjZpVW1paFpTallURmZSbFloZ09FRnZHU1pxTFJzVmVyTGVOR0VhTnNyMUZoVGVxTW9RTFdieldKdmZSbnFyekkxcG9Ga3JNYlJOM3J0Snc3ZGgyYVpNSHR1Mm50cGVYVmhpUHFkdWQ4MjNaZHo3cytkTzZ4NkZodGtwYVJVUDI3SlFLK1Z3L1RlL3h2enJsNUJlTFdKaElZdGNvVWtqRzloSlp4Q2tCMFhZZWxVRmhza1E5WG5oc1VVdUtEU3V4WUFGU2lVRDVXd0ZJUStSdE5KQU9CaUUwU3h6RTB6VXF5VStOMlYwUUxHaEtFaDVOTzlzZW5YcDlPMnMreU9OVzdoNDdqRmJ3UXYwVnR6eG1Qdmd2MEl1QThOcVFQR3FxRGVhTUF5TElGTG5vaFhrYnBRUTRvSWl6T29RclVqd004TitGYjFCRFVNaEx3NGtRdWpoMzcwUkg3cENQQi94WUdBd0JxTmVnMW1yb2JTemlmTHVOcXFGSENQVDZId3ZMWXlySHJ5d3RiNzArRWV0L2ZjQ3lzTHN1Y2RNeXo3RGZaYkdPRVk1aDJtMEVBekhrQnc3Z3V4R0ZtYW1CaS9QNjVxS3NGZW5COHNJZURVY2pmbmw1ME4rSFJvTjFBbjdPdk11MUJWRUtPeUhuN2tuRFBJR05LaGNkYU5sb0ZFcW9yaGJCSHc3Q0NXUzhBV2p2TlpId3p6eVhzSkdldVdacmZVRjlBOGZPdk94amJ2MjFpdW5EZHVTRjBxVFhLc1VlWE5iTGlRUWppS2M2RWV4M0pTZjB2amRJVjJsa1RhU1hIUWk3RU8wSzRSSVR4UWVudzZQSm95S1F3c0VvUVhEOEFkRENJUWkwQml1WGwySHhiZ3JaN2R4YWVaWHlOQzQ3dUUrNUxkWEVlOGZnWi8zVkZ6REZCbWlLaU5FZllZaHVwd2NIWnUrYmVObXo1OU4wYkJuVmNzeFNpSHgydnR1N3BvSWxZdHR0a3lVQ2xVYXBLSkpJSWo0dU1NRUR1R1Yzc0VvZ2dsNnFDdEIzb3JUZ0NEMFFFUWFJVzRSNzByQ0c0N0F3enhUU1JWZ2J2cmlYUmplV0NYcHY0YkY0cXA4UGNyOEpndkNWbHhpbGhIRWM0cmdSang3WTJscGJtQnNiUG1EZHR3eTU3eUtmWmFBd1J5enBGR1daVW9Bc2ZnUUFDRmVpNGRKa1BCNC9mRFNaUVZDZml5Z3cyNDJDUm9td2pST1VJTEcwUFI0NkRWcUxEMFE1VVo1b0hHendsRXlJRU5Za0xkSHVOeFpOVCtyb2UvQUdJWVBkS0c3SjQ3K0EwZTVVVkhwcWZhMk9tSGs1aUNVdU1lbm5NMHRMY1UvMG5QdnZubjJTY3UwaUlvV0Z5KzJTblZqZ1E5aG5OdzRpK2pueEdrb0hHYWUyS2dUNG4xY3RNV2NDWWFEQ0FUOWhITnVBa2xhTEVoaHZwaWtBQStOVXhpNmxpazQwb1FtTm91YnBJS2dJZGJQN3d2R2V6QTRRYU9ZZTRuK1FYaDkvbzZXY2lKSWNTSklSSUF0MzBvWlBsWHc0Qk1mNnJtcjUxOU04UnVmRW91WFhySUYzNUI3bW5WcXdTcXFSTEZxdFlKNm5XVGRxRW1pcGY4b0tKZzdtbk16SDNQTFI5Q2cyK0FOaFZIS045Q3FtOUpqM29EZ3ZRWlVBbzZxaUFVeXJCUUNpWWdLY2laSlRXNkNGb3FpYStTZ2s1dTZYd0tKM2ZHYkNzY3V4N0FPeE5uMjQ5dnJTeWMvMURoYjhUMHJuL2xscG1HZ1dhZGg5VHA1aDBhUVZDMURMTUNRejQ3c3N1UVhSbnU3YVl1S2VDVE1FUFBpL2JVTUxsOWR4d3BsbDZucXFGQldtUXhYVmRQNWVRdjFpc05qWGk1YzhhZ3lJbVJDd2MxdGhxWktnRW1PSElZL2tuQU1jVTJURWVRbXZ3TXNTdWQ5VlZXZXVXVllYajcveXluVE1xWmtQakZjTEJwbmlwd1RENTV6TmdjeWtjVkN4STNscnZHNWYyUVVHMWRXQ090K2drc0ZYWEdDQmorenRMNkRYTGFJM2xnUVpxUEY4TkpSemU1S2c2eG1Bd0htblduNm9QRDJ3aGlWcXhiUkxyNUgwd09JUkhwNXo3MVVjcnlreUgrMFpPKzhFNlBpdXFrYmEwdFRBeU5qTXpjWlI5NTZUTVMrTkV4NHgvV0taUnZTUUxFN2ZHSjRPVjloVTJIWXJzVUtGVVEwb2t0UFJrTWhYcXRRY2pWd29DZUJCbzJxRktsWVZ0UG9HdXJuL1Z0b1VIS2wzMzhmNWZ3T2JDS29QeFpCdUtjYmtlNStCR0xkOHA0V0l5TWVUenJmSzZoSGNxMTdLRzJEM0plS2c5N2lXZE04SXZmMmpKdDk4WVZVcTlrOExUemtFTFhwWHV4eG51MDJFYWpTaTQ3M1ZHY3YrWGJocmZjUUZadEowQk15SzVPcllNZFNzVUZ5am9odzVUbWJMdGxaWE1YZzhjUGtOVEtVMTR1dDY4dklVMThPVHg1Q3BLdEhLaHVqVldObzYzTFJQbCtJUWFJNHVPRVFYSnVMdU1rSzJxZjJQQ3MzZTBvZ1oySnNMQzk5YTJpV05NeVVEME9pbUtOSXJQYldPTWtyZ0VZOFc0cExEYllFZ1ZxbUJMOU9iVWo1WlZBTE12WVJDd2V3V3EyaTU4QW9TZ3loWExWSklESVJHemlBZ1dOM0UxMFp0aHRWL09ycUxzNWRMK0Q5aSs5aGUvRTlHZktxeDB2azFXRVdzbnNoMXlrOWJkZWIrOXk0LytCN1RiLzZlTWR6L1BnM1JNd3BEbWpMRDRpYlN0Rmx3WTFuKzZZWWwxOGdQc3VOMEZtbmVYWFNPTzhXN1FwemZXVWt5RjlmSGUxQnQxRkhPZWFUcUt2ckFrRkRDQlBlK3lmdndQYU5QUHFKa3FNRFBianp3VDhpcWhaNFh5Y0ZQSFdDV2lNSHJidlhCUTluYmRKamNCVEtCME96L1lvUjhKQTA3dnlMejZmNG9aTU85TGYzeGxYK3BBSnhrVWcvNTlucTdKN3RocXFnd2tCZkRMWW0wRkFsTFlTaEIzWHF3enBDUVVva2pkVUFVZFNvNmdnd0wzbUZWQ1E5QncvalVIb0hvNGVIa1J3L2pHQ0VwSjVNaXBYSisrb1JLaGN0K0FIUHFHNDA3U0VsWU85dHZ0S2hlQm1hbXExNlQwcEViSmN5cmlweFhpZ2RUemttdTZocEtUZVJTQ0RaeXpvc1RYWEJMeGNTakgyVE9HV1hDSEd2TDRnVzFVdXBrWVhDbXM0ck9JdWJGS0RzT25UZmZhaVFxSDBCUDFUcVMrRVZLSTRCVnFzT3RYOVkzdCtTMzA4MTQycktOc2gwUXRRTngvMUIydko2VGd1RW1PcWdvYnpBMnBla0N0cHBKNzNXTGp1a2hhcXJ6aFVFaHdla0hCT1h0ZXBFVithZWh5RVlGSHFTNHJqSW5LeFNYQXVwSmIrSG5HZXl5aGJQRVlhZFQ4Z3JkL2VkamJVazEwRThiQ2RxOXBCLzN4cGN3eVRYQVRmeElWZDNrcGNvSndUNmlSQ1VLQWhuMFh2aDNQWW9wS0tRd0tKQVZzaTJXeXlFUnZyWUdqQ0lsSzRHNVJzZWI0RGgyWVZxenNEMjJpNlJqOG9qVFBRVEMrYm5zbGZmUVg1dEZVMTZUcU84RXFwRkxreGdGQWxlWnpkTTVyU3lWeHkzTlNYMkdYVFRZdHQvaTAxU2xSUlp5NHc3NXhXcHZCMnRwa29MMnZWYnU1Wnp4S3RIYmtDN3RoSkJiUEY4b2RyZ0pUeW5panBiazZoYXB6SjVmL1lxSXNFQWZBUVNYeVJLeVVhVlE2SE1QZ3dLNjR1b3NLa2taSnlUTTJxSGVyZ3pIVEY5ODZGMHZJeDkzbW9iNWVDT3BJOFRZaVVwNGJCMmFvcXpsb3RPRXVyZEN4M0RGRGRFYlZHZE9HSEo4QlJxUWlOb3RJaDg0dVlpSkgxVU9KbmxUY291QXl0c0F2bnlKUnB2TWdRRFNNL1BpL1lzK3kwcWl1eTloSHY3V1BxRVpVVXZGdEdnYmcySzhyMnRQMVhsSnVNczF3aTdnNkw3MyszWUVWY1ZXZG9JUjFuU0Q3Sk9nK3BlaUQydWM1VzRQRzg3cFk5VUVuRHlxeTgxUmhDd0tiTFpKR0xMb2JTZFovT0hZQ0VNOWJKTzB4VzBxRTYwVUpBbHpSQjZSb2FvL0kraFZzekpYb3pWYkxuM1pONHlGKzE5aS82Z2w5cjUxM0dhKzBKY1k5cWRpK0txM2VhMlR2anRwd0luQngwQ04vY1Jxc3hTV2NSQ2NkQk1wNUlYWG1wVTY1TE1iOXpZcFFScndWQloxb1EwREI4ZEliaG95Q3hlUnphOWlJYk4za3ZRaXppTnpLNHY4WnFHbEg0bWM4dFAyZFhPdFpzVWlIMkxFSFdGcysxYXNaL3ZYRzFwdVZMR0NUMkg4NnlPa3gxR1VEcTFuTWdOeFExUFN5SXQrWXdlYWJZc1djL2x0d3ZZelJjUllhdWhRRlZDR1lvYlZ6Y3dRc3BvS0UyVXJSb2F0UzNtYW9YOEZtRTRWMGdoRFc2T0EybDZiTmlWZk5nWGttMUQwQ0h4anRzazdqZzhwM2JNRkttdGVQS21iY3FxVzZwOWVSUFZyY0RkRDlyN250MGlzVTNpbGlRRFVmYjBZcDNLbnZwTGZpd1dZVXVCNVkrUEh1OU85a2lPc3lzY2d2UUUwVDgrRGpYc3djcWxONW03ZkgvMGtJdzFyb1VieE9wQmNlNkpmVEpyajZxVVR2UzRObmNNZCttOVRlNTVoaVh5VU5xWHRMMWp1NzBUOXpYVXpqbkhTQWRaYmZkdnNTOGVFckdTNkdWMW9hREJIa3E1eWs0MGh4MnFhcUhoS2NQb1ZyQ3RsZEVZQ0tDbHQwajZSUXhOSHFXSzl6RWNxV2RaQXRVcmVUYVNnaTUvdVd4bEsvdGlVKzBZdXAvWFlPOWhxblNLTExidFpaVzExWnh6c1NwelIrUlc1OVA3dFZ2YmZCRU9OTWEwMnJyVHVaazRsemlVd25xK2pOMUtIV25LcngwK2c0SmE0elcxM1R6TEllclBSaEVXMis4aURHc1V4aDZQa3haMW50dE5yN09CRTNZckRpZkFJSnRUcXJzVVc0S0dYSnJ5UWU4NXBuZldxYXA1MGNKWVVkcXVFOWduakxQVkRxYUt0bmViSHFRTjhuM1hxMjNWUXBtMWxjbGlkWE1YQ3hTOGNjcTBGc3NjMXU0SXNqUFdZRWdtWWpwQ1VmS2Z5WFpGYnAzRnFiREtrR2piS0ZxY0cyd2lmdmhlRW5xd0RXZE9EU2RxT1ltRTRsbnRjRzlidU8rbkFsdFI5dURSc2k1cS9NQ2NvamhmNUZRQzZGUzg3Wm1BSXc3MkdySzJLNktGc2FiWnhMWHJhL2poVDE5aXFEWFFMNVNJbTVjVm9VUW94Nm9DYUhoL2hmS0xDUVZEcWJQZkdlVTlCSWd3eHdqOU4vSUtMbTB2NGVHZUNYUjNSVHFsMi81YXJzMi9hS3NUb0dQb1hwUzVSdHZXakJyMHF0UHRSbXRIMmNuMm5lWGloK0pXeHFKYXQyU255blJsbGtId3lPWktlTzVIdjBDeFdFV1JEYVFCOHRuUi9qZ0NOTVRnZlRZcUxXUXB6YXFXQjFuT0FrbzBwdFlnVmF4c29aRGxOUXhmVzQrZ0VVeGlkbTRPWjgrK0pnVzM3ZlltMjU1U2xUM0thcS8zSm5XQ1BVS1RHcmRwenFtbkhuNGtUNlNjY1JSL3V4L3YzTFRUbjdUMk9FN3drRTBERFliYTZ2SXFmdnl6R1U1cm1weS9lVEJDVUlrU1FEeUtnWW1CQkE2d2Q1S2dKMFdJcHZNVmJPeFdjTzM5TEpZV2M5ak5WTmw4TXRHVG1zRDQvVjlBSDdrd1FIaUxva29nNHF5QWhhN2NZTEhZdG5odzJidEQyc0ErVEhBZDVPQ0diTkk2eGFyWmVwbFBVKzB3dE4wdWpXUUhseUljVDlyU01HRmdvVkRFTnFYVG5hTWhEaE5WSk5tcjFEaVZhVm9hRGJmSlh4NGM1bkN4UWxESmxNcGlKem50OGJDd2xjMExEQjA2aUVOMzM0M2VzWEc1eVBUU0NwWld0M0Y5NXpYWWJONzJESTBpazluQitPRVVEbzROOHhwUjZGbDdubkpEVWRtcjRSd2pIY3I0bnZoYkd0ZHNOcyt3SmZla01Fb2lrYVc0bmpOa2ZXWklUeldsR000U0RZWFEvYitYM21BdnM0VVVQZFJOWFRqRTlsNXJxeW9qM3BBYlk4dDJYMDh5aXVSd0hBci9Ea1FqaVBXeGt6dzh3dmxCTHp2UVFlbVp3bTRhNmMwc0t1VXlQV2JnNXo4L2gvR0pEVEZkeFZ0dlg4RmYvZVVYY0RCRmhjUEtvZTA5S2U0L0tLcmQvTlFVYTNvdlRIbTg4cFB2bjJVdmNVcmttK2dwaXZMbDJ2d3lRNjdPZm1TQUxYSWJ6Ly9rWldSTGJMS3lrNXpzamtrVUxOSEEwYjQ0UGpNMmdPYnlndUFJOWo5SUM5RWd3aXhhbzcweFRtbDhyQW9DQ1BiMDBhTlJ0dXRDYkxONzViUElrUFg1cS9qMS83Nk1OemxPbmlmYWVqUS9IbnA0Q3B1cjgwZ2RUSEVvVXNiSnU4WngvejFIZVh1ZDA5bzYrcnBZWVhDTjNUMWRTSFFsMEU1SkJ0V1BrME1IVG5jOEo0NUdvLzYwM1RLbURDYThNRzZEMmpDWExWSEZoM0I5SllOWHo4MmlZZGdTc1ZKRHZiamo4QUYwOVNmeDJodFgwQmYzbzNza3lheXRvM0ZqRTA2VFI0R2ZIZVk0MVlsWHRnekVKQ2NnTzF1YVVDNytnSXl5ZkRZdDgxY2hrY2ZZcWZhUXpJWFdNSXE3K094OTkrSzU1MytJNDhmdndOdHZYY0NSMFFRV1ZyTFlKQmpwelNySFowT1lYOXVXOC9kLytlZC9Rb1JUSmFaUFo2VGxhZi94L1IvK2RQa3p4KzZhbXIyOGtKcGYyc0pQenY0V2wrZFhCWFlpbjh1andFcGFFWk5TRWJwYy9JV3I4N2h3NlNvR0I0ZjVHTVNkeDQrd1F6ekkxZDVBTkNycU4wMDJqSUpSTm9SNk9XUHpjNUxER1p1WDdRUXhJQkdWaEp5Y05ob2NNbWFRWHRqRWU1eUpaOW5OMXRtSkZzUFVnVkdLZ3MxMTVsNkdPV3ZoOWRjdjRNcVZhOWplVG1PTHpkMnYvc1VYNVNoYTBQZXI1NjVoNm5Pblp1aTFwMy9IT0hGc1pSb1gzMWxlLzd1bHpSMDJSTHZReTJaUHBkYkUxY1UxTHRTSG5sZ1BmQ1RTVExsQUduQ0dHbDkrNkQ3bzBUaU8zM2xJNW9oWFpVMVhML0p2UC9za0JCbm1TVHc1d0FnSVUyeG9VdTBMNHl5MjU1c1Yza2VVU0pVS2R0ZHZvTW9oNDJxbUlDZXA5V2FOcy9Vc1B2K2xyK0RnNFlPWXYzNU5sTUQ0NHdmdXdmejhJdGNTeDlHangxaE82VGcwTVlGTEYrWVI4Z1VmL3NHUG5zdmYycmlkemEzN1R6MlFHQjBZdkQ4MU1vSmpoL3B3ZkhJTW14c1p5aVEyVWJjMkdHNjJWUHRWemhFRWFvcHgxYkU3VCtENEhZY0pDQ1dNbjd5UC9aRUNlL3dSR2pYSXlXaWY5SmJYNjVVQUlNb2lzeUVNSzB0TkthVWNRN0hDMnEvSnVjQlN1b0FBYWVWZ2Z4Y1Zqb2FCb1JUSFhSSDgrWi9lZzhMbUdyWlorQVlZQlJ1Y3VZZTcrdkdMVjY4Z05UR0pZTFA2OURlZitPdWJocEEzR1NlT29RTVRyemZyemE5VkdzMTRieUtDRUwvdzR1VnJHQjNxd1dmdlBzUzRUMEowQ25hNEdFR3NHenNabGhZcXZ2eG5VK1FuRGlGOURFa3g0R0J6MWhjSXM1MFhvY2RVUjJFSUVjQXdOTm1KaHR1dUYyM3FlcW1LWEs2TytiS0ozVktGK1dmaE14TWpNTDBobkwrd2pLMWRwZ1FGUTcxWXdOdnZ6bU1yVitUbVZuSGkyQ1RtTnh2WUxhckwvL2F0eHg3NW9DMi9NNStibVpuT3AxSW5IKzd1U2M3bUNxVjRLTHlKYlhMYXhFU0tJYWRSN1Rlb1JFeXArM1IvU0k2ejNuempMWlRKWjM1Q2U0dmg2dS9wSjBKeGtYSWk2dVNvYmRpU1ZpUWhrMnFFRkpNbEUrdS93a1lheTlzMXZNVmNGeFRTSFNOOURMRDJLMmk0d0hCTXAzUDR4UVpiRTJhZXFxZEZOQTZnenZSWVdGdG5hc1R6NzExY2ZSaTNPRHkzT3BuUGIrV1BUVDU0VGZmclgwdXdoNyt4c2NUaVUzQVFPTG5KTW53WnBuVEdBR2ZWc1lBWG41dElFaWQ5U0tXRzZEVkNOUmNjb0xBMmEyVkgrd25lTTB5SGd3Mm4ySlVhVU5SdkRNK2R4VTFjemxtNHRyMHRwN1ZpM3Q3UGNIeDNZUjBsRGswaUFiWUltN3ZTRTZLNmJ3bTlxNGl5UnVYM2VyLys5cXRuWHIrVkhSLzZVNDJYWHZydTlNUmc3eE14bGlhaXA5Smdyei9MOFJUN3hWeWZHQm5iR0JoTTRvRjdqOE1rdEsrdWJUQ3ZmRTc0TVlmVVVGUjZUWlU5RjlzWmc3bFRKQ2w4eFJoTHROcTNNd2lPSFVISmR1WVRCb1ZEb1ZhbllWdklVNitLZGtTeFdVYWVJRlVUdlZHR3VCaFR4Mk5keUJVTFQvejJwZTlNZjVnTnYvZDNLTi8rN3BrenVaMGJUMWkyTXk0KzB0V0hCR2ZnSGs1RERZYmFaaWJIamhVN3hVU3NMZktiK0VXQ21HbjdlRTRNaTczaEJGUEs0OVJlTkZBTU1CMFI2TXdBbTBSSlQzY2ZZcE9UOEhQQlhyZ2phdDY3VXFuS0daL05xa05xWExFaHZPOUlmd0wzM0hVRWswZU9QUEh1M015WjM3ZitqL3lSemYvTS9QUU1VK1FSWmsrK3lDL2JxUklNaFBnUk84L1lQMzloQWRjM2E4Z1dtN0txbHU4eDdBVEU2eHd1Q2lVaU84YjByalRVbmN5YWRmWk45Q2g2NzdyYndaV2dhTXBTUWZMYUE5RnUrQlhPR3pqVjlYbzlPRFNXUkp4VWN1TElHSTRmSE16cmpkb2p6ejMvblRNZnRmYmIrbm5VOHNMbGFVOG9mS3BzdEpicm9tRGxUZzZQakNIQVR2Ry9QdlVQdU8rQnU5bEpGZzBaajl4NVUxYTFMZGxZbGJOd1laanE5UGlGd21teGxWNHAxcEU4Y2E4a2QxSDRDb0ZndU5PSVdGOFM0ME1rZnF1SnNGL0h5WWxER0IvdXg1Y2V2R081bHN1ZCtxL3AvNTYrblhYZjlnL2IzcHViV1o0NSs0TXhidm5USXF5b0dESFJuY0RHOGhiZXZiS0VTUklwM0lHZzhKQjR0SWlJdm9FVUYrN3QxSVlDV0hZcG44WSsveFVXc1ZVNUtORTQvaEo1ckxoZE5aVUdYODhYV094eUtzdlF2WHhwRHFzYjZXL1ZRamoxNzlQVHk3ZTc1by8xazBSeFhIbG41aWxUcjQzbE5jL01Ka2RRaXhkWHNIanBIWHpsaXcrNWJUOEx1cGg5YzFFNlBkY2tJcXJodVBTT1NXL21WcGNST1hnVVZmSldPQktYYlFhaFE3M1VuRjBjSGZ2SWsyRnFSSS9pcFRCdmlJSjFwcjgzZWVxVk4zLzUrS09QUHBIL09HdjE0Qk1jK1V3bXY3SXc5NzNVK0ttWERWOGduaTFuSnI3NU4xOURxWmlsWHF4S09pam04MUtlQmVNSnR0cWpzbUQxY0pxalVzS05QZkNRN01WRWlIakZRbzZpdllHcmw2L0wzN2IweEtQNGt3ZFBJVjlxenF5dnJUeDY3ZHFiVDErWU83ZUZUM0I4b2wvS3RvK2YvZXcvWi9nMGMvYnNpeWtDeGVsYXVmcU5hcVYwVW9SdG5jaTRzN1ZKVFJsaFh2a1JHUnlqQUU5ajVNQTR5Wjk1NXRWUUk2Z1Vjam4yWG1xVWJqV0VOWDBtR3ZLOGZNOWR3MmYrOXJGLy9GaGV1dFdoNEZNK3pyLzRZc29mODU0czdtNVBsWEw1RXdlT1RzWVpwaW5ObzhlOS9xQkVUM28wWDZKclMrWDgzT3ExNnl2aGNIVHUyOS8raitucG1aay8yS0Q5eC84REh0bkU5TllLVFRNQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQTNDQVlBQUFDbzI5SkdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCalVTVVJCVkhnQnJWb0pjRjFuZGY3dSt2YW5wNmZGV2l6N09VNjh4SGlMd1drU0ZnWEtORzFTRUZPZ3lYUmhLVzB6TUNWT08yMkhNRUF5YWFDRlFwSU8wM1k2d3dSSXB4bkc3WkEwZ1lhVXdYSUNKSTZUU0E1ZTVDMlNMZG5hcFNlOS9iMjc4SjMvTFpLOEVHZjVOWGVlM25Mdi9jOS96dm5PZDc3L2FuaWJ4NTdlM2tRdW1Pc0wydWIyUkxJbEJmZzdncGFkU01SaWlVREFnbWtheUdZWDBxN3JqdVFMVGpvVURneEd3Nkg5UmlBNCtLbDcvMzBFYitQUThEYU12dDVVb2l2UmRaZmhsM3JEZ1ZCdmExczNtdU5OUE9LSWhFS0lxc05HTUJpQTc3bUE3cU5jY1ZBcytaaVptVUU0RWtZd0VJVG1lNE9GUXU1NzZiblp4ei95TmhqNmxvejdUTis3ZTEzSC9VbzVsKzlOeHBvUWkwYlIyZGFDTlYyZGFPSC9JUnBqV0JvQ25MaGxXTEJ0Qzc3djE4NzJ4UmdhV0lMck9qVGFoK05VK0w2QThmazVuSm1lZXZ4bkw3LzY4T1A5US8xNGs4UEFteGdmdlBIYUhidldkendXaThidUxaZktLVVBYRWJLRGFHbE9ZczNxYm5SM2RNRGlaNFloaGxVOVpwbVdPbGZUTkg1dXFQRFV1YlR5S3VjelROVkJpMUdpc2ZsS1pkTml0dmpKM2h0Mzl6WUYvUDJueG1iU2VJTkRmeU0vSGhnZVRvek5aeC9jc3VQR0FjLzFlblA1UENwY2JjTXdFV0xvdGJhMm9pblJyTHhqV1NZbmJrSTNkQjVHdzZoZ0lLQStOM21PTGd2QXc3WnRkWDR3R0lSdDJZalMwMkhEeHVyT0xuaWUxMnVId3NNLytiOGZmUVZ2Y0Z5eGNjZUd4MU1SUFREZ09mNGVSaFE5RWtDNVhGWVRETmdCck9wWWhTaERVZU9YSG8wVFEyeCtybXM2dldhcWlZc0JZcWdZN3pFa2xjSDhUb2I4TDhQblM0VEdSUVBNMDJBSXBrVVEwanhrTXZQM25oNmZHajQyUEp5NjBqbGZrWEZIVDUzcjQ4MEhPS3VVNU1mTTdJejZYRlpjMGpZVURxckptWnk0NHppUWVZclJFbUlXODh6MVBQRUFpc1Vpc3BrTXlzeXpVckdrRnFjay8vTW9Gb3JLWU0vaHdmQVVFR29pSUNVU1RiQVozcWRQRFBIYWJzbzJ6SUdqdytmNnJtVGVyMnZjMGVIemQybTY5a01mbFlUSEZNMFhGMUZoMGxjMEcyV1BJUldJd0tOM1NrNEJUaWxMZTBwdy9DTEtxS2lNZHRXRUhlVFNpOGdzWmxBU2c3TDhmakdIY3I0QTMzSGgwTkFpUXp5L1FNTUxaUlQ1ZTU4ejA3a2dzOVBqQ0lURGFHNXVSN21ZaDJmb0NVdjNmamcwUExibkxSbDM5UFQ1dTN6WGUwaTk4ZVZtdnNxSE5hdFg4MFJOaFYyQTRlYlFtN0w2VlFUMFlSTTg1TUxpQmJvREFwQStvODhNRUVnRVJIeFhlYU9PbXhLcUV1YTJITFlKVFU2V3NHWFptSmtZUjVrNHMybnpGcFhmNGwyNUhnUGp3ZGN6MEx6Y0Z5OGRQZFZYTHBjZU1tczVJVVhEa1Z6aWxNS3hLRXlCZVU0cWsxbGtMYk5WblpJSlJpTXh3cjVON3pyMG5JWVNQU0cvQzBTaUNFYkRxaXhvcmdlWGk2R1g4aW9uN1dCWTVhR0VkS0ZjQUQrR3gvTXFaUWVUazdNSXRIYkRDak5DNkdWWkxHZ3lDMThXNGNIancyZEhOcTViOC9nVkd6Y3djQ3psZTlvalBvdXQ1SXJrajZTNzVKS3N0cURpY1U2azZGWVFvSmNFS0pxVHpXaHBhU0VBTUZ3NTBRcnpKcDNKWXZ6OE9PZGl3WW8zbzMzVktyUVFUUk0wUnFzUWFPeVFNa3BLUUtsY1FaN2hudU4xcHhieUdCa2VRenBiUmlidllPdTJkM0lCSW5BcVpmN2U1WHlzS2hsUWJ0Y2ZJY2dNYmw2M2J1U0tqUE50ZXg5ZkVnclZQSzhLN2VJSU1aRXJHdVBGbTh3Z2lwNmdwVllGRTBFMWV0a1ZEekFhUnljbXNEaVhabUdQY1FGc25EbDFDaWVQSEVaVExJYU9SQXZXclYyRGNOUm1LTnJJWmJOWVdGakE4T2c1bkJnZnAwRlpGSE5GcEJkS2FPdGFpdy8vd2NmSmFDb0tvTVFvWDhDSzRTbnZaWjZhWnUxam1kcTVjOTI2OUc4MGJ1REk2YS93bEZURFVER1FLK3N4RlBTUWhjVmZIY1RhZ0laTnQ5MkdYeHc2UURZeG8xeHFhaVlMdDZXTWRRb2x0TVRpNkdwcHdva3oweGlZbUdXb0J0SFRIa05jWjc2WkZTd3V6Q0lXNmtKQWtQRDhLQTZmSHNXNWJJbUFFV1RJYTlpMThScE1US2VSdHhPSU1hUUxwUXJEVU5DWTVjTmlORW5PK3FneEhqOFZnaUYxOE83bHRxd0FsT2Naam9UdGUxZDRzUlkyRmY2VjZTbWpuRWZjMXBGc2p1SDk3M3MzZGw5M25hSTVtdnJqYW1rT0VtRWRMZkVnWmljbUVRL0YwZDIxRHAycFRmakFyYitQSk90aDIrcE8yTEVBWUpXaG1idzJGK1RxM1RjZ3Nta3p6SjcxMkxCNUo0NFBIbVlaaUdEdGx2V01IcGZyNTZ2ODFIU0ZOaGY2Ukdycm5zTW5obmRjMW5NTXEwZkVHQjhyU2FjVVphSSsyWVNMZ0h4QmF6eWRFRThZYTJNT2FVeHlxWEdlbk1jcXJMbGxSTWhRdG16Y3dMdzBjWlZtb1pETllPTFZsOUFaRTJDSkljM1M0SlkxSWlCVXFOcTJodXNUTVdRS2NpNUI1dG9ObUt0NHVHcFZpc2I1YXVrazkwMjl5bmJnTHhrbzcrWFFMZU5CdnIzNUlzOGRIRGpaeXhONmErNVNIdk9YWDhEakJYbTRncHBFTzVOaG1wOWZnSUIrZTdLVnlGWm1ybmxFdWdvblFmckUrcGRvYWtZOGFpQko3N1JGSStob2FXZHhqc0hKRmhBaThKUzRqTHJMS2REQ2NtWU9MVXpzTm1RUmN0UG9ibzhqeURSb2FrbFdGeGhWU21jeHQrdkcxSSs2Z1RML1g1MGM3cjNZY3didVd1NHBaYm0yNUQ5R0d4eDZ6QTVHWVlmamlJYlpCUVFYWUlaRDZPcnNKTm9WRmF2M1dmTkN6TDhLWWR2MExVU2l6YnhMSGlYbWlNNEZLZEl3UmFGZE1oTzN3QzdBUUVHS05tL1YwOXBNQ2hlRHdVWEtaT2NSekxObXNoMlMybGFuY3hLV0xzTlVQRmdIdStWRE16VEp2ZjZHNXlUWGZOOXJVQnFmSjlXOUp4ZVE0ZmhTWTF3WTdWMzh2NFJzZmhac1JvVkpvalVSWnloeWdweGhSZFpEdHhraUFYaEV1QXJaUjU0SHJXQVlzM1FFSmRkMFpCbCtUc0ZYclZDVXlFc1dxdEpCRGsrUmJhSnZLSUlLUzBabW9VQUF5akdVRjVBbmt4SHZ5ZHdhTkE5TDNKUXIwVHN3TUp4b0dFY3ordnhMaEtJNnFmWmFwbkdhUjk2WVNHQ2VvVlFoRjV6UExXSStuME5UYTVLNWt1TzVYR0Y2aDFITFNUSFVXSTBGdWdNc3dDRjZNQnlKUytaZ2Vtb0dib1dmczk1NXJzKytMMVNkcEVtdlFGb2VnaGM5NzdOeldDQWxLNVhLOUJwUmxEVlYrR2pWTUFsSlhiM1dQVmczMEl4NmV4ckc4WHFmcUh1cDdxbjZlNmZSWjNIQ3ZMVkRIaFZKYmNma1hJRXdicU9uYlRWQnhCQTBRb0ZjVVVMWm94ZGxFcTVidlpZVnBDY3BNY3pNem1KMlpoWkJUakxPRGtJOEVHbE9zSloxSUZmSXErN0JKeGlWdUhBTFJZY0w1eUJHc0JIbTA5Yldxa2hDakdSYXJxMFduSy9peWZyN0pZL283MU5HN250K0lFVkxkbmpMTEJlanhLQkd3dkk3VThneC93L1J6dUNxSGl5MG5VVzJtRU9JWkRFek1jY2NncHFnY0VkRGw2SnVxbk9GVXJIM3crenNsUEpzbEdnNVBEbUY0dlNNWWlqNVVvN2RRZ0Z6NlRRMnlQMkVhRE5DcHRNNUpOZHRnazZEb3pUT2tVaW9aQVRUVUJLbTRucU5lVW83SlllL2xFb016WUdFOUpJNzVBZGVMYzlVcm5sZW83bVVvOXFEMFRBRTRabmlDV29oN1QwWVpSZjl2ODgvaHdCelF4SmRZeTZsT1VsMjV5cGtaRUppM05UNEJDcDVBZzV6YnA3Zlo4a2ZzMlFod2s3T25CdkR6MzcrTElLUkVBcHNpWndLWlFjQzB5eHpMQmhMWXBhU3crVGtwR3FUNUZyNVFxR1JPa0w3cE8ycUkraUtsQXBHK2t4RE0zdFZqWkNlWDcxVzIzNkpWVU0zVkM5V2pWd1BPZDRvMWhMSHpPUUVJcXh2Mld3elNqU3dUQTVhcWJEWXMrNFpOQ3JMVUFsd0VZSU1SWmx3c1ZqaHBJRnpORVRxWVphY3MwUWVXU1pQYzZteGxKaGZMNzN5S3NzRFMwallRbzdJTzEzTzRacG9BaVp6VGJJbkdJdW91WEY1RmMwVHpVVU1rN0NVc0sybkUrcXo5YjBkWmpnYzJpNHJMYXNpUDVvZ0p4d2RIVVdCSzNUaXhBbHMyN1lOa1VpRVlhYnh4aUU4OExYNzBkWFZoWHZ1dVllRk9ZMTRVNExua3VFejdSWnpCUlpnaGxCZWFIMFpIYXVTaEhnTml3elhFME9uRVdZWXRsRm5XZHZSZ2pqcFdZYUE1SE5SUXh0NDMrbHBISHoxS05iMHRDQVNqS01BRzNHV0JwOW8yZHpleW5DT1lXcHFTbmxyZ2FoWlR4OXB0VHFvMlZ3RWhENVNqTG5BbnFGanh6cE9uRGlKclZ1MzR1bW5uMWFUbjV1YlU3S0JKTEdzenV6c05MWnYzNFpEaHc2UkZpV3FSamUzNFB6SUVCSjZrVjcyTVRROFNvckdmQ1BxNlpRR0pQZDBJcDRzWEF2TFJpUVFocHR6VU1tNU9IdDhCSGxxUHFWMGhzMHFnWUhlaWhCMWhYTldDZ1F5RXVlMTIzZXgzaFVoV28xRWw0U2ZFR3hKRlJuVkhoSnE4ZXRodVhRUXQvSzVYR3J6cGswMGhraEdOQXV6NjMzeXlTZHgrKzIzNDZtbm5zSk5OOTJFQXdjTzRPU3BJU1RaMXV6YXRZdGRjVE1XRnhmSkV6dlYvK1c1TTZSaFRkUWdaMWtTU2doWTNZcWFTZGNWekplNDZuRzBkM0dSRnVtUHJpQmxTeE9CTGRjaXl6RDN2QXFSTVlNbWx5RVlEdURzbUlQajdBeTZ2U0tDQktsQzBGVDNGY0FRNDR4bFlwTzBYc0k3UGE5dWtGY0RGR1Zjd215bUd4d1cyNTZlTlhqMDBVZlY1QXU1UE5Mejg5aTVjeWZpaE43dTdpNnNUYTFHa2xTb3JhMnRvVmlaVW92b0ZWMDNHWEpoYkZ4M0ZWNWtXeE95REZ6VDA0azUwck1reGRuV0pMVVcxaldxeTZwMVdjd3ZNdmRzZUNHL1dpN29pRWhKbHRwbkNKY3c0OXI0M2I0UDBkZ29ranlubGZUTzR2MWs0c0pTSktjYVV1QmxoNTh3cjN2WE8vSG85NzZQejM3dWM3aDJ5eFpzWVdodTI3NmR0Q21pTGpaSEk3ZHUyNDd4OFZGTUVFaDZVajA0Y3ZnSWtjL0JlNisvQVZsNlBHSktpam00ZnVzN3NFZ0FPWFdLK2NXYWNOWHFMa3pPenF0MlplMmFMcXhxU3lxR1VxSlhodmliOFhOVDdDN0M2RjdWZ2lZYWtjN2tjZVRzT2J6bm81OUdjc2R1K0dXaU50dW91a0pXTDlTU1h2VWk3dFdhMWxvb3JzZzkvYXIxNi9HUDMvZzZTYStMOS8vMkI0UlE0dWpRTVhKRFIxR2hKNTU2VW4wbkNUMU4xVXN3cWF1SFhteHR3YWYrNUkrUVovM1NSUFVpTTdFMUY3M3Yyb1V1cXM1alkyT3NWV25NWm5LWXBUZEdHZktMTFBLQ2ZBbXlsZTcyVG5MU0R2UXd0S05NQlRaVEdDWnpDYmQxWXVmdWQ1RzZlWXJ1NmFiZVFNRGxKTG5XeHkwenJHNlUxdmk5OEpkMGhuTGJUMy82VTVWSElwb09EZzZxLytXRTYzZnZWcEpja0RyaTFxM2JDT2srMnJrWElQRS9mT29vUFpnamEyS3NzOXVXaFlrWUhuNnY5ejI0YnRzVzVlbnowM000OXRwWkhCdVp3SEY2NnZ6c0FoWjRiWnVlN2U1c1YwMW5tZ3R3bG9YOWxXTW5zZlA2bTJyOW0zUUNiSEVNdllhTVM4WmRidFJMV3ZWM1d0cjQyQjEvZkNkQkpDRUlxQlFveHJhZ3BreGVXRXN5bWF5dURDOGVpN01qQ0VSeGlEWHB6ci84RExYR2dxcG5PemYwa0ttd0V4RHY4ZFZtVHNhYllxeFJGZzR4aEhNczVqNXJtRGlqSXJxazFDcEw5RXlSSkh4TUxXYng4ckhYTU12KzdxT2Z2RlBKZ1FSYkdtNGp3b2dSVG5raEdpNS92N3oxYVhoVTA0YU16MzcrYjdpWjRXeXFHN2VpV1YxMnNtb1VLYnVWaWI1Lzk3ZjNZbnA2VkVIKzBPZ0Uxck96WHQvVkpyT2hIQjVVRGF2UDJZVWk1SVNyMm5ENHlCR2NPanZHL0V2REVUckxTVS9TcTlsY0RobVdnZFBqTTNoMVpCeTMvZUVuMGRaek5RMHJLUUp1RWp6QzhWaXR4Ny9RUy9veVk3QWlQR3Y1TjJRV1M4VXpGbXRSL1VlcTB0Y2FYYm1BMHZQNXZXVWJTcVBjdS9mSExQQ0VlU3RLYjZhaDJWSDh5dzkrQW90aGU5TTdOakJ6SExqMHZtMklWRmZFYW9MSVIyNzlIVHgzWUFBdkRoN0YrZkZKdk1MQzM5cVNnT0ZUNzNUS21NbVU4T0dQL3lsMjMvQmVzcE9LYW9TbDl3NndZR3NYR2JYMFdnY1ZVY1NXL1FJMUF3NlJlT2lERjdxNy9odGY2Zm1HQ2xHYmt2bms5RHdlKzY4bmFHZ0VzY1JxTEV3dXNLWlJhMlQvOXMzL2ZCS1JQL3NZYnJ6MktucU83UXpaaU1iSkd5VFFLUzVPKy92Zmc4MnBOWGoyNENCT2pvMWorT3daQk8zcXRsYWlLNFVQM3ZvaFJrV0JqU3J2SzN4V0JGL2VVeW0wL2xKTzFRR2o3b3k2a1RMRUVkWFBwVFB4KzdWOXdwNUwydnlGOUtWNkFWY3B3S0lFZzZyVUYrLzVPdlhFQ2ZXNUhPbTVNVGJVVTByLzBEd2JZVFpGWC9pTDIzR2ppRHJzeVJ5Q1RNVXZ3Mk5mNTdIT2xlVmdiWnhKejVONTVGVE9VUmJBWTg4OGo5NWIrL0RsTDM4SnhVeUJvcEhKbk9YR0pmTldUZFhYTGpFM2Y4VlI3K25xblFMTDZUcjk1cDA3MDd4QS84b2ZlNnFWcjdwY3Rwa3NmUFdCYjJINHRYTkVTem14cEQ0UHhUdDVNVk1sUDF0djVMVVF2dlN2MzhXK0l5ZEl5cmxieWhVTW0yR2xxZEFOeko4NDZWd1NWN09VYkw1cURab1RRYkw4ck1xcEh6L3hKSjd2MzEvZDNxcnRDbDFpdlZjWWQ3bEJEdzd1M0x4dXBOcUp1KzcrRlNmQ1V4MUJnT0gzMnFuenVPZnZIOENyZ3llVXR6eEtEQXFwbUZzR080SndySTNoSkRjaVZKQ3RHcUVtM1BmdDcrUDdQL29GRFlvb3RjeFNjTTZ1SWkrOVcwa3RtakNUTWRJc2w0c2lYWUZCUlB6bU4vNUpFZll3YzYzT0g5L1lxQm5zZTk5VFJxbzNaZjBoK2RkWG9nUlhPeFRGNU5Rc3Z2cTFmOFlYdjNnL0RoOStqV3NyYlFZM0drMVA3WWhxcUFKUEpFbzZac2M0V1g2bkVRem9jVHZTakgvNzc2ZnhyVWYyUWdzS2x5eFJMS0lxSm1vME93U0hkWE4rWnA2cU1uOVAvYVRDS1BCSXZDZElFdmJ1M1lzbWhxUXNuQXAvUlJ2OFpZZFhPNnJqUWhWTUpzZTFVM3NIaldEdVAzaDBIemxqYjQ3dy9KMy9lQXd2dnZqU0N0ZWJ6SjhWTXByY2drQWk5M05LYzhndFRIRHJXUG9vMmRCM2xZRHFGb0cxclZGOCt4L3VobFpZUUhveHo1NnZ3bFlwaDlIejU1Q3RGUEhTOERRZWYvWmxWZFFOaXhzaUxJYjl6KzFIUjA4WGFWcTVXb1k4YThrNHJZYnE3bEllTnNCUWljZitFNXZXOXZRdGVZNWpQcjF3M3pNLzJZZS8rdHdYMkFVY1hJYWVlaTMzYXNvek0xVkpCNUxBdkpSR3loVUlKS2o3dDFFeVlCbmdlbFY4MlRPUS9YQVQ0NHNsM1BIWEQ1Qis1YWx5Y2NPamtHRW5Uc0dISEZOYXFsbktEWTNGUXZXYTk5Ly9BQUdJYVdIRmxpbk1XblVmak1DbGprdUFqRU92RVM0ZXFyOXZCUFlQSHYzT3lKbXoyVjdPT1ZXSDNPV2VVdDB2NzFGbjQrbzdpcG1pWnZuVUoyVXYyNkgyNGJGOXNYUlgxU25EVnlHQ0VrOTg1cmtEYUcxZmhWUkhNK0dlSG1GVEs1dHNQMy81TUdZbzVFcnZKN3RURnV2ajZkTm5zUGQvbm1HLzVwRzBiMkdhQkJUTUs1SXNteUh3YXlWQVZ6SjdQY0JZbGZzM3J1Mis3eUxqWkRSM3JEdkVrKzRVcjJqTDRybXFEZW9OYjRybmxOSHFjMDNWSXRtbTBnZ0tIdlVFa2RNdFExT014UmVRWVN2anNKUzh3Q0l1VHpWc3ZEcWxYc3Y4N1l1L09vN0p4V0p0MDlGV08wa3VROXMwNDNqNWxlUDRNWnRueWMyeHNRa1cvaFp1bFNXVWdGVHRDTHdWbmpNYzNQend3OTlNWDlLNDlQVElSTHc1MWN3Vi9LMGxkbUlvSXhxY1c2UTdDVkV4c0JhdUNsMU5VWUNwdjRRVHFveFFNMWZ0U2tVM0ZJcEtZZmRwNE1ESk1VVUczcjE3dTlJalh6cDhuTnl5b0VRb2o4QlNJdGpvd203Y0FMbHNKM0xzeUErK2NBVFBQWHNBcjVEVGlsaVVUTGFoamRLRHZ6UXJJZGIzclYvYnVXSVQ4cUxBVGFWNkUxN0FIdUNxcE9xZHI1cSs1NmpZRjY5SldDcXRrQk9PVUZlcHNPK3FLbERjT2JDcVc4Ylp1ZGU0Y29zS2dVbHloTityMjRrUkMrd1JZMEVEVzllMmswQ0g4TXZEUThpVWVROTJISUdRYUlPa2U0RjJxbXh0U2lHVHpsMXFyOWZJK3pLMmJOK0F1ejcvQ2V4KzV3NHVTR1hrNnU3MmRSZmFjdEdlK01oSWY1cElkek05a1Y3UllxaDlhS04yNkxXV244cHp1YUlXUU9xV0VsVlo3enlDUWpqYXdmQmlHUkErNWVtTnZKQ05SdmwzaXRMZEw0K2N3ZWhjamtLdkZCcnFqM3J0U1FpVy8yVHphcFlXV3kyL3B6WWF0WWFPRXFSQ2ZYem9GUDc4MDN2WXF1MVBjL2ZwWmx4aVhMWkJXci8xdGo1RzB3L2x3dFZrOW1waENYbGtvcXBkdUVXMWxTc2VpM0NEVUtTRHNsOVM5Y253d2lqbUp4aSs1K2xCU3oxc0kzMmpESkgzS3J5ZUxkNFdiVk92NW0rWmhuc01TZDFvUWt2Ylpubzl5S1hLcWNWUk02MTE0SjVxWWczMWVFZCtjZndqK2ZUcFMrNkpYNVlHekUrZEdFcDJYTFBBM0x1bHpyNmhubUhRVlg5bHlFYUZQUDRVdEZUWFVQMit4dEtKZklLWHNuY3Rld28yQVNXYnl6YkVIWG5lUy9LUUd3WWt6Mnl6REdXZGVrakE5U3NxL0V5TE9pVVJXTzJnZXJWU3NOUmtxenpuZ3QwOWYzN2d1NWV6NFRkeW5MbkpreThrT3pZdXNMamZjbUZwRUNEUnlTcEVYTEprUjZmMlNJWkI3MG1lZVpyMFpHVDJSb0J5M0hsdWNaVlV2dFJCU3JhNFJNRFZ2T3JldG5RRWFxZklFTFFVaWNPZ29FVDlrblROMEplZXFGZ3l6cjk3L0ZUL1E3OXAvcTlMNE9ZbVQ3elEwckg1a0tscnQvQ0NRV25qNnpKQWhTVGFaSFBxcVhwVzdjRVVRNUV1dXJhWkxGdFo4b2lIcVpmVXcyNXFoNVRxbUc3SlBycWxPbkh4ZHJrc1hMWDZSSkxQY1BkZGVVNnNoZUVYVXZLNmVxS2kramdGaWI1MngvanBmZDk5dmJsZkVUdWRuUmdhYXUzWTlBUFo2dUlORXN1OXVMelcxUEZIMFRZZmpRN2FZbmk1M0dpMFRFYzlrQ1BTamZxSzIxZENEaFRiOFh5RnBPSkZLWjlsUVU2V0ZaUGRoRkhUUmZpN0VXNnEzREF4dk8rRks1bjNGVlB2bVltaDlPems4WWRiMnEvUmZMVzk3S3ZWckxPVmVxUFkwRFJxT1ZJTlg3TktkejBSazB6dTBqaHFsMGF2RVFPdnR2R2lWMm1IMGtYTFJHR0wrM2V5azF2MW1QYXc1YmgzakkzMFQxenBuRFc4aVpIYTBaY3lYZWNSM3JSWGJpdzFUMVBQNjFVTlZnQ3c3TXFlVEpoTlgyN2hIRW53QXZYWmtncHB3NnRXb2dhZFUvV21DaURDVWx5ZGNuN0hOZjIrYTk1OTd1VC9EK0lOampkbFhIMWMvWTdiZWptcnU1aUhmZlhIRStzVFZZYldSQnhYQ0xIb0l0UXRDL21URE04aUM2ODhSTERTT09WbFFyeXdIOS93K2tuQTd5dW1aL3J4SnNkYk1xNCtObTI2SmVYYlZoKzNxejdCdk5teFhJc1JqM3Fhb3hEVTVDWkpmdkVzSmZpTVlobjF3aXlzcDhxRVJCSFE5cE45UDVTV2piNjNPTjRXNDVhUEZBMWxFdTNnck1XcjIwa0NFcHJwcHhob0NVTWtDYXBkNmZremFjOVpUR3VHT2NnSm5DRklNT1Fxajc4ZEJpMGZ2d1k5emR1Z1dqYUdKQUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJ1MlNVUkJWSGdCdFZwNWRGeDNlYjF2bTFYTFNCcXRIc21TTEhsSkhDOGhpeE9TV0dZbkNjUWhZVHVuTEQ1cG9kQnlFdjlWdXRBNDU3UWxYUTQ0TFJST1N3a2NPQkFvWUZQS0NRa2t0Z21RUUJ4YmpwM1lzbVZwdEk2V2tXYlI3UE9XM3U4M3NwTkF5RWI2a3ZGb1p0Njg5L3UyKzkzdi9rYkQ2M3djT0hBb0VvYXgyekQwclZYRDY5VTBiWnZtZVJIUFJRVFE0RllycUdaUzZaWHAyYmlXeTZVclRuWFk4OXdqY0RDOFovKytPRjdIUThQcmNJaEJJVk8vazRzY3NteG5xREszZ0dJK2oxQnpDM3pSS0d5RFJzbUovTWZqZjY3blFYY2RsSmRUS00zT29aaFpndTRCanVZTWU2Nzc5WXBiUGZpSi9mZkc4UWNlZjVCeER4NzQ2WkJobUhmenp5SFhjMkF2SkdFbjVxQlhiRjdaUU5WeG9mdDg4TVc2WU5CSVQ5ZWgwUWd4enRNMC91M0M0S01ZSDBObWNvYkJzMEVId2VWSjFXcjFZQm42Zlh1L2NPOWh2TWJqTlJuMzhJR0h0d0htNTZGclEycWhmRzlsYVI1bmYvTUVUTnZCWUVjM2ZDNk40OVdkY0FpaDdoaXFsaCthR01kemZUNkxSdkRtcFNKV3hzK2h1clRDcUxrMHpZYnJPUHhBUThYd0lieW1HdzJ4bnNPZXJlMjU5WU83NG5pVng2c3k3djY3N29vMCtDSjNod2JXM3hWczY0QnJtcnlBcGk2eXNEQ0h6RXFhaXl2RFRXYXhycTBkbFhBUU9ScFJxRmF4bEVvaW1WeUFMeERBMnJZMWFMUVoxVlFXZXRWQmxkR3EwbHBiczFHRmprQnNMZXA0ZmZqcEVMNldaSFkxN0x2MXRwMzN2SnIxdm1MakR0ejFhWUtEY2Npd2ZMMldMd0M5T1FLOXJRMEYxazVtSllmVXlnb3N2OFcvbHpHVG1JR2ZrYXBuMUNxTXprSXlpZEY0SEFGK3orSXRMVVBIcG1nSHR2YXNRNE12cE5LMElHRFQzQWlqcXhPV0dXVHdOTEdKWlVvbjhET25tRWR4WmlwZVRNM3QyblB2S3dPZVYyVGNRMS81MW01N2JQVCtvRzVGcXBhQnM0ekNxYWs0Q3A0TlI5ZXd1THdNbS9YRk5JWEo4enRZWXlQbnpzTmdWRHFpcmJCWmo2RmdDSGFwZ29HMkxtenY2Y2VUcDU5R1EzMGQzbnpaMWRBYm0rRjJ0Y0dsOFhJWlYrcU9mN2lNZUtWY1FINXFCbVZHM1pEUE5LUWQzZHV6NTdOL2RmRGwxbTI4M0FtUC9leXhPLzNOelY5cjZsMFhtTXNzNFA2SC94Y1BIM3NLYzlrVTZpS05DSVhEY0xpUUtnMEpoVUtNMGhMR3grTEk1MWF3WmV0VzZMcUJxZWtaRkVwbHBMSVpMS2ZTc0YwWGI3N2lqWmd2Rk9IcjdVYjM5cTNRUWdIV0lzSEg3MlBrTFBocFlKbmZ5NThmZzVITHcyQWtKY0tHWVFRMHcvakErMi81VU9aN0R4OTRBcTgxY3NlZk9IcW41K3I3TGRPSDVlUWkvdTRmN3NIWlNhWlgwSS90bDExR0w3dElMaTFqYm00ZUFYK0FxYVJqa1NuWTFCUkJwTEd1ZG5WWFYrOVhDRFFyVEYyRG9LTHpZVEhaQmdZR0VZbTI0Sk1mK3pqTWdCOE8wOUJmY3BBamN1WW1aNEZTaVVtcHNSWmRsR3diWmJzS3I2NFJ2cTUyK09vYVlPdmEzaHR2dm5iL3F6YnUxL3YrWlhkd1hmOEIvN3AxOFB3bXZ2Q2wrL0N6UncraHFhVVo5WFZoaEpsU0kyZlBJcDh2OEd4ZFFiZ3MzR0JxaGhuQlVIMFk1WElGdHUycTJ6UTBOS3JYdVZ5T2tTWXEwakdtWWNDeWZQam9SL2ZnOXB2ZUJZK29XUnlmZ2N0clNwcExTNUJuY1l4RGgzcHRUUWcwUlZHUnRIWFpMbGp2L1BqV3Q5OTQ5WXVtNkl1bTVmSFBmcjdYWitvUCtvcWxnTEc0aE9YRk9YenhnVzhSeWczMHJGbURucDV1VEl6SGtWeGU0a0xaa0preUVvMDZHclcyZXczOGhQcGl2bGhyekVRRmszVXFLVnN1bDFFb0ZQZ2RCd2FSVmxxSTQ5b1lHVGtMZlRtTGpjRW1XUHhNTnl3YTdxT2pETGcweXJjdUJ2OUFML3lOSkRtV3FkS1d5WUNBL0ZNb3Z1T1dqVmQ5NXp1SGY1eitiVHZNRnpPT3lYOG9aT2tSd3lBVWsxMGt6cDVEc1pRakd2b3hsNXpENU13RVRCcFZ6OWRzNHVocWE4V3VhNjdHaHI1ZVdQVG9FZ0ZtSWpHTDhkbEZ6R2ZTeUJGSWJOSXVuODlBbUFpNlFuUjFtR1pTajNKVStkbTNmL1lUVkhJRi9OSFFUWHpmWVo4ekVPaU13dDhrNlNkT1lIcEtka2dmOUlpNDJSSjdaQnpseFdRazROTVBIZGozK2UyMzd0dWJma25qUms2TTNHMnNyUFJxWkJ2R2NvYTE0U0hBWXZkWXpFVXVNaEIwc0k2UnU0U1AxcFlXOUs3dFplMzBvNld0R1o1YmhaUE53c25rY2ZaWkEydVppazlQeEhGc2JBTHgrWGtWRFRISVpOU3FWVWxOV3dCQ2VBbS9hK09CWHh4Q3FLNE90Ny92ZlFoRjY5bjRMVWdoR3Z4Y2t6U21YU2dUUWVNSkZPZVQ4QkZOZFY2enF0bTlwaGtVcHJUMzk2Ymw2ZU9uZXcyZmNWQ2pkODMyZGhqTnplcWlCcjE4N093SUV1a1VLcFV5YnI3eGJmaXpPeitKU3kvZGlLN3Vkb1FiRzRrRTdFMWNxTzdRemF5dHVtQ1lhZXFEeDZqTUVDRlhTbFhrQ1JCU1E5TDJ4U2pwWlk1aUpJWXkyaUlvbll5UDQ0cGRONkNsbzAzVnI4blUwK1NaYUt4TkoxRWRuWVdlTGFqV3poUFV1Z1ZGM2FCdng4Yy85WmMvL09xMy9uUHVnajM2ODQycjg1djNtNUxUOUpobTZYQmJ3ckMzRHFCdDZEcGN2MnNuRjZEaExXOTVDejcyNTUrQ0Z3akRxNitISG1FZDFEZENDemZBczBKOCtLQUZBMndUVFFTZVJsVm5yWTFOaVBDMW9ac3FBOFNnU3FXaStwbXVLSm1tNkZpaHlGUmpUWDdoaS8rdWFKaDhwa3ZOVGkvQmZYb2N4dnd5ZkFKQ3JHay8yNGFmdGVmV0JWRjMyUVkwWFhVRnJLYTZ6ei9mbm92R25mdlNONGJjb3llSEFqTUxxbTRNSVQ1YURjYWRoaERhZXZ1bFIrT1AvK1FPM282R3l4bTZuMWZ3OFNGbzZhalU4a3dpSmlOUW9WSFNGbXltbGFCbmtQVXBDeEx3a1lneDBWQWxrdHE4bDBNajVWRzF5eldBR1IzQjBWODlEbzAxNjU0YWh6YTN4RDVINitsd2s5ZlhXYnRlblIvV2htNUVydG9DaXdUQUlEdnltY2JRazQrZEh2b2Q0d0tHZnFmQlJ1dU9Ua0IvYWdSbWdqa3QvRS8rbzRIOWJBbnQ3VzBZSEJnQTFOSnFYeGZqMVVERGROVVlEWjBwN0xJMmMrazBabVpuRUFvSUJXTkVwQmI1bVh4UFUraXFxY2xBR3NXRmFNcXpZbDFNM1llK2Z4REdYSm9Bd2pVdy9VdytORWxEOGxWamZUZUNWNnlIR1l0Q1o1c1NPc2N5SmlwckNNSzUrd1hHalgvN3dWNzZlN2MwVmxNU29aaURmbllNMVdPbllOSnJPbSt3OFpKTnVPT09PNFQrcUVOZ3ZHWWh6MmM5ZU5VeVBEWlpseEZ6eWlVVStZZ1F1bnRpYXhCai9iaDJSYVdvTkg1NUNKYXJsQlFEK2RxcnNRLzEydWJmSjhiT0lzZHJpblBGWWkxTVB0dmJBZC9XZm1pZFRkQ1ltcWJVcVdRS2pRcEkrazRtVUg3eTJORHhmZmRITGhybjM3NSt0M0hsVmxTalJEemVRR1lzV2I0dlZ3Rk9UUUNQbjZFWGwzSGJMYnVoaXVQaUxNQkZWWXJROGhsb2hiSXlVcHAyaVUxYVgwM0RDZ2x2VjNNRHJ0KzJtV1NhNldTb2I2azAxRmI3WXkxaXovMHRSNUZJT0RVOWl6SlQwZXR2aDNicFdtaGQ1S0NtcHNwRDNaN1I4aE9QelBFRlZILzlERFN5R2gvTHcvVlg3cnJZQ2h5LytSR1BjRzgyWHdJa1UzQW01b0ZNRGliclFSYzJVTWdCWndydzZEMnZvNUVMcUNyMGNsbFRLZEt4UjMvNUJNWVRDMWpPNXJDMHRFU3dyTEtmQlJEamdEb1k2MFFISi9JMzlQWWhseS9ocDhNbnVIQlhwYkxyYXJVYWxCU3Q1WUl5a0VpRENpbFhNcXhoMDJXOUVBQ1dMcURWVGxHcGl6S3poVUJUSVVab3pCS2ZqRVhzdWFhMER3ODdsWEdKMCtPOTVBdmJkRFpHVjc1RmlxTTExVU5iektJOGxZQ1Z5cW1PSVV6RGMwckl4eGVoNVphNStEQ0tTMmw4LzlzUDRObXBXU3lzRkpFZ3RkSjRuUUJudHJJbnRJbHBRbGJmUWE3WlN0cTJrd1M1eE04Zk9YNkM5VmZsdVk2cU8wODFjeHJzWHFoazBpNmFuNkJVVWRWcU9WSkRWRThOdzk3c0Vxb3NGek5QWWtBSzVyS1ZlSks5ZEpJZHNtREU2b2VPSHo4ZU1kM2pwN2Y1ZWpzWmtWWWluYUdJcmt1SWRicGFZTkpRai9EclRpVGdrZVYvOVY4L2gvajBKUHFiR3JGejV3MVl2MnNYTnZUMklrN3ZaUW5oTHFNWjYraENZMzFJa1dsWlZUTWJlWDJvam0wbXpLSFZRVC83NTFOc0ZVdlpDaEZRVjN3MDFrS2l6ZlBPenkyaXdLaExpeEJEaThXaW1qZ2taWVdabVBNRXBTbktHRXhaUytwME5kb1NFNDBSYzN2YU9laTJnbGVXT3Q1dEdwbWxJZS9wRk96eEJ1aUQzZERhV3hVV1NnbzRraUtrUUZvSG84bWFhM29tZ3YvNTVhOXgrT1JwNU9xYk1mQ2UyM0g1emlHY0p2OHNWRXE0NVkwM29ILzlJQ25hQXZKY1RIZXNCMjJzNHdJam1tZGtTMnp1QVo5SlE4Skk1MVlVZDJ5TE5LQ252WU9Da1ljdGE3dnh5OU9qcW5tenIyQjZZaEtKODVPb0wxYmhUK1VSS0x1cS82b1JsdWZvREpmajQzTlhLL3hkSk5TR1ZuTUcydy9yYlp2SlNHOFZScTl6SE5HT253WmFTSlBXZHNHTlJuZ0JvNGFMY2k5KytlcDM3OGJqejR4Z29MVUoxOTE4SS9TeWpWQlhGKzdZKzBta3FXTFYrNExNK1NDNkNjME92UXRwMXBrTXFrVEorV1h5elBReXNrVGlKaktnQk1IR2xOR0hhTGRTeUdQTDRBWXNMaVpWUDZ0aGlvZlRwMDdndjVncEhWWVlHM2lmbnBZT3RKQU1DUHNoUXdCNjJtRFM4UTRkVnZFMEJYYmlGMGxBL3QrclRYM3JSOGZOZEhhYnRHWFhrT1pOM3NmRmVVd1ZxNjhiTGdkU1Z4VThhNEVvV0pvNUR6b0xvZjVCT0l3V1p4NFNiYVlCYTFCalBaQVZLLzduMGZBeVo4Q1ZWQXJUWFBRNFZiR0p4VVVzRUtnV0NWRHovS3k3dFpOQllDT25JM3JiT3hGa2FqMXc1T2NLR0lSUERyWkgwY0FHNW9pMS9MK2RxYjFwN1FDMlhIc0RPclplZ2tDMG9TWkhWR1g4SWJxejV4bGNnMHRPWEoxSXhFMTl4K1plZHpFRCsrd0VESHJaTlFqakFpNGt6dTRDNnkzS01XUmRMenl5YzRkRzE2MGJwRnZNV3FHWHFGcTViTnhVZ1lTVkNEdUJVRGZwNmFrVkZHajRKSVdqQkc4MnhRbDlKclZNNHpLb2NDRTlyTTNOZlFNWUk3RzJtU0Z5Ym50M2oyb1RPbzBKOGxwK0FrV1JUbEk2SndmbUFybnVZbWNuenRCNUN5UGppTXhGME5IWlN0cFdoRWhKcmFLMlRTOFEzVG01TzE3RXREV09Oa3d6UXdRZkdsUGhHR0hsaXB5cjJJdVlJdVppQ2k1UjBXbUx3Q1JMTVZycmladzB6QllBSWF0bnhMejVKZlk0U1VPNU9wZFhMRk12S1hIQkJXUTV4aVN6WW1RU2MxVEhNdXg3TnIvWFZkK0UrZGxwRkZleTZHcUo0dkxCVFJpZG55VjZLdG1XNDFTUVNNc3BnMDVzV3hOREU0MnkvQ0hreTR4OGNnYXA5QUxxeUdmbk9WbzV5WG40MlphMGpoakJyRTRSZUUwM0kycGlsSFNWNXVpdG9VSk1JOXlaZVZRSjd6cjdraVpOZ0Nmb1NXb2Y2Wk13cjZka1NhQ2VmL3BwQmxDTXJDQjdiaHg5NzN3ckNYTllUZVFDOFZXbWJGVUVIa1lweWY2WExvcWhlZFpYVGpHTGJINEZMWUVvUHJ6N1ZzVElaQTRkRzhiM0h6dUNDNk9LUCtCVGluV2tnMGF4ampYZFVqVkZ1UmM1MXEyZjJaT01uMGRtYWtxTlBxM2hlalJSY1F2NU9Od0dMR1lEMlpiRmZxRzF0eWptSU1oaGs5Wm9mV3RncnVtQVBVRlBpcFpSWmlRRm1iaHdFV3grZGZnbitONVBIc0hZUWhwQkZ2TlY1SnVmK2VCN1ZhT1Z2UUJEMHNqUWxkcHNVQnNSSlNSSFkzWFRVQk9IY05VbHB1Y2dVZExqdFQvM25RZHg1TlNJNm5uaTZZN3VMc1RXOXNBZ1FIbUdjRkJIU1h3U1UrRzd1Y1FreGlrZWFlVEM4aFh1U3lCbkYxRjU1ampuelRDNjFyZkJUMUp0Mm84ZlN5UGFHUEZmc3A2cDEzU1JTUXNDZVJ0NmlKenRxTkxBOHRnTUFzTDZPUnh1dWZVMi9QTVBmZ1N0b1k3Y01ZYnIzL0YyVkppNkplWitnR05ObFNwWG1UZk9NalduNXVad2ZuS0N0TXhXZmN0akpFdE9GWTExQVU0QkZUeDI2amhHWm1ZVmhFdi82ZWpvUUhkM043UENncVVtQ0VPMURJUEFzelF4aGhVT3ZWYlZWZ0JYSSsyMTVpNlQrZ0tOUEVhMEMzREdqTmFIMDRTaVN0cExMa1JLajJlZ3M4ZFpHL3NCTWhSWE0xV1RkWU5rNFJ2NlliRUgyZWVuVUNES1BYTGtHQmFwRnEvcklkQ1FJVHgwNUJGTVQwK2dJaG9tYy85ZDErMWcybGlZSlRwT0VTbGxTTTBJV0tGR2ttMDFIWGlvbzBJbTA0RHRLSEtGMWxiMnpvRjFxOUdsUVl5MHhzOHlSTnAwTWdHTkpNQmtaRzJqdHVkQU5pNWhRd05yTGJaK0EwS1JacTVCeDVQSFRtRGJwWnZqcHFQYnc1cm15U3JoTGM0UzVSWUFNbmxCU0pQRHFLT3JxOERoVksxdjZVZjhrVEVjZStJSmJHWXR0SkY1UE10R1crVUNqajV6RmtWR3hLVkRKcVltOGU0YmRtSXNNWTl6akVxZTZHVjdOWlp1U2U4MFBUUVNpQ3htaDBZUUtuSmM2dUpNdHE1L3JScXVwZGNaNUs5cE1wK1ZwU1Q5WCtIeVhOVVhYYS9tSUdsb2paM3Q2RnEzSHVHbUZvV21yaHFnSE9TckJReWZPWmsycld2eUUxSWZpc0pvdFdrQUhoR3llSWJrMWFqeFRaRUZOQmxNVFR3NytuTUtyQ1gwTlVjUmErM0ZteSsvRms4Tkg4VjhsU1NBckwvRUc1Zm8wU2ZPbkVJcVh5Yk55bEI3S2FtMDA1bHFPajBkSk11SVVCN1VhbkRGd3BkMEZNVnNXa2tISWxXVUtkZ0txMmRyWThQV2xNeEhjc3VNZ05wUWlSQW5mSFI0eVdYS1orYll1QzAxejRsQ1p4RnNzb3YyQ2RNTnJRd0xXWkV2MEkzS0k2SnBxSHpteFRUMk1ZVlJHa1ZYTkdMSHRSdnc3Sk5UK01RSDdrQ1NSYzMxWXNzbHU1Rmd1aGJZOTU2ZG5NSW9ZVC9EdmxXa2J1TGp6UnllVkJla21zV0dyR1kyMWtpOURKMjhwZXpqeFRycjJZanppaXdMS3NrNVpsaGtCbGVHYnpxRTM1T0pud1phUXJzc1lTUnMxRVh1VC9DYXR0SS91YXRrMTJUR01zOHhkUGN3QlNYZlFiNTl2K0xkcTRObzdjbXRHVVVhNm5razB0WmFRdXhtdE1iOHVQNkdNbUhhajRYSkxOeXNpM2J1enZSdUdtRGFVSkJ0YmNQeTQwZHhmblpLT1NqRTVtNHhJUVJBUklVdVV5Y1J5U0ZFV2NCVldrb1ZRZTRqT053ZEVxTUZIR1FTMTR3YUJmTVVZTGd5QlNtL2U4d2VXODJDYW94VkpOdFFjMFJ0d3I5Z2hHN3B3MmJmOW4zcHFlTi9jOWp6N0tFYXg2cnBHMG9BVUNOSkRMN2dGa0w2Z0VyTFlNUkYzNFpMb1ZPWWFhRmdHbzIxSVV4eTNNek5qenhCSnR3ZzZla2pLMG1wREZlcXNnaW9scUZhUkYwb3FJd1RjaXh6WVphcFM0Yks4WWhhSkNNU1pPdlFXUjdGRWtVaElSSlNLWVpFeEZQYWpTelJ1ekNzZXVvanBlam9nZzNlcXBIUWh1Kzk5OEc0R2xadDF6N0NEMnZHMFVXYVVxazQxdnV1aEVuREJKRThqemYxSEZVelRlMWQxRVV5YUdwdVZjS01QTTZQanBGS1RlRlhUdzNqTjJkR3VPaWlLdndnQzcyNVBrQ0RmR28vUVJCUVVrZEZ5SzF0SVZ0VTBrNmVPVThIK05IV0ZzWDYvbjUwZHNZd09qWXNVS2FjSXRmU1Z6Y3ZsZk5YNXp6VkJtVGR3cGFZdmpyN0lvWGtyMStjeEtFSDlydHUvbTdkczVYZG50WU9mK2c2Vm5PbkdoMWx0TkNvQXN0QUtCZWJHQitEc3p5UG1abEViYStiTlRYRk9udnMrTk9ZbzhRdWV3S0NhdUxISUVsMU0vdGhrQU9zeU93Qyt3TDhZbVFxVnlKbzBlK3NsYXB3U0Rib0N0bkdTaW1QMXJZZXJCL2NqalBuamlvMVFGTlJFYlZNSm9tYVZubXhodGlPTk1OVW4wdGZwS0oyOEtKeGtwcWp4L1llcGl1SG9BOGdVTWNnK3NpNFBXTTFqNzFWT2E2VzF5NmpjUERSdzJRSmMvUjZTRUg5Q2hGeGdZcVhVQ1JSbE5WRXpodEdPTjZFeVJQOVROVUxXOHppK1JtZXUxd29FY2FicVl5VkZHc3BVeTVZcGhUZjFkMkpBaDNVMHRTRnZyNXRtSng0V3MxN0hxTWppNjhocjZHQWh1VjBNWXFxbmJuNkQvZi8yMFB4NXlJbjd6dmVQYTQxTUJSc2VDdEhIS2FQZDBHTWZzNndDOGZHU3pZajJ0V05FNVFCYytrVjVNazhsTXpuMVZpRHBMYTBzenJ5dzFhcTBZS01jdmNTRjVmbXVTdEZScGJwWGNkQjFlRjd3bFFhR3VzNUxXbEswZlp4MFIzUk52UjI5M0t3SmI5c2lPQThVN1JhektyeFNPQmVKQVdYMldTc2lsV3FEL0o3Vkt3dWJtbTlZQXRyYnV6TUlkY0lEOG5taHdSTXRFVk5mdzZCTGg2cjdPRGhCMytNSHg3OEVaYTVSMWRpNUVKK01hWWVKODZPcW8zRW5zNE90REl5QnNFa1M5MXlsbEhSU0d6RDNBOFFuVVdjSnMrekN3dFlvUGJ2T1ZLTEZienZ0dmZndmJmZHJnajJ5Smx6T0QweVFtQXA0QnhUTkp0UE1ETXN4V0trWlZqQ1Y2VTM2cXFGSEw3dlM0L3N1ckRNRit3VjNIWFhwMCtReFAycHRxb0txNGV1NDNjT3NaWHY5dzl1eEk0M2JLS21zWUlQdmZkV25EbDlCbzBoRWxkdWtJaGpSRVRLc0JsUEo1ZXh6QWxESlBZR3l1L2lhVWxkUzZRL3NvOGw3aVdJbG1tSjRVVFR2LzcwWDZDUm9sS1IzMTFNekN2bnRqUzNVNUp2VVdtWjRVUXY2WGhCOTVUMUNQcFdOVy9YMGFQeGl6czlMMWg1ckM4MnpQUHVVK2ZMSi9yTGJabTdtQmtmNVVaa0k0SERoMXR1Zmp1U25OZW1VbVFsNUlHejNLcWFwMVppY2NHTm5CZWxKd2w1bHIwNWtmK0s3SGxMakxxa2dwTEppZXVYYjkrR0NKM2pjcUpPa25UbkN5bnU3Zm13YWNONlhQR0dhNmlkN3NHT0s5L0VaaS9YcU5RQVNxUkFGL2Q4K2N1SDQ4OWYzZStFcFd5NyszaXp1UHFkaVBiU3hva2dlK1RJWTdqcHRnK29UZjFtUnVYdHU2N0ZKWnMzc0ErR0ZFVEx6cW5zcE1xbW83Y0s2WG15RW5rdFVaUDBra2VRQkYxNjZ6dHZmSWNxQlFHcFBNOFJVVWs0cFRpN2cxd3l4ajMwZCsvK01MWnV1VjdBZ3pYb3lzNVIvRCsrY25qZmI2L3ZkNHpyNit0TGV4Vm5GOU1xL1ZLR1NjOWNuQjVsc2RmRHg0bllGNmhETHBOU0VsMlFrQitsSkJEbWd2VlZibnBoR2hERFpJaFYrMzJNb2ppd2dUVW9CcXpodVBPR3l5OUhoZW00TkQ5SHdZZ0RNeU5xc2ovNnVaa1NJQisxQXFiYUw5eXdjWXVxZmU3c3Bzc3J6cTRYWGVPTHZkbloxeGNua3UvQlMwVU5WWng5NWhSMlhIV3QyajhJY3dOZWhCeFplRlJBUk5lVm5HQXphckpISU1ZSTZNZ2hFVk44WTdXZUJRRURaQzFidDIxVHIyVy9PNXRkdWFoYk50SmhmaUVMeG5NVTBlOExZL1RNSWl6YjJQUEF3U2ZpcjlnNE9kcmIxeHpVYldmdml4c0dHbllTRHozNkdBYTJYNlYrNVJPazkyM1dXWHhtR2lXYnlFbnZTbStRMzVPSWNSSTFlVGlyKzI3eXZtbjVsQk1hcVdOR0NTQTMzWFNqYWcwbFJxN0VZYmRJRFNVUUVMbFFYMVZlTmRWN3hWR05qYzFZVHBYM2Z2UGc0Ny8zOXlnbVh1Sm82WXJ0WDV5YkZXQjV3YWFlb0pOc0liLzcxdHRKdllJcVlzR21LRG81bFI4L2R4YUpwUlJTbVpMaWhsTHdGM1p5TG14MGlMRjFkSWFrNzdvWTk5aWE2M0hiZTkrUEZxclJtZVUwVW1RNXk2a2xoWWppU3I5ZmRCRy8wak9GVk10MTJxS3RlK09KeFA2WFd2OUxHaWRIYTBmWC91VDhUSng2L3YyOHV0b2FFdmF4NVlwcjZPVXlhai9Fb0xXTVFoc1hHdXVLSWNVZG4zSXloNVY4cmlZK2tSNkpRR3V1N29yS0ZDQS9idHZZUDhBdDZCdlJ2M0d3TnNaUU5aUEZwMGk2WlM4aHlLalozSkNNY2wvUU1HdS9BU1BZcEVrNDlneHUzZnl5dnlEUzhRcU9LRlBVdHIzdGRGeTg5azZOUkJrMDZNSXJnVE0vZ2FXUlNsYUJ0Q3BMY1ZhTUVpUDhiTlNDaG43Mk1abS9SSTN1YUkzaXN2VUQ1SkF0eUxGbGxDZ25Wb21NUlVydllWSTZQMEZFV3MwNjZxUytvRjhoS0JNZzd1cnU5alU5ZlM5cm1Cd3ZHN2tMUjJkblo1eFBmWXZ6aVgyY3J1NFd6NHFBSTdLQ0xyOHBrZkdmdm9xMnROVm1NUEVjR1lZd2YyRWhrbHFWY2tVTmxXM2MybXJsUkhIb3lLUDRwL3YyWS91Vk8zRE5qbXN3Mk45SFlha21Jb2x4OVExQk51Nm9vblZNeWZ2eVJXZWZvUGtyWGZOcityMWxJcEhvL2NmUGZQcitOMTEzOWRBeU55ZHVadTBKK2ptVTljNmZPb2tEUC80UnhpWm5rTTVrRllnSVRSSmdrQmpIMkt1YUc1dkkvbDBjT1BBRHhVektkbTEvb0NmV2dYZSs4MjFZdTZhTGpLUUZHOVp2UW4xVDVMQnVXSHRqZlgzRGVKWEhLNDdjODQvVktPNXFqOVFQWlhYL25UZkIyeTN2RzZ5YnJ1NFlocTVtZTdCL2dYT3lUMjZHVmErVFdVNm9WWWpiVitzcG8zL2p1LzhOMlZvUTdjTlR2MFJ4TUUyVjYydmYrQ2F1dXZKS3ZHWG5EWWM3MjdydXVmVEtxdzdqTlI2dnkyK2NKWkttUmdNMWZJUWdzeTJmU1dQcWZCeFBuUnhXTWtLZWxFeE5EZElkYWZDR2djdnd0NS85ZS9VREFHSHpObzFmRTZtakNsWTluQzlWaitSS3BmM3BkUG9WcHgvK1A0MTcvcEZJalBkUzE5bFdyVGhEaFZSMnEyZmJrY1Q4UXUvMDlHUmtjWEdPK240UW81UHo2VzkrOXp0cEdqYk10SnlndGo4Y0tKVU94bDhIZzU1Ly9CK01tSFlkZW5meTVRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd29ya2Zsb3ctYzdhM2U4ZjI1ZWQwYWZhZDA3YTBkYTU2Mjc0YjI5Y2MucG5nXCI7IiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFJjRHJhd2VyIGZyb20gJ3JjLWRyYXdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyYXdlciAoeyBcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgY2xvc2VCdXR0b24sXG4gIGNsb3NlQnV0dG9uU3R5bGUsXG4gIGRyYXdlckhhbmRsZXIsXG4gIHRvZ2dsZUhhbmRsZXIsXG4gIG9wZW4sXG4gIHdpZHRoLFxuICBwbGFjZW1lbnQsXG4gIGRyYXdlclN0eWxlLFxuICBjbG9zZUJ0blN0eWxlLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxSY0RyYXdlciBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgICBjbGFzc05hbWU9e2BkcmF3ZXIgJHtjbGFzc05hbWUgfHwgJyd9YC50cmltKCl9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIGhhbmRsZXI9e2ZhbHNlfVxuICAgICAgICBsZXZsZT17bnVsbH1cbiAgICAgICAgZHVyYXRpb249eycwLjRzJ31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiAoXG4gICAgICAgICAgPEJveCBhcz1cImRpdlwiIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9IHN4PXtjbG9zZUJ0blN0eWxlfT5cbiAgICAgICAgICAgIHtjbG9zZUJ1dHRvbn1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPEJveCBzeD17ZHJhd2VyU3R5bGV9PntjaGlsZHJlbn08L0JveD5cbiAgICAgIDwvUmNEcmF3ZXI+XG4gICAgICA8Qm94IGNsYXNzTmFtZT1cImRyYXdlcl9faGFuZGxlclwiIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0gb25DbGljaz17dG9nZ2xlSGFuZGxlcn0+XG4gICAgICAgICAge2RyYXdlckhhbmRsZXJ9XG4gICAgICA8L0JveD5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuRHJhd2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6ICczMjBweCcsXG4gIHBsYWNlbWVudDogJ2xlZnQnLFxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG1lbnVJdGVtOiBbXG4gICAge1xuICAgICAgcGF0aDogJy8nLFxuICAgICAgbGFiZWw6ICdIb21lJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIGxhYmVsOiAnQWR2ZXJzaXRlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIGxhYmVsOiAnU3VwcG9ydHMnLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy8nLFxuICAgICAgbGFiZWw6ICdNYXJrZXRpbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy8nLFxuICAgICAgbGFiZWw6ICdDb250YWN0JyxcbiAgICB9LFxuICBdLFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBJbWFnZSwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4vZm9vdGVyLmRhdGEnO1xyXG5pbXBvcnQgRm9vdGVyTG9nbyBmcm9tICdhc3NldHMvbG9nby5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmb290ZXI6IHtcclxuICAgIGZvb3RlckJvdHRvbUFyZWE6IHtcclxuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyVG9wQ29sb3I6ICdib3JkZXJfY29sb3InLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIHB0OiBbNywgbnVsbCwgOF0sXHJcbiAgICAgIHBiOiBbJzQwcHgnLCBudWxsLCAnMTAwcHgnXSxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB9LFxyXG4gICAgbWVudXM6IHtcclxuICAgICAgbXQ6IFszLCA0XSxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIG5hdjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbGluazoge1xyXG4gICAgICBmb250U2l6ZTogWzEsICcxNXB4J10sXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgICBtYjogMixcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zNXMnLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCAxLjhdLFxyXG4gICAgICBweDogWzIsIG51bGwsIDRdLFxyXG4gICAgICAnOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29weXJpZ2h0OiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHBhdGg6ICdob21lJyxcclxuICAgIGxhYmVsOiAnSG9tZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnc2VydmljZXMnLFxyXG4gICAgbGFiZWw6ICdTZXJ2aWNlcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnYmxvZycsXHJcbiAgICBsYWJlbDogJ0Jsb2cnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ291ci10ZWFtJyxcclxuICAgIGxhYmVsOiAnT3VyIFRlYW0nLFxyXG4gIH0sXHJcbiBcclxuXTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4LCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcImNvbXBvbmVudHMvbG9nb1wiO1xyXG5pbXBvcnQgTG9nb0RhcmsgZnJvbSBcImFzc2V0cy9sb2dvLnN2Z1wiO1xyXG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gXCIuL21vYmlsZS1kcmF3ZXJcIjtcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tIFwiLi9oZWFkZXIuZGF0YVwiO1xyXG5pbXBvcnQgTm92aWdvTG9nbyBmcm9tIFwiYXNzZXRzL25vdmlnby1sb2dvLnN2Z1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2xhc3NOYW1lLCBjb250YWN0VXNSZWYgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIHN4PXtzdHlsZXMuaGVhZGVyfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPExvZ28gc3JjPXtOb3ZpZ29Mb2dvfSAvPlxyXG4gICAgICAgIDxGbGV4IGFzPVwibmF2XCIgc3g9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIHRvPXttZW51SXRlbS5wYXRofVxyXG4gICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bWVudUl0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgIFxyXG4gICAgICAgIDxNb2JpbGVEcmF3ZXIgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgY29sb3I6IFwidGV4dFwiLFxyXG4gICAgZm9udFdlaWdodDogXCJib2R5XCIsXHJcbiAgICBweTogNCxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjRzIGVhc2VcIixcclxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxyXG4gICAgXCIuZG9uYXRlX19idG5cIjoge1xyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICBtcjogWzE1LCAyMCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAgIG1sOiBbXCJhdXRvXCIsIG51bGwsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgfSxcclxuICAgIFwiJi5zdGlja3lcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZFwiLFxyXG4gICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCIwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KVwiLFxyXG4gICAgICBweTogMyxcclxuICAgICAgXCJuZXYgPiBhXCI6IHtcclxuICAgICAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIG14OiBcImF1dG9cIixcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpXCI6IHtcclxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgfSxcclxuICAgIGE6IHtcclxuICAgICAgZm9udFNpemU6IDIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9keVwiLFxyXG4gICAgICBweDogNSxcclxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgbGluZUhlaWdodDogXCIxLjJcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4xNXNcIixcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiYuYWN0aXZlXCI6IHtcclxuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ2NvbXBvbmVudHMvZHJhd2VyJztcbmltcG9ydCB7IElvTWRDbG9zZSwgSW9NZE1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCB7IEZhRmFjZWJvb2tGLCBGYVR3aXR0ZXIsIEZhR2l0aHViQWx0LCBGYURyaWJiYmxlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZURyYXdlcigpIHtcbiAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0SXNEcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgIDxEcmF3ZXJcbiAgICB3aWR0aD1cIjMyMHB4XCJcbiAgICBkcmF3ZXJIYW5kbGVyPXtcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5oYW5kbGVyfT5cbiAgICAgICAgPElvTWRNZW51IHNpemU9XCIyNnB4XCIgLz5cbiAgICAgIDwvQm94PlxuICAgIH1cbiAgICBvcGVuPXtpc0RyYXdlck9wZW59XG4gICAgdG9nZ2xlSGFuZGxlcj17KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKChwcmV2U3RhdGUpID0+ICAhcHJldlN0YXRlKX1cbiAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAwMDAwXCIgLz59XG4gICAgZHJhd2VyU3R5bGU9e3N0eWxlcy5kcmF3ZXJ9XG4gICAgY2xvc2VCdG5TdHlsZT17c3R5bGVzLmNsb3NlfVxuICAgPlxuICAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxuICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudX0+XG4gICAgICAgIHttZW51SXRlbXMubWFwKChtZW51SXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICB0bz17bWVudUl0ZW0ucGF0aH1cbiAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttZW51SXRlbS5sYWJlbH1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51Rm9vdGVyfT5cbiAgICAgICAgIFxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvU2Nyb2xsYmFycz5cbiAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoYW5kbGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4U2hyaW5rOiAnMCcsXG4gICAgd2lkdGg6ICcyNnB4JyxcblxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cbiAgZHJhd2VyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdkYXJrJyxcbiAgfSxcblxuICBjbG9zZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMjVweCcsXG4gICAgcmlnaHQ6ICczMHB4JyxcbiAgICB6SW5kZXg6ICcxJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgfSxcblxuICBjb250ZW50OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgcHQ6ICcxMDBweCcsXG4gICAgcGI6ICc0MHB4JyxcbiAgICBweDogJzMwcHgnLFxuICB9LFxuXG4gIG1lbnU6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICBjb2xvcjogJ3RleHRfd2hpdGUnLFxuICAgICAgcHk6ICcxNXB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU1ZTUnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIG1lbnVGb290ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogJ2F1dG8nLFxuICB9LFxuXG4gIHNvY2lhbDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblxuICAgIGljb246IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIG1yOiAnMTVweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xuICAgICAgICBtcjogJzAnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICdibGFjaycsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmdzogJzcwMCcsXG4gICAgaGVpZ2h0OiAnNDVweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcHk6ICcwJyxcbiAgfSxcbn07IiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIvZm9vdGVyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgY29udGFjdFVzUmVmIH0pIHtcclxuICBjb25zdCBbaXNTdGlja3ksIHNldElzU3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19GSVhFRCkge1xyXG4gICAgICBzZXRJc1N0aWNreSh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19PUklHSU5BTCkge1xyXG4gICAgICBzZXRJc1N0aWNreShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoZWFkZXJQcm9wcz17XHJcbiAgICBjb250YWN0VXNSZWYsXHJcbiAgICBjbGFzc05hbWU6IGAke2lzU3RpY2t5ID8gJ3N0aWNreScgOiAndW5TdGlja3knfWBcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFN0aWNreSBpbm5lclo9ezEwMDF9IHRvcD17MH0gb25TdGF0ZUNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9PlxyXG4gICAgICAgIDxIZWFkZXIgey4uLmhlYWRlclByb3BzfSAvPlxyXG4gICAgICA8L1N0aWNreT5cclxuICAgICAgPG1haW4gaWQ9XCJjb250ZW50XCIgc3g9e3sgdmFyaWFudDogJ2xheW91dC5tYWluJywgfX0gPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIE5hdkxpbmsgYXMgTWVudUxpbmssIExpbmsgYXMgQSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gTmF2TGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGgxPk5hdkxpbms8L2gxPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEEgey4uLnJlc3R9IGhyZWY9e3BhdGh9PlxuICAgICAgICAgIHtjaGlsZHJlbiB8fCBsYWJlbH1cbiAgICA8L0E+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcImNvbXBvbmVudHMvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyh7IHNyYywgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rXHJcbiAgICAgIHBhdGg9XCIvXCJcclxuICAgICAgc3g9e3tcclxuICAgICAgICB2YXJpYW50OiBcImxpbmtzLmxvZ29cIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIG1yOiAxNSxcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEyJVwiLFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9XCJub3ZpZ28gbGFuZGluZyBwYWdlIGxvZ29cIiAvPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhU3RhciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuY29uc3QgUmF0aW5nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoMT5SYXRpbmc8L2gxPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbkhlYWRlcih7IHRpdGxlLCBzbG9nYW4sIGlzV2hpdGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3t2YXJpYW50OiAnc2VjdGlvbkhlYWRlcid9fT5cbiAgICAgIDxUZXh0IGFzPVwicFwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyLnN1YlRpdGxlJyxcbiAgICAgICAgICAgIGNvbG9yOiBpc1doaXRlID8gJ3doaXRlJzogJ3ByaW1hcnknLFxuICAgICAgICAgICAgb3BhY2l0eTogaXNXaGl0ZSA/IDAuNyA6IDEsXG4gICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2xvZ2FufVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgIGFzPVwiaDJcIlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB2YXJpYW50OiAnc2VjdGlvbkhlYWRlci5zdWJUaXRsZScsXG4gICAgICAgICAgICBjb2xvcjogaXNXaGl0ZSA/ICd3aGl0ZSc6ICdwcmltYXJ5JywgICAgICAgICAgIFxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IG5vdmlnb0hlYWRMb2dvIGZyb20gJ2Fzc2V0cy9ub3ZpZ28taGVhZC1sb2dvLnN2Zyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNFTyh7XHJcbiAgZGVzY3JpcHRpb24gPSAnc3RhcnR1cCBwcm9kdWN0IGxhbmRpbmcgcGFnZScsXHJcbiAgYXV0aG9yID0gJ0pTTScsXHJcbiAgbWV0YSxcclxuICB0aXRsZSA9ICdzdGFydHVwIGxhbmRpbmcgdGl0bGUnLFxyXG59KSB7XHJcbiAgY29uc3QgbWV0YURhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGBkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzp0aXRsZWAsXHJcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzpkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzp0eXBlYCxcclxuICAgICAgY29udGVudDogYHdlYnNpdGVgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsXHJcbiAgICAgIGNvbnRlbnQ6IGBzdW1tYXJ5YCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNyZWF0b3JgLFxyXG4gICAgICBjb250ZW50OiBhdXRob3IsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjp0aXRsZWAsXHJcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6ZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgXS5jb25jYXQobWV0YSk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIHttZXRhRGF0YS5tYXAoKHsgbmFtZSwgY29udGVudCB9LCBpKSA9PiAoXHJcbiAgICAgICAgPG1ldGEga2V5PXtpfSBuYW1lPXtuYW1lfSBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICApKX1cclxuICBcdCAgPGxpbmsgcmVsID0gXCJpY29uXCIgdHlwZSA9IFwiaW1hZ2UvcG5nXCIgaHJlZiA9e25vdmlnb0hlYWRMb2dvfT48L2xpbms+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufVxyXG5cclxuU0VPLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsYW5nOiBgZW5gLFxyXG4gIG1ldGE6IFtdLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAndGhlbWUnO1xyXG5cclxuaW1wb3J0IFNFTyBmcm9tICdjb21wb25lbnRzL3Nlbyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJ3NlY3Rpb25zL2Jhbm5lcic7XHJcbmltcG9ydCBTZXJ2aWNlU2VjdGlvbiBmcm9tICdzZWN0aW9ucy9zZXJ2aWNlcy1vZmZlcmVkJztcclxuaW1wb3J0IENvcmVGZWF0dXJlIGZyb20gJ3NlY3Rpb25zL2NvcmUtZmVhdHVyZXMnO1xyXG5pbXBvcnQgV29ya0Zsb3cgZnJvbSAnc2VjdGlvbnMvd29ya2Zsb3cnO1xyXG5pbXBvcnQgQmxvZyBmcm9tICdzZWN0aW9ucy9ibG9nJztcclxuaW1wb3J0IENvbnRhY3RVcyBmcm9tICdzZWN0aW9ucy9jb250YWN0LXVzJztcclxuaW1wb3J0IEFib3V0VXMgZnJvbSAnc2VjdGlvbnMvYWJvdXQtdXMnO1xyXG5pbXBvcnQgUmF0ZXMgZnJvbSAnc2VjdGlvbnMvcmF0ZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcclxuICBjb25zdCBjb250YWN0VXNSZWYgPSB1c2VSZWYoKTtcclxuIFxyXG4gIFxyXG4gIC8vIGNvbnN0IGNoZWNrb3V0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2hlY2tvdXQnKSA6IG51bGxcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8TGF5b3V0IGNvbnRhY3RVc1JlZj17Y29udGFjdFVzUmVmfT5cclxuICAgICAgICAgIDxTRU8gdGl0bGU9XCJOb3ZpZ29cIiAvPlxyXG4gICAgICAgICAgPEJhbm5lciBjb250YWN0VXNSZWY9e2NvbnRhY3RVc1JlZn0gLz5cclxuICAgICAgICAgIDxTZXJ2aWNlU2VjdGlvbiAvPlxyXG4gICAgICAgICAgPENvcmVGZWF0dXJlIC8+XHJcbiAgICAgICAgICA8V29ya0Zsb3cgLz5cclxuICAgICAgICAgIDxBYm91dFVzIC8+XHJcbiAgICAgICAgICB7LyogPENvbnRhY3RVcyByZWY9e2NvbnRhY3RVc1JlZn0gLz4gKi99XHJcbiAgICAgICAgICB7LyogPFJhdGVzIGxvY2FsU3RvcmFnZT17bG9jYWxTdG9yYWdlfS8+ICovfVxyXG4gICAgICAgICAgPEJsb2cgLz5cclxuICAgICAgICAgIDxDb250YWN0VXMgcmVmPXtjb250YWN0VXNSZWZ9IC8+XHJcbiAgICAgICAgICB7LyogPFJhdGVzIGxvY2FsU3RvcmFnZT17bG9jYWxTdG9yYWdlfS8+ICovfVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IG1vIGZyb20gXCJhc3NldHMvdGVhbS9tby5wbmdcIjtcclxuaW1wb3J0IGFsaSBmcm9tIFwiYXNzZXRzL3RlYW0vYWxpLmpwZ1wiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogYWxpLFxyXG4gICAgYWx0VGV4dDogJ1NlbmlvciBFbmdpbmVlcicsXHJcbiAgICB0aXRsZTogJ1NlbmlvciBGdWxsU3RhY2sgRW5naW5lZXIvUHJvZHVjdCBNYW5hZ2VyJyxcclxuICAgIHRleHQ6ICdJIGFtIGRyaXZlbiwgcXVpY2ssIGFuZCBhIGVmZmljaWVudCBsZWFybmVyLiBXaG8gd2lsbCBwcm92aWRlIHlvdXIgb3JnYW5pemF0aW9uIGEgY29uc2lzdGVudCBsZXZlbCBvZiBwcm9mZXNzaW9uYWxpc20sIGdyZWF0IGNvbW11bmljYXRpb24sIGFuZCBzb21lb25lIHdobyBjYW4gYWRhcHQgcXVpY2tseSB0byBjaGFuZ2luZyB0ZWNobm9sb2dpZXMgYW5kIGRpZmZlcmVudCB0YXNrcy4gTXkgc2tpbGxzIGluIG51bWVyb3VzIHRlY2hub2xvZ2llcyBzdWNoIGFzIFJlYWN0LCBSZWFjdCBOYXRpdmUsIEMjLCBhbmQgQW5ndWxhckpTIGNhbiBiZSBhIGdyZWF0IGFzc2V0IHRvIHlvdXIgb3JnYW5pemF0aW9uLldpdGggNSsgWWVhcnMgb2YgSW5kdXN0cnkgRXhwZXJpZW5jZScsXHJcbiAgICBocmVmOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvbm92aWdvLWluZHVzdHJpZXMvJ1xyXG4gICAgXHJcbn0sIFxyXG57XHJcbiAgICBhbHRUZXh0OiBcIkNFTy9MZWFkIEVuZ2luZWVyXCIsXHJcbiAgICB0aXRsZTogXCJDRU8vTGVhZCBFbmdpbmVlclwiLFxyXG4gICAgdGV4dDogYFxyXG4gICAgTWFuYWdlcyBhbmQgZGlyZWN0cyB0aGUgY29tcGFueSB0b3dhcmQgaXRzIHByaW1hcnkgZ29hbHMgYW5kIG9iamVjdGl2ZXMuXHJcbiAgICAgT3ZlcnNlZXMgZW1wbG95bWVudCBkZWNpc2lvbnMgYXQgdGhlIGV4ZWN1dGl2ZSBsZXZlbCBvZiB0aGUgY29tcGFueS5cclxuICAgICBSZXNwb25zaWJsZSBmb3IgZGVwbG95bWVudHMsIGNsZWFuIGFuZCBlZmZpY2llbnQgY29kZSBwcmFjdGljZXMsIHRlc3RpbmcsIGFuZCBtYWtpbmcgc3VyZSB0aGUgZmluYWwgcHJvZHVjdCBtZWV0cyBjb21wYW55IHN0YW5kYXJkcy5cclxuICAgICBSZWFkZXIgb2YgaGlzdG9yaWNhbCBub24tZmljdGlvbiBub3ZlbHMsIGxpc3RlbmVyIG9mIGRhbiBjYXJsaW4ncyBoYXJkY29yZSBoaXN0b3J5IHBvZGNhc3QsIHRyYXZlbCBsb3ZlciwgYW5kIGhhcnNoIGZvb2QgY3JpdGljLihBY2NvcmRpbmcgdG8gbXkgZnJpZW5kcyBhbmQgY29sbGVhZ3VlcylcclxuICAgIGAsXHJcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGktYWxoYWRkYWQvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1NyYzogbW8sXHJcbiAgICBhbHRUZXh0OiBcIkp1bmlvciBFbmdpbmVlclwiLFxyXG4gICAgdGl0bGU6IFwiSnVuaW9yIEVuZ2luZWVyL0JyYW5kIEFtYmFzc2Fkb3JcIixcclxuICAgIHRleHQ6IGBcclxuICAgICAgICBEcml2ZW4sIGFuZCBtb3RpdmF0ZWQgc29mdHdhcmUgZW5naW5lZXIgd2hvIGlzIGVhZ2VyIHRvIGNvbnRpbnVlIHRvIGxlYXJuLCBzb21lb25lIHdobyB3aWxsIGFwcGx5IG15IGtub3dsZWRnZSB0byBjcmVhdGUgZWZmaWNpZW50LCBhbmQgdmVyYm9zZSBhcHBsaWNhdGlvbnMuXHJcbiAgICAgICAgUmVzcG9uc2libGUgZm9yIHByb21vdGluZyBub3ZpZ28ncyBpbWFnZSBhbmQgc2VydmljZXMgb2ZmZXJlZC4gXHJcbiAgICAgICAgQXZpZCBiYXNrZXRiYWxsIHdhdGNoZXIgYW5kIGF0aGxldGUsIGxvdmVyIG9mIG11c2ljLCBhY3RpdmUgbGVhcm5lciBhbmQgY3VycmVudCBjb2xsZWdlIHN0dWRlbnQuXHJcbiAgICBgLFxyXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbW9oYW1hZC1hbGhhZGRhZC0wMDJhMzAxNjEvXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBHcmlkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24sIEltYWdlLCBMaW5rfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgeyBGYUxpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRVcygpe1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIC8vIHNldFZpZGVvT3Blbih0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBzeD17eyB2YXJhaW50OiAnc2VjdGlvbi5vdXItdGVhbScsIC4uLnN0eWxlcy5hYm91dHVzQ29udGFpbmVyfX0gaWQ9XCJvdXItdGVhbVwiPlxyXG4gICAgICAgICAgPGgxPk91ciBUZWFtPC9oMT5cclxuICAgICAgICAgIHtkYXRhLm1hcChkYXRhSXRlbSA9PiAoXHJcbiAgICAgICAgICAgIDxCb3gga2V5PXtkYXRhSXRlbS5pZH0gc3g9e3N0eWxlcy5hYm91dHVzU3ViQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhSXRlbS5pbWdTcmN9IGFsdD17ZGF0YUl0ZW0uYWx0VGV4dH0gc3g9e3N0eWxlcy5hYm91dHVzSW1nfSAvPlxyXG4gICAgICAgICAgICAgIDxoMj57ZGF0YUl0ZW0udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICA8cCBzeD17c3R5bGVzLmFib3V0dXN9PlxyXG4gICAgICAgICAgICAgICAge2RhdGFJdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxGYUxpbmtlZGluIHN0eWxlPXt7Y29sb3I6ICcjMDA3N0I1JywgZm9udFNpemU6ICcyZW0nfX0gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oZGF0YUl0ZW0uaHJlZiwgJ19ibGFuaycpfSAgLz5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICk7XHJcbn0iLCJjb25zdCBzdHlsZXMgPSB7XHJcbiAgICBhYm91dHVzQ29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHdpZHRoOiAnMTAwJSdcclxuICB9LFxyXG4gIGFib3V0dXNTdWJDb250YWluZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBhYm91dHVzOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnXHJcbiAgfSxcclxuICBhYm91dHVzSW1nOiB7XHJcbiAgICBoZWlnaHQ6ICcyMGVtJyxcclxuICAgIHdpZHRoOiAnMjBlbScsXHJcbiAgICBib3JkZXJTdHlsZTogJ2Rhc2hlZCcsXHJcbiAgICBwYWRkaW5nOiAnMWVtJyxcclxuICAgIGJvcmRlcldpZHRoOiBbJzAuMjVlbScsICcwLjNlbScsICcwLjM1ZW0nXSxcclxuICAgIGJvcmRlckNvbG9yOiAnIzBCNUZERCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnXHJcbiAgfSxcclxuICBzaGFwZUJveDoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIGJvdHRvbTogLTY4LFxyXG4gICAgbGVmdDogLTE2MCxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgICBkaXNwbGF5OiBbXCJub25lXCIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIFwiaW5saW5lLWJsb2NrXCJdLFxyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgd2lkdGg6IFtcIjEwMCVcIiwgbnVsbCwgbnVsbCwgMzE1LCAzOTAsIDQ1MCwgbnVsbCwgNTAwXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtYjogWzcsIG51bGwsIDYwLCAwXSxcclxuICAgIHRleHRBbGlnbjogW1wiY2VudGVyXCIsIG51bGwsIG51bGwsIFwibGVmdFwiXSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIHByOiBbMiwgMCwgbnVsbCwgbnVsbCwgNiwgXCI3MHB4XCJdLFxyXG4gICAgcGw6IFsyLCAwXSxcclxuICAgIHB0OiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICBteDogXCJhdXRvXCIsXHJcbiAgICB3aWR0aDogW1wiMTAwJVwiLCAzNzAsIDQyMCwgXCIxMDAlXCJdLFxyXG4gICAgZ3JpZEdhcDogW1wiMzVweCAwXCIsIG51bGwsIG51bGwsIG51bGwsIFwiNTBweCAwXCJdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1wicmVwZWF0KDEsMWZyKVwiXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXHJcbiAgfSxcclxuXHJcbiAgaWNvbjoge1xyXG4gICAgd2lkdGg6IFtcIjQ1cHhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCI1NXB4XCJdLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzMsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgIG10OiBcIi01cHhcIixcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAzLFxyXG4gICAgICBjb2xvcjogXCJoZWFkaW5nX3NlY29uZGFyeVwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCAzLCAyLCAzXSxcclxuICAgIH0sXHJcbiAgICBcIj4gc3BhblwiOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiLFxyXG4gICAgICAgIHdpZHRoOiBcImluaGVyaXRcIixcclxuICAgICAgICBoZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjVzXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIHpJbmRleDogMixcclxuICAgICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIFwiMTRweFwiLCAxXSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzOyIsImltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UsIEJ1dHRvbiwgVmlldyB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgRXhjZXJzaXNlIGZyb20gXCJhc3NldHMvZXhjZXJzaXNlLnBuZ1wiO1xyXG5pbXBvcnQgQmFubmVySW1nIGZyb20gXCJhc3NldHMvYmFubmVyLXRodW1iLnBuZ1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ29udGFjdFVzIGZyb20gXCJzZWN0aW9ucy9jb250YWN0LXVzL2luZGV4XCI7XHJcbmltcG9ydCBJbmRleFBhZ2UgZnJvbSBcInBhZ2VzL2luZGV4XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTY3JvbGxUb0JvdHRvbSBmcm9tIFwicmVhY3Qtc2Nyb2xsLXRvLWJvdHRvbVwiO1xyXG5pbXBvcnQgeyBGYUFsaWduQ2VudGVyLCBGYUJveCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lcih7IGNsYXNzTmFtZSwgY29udGFjdFVzUmVmIH0pIHtcclxuICAvLyBjb25zdCBTY3JvbGxCdXR0b24gPSAoKSA9PntcclxuXHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JvbGxlZCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoc2Nyb2xsZWQgPiAwKSB7XHJcbiAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JvbGxlZCA8PSAwKSB7XHJcbiAgICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAvKiB5b3UgY2FuIGFsc28gdXNlICdhdXRvJyBiZWhhdmlvdXIgXHJcbiAgICAgICAgIGluIHBsYWNlIG9mICdzbW9vdGgnICovXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWJsZSk7XHJcbiAgLy8gY29uc3QgY29udGFjdFVzUmVmZiA9IHVzZVJlZigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBzeD17c3R5bGVzLmJhbm5lcn1cclxuICAgICAgaWQ9XCJob21lXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMTBkZWcsICNFNThDMjIgNjAlLCAjMkFCREVDIDYwJSlcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiOGVtXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5iYW5uZXIuY29udGFpbmVyfT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHZhcmFpbnQ9XCJoZXJvUHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBUb3AgUXVhbGl0eSBTZXJ2aWNlcyB0byBFeHBsb3JlXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8VGV4dCBhcz1cInBcIiB2YXJpYW50PVwiaGVyb1NlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICBDaGVjayBvdXQgb3VyIFdlYnNpdGUgdG8gZmluZCBBbWF6aW5nIFNvZnR3YXJlIFByb2R1Y3RzIGFuZCBkZWFscyFcclxuICAgICAgICAgICAgSWYgeW91IG5lZWQgV2Vic2l0ZSwgQXBwbGljYXRpb24sIG9yIEV2ZW4gaGF2aW5nIFN0cnVnZ2xlcyBJbXByb3ZpbmdcclxuICAgICAgICAgICAgQ3VycmVudCBTb2Z0d2FyZSA/IFNlYXJjaCBubyBGdXJ0aGVyIEhlcmUgYXQgTm92aWdvIHdlIGFyZSBoZXJlIHRvXHJcbiAgICAgICAgICAgIFNlcnZlIVxyXG5cclxuICAgICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmF0ZV9fYnRuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDaGVjayBvdXQgb3VyIFJhdGVzXCJcclxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgICAgICBiZz1cIndoaXRlXCJcclxuICAgICAgICAgICAgcGFkZGluZz1cIjEuNWVtXCJcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPVxyXG4gICAgICAgICAgICAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFtcVRNMXhJMENrVUFjdC14aWlhRldyOXE0QXBqc0VnUGh2cmRFRF95b2RVL2VkaXQ/dXNwPXNoYXJpbmdfZWlsX3NlX2RtJnRzPTYyYzEyYTYxXCI7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICBDaGVjayBPdXIgUmF0ZXNcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICBcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L0JveD5cclxuICAgICAgXHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cclxuICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZG9uYXRlX19idG5cIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgIGJnPVwid2hpdGVcIlxyXG4gICAgICAgIGNvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkNvbnRhY3QgdXNcIlxyXG4gICAgICAgIHBhZGRpbmc9ICcxLjVlbSdcclxuICAgICAgICBsaW5lSGVpZ2h0PSAnMmVtJ1xyXG4gICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvQm90dG9tfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgXHJcbiAgIFxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgXHJcbiAgICAgXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgU2hhcGVMZWZ0IGZyb20gJ2Fzc2V0cy9zaGFwZS1sZWZ0LnBuZyc7XHJcbmltcG9ydCBTaGFwZVJpZ2h0IGZyb20gJ2Fzc2V0cy9zaGFwZS1yaWdodC5wbmcnO1xyXG5cclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYnV0dG9uczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgYmc6ICdjb2xvcicsXHJcbiAgICBtaW5XaWR0aDogMTIwLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgICBiYW5uZXI6IHtcclxuICAgICAgcHQ6IFsnMTQwcHgnLCAnMTQ1cHgnLCAnMTU1cHgnLCAnMTcwcHgnLCBudWxsLCBudWxsLCAnMTgwcHgnLCAnMjE1cHgnXSxcclxuICAgICAgcGI6IFsyLCBudWxsLCAwLCBudWxsLCAyLCAwLCBudWxsLCA1XSxcclxuICAgICAgbXQ6IFsnMTBlbSddLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgekluZGV4OiAyLFxyXG4gICAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgIGJvdHRvbTogNixcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIGhlaWdodDogJzMwZW0nLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICAgIHpJbmRleDogLTEsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIGxlZnQgMTBlbScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOjphZnRlcic6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgICAgYm90dG9tOiAnNDBweCcsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgekluZGV4OiAtMSxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZVJpZ2h0fSlgLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSByaWdodCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIG1pbkhlaWdodDogJ2luaGVyaXQnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgcHQ6ICcxMGVtJ1xyXG4gICAgICB9LFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICAvLyBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgLy8gLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgLy8gcGFkZGluZzogJzEuNWVtJyxcclxuICAgICAgICAvLyB0b3A6JzUwJScsXHJcbiAgICAgICAgLy8gYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgLy8gY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiAnMmVtICFpbXBvcnRhbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgIGNvbnRlbnRCb3g6IHtcclxuICAgICAgICB3aWR0aDogWycxMDAlJywgJzEwMCUnLCAnNTM1cHgnLCBudWxsLCAnNTclJywgJzYwJScsICc2OCUnLCAnNjAlJ10sXHJcbiAgICAgICAgbXg6ICdhdXRvJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIG1iOiBbJzQwcHgnLCAnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIDddLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWFnZUJveDoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgICAgbWI6IFswLCBudWxsLCAtNiwgbnVsbCwgbnVsbCwgJy00MHB4JywgbnVsbCwgLTNdLFxyXG4gICAgICAgIGltZzoge1xyXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICBoZWlnaHQ6IFsyNDUsICdhdXRvJ10sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzOyIsImltcG9ydCBBdmF0YXIxIGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMS5wbmdcIjtcclxuaW1wb3J0IEF2YXRhcjIgZnJvbSBcImFzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIyLnBuZ1wiO1xyXG5pbXBvcnQgQXZhdGFyMyBmcm9tIFwiYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nXCI7XHJcbmltcG9ydCBBdmF0YXI0IGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyNC5wbmdcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogXCJNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnblwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLlwiLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIxLFxyXG4gICAgbmFtZTogXCJEZW5ueSBIaWxndXN0b25cIixcclxuICAgIGRlc2lnbmF0aW9uOiBcIkBkZW5ueS5oaWxcIixcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiRGVzaWduIFF1YWxpdHkgJiBwZXJmb3JtYW5jZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLlwiLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIyLFxyXG4gICAgbmFtZTogXCJEZW5ueSBIaWxndXN0b25cIixcclxuICAgIGRlc2lnbmF0aW9uOiBcIkBkZW5ueS5oaWxcIixcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6IFwiTGF5b3V0IGFuZCBvcmdhbml6ZWQgbGF5ZXJzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuXCIsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjMsXHJcbiAgICBuYW1lOiBcIkRlbm55IEhpbGd1c3RvblwiLFxyXG4gICAgZGVzaWduYXRpb246IFwiQGRlbm55LmhpbFwiLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogXCJNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnblwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLlwiLFxyXG4gICAgYXZhdGFyOiBBdmF0YXI0LFxyXG4gICAgbmFtZTogXCJEZW5ueSBIaWxndXN0b25cIixcclxuICAgIGRlc2lnbmF0aW9uOiBcIkBkZW5ueS5oaWxcIixcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuIiwiaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJ1dHRvbiwgVGV4dCwgQm94LCBJbWFnZSwgU3Bpbm5lciB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gXCJjb21wb25lbnRzL3JhdGluZ1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcImNvbmZpZy5qc29uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dzKHByb3BzKSB7XHJcbiAgY29uc3QgW2Jsb2dUdXRvcmlhbHMsIHNldEJsb2dUdXRvcmlhbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRNZWRpdW1CbG9nRGF0YSgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJKU09OOlwiLCBjb25maWcpO1xyXG4gICAgICBjb25zdCBtZWRpdW1SZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLnJzczJqc29uLmNvbS92MS9hcGkuanNvbj9yc3NfdXJsPWh0dHBzOi8vbWVkaXVtLmNvbS9mZWVkL0BhbGlhbGhhZGRhZFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChtZWRpdW1SZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgc2V0QmxvZ1R1dG9yaWFscyhtZWRpdW1SZXNwb25zZS5kYXRhLml0ZW1zKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWVkaXVtQmxvZ0RhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLmJsb2dzQ29udGFpbmVyfSBpZD1cImJsb2dcIj5cclxuICAgICAgPGgxPkJsb2dzPC9oMT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmJsb2dUdXRvcmlhbHNDb250YWluZXJ9PlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPFNwaW5uZXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNWVtXCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNWVtXCIsXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJoZWlnaHQgZWFzZS1pbi1vdXQgNDAwXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBibG9nVHV0b3JpYWxzLm1hcCgoYmxvZ1R1dG9yaWFsLCBibG9nVHV0b3JpYWxJZHgpID0+IChcclxuICAgICAgICAgICAgPEJveCBrZXk9e2Jsb2dUdXRvcmlhbElkeH0gc3g9e3N0eWxlcy5ibG9nVHV0b3JpYWxDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxoNT57YmxvZ1R1dG9yaWFsLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzeD17c3R5bGVzLmJsb2dUdXRvcmlhbENvbnRhaW5lckltZ31cclxuICAgICAgICAgICAgICAgIHNyYz17YmxvZ1R1dG9yaWFsLnRodW1ibmFpbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHbyB0byBCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oYmxvZ1R1dG9yaWFsLmxpbmssIFwiX2JsYW5rXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEdvIHRvIE1lZGl1bVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgRGF0ZSBQdWJsaXNoZWQ6XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHtmb3JtYXQobmV3IERhdGUoYmxvZ1R1dG9yaWFsLnB1YkRhdGUpLCBcIk1NL2RkL3l5eXlcIil9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iLCJcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBibG9nc0NvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWF4SGVpZ2h0OiAnMzBlbScsXHJcbiAgfSxcclxuICBibG9nVHV0b3JpYWxzQ29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgbWluSGVpZ2h0OiAnMTBlbScsXHJcbiAgICBtYXhIZWlnaHQ6ICc2MGVtJyxcclxuICAgIG92ZXJmbG93WTogJ2F1dG8nLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBhZGRpbmdMZWZ0OiAgWycwcHgnLCAnMHB4JywgJzBweCddLFxyXG4gIH0sXHJcbiAgYmxvZ1R1dG9yaWFsQ29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIHBhZGRpbmdMZWZ0OiBbJzBweCcsICcwcHgnLCAnMHB4J10sXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgd2lkdGg6IFtcIjkwJVwiLCBcIjUwJVwiLCBcIjMxJVwiXSxcclxuICAgIG1hcmdpbjogJzAuNWVtJyxcclxuICAgIG1pbkhlaWdodDogXCIyMGVtXCIsXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGJveFNoYWRvdzogXCIwcHggMHB4IDFweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjM1KVwiLFxyXG4gICAgcDoge1xyXG4gICAgICBqdXN0aWZ5U2VsZjogJ2ZsZXgtZW5kJyxcclxuICAgICAgZm9udFNpemU6IFsnMC43ZW0nLCAnMC43ZW0nLCAnMC44ZW0nXVxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW46ICcxZW0nLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYmxvZ1R1dG9yaWFsQ29udGFpbmVySW1nOiB7XHJcbiAgICBtaW5IZWlnaHQ6ICcxMGVtJyxcclxuICAgIG1pbldpZHRoOiAnMTAwJScsXHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgaGVpZ2h0OiAnYXV0bydcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJ1dHRvbiwgQ29udGFpbmVyLCBCb3gsIElucHV0LCBUZXh0LCBUZXh0YXJlYSB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFQYXBlclBsYW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCBlbWFpbGpzIGZyb20gXCJAZW1haWxqcy9icm93c2VyXCI7XHJcblxyXG5jb25zdCBFcnJvclRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPFRleHQgc3g9e3N0eWxlcy5lcnJvclRleHR9PntjaGlsZHJlbn08L1RleHQ+XHJcbik7XHJcblxyXG5jb25zdCBDb250YWN0VXMgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2hvd1Jlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbnRhY3RVc0Zvcm0sIHNldENvbnRhY3RVc0Zvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBwaG9uZU51bWJlcjogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzZW5kRW1haWwgPSAoZm9ybSkgPT4ge1xyXG4gICAgZW1haWxqc1xyXG4gICAgICAuc2VuZEZvcm0oXHJcbiAgICAgICAgXCJzZXJ2aWNlX2hrd2Zob3JcIixcclxuICAgICAgICBcInRlbXBsYXRlX2MwY3V0OGlcIixcclxuICAgICAgICBmb3JtLFxyXG4gICAgICAgIFwibHAzbjljMTJrSDU5QzY1YWhcIlxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHNldENvbnRhY3RVc0Zvcm0oZm9ybSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICBzaG93UmVzdWx0KHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaW5wdXRTdHlsZXMgPSAoZXJyb3IpID0+IHtcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIHsgLi4uc3R5bGVzLmlucHV0LCAuLi5zdHlsZXMuZXJyb3JJbnB1dCB9O1xyXG4gICAgcmV0dXJuIHN0eWxlcy5pbnB1dDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUsIHNldEZpZWxkVmFsdWUpID0+IHtcclxuICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgc2V0RmllbGRWYWx1ZShlLnRhcmdldC5pZCwgZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIGlkPVwiY29udGFjdC11c1wiXHJcbiAgICAgIHN4PXt7IHZhcmlhbnQ6IFwic2VjdGlvbi5jb250YWN0VXNcIiwgLi4uc3R5bGVzLmNvbnRhaW5lciB9fVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogY29udGFjdFVzRm9ybS5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBjb250YWN0VXNGb3JtLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogY29udGFjdFVzRm9ybS5waG9uZU51bWJlcixcclxuICAgICAgICAgICAgZW1haWw6IGNvbnRhY3RVc0Zvcm0uZW1haWwsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFsaWRhdGU9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlcy5maXJzdE5hbWUpIGVycm9ycy5maXJzdE5hbWUgPSBcIkZpcnN0IG5hbWUgaXMgcmVxdWlyZWRcIjtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZXMubGFzdE5hbWUpIGVycm9ycy5sYXN0TmFtZSA9IFwiTGFzdCBuYW1lIGlzIHJlcXVpcmVkXCI7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWVzLmVtYWlsKSBlcnJvcnMuZW1haWwgPSBcIkVtYWlsIGlzIHJlcXVpcmVkXCI7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAhdmFsdWVzLmVtYWlsLm1hdGNoKFxyXG4gICAgICAgICAgICAgICAgL14oW0EtWmEtejAtOV9cXC1cXC5dKStcXEAoW0EtWmEtejAtOV9cXC1cXC5dKStcXC4oW0EtWmEtel17Miw0fSkkL1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9IFwiUHJvdmlkZSBhIHZhbGlkIGVtYWlsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0VmFsdWVzLCBzZXRJc1N1Ym1pdHRpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgc2VuZEVtYWlsKHZhbHVlcyk7XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyh2YWx1ZXMpO1xyXG4gICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHNldEZpZWxkVmFsdWUsIGhhbmRsZVN1Ym1pdCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGZvcm0gc3g9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+UmVhY2ggT3V0IHRvIFVzITwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaW5wdXRDb250YWluZXI1MH0+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuaW5wdXRDb250YWluZXI1MFRleHR9PkZpcnN0IE5hbWUgKjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e2lucHV0U3R5bGVzKGVycm9ycy5maXJzdE5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUsIHNldEZpZWxkVmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEVycm9yVGV4dD57ZXJyb3JzLmZpcnN0TmFtZSAmJiBlcnJvcnMuZmlyc3ROYW1lfTwvRXJyb3JUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaW5wdXRDb250YWluZXI1MH0+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuaW5wdXRDb250YWluZXI1MFRleHR9Pkxhc3QgTmFtZSAqPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBzeD17aW5wdXRTdHlsZXMoZXJyb3JzLmxhc3ROYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVJbnB1dENoYW5nZShlLCBzZXRGaWVsZFZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEVycm9yVGV4dD57ZXJyb3JzLmxhc3ROYW1lICYmIGVycm9ycy5sYXN0TmFtZX08L0Vycm9yVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmlucHV0Q29udGFpbmVyNTB9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmlucHV0Q29udGFpbmVyNTBUZXh0fT5QaG9uZSBOdW1iZXI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSwgc2V0RmllbGRWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5waG9uZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBob25lTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbnB1dENvbnRhaW5lcjUwfT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5pbnB1dENvbnRhaW5lcjUwVGV4dH0+RW1haWwgKjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e2lucHV0U3R5bGVzKGVycm9ycy5lbWFpbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSwgc2V0RmllbGRWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEVycm9yVGV4dD57ZXJyb3JzLmVtYWlsICYmIGVycm9ycy5lbWFpbH08L0Vycm9yVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnRleHRBcmVhQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5pbnB1dENvbnRhaW5lcjUwVGV4dH0+TWVzc2FnZTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy50ZXh0QXJlYX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiaGVsbG9cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuc3VibWl0QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlbmQgTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTZW5kIE1lc3NhZ2UgPEZhUGFwZXJQbGFuZSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJyb3dcIj57cmVzdWx0ID8gPFJlc3VsdCAvPiA6IG51bGx9PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFVzO1xyXG4iLCJjb25zdCBzdHlsZXMgPSB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICB3aWR0aDogJzExMCUnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICcwJyxcclxuICAgIH0sXHJcbiAgICBjb250YWluZXJCb3g6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzAnXHJcbiAgICB9LFxyXG4gICAgZXJyb3JUZXh0OiB7XHJcbiAgICAgICAgY29sb3I6ICcjZmYzMzMzJ1xyXG4gICAgfSxcclxuICAgIGVycm9ySW5wdXQ6IHtcclxuICAgICAgICBib3JkZXI6ICdzb2xpZCAycHhcdCNmZjMzMzMnLFxyXG4gICAgICAgICcmOjpwbGFjZWhvbGRlcic6IHtcclxuICAgICAgICAgICAgY29sb3I6ICcjZmYzMzMzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXNJbnB1dFBsYWNlaG9sZGVyQ29sb3I6ICcjZmYzMzMzJ1xyXG4gICAgfSxcclxuICAgIGZvcm06IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnMCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXHJcbiAgICB9LFxyXG4gICAgaW5wdXRDb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dENvbnRhaW5lcjUwOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIG1hcmdpblRvcDogJzEuNWVtJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICB3aWR0aDogWyc5MCUnLCAnNDclJywgJzQ3JSddLFxyXG4gICAgfSxcclxuICAgIGlucHV0Q29udGFpbmVyNTBUZXh0OiB7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjJlbSdcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgICAgc3dlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwKScsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzEuMjE0Mjg1NzFlbScsXHJcbiAgICAgICAgcGFkZGluZzogJy42Nzg1NzE0M2VtIDFlbScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDM0LDM2LDM4LC4xNSknLFxyXG4gICAgICAgIGNvbG9yOiAncmdiYSgwLDAsMCwuODcpJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcuMjg1NzE0MjlyZW0nLFxyXG4gICAgICAgIHdlYmtpdFRyYW5zaXRpb246ICdib3JkZXItY29sb3IgLjFzIGVhc2UsLXdlYmtpdC1ib3gtc2hhZG93IC4xcyBlYXNlJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIC4xcyBlYXNlLC13ZWJraXQtYm94LXNoYWRvdyAuMXMgZWFzZScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgLjFzIGVhc2UsYm9yZGVyLWNvbG9yIC4xcyBlYXNlJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAuMXMgZWFzZSxib3JkZXItY29sb3IgLjFzIGVhc2UsLXdlYmtpdC1ib3gtc2hhZG93IC4xcyBlYXNlJyxcclxuICAgICAgICB3ZWJraXRCb3hTaGFkb3c6ICdub25lJyxcclxuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICB0ZXh0QXJlYUNvbnRhaW5lcjoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTVlbScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMS41ZW0nLFxyXG4gICAgfSxcclxuICAgIHRleHRBcmVhOiB7XHJcbiAgICAgICAgcmVzaXplOiAnbm9uZScsXHJcbiAgICAgICAgZm9udEZhbWlseTogJ1BvcHBpbnMsIHNhbnMtc2VyaWYnLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdEJ1dHRvbjoge1xyXG4gICAgICAgIGJnOiAnIzRCQjU0MycsXHJcbiAgICAgICAgcGFkZGluZzogJzFlbSAhaW1wb3J0YW50JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHggIWltcG9ydGFudCdcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlczsiLCJcclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogJ0NvcmUgZmVhdHVyZXMnLFxyXG4gIHRpdGxlOiAnU21hcnQgSmFja3BvdHMgdGhhdCB5b3UgbWF5IGxvdmUgdGhpcyBhbnl0aW1lICYgYW55d2hlcmUnLFxyXG4gIGRlc2NyaXB0aW9uOlxyXG4gICAgJ0dldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cyB0aGF0IHN1cHBsaWVzIGJlc3QgZGVzaWduIHN5c3RlbSBndWlkZWxpbmVzIGV2ZXIuJyxcclxuICBidG5OYW1lOiAnR2V0IFN0YXJ0ZWQnLFxyXG4gIGJ0blVSTDogJyMnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YTsiLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5pbXBvcnQgRmVhdHVyZVRodW1iIGZyb20gJ2Fzc2V0cy9jb3JlLWZlYXR1cmUucG5nJztcclxuaW1wb3J0IHNoYXBlUGF0dGVybiBmcm9tICdhc3NldHMvc2hhcGUtcGF0dGVybjIucG5nJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29yZUZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgPHNlY3Rpb24gc3g9e3t2YXJpYW50OiAnc2VjdGlvbi5jb3JlRmVhdHVyZSd9fT5cclxuICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XHJcbiAgICAgICAgPGgxPlByb3ZpZGluZyBzb2x1dGlvbnMgdG8ga2VlcCBvdXIgY3VzdG9tZXJzIGhhcHB5LjwvaDE+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtGZWF0dXJlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiIC8+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnNoYXBlQm94fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3NoYXBlUGF0dGVybn0gYWx0PVwiU2hhcGVcIi8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG4iLCJjb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxyXG4gICAgcGI6IFswLCA3LCAwLCBudWxsLCA3XSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBweDogWzAsIG51bGwsICczMHB4JywgMF0sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgbnVsbCwgMzQwLCA0MDAsIDQzMCwgbnVsbCwgNDg1XSxcclxuICAgIHBiOiBbJzUwcHgnLCAnNjBweCcsIG51bGwsIDBdLFxyXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgJy5kZXNjcmlwdGlvbic6IHtcclxuICAgICAgcHI6IFswLCBudWxsLCA2LCA3LCA2XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1yOiAnYXV0bycsXHJcbiAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgN10sXHJcbiAgICAnPiBpbWcnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIGhlaWdodDogWzMxMCwgJ2F1dG8nXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzaGFwZUJveDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206IC02NSxcclxuICAgIHJpZ2h0OiAtMTY1LFxyXG4gICAgekluZGV4OiAtMSxcclxuICAgIGRpc3BsYXk6IFsnbm9uZScsICdpbmxpbmUtYmxvY2snLCAnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzOyIsImltcG9ydCBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYXRlcygpe1xyXG4gICAgXHJcbiAgICBjb25zdCB0YXJnZXRCdWRnZXQgPSBOdW1iZXIod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFyZ2V0QnVkZ2V0XCIpIHx8IDIwMDApO1xyXG4gICAgY29uc3QgY3VycmVudEJ1ZGdldCA9IE51bWJlcih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50QnVkZ2V0XCIpIHx8IDQwMDApO1xyXG4gICAgY29uc3QgbWFpbnRhbmNlQnVkZ2V0ID0gTnVtYmVyKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1haW50YW5jZUJ1ZGdldFwiKSB8fCAxMDApO1xyXG4gICAgY29uc3QgQ29udHJpYnV0aW9uRnJlcXVlbmN5ID0gTnVtYmVyKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbnRyaWJ1dGlvbkZyZXF1ZW5jeVwiKSB8fCBcIk1vbnRobHlcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0RHVyYXRpb24gPSBOdW1iZXIod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdER1cmF0aW9uXCIpIHx8IDIpO1xyXG5cclxuICAgIGNvbnN0IFtwcm9qRHVyYXRpb24sIHNldFByb2pEdXJhdGlvbl0gPSB1c2VTdGF0ZShwcm9qZWN0RHVyYXRpb24pO1xyXG4gICAgY29uc3QgW3RhcmdCdWRnZXQsIHNldFRhcmdCdWRnZXRdID0gdXNlU3RhdGUodGFyZ2V0QnVkZ2V0KTtcclxuICAgIGNvbnN0IFtjdXJCdWRnZXQsIHNldEN1ckJ1ZGdldF0gPSB1c2VTdGF0ZShjdXJyZW50QnVkZ2V0KTtcclxuICAgIGNvbnN0IFttYWluQnVkZ2V0LCBzZXRNYWluQnVkZ2V0XSA9IHVzZVN0YXRlKG1haW50YW5jZUJ1ZGdldCk7XHJcbiAgICBjb25zdCBbY29udHJpYnV0ZUZyZXF1ZW5jeSwgc2V0Q29udHJpYnV0ZUZyZXF1ZW5jeV0gPSB1c2VTdGF0ZShDb250cmlidXRpb25GcmVxdWVuY3kpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xyXG4gICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICAgICAgY3VycmVuY3k6IFwiVVNEXCIsXHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhcmdldEJ1ZGdldFwiLCB0YXJnQnVkZ2V0KTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50QnVkZ2V0XCIsIGN1ckJ1ZGdldCk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWFpbnRhbmNlQnVkZ2V0XCIsIG1haW5CdWRnZXQpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbnRyaWJ1dGlvbkZyZXF1ZW5jeVwiLCBjb250cmlidXRlRnJlcXVlbmN5KTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0RHVyYXRpb25cIiwgcHJvakR1cmF0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgRXN0aW1hdGUgPSAoIGN1ckJ1ZGdldCArIGNvbnRyaWJ1dGVGcmVxdWVuY3kgKyAobWFpbkJ1ZGdldCAqIHByb2pEdXJhdGlvbikpO1xyXG5cclxuICAgICAgICBsZXQgdXBkYXRlZENvc3QgPSAodGFyZ2V0QnVkZ2V0ICsgRXN0aW1hdGUpIC8gMjtcclxuXHJcbiAgICAgICAgc2V0VGFyZ0J1ZGdldCh1cGRhdGVkQ29zdCk7XHJcblxyXG5cclxuICAgIH0sICBbdGFyZ2V0QnVkZ2V0LCBjdXJyZW50QnVkZ2V0LCBDb250cmlidXRpb25GcmVxdWVuY3ksIHByb2plY3REdXJhdGlvbiwgbWFpbkJ1ZGdldF0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlc1wiPlxyXG4gICAgICAgICAgICA8aDE+Tm92aWdvIFNlcnZpY2UgQ2FsY3VsYXRvciA8L2gxPlxyXG4gICAgICAgICAgICA8aDI+R2V0IEFuIEVzdGltYXRlIGZvciBZb3VyIFZpc29uIXtwcm9qZWN0RHVyYXRpb259PC9oMj5cclxuICAgICAgICAgICAgPGRpdj5UYXJnZXQgUHJvZHVjdCBCdWRnZXQ6IHtmb3JtYXRlci5mb3JtYXQodGFyZ2V0QnVkZ2V0KX08L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYnVkZ2V0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBDdXJyZW50IEJ1ZGdldFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2N1cnJlbnRCdWRnZXR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VyQnVkZ2V0KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB8fCAwKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBNYWludGFuY2UgQnVkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17bWFpbnRhbmNlQnVkZ2V0fSBvbkNoYW5nZT17KGUpPT4gIHNldE1haW5CdWRnZXQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIHx8IDApfS8+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnRyaWJ1dGlvbiBGcmVxdWVuY3lcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtDb250cmlidXRpb25GcmVxdWVuY3l9IG9uQ2hhbmdlPXsoZSk9PiAgc2V0Q29udHJpYnV0ZUZyZXF1ZW5jeShwYXJzZUludChlLnRhcmdldC52YWx1ZSkgfHwgMCl9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3Byb2plY3REdXJhdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9qRHVyYXRpb24ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIHx8IDApfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtb250aGx5XCI+TW9udGhseTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwieWVhcmx5XCI+WWVhcmx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59IiwiY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYnVkZ2V0Rm9ybToge1xyXG4gICAgLy8gZGlzcGxheTogZmxleCxcclxuICAgIC8vIGZsZXhkaXJlY3Rpb246IGNvbHVtbixcclxuICAgIC8vIGFsaWduaXRlbXM6IGZsZXgtc3RhcnQsXHJcbn0sXHJcbn0iLCJpbXBvcnQgc2hhcGVQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMS5wbmcnO1xyXG5cclxuaW1wb3J0IG5vZGUgZnJvbSAnYXNzZXRzL3NlcnZpY2VzL25vZGVqcy5wbmcnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnYXNzZXRzL3NlcnZpY2VzL3JlYWN0LnBuZyc7XHJcbmltcG9ydCBzaG9waWZ5IGZyb20gJ2Fzc2V0cy9zZXJ2aWNlcy9zaG9waWZ5LnBuZyc7XHJcbmltcG9ydCB3b3JkcHJlc3MgZnJvbSAnYXNzZXRzL3NlcnZpY2VzL3dvcmRwcmVzcy5wbmcnO1xyXG5pbXBvcnQgYmxvY2tjaGFpbiBmcm9tICdhc3NldHMvc2VydmljZXMvYmxvY2tjaGFpbi5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogbm9kZSxcclxuICAgIGFsdFRleHQ6ICdOb2RlIEpTJyxcclxuICAgIHRpdGxlOiAnTm9kZSBKUyBTZXJ2ZXIgU2lkZSBEZXZlbG9wbWVudCcsXHJcbiAgICB0ZXh0OiBgXHJcbiAgICAgIE9yY2hlc3RyYXRlIHNlcnZlci1zaWRlIG5vZGUuanMgZGV2ZWxvcG1lbnQgdGhhdCBpcyBlZmZpY2llbnQgYW5kIHBlcmZvcm1hbnQgdGhhdCB3b3VsZCBoYW5kbGUgaW5jb21pbmcgdHJhZmZpYyB0byBtYWtlIHlvdXIgYXBwbGljYXRpb24gaGlnaGx5IGF2YWlsYWJsZS4gXHJcbiAgICAgIFdlIHdpbGwgYnVpbGQgYSBzdGFibGUgYXBwbGljYXRpb24gdGhhdCBpcyBlYXNpbHkgbWFpbnRhaW5hYmxlIGZvciBmdXR1cmUgZGV2ZWxvcG1lbnQgb24gbmV3IGZlYXR1cmVzLiBcclxuICAgICAgRm9sbG93IGJlc3Qgc2VjdXJpdHkgcHJhY3RpY2VzIGFuZCBjcnlwdG9ncmFwaHkgdG8ga2VlcCB5b3VyIGFwcGxpY2F0aW9ucyBzZWN1cmUuXHJcbiAgICAgIEltcHJvdmUgZXhpc3Rpbmcgbm9kZS5qcyBhcHBsaWNhdGlvbnMgdG8gYmUgbWFpbnRhaW5hYmxlIGFuZCBkb2N1bWVudGVkIGZvciBkZXZlbG9wZXIgdHJhaW5pbmcuIEZpeCBzZWN1cml0eSB2dWxuZXJhYmlsaXRpZXMgaW4gZXhpc3RpbmcgYXBwbGljYXRpb25zLiBJbXBsZW1lbnQgbWlub3IgdGVzdGluZyBvciB1c2UgdGVzdCBkcml2ZW4gZGV2ZWxvcG1lbnQgdG8gZW5zdXJlIHlvdSBoYXZlIGEgc3VpdGUgdGhhdCB3aWxsIG1ha2Ugc3VyZSBuZXcgZmVhdHVyZXMgd2lsbCB3b3JrIDk5JSBvZiB0aW1lLlxyXG4gICAgYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiByZWFjdCxcclxuICAgIGFsdFRleHQ6ICdSZWFjdCcsXHJcbiAgICB0aXRsZTogJ1JlYWN0IENsaWVudCBTaWRlIERldmVsb3BtZW50JyxcclxuICAgIHRleHQ6IGBcclxuICAgICAgT3VyIHRlYW0gd291bGQgYnVpbGQgbW9kZXJuIHNpbmdsZSBwYWdlIGFwcHMgdGhhdCB3b3VsZCBpbXByb3Zpc2UgYXBwbGljYXRpb24gcGVyZm9ybWFuY2UuIFxyXG4gICAgICBJbXBsZW1lbnQgYmVzdCBwcmFjdGljZXMgdG8gZW5zdXJlIHlvdXIgc2luZ2xlIHBhZ2UgYXBwIGlzIG1haW50YWluYWJsZSBhbmQgZXhwYW5kYWJsZS4gXHJcbiAgICAgIEFsbG93aW5nIHRoZSBmdXR1cmUgZGV2ZWxvcG1lbnQgb24gbmV3IGZlYXR1cmVzIGVhc2llciBhbmQgcXVpY2tlci4gXHJcbiAgICAgIEltcGxlbWVudCB0eXBlc2NyaXB0IHRvIGVuc3VyZSBzdHJvbmdseSB0eXBlZCBwcm9wcyBmb3IgVUkgY29tcG9uZW50cy5cclxuICAgIGBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1nU3JjOiBzaG9waWZ5LFxyXG4gICAgYWx0VGV4dDogJ1Nob3BpZnknLFxyXG4gICAgdGl0bGU6ICdTaG9waWZ5IENsaWVudCBTaWRlIERldmVsb3BtZW50JyxcclxuICAgIHRleHQ6IGBcclxuICAgICAgRGV2ZWxvcCBpbnRlcmFjdGl2ZSBhbmQgY29tcGV0ZW50IGUtY29tbWVyY2Ugc3RvcmVzIHRoYXQgd291bGQgZHJpdmUgc2FsZXMgYW5kIHJldmVudWUuIFxyXG4gICAgICBXZSB1c2UgYSB2YXJpZXR5IG9mIHBsdWdpbnMgdG8gaW1wcm92ZSBzZWFyY2ggZW5naW5lIG9wdGltaXphdGlvbiwgYW5kIGEgYWVzdGhldGljIHRoYXQgd291bGQgYnJpbmcgbW9yZSBjdXN0b21lcnMgdG8geW91ciBzaXRlLiBcclxuICAgICAgT3VyIHRlYW0gd2lsbCBlZGl0IGV4aXN0aW5nIHNob3BpZnkgdGhlbWVzIHRoYXQgY3VycmVudGx5IGluIHVzZSB0byBmb2xsb3cgdWkvdXggYmVzdCBwcmFjdGljZXMgdG8gYnJpbmcgbW9yZSB0cmFmZmljLlxyXG4gICAgYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWdTcmM6IHdvcmRwcmVzcyxcclxuICAgIGFsdFRleHQ6ICdXb3JkUHJlc3MnLFxyXG4gICAgdGl0bGU6ICdXb3JkUHJlc3MgQ2xpZW50IFNpZGUgRGV2ZWxvcG1lbnQnLFxyXG4gICAgdGV4dDogYFxyXG4gICAgICBPdXIgdGVhbSB3aWxsIGRlc2lnbiBhbmQgaW1wbGVtZW50IGFlc3RoZXRpY2FsbHkgcGxlYXNpbmcgd2Vic2l0ZXMuIFxyXG4gICAgICBJbXBsZW1lbnQgcGx1Z2lucyBhbmQgdGhlbWVzIHRvIGJvb3N0IHdlYnNpdGUgc2FsZXMgYW5kIHVzZXIgdHJhZmZpYy4gXHJcbiAgICAgIFVzZSBzZWFyY2ggZW5naW5lIG9wdGltaXphdGlvbiB0byBnZXQgbW9yZSB1c2VycyB2aXNpdGluZyB5b3VyIHNpdGUuXHJcbiAgICBgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBpbWdTcmM6IGJsb2NrY2hhaW4sXHJcbiAgICBhbHRUZXh0OiAnQmxvY2tjaGFpbicsXHJcbiAgICB0aXRsZTogJ0Jsb2NrY2hhaW4gRGV2ZWxvcG1lbnQnLFxyXG4gICAgdGV4dDogYFxyXG4gICAgICBJbXBsZW1lbnQgdGhlIGFiaWxpdHkgZm9yIHlvdXIgYXBwbGljYXRpb24gdG8gdXNlIGEgZGlnaXRhbCBzaGFyZWQgbGVkZ2VyIHRvIHN0b3JlIHRyYW5zYWN0aW9ucy5cclxuICAgICAgSW50ZWdyYXRlIHRoaXJkLXBhcnR5IGFwaSdzIHN1Y2ggYXMgRlRYIHRvIHBsYWNlIG9yZGVycyBvbiBkZWNlbnRyYWxpemVkIGV4Y2hhbmdlcy5cclxuICAgICAgVXNlIHNvbGlkaXR5IHRvIGNyZWF0ZSBkYXBwJ3MoRGVjZW50cmFsaXplZCBBcHBsaWNhdGlvbnMpIHRvIHN0b3JlZCBkZXRhaWxzIG9uIHRoZSBldGhlcmV1bSBibG9ja2NoYWluLlxyXG4gICAgYCxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEdyaWQsIFRleHQsIEhlYWRpbmcsIEJ1dHRvbiwgSW1hZ2UsICB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XHJcblxyXG5pbXBvcnQgU2VydmljZVRodW1iIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLXRodW1iLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgICAvLyBzZXRWaWRlb09wZW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBzeD17eyB2YXJhaW50OiAnc2VjdGlvbi5zZXJ2aWNlcycsIC4uLnN0eWxlcy5zZXJ2aWNlc0NvbnRhaW5lcn19IGlkPVwic2VydmljZXNcIj5cclxuICAgICAgICB7ZGF0YS5tYXAoZGF0YUl0ZW0gPT4gKFxyXG4gICAgICAgICAgPEJveCBrZXk9e2RhdGFJdGVtLmlkfSBzeD17c3R5bGVzLnNlcnZpY2VzU3ViQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17ZGF0YUl0ZW0uaW1nU3JjfSBhbHQ9e2RhdGFJdGVtLmFsdFRleHR9IHN4PXtzdHlsZXMuc2VydmljZUltZ30gLz5cclxuICAgICAgICAgICAgPGgyPntkYXRhSXRlbS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8cCBzeD17c3R5bGVzLnNlcnZpY2V9PlxyXG4gICAgICAgICAgICAgIHtkYXRhSXRlbS50ZXh0fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbiAgIiwiaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcblxyXG5jb25zdCBwbGF5UGx1c2UgPSBrZXlmcmFtZXNgXHJcbmZyb20ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxudG8ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMS41KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29yZUZlYXR1cmU6IHtcclxuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFtcImZsZXgtc3RhcnRcIiwgbnVsbCwgbnVsbCwgXCJjZW50ZXJcIl0sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogW1wiZmxleC1zdGFydFwiLCBudWxsLCBudWxsLCBcInNwYWNlLWJldHdlZW5cIl0sXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbXCJjb2x1bW5cIiwgbnVsbCwgbnVsbCwgXCJyb3dcIl0sXHJcbiAgICBwYjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDddLFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsOiB7XHJcbiAgICBtcjogW1wiYXV0b1wiLCBudWxsLCBudWxsLCA2LCA2MCwgODVdLFxyXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcclxuICAgIG1sOiBbXCJhdXRvXCIsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIFwiPiBpbWdcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIGhlaWdodDogWzMxMCwgXCJhdXRvXCJdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlcnZpY2VzQ29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHdpZHRoOiAnMTAwJSdcclxuICB9LFxyXG4gIHNlcnZpY2VzU3ViQ29udGFpbmVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgc2VydmljZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJ1xyXG4gIH0sXHJcbiAgc2VydmljZUltZzoge1xyXG4gICAgbWF4V2lkdGg6JzMwZW0nLFxyXG4gICAgbWF4SGVpZ2h0OicyNWVtJyxcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICB9LFxyXG4gIHNoYXBlQm94OiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgYm90dG9tOiAtNjgsXHJcbiAgICBsZWZ0OiAtMTYwLFxyXG4gICAgekluZGV4OiAtMSxcclxuICAgIGRpc3BsYXk6IFtcIm5vbmVcIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgXCJpbmxpbmUtYmxvY2tcIl0sXHJcbiAgfSxcclxuICB2aWRlb0J0bjoge1xyXG4gICAgekluZGV4OiAyLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgICB3aWR0aDogW1wiNjBweFwiLCBudWxsLCBcIjgwcHhcIiwgbnVsbCwgXCIxMDBweFwiXSxcclxuICAgIGhlaWdodDogW1wiNjBweFwiLCBudWxsLCBcIjgwcHhcIiwgbnVsbCwgXCIxMDBweFwiXSxcclxuICAgIHA6IFwiMHB4ICFpbXBvcnRhbnRcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgXCImOjpiZWZvcmVcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgIHdpZHRoOiBbXCI2MHB4XCIsIG51bGwsIFwiODBweFwiLCBudWxsLCBcIjEwMHB4XCJdLFxyXG4gICAgICBoZWlnaHQ6IFtcIjYwcHhcIiwgbnVsbCwgXCI4MHB4XCIsIG51bGwsIFwiMTAwcHhcIl0sXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgYW5pbWF0aW9uOiBgJHtwbGF5UGx1c2V9IDEuNXMgZWFzZS1vdXQgaW5maW5pdGVgLFxyXG4gICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICB9LFxyXG4gICAgXCI+IHNwYW5cIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIsXHJcbiAgICAgIHdpZHRoOiBcImluaGVyaXRcIixcclxuICAgICAgaGVpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuNXNcIixcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICB6SW5kZXg6IDIsXHJcbiAgICB9LFxyXG4gICAgc3ZnOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbNDAsIG51bGwsIDQ4LCBudWxsLCA2Ml0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudEJveDoge1xyXG4gICAgd2lkdGg6IFtcIjEwMCVcIiwgbnVsbCwgbnVsbCwgMzE1LCAzOTAsIDQ1MCwgbnVsbCwgNTAwXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtYjogWzcsIG51bGwsIDYwLCAwXSxcclxuICAgIHRleHRBbGlnbjogW1wiY2VudGVyXCIsIG51bGwsIG51bGwsIFwibGVmdFwiXSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIHByOiBbMiwgMCwgbnVsbCwgbnVsbCwgNiwgXCI3MHB4XCJdLFxyXG4gICAgcGw6IFsyLCAwXSxcclxuICAgIHB0OiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICBteDogXCJhdXRvXCIsXHJcbiAgICB3aWR0aDogW1wiMTAwJVwiLCAzNzAsIDQyMCwgXCIxMDAlXCJdLFxyXG4gICAgZ3JpZEdhcDogW1wiMzVweCAwXCIsIG51bGwsIG51bGwsIG51bGwsIFwiNTBweCAwXCJdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1wicmVwZWF0KDEsMWZyKVwiXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXHJcbiAgfSxcclxuXHJcbiAgaWNvbjoge1xyXG4gICAgd2lkdGg6IFtcIjQ1cHhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCI1NXB4XCJdLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzMsIG51bGwsIG51bGwsIG51bGwsIDRdLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgIG10OiBcIi01cHhcIixcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAzLFxyXG4gICAgICBjb2xvcjogXCJoZWFkaW5nX3NlY29uZGFyeVwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCAzLCAyLCAzXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCBcIjE0cHhcIiwgMV0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogMS45LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHZpZGVvV3JhcHBlcjoge1xyXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHdpZHRoOiBcIjkwMHB4XCIsXHJcbiAgICBcIiY6YmVmb3JlXCI6IHtcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IFwiNTYuMjUlXCIsXHJcbiAgICB9LFxyXG4gICAgaWZyYW1lOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xyXG4iLCJcclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnQ29tbXVuaWNhdGUgd2l0aCBDbGllbnQnLFxyXG4gICAgdGV4dDogJ0NvbW11bmljYXRlIHdpdGggY2xpZW50IHRvIHJldHJpZXZlIGluaXRpYWwgcmVxdWlyZW1lbnRzIG9uIGhvdyB0byBpbXByb3ZlIHlvdXIgY3VycmVudCBwcm9qZWN0IG9yIGNyZWF0ZSBhIG5ldyBwcm9qZWN0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0NvbnRyYWN0JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdEZXRlcm1pbmUgVGltZWxpbmUgT24gV2hlbiB5b3VyIGxvb2tpbmcgZm9yIHNlcnZpY2VzIHRvIGJlIGNvbXBsZXRlbHkgbWV0LCBhbmQgYXNzZXNzIENvc3Qgb2YgU2VydmljZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnQ29uc3RhbnQgQ29tbXVuaWNhdGlvbicsXHJcbiAgICB0ZXh0OlxyXG4gICAgICBcIkNvbnN0YW50IGNvbW11bmljYXRpb24gdG8gZW5zdXJlIHRoZSBjdXN0b21lciBnZXQncyBiZXN0IHByb2plY3QgcG9zc2libGUuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiAnTm92aWdvIHJlY2VpdmVzIGZ1bmRzIHBheW1lbnQnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0F0IExlYXN0IDEwJSBvZiBwcm9wb3NhbCB3aWxsIGJlIHBhaWQgdXBmcm9udCB0byBzZXJ2ZSBhcyBhIHJldGFpbmVyIGZvciBhbnkgY2xvdWQgc2VydmljZSBjb3N0IGluY3VycmVkIHVwb24gY29tcGwnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhOyIsImltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBXb3JrZmxvdyBmcm9tICdhc3NldHMvd29ya2Zsb3cvd29ya2Zsb3cucG5nJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMud29ya2Zsb3d9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e1dvcmtmbG93fSBhbHQ9J3dvcmtmbG93JyBzeD17c3R5bGVzLndvcmtmbG93SW1nfSAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XHJcbmltcG9ydCBBcnJvd09kZCBmcm9tICdhc3NldHMvYXJyb3dPZGQuc3ZnJztcclxuaW1wb3J0IEFycm93RXZlbiBmcm9tICdhc3NldHMvYXJyb3dFdmVuLnN2Zyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd29ya2Zsb3c6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICB9LFxyXG4gIHdvcmtmbG93SW1nOiB7XHJcbiAgICBtaW5IZWlnaHQ6ICcxMmVtJyxcclxuICAgIG1pbldpZHRoOiAnMjVlbScsXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIHdpZHRoOiAnYXV0bydcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIGV4YW1wbGUgY29sb3JzIHdpdGggZGFyayBtb2RlXHJcbiAgY29sb3JzOiB7XHJcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcclxuICAgIHRleHRfc2Vjb25kYXJ5OiAnIzAyMDczRScsIC8vIHNlY29uZGFyeSBib2R5IGNvbG9yXHJcbiAgICBoZWFkaW5nOiAnIzBGMjEzNycsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxyXG4gICAgaGVhZGluZ19zZWNvbmRhcnk6ICcjMEYyMTM3JywgLy8gaGVhZGluZyBjb2xvclxyXG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLCAvLyBib2R5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJhY2tncm91bmRfc2Vjb25kYXJ5OiAnI0Y5RkJGRCcsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBib3JkZXJfY29sb3I6ICcjRTVFQ0Y0JywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICB5ZWxsb3c6ICcjRkZBNzQwJywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICBwcmltYXJ5OiAnIzBCNUZERCcsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXHJcbiAgICBzZWNvbmRhcnk6ICd0cmFuc3BhcmVudCcsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcclxuICAgIG11dGVkOiAnI0U0RTRFNCcsIC8vIG11dGVkIGNvbG9yXHJcbiAgICBhY2NlbnQ6ICcjNjA5JywgLy8gYSBjb250cmFzdCBjb2xvciBmb3IgZW1waGFzaXppbmcgVUlcclxuICAgIC8vIGhpZ2hsaWdodFx0YSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBoaWdobGlnaHRpbmcgdGV4dFxyXG4gICAgbW9kZXM6IHtcclxuICAgICAgZGFyazoge1xyXG4gICAgICAgIHRleHQ6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXHJcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxyXG4gICAgICAgIHNlY29uZGFyeTogJyMwOWMnLFxyXG4gICAgICAgIG11dGVkOiAnIzExMScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgICc0ODBweCcsXHJcbiAgICAnNjQwcHgnLFxyXG4gICAgJzc2OHB4JyxcclxuICAgICcxMDI0cHgnLFxyXG4gICAgJzEyMjBweCcsXHJcbiAgICAnMTM2NnB4JyxcclxuICAgICcxNjIwcHgnLFxyXG4gIF0sXHJcbiAgZm9udHM6IHtcclxuICAgIGJvZHk6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXHJcbiAgICBoZWFkaW5nOiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxyXG4gIH0sXHJcbiAgZm9udFNpemVzOiBbMTIsIDE1LCAxNiwgMTgsIDIwLCAyMiwgMjQsIDI4LCAzMiwgMzYsIDQyLCA0OCwgNTIsIDY0XSxcclxuICBmb250V2VpZ2h0czoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBoZWFkaW5nOiA1MDAsXHJcbiAgICBib2xkOiA3MDAsXHJcbiAgfSxcclxuICBsaW5lSGVpZ2h0czoge1xyXG4gICAgYm9keTogMS44LFxyXG4gICAgaGVhZGluZzogMS41LFxyXG4gIH0sXHJcbiAgbGV0dGVyU3BhY2luZ3M6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgY2FwczogJzAuMmVtJyxcclxuICAgIGhlYWRpbmc6ICctMC41cHgnLFxyXG4gIH0sXHJcbiAgc3BhY2U6IFswLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzAsIDUwLCA4MCwgMTAwLCAxMjAsIDE1MF0sXHJcbiAgLy8gdmFyaWFudHMgY2FuIHVzZSBjdXN0b20sIHVzZXItZGVmaW5lZCBuYW1lc1xyXG4gIGxheW91dDoge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIG1heFdpZHRoOiBbXHJcbiAgICAgICAgJzEwMCUnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnNzgwcHgnLFxyXG4gICAgICAgICcxMDIwcHgnLFxyXG4gICAgICAgICcxMjAwcHgnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzEzMTBweCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIHB4OiBbNCwgNl0sXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICBweTogMyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgdG9vbGJhcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgfSxcclxuICAgIG1haW46IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHA6IFsnMCA1dncnLCAnMCAxMHZ3JywgJzAgMjB2dyddXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAga2V5RmVhdHVyZToge1xyXG4gICAgICBwdDogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTY1cHgnXSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxyXG4gICAgfSxcclxuICAgIG5ld3M6IHtcclxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXHJcbiAgICB9LFxyXG4gICAgY29yZUZlYXR1cmU6IHtcclxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICB0ZXN0aW1vbmlhbDoge1xyXG4gICAgICBwdDogWzgsIG51bGwsIDgsICc3MHB4JywgbnVsbCwgOCwgbnVsbCwgJzE0NXB4J10sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE5MHB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICBzZXJ2aWNlczoge1xyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNTBweCddLFxyXG4gICAgfSxcclxuICAgIHByaWNpbmc6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE4MHB4J10sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE4MHB4J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbkhlYWRlcjoge1xyXG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICc1NDBweCddLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiBbJy0zcHgnLCBudWxsLCAtMV0sXHJcbiAgICBtYXJnaW5Cb3R0b206IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzY1cHgnLCBudWxsLCAnODBweCddLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsIG51bGwsIG51bGwsICczMnB4JywgbnVsbCwgJzM2cHgnXSxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgMS4yNV0sXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzAsICcxM3B4JywgbnVsbCwgJzE0cHgnXSxcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogWycxLjVweCcsIG51bGwsICcycHgnXSxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxyXG4gICAgICBtYjogMixcclxuICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIGhlYWRpbmc6IHtcclxuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IFs0XSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNTVweCcsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgaGVyb1ByaW1hcnk6IHtcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IFtcclxuICAgICAgICAnMzJweCcsXHJcbiAgICAgICAgJzM2cHgnLFxyXG4gICAgICAgICc0MnB4JyxcclxuICAgICAgICAnNDBweCcsXHJcbiAgICAgICAgJzQycHgnLFxyXG4gICAgICAgICc1MnB4JyxcclxuICAgICAgICAnNThweCcsXHJcbiAgICAgICAgJzY2cHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjJdLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gICAgaGVyb1NlY29uZGFyeToge1xyXG4gICAgICBmb250U2l6ZTogWzIsIG51bGwsICcxN3B4JywgbnVsbCwgbnVsbCwgJzE5cHgnLCA0XSxcclxuICAgICAgbGluZUhlaWdodDogWzEuOSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgbWI6IDUsXHJcbiAgICAgIHB4OiBbMCwgbnVsbCwgNSwgNiwgbnVsbCwgOCwgOV0sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgLy8gZXh0ZW5kcyB0aGUgdGV4dC5oZWFkaW5nIHN0eWxlc1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDRdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxyXG4gICAgICBtYjogMSxcclxuICAgIH0sXHJcbiAgICBsZWFkOiB7XHJcbiAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgbGluZUhlaWdodDogJzYwcHgnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgIH0sXHJcbiAgICBtdXRlZDoge1xyXG4gICAgICBsaW5lSGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgIGNvbG9yOiAnbXV0ZWQnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGNvbG9yOiAnIzAwQTk5RCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rczoge1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIH0sXHJcbiAgICBib2xkOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBuYXY6IHtcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgJ2lubGluZS1ibG9jayddLFxyXG4gICAgICBweDogMjUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgfSxcclxuICAgIGJsb2c6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcHg6IDAsXHJcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXHJcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHB4OiAwLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlczoge1xyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHdpZHRoOiA0OCxcclxuICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xyXG4gIGJ1dHRvbnM6IHtcclxuICAgIG1lbnU6IHtcclxuICAgICAgZGlzcGxheTogW251bGwsIG51bGwsICdub25lJ10sXHJcbiAgICB9LCAvLyBkZWZhdWx0IHZhcmlhbnQgZm9yIE1lbnVCdXR0b25cclxuICAgIC8vIHlvdSBjYW4gcmVmZXJlbmNlIG90aGVyIHZhbHVlcyBkZWZpbmVkIGluIHRoZSB0aGVtZVxyXG4gICAgZGVmYXVsdEJ0bjoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6ICc0NXB4JyxcclxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nczogJy0wLjE1cHgnLFxyXG4gICAgICBwYWRkaW5nOiBbJzEycHggMjBweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBiZzogJ3ByaW1hcnknLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDIzMywgNzYsIDg0LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2hpdGVCdXR0b246IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBiZzogJ3doaXRlJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjUpIDBweCAxMnB4IDI0cHggLTEwcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcclxuICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIHBhZGRpbmc6IFsnMTBweCAxNXB4JywgbnVsbCwgJzE1cHggMzBweCddLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBiZzogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRleHRCdXR0b246IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBmb250U2l6ZTogWzQsIDZdLFxyXG4gICAgICAgIG1yOiAyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHBhZGRpbmc6IDIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgIH0sXHJcbiAgICBvZmZlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4OiBbJzEgMSBjYWxjKDUwJSAtIDE2cHgpJywgJzEgMSAyMCUnXSxcclxuICAgICAgbWluSGVpZ2h0OiAxMzAsXHJcbiAgICAgIG06IDIsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjYnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZUNhcmQ6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICBwOiAzLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvcm1zOiB7XHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgYm9yZGVyQ29sb3I6ICdib3JkZXJfY29sb3InLFxyXG4gICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIGJveFNoYWRvdzogKHQpID0+IGAwIDAgMCAycHggJHt0LmNvbG9ycy5wcmltYXJ5fWAsXHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBiYWRnZXM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcclxuICAgICAgYmc6ICcjMjhBNUZGJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcclxuICAgICAgcDogJzNweCAxMXB4JyxcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxyXG4gICAgfSxcclxuICAgIG91dGxpbmU6IHtcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHN0eWxlczoge1xyXG4gICAgLy8gVG8gYWRkIGJhc2UsIHRvcC1sZXZlbCBzdHlsZXMgdG8gdGhlIDxib2R5PiBlbGVtZW50LCB1c2UgdGhlbWUuc3R5bGVzLnJvb3QuXHJcbiAgICByb290OiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXHJcbiAgICAgIC8vIE1vZGFsIEdsb2JhbCBTdHlsZVxyXG4gICAgICAnLm1vZGFsLXZpZGVvLWNsb3NlLWJ0bic6IHtcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgfSxcclxuICAgICAgJy5tb2RhbC12aWRlby1tb3ZpZS13cmFwJzoge1xyXG4gICAgICAgIG1hcmdpbjogNixcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIERpdmlkZXIgc3R5bGVzXHJcbiAgICBocjoge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Q5RTBFNycsXHJcbiAgICB9LFxyXG4gICAgLy8gYWxzbyB5b3UgY2FuIHVzZSBvdGhlciBIVE1MIGVsZW1lbnRzIHN0eWxlIGhlcmVcclxuICAgIHVsOiB7XHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIHNyT25seToge1xyXG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwUGF0aDogJ2luc2V0KDUwJSkgIWltcG9ydGFudCcsXHJcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgbWFyZ2luOiAnLTFweCAhaW1wb3J0YW50JyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4gIWltcG9ydGFudCcsXHJcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aWR0aDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtYWlsanMvYnJvd3NlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmMtZHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGwtdG8tYm90dG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0aWNreW5vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhlbWUtdWlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==