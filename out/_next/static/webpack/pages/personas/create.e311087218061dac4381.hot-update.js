webpackHotUpdate_N_E("pages/personas/create",{

/***/ "./components/pages/personas/form.tsx":
/*!********************************************!*\
  !*** ./components/pages/personas/form.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/BreadCrumbs/titleBreadCrumb */ "./components/BreadCrumbs/titleBreadCrumb.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Buttons */ "./components/Buttons/index.tsx");
/* harmony import */ var _components_forms_CustomDatePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/forms/CustomDatePicker */ "./components/forms/CustomDatePicker.tsx");
/* harmony import */ var _components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/forms/CustomDropdown */ "./components/forms/CustomDropdown.tsx");
/* harmony import */ var _components_forms_CustomInputNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/forms/CustomInputNumber */ "./components/forms/CustomInputNumber.tsx");
/* harmony import */ var _components_forms_CustomPickList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/forms/CustomPickList */ "./components/forms/CustomPickList.tsx");
/* harmony import */ var _components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/forms/CustomTextInput */ "./components/forms/CustomTextInput.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\diego\\Documents\\GitHub\\StrawBerryPy\\front-straw-berry-py\\components\\pages\\personas\\form.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






 //import { ErrorMessage } from '@hookform/error-message';




var PARAMETROS = {
  tiposIdentificacion: ['CEDULA', 'PASAPORTE', 'OTRO'],
  siNo: ['SI', 'NO'],
  sexos: [{
    label: 'MASCULINO',
    value: 'MASCULINO'
  }, {
    label: 'FEMENINO',
    value: 'FEMENINO'
  }, {
    label: 'OTRO',
    value: 'OTRO'
  }],
  tiposSangre: ['A+', 'B+', 'AB+', 'O+', 'O-'],
  nivelesFormacion: ['BASICO', 'SECUNDARIA', 'SUPERIOR']
};

var PersonaFormContainer = function PersonaFormContainer(_ref) {
  _s();

  var title = _ref.title,
      items = _ref.items,
      onSubmit = _ref.onSubmit,
      _ref$discapacidades = _ref.discapacidades,
      discapacidades = _ref$discapacidades === void 0 ? [] : _ref$discapacidades;

  var _useFormContext = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useFormContext"])(),
      handleSubmit = _useFormContext.handleSubmit,
      watch = _useFormContext.watch;

  return __jsx("main", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_components_BreadCrumbs_titleBreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: title,
    items: items,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-md-10 jumbotron rounded",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Tipo de Identificacion:",
    name: "tipoIdentificacion",
    options: PARAMETROS.tiposIdentificacion,
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Identificaci\xF3n:",
    name: "identificacion",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Primer Apellido:",
    name: "primerApellido",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Segundo Apellido:",
    name: "segundoApellido",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Primer Nombre:",
    name: "primerNombre",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Segundo Nombre:",
    name: "segundoNombre",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Genero:",
    name: "genero",
    options: PARAMETROS.sexos,
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Sexo:",
    name: "sexo",
    options: PARAMETROS.sexos,
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Tipo de Sangre:",
    name: "tipoSangre",
    options: PARAMETROS.tiposSangre,
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomDatePicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Fecha de Nacimiento: ",
    name: "fechaNacimiento",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Calle Principal:",
    name: "callePrincipal",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Calle Secundaria:",
    name: "calleSecundaria",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Lugar de Referencia:",
    name: "lugarReferencia",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "N\xFAmero de Casa:",
    name: "numeroCasa",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Tel\xE9fono:",
    name: "telefono",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Celular:",
    name: "celular",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Correo:",
    name: "correo",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Ocupaci\xF3n:",
    name: "ocupacion",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Nivel de Formaci\xF3n:",
    name: "nivelFormacion",
    options: PARAMETROS.nivelesFormacion,
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }, __jsx(_components_forms_CustomDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Posee alguna discapacidad?",
    name: "tieneDiscapacidad",
    options: PARAMETROS.siNo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }), watch('tieneDiscapacidad') === 'SI' && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 19
    }
  }, __jsx(_components_forms_CustomTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Carnet CONADIS:",
    name: "carnetConadis",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 19
    }
  }, __jsx(_components_forms_CustomInputNumber__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Porcentaje de discapacidad:",
    name: "porcentajeDiscapacidad",
    rules: {
      required: 'Este campo es obligatorio'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 19
    }
  }, __jsx(_components_forms_CustomPickList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Seleccione las discapacidades que posee",
    name: "discapacidades",
    source: discapacidades,
    sourceHeader: "Discapacidades",
    targetHeader: "Posee",
    itemTemplate: function itemTemplate(item) {
      return item.nombre;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 21
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
    className: " justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-5 mt-3 my-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 15
    }
  }, __jsx(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["BtnRegresar"], {
    href: "/personas",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-md-5 mt-3 my-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "outline-primary",
    block: true,
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 17
    }
  }, "Guardar")))))));
};

_s(PersonaFormContainer, "LVfv7cW4rbuVmJkKrASVgNcQCUM=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useFormContext"]];
});

_c = PersonaFormContainer;
/* harmony default export */ __webpack_exports__["default"] = (PersonaFormContainer);

