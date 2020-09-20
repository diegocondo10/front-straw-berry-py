webpackHotUpdate_N_E("pages/personas/create",{

/***/ "./utils/funciones.ts":
/*!****************************!*\
  !*** ./utils/funciones.ts ***!
  \****************************/
/*! exports provided: objectToB64, b64ToObject, toMoment, getId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToB64", function() { return objectToB64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64ToObject", function() { return b64ToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMoment", function() { return toMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var objectToB64 = function objectToB64(data) {
  return Buffer.from(JSON.stringify(data)).toString('base64');
};
var b64ToObject = function b64ToObject(b64) {
  return JSON.parse(new Buffer(b64, 'base64').toString('ascii'));
};
var toMoment = function toMoment(date, format) {
  var newDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('dddd DD [de] MMMM [de] yyyy, [a las ]') + moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('HH:mm:ss a');
  return newDate.toUpperCase();
};
var getId = function getId(object) {
  var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  return object[param];
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZnVuY2lvbmVzLnRzIl0sIm5hbWVzIjpbIm9iamVjdFRvQjY0IiwiZGF0YSIsIkJ1ZmZlciIsImZyb20iLCJKU09OIiwic3RyaW5naWZ5IiwidG9TdHJpbmciLCJiNjRUb09iamVjdCIsImI2NCIsInBhcnNlIiwidG9Nb21lbnQiLCJkYXRlIiwiZm9ybWF0IiwibmV3RGF0ZSIsIm1vbWVudCIsInRvVXBwZXJDYXNlIiwiZ2V0SWQiLCJvYmplY3QiLCJwYXJhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFEO0FBQUEsU0FDekJDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosSUFBZixDQUFaLEVBQWtDSyxRQUFsQyxDQUEyQyxRQUEzQyxDQUR5QjtBQUFBLENBQXBCO0FBR0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRDtBQUFBLFNBQ3pCSixJQUFJLENBQUNLLEtBQUwsQ0FBVyxJQUFJUCxNQUFKLENBQVdNLEdBQVgsRUFBZ0IsUUFBaEIsRUFBMEJGLFFBQTFCLENBQW1DLE9BQW5DLENBQVgsQ0FEeUI7QUFBQSxDQUFwQjtBQUdBLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFrQjtBQUN4QyxNQUFNQyxPQUFPLEdBQ1hDLDZDQUFNLENBQUNILElBQUQsQ0FBTixDQUFhQyxNQUFiLENBQW9CLHVDQUFwQixJQUNBRSw2Q0FBTSxDQUFDSCxJQUFELENBQU4sQ0FBYUMsTUFBYixDQUFvQixZQUFwQixDQUZGO0FBR0EsU0FBT0MsT0FBTyxDQUFDRSxXQUFSLEVBQVA7QUFDRCxDQUxNO0FBT0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsTUFBRCxFQUEwQjtBQUFBLE1BQWpCQyxLQUFpQix1RUFBVCxJQUFTO0FBQzdDLFNBQU9ELE1BQU0sQ0FBQ0MsS0FBRCxDQUFiO0FBQ0QsQ0FGTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZXJzb25hcy9jcmVhdGUuNjBkZDBmMDdlNjMyYWYwMTdlYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBvYmplY3RUb0I2NCA9IChkYXRhKSA9PlxyXG4gIEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KGRhdGEpKS50b1N0cmluZygnYmFzZTY0Jyk7XHJcblxyXG5leHBvcnQgY29uc3QgYjY0VG9PYmplY3QgPSAoYjY0KSA9PlxyXG4gIEpTT04ucGFyc2UobmV3IEJ1ZmZlcihiNjQsICdiYXNlNjQnKS50b1N0cmluZygnYXNjaWknKSk7XHJcblxyXG5leHBvcnQgY29uc3QgdG9Nb21lbnQgPSAoZGF0ZSwgZm9ybWF0KSA9PiB7XHJcbiAgY29uc3QgbmV3RGF0ZSA9XHJcbiAgICBtb21lbnQoZGF0ZSkuZm9ybWF0KCdkZGRkIEREIFtkZV0gTU1NTSBbZGVdIHl5eXksIFthIGxhcyBdJykgK1xyXG4gICAgbW9tZW50KGRhdGUpLmZvcm1hdCgnSEg6bW06c3MgYScpO1xyXG4gIHJldHVybiBuZXdEYXRlLnRvVXBwZXJDYXNlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SWQgPSAob2JqZWN0LCBwYXJhbSA9ICdpZCcpID0+IHtcclxuICByZXR1cm4gb2JqZWN0W3BhcmFtXTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==