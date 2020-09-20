webpackHotUpdate_N_E("pages/personas/estudiantes/create",{

/***/ "./components/pages/personas/estudiantes/form.tsx":
/*!********************************************************!*\
  !*** ./components/pages/personas/estudiantes/form.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/forms/CustomDropdown */ "./components/forms/CustomDropdown.tsx");
/* harmony import */ var _components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/forms/CustomTextInput */ "./components/forms/CustomTextInput.tsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Buttons */ "./components/Buttons/index.tsx");
/* harmony import */ var _components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/BreadCrumbs/titleBreadCrumb */ "./components/BreadCrumbs/titleBreadCrumb.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _components_forms_CustomTextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/forms/CustomTextArea */ "./components/forms/CustomTextArea.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\diego\\Documents\\GitHub\\StrawBerryPy\\front-straw-berry-py\\components\\pages\\personas\\estudiantes\\form.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var EstudianteFormContainer = function EstudianteFormContainer(_ref) {
  _s();

  var title = _ref.title,
      items = _ref.items,
      onSubmit = _ref.onSubmit;

  var _useFormContext = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useFormContext"])(),
      register = _useFormContext.register,
      handleSubmit = _useFormContext.handleSubmit,
      errors = _useFormContext.errors;

  console.log(title);
  return __jsx("main", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: title,
    items: items,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-md-10 jumbotron rounded",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Persona:",
    name: "persona",
    options: [],
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Padre:",
    name: "padre",
    options: [],
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Madre:",
    name: "madre",
    options: [],
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Representantes:",
    name: "representantes",
    options: [],
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Relaci\xF3n con el Representante:",
    name: "relacionRepresentante",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextArea__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Observaciones:",
    name: "observaciones",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, {
    className: "justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-5 mt-3 my-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx(_components_Buttons__WEBPACK_IMPORTED_MODULE_4__["BtnRegresar"], {
    href: "/personas/estudiantes",
    variant: "outline-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-5 mt-3 my-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "outline-primary",
    block: true,
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "Guardar")))))));
};

_s(EstudianteFormContainer, "waV39zqUY9VjX+/2UdePKOW3Hjw=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useFormContext"]];
});

_c = EstudianteFormContainer;
/* harmony default export */ __webpack_exports__["default"] = (EstudianteFormContainer);

var _c;

