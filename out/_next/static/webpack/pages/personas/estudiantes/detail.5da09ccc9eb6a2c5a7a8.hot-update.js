webpackHotUpdate_N_E("pages/personas/estudiantes/detail",{

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

/***/ "./pages/personas/estudiantes/detail.tsx":
/*!***********************************************!*\
  !*** ./pages/personas/estudiantes/detail.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _layouts_privateLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @layouts/privateLayout */ "./layouts/privateLayout.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Buttons */ "./components/Buttons/index.tsx");
/* harmony import */ var _components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/BreadCrumbs/titleBreadCrumb */ "./components/BreadCrumbs/titleBreadCrumb.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _services_personas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/personas.service */ "./services/personas.service.ts");
/* harmony import */ var _components_pages_personas_ItemDetailPersona__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/pages/personas/ItemDetailPersona */ "./components/pages/personas/ItemDetailPersona.tsx");




var _this = undefined,
    _jsxFileName = "C:\\Users\\diego\\Documents\\GitHub\\StrawBerryPy\\front-straw-berry-py\\pages\\personas\\estudiantes\\detail.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var DetailEstudianteContainer = function DetailEstudianteContainer(_ref) {
  _s();

  var items = _ref.items,
      id = _ref.id;
  var history = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(_services_personas_service__WEBPACK_IMPORTED_MODULE_10__["Estudiante"].getById, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(_services_personas_service__WEBPACK_IMPORTED_MODULE_10__["Estudiante"]["delete"], {
    variables: {
      id: id
    }
  }),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 1),
      deleteEstudiante = _useMutation2[0];

  var onClickEliminar = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return deleteEstudiante();

            case 2:
              history.push('/estudiantes');

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onClickEliminar() {
      return _ref2.apply(this, arguments);
    };
  }();

  var estudiante = data === null || data === void 0 ? void 0 : data.estudiante;
  return __jsx(_layouts_privateLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Estudiante",
    items: items,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-8 breadcrumb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "text-underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Informaci\xF3n Personal"), __jsx("ul", {
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_components_pages_personas_ItemDetailPersona__WEBPACK_IMPORTED_MODULE_11__["default"], {
    persona: estudiante === null || estudiante === void 0 ? void 0 : estudiante.persona,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  })), __jsx("h4", {
    className: "text-underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Informaci\xF3n Familiar"), __jsx("ul", {
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_components_pages_personas_ItemDetailPersona__WEBPACK_IMPORTED_MODULE_11__["default"], {
    persona: estudiante === null || estudiante === void 0 ? void 0 : estudiante.padre,
    label: "Padre: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }), __jsx(_components_pages_personas_ItemDetailPersona__WEBPACK_IMPORTED_MODULE_11__["default"], {
    persona: estudiante === null || estudiante === void 0 ? void 0 : estudiante.madre,
    label: "Madre: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }), __jsx(_components_pages_personas_ItemDetailPersona__WEBPACK_IMPORTED_MODULE_11__["default"], {
    persona: estudiante === null || estudiante === void 0 ? void 0 : estudiante.representante,
    label: "Representante: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Relaci\xF3n con el Representante: "), estudiante === null || estudiante === void 0 ? void 0 : estudiante.relacionRepresentante)))), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-4 my-1 order-md-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "outline-danger",
    block: true,
    onClick: onClickEliminar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Eliminar")), __jsx("div", {
    className: "col-md-4 my-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["BtnRegresar"], {
    variant: "outline-info",
    href: "/personas/estudiantes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  })))));
};

_s(DetailEstudianteContainer, "TBf9kgVePmztzGjzCEqUUt7qBNE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_9__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"]];
});

_c = DetailEstudianteContainer;