var _c;

$RefreshReg$(_c, "PersonaFormContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9wZXJzb25hcy9mb3JtLnRzeCJdLCJuYW1lcyI6WyJQQVJBTUVUUk9TIiwidGlwb3NJZGVudGlmaWNhY2lvbiIsInNpTm8iLCJzZXhvcyIsImxhYmVsIiwidmFsdWUiLCJ0aXBvc1NhbmdyZSIsIm5pdmVsZXNGb3JtYWNpb24iLCJQZXJzb25hRm9ybUNvbnRhaW5lciIsInRpdGxlIiwiaXRlbXMiLCJvblN1Ym1pdCIsImRpc2NhcGFjaWRhZGVzIiwidXNlRm9ybUNvbnRleHQiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsInJlcXVpcmVkIiwiaXRlbSIsIm5vbWJyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxxQkFBbUIsRUFBRSxDQUFDLFFBQUQsRUFBVyxXQUFYLEVBQXdCLE1BQXhCLENBREo7QUFFakJDLE1BQUksRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLENBRlc7QUFHakJDLE9BQUssRUFBRSxDQUNMO0FBQUVDLFNBQUssRUFBRSxXQUFUO0FBQXNCQyxTQUFLLEVBQUU7QUFBN0IsR0FESyxFQUVMO0FBQUVELFNBQUssRUFBRSxVQUFUO0FBQXFCQyxTQUFLLEVBQUU7QUFBNUIsR0FGSyxFQUdMO0FBQUVELFNBQUssRUFBRSxNQUFUO0FBQWlCQyxTQUFLLEVBQUU7QUFBeEIsR0FISyxDQUhVO0FBUWpCQyxhQUFXLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWIsRUFBb0IsSUFBcEIsRUFBMEIsSUFBMUIsQ0FSSTtBQVVqQkMsa0JBQWdCLEVBQUUsQ0FBQyxRQUFELEVBQVcsWUFBWCxFQUF5QixVQUF6QjtBQVZELENBQW5COztBQWFBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBcUQ7QUFB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RTtBQUNMQSxjQUFRLEVBQUU7QUFETCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTdIRixFQXVJRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFEO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLFNBQUssRUFBRTtBQUNMQSxjQUFRLEVBQUU7QUFETCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXZJRixFQWlKRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFEO0FBQ0UsU0FBSyxFQUFDLFVBRFI7QUFFRSxRQUFJLEVBQUMsU0FGUDtBQUdFLFNBQUssRUFBRTtBQUNMQSxjQUFRLEVBQUU7QUFETCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWpKRixFQTJKRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFEO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFNBQUssRUFBRTtBQUNMQSxjQUFRLEVBQUU7QUFETCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTNKRixFQXFLRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFEO0FBQ0UsU0FBSyxFQUFDLGVBRFI7QUFFRSxRQUFJLEVBQUMsV0FGUDtBQUdFLFNBQUssRUFBRTtBQUNMQSxjQUFRLEVBQUU7QUFETCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXJLRixFQStLRTtBQUFL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OztHQUFNVixvQjtVQUM0QkssOEQ7OztLQUQ1Qkwsb0I7QUFxUVNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BlcnNvbmFzL2NyZWF0ZS5lMzExMDg3MjE4MDYxZGFjNDM4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJyZWFkQ3J1bWJUaXRsZSBmcm9tICdAY29tcG9uZW50cy9CcmVhZENydW1icy90aXRsZUJyZWFkQ3J1bWInO1xyXG5pbXBvcnQgeyBCdG5SZWdyZXNhciB9IGZyb20gJ0Bjb21wb25lbnRzL0J1dHRvbnMnO1xyXG5pbXBvcnQgQ3VzdG9tRGF0ZVBpY2tlciBmcm9tICdAY29tcG9uZW50cy9mb3Jtcy9DdXN0b21EYXRlUGlja2VyJztcclxuaW1wb3J0IEN1c3RvbURyb3Bkb3duIGZyb20gJ0Bjb21wb25lbnRzL2Zvcm1zL0N1c3RvbURyb3Bkb3duJztcclxuaW1wb3J0IEN1c3RvbUlucHV0TnVtYmVyIGZyb20gJ0Bjb21wb25lbnRzL2Zvcm1zL0N1c3RvbUlucHV0TnVtYmVyJztcclxuaW1wb3J0IEN1c3RvbVBpY2tMaXN0IGZyb20gJ0Bjb21wb25lbnRzL2Zvcm1zL0N1c3RvbVBpY2tMaXN0JztcclxuaW1wb3J0IEN1c3RvbVRleHRJbnB1dCBmcm9tICdAY29tcG9uZW50cy9mb3Jtcy9DdXN0b21UZXh0SW5wdXQnO1xyXG4vL2ltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJ0Bob29rZm9ybS9lcnJvci1tZXNzYWdlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5cclxuY29uc3QgUEFSQU1FVFJPUyA9IHtcclxuICB0aXBvc0lkZW50aWZpY2FjaW9uOiBbJ0NFRFVMQScsICdQQVNBUE9SVEUnLCAnT1RSTyddLFxyXG4gIHNpTm86IFsnU0knLCAnTk8nXSxcclxuICBzZXhvczogW1xyXG4gICAgeyBsYWJlbDogJ01BU0NVTElOTycsIHZhbHVlOiAnTUFTQ1VMSU5PJyB9LFxyXG4gICAgeyBsYWJlbDogJ0ZFTUVOSU5PJywgdmFsdWU6ICdGRU1FTklOTycgfSxcclxuICAgIHsgbGFiZWw6ICdPVFJPJywgdmFsdWU6ICdPVFJPJyB9LFxyXG4gIF0sXHJcbiAgdGlwb3NTYW5ncmU6IFsnQSsnLCAnQisnLCAnQUIrJywgJ08rJywgJ08tJ10sXHJcblxyXG4gIG5pdmVsZXNGb3JtYWNpb246IFsnQkFTSUNPJywgJ1NFQ1VOREFSSUEnLCAnU1VQRVJJT1InXSxcclxufTtcclxuXHJcbmNvbnN0IFBlcnNvbmFGb3JtQ29udGFpbmVyID0gKHsgdGl0bGUsIGl0ZW1zLCBvblN1Ym1pdCwgZGlzY2FwYWNpZGFkZXMgPSBbXSB9KSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHdhdGNoIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgIDxCcmVhZENydW1iVGl0bGUgdGl0bGU9e3RpdGxlfSBpdGVtcz17aXRlbXN9IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAganVtYm90cm9uIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21Ecm9wZG93blxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpcG8gZGUgSWRlbnRpZmljYWNpb246XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRpcG9JZGVudGlmaWNhY2lvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1BBUkFNRVRST1MudGlwb3NJZGVudGlmaWNhY2lvbn1cclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIklkZW50aWZpY2FjacOzbjpcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaWRlbnRpZmljYWNpb25cIlxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbycsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tVGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJpbWVyIEFwZWxsaWRvOlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmltZXJBcGVsbGlkb1wiXHJcbiAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21UZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWd1bmRvIEFwZWxsaWRvOlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWd1bmRvQXBlbGxpZG9cIlxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbycsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tVGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJpbWVyIE5vbWJyZTpcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHJpbWVyTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlZ3VuZG8gTm9tYnJlOlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWd1bmRvTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbURyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR2VuZXJvOlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5lcm9cIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtQQVJBTUVUUk9TLnNleG9zfVxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tRHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZXhvOlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXhvXCJcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17UEFSQU1FVFJPUy5zZXhvc31cclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbURyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGlwbyBkZSBTYW5ncmU6XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRpcG9TYW5ncmVcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtQQVJBTUVUUk9TLnRpcG9zU2FuZ3JlfVxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkZlY2hhIGRlIE5hY2ltaWVudG86IFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmZWNoYU5hY2ltaWVudG9cIlxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21UZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYWxsZSBQcmluY2lwYWw6XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNhbGxlUHJpbmNpcGFsXCJcclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhbGxlIFNlY3VuZGFyaWE6XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNhbGxlU2VjdW5kYXJpYVwiXHJcbiAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21UZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMdWdhciBkZSBSZWZlcmVuY2lhOlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsdWdhclJlZmVyZW5jaWFcIlxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbycsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tVGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVybyBkZSBDYXNhOlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJudW1lcm9DYXNhXCJcclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlRlbMOpZm9ubzpcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGVsZWZvbm9cIlxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbycsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tVGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2VsdWxhcjpcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2VsdWxhclwiXHJcbiAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21UZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3JyZW86XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21UZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPY3VwYWNpw7NuOlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJvY3VwYWNpb25cIlxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbycsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tRHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOaXZlbCBkZSBGb3JtYWNpw7NuOlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuaXZlbEZvcm1hY2lvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1BBUkFNRVRST1Mubml2ZWxlc0Zvcm1hY2lvbn1cclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbURyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9zZWUgYWxndW5hIGRpc2NhcGFjaWRhZD9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGllbmVEaXNjYXBhY2lkYWRcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtQQVJBTUVUUk9TLnNpTm99XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAge3dhdGNoKCd0aWVuZURpc2NhcGFjaWRhZCcpID09PSAnU0knICYmIChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21UZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FybmV0IENPTkFESVM6XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXJuZXRDb25hZGlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dE51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQb3JjZW50YWplIGRlIGRpc2NhcGFjaWRhZDpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvcmNlbnRhamVEaXNjYXBhY2lkYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21QaWNrTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY2Npb25lIGxhcyBkaXNjYXBhY2lkYWRlcyBxdWUgcG9zZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpc2NhcGFjaWRhZGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZGlzY2FwYWNpZGFkZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VIZWFkZXI9XCJEaXNjYXBhY2lkYWRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRIZWFkZXI9XCJQb3NlZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9eyhpdGVtKSA9PiBpdGVtLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLlJvdyBjbGFzc05hbWU9XCIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IG10LTMgbXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ0blJlZ3Jlc2FyIGhyZWY9XCIvcGVyc29uYXNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgbXQtMyBteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBibG9jayB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYUZvcm1Db250YWluZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=