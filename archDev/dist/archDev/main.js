(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n  color: #61aa61;\n  text-shadow: 1px 1px 1px #000;\n\n}\n\np{\n  color: #61aa61;\n  text-shadow: 1px 1px 1px #000;\n\n}\n\na{\n  color: cyan;\n  text-decoration: none;\n}\n\n.info1 {\n  padding: 0 2.5rem 0 2.5rem;\n}\n\n.figure1 img{\n  width:15rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7O0NBRS9COztBQUVEO0VBQ0UsZUFBZTtFQUNmLDhCQUE4Qjs7Q0FFL0I7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsMkJBQTJCO0NBQzVCOztBQUNEO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICBjb2xvcjogIzYxYWE2MTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDA7XG5cbn1cblxucHtcbiAgY29sb3I6ICM2MWFhNjE7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwO1xuXG59XG5cbmF7XG4gIGNvbG9yOiBjeWFuO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pbmZvMSB7XG4gIHBhZGRpbmc6IDAgMi41cmVtIDAgMi41cmVtO1xufVxuLmZpZ3VyZTEgaW1ne1xuICB3aWR0aDoxNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\n  <section class=\"info1\">\n    <h2>Background</h2>\n    <p>\n      I was born and army brat and with a servants attitude. As soon as I could I joined the US Army Infantry\n      and received several medals to include a <a href=\"https://en.wikipedia.org/wiki/Bronze_Star_Medal\">\n      Bronze Star with Valor</a> and a <a href=\"https://en.wikipedia.org/wiki/Purple_Heart\"> Purple Heart</a>\n      during my service. On my last deployment to Ramadi, Iraq I was injured and subsequently honorably separated\n      from service.</p>\n    <p>\n      I used what I had learned in the service and attended college to become a paramedic. While continuing to serve my community\n      I was asked to maintain the current website for the union I belonged to as well as build another website for a\n      community event. I had always had an interest in development but after doing this I knew this would be my future.\n      It started becoming increasingly difficult to preform my duties with my previous injuries so I decided I would\n      follow my interest and become a developer.\n    </p>\n    <p>\n      I put in my notice, sold my house and moved my family to Ohio to attend <a href=\"https://www.techelevator.com/\">\n      Tech Elevator</a> and start my future. I completed the Tech Elevator boot camp in Aug 2018. Since then I have been\n      doing volunteer work on an app for the <a href=\"https://www.huejackson.org/\"> Hue Jackson Foundation</a> in\n      partnership with <a href=\"https://www.ifusesolutions.net/\">iFuse Solutions</a>. Now it is time for me to get a job\n      and learn even more.\n    </p>\n  </section>\n  <figure class=\"figure1\">\n    <img\n      class=\"figure-img\"\n      src=\"../../assets/images/beard.jpg\"\n      alt=\"developer with beard\"\n    />\n  </figure>\n</main>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project-detail/project-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'review',
        component: _review_review_component__WEBPACK_IMPORTED_MODULE_2__["ReviewComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    { path: "project/:id",
        component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProjectDetailComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "navbar{\n  position: inherit;\n  height:20rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZiYXJ7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICBoZWlnaHQ6MjByZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id='navbar'>\n  <app-navbar></app-navbar>\n</section>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'archDev';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project-detail/project-detail.component.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./project.service */ "./src/app/project.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["far"]);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_6__["ReviewComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_16__["ProjectDetailComponent"],
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
            ],
            providers: [_project_service__WEBPACK_IMPORTED_MODULE_17__["ProjectService"], _message_service__WEBPACK_IMPORTED_MODULE_18__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  position: relative;\n  width:50%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -10%);\n          transform: translate(-50%, -10%);\n  background-color: #353738;\n}\n\nform{\n  display: grid;\n  grid-template-rows: repeat(4,1fr);\n  grid-row-gap: .5vw;\n  padding:2vw;\n  text-shadow: 1px 1px 1px #000;\n  border: 2px outset #487e48;\n  color: #71c671;\n\n\n}\n\nlabel {\n  display:inline-block;\n  *display: inline;     /* for IE7*/\n  zoom:1;              /* for IE7*/\n  float: left;\n  padding: 5px;\n  text-align: left;\n  width: 25%;\n}\n\ninput{\n  width:70%\n}\n\ntextarea{\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display:inline-block;\n  *display: inline;     /* for IE7*/\n  zoom:1;              /* for IE7*/\n  vertical-align:middle;\n  margin-left:20px;\n  width: 95%;\n  height: 20vw\n}\n\n@media only screen and (max-width : 1000px) {\n\n  .container{\n    width:50%;\n\n  }\n\n  form{\n    display: grid;\n    grid-template-rows: repeat(4,1fr);\n    grid-row-gap: 1vw;\n    padding:2vw;\n    border: 20px #dc9712;\n\n  }\n\n  label {\n    display:inline-block;\n    *display: inline;     /* for IE7*/\n    zoom:1;              /* for IE7*/\n    float: left;\n    padding-top: 5px;\n    text-align: left;\n    width: 20%;\n  }\n  textarea{\n    margin-top: 5px;\n    margin-bottom: 5px;\n    display:inline-block;\n    *display: inline;     /* for IE7*/\n    zoom:1;              /* for IE7*/\n    vertical-align:middle;\n    margin-left:20px;\n    width: 90%;\n    height: 20vw\n  }\n}\n\n@media only screen and (max-width : 700px) {\n  .container{\n    width:90%;\n  }\n  textarea{\n    width:90%;\n\n  }\n  label{\n    width:25%;\n  }\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQywwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixlQUFlOzs7Q0FHaEI7O0FBRUQ7RUFDRSxxQkFBcUI7R0FDckIsZ0JBQWlCLEtBQUssWUFBWTtFQUNsQyxPQUFPLGNBQWMsWUFBWTtFQUNqQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtHQUNyQixnQkFBaUIsS0FBSyxZQUFZO0VBQ2xDLE9BQU8sY0FBYyxZQUFZO0VBQ2pDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7Q0FDYjs7QUFFRDs7RUFFRTtJQUNFLFVBQVU7O0dBRVg7O0VBRUQ7SUFDRSxjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCOztHQUV0Qjs7RUFFRDtJQUNFLHFCQUFxQjtLQUNyQixnQkFBaUIsS0FBSyxZQUFZO0lBQ2xDLE9BQU8sY0FBYyxZQUFZO0lBQ2pDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7R0FDWjtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7S0FDckIsZ0JBQWlCLEtBQUssWUFBWTtJQUNsQyxPQUFPLGNBQWMsWUFBWTtJQUNqQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0dBQ2I7Q0FDRjs7QUFDRDtFQUNFO0lBQ0UsVUFBVTtHQUNYO0VBQ0Q7SUFDRSxVQUFVOztHQUVYO0VBQ0Q7SUFDRSxVQUFVO0dBQ1g7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDo1MCU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNzM4O1xufVxuXG5mb3Jte1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LDFmcik7XG4gIGdyaWQtcm93LWdhcDogLjV2dztcbiAgcGFkZGluZzoydnc7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwO1xuICBib3JkZXI6IDJweCBvdXRzZXQgIzQ4N2U0ODtcbiAgY29sb3I6ICM3MWM2NzE7XG5cblxufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAqZGlzcGxheTogaW5saW5lOyAgICAgLyogZm9yIElFNyovXG4gIHpvb206MTsgICAgICAgICAgICAgIC8qIGZvciBJRTcqL1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMjUlO1xufVxuaW5wdXR7XG4gIHdpZHRoOjcwJVxufVxudGV4dGFyZWF7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTsgICAgIC8qIGZvciBJRTcqL1xuICB6b29tOjE7ICAgICAgICAgICAgICAvKiBmb3IgSUU3Ki9cbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICBtYXJnaW4tbGVmdDoyMHB4O1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDIwdndcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTAwMHB4KSB7XG5cbiAgLmNvbnRhaW5lcntcbiAgICB3aWR0aDo1MCU7XG5cbiAgfVxuXG4gIGZvcm17XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LDFmcik7XG4gICAgZ3JpZC1yb3ctZ2FwOiAxdnc7XG4gICAgcGFkZGluZzoydnc7XG4gICAgYm9yZGVyOiAyMHB4ICNkYzk3MTI7XG5cbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lOyAgICAgLyogZm9yIElFNyovXG4gICAgem9vbToxOyAgICAgICAgICAgICAgLyogZm9yIElFNyovXG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgdGV4dGFyZWF7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lOyAgICAgLyogZm9yIElFNyovXG4gICAgem9vbToxOyAgICAgICAgICAgICAgLyogZm9yIElFNyovXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDIwdndcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzAwcHgpIHtcbiAgLmNvbnRhaW5lcntcbiAgICB3aWR0aDo5MCU7XG4gIH1cbiAgdGV4dGFyZWF7XG4gICAgd2lkdGg6OTAlO1xuXG4gIH1cbiAgbGFiZWx7XG4gICAgd2lkdGg6MjUlO1xuICB9XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" >\n\n    <div class=\"field\">\n      <label for=\"firstName\">First Name: </label>\n      <input id=\"firstName\" formControlName=\"firstName\">\n    </div>\n\n    <div class=\"field\">\n      <label for=\"lastName\">Last Name:</label>\n      <input id=\"lastName\" formControlName=\"lastName\">\n    </div>\n\n    <div class=\"field\">\n      <label for=\"company\">Company: </label>\n      <input id=\"company\" formControlName=\"company\">\n    </div>\n\n    <div class=\"field\">\n      <label for=\"email\">Email: </label>\n      <input id=\"email\" formControlName=\"email\">\n    </div>\n\n    <div class=\"field\">\n      <label for=\"message\">Message: </label>\n        <textarea id=\"message\" formControlName=\"text\"></textarea>\n    </div>\n\n    <button type=\"submit\" [disabled]=\"contactForm.pristine\">Send</button>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_contactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/contactForm */ "./src/app/models/contactForm.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.contactForm = this.createFormGroupWithBuilder(formBuilder);
    }
    ContactComponent.prototype.createFormGroupWithBuilder = function (formBuilder) {
        return formBuilder.group({
            Contact: formBuilder.group(new _models_contactForm__WEBPACK_IMPORTED_MODULE_2__["Contact"]()),
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            text: ''
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        // Make sure to create a deep copy of the form-model
        var result = Object.assign({}, this.contactForm.value);
        // Do useful stuff with the gathered data
        this.http.post("http://localhost:8080/api/email", result, { headers: this.headers }).subscribe(function (data) { });
        console.log(result);
        this.revert();
    };
    ContactComponent.prototype.revert = function () {
        // Resets to blank object
        this.contactForm.reset();
        // Resets to provided model
        this.contactForm.reset({ personalData: new _models_contactForm__WEBPACK_IMPORTED_MODULE_2__["Contact"](), requestType: '', text: '' });
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  display: grid;\n  grid-template-columns:repeat(3, 1fr);\n  grid-auto-rows: minmax(125px, auto);\n  grid-template-areas:\n  \". img .\"\n  \"github img linkedin\"\n  \". img .\";\n  text-align: center;\n  font-size: 3vw;\n  height: 30rem;\n  width: 70rem;\n  position: relative;\n  margin: auto;\n}\n\n#img{\ngrid-area: img;\nposition: absolute;\nheight: 100%;\nwidth:95%;\nborder: .5rem outset #222020;\nborder-radius: 50%;\nmargin: auto;\n-o-object-fit: fill;\n   object-fit: fill;\n}\n\n.links a{\n  color:#61aa61;\n  text-shadow: 4px 4px 2px #000;\n  text-decoration: none;\n}\n\n#github {\ngrid-area: github;\n}\n\n#linkedin {\ngrid-area:linkedin;\n}\n\n@media only screen and (max-width : 900px) {\n\n  .container{\n    display: grid;\n    grid-template-columns:repeat(3, 1fr);\n    grid-auto-rows: minmax(125px, auto);\n    grid-template-areas:\n      \". img .\"\n      \"github img linkedin\"\n      \". img .\";\n    text-align: center;\n    font-size: 3vw;\n    height: 15vw;\n    width:100%;\n    position: relative;\n    margin: -100px auto;\n  }\n\n  #img{\n    grid-area: img;\n    position: absolute;\n    height: 100%;\n    width:95%;\n    border: .5rem outset #222020;\n    border-radius: 50%;\n    margin: auto;\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n\n  .links a{\n    color:#61aa61;\n    text-shadow: 4px 4px 2px #000;\n    text-decoration: none;\n  }\n\n  #github {\n    grid-area: github;\n  }\n\n  #linkedin {\n    grid-area:linkedin;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QscUNBQXFDO0VBQ3JDLG9DQUFvQztFQUNwQzs7O1lBR1U7RUFDVixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDs7QUFFRDtBQUNBLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixvQkFBaUI7R0FBakIsaUJBQWlCO0NBQ2hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixzQkFBc0I7Q0FDdkI7O0FBRUQ7QUFDQSxrQkFBa0I7Q0FDakI7O0FBRUQ7QUFDQSxtQkFBbUI7Q0FDbEI7O0FBRUQ7O0VBRUU7SUFDRSxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQzs7O2dCQUdZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0JBQWlCO09BQWpCLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsc0JBQXNCO0dBQ3ZCOztFQUVEO0lBQ0Usa0JBQWtCO0dBQ25COztFQUVEO0lBQ0UsbUJBQW1CO0dBQ3BCOztDQUVGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTI1cHgsIGF1dG8pO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICBcIi4gaW1nIC5cIlxuICBcImdpdGh1YiBpbWcgbGlua2VkaW5cIlxuICBcIi4gaW1nIC5cIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDN2dztcbiAgaGVpZ2h0OiAzMHJlbTtcbiAgd2lkdGg6IDcwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI2ltZ3tcbmdyaWQtYXJlYTogaW1nO1xucG9zaXRpb246IGFic29sdXRlO1xuaGVpZ2h0OiAxMDAlO1xud2lkdGg6OTUlO1xuYm9yZGVyOiAuNXJlbSBvdXRzZXQgIzIyMjAyMDtcbmJvcmRlci1yYWRpdXM6IDUwJTtcbm1hcmdpbjogYXV0bztcbm9iamVjdC1maXQ6IGZpbGw7XG59XG5cbi5saW5rcyBhe1xuICBjb2xvcjojNjFhYTYxO1xuICB0ZXh0LXNoYWRvdzogNHB4IDRweCAycHggIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jZ2l0aHViIHtcbmdyaWQtYXJlYTogZ2l0aHViO1xufVxuXG4jbGlua2VkaW4ge1xuZ3JpZC1hcmVhOmxpbmtlZGluO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA5MDBweCkge1xuXG4gIC5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMjVweCwgYXV0byk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwiLiBpbWcgLlwiXG4gICAgICBcImdpdGh1YiBpbWcgbGlua2VkaW5cIlxuICAgICAgXCIuIGltZyAuXCI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIGhlaWdodDogMTV2dztcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IC0xMDBweCBhdXRvO1xuICB9XG5cbiAgI2ltZ3tcbiAgICBncmlkLWFyZWE6IGltZztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOjk1JTtcbiAgICBib3JkZXI6IC41cmVtIG91dHNldCAjMjIyMDIwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgfVxuXG4gIC5saW5rcyBhe1xuICAgIGNvbG9yOiM2MWFhNjE7XG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMnB4ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgI2dpdGh1YiB7XG4gICAgZ3JpZC1hcmVhOiBnaXRodWI7XG4gIH1cblxuICAjbGlua2VkaW4ge1xuICAgIGdyaWQtYXJlYTpsaW5rZWRpbjtcbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\">\n  <video autoplay loop id=\"img\">\n    <source id =\"video\" src=\"../../assets/images/ezgif.com-gif-maker.mp4\" type=\"video/mp4\"/>\n  </video>\n  <div id=\"github\" class=\"links hvr-buzz\"> <a href=\"https://github.com/etacalpha\" target=\"_blank\">Github</a> </div>\n  <div id=\"linkedin\" class=\"links hvr-buzz\"> <a  href=\"https://www.linkedin.com/in/steven-beard\" target=\"www.linkedin.com/in/steven-beard\">Linkedin</a> </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
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

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/models/contactForm.ts":
/*!***************************************!*\
  !*** ./src/app/models/contactForm.ts ***!
  \***************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
        this.firstname = '';
        this.lastName = '';
        this.company = '';
        this.email = '';
        this.text = '';
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  height: 20rem;\n  width: 100%;\n  position: relative;\n}\n\n.container {\n  height: 100%;\n  border-radius: 155rem / 30rem;\n  border: solid .25rem #292828;\n  background-image: url('54446_forest_dark_forest.jpg');\n  position: relative;\n  top: -50%;\n}\n\n.container:before {\n  content: \" \";\n  position: absolute;\n  z-index: -1;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: -2rem;\n  border-radius: 155rem / 30rem;\n  border: outset 1.75rem #383535;\n}\n\n.nav {\n  display: grid;\n  height: 5rem;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-template-areas: \"review . . contact\" \". . . .\" \". projects about .\";\n  text-align: center;\n  position: relative;\n  font-size: 1.3rem;\n  font-weight: 400;\n  top: 63%;\n}\n\n.nav  a{\n  color: #61aa61;\n  text-shadow: 4px 4px 2px #000;\n  text-decoration: none;\n}\n\n#home {\n  font-size: 3rem;\n  color: #123612;\n  text-align: center;\n  position: relative;\n  bottom: -62%;\n  margin: auto;\n  left: 42%;\n  text-decoration: none;\n  text-shadow: 1px 1px 0px rgb(190, 188, 17);\n  font-weight: 500;\n}\n\n#reviews {\n    grid-area: review;\n    position: relative;\n    bottom: -.8rem;\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n\n#projects {\n  grid-area: projects;\n  position: relative;\n  text-align: center;\n  bottom: -.8rem;\n  -webkit-transform: rotate(2.5deg);\n          transform: rotate(2.5deg);\n}\n\n#contact {\n  grid-area: contact;\n  position: relative;\n  text-align: center;\n  bottom: -.8rem;\n  -webkit-transform: rotate(-12deg);\n          transform: rotate(-12deg);\n}\n\n#about {\n  grid-area: about;\n  position: relative;\n  text-align: center;\n  -webkit-transform: rotate(-2.5deg);\n          transform: rotate(-2.5deg);\n  bottom: -.7rem;\n}\n\n@media only screen and (max-width : 1600px) {\n\n  #contact {\n    grid-area: contact;\n    position: relative;\n    text-align: center;\n    bottom: -1.5rem;\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n\n\n  #reviews {\n    grid-area: review;\n    position: relative;\n    bottom: -1.5rem;\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n}\n\n@media only screen and (max-width : 1220px) {\n\n  #contact {\n    grid-area: contact;\n    position: relative;\n    text-align: center;\n    bottom: -2.5rem;\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n\n\n  #reviews {\n    grid-area: review;\n    position: relative;\n    bottom: -2.5rem;\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n}\n\n@media only screen and (max-width : 700px) {\n\n  section {\n    height: 20rem;\n    width: 100%;\n    position: relative;\n  }\n\n  .container:before {\n    content: \" \";\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    right: 5px;\n    bottom: -2rem;\n    border-radius: 155rem / 50rem;\n    border: outset 1.75rem #383535;\n  }\n\n  .nav  a{\n    font-size: small;\n    color: #61aa61;\n    text-shadow: 4px 4px 2px #000;\n    text-decoration: none;\n  }\n\n  #home {\n    font-size: 3rem;\n    color: #123612;\n    text-align: center;\n    position: relative;\n    bottom: -62%;\n    margin: auto;\n    left: 25%;\n    text-decoration: none;\n    text-shadow: 1px 1px 0px rgb(190, 188, 17);\n    font-weight: 500;\n  }\n\n  #reviews {\n    grid-area: review;\n    position: relative;\n    bottom: -3.2rem;\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n\n  #reviews span {\n    display: none;\n  }\n  #reviews:after {\n    font-family: FontAwesome;\n    font-size: 30px;\n    display: inline-block;\n    content: '\\f005';  }\n\n  #projects {\n    grid-area: projects;\n    position: relative;\n    text-align: center;\n    bottom: -.8rem;\n    -webkit-transform: rotate(2.5deg);\n            transform: rotate(2.5deg);\n  }\n\n  #projects span {\n    display: none;\n  }\n  #projects:after {\n    font-family: FontAwesome;\n    font-size: 30px;\n    display: inline-block;\n    content: '\\f00b';  }\n\n  #contact {\n    grid-area: contact;\n    position: relative;\n    text-align: center;\n    bottom: -3.2rem;\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n\n  #contact span {\n    display: none;\n  }\n  #contact:after {\n    font-family: FontAwesome;\n    font-size: 30px;\n    display: inline-block;\n    content: '\\f0e0';\n  }\n\n  #about {\n    grid-area: about;\n    position: relative;\n    text-align: center;\n    -webkit-transform: rotate(-2.5deg);\n            transform: rotate(-2.5deg);\n    bottom: -.7rem;\n  }\n\n  #about span {\n    display: none;\n  }\n  #about:after {\n    font-family: FontAwesome;\n    font-size: 30px;\n    display: inline-block;\n    content: '\\f007';\n  }\n\n}\n\n@media only screen and (max-width : 400px) {\n\n  section {\n    height: 20rem;\n    width: 100%;\n    position: relative;\n  }\n\n  .container:before {\n    content: \" \";\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    right: 5px;\n    bottom: -2rem;\n    border-radius: 155rem / 50rem;\n    border: outset 1.75rem #383535;\n  }\n\n  .nav  a{\n    font-size: small;\n    color: #61aa61;\n    text-shadow: 4px 4px 2px #000;\n    text-decoration: none;\n  }\n\n  #home {\n    font-size: 3rem;\n    color: #123612;\n    text-align: center;\n    position: relative;\n    bottom: -62%;\n    margin: auto;\n    left: 15%;\n    text-shadow: 1px 1px 0 rgb(190, 188, 17);\n    font-weight: 500;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixzREFBMEU7RUFDMUUsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsZ0NBQWdDO0VBQ2hDLHlFQUF5RTtFQUN6RSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsU0FBUztDQUNWOztBQUVEO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDJDQUEyQztFQUMzQyxpQkFBaUI7Q0FDbEI7O0FBRUM7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQ0FBeUI7WUFBekIseUJBQXlCO0dBQzFCOztBQUVIO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtDQUEwQjtVQUExQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0NBQTBCO1VBQTFCLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsZUFBZTtDQUNoQjs7QUFJRDs7RUFFRTtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0dBQzNCOzs7RUFHRDtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlDQUF5QjtZQUF6Qix5QkFBeUI7R0FDMUI7Q0FDRjs7QUFFRDs7RUFFRTtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0dBQzNCOzs7RUFHRDtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlDQUF5QjtZQUF6Qix5QkFBeUI7R0FDMUI7Q0FDRjs7QUFFRDs7RUFFRTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLCtCQUErQjtHQUNoQzs7RUFFRDtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHNCQUFzQjtHQUN2Qjs7RUFFRDtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsMkNBQTJDO0lBQzNDLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlDQUF5QjtZQUF6Qix5QkFBeUI7R0FDMUI7O0VBRUQ7SUFDRSxjQUFjO0dBQ2Y7RUFDRDtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGlCQUFpQixHQUFHOztFQUV0QjtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQ0FBMEI7WUFBMUIsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsY0FBYztHQUNmO0VBQ0Q7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUIsR0FBRzs7RUFFdEI7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0NBQTBCO1lBQTFCLDBCQUEwQjtHQUMzQjs7RUFFRDtJQUNFLGNBQWM7R0FDZjtFQUNEO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixlQUFlO0dBQ2hCOztFQUVEO0lBQ0UsY0FBYztHQUNmO0VBQ0Q7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7R0FDbEI7O0NBRUY7O0FBRUQ7O0VBRUU7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLDhCQUE4QjtJQUM5QiwrQkFBK0I7R0FDaEM7O0VBRUQ7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixzQkFBc0I7R0FDdkI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLGlCQUFpQjtHQUNsQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIGhlaWdodDogMjByZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDE1NXJlbSAvIDMwcmVtO1xuICBib3JkZXI6IHNvbGlkIC4yNXJlbSAjMjkyODI4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvNTQ0NDZfZm9yZXN0X2RhcmtfZm9yZXN0LmpwZycpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwJTtcbn1cblxuLmNvbnRhaW5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiAtMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTU1cmVtIC8gMzByZW07XG4gIGJvcmRlcjogb3V0c2V0IDEuNzVyZW0gIzM4MzUzNTtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogNXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicmV2aWV3IC4gLiBjb250YWN0XCIgXCIuIC4gLiAuXCIgXCIuIHByb2plY3RzIGFib3V0IC5cIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0b3A6IDYzJTtcbn1cblxuLm5hdiAgYXtcbiAgY29sb3I6ICM2MWFhNjE7XG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNob21lIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogIzEyMzYxMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTYyJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBsZWZ0OiA0MiU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYigxOTAsIDE4OCwgMTcpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4gICNyZXZpZXdzIHtcbiAgICBncmlkLWFyZWE6IHJldmlldztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAtLjhyZW07XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xuICB9XG5cbiNwcm9qZWN0cyB7XG4gIGdyaWQtYXJlYTogcHJvamVjdHM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3R0b206IC0uOHJlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMi41ZGVnKTtcbn1cblxuI2NvbnRhY3Qge1xuICBncmlkLWFyZWE6IGNvbnRhY3Q7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3R0b206IC0uOHJlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcbn1cblxuI2Fib3V0IHtcbiAgZ3JpZC1hcmVhOiBhYm91dDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yLjVkZWcpO1xuICBib3R0b206IC0uN3JlbTtcbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE2MDBweCkge1xuXG4gICNjb250YWN0IHtcbiAgICBncmlkLWFyZWE6IGNvbnRhY3Q7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3R0b206IC0xLjVyZW07XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcbiAgfVxuXG5cbiAgI3Jldmlld3Mge1xuICAgIGdyaWQtYXJlYTogcmV2aWV3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IC0xLjVyZW07XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDEyMjBweCkge1xuXG4gICNjb250YWN0IHtcbiAgICBncmlkLWFyZWE6IGNvbnRhY3Q7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3R0b206IC0yLjVyZW07XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcbiAgfVxuXG5cbiAgI3Jldmlld3Mge1xuICAgIGdyaWQtYXJlYTogcmV2aWV3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IC0yLjVyZW07XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDcwMHB4KSB7XG5cbiAgc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY29udGFpbmVyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICByaWdodDogNXB4O1xuICAgIGJvdHRvbTogLTJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTU1cmVtIC8gNTByZW07XG4gICAgYm9yZGVyOiBvdXRzZXQgMS43NXJlbSAjMzgzNTM1O1xuICB9XG5cbiAgLm5hdiAgYXtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjNjFhYTYxO1xuICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICNob21lIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgY29sb3I6ICMxMjM2MTI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IC02MiU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGxlZnQ6IDI1JTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYigxOTAsIDE4OCwgMTcpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAjcmV2aWV3cyB7XG4gICAgZ3JpZC1hcmVhOiByZXZpZXc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogLTMuMnJlbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XG4gIH1cblxuICAjcmV2aWV3cyBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNyZXZpZXdzOmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb250ZW50OiAnXFxmMDA1JzsgIH1cblxuICAjcHJvamVjdHMge1xuICAgIGdyaWQtYXJlYTogcHJvamVjdHM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3R0b206IC0uOHJlbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyLjVkZWcpO1xuICB9XG5cbiAgI3Byb2plY3RzIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI3Byb2plY3RzOmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb250ZW50OiAnXFxmMDBiJzsgIH1cblxuICAjY29udGFjdCB7XG4gICAgZ3JpZC1hcmVhOiBjb250YWN0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm90dG9tOiAtMy4ycmVtO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XG4gIH1cblxuICAjY29udGFjdCBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNjb250YWN0OmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb250ZW50OiAnXFxmMGUwJztcbiAgfVxuXG4gICNhYm91dCB7XG4gICAgZ3JpZC1hcmVhOiBhYm91dDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yLjVkZWcpO1xuICAgIGJvdHRvbTogLS43cmVtO1xuICB9XG5cbiAgI2Fib3V0IHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2Fib3V0OmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb250ZW50OiAnXFxmMDA3JztcbiAgfVxuXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQwMHB4KSB7XG5cbiAgc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY29udGFpbmVyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICByaWdodDogNXB4O1xuICAgIGJvdHRvbTogLTJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTU1cmVtIC8gNTByZW07XG4gICAgYm9yZGVyOiBvdXRzZXQgMS43NXJlbSAjMzgzNTM1O1xuICB9XG5cbiAgLm5hdiAgYXtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjNjFhYTYxO1xuICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICNob21lIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgY29sb3I6ICMxMjM2MTI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IC02MiU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGxlZnQ6IDE1JTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwIHJnYigxOTAsIDE4OCwgMTcpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container\">\n    <a id='home' [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" >Arch Dev</a>\n    <nav class='nav'>\n      <a id='reviews' class=\"hvr-push nav-item\" [routerLink]=\"['/review']\" routerLinkActive=\"router-link-active\"><span>They Said What!</span></a>\n      <a id='about' class=\"hvr-push nav-item\" [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\" ><span>Who Am I</span></a>\n      <a id='projects' class=\"hvr-push nav-item\" [routerLink]=\"['/projects']\" routerLinkActive=\"router-link-active\" ><span>My Creations</span></a>\n      <a id='contact' class=\"hvr-push nav-item\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\" ><span>Write Me</span></a>\n    </nav>\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/project-detail/project-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n  position: relative;\n  text-align: center;\n  font-size: 1.5vw;\n  text-shadow: 1px 1px 1px #000;\n  top:-100px;\n}\n\n#main{\n  display: grid;\n  position: relative;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: auto;\n  grid-template-areas:\n    \"tech img\"\n    \"description img\";\n  grid-column-gap: 2vw;\n  grid-row-gap: 2vw;\n  width:95%;\n  margin: auto;\n  padding: 15px;\n  font-size: .9rem;\n  text-shadow: 1px 1px 1px #000;\n  line-height: 1.5rem;\n  top:-100px;\n}\n\n.title{\n  color: #0F9E5E;\n}\n\n.info{\n  color: #5a9f2f;\n}\n\n#tech{\n  grid-area: tech;\n\n}\n\n#description{\n  grid-area: description;\n\n}\n\n#image{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-area:img;\n  align-self: center;\n\n}\n\n#image img{\n  width: 70vw;\n  border: 1px outset black;\n}\n\n@media screen and (max-width: 400px){\n\n  #main{\n    display: grid;\n    position: relative;\n    grid-auto-rows: auto;\n    grid-template-columns: auto;\n    grid-template-areas:\n      \"tech\"\n      \"description\"\n      \"img\";\n    grid-row-gap: 5vw;\n    width:100%;\n    margin: auto;\n    padding: 1vw;\n    font-size: .20rem;\n  }\n\n  #image img{\n    position: relative;\n    width: 90%;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid 1px #fff;\n\n  }\n  #img {\n    border: solid 1px #fff;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWwvcHJvamVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckI7O3NCQUVvQjtFQUNwQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUdEO0VBQ0UsZ0JBQWdCOztDQUVqQjs7QUFFRDtFQUNFLHVCQUF1Qjs7Q0FFeEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7O0NBRXBCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtDQUMxQjs7QUFHRDs7RUFFRTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1Qjs7O1lBR1E7SUFDUixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0dBQ25COztFQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsdUJBQXVCOztHQUV4QjtFQUNEO0lBQ0UsdUJBQXVCO0dBQ3hCOztDQUVGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1kZXRhaWwvcHJvamVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwO1xuICB0b3A6LTEwMHB4O1xufVxuXG4jbWFpbntcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwidGVjaCBpbWdcIlxuICAgIFwiZGVzY3JpcHRpb24gaW1nXCI7XG4gIGdyaWQtY29sdW1uLWdhcDogMnZ3O1xuICBncmlkLXJvdy1nYXA6IDJ2dztcbiAgd2lkdGg6OTUlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB0b3A6LTEwMHB4O1xufVxuXG4udGl0bGV7XG4gIGNvbG9yOiAjMEY5RTVFO1xufVxuLmluZm97XG4gIGNvbG9yOiAjNWE5ZjJmO1xufVxuXG5cbiN0ZWNoe1xuICBncmlkLWFyZWE6IHRlY2g7XG5cbn1cblxuI2Rlc2NyaXB0aW9ue1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xuXG59XG5cbiNpbWFnZXtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLXJvdy1lbmQ6IDM7XG4gIGdyaWQtYXJlYTppbWc7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcblxufVxuXG4jaW1hZ2UgaW1ne1xuICB3aWR0aDogNzB2dztcbiAgYm9yZGVyOiAxcHggb3V0c2V0IGJsYWNrO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcblxuICAjbWFpbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwidGVjaFwiXG4gICAgICBcImRlc2NyaXB0aW9uXCJcbiAgICAgIFwiaW1nXCI7XG4gICAgZ3JpZC1yb3ctZ2FwOiA1dnc7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMXZ3O1xuICAgIGZvbnQtc2l6ZTogLjIwcmVtO1xuICB9XG5cbiAgI2ltYWdlIGltZ3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XG5cbiAgfVxuICAjaW1nIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/project-detail/project-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"title\">\n  <h1>{{project.name}}</h1>\n</header>\n<div id=\"main\">\n\n  <section id=\"tech\">\n    <h2 class=\"title\">Tech / Languages Used: </h2>\n    <h3 class=\"info\">{{project.tech}}</h3>\n  </section>\n\n  <section id=\"description\">\n    <h2 class=\"title\">Description: </h2>\n    <h3 class=\"info\">{{project.description}}</h3>\n  </section>\n\n  <section id=\"image\">\n    <div>\n      <img id=\"img\" src=\"../../assets/images/{{project.imageLocation}}\" alt=\"Image of web app\">\n    </div>\n\n  </section>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/project-detail/project-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.getProject();
    };
    ProjectDetailComponent.prototype.getProject = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.project = this.projectService.getProject(id).subscribe(function (project) { return _this.project = project; });
    };
    ProjectDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(/*! ./project-detail.component.html */ "./src/app/project-detail/project-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-detail.component.css */ "./src/app/project-detail/project-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/project.service.ts":
/*!************************************!*\
  !*** ./src/app/project.service.ts ***!
  \************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ProjectService = /** @class */ (function () {
    function ProjectService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.projectUrl = 'http://localhost:8080/api/projects';
    }
    ProjectService.prototype.getProjects = function () {
        var _this = this;
        // TODO: send the message _after_ fetching the heroes
        this.messageService.add('ProjectService: fetched projects');
        return this.http.get(this.projectUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log('fetched projects'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getProjects', [])));
    };
    ProjectService.prototype.getProject = function (id) {
        var _this = this;
        var url = this.projectUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched project id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getProject id=" + id)));
    };
    ProjectService.prototype.log = function (message) {
        this.messageService.add("ProjectService: " + message);
    };
    ProjectService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Flex styles -------------------------------------------------*/\nmain{\n  background: url('Code.png') center #333 no-repeat;\n  background-size: cover;\n}\n/* Grid styles -------------------------------------------------*/\n.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 30px;\n}\n/* Generic styles ----------------------------------------------*/\n.logo {\n  height: 50px;\n  margin-right: 20px;\n}\n.cards {\n  max-width: 960px;\n  margin: 0 auto 30px;\n  padding:30px;\n}\narticle {\n  position: relative;\n}\n.article-img {\n  height: 200px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.article-title {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRUFBa0U7QUFDbEU7RUFDRSxrREFBc0U7RUFJdEUsdUJBQXVCO0NBQ3hCO0FBRUQsa0VBQWtFO0FBQ2xFO0VBQ0UsY0FBYztFQUNkLDZEQUE2RDtFQUM3RCxlQUFlO0NBQ2hCO0FBR0Qsa0VBQWtFO0FBQ2xFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixxQkFBa0I7S0FBbEIsa0JBQWtCO0NBQ25CO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QsMkNBQTJDO0NBQzVDIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZsZXggc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubWFpbntcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL0NvZGUucG5nJykgY2VudGVyICMzMzMgbm8tcmVwZWF0O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLyogR3JpZCBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uY2FyZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAzMHB4O1xufVxuXG5cbi8qIEdlbmVyaWMgc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmxvZ28ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNhcmRzIHtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgcGFkZGluZzozMHB4O1xufVxuXG5hcnRpY2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXJ0aWNsZS1pbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5hcnRpY2xlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <section class=\"cards\">\n    <article *ngFor = \"let project of projects\">\n      <a [routerLink]=\"['/project',project.id]\">\n        <img class=\"article-img\" src=\"../../assets/images/{{project.imageLocation}}\" alt=\" \" />\n      </a>\n      <h1 class=\"article-title\">\n        {{project.name}}\n      </h1>\n    </article>\n  </section>\n</main>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (projects) { return _this.projects = projects; });
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container{\n  width:75%;\n  display: grid;\n  margin: auto;\n  grid-template-columns:repeat(5, 1fr);\n  grid-auto-rows: auto;\n  grid-template-areas:\n    \". bill billr billr .\"\n    \". toby tobyr tobyr .\"\n    \". james jamesr jamesr .\";\n  grid-row-gap: 80px;\n  grid-column-gap: 20px;\n}\n\n.title{\n  color: #56b748;\n  position: relative;\n  vertical-align: center;\n  line-height: 20px;\n  font-size: 1vw;\n  text-shadow: 1px 1px 1px #000;\n  font-weight: 500;\n  padding-bottom: 50px;\n}\n\n.title span{\n  color: #9baa50;\n}\n\n.title img{\n  height: 12vw;\n}\n\n.description{\n  font-size: 1vw;\n  line-height: 25px;\n  color: #61aa61;\n  text-shadow: 1px 1px 1px #000;\n}\n\n#bill{\n  grid-area: bill;\n}\n\n#billr{\n  grid-area: billr;\n}\n\n#toby{\n  grid-area: toby;\n}\n\n#tobyr{\n  grid-area: tobyr;\n}\n\n#james{\n  grid-area: james;\n}\n\n#jamesr{\n  grid-area: jamesr;\n}\n\n@media only screen and (max-width : 400px) {\n\n  #container{\n    grid-row-gap: 1px;\n    grid-column-gap: 20px;\n    grid-template-columns:repeat(3, 1fr);\n    grid-template-areas:\n      \"bill billr billr \"\n      \"toby tobyr tobyr \"\n      \"james jamesr jamesr \";\n    width: 95%;\n    margin: auto;\n    padding: 15px;\n  }\n\n  .title{\n    padding-bottom: 10px;\n    font-size: .25rem;\n  }\n\n  .description{\n    font-size: .25rem;\n    padding-bottom: 30px;\n  }\n\n  .title img{\n    height: 30vw;\n  }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQjs7OzhCQUc0QjtFQUM1QixtQkFBbUI7RUFDbkIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHFDQUFxQztJQUNyQzs7OzZCQUd5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7R0FDZjs7RUFFRDtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7R0FDbkI7O0VBRUQ7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0dBQ3RCOztFQUVEO0lBQ0UsYUFBYTtHQUNkO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xuICB3aWR0aDo3NSU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg1LCAxZnIpO1xuICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi4gYmlsbCBiaWxsciBiaWxsciAuXCJcbiAgICBcIi4gdG9ieSB0b2J5ciB0b2J5ciAuXCJcbiAgICBcIi4gamFtZXMgamFtZXNyIGphbWVzciAuXCI7XG4gIGdyaWQtcm93LWdhcDogODBweDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xufVxuXG4udGl0bGV7XG4gIGNvbG9yOiAjNTZiNzQ4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDF2dztcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4udGl0bGUgc3BhbntcbiAgY29sb3I6ICM5YmFhNTA7XG59XG5cbi50aXRsZSBpbWd7XG4gIGhlaWdodDogMTJ2dztcbn1cblxuLmRlc2NyaXB0aW9ue1xuICBmb250LXNpemU6IDF2dztcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjNjFhYTYxO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcbn1cblxuI2JpbGx7XG4gIGdyaWQtYXJlYTogYmlsbDtcbn1cblxuI2JpbGxye1xuICBncmlkLWFyZWE6IGJpbGxyO1xufVxuXG4jdG9ieXtcbiAgZ3JpZC1hcmVhOiB0b2J5O1xufVxuI3RvYnlye1xuICBncmlkLWFyZWE6IHRvYnlyO1xufVxuXG4jamFtZXN7XG4gIGdyaWQtYXJlYTogamFtZXM7XG59XG4jamFtZXNye1xuICBncmlkLWFyZWE6IGphbWVzcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDAwcHgpIHtcblxuICAjY29udGFpbmVye1xuICAgIGdyaWQtcm93LWdhcDogMXB4O1xuICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwiYmlsbCBiaWxsciBiaWxsciBcIlxuICAgICAgXCJ0b2J5IHRvYnlyIHRvYnlyIFwiXG4gICAgICBcImphbWVzIGphbWVzciBqYW1lc3IgXCI7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC50aXRsZXtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IC4yNXJlbTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbntcbiAgICBmb250LXNpemU6IC4yNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC50aXRsZSBpbWd7XG4gICAgaGVpZ2h0OiAzMHZ3O1xuICB9XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/review/review.component.html":
/*!**********************************************!*\
  !*** ./src/app/review/review.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"container\">\n  <div id=\"bill\" class=\"title\">\n    <h2>Bill Davis</h2>\n    <h3><span>Mobile Device Software Developer</span></h3>\n    <p>01 AUG 2018</p>\n    <img src=\"../../assets/images/bill.jpg\">\n  </div>\n  <div id=\"billr\" class=\"description\">\n    <p>\n      I met Steven during GiveCamp 2018. I was project manager for our team,\n      and he was assigned to us as a technical resource. For our project, on\n      behalf of Rubber City Theatre, we were tasked with building a 'chat'\n      style program that the theater would use for audience interaction during\n      a performance. I was truly impressed with Steven. Despite still being a\n      student, he was willing to dive in and do what needed to be done. He was an\n      active participant suggesting approaches to our project at the beginning, then\n      researched his ideas for feasibility. Then, once an approach was decided upon by\n      the team, he jumped in and started coding. Most impressively, he wasn't willing to\n      let the fact that he did not have any advanced training in what we were working in\n      (Node.js backend with javascript and css frontend) keep him from contributing.\n      Additionally, it was Steven who had knowledge of an excellent server hosting company\n      that was perfect for the project. I was also pleased to see that when he became stuck\n      on a problem, he was willing to reach out to one of the other team members for advice.\n      I'm confident that Steven would make an excellent addition to any development team.\n    </p>\n  </div>\n  <div id=\"toby\" class=\"title\">\n    <h2>Toby MacKenzie</h2>\n    <h3><span>Front End Web Developer</span></h3>\n    <p>26 July 2018</p>\n    <img src=\"../../assets/images/toby.jpg\">\n  </div>\n  <div id=\"tobyr\" class=\"description\">\n    <p>\n      Steven and I worked together on a project at the 2018 Cleveland GiveCamp. Though new to\n      the industry, he was motivated to contribute and willing to learn in a stack he hadn't\n      worked with before. I could tell he's driven to help others through his work. I enjoyed\n      working with him and helping him learn.\n    </p>\n  </div>\n  <div id=\"james\" class=\"title\">\n    <h2>James Gifford</h2>\n    <h3><span>Developer</span></h3>\n    <p>22 July 2018</p>\n    <img src=\"../../assets/images/james.jpg\">\n  </div>\n  <div id=\"jamesr\" class=\"description\">\n    <p>\n      I had the pleasure of working with Steven at the 2018 Cleveland GiveCamp, where he was a\n      key team member. I was extremely impressed by his attention to detail and the work he did\n      as an individual contributor, and particularly his willingness to roll up his sleeves, pitch\n      in and learn what he needed to learn to ensure the success of the project. I look forward to\n      working with him in the future, and I am certain that he will be a great addition to any team\n      that he is a part of!\n    </p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
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

var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sbeard/Code/github/personal/personalWebsite/archDev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map