DetailEstudianteContainer.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
    var query;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = _ref3.query;
            return _context2.abrupt("return", {
              items: [{
                title: 'Estudiante',
                href: '/personas/estudiantes'
              }, {
                title: query.id,
                href: "/personas/estudiantes/update/?id=".concat(query.id)
              }],
              id: query.id
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (DetailEstudianteContainer);

var _c;

$RefreshReg$(_c, "DetailEstudianteContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wZXJzb25hcy9lc3R1ZGlhbnRlcy9kZXRhaWwudHN4Il0sIm5hbWVzIjpbIkRldGFpbEVzdHVkaWFudGVDb250YWluZXIiLCJpdGVtcyIsImlkIiwiaGlzdG9yeSIsInVzZVJvdXRlciIsInVzZVF1ZXJ5IiwiRXN0dWRpYW50ZSIsImdldEJ5SWQiLCJ2YXJpYWJsZXMiLCJkYXRhIiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwiZGVsZXRlRXN0dWRpYW50ZSIsIm9uQ2xpY2tFbGltaW5hciIsInB1c2giLCJlc3R1ZGlhbnRlIiwicGVyc29uYSIsInBhZHJlIiwibWFkcmUiLCJyZXByZXNlbnRhbnRlIiwicmVsYWNpb25SZXByZXNlbnRhbnRlIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJ0aXRsZSIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLGdCQUFoQjtBQUFpQyxTQUFLLE1BQXRDO0FBQXVDLFdBQU8sRUFBRVAsZUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFhLFdBQU8sRUFBQyxjQUFyQjtBQUFvQyxRQUFJLEVBQUMsdUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLENBekJGLENBREYsQ0FERjtBQXdDRCxDQXZERDs7R0FBTWIseUI7VUFDWUkscUQsRUFDVUMsdUQsRUFJQ00sMEQ7OztLQU52QlgseUI7O0FBeUROQSx5QkFBeUIsQ0FBQ3FCLGVBQTFCO0FBQUEsK0xBQTRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxpQkFBVCxTQUFTQSxLQUFUO0FBQUEsOENBQ25DO0FBQ0xyQixtQkFBSyxFQUFFLENBQ0w7QUFBRXNCLHFCQUFLLEVBQUUsWUFBVDtBQUF1QkMsb0JBQUksRUFBRTtBQUE3QixlQURLLEVBRUw7QUFBRUQscUJBQUssRUFBRUQsS0FBSyxDQUFDcEIsRUFBZjtBQUFtQnNCLG9CQUFJLDZDQUFzQ0YsS0FBSyxDQUFDcEIsRUFBNUM7QUFBdkIsZUFGSyxDQURGO0FBS0xBLGdCQUFFLEVBQUVvQixLQUFLLENBQUNwQjtBQUxMLGFBRG1DOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlRix3RkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZXJzb25hcy9lc3R1ZGlhbnRlcy9kZXRhaWwuNWRhMDljY2M5ZWI2YTJjNWE3YTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBQcml2YXRlTGF5b3V0IGZyb20gJ0BsYXlvdXRzL3ByaXZhdGVMYXlvdXQnO1xyXG5pbXBvcnQgeyBCdG5SZWdyZXNhciB9IGZyb20gJ0Bjb21wb25lbnRzL0J1dHRvbnMnO1xyXG5pbXBvcnQgQnJlYWRDcnVtYlRpdGxlIGZyb20gJ0Bjb21wb25lbnRzL0JyZWFkQ3J1bWJzL3RpdGxlQnJlYWRDcnVtYic7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgRXN0dWRpYW50ZSB9IGZyb20gJ0BzZXJ2aWNlcy9wZXJzb25hcy5zZXJ2aWNlJztcclxuaW1wb3J0IEl0ZW1EZXRhaWxQZXJzb25hIGZyb20gJ0Bjb21wb25lbnRzL3BhZ2VzL3BlcnNvbmFzL0l0ZW1EZXRhaWxQZXJzb25hJztcclxuXHJcbmNvbnN0IERldGFpbEVzdHVkaWFudGVDb250YWluZXIgPSAoeyBpdGVtcywgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEVzdHVkaWFudGUuZ2V0QnlJZCwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtkZWxldGVFc3R1ZGlhbnRlXSA9IHVzZU11dGF0aW9uKEVzdHVkaWFudGUuZGVsZXRlLCB7IHZhcmlhYmxlczogeyBpZCB9IH0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrRWxpbWluYXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkZWxldGVFc3R1ZGlhbnRlKCk7XHJcbiAgICBoaXN0b3J5LnB1c2goJy9lc3R1ZGlhbnRlcycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVzdHVkaWFudGUgPSBkYXRhPy5lc3R1ZGlhbnRlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByaXZhdGVMYXlvdXQgbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxCcmVhZENydW1iVGl0bGUgdGl0bGU9XCJFc3R1ZGlhbnRlXCIgaXRlbXM9e2l0ZW1zfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC11bmRlcmxpbmVcIj5JbmZvcm1hY2nDs24gUGVyc29uYWw8L2g0PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICA8SXRlbURldGFpbFBlcnNvbmEgcGVyc29uYT17ZXN0dWRpYW50ZT8ucGVyc29uYX0gLz5cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXVuZGVybGluZVwiPkluZm9ybWFjacOzbiBGYW1pbGlhcjwvaDQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxJdGVtRGV0YWlsUGVyc29uYSBwZXJzb25hPXtlc3R1ZGlhbnRlPy5wYWRyZX0gbGFiZWw9XCJQYWRyZTogXCIgLz5cclxuICAgICAgICAgICAgICA8SXRlbURldGFpbFBlcnNvbmEgcGVyc29uYT17ZXN0dWRpYW50ZT8ubWFkcmV9IGxhYmVsPVwiTWFkcmU6IFwiIC8+XHJcbiAgICAgICAgICAgICAgPEl0ZW1EZXRhaWxQZXJzb25hXHJcbiAgICAgICAgICAgICAgICBwZXJzb25hPXtlc3R1ZGlhbnRlPy5yZXByZXNlbnRhbnRlfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZXByZXNlbnRhbnRlOiBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5SZWxhY2nDs24gY29uIGVsIFJlcHJlc2VudGFudGU6IDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAge2VzdHVkaWFudGU/LnJlbGFjaW9uUmVwcmVzZW50YW50ZX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbXktMSBvcmRlci1tZC0xXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgYmxvY2sgb25DbGljaz17b25DbGlja0VsaW1pbmFyfT5cclxuICAgICAgICAgICAgICBFbGltaW5hclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBteS0xXCI+XHJcbiAgICAgICAgICAgIDxCdG5SZWdyZXNhciB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgaHJlZj1cIi9wZXJzb25hcy9lc3R1ZGlhbnRlc1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9Qcml2YXRlTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXRhaWxFc3R1ZGlhbnRlQ29udGFpbmVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0aXRsZTogJ0VzdHVkaWFudGUnLCBocmVmOiAnL3BlcnNvbmFzL2VzdHVkaWFudGVzJyB9LFxyXG4gICAgICB7IHRpdGxlOiBxdWVyeS5pZCwgaHJlZjogYC9wZXJzb25hcy9lc3R1ZGlhbnRlcy91cGRhdGUvP2lkPSR7cXVlcnkuaWR9YCB9LFxyXG4gICAgXSxcclxuICAgIGlkOiBxdWVyeS5pZCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsRXN0dWRpYW50ZUNvbnRhaW5lcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==