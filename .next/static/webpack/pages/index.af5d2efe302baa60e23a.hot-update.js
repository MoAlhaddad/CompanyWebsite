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
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    as: "h1",
    varaint: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Top Quality Services to Explore"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Check out our Website to find Amazing Software Products and deals! If you need Website, Application, or Even having Struggles Improving Current Software ? Search no Further Here at Novigo we are here to Serve!"), __jsx("button", {
    className: "link btn",
    style: {
      backgroundColor: ""
    },
    onClick: scrollToBottom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJjbGFzc05hbWUiLCJjb250YWN0VXNSZWYiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidG9nZ2xlVmlzaWJsZSIsInNjcm9sbGVkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxUb0JvdHRvbSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwic2Nyb2xsSGVpZ2h0IiwiYmVoYXZpb3IiLCJzdHlsZXMiLCJiYW5uZXIiLCJiYWNrZ3JvdW5kIiwibWFyZ2luVG9wIiwiY29udGFpbmVyIiwiY29udGVudEJveCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUE2QztBQUFBOztBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUMxRDtBQUQwRCxrQkFHNUJDLHNEQUFRLENBQUMsSUFBRCxDQUhvQjtBQUFBLE1BR25EQyxPQUhtRDtBQUFBLE1BRzFDQyxVQUgwQzs7QUFLMUQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFFBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUExQzs7QUFDQSxRQUFJSCxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQkYsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxLQUZELE1BRU8sSUFBSUUsUUFBUSxJQUFJLENBQWhCLEVBQW1CO0FBQ3hCRixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxNQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNkQyxTQUFHLEVBQUVOLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5Qk0sWUFEaEI7QUFFZEMsY0FBUSxFQUFFO0FBQ1Y7QUFDTjs7QUFKb0IsS0FBaEI7QUFNRCxHQVBELENBZDBELENBdUIxRDtBQUNBOzs7QUFDQSxTQUNFO0FBQ0UsTUFBRSxFQUFFQywrQ0FBTSxDQUFDQyxNQURiO0FBRUUsTUFBRSxFQUFDLE1BRkw7QUFHRSxTQUFLLEVBQUU7QUFDTEMsZ0JBQVUsRUFBRSxtREFEUDtBQUVMQyxlQUFTLEVBQUU7QUFGTixLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFSCwrQ0FBTSxDQUFDQyxNQUFQLENBQWNHLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFSiwrQ0FBTSxDQUFDQyxNQUFQLENBQWNJLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsV0FBTyxFQUFDLGFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREYsRUFJRSxNQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFDLEdBQVQ7QUFBYSxXQUFPLEVBQUMsZUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5TkFKRixFQVlJO0FBQVEsYUFBUyxFQUFDLFVBQWxCO0FBQTZCLFNBQUssRUFBRTtBQUFDQyxxQkFBZSxFQUFFO0FBQWxCLEtBQXBDO0FBQTJELFdBQU8sRUFBRVosY0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaSixDQURGLENBUkYsQ0FERjtBQThCRDs7R0F2RHVCWCxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFmNWQyZWZlMzAyYmFhNjBlMjNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IEV4Y2Vyc2lzZSBmcm9tIFwiYXNzZXRzL2V4Y2Vyc2lzZS5wbmdcIjtcclxuaW1wb3J0IEJhbm5lckltZyBmcm9tIFwiYXNzZXRzL2Jhbm5lci10aHVtYi5wbmdcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IENvbnRhY3RVcyBmcm9tIFwic2VjdGlvbnMvY29udGFjdC11cy9pbmRleFwiO1xyXG5pbXBvcnQgSW5kZXhQYWdlIGZyb20gXCJwYWdlcy9pbmRleFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKHsgY2xhc3NOYW1lLCBjb250YWN0VXNSZWYgfSkge1xyXG4gIC8vIGNvbnN0IFNjcm9sbEJ1dHRvbiA9ICgpID0+e1xyXG5cclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNjcm9sbGVkID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGlmIChzY3JvbGxlZCA+IDApIHtcclxuICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbGVkIDw9IDApIHtcclxuICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgIC8qIHlvdSBjYW4gYWxzbyB1c2UgJ2F1dG8nIGJlaGF2aW91ciBcclxuICAgICAgICAgaW4gcGxhY2Ugb2YgJ3Ntb290aCcgKi9cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVWaXNpYmxlKTtcclxuICAvLyBjb25zdCBjb250YWN0VXNSZWZmID0gdXNlUmVmKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIHN4PXtzdHlsZXMuYmFubmVyfVxyXG4gICAgICBpZD1cImhvbWVcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDExMGRlZywgI0U1OEMyMiA2MCUsICMyQUJERUMgNjAlKVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCI4ZW1cIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgdmFyYWludD1cImhlcm9QcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIFRvcCBRdWFsaXR5IFNlcnZpY2VzIHRvIEV4cGxvcmVcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIENoZWNrIG91dCBvdXIgV2Vic2l0ZSB0byBmaW5kIEFtYXppbmcgU29mdHdhcmUgUHJvZHVjdHMgYW5kIGRlYWxzIVxyXG4gICAgICAgICAgICBJZiB5b3UgbmVlZCBXZWJzaXRlLCBBcHBsaWNhdGlvbiwgb3IgRXZlbiBoYXZpbmcgU3RydWdnbGVzIEltcHJvdmluZ1xyXG4gICAgICAgICAgICBDdXJyZW50IFNvZnR3YXJlID8gU2VhcmNoIG5vIEZ1cnRoZXIgSGVyZSBhdCBOb3ZpZ28gd2UgYXJlIGhlcmUgdG9cclxuICAgICAgICAgICAgU2VydmUhXHJcbiAgICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibGluayBidG5cIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJcIn19IG9uQ2xpY2s9e3Njcm9sbFRvQm90dG9tfT5cclxuICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gIFxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=