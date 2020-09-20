webpackHotUpdate_N_E("pages/personas/estudiantes/create",{

/***/ "./components/forms/CustomTextArea.tsx":
/*!*********************************************!*\
  !*** ./components/forms/CustomTextArea.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/inputtextarea */ "./node_modules/primereact/inputtextarea.js");
/* harmony import */ var primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _FieldWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FieldWrapper */ "./components/forms/FieldWrapper.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\diego\\Documents\\GitHub\\StrawBerryPy\\front-straw-berry-py\\components\\forms\\CustomTextArea.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






var CustomTextArea = function CustomTextArea(props) {
  _s();

  var label = props.label,
      name = props.name,
      rules = props.rules,
      className = props.className,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["label", "name", "rules", "className"]);

  var _useFormContext = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useFormContext"])(),
      control = _useFormContext.control,
      errors = _useFormContext.errors;

  return __jsx(_FieldWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: label,
    name: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    control: control,
    name: name,
    rules: rules,
    defaultValue: "",
    render: function render(_ref) {
      var _classnames;

      var _onChange = _ref.onChange,
          value = _ref.value;
      return (// @ts-ignore
        __jsx(primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_3__["InputTextarea"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          value: value,
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classnames, className, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classnames, 'w-100', true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classnames, 'p-invalid', !!errors[name]), _classnames)),
          onChange: function onChange(_ref2) {
            var currentTarget = _ref2.currentTarget;

            _onChange(currentTarget.value);
          }
        }, rest, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }
        }))
      );
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
};

_s(CustomTextArea, "n8/iL6Mb3o9gXp5Xow/08yYJf78=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useFormContext"]];
});

_c = CustomTextArea;
/* harmony default export */ __webpack_exports__["default"] = (CustomTextArea);

var _c;

$RefreshReg$(_c, "CustomTextArea");

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

/***/ }),

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
    className: "col-md-6",
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

/***/ }),

/***/ "./node_modules/primereact/components/inputtextarea/InputTextarea.js":
/*!***************************************************************************!*\
  !*** ./node_modules/primereact/components/inputtextarea/InputTextarea.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputTextarea = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Tooltip = __webpack_require__(/*! ../tooltip/Tooltip */ "./node_modules/primereact/components/tooltip/Tooltip.js");

var _DomHandler = _interopRequireDefault(__webpack_require__(/*! ../utils/DomHandler */ "./node_modules/primereact/components/utils/DomHandler.js"));

