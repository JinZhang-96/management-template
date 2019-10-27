(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-base-menu-menu-module"],{

/***/ "./src/app/routes/base/menu/menu-table/menu-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/routes/base/menu/menu-table/menu-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"xyz-content-inner-header\">\r\n  <!--<button nz-button nzType=\"primary\">Primary</button>-->\r\n  <div nz-row>\r\n    <div nz-col [nzXs]=\"{ span: 5, offset: 1 }\" [nzLg]=\"{ span: 6, offset: 2 }\">\r\n      <button nz-button nzType=\"default\">添加</button>\r\n    </div>\r\n    <div nz-col [nzXs]=\"{ span: 11, offset: 1 }\" [nzLg]=\"{ span: 6, offset: 2 }\">\r\n      Col\r\n    </div>\r\n    <div nz-col [nzXs]=\"{ span: 5, offset: 1 }\" [nzLg]=\"{ span: 6, offset: 2 }\">\r\n      Col\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"xyz-content-inner-body\">\r\n\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/base/menu/menu-table/menu-table.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/routes/base/menu/menu-table/menu-table.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/base/menu/menu-table/menu-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/routes/base/menu/menu-table/menu-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: MenuTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTableComponent", function() { return MenuTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuTableComponent = /** @class */ (function () {
    function MenuTableComponent() {
    }
    MenuTableComponent.prototype.ngOnInit = function () {
    };
    MenuTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'xyz-menu-table',
            template: __webpack_require__(/*! ./menu-table.component.html */ "./src/app/routes/base/menu/menu-table/menu-table.component.html"),
            styles: [__webpack_require__(/*! ./menu-table.component.scss */ "./src/app/routes/base/menu/menu-table/menu-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuTableComponent);
    return MenuTableComponent;
}());



/***/ }),

/***/ "./src/app/routes/base/menu/menu.module.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/base/menu/menu.module.ts ***!
  \*************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_table_menu_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-table/menu-table.component */ "./src/app/routes/base/menu/menu-table/menu-table.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _menu_table_menu_table_component__WEBPACK_IMPORTED_MODULE_1__["MenuTableComponent"]
    }
];
var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_table_menu_table_component__WEBPACK_IMPORTED_MODULE_1__["MenuTableComponent"]]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ })

}]);
//# sourceMappingURL=routes-base-menu-menu-module.js.map