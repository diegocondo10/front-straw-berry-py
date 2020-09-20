webpackHotUpdate_N_E("pages/personas/estudiantes/detail",{

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
              history.push('/personas/estudiantes');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc29uYXMvZXN0dWRpYW50ZXMvZGV0YWlsLnRzeCJdLCJuYW1lcyI6WyJEZXRhaWxFc3R1ZGlhbnRlQ29udGFpbmVyIiwiaXRlbXMiLCJpZCIsImhpc3RvcnkiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsIkVzdHVkaWFudGUiLCJnZXRCeUlkIiwidmFyaWFibGVzIiwiZGF0YSIsImxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsImRlbGV0ZUVzdHVkaWFudGUiLCJvbkNsaWNrRWxpbWluYXIiLCJwdXNoIiwiZXN0dWRpYW50ZSIsInBlcnNvbmEiLCJwYWRyZSIsIm1hZHJlIiwicmVwcmVzZW50YW50ZSIsInJlbGFjaW9uUmVwcmVzZW50YW50ZSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwidGl0bGUiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLEtBQWdCLFFBQWhCQSxLQUFnQjtBQUFBLE1BQVRDLEVBQVMsUUFBVEEsRUFBUztBQUNuRCxNQUFNQyxPQUFPLEdBQUdDLDZEQUFTLEVBQXpCOztBQURtRCxrQkFFekJDLCtEQUFRLENBQUNDLHNFQUFVLENBQUNDLE9BQVosRUFBcUI7QUFDckRDLGFBQVMsRUFBRTtBQUFFTixRQUFFLEVBQUZBO0FBQUY7QUFEMEMsR0FBckIsQ0FGaUI7QUFBQSxNQUUzQ08sSUFGMkMsYUFFM0NBLElBRjJDO0FBQUEsTUFFckNDLE9BRnFDLGFBRXJDQSxPQUZxQzs7QUFBQSxxQkFNeEJDLGtFQUFXLENBQUNMLHNFQUFVLFVBQVgsRUFBb0I7QUFBRUUsYUFBUyxFQUFFO0FBQUVOLFFBQUUsRUFBRkE7QUFBRjtBQUFiLEdBQXBCLENBTmE7QUFB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O0FBQUE7QUFBQSxnQkFERixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFhLFdBQU8sRUFBQyxjQUFyQjtBQUFvQyxRQUFJLEVBQUMsdUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLENBekJGLENBREYsQ0FERjtBQXdDRCxDQXZERDs7R0FBTWIseUI7VUFDWUkscUQsRUFDVUMsdUQsRUFJQ00sMEQ7OztLQU52QlgseUI7O0FBeUROQSx5QkFBeUIsQ0FBQ3FCLGVBQTFCO0FBQUEsK0xBQTRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxpQkFBVCxTQUFTQSxLQUFUO0FBQUEsOENBQ25DO0FBQ0xyQixtQkFBSyxFQUFFLENBQ0w7QUFBRXNCLHFCQUFLLEVBQUUsWUFBVDtBQUF1QkMsb0JBQUksRUFBRTtBQUE3QixlQURLLEVBRUw7QUFBRUQscUJBQUssRUFBRUQsS0FBSyxDQUFDcEIsRUFBZjtBQUFtQnNCLG9CQUFJLDZDQUFzQ0YsS0FBSyxDQUFDcEIsRUFBNUM7QUFBdkIsZUFGSyxDQURGO0FBS0xBLGdCQUFFLEVBQUVvQixLQUFLLENBQUNwQjtBQUxMLGFBRG1DOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlRix3RkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZXJzb25hcy9lc3R1ZGlhbnRlcy9kZXRhaWwuNTg1NmQ2M2Y1YzNlOTNhYTU2NWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFByaXZhdGVMYXlvdXQgZnJvbSAnQGxheW91dHMvcHJpdmF0ZUxheW91dCc7XHJcbmltcG9ydCB7IEJ0blJlZ3Jlc2FyIH0gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9ucyc7XHJcbmltcG9ydCBCcmVhZENydW1iVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvQnJlYWRDcnVtYnMvdGl0bGVCcmVhZENydW1iJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBFc3R1ZGlhbnRlIH0gZnJvbSAnQHNlcnZpY2VzL3BlcnNvbmFzLnNlcnZpY2UnO1xyXG5pbXBvcnQgSXRlbURldGFpbFBlcnNvbmEgZnJvbSAnQGNvbXBvbmVudHMvcGFnZXMvcGVyc29uYXMvSXRlbURldGFpbFBlcnNvbmEnO1xyXG5cclxuY29uc3QgRGV0YWlsRXN0dWRpYW50ZUNvbnRhaW5lciA9ICh7IGl0ZW1zLCBpZCB9KSA9PiB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZyB9ID0gdXNlUXVlcnkoRXN0dWRpYW50ZS5nZXRCeUlkLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2RlbGV0ZUVzdHVkaWFudGVdID0gdXNlTXV0YXRpb24oRXN0dWRpYW50ZS5kZWxldGUsIHsgdmFyaWFibGVzOiB7IGlkIH0gfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tFbGltaW5hciA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRlbGV0ZUVzdHVkaWFudGUoKTtcclxuICAgIGhpc3RvcnkucHVzaCgnL3BlcnNvbmFzL2VzdHVkaWFudGVzJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZXN0dWRpYW50ZSA9IGRhdGE/LmVzdHVkaWFudGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJpdmF0ZUxheW91dCBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPEJyZWFkQ3J1bWJUaXRsZSB0aXRsZT1cIkVzdHVkaWFudGVcIiBpdGVtcz17aXRlbXN9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXVuZGVybGluZVwiPkluZm9ybWFjacOzbiBQZXJzb25hbDwvaDQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxJdGVtRGV0YWlsUGVyc29uYSBwZXJzb25hPXtlc3R1ZGlhbnRlPy5wZXJzb25hfSAvPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtdW5kZXJsaW5lXCI+SW5mb3JtYWNpw7NuIEZhbWlsaWFyPC9oND5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgPEl0ZW1EZXRhaWxQZXJzb25hIHBlcnNvbmE9e2VzdHVkaWFudGU/LnBhZHJlfSBsYWJlbD1cIlBhZHJlOiBcIiAvPlxyXG4gICAgICAgICAgICAgIDxJdGVtRGV0YWlsUGVyc29uYSBwZXJzb25hPXtlc3R1ZGlhbnRlPy5tYWRyZX0gbGFiZWw9XCJNYWRyZTogXCIgLz5cclxuICAgICAgICAgICAgICA8SXRlbURldGFpbFBlcnNvbmFcclxuICAgICAgICAgICAgICAgIHBlcnNvbmE9e2VzdHVkaWFudGU/LnJlcHJlc2VudGFudGV9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJlcHJlc2VudGFudGU6IFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlJlbGFjacOzbiBjb24gZWwgUmVwcmVzZW50YW50ZTogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICB7ZXN0dWRpYW50ZT8ucmVsYWNpb25SZXByZXNlbnRhbnRlfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBteS0xIG9yZGVyLW1kLTFcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBibG9jayBvbkNsaWNrPXtvbkNsaWNrRWxpbWluYXJ9PlxyXG4gICAgICAgICAgICAgIEVsaW1pbmFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG15LTFcIj5cclxuICAgICAgICAgICAgPEJ0blJlZ3Jlc2FyIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBocmVmPVwiL3BlcnNvbmFzL2VzdHVkaWFudGVzXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L1ByaXZhdGVMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkRldGFpbEVzdHVkaWFudGVDb250YWluZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IHRpdGxlOiAnRXN0dWRpYW50ZScsIGhyZWY6ICcvcGVyc29uYXMvZXN0dWRpYW50ZXMnIH0sXHJcbiAgICAgIHsgdGl0bGU6IHF1ZXJ5LmlkLCBocmVmOiBgL3BlcnNvbmFzL2VzdHVkaWFudGVzL3VwZGF0ZS8/aWQ9JHtxdWVyeS5pZH1gIH0sXHJcbiAgICBdLFxyXG4gICAgaWQ6IHF1ZXJ5LmlkLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxFc3R1ZGlhbnRlQ29udGFpbmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9