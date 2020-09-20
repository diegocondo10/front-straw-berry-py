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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _layouts_privateLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @layouts/privateLayout */ "./layouts/privateLayout.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Buttons */ "./components/Buttons/index.tsx");
/* harmony import */ var _components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/BreadCrumbs/titleBreadCrumb */ "./components/BreadCrumbs/titleBreadCrumb.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _services_personas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/personas.service */ "./services/personas.service.ts");
/* harmony import */ var _components_pages_personas_ItemDetailPersona__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/pages/personas/ItemDetailPersona */ "./components/pages/personas/ItemDetailPersona.tsx");



var _this = undefined,
    _jsxFileName = "C:\\Users\\diego\\Documents\\GitHub\\StrawBerryPy\\front-straw-berry-py\\pages\\personas\\estudiantes\\detail.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var DetailEstudianteContainer = function DetailEstudianteContainer(_ref) {
  _s();

  var items = _ref.items,
      id = _ref.id;
  var history = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(_services_personas_service__WEBPACK_IMPORTED_MODULE_9__["Estudiante"].getByIdDetailEst, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var onClickEliminar = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              history.push('/estudiantes');

            case 1:
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
  return __jsx(_layouts_privateLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Docente",
    items: items,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-8 breadcrumb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "text-underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Informaci\xF3n Personal"), __jsx("ul", {
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(_components_pages_personas_ItemDetailPersona__WEBPACK_IMPORTED_MODULE_10__["default"], {
    persona: estudiante === null || estudiante === void 0 ? void 0 : estudiante.persona,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  })), __jsx("h4", {
    className: "text-underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Informaci\xF3n Familiar"), __jsx("ul", {
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Padre:"), ' ' + (estudiante === null || estudiante === void 0 ? void 0 : estudiante.padre)), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Madre:"), ' ' + (estudiante === null || estudiante === void 0 ? void 0 : estudiante.madre)), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Representante:"), ' ' + (estudiante === null || estudiante === void 0 ? void 0 : estudiante.representante)), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Relaci\xF3n con el Representante:"), ' ' + (estudiante === null || estudiante === void 0 ? void 0 : estudiante.relacionRepresentante))))), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-4 my-1 order-md-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-danger",
    block: true,
    onClick: onClickEliminar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Eliminar")), __jsx("div", {
    className: "col.md-4 my-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx(_components_Buttons__WEBPACK_IMPORTED_MODULE_6__["BtnRegresar"], {
    variant: "outline-info",
    href: "/personas/estudiantes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  })))));
};

