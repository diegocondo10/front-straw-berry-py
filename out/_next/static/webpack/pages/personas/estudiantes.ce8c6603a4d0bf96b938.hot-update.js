webpackHotUpdate_N_E("pages/personas/estudiantes",{

/***/ "./pages/personas/estudiantes/index.tsx":
/*!**********************************************!*\
  !*** ./pages/personas/estudiantes/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var _layouts_privateLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @layouts/privateLayout */ "./layouts/privateLayout.tsx");
/* harmony import */ var _components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/BreadCrumbs/titleBreadCrumb */ "./components/BreadCrumbs/titleBreadCrumb.tsx");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_table_columns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/table/columns */ "./components/table/columns.tsx");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _services_personas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/personas.service */ "./services/personas.service.ts");



var _this = undefined,
    _jsxFileName = "C:\\Users\\diego\\Documents\\GitHub\\StrawBerryPy\\front-straw-berry-py\\pages\\personas\\estudiantes\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var EstudiantesContainer = function EstudiantesContainer(_ref) {
  _s();

  var breadCrumbItems = _ref.breadCrumbItems;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__["useQuery"])(_services_personas_service__WEBPACK_IMPORTED_MODULE_11__["Estudiante"].getAll),
      loading = _useQuery.loading,
      data = _useQuery.data;

  var header = __jsx("div", {
    className: "container-fluid my-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/personas/estudiantes/create",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "btn btn-info btn-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Agregar", __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoPlus"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }))))));

  return __jsx(_layouts_privateLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "IPCA | Estudiantes",
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Estudiantes",
    items: breadCrumbItems,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col datatable-doc-demo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(primereact_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTable"], {
    value: data === null || data === void 0 ? void 0 : data.estudiantes,
    className: "p-datatable-customers shadow-lg",
    rowHover: true,
    paginator: true,
    header: header,
    currentPageReportTemplate: "{totalRecords} registros totales",
    paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
    rows: 10,
    rowsPerPageOptions: [10, 25, 50],
    autoLayout: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, Object(_components_table_columns__WEBPACK_IMPORTED_MODULE_8__["IndexColumn"])(), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_9__["Column"], {
    header: "Persona",
    field: "persona.str",
    sortable: true,
    filter: true,
    reorderable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_9__["Column"], {
    header: "Padre",
    field: "padre.str",
    sortable: true,
    filter: true,
    reorderable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_9__["Column"], {
    header: "Madre",
    field: "madre.str",
    sortable: true,
    filter: true,
    reorderable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_9__["Column"], {
    header: "Representante",
    field: "representante.str",
    sortable: true,
    filter: true,
    reorderable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }), Object(_components_table_columns__WEBPACK_IMPORTED_MODULE_8__["OptionesColumn"])({
    editPath: function editPath(_ref2) {
      var id = _ref2.id;
      return "/personas/estudiantes/update?id=".concat(id);
    },
    detailPath: function detailPath(_ref3) {
      var id = _ref3.id;
      return "/personas/estudiantes/detail?id=".concat(id);
    }
  }))))));
};

_s(EstudiantesContainer, "HasvTXHwlBNedvPpf4Gl00Z2xbw=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_10__["useQuery"]];
});

_c = EstudiantesContainer;

EstudiantesContainer.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              breadCrumbItems: [{
                title: 'Estudiantes',
                active: true
              }]
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (EstudiantesContainer);

var _c;

