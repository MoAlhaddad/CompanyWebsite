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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var assets_excersise_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/excersise.png */ "./src/assets/excersise.png");
/* harmony import */ var assets_excersise_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_excersise_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/banner-thumb.png */ "./src/assets/banner-thumb.png");
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/sections/banner/styles.js");
/* harmony import */ var sections_contact_us_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sections/contact-us/index */ "./src/sections/contact-us/index.js");
/* harmony import */ var pages_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pages/index */ "./src/pages/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\17028\\Novigo_Site\\src\\sections\\banner\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








function Banner(_ref) {
  _s();

  var _ref2;

  var className = _ref.className,
      contactUsRef = _ref.contactUsRef;

  // const ScrollButton = () =>{
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(true),
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
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].banner,
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
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h1",
    varaint: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Top Quality Services to Explore"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Check out our Website to find Amazing Software Products and deals! If you need Website, Application, or Even having Struggles Improving Current Software ? Search no Further Here at Novigo we are here to Serve!"), __jsx("button", {
    sx: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].banner.button,
    style: (_ref2 = {
      backgroundColor: "rgb(0, 128, 0)",
      marginTop: "8em",
      color: 'white',
      cursor: 'pointer',
      hover: 'blue',
      border: '1px solid rgba(34,36,38,.15)'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "color", 'rgba(255, 255, 255, 0)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "borderRadius", '.28571429rem'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "webkitTransition", 'border-color .1s ease,-webkit-box-shadow .1s ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "transition", 'box-shadow .1s ease,border-color .1s ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "transition", 'box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease'), _ref2),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJjbGFzc05hbWUiLCJjb250YWN0VXNSZWYiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidG9nZ2xlVmlzaWJsZSIsInNjcm9sbGVkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxUb0JvdHRvbSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwic2Nyb2xsSGVpZ2h0IiwiYmVoYXZpb3IiLCJzdHlsZXMiLCJiYW5uZXIiLCJiYWNrZ3JvdW5kIiwibWFyZ2luVG9wIiwiY29udGFpbmVyIiwiY29udGVudEJveCIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiY3Vyc29yIiwiaG92ZXIiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE1BQVQsT0FBNkM7QUFBQTs7QUFBQTs7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFDMUQ7QUFEMEQsa0JBRzVCQyxzREFBUSxDQUFDLElBQUQsQ0FIb0I7QUFBQSxNQUduREMsT0FIbUQ7QUFBQSxNQUcxQ0MsVUFIMEM7O0FBSzFELE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBMUM7O0FBQ0EsUUFBSUgsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDaEJGLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FGRCxNQUVPLElBQUlFLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUN4QkYsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsTUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0I7QUFDZEMsU0FBRyxFQUFFTixRQUFRLENBQUNDLGVBQVQsQ0FBeUJNLFlBRGhCO0FBRWRDLGNBQVEsRUFBRTtBQUNWO0FBQ047O0FBSm9CLEtBQWhCO0FBTUQsR0FQRCxDQWQwRCxDQXVCMUQ7QUFDQTs7O0FBQ0EsU0FDRTtBQUNFLE1BQUUsRUFBRUMsK0NBQU0sQ0FBQ0MsTUFEYjtBQUVFLE1BQUUsRUFBQyxNQUZMO0FBR0UsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUUsbURBRFA7QUFFTEMsZUFBUyxFQUFFO0FBRk4sS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUgsK0NBQU0sQ0FBQ0MsTUFBUCxDQUFjRyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUosK0NBQU0sQ0FBQ0MsTUFBUCxDQUFjSSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFdBQU8sRUFBQyxhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURGLEVBSUUsTUFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBQyxHQUFUO0FBQWEsV0FBTyxFQUFDLGVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseU5BSkYsRUFZSTtBQUFRLE1BQUUsRUFBRUwsK0NBQU0sQ0FBQ0MsTUFBUCxDQUFjSyxNQUExQjtBQUFrQyxTQUFLO0FBQUdDLHFCQUFlLEVBQUUsZ0JBQXBCO0FBQzNDSixlQUFTLEVBQUUsS0FEZ0M7QUFDekJLLFdBQUssRUFBRSxPQURrQjtBQUUzQ0MsWUFBTSxFQUFFLFNBRm1DO0FBRzNDQyxXQUFLLEVBQUUsTUFIb0M7QUFJM0NDLFlBQU0sRUFBRTtBQUptQyxpSEFLcEMsd0JBTG9DLG9IQU03QixjQU42Qix3SEFPekIsbURBUHlCLGtIQVMvQiwyQ0FUK0Isa0hBVS9CLHVFQVYrQixTQUF2QztBQVVtRixXQUFPLEVBQUVqQixjQVY1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpKLENBREYsQ0FSRixDQURGO0FBd0NEOztHQWpFdUJYLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjk2OTQ1OTg3ZjJkNTU5YWEyNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgRXhjZXJzaXNlIGZyb20gXCJhc3NldHMvZXhjZXJzaXNlLnBuZ1wiO1xyXG5pbXBvcnQgQmFubmVySW1nIGZyb20gXCJhc3NldHMvYmFubmVyLXRodW1iLnBuZ1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ29udGFjdFVzIGZyb20gXCJzZWN0aW9ucy9jb250YWN0LXVzL2luZGV4XCI7XHJcbmltcG9ydCBJbmRleFBhZ2UgZnJvbSBcInBhZ2VzL2luZGV4XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKHsgY2xhc3NOYW1lLCBjb250YWN0VXNSZWYgfSkge1xyXG4gIC8vIGNvbnN0IFNjcm9sbEJ1dHRvbiA9ICgpID0+e1xyXG5cclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNjcm9sbGVkID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGlmIChzY3JvbGxlZCA+IDApIHtcclxuICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbGVkIDw9IDApIHtcclxuICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgIC8qIHlvdSBjYW4gYWxzbyB1c2UgJ2F1dG8nIGJlaGF2aW91ciBcclxuICAgICAgICAgaW4gcGxhY2Ugb2YgJ3Ntb290aCcgKi9cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVWaXNpYmxlKTtcclxuICAvLyBjb25zdCBjb250YWN0VXNSZWZmID0gdXNlUmVmKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIHN4PXtzdHlsZXMuYmFubmVyfVxyXG4gICAgICBpZD1cImhvbWVcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDExMGRlZywgI0U1OEMyMiA2MCUsICMyQUJERUMgNjAlKVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCI4ZW1cIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgdmFyYWludD1cImhlcm9QcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIFRvcCBRdWFsaXR5IFNlcnZpY2VzIHRvIEV4cGxvcmVcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIENoZWNrIG91dCBvdXIgV2Vic2l0ZSB0byBmaW5kIEFtYXppbmcgU29mdHdhcmUgUHJvZHVjdHMgYW5kIGRlYWxzIVxyXG4gICAgICAgICAgICBJZiB5b3UgbmVlZCBXZWJzaXRlLCBBcHBsaWNhdGlvbiwgb3IgRXZlbiBoYXZpbmcgU3RydWdnbGVzIEltcHJvdmluZ1xyXG4gICAgICAgICAgICBDdXJyZW50IFNvZnR3YXJlID8gU2VhcmNoIG5vIEZ1cnRoZXIgSGVyZSBhdCBOb3ZpZ28gd2UgYXJlIGhlcmUgdG9cclxuICAgICAgICAgICAgU2VydmUhXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBzeD17c3R5bGVzLmJhbm5lci5idXR0b259IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJnYigwLCAxMjgsIDApXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjhlbVwiLCBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBob3ZlcjogJ2JsdWUnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDM0LDM2LDM4LC4xNSknLFxyXG4gICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnLjI4NTcxNDI5cmVtJyxcclxuICAgICAgICB3ZWJraXRUcmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIC4xcyBlYXNlLC13ZWJraXQtYm94LXNoYWRvdyAuMXMgZWFzZScsXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogJ2JvcmRlci1jb2xvciAuMXMgZWFzZSwtd2Via2l0LWJveC1zaGFkb3cgLjFzIGVhc2UnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IC4xcyBlYXNlLGJvcmRlci1jb2xvciAuMXMgZWFzZScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgLjFzIGVhc2UsYm9yZGVyLWNvbG9yIC4xcyBlYXNlLC13ZWJraXQtYm94LXNoYWRvdyAuMXMgZWFzZScsfX0gb25DbGljaz17c2Nyb2xsVG9Cb3R0b219ID5cclxuICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gIFxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=