$RefreshReg$(_c, "EstudianteFormContainer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9wZXJzb25hcy9lc3R1ZGlhbnRlcy9mb3JtLnRzeCJdLCJuYW1lcyI6WyJFc3R1ZGlhbnRlRm9ybUNvbnRhaW5lciIsInRpdGxlIiwiaXRlbXMiLCJvblN1Ym1pdCIsInVzZUZvcm1Db250ZXh0IiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJjb25zb2xlIiwibG9nIiwicmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsT0FBZ0M7QUFBQTs7QUFBQSxNQUE3QkMsS0FBNkIsUUFBN0JBLEtBQTZCO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSx3QkFDbkJDLHNFQUFjLEVBREs7QUFBQSxNQUN0REMsUUFEc0QsbUJBQ3REQSxRQURzRDtBQUFBLE1BQzVDQyxZQUQ0QyxtQkFDNUNBLFlBRDRDO0FBQUEsTUFDOUJDLE1BRDhCLG1CQUM5QkEsTUFEOEI7O0FBRTlEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUVBLFNBQ0U7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtFQUFEO0FBQWlCLFNBQUssRUFBRUEsS0FBeEI7QUFBK0IsU0FBSyxFQUFFQyxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFFSSxZQUFZLENBQUNILFFBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBTSxHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdFQUFEO0FBQ0UsU0FBSyxFQUFDLFVBRFI7QUFFRSxRQUFJLEVBQUMsU0FGUDtBQUdFLFdBQU8sRUFBRSxFQUhYO0FBSUUsU0FBSyxFQUFFO0FBQUVPLGNBQVEsRUFBRTtBQUFaLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFVRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdFQUFEO0FBQ0UsU0FBSyxFQUFDLFFBRFI7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLFdBQU8sRUFBRSxFQUhYO0FBSUUsU0FBSyxFQUFFO0FBQUVBLGNBQVEsRUFBRTtBQUFaLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVkYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3RUFBRDtBQUNFLFNBQUssRUFBQyxRQURSO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxXQUFPLEVBQUUsRUFIWDtBQUlFLFNBQUssRUFBRTtBQUFFQSxjQUFRLEVBQUU7QUFBWixLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQW5CRixFQTRCRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdFQUFEO0FBQ0UsU0FBSyxFQUFDLGlCQURSO0FBRUUsUUFBSSxFQUFDLGdCQUZQO0FBR0UsV0FBTyxFQUFFLEVBSFg7QUFJRSxTQUFLLEVBQUU7QUFBRUEsY0FBUSxFQUFFO0FBQVosS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0E1QkYsRUFxQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5RUFBRDtBQUNFLFNBQUssRUFBQyxtQ0FEUjtBQUVFLFFBQUksRUFBQyx1QkFGUDtBQUdFLFNBQUssRUFBRTtBQUNMQSxjQUFRLEVBQUU7QUFETCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXJDRixFQStDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdFQUFEO0FBQWdCLFNBQUssRUFBQyxnQkFBdEI7QUFBdUMsUUFBSSxFQUFDLGVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQS9DRixDQURGLEVBcURFLE1BQUMsb0RBQUQsQ0FBTSxHQUFOO0FBQVUsYUFBUyxFQUFDLHlCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBYSxRQUFJLEVBQUMsdUJBQWxCO0FBQTBDLFdBQU8sRUFBQyxnQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxpQkFBaEI7QUFBa0MsU0FBSyxNQUF2QztBQUF3QyxRQUFJLEVBQUMsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBSkYsQ0FyREYsQ0FERixDQURGLENBRkYsQ0FERjtBQXlFRCxDQTdFRDs7R0FBTVYsdUI7VUFDdUNJLDhEOzs7S0FEdkNKLHVCO0FBK0VTQSxzRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZXJzb25hcy9lc3R1ZGlhbnRlcy9jcmVhdGUuOWI2NDM1YWZkMDZjMGI3MGI5ZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXN0b21Ecm9wZG93biBmcm9tICdAY29tcG9uZW50cy9mb3Jtcy9DdXN0b21Ecm9wZG93bic7XHJcbmltcG9ydCBDdXN0b21UZXh0SW5wdXQgZnJvbSAnQGNvbXBvbmVudHMvZm9ybXMvQ3VzdG9tVGV4dElucHV0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgQnRuUmVncmVzYXIgfSBmcm9tICdAY29tcG9uZW50cy9CdXR0b25zJztcclxuaW1wb3J0IEJyZWFkQ3J1bWJUaXRsZSBmcm9tICdAY29tcG9uZW50cy9CcmVhZENydW1icy90aXRsZUJyZWFkQ3J1bWInO1xyXG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBDdXN0b21UZXh0QXJlYSBmcm9tICdAY29tcG9uZW50cy9mb3Jtcy9DdXN0b21UZXh0QXJlYSc7XHJcblxyXG5jb25zdCBFc3R1ZGlhbnRlRm9ybUNvbnRhaW5lciA9ICh7IHRpdGxlLCBpdGVtcywgb25TdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gIGNvbnNvbGUubG9nKHRpdGxlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICA8QnJlYWRDcnVtYlRpdGxlIHRpdGxlPXt0aXRsZX0gaXRlbXM9e2l0ZW1zfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAganVtYm90cm9uIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21Ecm9wZG93blxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBlcnNvbmE6XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbmFcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXX1cclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbURyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFkcmU6XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhZHJlXCJcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W119XHJcbiAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiAnRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbycgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21Ecm9wZG93blxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk1hZHJlOlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYWRyZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tdfVxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tRHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXByZXNlbnRhbnRlczpcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmVwcmVzZW50YW50ZXNcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXX1cclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlbGFjacOzbiBjb24gZWwgUmVwcmVzZW50YW50ZTpcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmVsYWNpb25SZXByZXNlbnRhbnRlXCJcclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21UZXh0QXJlYSBsYWJlbD1cIk9ic2VydmFjaW9uZXM6XCIgbmFtZT1cIm9ic2VydmFjaW9uZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uUm93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSBtdC0zIG15LTFcIj5cclxuICAgICAgICAgICAgICAgIDxCdG5SZWdyZXNhciBocmVmPVwiL3BlcnNvbmFzL2VzdHVkaWFudGVzXCIgdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IG10LTMgbXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgYmxvY2sgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVzdHVkaWFudGVGb3JtQ29udGFpbmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9