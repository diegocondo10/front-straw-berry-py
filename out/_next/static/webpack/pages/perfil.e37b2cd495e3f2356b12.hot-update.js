webpackHotUpdate_N_E("pages/perfil",{

/***/ "./pages/perfil/index.tsx":
/*!********************************!*\
  !*** ./pages/perfil/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_privateLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/privateLayout */ "./layouts/privateLayout.tsx");
/* harmony import */ var _components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/BreadCrumbs/titleBreadCrumb */ "./components/BreadCrumbs/titleBreadCrumb.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_table_columns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/table/columns */ "./components/table/columns.tsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _services_personas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/personas.service */ "./services/personas.service.ts");
var _this = undefined,
    _jsxFileName = "C:\\Users\\diego\\Documents\\GitHub\\StrawBerryPy\\front-straw-berry-py\\pages\\perfil\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var PerfilContainer = function PerfilContainer(_ref) {
  _s();

  var items = _ref.items,
      id = _ref.id;
  var history = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(_services_personas_service__WEBPACK_IMPORTED_MODULE_9__["Persona"].getById, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var persona = data === null || data === void 0 ? void 0 : data.persona;
  return __jsx(_layouts_privateLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loading: loading,
    title: "IPCA | Perfil",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Mi Perfil",
    items: items,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-8 breadcrumb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "text-underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Informaci\xF3n de la Cuenta"), __jsx("ul", {
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Usuario: "), " ", (data === null || data === void 0 ? void 0 : data.usuario) || 'María80')), __jsx("h4", {
    className: "text-underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Informaci\xF3n Personal"), __jsx("ul", {
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
  }, "Primer Nombre: "), " ", (data === null || data === void 0 ? void 0 : data.primerNombre) || 'María'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Segundo Nombre: "), " ", (data === null || data === void 0 ? void 0 : data.segundoNombre) || 'Soledad'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Primer Apellido: "), ' ', (data === null || data === void 0 ? void 0 : data.primerApellido) || 'Guerrero'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Segundo Apellido: "), ' ', (data === null || data === void 0 ? void 0 : data.segundoApellido) || 'Fuentes'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "G\xE9nero: "), " ", (data === null || data === void 0 ? void 0 : data.genero) || 'Femenino - Masculino'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Sexo: "), " ", (data === null || data === void 0 ? void 0 : data.sexo) || 'Femenino - Masculino'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Calle Principal: "), ' ', (data === null || data === void 0 ? void 0 : data.callePrincipal) || 'Av. Américas'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Calle Secundaria: "), ' ', (data === null || data === void 0 ? void 0 : data.calleSecundaria) || 'Francisco Trelles')), __jsx("h4", {
    className: "text-underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Contacto"), __jsx("ul", {
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "Tel\xE9fono: "), " ", (data === null || data === void 0 ? void 0 : data.telefono) || '4257896'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "Celular: "), " ", (data === null || data === void 0 ? void 0 : data.celular) || '098546231'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "Email: "), " ", (data === null || data === void 0 ? void 0 : data.correo) || 'maria@gmail.com')), __jsx("h4", {
    className: "text-underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "Discapacidad"), __jsx("ul", {
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "Discapacidad: "), ' ', (data === null || data === void 0 ? void 0 : data.discapacidad) || 'Parálisis Cerebral'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, "Carnet CONADIS: "), " ", (data === null || data === void 0 ? void 0 : data.conadis) || '123654789')), __jsx("h4", {
    className: "text-underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "Permisos"), __jsx(primereact_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTable"], {
    className: "p-datatable-customers shadow-lg",
    rowHover: true,
    paginator: true,
    currentPageReportTemplate: "{totalRecords} registros totales",
    paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
    rows: 10,
    rowsPerPageOptions: [10, 25, 50],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, Object(_components_table_columns__WEBPACK_IMPORTED_MODULE_6__["IndexColumn"])(), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    header: "Nombre",
    field: "nombre",
    sortable: true,
    filter: true,
    reorderable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    header: "Descripci\xF3n",
    field: "descripcion",
    sortable: true,
    filter: true,
    reorderable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  })), __jsx("h4", {
    className: "text-underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Grupos"), __jsx(primereact_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTable"], {
    className: "p-datatable-customers shadow-lg",
    rowHover: true,
    paginator: true,
    currentPageReportTemplate: "{totalRecords} registros totales",
    paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
    rows: 10,
    rowsPerPageOptions: [10, 25, 50],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, Object(_components_table_columns__WEBPACK_IMPORTED_MODULE_6__["IndexColumn"])(), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    header: "Nombre",
    field: "nombre",
    sortable: true,
    filter: true,
    reorderable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    header: "Descripci\xF3n",
    field: "descripcion",
    sortable: true,
    filter: true,
    reorderable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-md-5 mt-3 my-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "outline-primary",
    block: true,
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, "Cambiar Contrase\xF1a"))))));
};

