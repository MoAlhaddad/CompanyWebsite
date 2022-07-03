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
    sx: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].banner.button,
    style: {
      backgroundColor: "rgb(0, 128, 0)",
      marginTop: "8em",
      color: 'white',
      cursor: 'pointer',
      hover: 'green'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJjbGFzc05hbWUiLCJjb250YWN0VXNSZWYiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidG9nZ2xlVmlzaWJsZSIsInNjcm9sbGVkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxUb0JvdHRvbSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwic2Nyb2xsSGVpZ2h0IiwiYmVoYXZpb3IiLCJzdHlsZXMiLCJiYW5uZXIiLCJiYWNrZ3JvdW5kIiwibWFyZ2luVG9wIiwiY29udGFpbmVyIiwiY29udGVudEJveCIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiY3Vyc29yIiwiaG92ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE1BQVQsT0FBNkM7QUFBQTs7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFDMUQ7QUFEMEQsa0JBRzVCQyxzREFBUSxDQUFDLElBQUQsQ0FIb0I7QUFBQSxNQUduREMsT0FIbUQ7QUFBQSxNQUcxQ0MsVUFIMEM7O0FBSzFELE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBMUM7O0FBQ0EsUUFBSUgsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDaEJGLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FGRCxNQUVPLElBQUlFLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUN4QkYsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsTUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0I7QUFDZEMsU0FBRyxFQUFFTixRQUFRLENBQUNDLGVBQVQsQ0FBeUJNLFlBRGhCO0FBRWRDLGNBQVEsRUFBRTtBQUNWO0FBQ047O0FBSm9CLEtBQWhCO0FBTUQsR0FQRCxDQWQwRCxDQXVCMUQ7QUFDQTs7O0FBQ0EsU0FDRTtBQUNFLE1BQUUsRUFBRUMsK0NBQU0sQ0FBQ0MsTUFEYjtBQUVFLE1BQUUsRUFBQyxNQUZMO0FBR0UsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUUsbURBRFA7QUFFTEMsZUFBUyxFQUFFO0FBRk4sS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUgsK0NBQU0sQ0FBQ0MsTUFBUCxDQUFjRyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUosK0NBQU0sQ0FBQ0MsTUFBUCxDQUFjSSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFdBQU8sRUFBQyxhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURGLEVBSUUsTUFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBQyxHQUFUO0FBQWEsV0FBTyxFQUFDLGVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseU5BSkYsRUFZSTtBQUFRLE1BQUUsRUFBRUwsK0NBQU0sQ0FBQ0MsTUFBUCxDQUFjSyxNQUExQjtBQUFrQyxTQUFLLEVBQUU7QUFBQ0MscUJBQWUsRUFBRSxnQkFBbEI7QUFDN0NKLGVBQVMsRUFBRSxLQURrQztBQUMzQkssV0FBSyxFQUFFLE9BRG9CO0FBRTdDQyxZQUFNLEVBQUUsU0FGcUM7QUFHN0NDLFdBQUssRUFBRTtBQUhzQyxLQUF6QztBQUdjLFdBQU8sRUFBRWhCLGNBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkosQ0FERixDQVJGLENBREY7QUFpQ0Q7O0dBMUR1QlgsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMzdkMWFiOGYzOTExZTUzYzQ0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBFeGNlcnNpc2UgZnJvbSBcImFzc2V0cy9leGNlcnNpc2UucG5nXCI7XHJcbmltcG9ydCBCYW5uZXJJbWcgZnJvbSBcImFzc2V0cy9iYW5uZXItdGh1bWIucG5nXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCBDb250YWN0VXMgZnJvbSBcInNlY3Rpb25zL2NvbnRhY3QtdXMvaW5kZXhcIjtcclxuaW1wb3J0IEluZGV4UGFnZSBmcm9tIFwicGFnZXMvaW5kZXhcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoeyBjbGFzc05hbWUsIGNvbnRhY3RVc1JlZiB9KSB7XHJcbiAgLy8gY29uc3QgU2Nyb2xsQnV0dG9uID0gKCkgPT57XHJcblxyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCB0b2dnbGVWaXNpYmxlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2Nyb2xsZWQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgaWYgKHNjcm9sbGVkID4gMCkge1xyXG4gICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAoc2Nyb2xsZWQgPD0gMCkge1xyXG4gICAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgLyogeW91IGNhbiBhbHNvIHVzZSAnYXV0bycgYmVoYXZpb3VyIFxyXG4gICAgICAgICBpbiBwbGFjZSBvZiAnc21vb3RoJyAqL1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRvZ2dsZVZpc2libGUpO1xyXG4gIC8vIGNvbnN0IGNvbnRhY3RVc1JlZmYgPSB1c2VSZWYoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgc3g9e3N0eWxlcy5iYW5uZXJ9XHJcbiAgICAgIGlkPVwiaG9tZVwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjRTU4QzIyIDYwJSwgIzJBQkRFQyA2MCUpXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjhlbVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiB2YXJhaW50PVwiaGVyb1ByaW1hcnlcIj5cclxuICAgICAgICAgICAgVG9wIFF1YWxpdHkgU2VydmljZXMgdG8gRXhwbG9yZVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHQgYXM9XCJwXCIgdmFyaWFudD1cImhlcm9TZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgQ2hlY2sgb3V0IG91ciBXZWJzaXRlIHRvIGZpbmQgQW1hemluZyBTb2Z0d2FyZSBQcm9kdWN0cyBhbmQgZGVhbHMhXHJcbiAgICAgICAgICAgIElmIHlvdSBuZWVkIFdlYnNpdGUsIEFwcGxpY2F0aW9uLCBvciBFdmVuIGhhdmluZyBTdHJ1Z2dsZXMgSW1wcm92aW5nXHJcbiAgICAgICAgICAgIEN1cnJlbnQgU29mdHdhcmUgPyBTZWFyY2ggbm8gRnVydGhlciBIZXJlIGF0IE5vdmlnbyB3ZSBhcmUgaGVyZSB0b1xyXG4gICAgICAgICAgICBTZXJ2ZSFcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIHN4PXtzdHlsZXMuYmFubmVyLmJ1dHRvbn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDAsIDEyOCwgMClcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiOGVtXCIsIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGhvdmVyOiAnZ3JlZW4nLH19IG9uQ2xpY2s9e3Njcm9sbFRvQm90dG9tfSA+XHJcbiAgICAgICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICBcclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9