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
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "border", '1px solid rgba(34,36,38,.15)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "color", 'rgba(0,0,0,.87)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "borderRadius", '.28571429rem'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "webkitTransition", 'border-color .1s ease,-webkit-box-shadow .1s ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "transition", 'border-color .1s ease,-webkit-box-shadow .1s ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "transition", 'box-shadow .1s ease,border-color .1s ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "transition", 'box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "webkitBoxShadow", 'none'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "margin", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "width", '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "outline", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "swebkitTapHighlightColor", 'rgba(255,255,255,0)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "bg", '#4BB543'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "padding", '1em !important'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_button, "borderRadius", '5px !important'), _button),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci9zdHlsZXMuanMiXSwibmFtZXMiOlsic3R5bGVzIiwiYmFubmVyIiwicHQiLCJwYiIsIm10IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjb250ZW50IiwidG9wIiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsInJpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiU2hhcGVSaWdodCIsImNvbnRhaW5lciIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJidXR0b24iLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImN1cnNvciIsImhvdmVyIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiY29udGVudEJveCIsIm14IiwidGV4dEFsaWduIiwibWIiLCJpbWFnZUJveCIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLFFBQU0sRUFBRTtBQUNOQyxNQUFFLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxFQUFpRCxPQUFqRCxFQUEwRCxPQUExRCxDQURFO0FBRU5DLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsSUFBekIsRUFBK0IsQ0FBL0IsQ0FGRTtBQUdOQyxNQUFFLEVBQUUsQ0FBQyxNQUFELENBSEU7QUFJTkMsWUFBUSxFQUFFLFVBSko7QUFLTkMsVUFBTSxFQUFFLENBTEY7QUFNTixpQkFBYTtBQUNYQyxhQUFPLEVBQUUsSUFERTtBQUVYQyxTQUFHLEVBQUUsRUFGTTtBQUdYQyxZQUFNLEVBQUUsQ0FIRztBQUlYQyxVQUFJLEVBQUUsQ0FKSztBQUtYQyxZQUFNLEVBQUUsTUFMRztBQU1YQyxXQUFLLEVBQUUsT0FOSTtBQU9YTixZQUFNLEVBQUUsQ0FBQyxDQVBFO0FBUVhPLHNCQUFnQixhQVJMO0FBU1hDLHdCQUFrQixFQUFFO0FBVFQsS0FOUDtBQWlCTixnQkFBWTtBQUNWVCxjQUFRLEVBQUUsVUFEQTtBQUVWRSxhQUFPLEVBQUUsSUFGQztBQUdWRSxZQUFNLEVBQUUsTUFIRTtBQUlWTSxXQUFLLEVBQUUsQ0FKRztBQUtWVCxZQUFNLEVBQUUsQ0FBQyxDQUxDO0FBTVZVLHFCQUFlLGdCQUFTQyw2REFBVCxNQU5MO0FBT1ZKLHNCQUFnQixhQVBOO0FBUVZDLHdCQUFrQixFQUFFO0FBUlYsS0FqQk47QUEyQk5JLGFBQVMsRUFBRTtBQUNUQyxlQUFTLEVBQUUsU0FERjtBQUVUQyxhQUFPLEVBQUUsTUFGQTtBQUdUQyxtQkFBYSxFQUFFLFFBSE47QUFJVEMsb0JBQWMsRUFBRSxRQUpQO0FBS1RwQixRQUFFLEVBQUU7QUFMSyxLQTNCTDtBQWtDTnFCLFVBQU07QUFDSkgsYUFBTyxFQUFFLE1BREw7QUFFSmYsY0FBUSxFQUFFLFVBRk47QUFHSkcsU0FBRyxFQUFDLEtBSEE7QUFJSmdCLFlBQU0sRUFBRSxNQUpKO0FBS0pDLGtCQUFZLEVBQUUsTUFMVjtBQU1KQyxXQUFLLEVBQUUsTUFOSDtBQU9KQyxZQUFNLEVBQUUsU0FQSjtBQVFKQyxXQUFLLEVBQUUsT0FSSDtBQVNKQyxnQkFBVSxFQUFFLGNBVFI7QUFVSkMsYUFBTyxFQUFFLGlCQVZMO0FBV0pDLGdCQUFVLEVBQUU7QUFYUixvSEFZSSw4QkFaSiwrR0FhRyxpQkFiSCxzSEFjVSxjQWRWLDBIQWVjLG1EQWZkLG9IQWdCUSxtREFoQlIsb0hBaUJRLDJDQWpCUixvSEFrQlEsdUVBbEJSLHlIQW1CYSxNQW5CYixnSEFvQkksQ0FwQkosK0dBcUJHLE1BckJILGlIQXNCSyxDQXRCTCxrSUF1QnNCLHFCQXZCdEIsNEdBd0JBLFNBeEJBLGlIQXlCSyxnQkF6Qkwsc0hBMEJVLGdCQTFCVixXQWxDQTtBQStETkMsY0FBVSxFQUFFO0FBQ1ZwQixXQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixPQUFoQixFQUF5QixJQUF6QixFQUErQixLQUEvQixFQUFzQyxLQUF0QyxFQUE2QyxLQUE3QyxFQUFvRCxLQUFwRCxDQURHO0FBRVZxQixRQUFFLEVBQUUsTUFGTTtBQUdWQyxlQUFTLEVBQUUsUUFIRDtBQUlWQyxRQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBakM7QUFKTSxLQS9ETjtBQXFFTkMsWUFBUSxFQUFFO0FBQ1JkLG9CQUFjLEVBQUUsUUFEUjtBQUVSWSxlQUFTLEVBQUUsUUFGSDtBQUdSZCxhQUFPLEVBQUUsYUFIRDtBQUlSZSxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQUMsQ0FBWCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUMsSUFBbkMsRUFBeUMsQ0FBQyxDQUExQyxDQUpJO0FBS1JFLFNBQUcsRUFBRTtBQUNIaEMsZ0JBQVEsRUFBRSxVQURQO0FBRUhNLGNBQU0sRUFBRSxDQUFDLEdBQUQsRUFBTSxNQUFOO0FBRkw7QUFMRztBQXJFSjtBQURHLENBQWY7QUFzRmVYLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU1MjRjNDY3YTFlNjk0N2NmZjRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hhcGVMZWZ0IGZyb20gJ2Fzc2V0cy9zaGFwZS1sZWZ0LnBuZyc7XHJcbmltcG9ydCBTaGFwZVJpZ2h0IGZyb20gJ2Fzc2V0cy9zaGFwZS1yaWdodC5wbmcnO1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGJhbm5lcjoge1xyXG4gICAgICBwdDogWycxNDBweCcsICcxNDVweCcsICcxNTVweCcsICcxNzBweCcsIG51bGwsIG51bGwsICcxODBweCcsICcyMTVweCddLFxyXG4gICAgICBwYjogWzIsIG51bGwsIDAsIG51bGwsIDIsIDAsIG51bGwsIDVdLFxyXG4gICAgICBtdDogWycxMGVtJ10sXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDIsXHJcbiAgICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgYm90dG9tOiA2LFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzBlbScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgICAgekluZGV4OiAtMSxcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gbGVmdCAxMGVtJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6OmFmdGVyJzoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgICBib3R0b206ICc0MHB4JyxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICB6SW5kZXg6IC0xLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1NoYXBlUmlnaHR9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIHJpZ2h0JyxcclxuICAgICAgfSxcclxuICAgICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgbWluSGVpZ2h0OiAnaW5oZXJpdCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBwdDogJzEwZW0nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6JzUwJScsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgY29sb3I6ICdibHVlJyxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBob3ZlcjogJ2dyZWVuJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMS4yMTQyODU3MWVtJyxcclxuICAgICAgICBwYWRkaW5nOiAnLjY3ODU3MTQzZW0gMWVtJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMzQsMzYsMzgsLjE1KScsXHJcbiAgICAgICAgY29sb3I6ICdyZ2JhKDAsMCwwLC44NyknLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJy4yODU3MTQyOXJlbScsXHJcbiAgICAgICAgd2Via2l0VHJhbnNpdGlvbjogJ2JvcmRlci1jb2xvciAuMXMgZWFzZSwtd2Via2l0LWJveC1zaGFkb3cgLjFzIGVhc2UnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdib3JkZXItY29sb3IgLjFzIGVhc2UsLXdlYmtpdC1ib3gtc2hhZG93IC4xcyBlYXNlJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAuMXMgZWFzZSxib3JkZXItY29sb3IgLjFzIGVhc2UnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IC4xcyBlYXNlLGJvcmRlci1jb2xvciAuMXMgZWFzZSwtd2Via2l0LWJveC1zaGFkb3cgLjFzIGVhc2UnLFxyXG4gICAgICAgIHdlYmtpdEJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgICAgc3dlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwKScsXHJcbiAgICAgICAgYmc6ICcjNEJCNTQzJyxcclxuICAgICAgICBwYWRkaW5nOiAnMWVtICFpbXBvcnRhbnQnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCAhaW1wb3J0YW50J1xyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICBjb250ZW50Qm94OiB7XHJcbiAgICAgICAgd2lkdGg6IFsnMTAwJScsICc5MCUnLCAnNTM1cHgnLCBudWxsLCAnNTclJywgJzYwJScsICc2OCUnLCAnNjAlJ10sXHJcbiAgICAgICAgbXg6ICdhdXRvJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIG1iOiBbJzQwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3XSxcclxuICAgICAgfSxcclxuICAgICAgaW1hZ2VCb3g6IHtcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAgIG1iOiBbMCwgbnVsbCwgLTYsIG51bGwsIG51bGwsICctNDBweCcsIG51bGwsIC0zXSxcclxuICAgICAgICBpbWc6IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBbMjQ1LCAnYXV0byddLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlczsiXSwic291cmNlUm9vdCI6IiJ9