webpackHotUpdate_N_E("pages/personas/estudiantes/detail",{

/***/ "./components/Buttons/index.tsx":
/*!**************************************!*\
  !*** ./components/Buttons/index.tsx ***!
  \**************************************/
/*! exports provided: BtnRegresar, BtnAgregar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnRegresar", function() { return BtnRegresar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnAgregar", function() { return BtnAgregar; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\diego\\Documents\\GitHub\\StrawBerryPy\\front-straw-berry-py\\components\\Buttons\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var defaultsBtnRegresar = {
  variant: 'outline-danger',
  block: true
};
var BtnRegresar = function BtnRegresar(props) {
  _s();

  var _defaultsBtnRegresar$ = _objectSpread(_objectSpread({}, defaultsBtnRegresar), props),
      href = _defaultsBtnRegresar$.href,
      label = _defaultsBtnRegresar$.label,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_defaultsBtnRegresar$, ["href", "label"]);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var onClick = function onClick() {
    router.push(href);
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    onClick: onClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), label || 'Regresar');
};

_s(BtnRegresar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = BtnRegresar;
var BtnAgregar = {};

var _c;

$RefreshReg$(_c, "BtnRegresar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b25zL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJkZWZhdWx0c0J0blJlZ3Jlc2FyIiwidmFyaWFudCIsImJsb2NrIiwiQnRuUmVncmVzYXIiLCJwcm9wcyIsImhyZWYiLCJsYWJlbCIsInJlc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvbkNsaWNrIiwicHVzaCIsIkJ0bkFncmVnYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsbUJBQWdDLEdBQUc7QUFDdkNDLFNBQU8sRUFBRSxnQkFEOEI7QUFFdkNDLE9BQUssRUFBRTtBQUZnQyxDQUF6QztBQUtPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBOEI7QUFBQTs7QUFBQSw4REFDakJKLG1CQURpQixHQUNPSSxLQURQO0FBQUEsTUFDL0NDLElBRCtDLHlCQUMvQ0EsSUFEK0M7QUFBQSxNQUN6Q0MsS0FEeUMseUJBQ3pDQSxLQUR5QztBQUFBLE1BQy9CQyxJQUQrQjs7QUFHdkQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCRixVQUFNLENBQUNHLElBQVAsQ0FBWU4sSUFBWjtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLHNEQUFELHlGQUFZRSxJQUFaO0FBQWtCLFdBQU8sRUFBRUcsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNHSixLQUFLLElBQUksVUFEWixDQURGO0FBS0QsQ0FkTTs7R0FBTUgsVztVQUdJTSxxRDs7O0tBSEpOLFc7QUFvQk4sSUFBTVMsVUFBVSxHQUFHLEVBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BlcnNvbmFzL2VzdHVkaWFudGVzL2RldGFpbC42MmRhMDE1ZTVjNWNiM2EyZTQwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvblByb3BzIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IGRlZmF1bHRzQnRuUmVncmVzYXI6IEJ1dHRvblByb3BzID0ge1xyXG4gIHZhcmlhbnQ6ICdvdXRsaW5lLWRhbmdlcicsXHJcbiAgYmxvY2s6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQnRuUmVncmVzYXIgPSAocHJvcHM/OiBCdG5SZWdyZXNhclByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBocmVmLCBsYWJlbCwgLi4ucmVzdCB9ID0geyAuLi5kZWZhdWx0c0J0blJlZ3Jlc2FyLCAuLi5wcm9wcyB9O1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGhyZWYpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIHsuLi5yZXN0fSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAge2xhYmVsIHx8ICdSZWdyZXNhcid9XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgdHlwZSBCdG5SZWdyZXNhclByb3BzID0ge1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBsYWJlbD86IHN0cmluZztcclxufSAmIEJ1dHRvblByb3BzO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ0bkFncmVnYXIgPSB7fTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==