webpackHotUpdate_N_E("pages/personas/estudiantes/update",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_pages_personas_estudiantes_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/pages/personas/estudiantes/form */ "./components/pages/personas/estudiantes/form.tsx");
/* harmony import */ var _layouts_privateLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @layouts/privateLayout */ "./layouts/privateLayout.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _services_personas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/personas.service */ "./services/personas.service.ts");




var _this = undefined,
    _jsxFileName = "C:\\Users\\diego\\Documents\\GitHub\\StrawBerryPy\\front-straw-berry-py\\pages\\personas\\estudiantes\\update.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var UpdateEstudianteContainer = function UpdateEstudianteContainer(_ref) {
  _s();

  var title = _ref.title,
      items = _ref.items,
      id = _ref.id;
  var methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])({
    mode: 'onChange'
  });

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(_services_personas_service__WEBPACK_IMPORTED_MODULE_9__["Estudiante"].getById, {
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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

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

  return __jsx(_layouts_privateLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["FormProvider"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, methods, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(_components_pages_personas_estudiantes_form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: title,
    items: items,
    onSubmit: onSubmit,
    personas: data === null || data === void 0 ? void 0 : data.personas,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })));
};

_s(UpdateEstudianteContainer, "+9qsvKdycpE0GQcedl+CkwyR6iM=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"], _apollo_client__WEBPACK_IMPORTED_MODULE_8__["useQuery"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc29uYXMvZXN0dWRpYW50ZXMvdXBkYXRlLnRzeCJdLCJuYW1lcyI6WyJVcGRhdGVFc3R1ZGlhbnRlQ29udGFpbmVyIiwidGl0bGUiLCJpdGVtcyIsImlkIiwibWV0aG9kcyIsInVzZUZvcm0iLCJtb2RlIiwidXNlUXVlcnkiLCJFc3R1ZGlhbnRlIiwiZ2V0QnlJZCIsInZhcmlhYmxlcyIsIm9uQ29tcGxldGVkIiwiZXN0dWRpYW50ZSIsInJlc2V0IiwibG9hZGluZyIsImRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvblN1Ym1pdCIsImlucHV0IiwiY29uc29sZSIsImxvZyIsInBlcnNvbmFzIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJocmVmIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLE9BQTBCO0FBQUE7O0FBQUEsTUFBdkJDLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLE1BQWhCQyxLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxNQUFUQyxFQUFTLFFBQVRBLEVBQVM7QUFDMUQsTUFBTUMsT0FBTyxHQUFHQywrREFBTyxDQUFDO0FBQ3RCQyxRQUFJLEVBQUU7QUFEZ0IsR0FBRCxDQUF2Qjs7QUFEMEQsa0JBS2hDQywrREFBUSxDQUFDQyxxRUFBVSxDQUFDQyxPQUFaLEVBQXFCO0FBQ3JEQyxhQUFTLEVBQUU7QUFBRVAsUUFBRSxFQUFGQTtBQUFGLEtBRDBDO0FBRXJEUSxlQUFXLEVBQUUsNEJBQW9CO0FBQUEsVUFBakJDLFVBQWlCLFNBQWpCQSxVQUFpQjtBQUMvQlIsYUFBTyxDQUFDUyxLQUFSLENBQWNELFVBQWQ7QUFDRDtBQUpvRCxHQUFyQixDQUx3QjtBQUFBLE1BS2xERSxPQUxrRCxhQUtsREEsT0FMa0Q7QUFBQSxNQUt6Q0MsSUFMeUMsYUFLekNBLElBTHlDOztBQVkxRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLFFBQVE7QUFBQSxpTUFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjs7QUFEZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSRCxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBSUEsU0FDRSxNQUFDLDhEQUFEO0FBQWUsV0FBTyxFQUFFSixPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRCx5RkFBa0JWLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFDLG1GQUFEO0FBQ0UsU0FBSyxFQUFFSCxLQURUO0FBRUUsU0FBSyxFQUFFQyxLQUZUO0FBR0UsWUFBUSxFQUFFZ0IsUUFIWjtBQUlFLFlBQVEsRUFBRUgsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVPLFFBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREY7QUFZRCxDQTdCRDs7R0FBTXRCLHlCO1VBQ1lLLHVELEVBSVVFLHVELEVBT1hVLHFEOzs7S0FaWGpCLHlCOztBQStCTkEseUJBQXlCLENBQUN1QixlQUExQixHQUE0QyxpQkFBZTtBQUFBLE1BQVpDLEtBQVksU0FBWkEsS0FBWTtBQUN6RCxNQUFJdkIsS0FBSyxHQUFHLG1CQUFaO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFBRUQsU0FBSyxFQUFFLFlBQVQ7QUFBdUJ3QixRQUFJLEVBQUU7QUFBN0IsR0FEWSxFQUVaO0FBQUV4QixTQUFLLEVBQUUsbUJBQVQ7QUFBOEJ5QixVQUFNLEVBQUU7QUFBdEMsR0FGWSxDQUFkO0FBS0EsU0FBTztBQUNMeEIsU0FBSyxFQUFMQSxLQURLO0FBRUxELFNBQUssRUFBTEEsS0FGSztBQUdMRSxNQUFFLEVBQUVxQixLQUFLLENBQUNyQjtBQUhMLEdBQVA7QUFLRCxDQVpEOztBQWNlSCx3RkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZXJzb25hcy9lc3R1ZGlhbnRlcy91cGRhdGUuZGU4NWRjN2I0YWZiZjRjN2QwMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIEZvcm1Qcm92aWRlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEVzdHVkaWFudGVGb3JtQ29udGFpbmVyIGZyb20gJ0Bjb21wb25lbnRzL3BhZ2VzL3BlcnNvbmFzL2VzdHVkaWFudGVzL2Zvcm0nO1xyXG5pbXBvcnQgUHJpdmF0ZUxheW91dCBmcm9tICdAbGF5b3V0cy9wcml2YXRlTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IEVzdHVkaWFudGUgfSBmcm9tICdAc2VydmljZXMvcGVyc29uYXMuc2VydmljZSc7XHJcblxyXG5jb25zdCBVcGRhdGVFc3R1ZGlhbnRlQ29udGFpbmVyID0gKHsgdGl0bGUsIGl0ZW1zLCBpZCB9KSA9PiB7XHJcbiAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm0oe1xyXG4gICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShFc3R1ZGlhbnRlLmdldEJ5SWQsIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgb25Db21wbGV0ZWQ6ICh7IGVzdHVkaWFudGUgfSkgPT4ge1xyXG4gICAgICBtZXRob2RzLnJlc2V0KGVzdHVkaWFudGUpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoaW5wdXQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlucHV0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByaXZhdGVMYXlvdXQgbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgIDxGb3JtUHJvdmlkZXIgey4uLm1ldGhvZHN9PlxyXG4gICAgICAgIDxFc3R1ZGlhbnRlRm9ybUNvbnRhaW5lclxyXG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgICAgICAgcGVyc29uYXM9e2RhdGE/LnBlcnNvbmFzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybVByb3ZpZGVyPlxyXG4gICAgPC9Qcml2YXRlTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5VcGRhdGVFc3R1ZGlhbnRlQ29udGFpbmVyLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuICBsZXQgdGl0bGUgPSAnRWRpdGFyIEVzdHVkaWFudGUnO1xyXG4gIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgeyB0aXRsZTogJ0VzdHVkaWFudGUnLCBocmVmOiAnL3BlcnNvbmFzL2VzdHVkaWFudGVzJyB9LFxyXG4gICAgeyB0aXRsZTogJ0VkaXRhciBFc3R1ZGlhbnRlJywgYWN0aXZlOiB0cnVlIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGl0ZW1zLFxyXG4gICAgdGl0bGUsXHJcbiAgICBpZDogcXVlcnkuaWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZUVzdHVkaWFudGVDb250YWluZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=