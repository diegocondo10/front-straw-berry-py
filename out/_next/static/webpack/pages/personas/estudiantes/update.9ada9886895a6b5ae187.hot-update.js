webpackHotUpdate_N_E("pages/personas/estudiantes/update",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./pages/personas/estudiantes/update.tsx":
/*!***********************************************!*\
  !*** ./pages/personas/estudiantes/update.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_pages_personas_estudiantes_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/pages/personas/estudiantes/form */ "./components/pages/personas/estudiantes/form.tsx");
/* harmony import */ var _layouts_privateLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @layouts/privateLayout */ "./layouts/privateLayout.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _services_personas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/personas.service */ "./services/personas.service.ts");





var _this = undefined,
    _jsxFileName = "C:\\Users\\diego\\Documents\\GitHub\\StrawBerryPy\\front-straw-berry-py\\pages\\personas\\estudiantes\\update.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;








var UpdateEstudianteContainer = function UpdateEstudianteContainer(_ref) {
  _s();

  var title = _ref.title,
      items = _ref.items,
      id = _ref.id;
  var methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    mode: 'onChange'
  });

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(_services_personas_service__WEBPACK_IMPORTED_MODULE_10__["Estudiante"].getById, {
    variables: {
      id: id
    },
    onCompleted: function onCompleted(_ref2) {
      var estudiante = _ref2.estudiante;
      methods.reset(estudiante);
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(_services_personas_service__WEBPACK_IMPORTED_MODULE_10__["Estudiante"].update),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 1),
      update = _useMutation2[0];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var onSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(input) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(input);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx(_layouts_privateLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["FormProvider"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, methods, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(_components_pages_personas_estudiantes_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: title,
    items: items,
    onSubmit: onSubmit,
    personas: data === null || data === void 0 ? void 0 : data.personas,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })));
};

_s(UpdateEstudianteContainer, "1HtOs0G5Yn5Ug3Vn9j4don9tex4=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"], _apollo_client__WEBPACK_IMPORTED_MODULE_9__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"], next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = UpdateEstudianteContainer;

UpdateEstudianteContainer.getInitialProps = function (_ref4) {
  var query = _ref4.query;
  var title = 'Editar Estudiante';
  var items = [{
    title: 'Estudiante',
    href: '/personas/estudiantes'
  }, {
    title: 'Editar Estudiante',
    active: true
  }];
  return {
    items: items,
    title: title,
    id: query.id
  };
};

/* harmony default export */ __webpack_exports__["default"] = (UpdateEstudianteContainer);

var _c;

$RefreshReg$(_c, "UpdateEstudianteContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wZXJzb25hcy9lc3R1ZGlhbnRlcy91cGRhdGUudHN4Il0sIm5hbWVzIjpbIlVwZGF0ZUVzdHVkaWFudGVDb250YWluZXIiLCJ0aXRsZSIsIml0ZW1zIiwiaWQiLCJtZXRob2RzIiwidXNlRm9ybSIsIm1vZGUiLCJ1c2VRdWVyeSIsIkVzdHVkaWFudGUiLCJnZXRCeUlkIiwidmFyaWFibGVzIiwib25Db21wbGV0ZWQiLCJlc3R1ZGlhbnRlIiwicmVzZXQiLCJsb2FkaW5nIiwiZGF0YSIsInVzZU11dGF0aW9uIiwidXBkYXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwib25TdWJtaXQiLCJpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJwZXJzb25hcyIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiaHJlZiIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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LEdBQTRDLGlCQUFlO0FBQUEsTUFBWkMsS0FBWSxTQUFaQSxLQUFZO0FBQ3pELE1BQUl6QixLQUFLLEdBQUcsbUJBQVo7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUFFRCxTQUFLLEVBQUUsWUFBVDtBQUF1QjBCLFFBQUksRUFBRTtBQUE3QixHQURZLEVBRVo7QUFBRTFCLFNBQUssRUFBRSxtQkFBVDtBQUE4QjJCLFVBQU0sRUFBRTtBQUF0QyxHQUZZLENBQWQ7QUFLQSxTQUFPO0FBQ0wxQixTQUFLLEVBQUxBLEtBREs7QUFFTEQsU0FBSyxFQUFMQSxLQUZLO0FBR0xFLE1BQUUsRUFBRXVCLEtBQUssQ0FBQ3ZCO0FBSEwsR0FBUDtBQUtELENBWkQ7O0FBY2VILHdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BlcnNvbmFzL2VzdHVkaWFudGVzL3VwZGF0ZS45YWRhOTg4Njg5NWE2YjVhZTE4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIEZvcm1Qcm92aWRlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEVzdHVkaWFudGVGb3JtQ29udGFpbmVyIGZyb20gJ0Bjb21wb25lbnRzL3BhZ2VzL3BlcnNvbmFzL2VzdHVkaWFudGVzL2Zvcm0nO1xyXG5pbXBvcnQgUHJpdmF0ZUxheW91dCBmcm9tICdAbGF5b3V0cy9wcml2YXRlTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBFc3R1ZGlhbnRlIH0gZnJvbSAnQHNlcnZpY2VzL3BlcnNvbmFzLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgVXBkYXRlRXN0dWRpYW50ZUNvbnRhaW5lciA9ICh7IHRpdGxlLCBpdGVtcywgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtKHtcclxuICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZGF0YSB9ID0gdXNlUXVlcnkoRXN0dWRpYW50ZS5nZXRCeUlkLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICAgIG9uQ29tcGxldGVkOiAoeyBlc3R1ZGlhbnRlIH0pID0+IHtcclxuICAgICAgbWV0aG9kcy5yZXNldChlc3R1ZGlhbnRlKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFt1cGRhdGVdID0gdXNlTXV0YXRpb24oRXN0dWRpYW50ZS51cGRhdGUpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChpbnB1dCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJpdmF0ZUxheW91dCBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30+XHJcbiAgICAgICAgPEVzdHVkaWFudGVGb3JtQ29udGFpbmVyXHJcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICBpdGVtcz17aXRlbXN9XHJcbiAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICAgICAgICBwZXJzb25hcz17ZGF0YT8ucGVyc29uYXN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtUHJvdmlkZXI+XHJcbiAgICA8L1ByaXZhdGVMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcblVwZGF0ZUVzdHVkaWFudGVDb250YWluZXIuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xyXG4gIGxldCB0aXRsZSA9ICdFZGl0YXIgRXN0dWRpYW50ZSc7XHJcbiAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICB7IHRpdGxlOiAnRXN0dWRpYW50ZScsIGhyZWY6ICcvcGVyc29uYXMvZXN0dWRpYW50ZXMnIH0sXHJcbiAgICB7IHRpdGxlOiAnRWRpdGFyIEVzdHVkaWFudGUnLCBhY3RpdmU6IHRydWUgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXRlbXMsXHJcbiAgICB0aXRsZSxcclxuICAgIGlkOiBxdWVyeS5pZCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlRXN0dWRpYW50ZUNvbnRhaW5lcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==