$RefreshReg$(_c, "EstudiantesContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyc29uYXMvZXN0dWRpYW50ZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkVzdHVkaWFudGVzQ29udGFpbmVyIiwiYnJlYWRDcnVtYkl0ZW1zIiwidXNlUXVlcnkiLCJFc3R1ZGlhbnRlIiwiZ2V0QWxsIiwibG9hZGluZyIsImRhdGEiLCJoZWFkZXIiLCJlc3R1ZGlhbnRlcyIsIkluZGV4Q29sdW1uIiwiT3B0aW9uZXNDb2x1bW4iLCJlZGl0UGF0aCIsImlkIiwiZGV0YWlsUGF0aCIsImdldEluaXRpYWxQcm9wcyIsInByb3BzIiwidGl0bGUiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsZUFBc0IsUUFBdEJBLGVBQXNCOztBQUFBLGtCQUMxQkMsZ0VBQVEsQ0FBQ0Msc0VBQVUsQ0FBQ0MsTUFBWixDQURrQjtBQUFBLE1BQzVDQyxPQUQ0QyxhQUM1Q0EsT0FENEM7QUFBQSxNQUNuQ0MsSUFEbUMsYUFDbkNBLElBRG1DOztBQUdwRCxNQUFNQyxNQUFNLEdBQ1Y7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsOEJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLENBREYsQ0FERixDQURGOztBQWVBLFNBQ0UsTUFBQyw4REFBRDtBQUFlLFNBQUssRUFBQyxvQkFBckI7QUFBMEMsV0FBTyxFQUFFRixPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtFQUFEO0FBQWlCLFNBQUssRUFBQyxhQUF2QjtBQUFxQyxTQUFLLEVBQUVKLGVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUNFLFNBQUssRUFBRUssSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVFLFdBRGY7QUFFRSxhQUFTLEVBQUMsaUNBRlo7QUFHRSxZQUFRLE1BSFY7QUFJRSxhQUFTLE1BSlg7QUFLRSxVQUFNLEVBQUVELE1BTFY7QUFNRSw2QkFBeUIsRUFBQyxrQ0FONUI7QUFPRSxxQkFBaUIsRUFBQyxzR0FQcEI7QUFRRSxRQUFJLEVBQUUsRUFSUjtBQVNFLHNCQUFrQixFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULENBVHRCO0FBVUUsY0FBVSxNQVZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZR0UsNkVBQVcsRUFaZCxFQWFFLE1BQUMsd0RBQUQ7QUFDRSxVQUFNLEVBQUMsU0FEVDtBQUVFLFNBQUssRUFBQyxhQUZSO0FBR0UsWUFBUSxNQUhWO0FBSUUsVUFBTSxNQUpSO0FBS0UsZUFBVyxNQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQW9CRSxNQUFDLHdEQUFEO0FBQVEsVUFBTSxFQUFDLE9BQWY7QUFBdUIsU0FBSyxFQUFDLFdBQTdCO0FBQXlDLFlBQVEsTUFBakQ7QUFBa0QsVUFBTSxNQUF4RDtBQUF5RCxlQUFXLE1BQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkYsRUFxQkUsTUFBQyx3REFBRDtBQUFRLFVBQU0sRUFBQyxPQUFmO0FBQXVCLFNBQUssRUFBQyxXQUE3QjtBQUF5QyxZQUFRLE1BQWpEO0FBQWtELFVBQU0sTUFBeEQ7QUFBeUQsZUFBVyxNQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJGLEVBc0JFLE1BQUMsd0RBQUQ7QUFDRSxVQUFNLEVBQUMsZUFEVDtBQUVFLFNBQUssRUFBQyxtQkFGUjtBQUdFLFlBQVEsTUFIVjtBQUlFLFVBQU0sTUFKUjtBQUtFLGVBQVcsTUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJGLEVBOEJHQyxnRkFBYyxDQUFDO0FBQ2RDLFlBQVEsRUFBRTtBQUFBLFVBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLHVEQUErQ0EsRUFBL0M7QUFBQSxLQURJO0FBRWRDLGNBQVUsRUFBRTtBQUFBLFVBQUdELEVBQUgsU0FBR0EsRUFBSDtBQUFBLHVEQUErQ0EsRUFBL0M7QUFBQTtBQUZFLEdBQUQsQ0E5QmpCLENBREYsQ0FERixDQUZGLENBREYsQ0FERjtBQThDRCxDQWhFRDs7R0FBTVosb0I7VUFDc0JFLHdEOzs7S0FEdEJGLG9COztBQWtFTkEsb0JBQW9CLENBQUNjLGVBQXJCO0FBQUEsK0xBQXVDLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FDOUI7QUFDTGQsNkJBQWUsRUFBRSxDQUNmO0FBQ0VlLHFCQUFLLEVBQUUsYUFEVDtBQUVFQyxzQkFBTSxFQUFFO0FBRlYsZUFEZTtBQURaLGFBRDhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdlakIsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVyc29uYXMvZXN0dWRpYW50ZXMuY2U4YzY2MDNhNGQwYmY5NmI5MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEdvUGx1cyB9IGZyb20gJ3JlYWN0LWljb25zL2dvJztcclxuaW1wb3J0IFByaXZhdGVMYXlvdXQgZnJvbSAnQGxheW91dHMvcHJpdmF0ZUxheW91dCc7XHJcbmltcG9ydCBUaXRsZUJyZWFkQ3J1bWIgZnJvbSAnQGNvbXBvbmVudHMvQnJlYWRDcnVtYnMvdGl0bGVCcmVhZENydW1iJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAncHJpbWVyZWFjdC9kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBJbmRleENvbHVtbiwgT3B0aW9uZXNDb2x1bW4gfSBmcm9tICdAY29tcG9uZW50cy90YWJsZS9jb2x1bW5zJztcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAncHJpbWVyZWFjdC9jb2x1bW4nO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgRXN0dWRpYW50ZSB9IGZyb20gJ0BzZXJ2aWNlcy9wZXJzb25hcy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IEVzdHVkaWFudGVzQ29udGFpbmVyID0gKHsgYnJlYWRDcnVtYkl0ZW1zIH0pID0+IHtcclxuICBjb25zdCB7IGxvYWRpbmcsIGRhdGEgfSA9IHVzZVF1ZXJ5KEVzdHVkaWFudGUuZ2V0QWxsKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXktMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wZXJzb25hcy9lc3R1ZGlhbnRlcy9jcmVhdGVcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgIEFncmVnYXJcclxuICAgICAgICAgICAgICA8R29QbHVzIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByaXZhdGVMYXlvdXQgdGl0bGU9XCJJUENBIHwgRXN0dWRpYW50ZXNcIiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPFRpdGxlQnJlYWRDcnVtYiB0aXRsZT1cIkVzdHVkaWFudGVzXCIgaXRlbXM9e2JyZWFkQ3J1bWJJdGVtc30gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkYXRhdGFibGUtZG9jLWRlbW9cIj5cclxuICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRhPy5lc3R1ZGlhbnRlc31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWRhdGF0YWJsZS1jdXN0b21lcnMgc2hhZG93LWxnXCJcclxuICAgICAgICAgICAgICByb3dIb3ZlclxyXG4gICAgICAgICAgICAgIHBhZ2luYXRvclxyXG4gICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyfVxyXG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGU9XCJ7dG90YWxSZWNvcmRzfSByZWdpc3Ryb3MgdG90YWxlc1wiXHJcbiAgICAgICAgICAgICAgcGFnaW5hdG9yVGVtcGxhdGU9XCJGaXJzdFBhZ2VMaW5rIFByZXZQYWdlTGluayBQYWdlTGlua3MgTmV4dFBhZ2VMaW5rIExhc3RQYWdlTGluayBDdXJyZW50UGFnZVJlcG9ydCBSb3dzUGVyUGFnZURyb3Bkb3duXCJcclxuICAgICAgICAgICAgICByb3dzPXsxMH1cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDUwXX1cclxuICAgICAgICAgICAgICBhdXRvTGF5b3V0XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7SW5kZXhDb2x1bW4oKX1cclxuICAgICAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCJQZXJzb25hXCJcclxuICAgICAgICAgICAgICAgIGZpZWxkPVwicGVyc29uYS5zdHJcIlxyXG4gICAgICAgICAgICAgICAgc29ydGFibGVcclxuICAgICAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgcmVvcmRlcmFibGVcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDb2x1bW4gaGVhZGVyPVwiUGFkcmVcIiBmaWVsZD1cInBhZHJlLnN0clwiIHNvcnRhYmxlIGZpbHRlciByZW9yZGVyYWJsZSAvPlxyXG4gICAgICAgICAgICAgIDxDb2x1bW4gaGVhZGVyPVwiTWFkcmVcIiBmaWVsZD1cIm1hZHJlLnN0clwiIHNvcnRhYmxlIGZpbHRlciByZW9yZGVyYWJsZSAvPlxyXG4gICAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIlJlcHJlc2VudGFudGVcIlxyXG4gICAgICAgICAgICAgICAgZmllbGQ9XCJyZXByZXNlbnRhbnRlLnN0clwiXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICByZW9yZGVyYWJsZVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIHtPcHRpb25lc0NvbHVtbih7XHJcbiAgICAgICAgICAgICAgICBlZGl0UGF0aDogKHsgaWQgfSkgPT4gYC9wZXJzb25hcy9lc3R1ZGlhbnRlcy91cGRhdGU/aWQ9JHtpZH1gLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsUGF0aDogKHsgaWQgfSkgPT4gYC9wZXJzb25hcy9lc3R1ZGlhbnRlcy9kZXRhaWw/aWQ9JHtpZH1gLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L1ByaXZhdGVMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkVzdHVkaWFudGVzQ29udGFpbmVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBicmVhZENydW1iSXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnRXN0dWRpYW50ZXMnLFxyXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVzdHVkaWFudGVzQ29udGFpbmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9