_s(DetailEstudianteContainer, "hlFeiO5Bw/KAHL5wLF9hHOmfR3Y=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_8__["useQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc29uYXMvZXN0dWRpYW50ZXMvZGV0YWlsLnRzeCJdLCJuYW1lcyI6WyJEZXRhaWxFc3R1ZGlhbnRlQ29udGFpbmVyIiwiaXRlbXMiLCJpZCIsImhpc3RvcnkiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsIkVzdHVkaWFudGUiLCJnZXRCeUlkRGV0YWlsRXN0IiwidmFyaWFibGVzIiwiZGF0YSIsImxvYWRpbmciLCJvbkNsaWNrRWxpbWluYXIiLCJwdXNoIiwiZXN0dWRpYW50ZSIsInBlcnNvbmEiLCJwYWRyZSIsIm1hZHJlIiwicmVwcmVzZW50YW50ZSIsInJlbGFjaW9uUmVwcmVzZW50YW50ZSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwidGl0bGUiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxNQUFUQyxFQUFTLFFBQVRBLEVBQVM7QUFDbkQsTUFBTUMsT0FBTyxHQUFHQyw2REFBUyxFQUF6Qjs7QUFEbUQsa0JBRXpCQywrREFBUSxDQUFDQyxxRUFBVSxDQUFDQyxnQkFBWixFQUE4QjtBQUM5REMsYUFBUyxFQUFFO0FBQUVOLFFBQUUsRUFBRkE7QUFBRjtBQURtRCxHQUE5QixDQUZpQjtBQUFBLE1BRTNDTyxJQUYyQyxhQUUzQ0EsSUFGMkM7QUFBQSxNQUVyQ0MsT0FGcUMsYUFFckNBLE9BRnFDOztBQU1uRCxNQUFNQyxlQUFlO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QlIscUJBQU8sQ0FBQ1MsSUFBUixDQUFhLGNBQWI7O0FBRHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7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QkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsQ0EvQkYsQ0FERixDQURGO0FBOENELENBMUREOztHQUFNWCx5QjtVQUNZSSxxRCxFQUNVQyx1RDs7O0tBRnRCTCx5Qjs7QUE0RE5BLHlCQUF5QixDQUFDbUIsZUFBMUI7QUFBQSwrTEFBNEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGlCQUFULFNBQVNBLEtBQVQ7QUFBQSw4Q0FDbkM7QUFDTG5CLG1CQUFLLEVBQUUsQ0FDTDtBQUFFb0IscUJBQUssRUFBRSxZQUFUO0FBQXVCQyxvQkFBSSxFQUFFO0FBQTdCLGVBREssRUFFTDtBQUFFRCxxQkFBSyxFQUFFRCxLQUFLLENBQUNsQixFQUFmO0FBQW1Cb0Isb0JBQUksNkNBQXNDRixLQUFLLENBQUNsQixFQUE1QztBQUF2QixlQUZLLENBREY7QUFLTEEsZ0JBQUUsRUFBRWtCLEtBQUssQ0FBQ2xCO0FBTEwsYUFEbUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBNUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWVGLHdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BlcnNvbmFzL2VzdHVkaWFudGVzL2RldGFpbC5hYjBjYjJhMTAwYmNiNTMxOWRkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUHJpdmF0ZUxheW91dCBmcm9tICdAbGF5b3V0cy9wcml2YXRlTGF5b3V0JztcclxuaW1wb3J0IHsgQnRuUmVncmVzYXIgfSBmcm9tICdAY29tcG9uZW50cy9CdXR0b25zJztcclxuaW1wb3J0IEJyZWFkQ3J1bWJUaXRsZSBmcm9tICdAY29tcG9uZW50cy9CcmVhZENydW1icy90aXRsZUJyZWFkQ3J1bWInO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgRXN0dWRpYW50ZSB9IGZyb20gJ0BzZXJ2aWNlcy9wZXJzb25hcy5zZXJ2aWNlJztcclxuaW1wb3J0IEl0ZW1EZXRhaWxQZXJzb25hIGZyb20gJ0Bjb21wb25lbnRzL3BhZ2VzL3BlcnNvbmFzL0l0ZW1EZXRhaWxQZXJzb25hJztcclxuXHJcbmNvbnN0IERldGFpbEVzdHVkaWFudGVDb250YWluZXIgPSAoeyBpdGVtcywgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEVzdHVkaWFudGUuZ2V0QnlJZERldGFpbEVzdCwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tFbGltaW5hciA9IGFzeW5jICgpID0+IHtcclxuICAgIGhpc3RvcnkucHVzaCgnL2VzdHVkaWFudGVzJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZXN0dWRpYW50ZSA9IGRhdGE/LmVzdHVkaWFudGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJpdmF0ZUxheW91dCBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPEJyZWFkQ3J1bWJUaXRsZSB0aXRsZT1cIkRvY2VudGVcIiBpdGVtcz17aXRlbXN9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXVuZGVybGluZVwiPkluZm9ybWFjacOzbiBQZXJzb25hbDwvaDQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxJdGVtRGV0YWlsUGVyc29uYSBwZXJzb25hPXtlc3R1ZGlhbnRlPy5wZXJzb25hfSAvPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtdW5kZXJsaW5lXCI+SW5mb3JtYWNpw7NuIEZhbWlsaWFyPC9oND5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5QYWRyZTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIHsnICcgKyBlc3R1ZGlhbnRlPy5wYWRyZX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFkcmU6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICB7JyAnICsgZXN0dWRpYW50ZT8ubWFkcmV9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlJlcHJlc2VudGFudGU6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICB7JyAnICsgZXN0dWRpYW50ZT8ucmVwcmVzZW50YW50ZX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+UmVsYWNpw7NuIGNvbiBlbCBSZXByZXNlbnRhbnRlOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgeycgJyArIGVzdHVkaWFudGU/LnJlbGFjaW9uUmVwcmVzZW50YW50ZX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbXktMSBvcmRlci1tZC0xXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgYmxvY2sgb25DbGljaz17b25DbGlja0VsaW1pbmFyfT5cclxuICAgICAgICAgICAgICBFbGltaW5hclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wubWQtNCBteS0xXCI+XHJcbiAgICAgICAgICAgIDxCdG5SZWdyZXNhciB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgaHJlZj1cIi9wZXJzb25hcy9lc3R1ZGlhbnRlc1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9Qcml2YXRlTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXRhaWxFc3R1ZGlhbnRlQ29udGFpbmVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0aXRsZTogJ0VzdHVkaWFudGUnLCBocmVmOiAnL3BlcnNvbmFzL2VzdHVkaWFudGVzJyB9LFxyXG4gICAgICB7IHRpdGxlOiBxdWVyeS5pZCwgaHJlZjogYC9wZXJzb25hcy9lc3R1ZGlhbnRlcy91cGRhdGUvP2lkPSR7cXVlcnkuaWR9YCB9LFxyXG4gICAgXSxcclxuICAgIGlkOiBxdWVyeS5pZCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsRXN0dWRpYW50ZUNvbnRhaW5lcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==