var _ObjectUtils = _interopRequireDefault(__webpack_require__(/*! ../utils/ObjectUtils */ "./node_modules/primereact/components/utils/ObjectUtils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputTextarea = /*#__PURE__*/function (_Component) {
  _inherits(InputTextarea, _Component);

  var _super = _createSuper(InputTextarea);

  function InputTextarea(props) {
    var _this;

    _classCallCheck(this, InputTextarea);

    _this = _super.call(this, props);
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onKeyUp = _this.onKeyUp.bind(_assertThisInitialized(_this));
    _this.onInput = _this.onInput.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputTextarea, [{
    key: "onFocus",
    value: function onFocus(e) {
      if (this.props.autoResize) {
        this.resize();
      }

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      if (this.props.autoResize) {
        this.resize();
      }

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      if (this.props.autoResize) {
        this.resize();
      }

      if (this.props.onKeyUp) {
        this.props.onKeyUp(e);
      }
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      if (this.props.autoResize) {
        this.resize();
      }

      if (!this.props.onChange) {
        if (e.target.value.length > 0) _DomHandler.default.addClass(e.target, 'p-filled');else _DomHandler.default.removeClass(e.target, 'p-filled');
      }

      if (this.props.onInput) {
        this.props.onInput(e);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      if (_DomHandler.default.isVisible(this.element)) {
        if (!this.cachedScrollHeight) {
          this.cachedScrollHeight = this.element.scrollHeight;
          this.element.style.overflow = "hidden";
        }

        if (this.cachedScrollHeight !== this.element.scrollHeight) {
          this.element.style.height = '';
          this.element.style.height = this.element.scrollHeight + 'px';

          if (parseFloat(this.element.style.height) >= parseFloat(this.element.style.maxHeight)) {
            this.element.style.overflowY = "scroll";
            this.element.style.height = this.element.style.maxHeight;
          } else {
            this.element.style.overflow = "hidden";
          }

          this.cachedScrollHeight = this.element.scrollHeight;
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }

      if (this.props.autoResize) {
        this.resize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }

      if (this.props.autoResize) {
        this.resize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = (0, _Tooltip.tip)({
        target: this.element,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = (0, _classnames.default)('p-inputtextarea p-inputtext p-component', {
        'p-disabled': this.props.disabled,
        'p-filled': this.props.value != null && this.props.value.toString().length > 0 || this.props.defaultValue != null && this.props.defaultValue.toString().length > 0,
        'p-inputtextarea-resizable': this.props.autoResize
      }, this.props.className);

      var textareaProps = _ObjectUtils.default.findDiffKeys(this.props, InputTextarea.defaultProps);

      return /*#__PURE__*/_react.default.createElement("textarea", _extends({}, textareaProps, {
        className: className,
        ref: function ref(input) {
          return _this2.element = input;
        },
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyUp: this.onKeyUp,
        onInput: this.onInput
      }));
    }
  }]);

  return InputTextarea;
}(_react.Component);

exports.InputTextarea = InputTextarea;

_defineProperty(InputTextarea, "defaultProps", {
  autoResize: false,
  onInput: null,
  tooltip: null,
  tooltipOptions: null
});

_defineProperty(InputTextarea, "propTypes", {
  autoResize: _propTypes.default.bool,
  onInput: _propTypes.default.func,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object
});

/***/ }),

/***/ "./node_modules/primereact/inputtextarea.js":
/*!**************************************************!*\
  !*** ./node_modules/primereact/inputtextarea.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./components/inputtextarea/InputTextarea */ "./node_modules/primereact/components/inputtextarea/InputTextarea.js");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9DdXN0b21UZXh0QXJlYS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFnZXMvcGVyc29uYXMvZXN0dWRpYW50ZXMvZm9ybS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmltZXJlYWN0L2NvbXBvbmVudHMvaW5wdXR0ZXh0YXJlYS9JbnB1dFRleHRhcmVhLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpbWVyZWFjdC9pbnB1dHRleHRhcmVhLmpzIl0sIm5hbWVzIjpbIkN1c3RvbVRleHRBcmVhIiwicHJvcHMiLCJsYWJlbCIsIm5hbWUiLCJydWxlcyIsImNsYXNzTmFtZSIsInJlc3QiLCJ1c2VGb3JtQ29udGV4dCIsImNvbnRyb2wiLCJlcnJvcnMiLCJvbkNoYW5nZSIsInZhbHVlIiwiY2xhc3NuYW1lcyIsImN1cnJlbnRUYXJnZXQiLCJFc3R1ZGlhbnRlRm9ybUNvbnRhaW5lciIsInRpdGxlIiwiaXRlbXMiLCJvblN1Ym1pdCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBaUM7QUFBQTs7QUFBQSxNQUM5Q0MsS0FEOEMsR0FDSEQsS0FERyxDQUM5Q0MsS0FEOEM7QUFBQSxNQUN2Q0MsSUFEdUMsR0FDSEYsS0FERyxDQUN2Q0UsSUFEdUM7QUFBQSxNQUNqQ0MsS0FEaUMsR0FDSEgsS0FERyxDQUNqQ0csS0FEaUM7QUFBQSxNQUMxQkMsU0FEMEIsR0FDSEosS0FERyxDQUMxQkksU0FEMEI7QUFBQSxNQUNaQyxJQURZLHNHQUNITCxLQURHOztBQUFBLHdCQUcxQk0sc0VBQWMs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUEsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQy9OWTs7QUFFYixpQkFBaUIsbUJBQU8sQ0FBQyxxSEFBMEMsRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZXJzb25hcy9lc3R1ZGlhbnRlcy9jcmVhdGUuNzEyNWMwOGE0NDJmZTkyYTg2NTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0VGV4dGFyZWEsIElucHV0VGV4dGFyZWFQcm9wcyB9IGZyb20gJ3ByaW1lcmVhY3QvaW5wdXR0ZXh0YXJlYSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tICcuL0ZpZWxkV3JhcHBlcic7XHJcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmNvbnN0IEN1c3RvbVRleHRBcmVhID0gKHByb3BzPzogQ3VzdG9tVGV4dEFyZWFQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbGFiZWwsIG5hbWUsIHJ1bGVzLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCB7IGNvbnRyb2wsIGVycm9ycyB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGaWVsZFdyYXBwZXIgbGFiZWw9e2xhYmVsfSBuYW1lPXtuYW1lfT5cclxuICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgcnVsZXM9e3J1bGVzfVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gKFxyXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgPElucHV0VGV4dGFyZWFcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgIFtjbGFzc05hbWVdOiB0cnVlLFxyXG4gICAgICAgICAgICAgICd3LTEwMCc6IHRydWUsXHJcbiAgICAgICAgICAgICAgJ3AtaW52YWxpZCc6ICEhZXJyb3JzW25hbWVdLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlKGN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvRmllbGRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21UZXh0QXJlYTtcclxuXHJcbmV4cG9ydCB0eXBlIEN1c3RvbVRleHRBcmVhUHJvcHMgPSBJbnB1dFRleHRhcmVhUHJvcHMgJiBCYXNlRm9ybUZpZWxkUHJvcHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXN0b21Ecm9wZG93biBmcm9tICdAY29tcG9uZW50cy9mb3Jtcy9DdXN0b21Ecm9wZG93bic7XHJcbmltcG9ydCBDdXN0b21UZXh0SW5wdXQgZnJvbSAnQGNvbXBvbmVudHMvZm9ybXMvQ3VzdG9tVGV4dElucHV0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgQnRuUmVncmVzYXIgfSBmcm9tICdAY29tcG9uZW50cy9CdXR0b25zJztcclxuaW1wb3J0IEJyZWFkQ3J1bWJUaXRsZSBmcm9tICdAY29tcG9uZW50cy9CcmVhZENydW1icy90aXRsZUJyZWFkQ3J1bWInO1xyXG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBDdXN0b21UZXh0QXJlYSBmcm9tICdAY29tcG9uZW50cy9mb3Jtcy9DdXN0b21UZXh0QXJlYSc7XHJcblxyXG5jb25zdCBFc3R1ZGlhbnRlRm9ybUNvbnRhaW5lciA9ICh7IHRpdGxlLCBpdGVtcywgb25TdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gIGNvbnNvbGUubG9nKHRpdGxlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICA8QnJlYWRDcnVtYlRpdGxlIHRpdGxlPXt0aXRsZX0gaXRlbXM9e2l0ZW1zfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAganVtYm90cm9uIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21Ecm9wZG93blxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBlcnNvbmE6XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbmFcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXX1cclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbURyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFkcmU6XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhZHJlXCJcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W119XHJcbiAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiAnRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbycgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21Ecm9wZG93blxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk1hZHJlOlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYWRyZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tdfVxyXG4gICAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tRHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXByZXNlbnRhbnRlczpcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmVwcmVzZW50YW50ZXNcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXX1cclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlbGFjacOzbiBjb24gZWwgUmVwcmVzZW50YW50ZTpcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmVsYWNpb25SZXByZXNlbnRhbnRlXCJcclxuICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW8nLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVRleHRBcmVhIGxhYmVsPVwiT2JzZXJ2YWNpb25lczpcIiBuYW1lPVwib2JzZXJ2YWNpb25lc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IG10LTMgbXktMVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ0blJlZ3Jlc2FyIGhyZWY9XCIvcGVyc29uYXMvZXN0dWRpYW50ZXNcIiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgbXQtMyBteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBibG9jayB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXN0dWRpYW50ZUZvcm1Db250YWluZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5JbnB1dFRleHRhcmVhID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfVG9vbHRpcCA9IHJlcXVpcmUoXCIuLi90b29sdGlwL1Rvb2x0aXBcIik7XG5cbnZhciBfRG9tSGFuZGxlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxzL0RvbUhhbmRsZXJcIikpO1xuXG52YXIgX09iamVjdFV0aWxzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvT2JqZWN0VXRpbHNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBJbnB1dFRleHRhcmVhID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhJbnB1dFRleHRhcmVhLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElucHV0VGV4dGFyZWEpO1xuXG4gIGZ1bmN0aW9uIElucHV0VGV4dGFyZWEocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXRUZXh0YXJlYSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICBfdGhpcy5vbkZvY3VzID0gX3RoaXMub25Gb2N1cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkJsdXIgPSBfdGhpcy5vbkJsdXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25LZXlVcCA9IF90aGlzLm9uS2V5VXAuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25JbnB1dCA9IF90aGlzLm9uSW5wdXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0VGV4dGFyZWEsIFt7XG4gICAga2V5OiBcIm9uRm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Gb2N1cyhlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvUmVzaXplKSB7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25CbHVyKGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9SZXNpemUpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbktleVVwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5VXAoZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b1Jlc2l6ZSkge1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbktleVVwKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25LZXlVcChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25JbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbklucHV0KGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9SZXNpemUpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAwKSBfRG9tSGFuZGxlci5kZWZhdWx0LmFkZENsYXNzKGUudGFyZ2V0LCAncC1maWxsZWQnKTtlbHNlIF9Eb21IYW5kbGVyLmRlZmF1bHQucmVtb3ZlQ2xhc3MoZS50YXJnZXQsICdwLWZpbGxlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbklucHV0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25JbnB1dChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgIGlmIChfRG9tSGFuZGxlci5kZWZhdWx0LmlzVmlzaWJsZSh0aGlzLmVsZW1lbnQpKSB7XG4gICAgICAgIGlmICghdGhpcy5jYWNoZWRTY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLmNhY2hlZFNjcm9sbEhlaWdodCA9IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlZFNjcm9sbEhlaWdodCAhPT0gdGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodCArICdweCc7XG5cbiAgICAgICAgICBpZiAocGFyc2VGbG9hdCh0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0KSA+PSBwYXJzZUZsb2F0KHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2FjaGVkU2Nyb2xsSGVpZ2h0ID0gdGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgICAgdGhpcy5yZW5kZXJUb29sdGlwKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9SZXNpemUpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmIChwcmV2UHJvcHMudG9vbHRpcCAhPT0gdGhpcy5wcm9wcy50b29sdGlwKSB7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC51cGRhdGVDb250ZW50KHRoaXMucHJvcHMudG9vbHRpcCk7ZWxzZSB0aGlzLnJlbmRlclRvb2x0aXAoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b1Jlc2l6ZSkge1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgICAgdGhpcy50b29sdGlwLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy50b29sdGlwID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyVG9vbHRpcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJUb29sdGlwKCkge1xuICAgICAgdGhpcy50b29sdGlwID0gKDAsIF9Ub29sdGlwLnRpcCkoe1xuICAgICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy50b29sdGlwLFxuICAgICAgICBvcHRpb25zOiB0aGlzLnByb3BzLnRvb2x0aXBPcHRpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgY2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKCdwLWlucHV0dGV4dGFyZWEgcC1pbnB1dHRleHQgcC1jb21wb25lbnQnLCB7XG4gICAgICAgICdwLWRpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgJ3AtZmlsbGVkJzogdGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsICYmIHRoaXMucHJvcHMudmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPiAwIHx8IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlICE9IG51bGwgJiYgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPiAwLFxuICAgICAgICAncC1pbnB1dHRleHRhcmVhLXJlc2l6YWJsZSc6IHRoaXMucHJvcHMuYXV0b1Jlc2l6ZVxuICAgICAgfSwgdGhpcy5wcm9wcy5jbGFzc05hbWUpO1xuXG4gICAgICB2YXIgdGV4dGFyZWFQcm9wcyA9IF9PYmplY3RVdGlscy5kZWZhdWx0LmZpbmREaWZmS2V5cyh0aGlzLnByb3BzLCBJbnB1dFRleHRhcmVhLmRlZmF1bHRQcm9wcyk7XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIF9leHRlbmRzKHt9LCB0ZXh0YXJlYVByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihpbnB1dCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuZWxlbWVudCA9IGlucHV0O1xuICAgICAgICB9LFxuICAgICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICAgIG9uS2V5VXA6IHRoaXMub25LZXlVcCxcbiAgICAgICAgb25JbnB1dDogdGhpcy5vbklucHV0XG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0VGV4dGFyZWE7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLklucHV0VGV4dGFyZWEgPSBJbnB1dFRleHRhcmVhO1xuXG5fZGVmaW5lUHJvcGVydHkoSW5wdXRUZXh0YXJlYSwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBhdXRvUmVzaXplOiBmYWxzZSxcbiAgb25JbnB1dDogbnVsbCxcbiAgdG9vbHRpcDogbnVsbCxcbiAgdG9vbHRpcE9wdGlvbnM6IG51bGxcbn0pO1xuXG5fZGVmaW5lUHJvcGVydHkoSW5wdXRUZXh0YXJlYSwgXCJwcm9wVHlwZXNcIiwge1xuICBhdXRvUmVzaXplOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgb25JbnB1dDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gIHRvb2x0aXA6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIHRvb2x0aXBPcHRpb25zOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2lucHV0dGV4dGFyZWEvSW5wdXRUZXh0YXJlYScpOyJdLCJzb3VyY2VSb290IjoiIn0=