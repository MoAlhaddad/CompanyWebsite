webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/banner/styles.js":
/*!***************************************!*\
  !*** ./src/sections/banner/styles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/shape-left.png */ "./src/assets/shape-left.png");
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/shape-right.png */ "./src/assets/shape-right.png");
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_2__);


var _button;



var styles = {
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
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'bottom left 10em'
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      zIndex: -1,
      backgroundImage: "url(".concat(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_2___default.a, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'bottom right'
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      pt: '10em'
    },
    button: (_button = {
      display: 'flex',
      position: 'absolute',
      top: '50%',
      border: 'none',
      borderRadius: '10px',
      color: 'blue',
      cursor: 'pointer',
      hover: 'green',
      lineHeight: '1.21428571em',
      padding: '.67857143em 1em',
      background: '#fff'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "border", '1px solid rgba(34,36,38,.15)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "color", 'rgba(255)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "borderRadius", '.28571429rem'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "webkitTransition", 'border-color .1s ease,-webkit-box-shadow .1s ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "transition", 'border-color .1s ease,-webkit-box-shadow .1s ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "transition", 'box-shadow .1s ease,border-color .1s ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "transition", 'box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "webkitBoxShadow", 'none'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "margin", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "width", '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "outline", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "swebkitTapHighlightColor", 'rgba(255,255,255,0)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "bg", '#4BB543'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "padding", '1em !important'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "borderRadius", '5px !important'), _button),
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci9zdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVzIiwiYmFubmVyIiwicHQiLCJwYiIsIm10IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjb250ZW50IiwidG9wIiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsInJpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiU2hhcGVSaWdodCIsImNvbnRhaW5lciIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJidXR0b24iLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImN1cnNvciIsImhvdmVyIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiY29udGVudEJveCIsIm14IiwidGV4dEFsaWduIiwibWIiLCJpbWFnZUJveCIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLFFBQU0sRUFBRTtBQUNOQyxNQUFFLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxFQUFpRCxPQUFqRCxFQUEwRCxPQUExRCxDQURFO0FBRU5DLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsSUFBekIsRUFBK0IsQ0FBL0IsQ0FGRTtBQUdOQyxNQUFFLEVBQUUsQ0FBQyxNQUFELENBSEU7QUFJTkMsWUFBUSxFQUFFLFVBSko7QUFLTkMsVUFBTSxFQUFFLENBTEY7QUFNTixpQkFBYTtBQUNYQyxhQUFPLEVBQUUsSUFERTtBQUVYQyxTQUFHLEVBQUUsRUFGTTtBQUdYQyxZQUFNLEVBQUUsQ0FIRztBQUlYQyxVQUFJLEVBQUUsQ0FKSztBQUtYQyxZQUFNLEVBQUUsTUFMRztBQU1YQyxXQUFLLEVBQUUsT0FOSTtBQU9YTixZQUFNLEVBQUUsQ0FBQyxDQVBFO0FBUVhPLHNCQUFnQixhQVJMO0FBU1hDLHdCQUFrQixFQUFFO0FBVFQsS0FOUDtBQWlCTixnQkFBWTtBQUNWVCxjQUFRLEVBQUUsVUFEQTtBQUVWRSxhQUFPLEVBQUUsSUFGQztBQUdWRSxZQUFNLEVBQUUsTUFIRTtBQUlWTSxXQUFLLEVBQUUsQ0FKRztBQUtWVCxZQUFNLEVBQUUsQ0FBQyxDQUxDO0FBTVZVLHFCQUFlLGdCQUFTQyw2REFBVCxNQU5MO0FBT1ZKLHNCQUFnQixhQVBOO0FBUVZDLHdCQUFrQixFQUFFO0FBUlYsS0FqQk47QUEyQk5JLGFBQVMsRUFBRTtBQUNUQyxlQUFTLEVBQUUsU0FERjtBQUVUQyxhQUFPLEVBQUUsTUFGQTtBQUdUQyxtQkFBYSxFQUFFLFFBSE47QUFJVEMsb0JBQWMsRUFBRSxRQUpQO0FBS1RwQixRQUFFLEVBQUU7QUFMSyxLQTNCTDtBQWtDTnFCLFVBQU07QUFDSkgsYUFBTyxFQUFFLE1BREw7QUFFSmYsY0FBUSxFQUFFLFVBRk47QUFHSkcsU0FBRyxFQUFDLEtBSEE7QUFJSmdCLFlBQU0sRUFBRSxNQUpKO0FBS0pDLGtCQUFZLEVBQUUsTUFMVjtBQU1KQyxXQUFLLEVBQUUsTUFOSDtBQU9KQyxZQUFNLEVBQUUsU0FQSjtBQVFKQyxXQUFLLEVBQUUsT0FSSDtBQVNKQyxnQkFBVSxFQUFFLGNBVFI7QUFVSkMsYUFBTyxFQUFFLGlCQVZMO0FBV0pDLGdCQUFVLEVBQUU7QUFYUixvSEFZSSw4QkFaSiwrR0FhRyxXQWJILHNIQWNVLGNBZFYsMEhBZWMsbURBZmQsb0hBZ0JRLG1EQWhCUixvSEFpQlEsMkNBakJSLG9IQWtCUSx1RUFsQlIseUhBbUJhLE1BbkJiLGdIQW9CSSxDQXBCSiwrR0FxQkcsTUFyQkgsaUhBc0JLLENBdEJMLGtJQXVCc0IscUJBdkJ0Qiw0R0F3QkEsU0F4QkEsaUhBeUJLLGdCQXpCTCxzSEEwQlUsZ0JBMUJWLFdBbENBO0FBK0ROQyxjQUFVLEVBQUU7QUFDVnBCLFdBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDLEtBQXRDLEVBQTZDLEtBQTdDLEVBQW9ELEtBQXBELENBREc7QUFFVnFCLFFBQUUsRUFBRSxNQUZNO0FBR1ZDLGVBQVMsRUFBRSxRQUhEO0FBSVZDLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxDQUFqQztBQUpNLEtBL0ROO0FBcUVOQyxZQUFRLEVBQUU7QUFDUmQsb0JBQWMsRUFBRSxRQURSO0FBRVJZLGVBQVMsRUFBRSxRQUZIO0FBR1JkLGFBQU8sRUFBRSxhQUhEO0FBSVJlLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBQyxDQUFYLEVBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixPQUExQixFQUFtQyxJQUFuQyxFQUF5QyxDQUFDLENBQTFDLENBSkk7QUFLUkUsU0FBRyxFQUFFO0FBQ0hoQyxnQkFBUSxFQUFFLFVBRFA7QUFFSE0sY0FBTSxFQUFFLENBQUMsR0FBRCxFQUFNLE1BQU47QUFGTDtBQUxHO0FBckVKO0FBREcsQ0FBZjtBQXNGZVgscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWI2YWVkZmZkZDlkOWJhZGI0OGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGFwZUxlZnQgZnJvbSAnYXNzZXRzL3NoYXBlLWxlZnQucG5nJztcclxuaW1wb3J0IFNoYXBlUmlnaHQgZnJvbSAnYXNzZXRzL3NoYXBlLXJpZ2h0LnBuZyc7XHJcblxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYmFubmVyOiB7XHJcbiAgICAgIHB0OiBbJzE0MHB4JywgJzE0NXB4JywgJzE1NXB4JywgJzE3MHB4JywgbnVsbCwgbnVsbCwgJzE4MHB4JywgJzIxNXB4J10sXHJcbiAgICAgIHBiOiBbMiwgbnVsbCwgMCwgbnVsbCwgMiwgMCwgbnVsbCwgNV0sXHJcbiAgICAgIG10OiBbJzEwZW0nXSxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHpJbmRleDogMixcclxuICAgICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICBib3R0b206IDYsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICBoZWlnaHQ6ICczMGVtJyxcclxuICAgICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICB6SW5kZXg6IC0xLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSBsZWZ0IDEwZW0nLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjo6YWZ0ZXInOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICAgIGJvdHRvbTogJzQwcHgnLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHpJbmRleDogLTEsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVSaWdodH0pYCxcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gcmlnaHQnLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZXI6IHtcclxuICAgICAgICBtaW5IZWlnaHQ6ICdpbmhlcml0JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIHB0OiAnMTBlbSdcclxuICAgICAgfSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDonNTAlJyxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGhvdmVyOiAnZ3JlZW4nLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjIxNDI4NTcxZW0nLFxyXG4gICAgICAgIHBhZGRpbmc6ICcuNjc4NTcxNDNlbSAxZW0nLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgzNCwzNiwzOCwuMTUpJyxcclxuICAgICAgICBjb2xvcjogJ3JnYmEoMjU1KScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnLjI4NTcxNDI5cmVtJyxcclxuICAgICAgICB3ZWJraXRUcmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIC4xcyBlYXNlLC13ZWJraXQtYm94LXNoYWRvdyAuMXMgZWFzZScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JvcmRlci1jb2xvciAuMXMgZWFzZSwtd2Via2l0LWJveC1zaGFkb3cgLjFzIGVhc2UnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IC4xcyBlYXNlLGJvcmRlci1jb2xvciAuMXMgZWFzZScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgLjFzIGVhc2UsYm9yZGVyLWNvbG9yIC4xcyBlYXNlLC13ZWJraXQtYm94LXNoYWRvdyAuMXMgZWFzZScsXHJcbiAgICAgICAgd2Via2l0Qm94U2hhZG93OiAnbm9uZScsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgICBzd2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDApJyxcclxuICAgICAgICBiZzogJyM0QkI1NDMnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxZW0gIWltcG9ydGFudCcsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4ICFpbXBvcnRhbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgIGNvbnRlbnRCb3g6IHtcclxuICAgICAgICB3aWR0aDogWycxMDAlJywgJzkwJScsICc1MzVweCcsIG51bGwsICc1NyUnLCAnNjAlJywgJzY4JScsICc2MCUnXSxcclxuICAgICAgICBteDogJ2F1dG8nLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgbWI6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDddLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWFnZUJveDoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgICAgbWI6IFswLCBudWxsLCAtNiwgbnVsbCwgbnVsbCwgJy00MHB4JywgbnVsbCwgLTNdLFxyXG4gICAgICAgIGltZzoge1xyXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICBoZWlnaHQ6IFsyNDUsICdhdXRvJ10sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzOyJdLCJzb3VyY2VSb290IjoiIn0=