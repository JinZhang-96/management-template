(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-base-code-code-module"],{

/***/ "./src/app/routes/base/code/code-table/code-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/routes/base/code/code-table/code-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"xyz-content-inner-header\">\n  <button nz-button [nzType]=\"'primary'\">\n    <i class=\"anticon anticon-plus\"></i>\n    <span >添加</span>\n  </button>\n  <button nz-button [nzType]=\"'primary'\">\n  <i class=\"anticon anticon-reload\"></i>\n  <span >刷新</span>\n  </button>\n</div>\n<div class=\"xyz-content-inner-body\">\n  <xyz-simple-table [getData]=\"getData\"  ></xyz-simple-table>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/base/code/code-table/code-table.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/routes/base/code/code-table/code-table.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/base/code/code-table/code-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/routes/base/code/code-table/code-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: CodeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeTableComponent", function() { return CodeTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _code_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-table.service */ "./src/app/routes/base/code/code-table/code-table.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeTableComponent = /** @class */ (function () {
    function CodeTableComponent(codeSev) {
        var _this = this;
        this.codeSev = codeSev;
        this.getData = function (page) {
            return _this.codeSev.pageGet(page);
        };
    }
    CodeTableComponent.prototype.ngOnInit = function () {
    };
    CodeTableComponent.prototype.add = function () {
        // this.modalSev.open(CodeTableComponent, null, 'md');
        // this.s.create( {nzContent: CodeTableComponent})
    };
    CodeTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'xyz-code-table',
            template: __webpack_require__(/*! ./code-table.component.html */ "./src/app/routes/base/code/code-table/code-table.component.html"),
            styles: [__webpack_require__(/*! ./code-table.component.scss */ "./src/app/routes/base/code/code-table/code-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_code_table_service__WEBPACK_IMPORTED_MODULE_1__["CodeTableService"]])
    ], CodeTableComponent);
    return CodeTableComponent;
}());



/***/ }),

/***/ "./src/app/routes/base/code/code-table/code-table.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/base/code/code-table/code-table.service.ts ***!
  \*******************************************************************/
/*! exports provided: CodeTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeTableService", function() { return CodeTableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/http-client.service */ "./src/app/core/services/http-client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeTableService = /** @class */ (function () {
    function CodeTableService(http) {
        this.http = http;
    }
    CodeTableService.prototype.pageGet = function (page) {
        return this.http.get('base/code', page);
    };
    CodeTableService.prototype.add = function (code) {
    };
    CodeTableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_services_http_client_service__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"]])
    ], CodeTableService);
    return CodeTableService;
}());



/***/ }),

/***/ "./src/app/routes/base/code/code.module.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/base/code/code.module.ts ***!
  \*************************************************/
/*! exports provided: CodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeModule", function() { return CodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _code_table_code_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-table/code-table.component */ "./src/app/routes/base/code/code-table/code-table.component.ts");
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
        path: '', component: _code_table_code_table_component__WEBPACK_IMPORTED_MODULE_1__["CodeTableComponent"]
    }
];
var CodeModule = /** @class */ (function () {
    function CodeModule() {
    }
    CodeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_code_table_code_table_component__WEBPACK_IMPORTED_MODULE_1__["CodeTableComponent"]],
            entryComponents: [_code_table_code_table_component__WEBPACK_IMPORTED_MODULE_1__["CodeTableComponent"]]
        })
    ], CodeModule);
    return CodeModule;
}());



/***/ })

}]);
//# sourceMappingURL=routes-base-code-code-module.js.map