_s(PerfilContainer, "hlFeiO5Bw/KAHL5wLF9hHOmfR3Y=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_8__["useQuery"]];
});

_c = PerfilContainer;
{
  /* <div className="col-md-8 breadcrumb datatable-doc-demo">
                        <div className="col-md-6">
                            <p>
                                <strong>Usuario: </strong> {data?.usuario || 'María80'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Primer Nombre: </strong> {data?.primerNombre || 'María'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Segundo Nombre: </strong> {data?.segundoNombre || 'Soledad'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Primer Apellido: </strong> {data?.primerApellido || 'Guerrero'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Segundo Apellido: </strong> {data?.segundoApellido || 'Fuentes'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Género: </strong> {data?.genero || 'Femenino - Masculino'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Sexo: </strong> {data?.sexo || 'Femenino - Masculino'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Calle Principal: </strong> {data?.callePrincipal || 'Av. Américas'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Calle Secundaria: </strong> {data?.calleSecundaria || 'Francisco Trelles'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Teléfono: </strong> {data?.telefono || '4257896'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Celular: </strong> {data?.celular || '098546231'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Discapacidad: </strong> {data?.discapacidad || 'Parálisis Cerebral'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Carnet CONADIS: </strong> {data?.conadis || '123654789'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Email: </strong> {data?.correo || 'maria@gmail.com'}
                            </p>
                        </div>
                        <div>
                            <strong className="mb-5">Permisos</strong>
                              <DataTable className="p-datatable-customers shadow-lg"
                                rowHover
                                paginator
                                currentPageReportTemplate="{totalRecords} registros totales"
                                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                rows={10}
                                rowsPerPageOptions={[10, 25, 50]}
                                responsive
                            >
                                {IndexColumn()}
                                <Column
                                    header="Nombre"
                                    field="nombre"
                                    sortable
                                    filter
                                    reorderable
                                />
                                <Column
                                    header="Descripción"
                                    field="descripcion"
                                    sortable
                                    filter
                                    reorderable
                                />
                            </DataTable>
                        </div>
                          <div>
                            <strong className="mb-5">Grupo</strong>
                              <DataTable className="p-datatable-customers shadow-lg"
                                rowHover
                                paginator
                                currentPageReportTemplate="{totalRecords} registros totales"
                                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                rows={10}
                                rowsPerPageOptions={[10, 25, 50]}
                                responsive
                            >
                                {IndexColumn()}
                                <Column
                                    header="Nombre"
                                    field="nombre"
                                    sortable
                                    filter
                                    reorderable
                                />
                                <Column
                                    header="Descripción"
                                    field="descripcion"
                                    sortable
                                    filter
                                    reorderable
                                />
                            </DataTable>
                        </div>
                        <div className="col-md-5 mt-3 my-1">
                            <Button variant="outline-primary" block type="submit">
                                Cambiar Contraseña
                            </Button>
                        </div>
                    </div> */
}
/* harmony default export */ __webpack_exports__["default"] = (PerfilContainer);

var _c;

