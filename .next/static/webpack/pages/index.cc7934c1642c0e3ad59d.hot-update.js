webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/banner/index.js":
/*!**************************************!*\
  !*** ./src/sections/banner/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var assets_excersise_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/excersise.png */ "./src/assets/excersise.png");
/* harmony import */ var assets_excersise_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_excersise_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/banner-thumb.png */ "./src/assets/banner-thumb.png");
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/sections/banner/styles.js");
/* harmony import */ var sections_contact_us_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sections/contact-us/index */ "./src/sections/contact-us/index.js");
/* harmony import */ var pages_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pages/index */ "./src/pages/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\sections\\banner\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








function Banner(_ref) {
  _s();

  var className = _ref.className,
      contactUsRef = _ref.contactUsRef;

  // const ScrollButton = () =>{
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      visible = _useState[0],
      setVisible = _useState[1];

  var toggleVisible = function toggleVisible() {
    var scrolled = document.documentElement.scrollTop;

    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  var scrollToBottom = function scrollToBottom() {
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
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    as: "h1",
    varaint: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Top Quality Services to Explore"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Check out our Website to find Amazing Software Products and deals! If you need Website, Application, or Even having Struggles Improving Current Software ? Search no Further Here at Novigo we are here to Serve!"), __jsx("button", {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].banner,
    style: {
      backgroundColor: "rgb(0, 128, 0)",
      marginTop: "8em"
    },
    onClick: scrollToBottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Contact Us"))));
}

_s(Banner, "p/lRV+JGew4KJq1vCTMMXt6g6IM=");

_c = Banner;

var _c;

$RefreshReg$(_c, "Banner");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJjbGFzc05hbWUiLCJjb250YWN0VXNSZWYiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidG9nZ2xlVmlzaWJsZSIsInNjcm9sbGVkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxUb0JvdHRvbSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwic2Nyb2xsSGVpZ2h0IiwiYmVoYXZpb3IiLCJzdHlsZXMiLCJiYW5uZXIiLCJiYWNrZ3JvdW5kIiwibWFyZ2luVG9wIiwiY29udGFpbmVyIiwiY29udGVudEJveCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsTUFBVCxPQUE2QztBQUFBOztBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUMxRDtBQUQwRCxrQkFHNUJDLHNEQUFRLENBQUMsSUFBRCxDQUhvQjtBQUFBLE1BR25EQyxPQUhtRDtBQUFBLE1BRzFDQyxVQUgwQzs7QUFLMUQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFFBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUExQzs7QUFDQSxRQUFJSCxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQkYsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxLQUZELE1BRU8sSUFBSUUsUUFBUSxJQUFJLENBQWhCLEVBQW1CO0FBQ3hCRixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxNQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNkQyxTQUFHLEVBQUVOLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5Qk0sWUFEaEI7QUFFZEMsY0FBUSxFQUFFO0FBQ1Y7QUFDTjs7QUFKb0IsS0FBaEI7QUFNRCxHQVBELENBZDBELENBdUIxRDtBQUNBOzs7QUFDQSxTQUNFO0FBQ0UsTUFBRSxFQUFFQywrQ0FBTSxDQUFDQyxNQURiO0FBRUUsTUFBRSxFQUFDLE1BRkw7QUFHRSxTQUFLLEVBQUU7QUFDTEMsZ0JBQVUsRUFBRSxtREFEUDtBQUVMQyxlQUFTLEVBQUU7QUFGTixLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFSCwrQ0FBTSxDQUFDQyxNQUFQLENBQWNHLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFSiwrQ0FBTSxDQUFDQyxNQUFQLENBQWNJLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsV0FBTyxFQUFDLGFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREYsRUFJRSxNQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFDLEdBQVQ7QUFBYSxXQUFPLEVBQUMsZUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5TkFKRixFQVlJO0FBQVEsTUFBRSxFQUFFTCwrQ0FBTSxDQUFDQyxNQUFuQjtBQUEyQixTQUFLLEVBQUU7QUFBQ0sscUJBQWUsRUFBRSxnQkFBbEI7QUFDdENILGVBQVMsRUFBRTtBQUQyQixLQUFsQztBQUNlLFdBQU8sRUFBRVQsY0FEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaSixDQURGLENBUkYsQ0FERjtBQStCRDs7R0F4RHVCWCxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNjNzkzNGMxNjQyYzBlM2FkNTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IEV4Y2Vyc2lzZSBmcm9tIFwiYXNzZXRzL2V4Y2Vyc2lzZS5wbmdcIjtcclxuaW1wb3J0IEJhbm5lckltZyBmcm9tIFwiYXNzZXRzL2Jhbm5lci10aHVtYi5wbmdcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IENvbnRhY3RVcyBmcm9tIFwic2VjdGlvbnMvY29udGFjdC11cy9pbmRleFwiO1xyXG5pbXBvcnQgSW5kZXhQYWdlIGZyb20gXCJwYWdlcy9pbmRleFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lcih7IGNsYXNzTmFtZSwgY29udGFjdFVzUmVmIH0pIHtcclxuICAvLyBjb25zdCBTY3JvbGxCdXR0b24gPSAoKSA9PntcclxuXHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JvbGxlZCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoc2Nyb2xsZWQgPiAwKSB7XHJcbiAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JvbGxlZCA8PSAwKSB7XHJcbiAgICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAvKiB5b3UgY2FuIGFsc28gdXNlICdhdXRvJyBiZWhhdmlvdXIgXHJcbiAgICAgICAgIGluIHBsYWNlIG9mICdzbW9vdGgnICovXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWJsZSk7XHJcbiAgLy8gY29uc3QgY29udGFjdFVzUmVmZiA9IHVzZVJlZigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBzeD17c3R5bGVzLmJhbm5lcn1cclxuICAgICAgaWQ9XCJob21lXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMTBkZWcsICNFNThDMjIgNjAlLCAjMkFCREVDIDYwJSlcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiOGVtXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5iYW5uZXIuY29udGFpbmVyfT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHZhcmFpbnQ9XCJoZXJvUHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBUb3AgUXVhbGl0eSBTZXJ2aWNlcyB0byBFeHBsb3JlXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8VGV4dCBhcz1cInBcIiB2YXJpYW50PVwiaGVyb1NlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICBDaGVjayBvdXQgb3VyIFdlYnNpdGUgdG8gZmluZCBBbWF6aW5nIFNvZnR3YXJlIFByb2R1Y3RzIGFuZCBkZWFscyFcclxuICAgICAgICAgICAgSWYgeW91IG5lZWQgV2Vic2l0ZSwgQXBwbGljYXRpb24sIG9yIEV2ZW4gaGF2aW5nIFN0cnVnZ2xlcyBJbXByb3ZpbmdcclxuICAgICAgICAgICAgQ3VycmVudCBTb2Z0d2FyZSA/IFNlYXJjaCBubyBGdXJ0aGVyIEhlcmUgYXQgTm92aWdvIHdlIGFyZSBoZXJlIHRvXHJcbiAgICAgICAgICAgIFNlcnZlIVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gc3g9e3N0eWxlcy5iYW5uZXJ9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJnYigwLCAxMjgsIDApXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjhlbVwifX0gb25DbGljaz17c2Nyb2xsVG9Cb3R0b219PlxyXG4gICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==