$RefreshReg$(_c, "PerfilContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVyZmlsL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQZXJmaWxDb250YWluZXIiLCJpdGVtcyIsImlkIiwiaGlzdG9yeSIsInVzZVJvdXRlciIsInVzZVF1ZXJ5IiwiUGVyc29uYSIsImdldEJ5SWQiLCJ2YXJpYWJsZXMiLCJkYXRhIiwibG9hZGluZyIsInBlcnNvbmEiLCJ1c3VhcmlvIiwicHJpbWVyTm9tYnJlIiwic2VndW5kb05vbWJyZSIsInByaW1lckFwZWxsaWRvIiwic2VndW5kb0FwZWxsaWRvIiwiZ2VuZXJvIiwic2V4byIsImNhbGxlUHJpbmNpcGFsIiwiY2FsbGVTZWN1bmRhcmlhIiwidGVsZWZvbm8iLCJjZWx1bGFyIiwiY29ycmVvIiwiZGlzY2FwYWNpZGFkIiwiY29uYWRpcyIsIkluZGV4Q29sdW1uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLEtBQWdCLFFBQWhCQSxLQUFnQjtBQUFBLE1BQVRDLEVBQVMsUUFBVEEsRUFBUztBQUN6QyxNQUFNQyxPQUFPLEdBQUdDLDZEQUFTLEVBQXpCOztBQUR5QyxrQkFFZkMsK0RBQVEsQ0FBQ0Msa0VBQU8sQ0FBQ0MsT0FBVCxFQUFrQjtBQUNsREMsYUFBUyxFQUFFO0FBQUVOLFFBQUUsRUFBRkE7QUFBRjtBQUR1QyxHQUFsQixDQUZPO0FBQUEsTUFFakNPLElBRmlDLGFBRWpDQSxJQUZpQztBQUFBLE1BRTNCQyxPQUYyQixhQUUzQkEsT0FGMkI7O0FBTXpDLE1BQU1DLE9BQU8sR0FBR0YsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVFLE9BQXRCO0FBRUEsU0FDRSxNQUFDLDhEQUFEO0FBQWUsV0FBTyxFQUFFRCxPQUF4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LEtBQ0UsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxpQkFBaEI7QUFBa0MsU0FBSyxNQUF2QztBQUF3QyxRQUFJLEVBQUMsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixDQXpHRixDQURGLENBRkYsQ0FERixDQURGO0FBd0hELENBaElEOztHQUFNMUIsZTtVQUNZSSxxRCxFQUNVQyx1RDs7O0tBRnRCTCxlO0FBaUlOO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3SUQ7QUFFY0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVyZmlsLmUzN2IyY2Q0OTVlM2YyMzU2YjEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJpdmF0ZUxheW91dCBmcm9tICdAbGF5b3V0cy9wcml2YXRlTGF5b3V0JztcclxuaW1wb3J0IEJyZWFkQ3J1bWJUaXRsZSBmcm9tICdAY29tcG9uZW50cy9CcmVhZENydW1icy90aXRsZUJyZWFkQ3J1bWInO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3ByaW1lcmVhY3QvY29sdW1uJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSAncHJpbWVyZWFjdC9kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBJbmRleENvbHVtbiB9IGZyb20gJ0Bjb21wb25lbnRzL3RhYmxlL2NvbHVtbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgUGVyc29uYSB9IGZyb20gJ0BzZXJ2aWNlcy9wZXJzb25hcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnRuUmVncmVzYXIgfSBmcm9tICdAY29tcG9uZW50cy9CdXR0b25zJztcclxuXHJcbmNvbnN0IFBlcmZpbENvbnRhaW5lciA9ICh7IGl0ZW1zLCBpZCB9KSA9PiB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZyB9ID0gdXNlUXVlcnkoUGVyc29uYS5nZXRCeUlkLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGVyc29uYSA9IGRhdGE/LnBlcnNvbmE7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJpdmF0ZUxheW91dCBsb2FkaW5nPXtsb2FkaW5nfSB0aXRsZT1cIklQQ0EgfCBQZXJmaWxcIj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPEJyZWFkQ3J1bWJUaXRsZSB0aXRsZT1cIk1pIFBlcmZpbFwiIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IGJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtdW5kZXJsaW5lXCI+SW5mb3JtYWNpw7NuIGRlIGxhIEN1ZW50YTwvaDQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VXN1YXJpbzogPC9zdHJvbmc+IHtkYXRhPy51c3VhcmlvIHx8ICdNYXLDrWE4MCd9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXVuZGVybGluZVwiPkluZm9ybWFjacOzbiBQZXJzb25hbDwvaDQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+UHJpbWVyIE5vbWJyZTogPC9zdHJvbmc+IHtkYXRhPy5wcmltZXJOb21icmUgfHwgJ01hcsOtYSd9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlNlZ3VuZG8gTm9tYnJlOiA8L3N0cm9uZz4ge2RhdGE/LnNlZ3VuZG9Ob21icmUgfHwgJ1NvbGVkYWQnfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5QcmltZXIgQXBlbGxpZG86IDwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgICAgICAgICB7ZGF0YT8ucHJpbWVyQXBlbGxpZG8gfHwgJ0d1ZXJyZXJvJ31cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+U2VndW5kbyBBcGVsbGlkbzogPC9zdHJvbmc+eycgJ31cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5zZWd1bmRvQXBlbGxpZG8gfHwgJ0Z1ZW50ZXMnfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Hw6luZXJvOiA8L3N0cm9uZz4ge2RhdGE/LmdlbmVybyB8fCAnRmVtZW5pbm8gLSBNYXNjdWxpbm8nfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5TZXhvOiA8L3N0cm9uZz4ge2RhdGE/LnNleG8gfHwgJ0ZlbWVuaW5vIC0gTWFzY3VsaW5vJ31cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2FsbGUgUHJpbmNpcGFsOiA8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgICAgICAgICAge2RhdGE/LmNhbGxlUHJpbmNpcGFsIHx8ICdBdi4gQW3DqXJpY2FzJ31cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2FsbGUgU2VjdW5kYXJpYTogPC9zdHJvbmc+eycgJ31cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5jYWxsZVNlY3VuZGFyaWEgfHwgJ0ZyYW5jaXNjbyBUcmVsbGVzJ31cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtdW5kZXJsaW5lXCI+Q29udGFjdG88L2g0PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlRlbMOpZm9ubzogPC9zdHJvbmc+IHtkYXRhPy50ZWxlZm9ubyB8fCAnNDI1Nzg5Nid9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkNlbHVsYXI6IDwvc3Ryb25nPiB7ZGF0YT8uY2VsdWxhciB8fCAnMDk4NTQ2MjMxJ31cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RW1haWw6IDwvc3Ryb25nPiB7ZGF0YT8uY29ycmVvIHx8ICdtYXJpYUBnbWFpbC5jb20nfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC11bmRlcmxpbmVcIj5EaXNjYXBhY2lkYWQ8L2g0PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkRpc2NhcGFjaWRhZDogPC9zdHJvbmc+eycgJ31cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5kaXNjYXBhY2lkYWQgfHwgJ1BhcsOhbGlzaXMgQ2VyZWJyYWwnfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5DYXJuZXQgQ09OQURJUzogPC9zdHJvbmc+IHtkYXRhPy5jb25hZGlzIHx8ICcxMjM2NTQ3ODknfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC11bmRlcmxpbmVcIj5QZXJtaXNvczwvaDQ+XHJcbiAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWRhdGF0YWJsZS1jdXN0b21lcnMgc2hhZG93LWxnXCJcclxuICAgICAgICAgICAgICByb3dIb3ZlclxyXG4gICAgICAgICAgICAgIHBhZ2luYXRvclxyXG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGU9XCJ7dG90YWxSZWNvcmRzfSByZWdpc3Ryb3MgdG90YWxlc1wiXHJcbiAgICAgICAgICAgICAgcGFnaW5hdG9yVGVtcGxhdGU9XCJGaXJzdFBhZ2VMaW5rIFByZXZQYWdlTGluayBQYWdlTGlua3MgTmV4dFBhZ2VMaW5rIExhc3RQYWdlTGluayBDdXJyZW50UGFnZVJlcG9ydCBSb3dzUGVyUGFnZURyb3Bkb3duXCJcclxuICAgICAgICAgICAgICByb3dzPXsxMH1cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDUwXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtJbmRleENvbHVtbigpfVxyXG4gICAgICAgICAgICAgIDxDb2x1bW4gaGVhZGVyPVwiTm9tYnJlXCIgZmllbGQ9XCJub21icmVcIiBzb3J0YWJsZSBmaWx0ZXIgcmVvcmRlcmFibGUgLz5cclxuICAgICAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCJEZXNjcmlwY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgZmllbGQ9XCJkZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICByZW9yZGVyYWJsZVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtdW5kZXJsaW5lXCI+R3J1cG9zPC9oND5cclxuICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtZGF0YXRhYmxlLWN1c3RvbWVycyBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAgIHJvd0hvdmVyXHJcbiAgICAgICAgICAgICAgcGFnaW5hdG9yXHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZT1cInt0b3RhbFJlY29yZHN9IHJlZ2lzdHJvcyB0b3RhbGVzXCJcclxuICAgICAgICAgICAgICBwYWdpbmF0b3JUZW1wbGF0ZT1cIkZpcnN0UGFnZUxpbmsgUHJldlBhZ2VMaW5rIFBhZ2VMaW5rcyBOZXh0UGFnZUxpbmsgTGFzdFBhZ2VMaW5rIEN1cnJlbnRQYWdlUmVwb3J0IFJvd3NQZXJQYWdlRHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgIHJvd3M9ezEwfVxyXG4gICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCAyNSwgNTBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge0luZGV4Q29sdW1uKCl9XHJcbiAgICAgICAgICAgICAgPENvbHVtbiBoZWFkZXI9XCJOb21icmVcIiBmaWVsZD1cIm5vbWJyZVwiIHNvcnRhYmxlIGZpbHRlciByZW9yZGVyYWJsZSAvPlxyXG4gICAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIkRlc2NyaXBjacOzblwiXHJcbiAgICAgICAgICAgICAgICBmaWVsZD1cImRlc2NyaXBjaW9uXCJcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgIHJlb3JkZXJhYmxlXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9EYXRhVGFibGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgbXQtMyBteS0xXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgYmxvY2sgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FtYmlhciBDb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L1ByaXZhdGVMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxue1xyXG4gIC8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggYnJlYWRjcnVtYiBkYXRhdGFibGUtZG9jLWRlbW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Vc3VhcmlvOiA8L3N0cm9uZz4ge2RhdGE/LnVzdWFyaW8gfHwgJ01hcsOtYTgwJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UHJpbWVyIE5vbWJyZTogPC9zdHJvbmc+IHtkYXRhPy5wcmltZXJOb21icmUgfHwgJ01hcsOtYSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlNlZ3VuZG8gTm9tYnJlOiA8L3N0cm9uZz4ge2RhdGE/LnNlZ3VuZG9Ob21icmUgfHwgJ1NvbGVkYWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QcmltZXIgQXBlbGxpZG86IDwvc3Ryb25nPiB7ZGF0YT8ucHJpbWVyQXBlbGxpZG8gfHwgJ0d1ZXJyZXJvJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U2VndW5kbyBBcGVsbGlkbzogPC9zdHJvbmc+IHtkYXRhPy5zZWd1bmRvQXBlbGxpZG8gfHwgJ0Z1ZW50ZXMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Hw6luZXJvOiA8L3N0cm9uZz4ge2RhdGE/LmdlbmVybyB8fCAnRmVtZW5pbm8gLSBNYXNjdWxpbm8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TZXhvOiA8L3N0cm9uZz4ge2RhdGE/LnNleG8gfHwgJ0ZlbWVuaW5vIC0gTWFzY3VsaW5vJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2FsbGUgUHJpbmNpcGFsOiA8L3N0cm9uZz4ge2RhdGE/LmNhbGxlUHJpbmNpcGFsIHx8ICdBdi4gQW3DqXJpY2FzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2FsbGUgU2VjdW5kYXJpYTogPC9zdHJvbmc+IHtkYXRhPy5jYWxsZVNlY3VuZGFyaWEgfHwgJ0ZyYW5jaXNjbyBUcmVsbGVzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGVsw6lmb25vOiA8L3N0cm9uZz4ge2RhdGE/LnRlbGVmb25vIHx8ICc0MjU3ODk2J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2VsdWxhcjogPC9zdHJvbmc+IHtkYXRhPy5jZWx1bGFyIHx8ICcwOTg1NDYyMzEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EaXNjYXBhY2lkYWQ6IDwvc3Ryb25nPiB7ZGF0YT8uZGlzY2FwYWNpZGFkIHx8ICdQYXLDoWxpc2lzIENlcmVicmFsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2FybmV0IENPTkFESVM6IDwvc3Ryb25nPiB7ZGF0YT8uY29uYWRpcyB8fCAnMTIzNjU0Nzg5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RW1haWw6IDwvc3Ryb25nPiB7ZGF0YT8uY29ycmVvIHx8ICdtYXJpYUBnbWFpbC5jb20nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwibWItNVwiPlBlcm1pc29zPC9zdHJvbmc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZSBjbGFzc05hbWU9XCJwLWRhdGF0YWJsZS1jdXN0b21lcnMgc2hhZG93LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dIb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGU9XCJ7dG90YWxSZWNvcmRzfSByZWdpc3Ryb3MgdG90YWxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdG9yVGVtcGxhdGU9XCJGaXJzdFBhZ2VMaW5rIFByZXZQYWdlTGluayBQYWdlTGlua3MgTmV4dFBhZ2VMaW5rIExhc3RQYWdlTGluayBDdXJyZW50UGFnZVJlcG9ydCBSb3dzUGVyUGFnZURyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXsxMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDUwXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0luZGV4Q29sdW1uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW9yZGVyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJEZXNjcmlwY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD1cImRlc2NyaXBjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlb3JkZXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cIm1iLTVcIj5HcnVwbzwvc3Ryb25nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGUgY2xhc3NOYW1lPVwicC1kYXRhdGFibGUtY3VzdG9tZXJzIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlPVwie3RvdGFsUmVjb3Jkc30gcmVnaXN0cm9zIHRvdGFsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRvclRlbXBsYXRlPVwiRmlyc3RQYWdlTGluayBQcmV2UGFnZUxpbmsgUGFnZUxpbmtzIE5leHRQYWdlTGluayBMYXN0UGFnZUxpbmsgQ3VycmVudFBhZ2VSZXBvcnQgUm93c1BlclBhZ2VEcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17MTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbMTAsIDI1LCA1MF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtJbmRleENvbHVtbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVvcmRlcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiRGVzY3JpcGNpw7NuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9XCJkZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW9yZGVyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgbXQtMyBteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBibG9jayB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FtYmlhciBDb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJmaWxDb250YWluZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=