webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n\n<!--<div style=\"padding: 1em; height:100%\">-->\n<div class=\"full-height\">\n    <router-outlet></router-outlet>\n</div>\n\n<footer style=\"background-color: #4253AE; z-index: 10; color:white\">\n    <div style=\"text-align: right\">\n        <!--<p style=\"margin-top:20px;\">Copyright 2017 &copy; <a style=\"color:red\" href=\"http://www.rpss.ro/\">Red Point Software Solutions</a></p>-->\n      <!--<p style=\"margin-top:20px;\">Powered by <a style=\"color:#f44336\" href=\"http://www.rpss.ro/\">Red Point Software Solutions</a></p>-->\n      <p style=\"margin-top:20px;\"> v {{version}}</p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_version__ = __webpack_require__("../../../../../src/app/app.version.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.version = __WEBPACK_IMPORTED_MODULE_1__app_version__["a" /* appVersion */];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_app_menu_app_menu_component__ = __webpack_require__("../../../../../src/app/components/app-menu/app-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_formular_formular_component__ = __webpack_require__("../../../../../src/app/components/formular/formular.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    // { path: '', pathMatch: 'full', redirectTo: 'homepage' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_formular_formular_component__["a" /* FormularComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_app_menu_app_menu_component__["a" /* AppMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_formular_formular_component__["a" /* FormularComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["l" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["q" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["u" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["r" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MdStepperModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["x" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["y" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MdFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng_recaptcha__["RecaptchaModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_3_ng_recaptcha__["RECAPTCHA_SETTINGS"],
                useValue: { siteKey: '6LfOpDMUAAAAAC9-QkvsrH_SW__fdahN03RJEVaj' },
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_3_ng_recaptcha__["RECAPTCHA_LANGUAGE"],
                useValue: 'ro',
            },
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["LOCALE_ID"], useValue: 'ro-ro' },
            __WEBPACK_IMPORTED_MODULE_12__services_logger_service__["a" /* LoggerService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.version.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return secretKey; });
var appVersion = '1.7';
var secretKey = 'c1ce18ec-88d8-421f-8077-6ca7c824b7e9';
//# sourceMappingURL=app.version.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-menu/app-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"accent\">\n  <div class=\"spacer\"></div>\n  <div style=\"margin: 0 10px\"><img src=\"logo-ps1.gif\"/*tpa=http://programari.starecivila1.ro/assets/img/logo-ps1.gif*/ style=\"height: 50px\"></div>\n  <div style=\"margin: 0 10px\">Program??ri on-line</div>\n  <div class=\"spacer\"></div>\n</md-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/components/app-menu/app-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app-menu/app-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppMenuComponent = (function () {
    function AppMenuComponent() {
    }
    AppMenuComponent.prototype.ngOnInit = function () {
    };
    return AppMenuComponent;
}());
AppMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/components/app-menu/app-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app-menu/app-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppMenuComponent);

//# sourceMappingURL=app-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/formular/formular.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"channelStatus === 1 || channelStatus === 3\" class=\"full-height\" style=\"padding: 0 10px\">\n    <md-tab-group class=\"demo-tab-group full-height\" [selectedIndex]=\"currentStep\">\n      <md-tab label=\"1. ??nregistrare\" [disabled]=\"currentStep !== CONNECTED\" class=\"full-height\">\n          <div class=\"demo-tab-content full-height\">\n            <form *ngIf=\"config\" [formGroup]=\"step1Form\"  (ngSubmit)=\"submitFormStep1()\">\n                <div fxLayout.lt-md=\"column\" fxLayout.md=\"row\" fxLayout.gt-md=\"row\" fxLayoutGap=\"10px\">\n                  <!--<div fxFlex>-->\n                    <!--<h3>REGULAMENT REZERVARE ON LINE</h3>-->\n                    <!--<div style=\"font-size:0.7em\">-->\n                      <!--<div style=\"margin-top: 5px;\">1.\tRezervarea on-line este disponibil?? pentru persoanele cet????eni rom??ni n??scu??i ??n Republica Moldova ??i Ucraina care au dob??ndit/redob??ndit cet????enia rom??n?? ??i nu au avut niciodat?? domiciliul ??n Rom??nia ??i care ??ndeplinesc condi??iile prev??zute la art. 41 alin. (5??) lit. b) sau lit. c) din Legea 119/1996.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">2.\tRezervarea pentru depunerea cererilor privind transcrierea certificatelor/extraselor de stare civil?? se poate face ??ncep??nd cu data de 15 a fiecarei luni, orele 10:00 pentru luna urm??toare. ( Exemplu: pe data de 15.07.2017 v?? pute??i rezerva pentru luna august)</div>-->\n                      <!--<div style=\"margin-top: 5px;\">3.\tNu se pot face program??ri prin email, fax sau telefonic.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">4.\t??nainte de completarea program??rii, solicitantul se asigur?? c?? ??ndepline??te condi??iile prev??zute de art. 41 alin. (5??) lit. b) sau lit. c) din Legea 119/1996 ??i c?? de??ine toate actele necesare transcrierii prev??zute de lege ??i men??ionate ??n lista documentelor necesare transcrierii certificatelor/extraselor de stare civil??. Documentele se vor prezenta la ghi??eu ??n original ??i copii Xerox.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">5.\tPrin continuarea procedurii de rezervare online solicitantul este de acord cu prelucrarea datelor personale, ??n conformitate cu prevederile Legii nr. 677/2001 pentru protec??ia persoanelor cu privire la prelucrarea datelor cu caracter personal ??i libera circula??ie a acestor date.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">6.\tRezerv??rile sunt ??mp??r??ite ??n 3 tipuri de formular:-->\n                        <!--<ul>-->\n                          <!--<li>-->\n                            <!--Avoca??i - pot face o singur?? programare pe zi-->\n                            <!--<ol>-->\n                              <!--<li>Nume ??i prenume deponent ( c??mp obligatoriu )</li>-->\n                              <!--<li>CNP deponent ( c??mp obligatoriu )</li>-->\n                              <!--<li>Nr. documente  (0 sau 5, c??mp obligatoriu )</li>-->\n                              <!--<li>E-mail deponent ( c??mp obligatoriu )</li>-->\n                            <!--</ol>-->\n                          <!--</li>-->\n                          <!--<li>-->\n                            <!--Mandatari - pot face o singur?? programare pe zi-->\n                            <!--<ol>-->\n                              <!--<li>Nume ??i prenume deponent ( c??mp obligatoriu )</li>-->\n                              <!--<li>CNP deponent ( c??mp obligatoriu )</li>-->\n                              <!--<li>Nr. documente (0-5) ( c??mp obligatoriu )</li>-->\n                              <!--<li>E-mail deponent ( c??mp obligatoriu )</li>-->\n                            <!--</ol>-->\n                          <!--</li>-->\n                          <!--<li>-->\n                            <!--Titulari (nume propriu)-->\n                            <!--<ol>-->\n                              <!--<li>Nume ??i prenume deponent ( c??mp obligatoriu )</li>-->\n                              <!--<li>CNP deponent ( c??mp obligatoriu )</li>-->\n                              <!--<li>Nr. documente (0-5) ( c??mp obligatoriu )</li>-->\n                              <!--<li>E-mail deponent ( c??mp obligatoriu )</li>-->\n                            <!--</ol>-->\n                          <!--</li>-->\n                        <!--</ul>-->\n                      <!--</div>-->\n                      <!--<div style=\"margin-top: 5px;\">7.\tSolicitantul nu poate face rezervare ??n calitate de avocat ??i mandatar ??n aceasi zi.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">8.\tSolicitantul completeaz?? toate c??mpurile obligatorii prev??zute ??n aplica??ia de rezervare. Datele personale ale acestuia (numele de familie, prenumele ??i CNP) se completeaz?? ??ntocmai cum rezult?? din actul de identitate, f??r?? prescurt??ri, sau ini??iale. Solicitantul completeaz?? ??n aplica??ia de rezervare o adres?? de e-mail valid??, la care va primi un r??spuns cuprinz??nd data la care este programat s?? depun?? cererea (??n caz contrar v?? rug??m verifica??i ??i folderul Spam).</div>-->\n                      <!--<div style=\"margin-top: 5px;\">9.\tSolicitantul se va prezenta la ghiseu fix cu num??rul de documente stipulat ??n rezervare, nerespectarea acestui aspect duce la anularea rezerv??ri.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">10.\tNeprezentarea la data programat??, neconformitatea datelor ??nscrise ??n rubricile din formularul de rezervare cu datele care rezult?? din actele prezentate (actul de identitate, procura special??, dac?? este cazul), ??i/sau lipsa tuturor actelor necesare duc la anularea rezerv??rii. Rezerv??rile neconforme nu vor fi luate in considerare.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">11.\tNu se fac rezerv??ri pentru zilele nelucr??toare, stabilite sau anun??ate ulterior prin acte normative ca zile ??n care nu se desf????oar?? activitate de lucru cu publicul.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">12.\tNerespectarea oric??rei dispozi??ii referitoare la condi??iile de programare ??n vederea depunerii cererii duce la anularea rezerv??rii.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">13.\tProgramarea este gratuit?? ??i netransmisibil??.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">14.\tPreciz??m c?? v?? pute??i adresa ??i la alte Servicii de stare civil?? unde s-au atribuit competen??e ??n transcrierea certificatelor/extraselor de stare civil?? procurate din str??in??tate pentru cet????enii care nu au avut niciodat?? domiciliul ??n Rom??nia, respectiv : mun.Ia??i, mun.Suceava, mun.Gala??i, ??n conformitate cu prevederile art.41 alin.5 din Legea 213/2013 pentru modificarea ??i completarea Legii 119/1996 cu privire la actele de stare civil??.</div>-->\n                      <!--<div style=\"margin-top: 5px;\"><strong>Depunerea cererilor</strong></div>-->\n                      <!--<div style=\"margin-top: 5px;\">1.\tCererile de transcriere se depun la sediul  Direc??ia Public?? de Eviden???? a Persoanelor ??i Stare Civil?? a Sectorului 1, situat ??n Mun. Bucure??ti, Str. Amzei, Nr. 13, de c??tre persoana care figureaz?? ca deponent ??n rezervarea on-line.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">2.\tTermenul de solu??ionare a cererilor privind transcrierea certificatelor/extraselor de stare civil?? este de 60 de zile de la data ??nregistr??rii cererii, potrivit art. 41 alin. (5??) din Legea 119/1996.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">3.\tFunc??ionarul care prime??te cererea de transcriere ??nm??neaz?? solicitantului o dovad?? care cuprinde num??rul de ??nregistrare, data ??nregistr??rii ??i data la care se va prezenta ??n vederea ridic??rii documentelor tranascrise.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">4.\tProgramul de lucru cu publicul aferent activit????ii de primire a cererilor de transcriere a certificatelor/extraselor de stare civil?? se desf????oar?? ??n zilele lucr??toare de luni, ??n intervalul orar 08:30-15:30, ??i miercuri 8:30-15:30.</div>-->\n\n                      <!--<div style=\"margin-top: 5px;\"><strong>Solu??ionarea cererilor</strong></div>-->\n                      <!--<div style=\"margin-top: 5px;\">1.\tFunc??ionarii publici desemna??i, solu??ioneaz?? cererile privind transcrierea certificatelor /extraselor de stare civil?? ??n conformitate cu prevederile legale ??n materie.</div>-->\n                      <!--<div style=\"margin-top: 5px;\">2.\tEliberarea certificatelor de stare civil?? transcrise se face ??n zilele lucr??toare de mar??i ??n intervalul orar 8:30-18:30 ??i joi 08:30-16:30.</div>-->\n                      <!--<div style.md=\"height:80px\" style.gt-lg=\"height:80px\"></div>-->\n                    <!--</div>-->\n                  <!--</div>-->\n                  <div fxFlex>\n                      <div *ngIf=\"error_message\" style=\"color:red\" class=\"full-width\">\n                        <h3>{{ error_message }}</h3>\n                      </div>\n\n                      <md-form-field class=\"full-width\">\n                        <input mdInput placeholder=\"Nume ??i prenume\" formControlName=\"nume\" class=\"full-width\">\n                      </md-form-field>\n\n                      <md-form-field class=\"full-width\">\n                        <input mdInput placeholder=\"Codul de identitate din buletin\" formControlName=\"cnp\">\n                      </md-form-field>\n\n                      <md-form-field class=\"full-width\">\n                        <input mdInput placeholder=\"Email\" formControlName=\"email\">\n                      </md-form-field>\n                      <div style=\"padding-left: 15px\">\n                        <md-checkbox formControlName=\"accept\">Am citit ??i sunt de acord cu regulamentul</md-checkbox>\n                      </div>\n\t\t      <br/>\n                      <re-captcha (resolved)=\"resolved($event)\" [siteKey]=\"siteKey\"></re-captcha>\n\n                      <div fxLayout=\"row\" style=\"margin-top:10px\">\n                        <div fxFlex=\"200px\"><button md-raised-button color=\"primary\" [disabled]=\"!step1Form.valid || !captchaResponse\">??nregistrare</button></div>\n                        <div fxFlex></div>\n                      </div>\n                      <div style=\"height:80px\"></div>\n                    </div>\n                </div>\n\n            </form>\n          </div>\n        </md-tab>\n        <md-tab label=\"2. List?? de a??teptare\" [disabled]=\"currentStep !== QUEUED\">\n          <div class=\"demo-tab-content\" class=\"full-height\">\n            <div fxLayout.lt-md=\"column\" fxLayout.md=\"row\" fxLayout.gt-md=\"row\" fxLayoutGap=\"10px\">\n              <!--<div fxFlex>-->\n                <!--<h3>REGULAMENT REZERVARE ON LINE</h3>-->\n                <!--<div style=\"font-size:0.7em\">-->\n                  <!--<div style=\"margin-top: 5px;\">1.\tRezervarea on-line este disponibil?? pentru persoanele cet????eni rom??ni n??scu??i ??n Republica Moldova ??i Ucraina care au dob??ndit/redob??ndit cet????enia rom??n?? ??i nu au avut niciodat?? domiciliul ??n Rom??nia ??i care ??ndeplinesc condi??iile prev??zute la art. 41 alin. (5??) lit. b) sau lit. c) din Legea 119/1996.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">2.\tRezervarea pentru depunerea cererilor privind transcrierea certificatelor/extraselor de stare civil?? se poate face ??ncep??nd cu data de 15 a fiecarei luni, orele 10:00 pentru luna urm??toare. ( Exemplu: pe data de 15.07.2017 v?? pute??i rezerva pentru luna august)</div>-->\n                  <!--<div style=\"margin-top: 5px;\">3.\tNu se pot face program??ri prin email, fax sau telefonic.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">4.\t??nainte de completarea program??rii, solicitantul se asigur?? c?? ??ndepline??te condi??iile prev??zute de art. 41 alin. (5??) lit. b) sau lit. c) din Legea 119/1996 ??i c?? de??ine toate actele necesare transcrierii prev??zute de lege ??i men??ionate ??n lista documentelor necesare transcrierii certificatelor/extraselor de stare civil??. Documentele se vor prezenta la ghi??eu ??n original ??i copii Xerox.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">5.\tPrin continuarea procedurii de rezervare online solicitantul este de acord cu prelucrarea datelor personale, ??n conformitate cu prevederile Legii nr. 677/2001 pentru protec??ia persoanelor cu privire la prelucrarea datelor cu caracter personal ??i libera circula??ie a acestor date.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">6.\tRezerv??rile sunt ??mp??r??ite ??n 3 tipuri de formular:-->\n                    <!--<ul>-->\n                      <!--<li>-->\n                        <!--Avoca??i - pot face o singur?? programare pe zi-->\n                        <!--<ol>-->\n                          <!--<li>Nume ??i prenume deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>CNP deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>Nr. documente  (0 sau 5, c??mp obligatoriu )</li>-->\n                          <!--<li>E-mail deponent ( c??mp obligatoriu )</li>-->\n                        <!--</ol>-->\n                      <!--</li>-->\n                      <!--<li>-->\n                        <!--Mandatari - pot face o singur?? programare pe zi-->\n                        <!--<ol>-->\n                          <!--<li>Nume ??i prenume deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>CNP deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>Nr. documente (0-5) ( c??mp obligatoriu )</li>-->\n                          <!--<li>E-mail deponent ( c??mp obligatoriu )</li>-->\n                        <!--</ol>-->\n                      <!--</li>-->\n                      <!--<li>-->\n                        <!--Titulari (nume propriu)-->\n                        <!--<ol>-->\n                          <!--<li>Nume ??i prenume deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>CNP deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>Nr. documente (0-5) ( c??mp obligatoriu )</li>-->\n                          <!--<li>E-mail deponent ( c??mp obligatoriu )</li>-->\n                        <!--</ol>-->\n                      <!--</li>-->\n                    <!--</ul>-->\n                  <!--</div>-->\n                  <!--<div style=\"margin-top: 5px;\">7.\tSolicitantul nu poate face rezervare ??n calitate de avocat ??i mandatar ??n aceasi zi.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">8.\tSolicitantul completeaz?? toate c??mpurile obligatorii prev??zute ??n aplica??ia de rezervare. Datele personale ale acestuia (numele de familie, prenumele ??i CNP) se completeaz?? ??ntocmai cum rezult?? din actul de identitate, f??r?? prescurt??ri, sau ini??iale. Solicitantul completeaz?? ??n aplica??ia de rezervare o adres?? de e-mail valid??, la care va primi un r??spuns cuprinz??nd data la care este programat s?? depun?? cererea (??n caz contrar v?? rug??m verifica??i ??i folderul Spam).</div>-->\n                  <!--<div style=\"margin-top: 5px;\">9.\tSolicitantul se va prezenta la ghiseu fix cu num??rul de documente stipulat ??n rezervare, nerespectarea acestui aspect duce la anularea rezerv??ri.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">10.\tNeprezentarea la data programat??, neconformitatea datelor ??nscrise ??n rubricile din formularul de rezervare cu datele care rezult?? din actele prezentate (actul de identitate, procura special??, dac?? este cazul), ??i/sau lipsa tuturor actelor necesare duc la anularea rezerv??rii. Rezerv??rile neconforme nu vor fi luate in considerare.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">11.\tNu se fac rezerv??ri pentru zilele nelucr??toare, stabilite sau anun??ate ulterior prin acte normative ca zile ??n care nu se desf????oar?? activitate de lucru cu publicul.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">12.\tNerespectarea oric??rei dispozi??ii referitoare la condi??iile de programare ??n vederea depunerii cererii duce la anularea rezerv??rii.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">13.\tProgramarea este gratuit?? ??i netransmisibil??.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">14.\tPreciz??m c?? v?? pute??i adresa ??i la alte Servicii de stare civil?? unde s-au atribuit competen??e ??n transcrierea certificatelor/extraselor de stare civil?? procurate din str??in??tate pentru cet????enii care nu au avut niciodat?? domiciliul ??n Rom??nia, respectiv : mun.Ia??i, mun.Suceava, mun.Gala??i, ??n conformitate cu prevederile art.41 alin.5 din Legea 213/2013 pentru modificarea ??i completarea Legii 119/1996 cu privire la actele de stare civil??.</div>-->\n                  <!--<div style=\"margin-top: 5px;\"><strong>Depunerea cererilor</strong></div>-->\n                  <!--<div style=\"margin-top: 5px;\">1.\tCererile de transcriere se depun la sediul  Direc??ia Public?? de Eviden???? a Persoanelor ??i Stare Civil?? a Sectorului 1, situat ??n Mun. Bucure??ti, Str. Amzei, Nr. 13, de c??tre persoana care figureaz?? ca deponent ??n rezervarea on-line.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">2.\tTermenul de solu??ionare a cererilor privind transcrierea certificatelor/extraselor de stare civil?? este de 60 de zile de la data ??nregistr??rii cererii, potrivit art. 41 alin. (5??) din Legea 119/1996.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">3.\tFunc??ionarul care prime??te cererea de transcriere ??nm??neaz?? solicitantului o dovad?? care cuprinde num??rul de ??nregistrare, data ??nregistr??rii ??i data la care se va prezenta ??n vederea ridic??rii documentelor tranascrise.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">4.\tProgramul de lucru cu publicul aferent activit????ii de primire a cererilor de transcriere a certificatelor/extraselor de stare civil?? se desf????oar?? ??n zilele lucr??toare de luni, ??n intervalul orar 08:30-15:30, ??i miercuri 8:30-15:30.</div>-->\n\n                  <!--<div style=\"margin-top: 5px;\"><strong>Solu??ionarea cererilor</strong></div>-->\n                  <!--<div style=\"margin-top: 5px;\">1.\tFunc??ionarii publici desemna??i, solu??ioneaz?? cererile privind transcrierea certificatelor /extraselor de stare civil?? ??n conformitate cu prevederile legale ??n materie.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">2.\tEliberarea certificatelor de stare civil?? transcrise se face ??n zilele lucr??toare de mar??i ??n intervalul orar 8:30-18:30 ??i joi 08:30-16:30.</div>-->\n                  <!--<div style.md=\"height:80px\" style.gt-lg=\"height:80px\"></div>-->\n                <!--</div>-->\n              <!--</div>-->\n              <div fxFlex>\n                <div style=\"margin-top:10px\">\n                  <div style=\"text-align: center\"><h3 style=\"color:red\">Nu ??nchideti pagina pentru a v?? p??stra locul ??n coada de a??teptare!!!</h3></div>\n                  <md-form-field class=\"full-width\">\n                    <input mdInput placeholder=\"Num??r tichet primit\" readonly [(ngModel)]=\"myTicket\">\n                  </md-form-field>\n                  <md-form-field class=\"full-width\">\n                    <input mdInput placeholder=\"Primul tichet din coad??\" readonly [(ngModel)]=\"firstTicket\">\n                  </md-form-field>\n                  <div fxLayout=\"row\">\n                    <div fxFlex></div>\n                    <div fxFlex='100px'><md-spinner></md-spinner></div>\n                    <div fxFlex></div>\n                  </div>\n                  <div style=\"height:80px\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </md-tab>\n        <md-tab label=\"3. Adaug?? programare\" [disabled]=\"currentStep !== ACTIVE\" class=\"demo-tab-content\">\n          <div class=\"demo-tab-content\" *ngIf=\"config\">\n            <div fxLayout.lt-md=\"column\" fxLayout.md=\"row\" fxLayout.gt-md=\"row\" fxLayoutGap=\"10px\">\n              <!--<div fxFlex>-->\n                <!--<h3>REGULAMENT REZERVARE ON LINE</h3>-->\n                <!--<div style=\"font-size:0.7em\">-->\n                  <!--<div style=\"margin-top: 5px;\">1.\tRezervarea on-line este disponibil?? pentru persoanele cet????eni rom??ni n??scu??i ??n Republica Moldova ??i Ucraina care au dob??ndit/redob??ndit cet????enia rom??n?? ??i nu au avut niciodat?? domiciliul ??n Rom??nia ??i care ??ndeplinesc condi??iile prev??zute la art. 41 alin. (5??) lit. b) sau lit. c) din Legea 119/1996.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">2.\tRezervarea pentru depunerea cererilor privind transcrierea certificatelor/extraselor de stare civil?? se poate face ??ncep??nd cu data de 15 a fiecarei luni, orele 10:00 pentru luna urm??toare. ( Exemplu: pe data de 15.07.2017 v?? pute??i rezerva pentru luna august)</div>-->\n                  <!--<div style=\"margin-top: 5px;\">3.\tNu se pot face program??ri prin email, fax sau telefonic.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">4.\t??nainte de completarea program??rii, solicitantul se asigur?? c?? ??ndepline??te condi??iile prev??zute de art. 41 alin. (5??) lit. b) sau lit. c) din Legea 119/1996 ??i c?? de??ine toate actele necesare transcrierii prev??zute de lege ??i men??ionate ??n lista documentelor necesare transcrierii certificatelor/extraselor de stare civil??. Documentele se vor prezenta la ghi??eu ??n original ??i copii Xerox.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">5.\tPrin continuarea procedurii de rezervare online solicitantul este de acord cu prelucrarea datelor personale, ??n conformitate cu prevederile Legii nr. 677/2001 pentru protec??ia persoanelor cu privire la prelucrarea datelor cu caracter personal ??i libera circula??ie a acestor date.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">6.\tRezerv??rile sunt ??mp??r??ite ??n 3 tipuri de formular:-->\n                    <!--<ul>-->\n                      <!--<li>-->\n                        <!--Avoca??i - pot face o singur?? programare pe zi-->\n                        <!--<ol>-->\n                          <!--<li>Nume ??i prenume deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>CNP deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>Nr. documente  (0 sau 5, c??mp obligatoriu )</li>-->\n                          <!--<li>E-mail deponent ( c??mp obligatoriu )</li>-->\n                        <!--</ol>-->\n                      <!--</li>-->\n                      <!--<li>-->\n                        <!--Mandatari - pot face o singur?? programare pe zi-->\n                        <!--<ol>-->\n                          <!--<li>Nume ??i prenume deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>CNP deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>Nr. documente (0-5) ( c??mp obligatoriu )</li>-->\n                          <!--<li>E-mail deponent ( c??mp obligatoriu )</li>-->\n                        <!--</ol>-->\n                      <!--</li>-->\n                      <!--<li>-->\n                        <!--Titulari (nume propriu)-->\n                        <!--<ol>-->\n                          <!--<li>Nume ??i prenume deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>CNP deponent ( c??mp obligatoriu )</li>-->\n                          <!--<li>Nr. documente (0-5) ( c??mp obligatoriu )</li>-->\n                          <!--<li>E-mail deponent ( c??mp obligatoriu )</li>-->\n                        <!--</ol>-->\n                      <!--</li>-->\n                    <!--</ul>-->\n                  <!--</div>-->\n                  <!--<div style=\"margin-top: 5px;\">7.\tSolicitantul nu poate face rezervare ??n calitate de avocat ??i mandatar ??n aceasi zi.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">8.\tSolicitantul completeaz?? toate c??mpurile obligatorii prev??zute ??n aplica??ia de rezervare. Datele personale ale acestuia (numele de familie, prenumele ??i CNP) se completeaz?? ??ntocmai cum rezult?? din actul de identitate, f??r?? prescurt??ri, sau ini??iale. Solicitantul completeaz?? ??n aplica??ia de rezervare o adres?? de e-mail valid??, la care va primi un r??spuns cuprinz??nd data la care este programat s?? depun?? cererea (??n caz contrar v?? rug??m verifica??i ??i folderul Spam).</div>-->\n                  <!--<div style=\"margin-top: 5px;\">9.\tSolicitantul se va prezenta la ghiseu fix cu num??rul de documente stipulat ??n rezervare, nerespectarea acestui aspect duce la anularea rezerv??ri.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">10.\tNeprezentarea la data programat??, neconformitatea datelor ??nscrise ??n rubricile din formularul de rezervare cu datele care rezult?? din actele prezentate (actul de identitate, procura special??, dac?? este cazul), ??i/sau lipsa tuturor actelor necesare duc la anularea rezerv??rii. Rezerv??rile neconforme nu vor fi luate in considerare.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">11.\tNu se fac rezerv??ri pentru zilele nelucr??toare, stabilite sau anun??ate ulterior prin acte normative ca zile ??n care nu se desf????oar?? activitate de lucru cu publicul.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">12.\tNerespectarea oric??rei dispozi??ii referitoare la condi??iile de programare ??n vederea depunerii cererii duce la anularea rezerv??rii.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">13.\tProgramarea este gratuit?? ??i netransmisibil??.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">14.\tPreciz??m c?? v?? pute??i adresa ??i la alte Servicii de stare civil?? unde s-au atribuit competen??e ??n transcrierea certificatelor/extraselor de stare civil?? procurate din str??in??tate pentru cet????enii care nu au avut niciodat?? domiciliul ??n Rom??nia, respectiv : mun.Ia??i, mun.Suceava, mun.Gala??i, ??n conformitate cu prevederile art.41 alin.5 din Legea 213/2013 pentru modificarea ??i completarea Legii 119/1996 cu privire la actele de stare civil??.</div>-->\n                  <!--<div style=\"margin-top: 5px;\"><strong>Depunerea cererilor</strong></div>-->\n                  <!--<div style=\"margin-top: 5px;\">1.\tCererile de transcriere se depun la sediul  Direc??ia Public?? de Eviden???? a Persoanelor ??i Stare Civil?? a Sectorului 1, situat ??n Mun. Bucure??ti, Str. Amzei, Nr. 13, de c??tre persoana care figureaz?? ca deponent ??n rezervarea on-line.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">2.\tTermenul de solu??ionare a cererilor privind transcrierea certificatelor/extraselor de stare civil?? este de 60 de zile de la data ??nregistr??rii cererii, potrivit art. 41 alin. (5??) din Legea 119/1996.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">3.\tFunc??ionarul care prime??te cererea de transcriere ??nm??neaz?? solicitantului o dovad?? care cuprinde num??rul de ??nregistrare, data ??nregistr??rii ??i data la care se va prezenta ??n vederea ridic??rii documentelor tranascrise.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">4.\tProgramul de lucru cu publicul aferent activit????ii de primire a cererilor de transcriere a certificatelor/extraselor de stare civil?? se desf????oar?? ??n zilele lucr??toare de luni, ??n intervalul orar 08:30-15:30, ??i miercuri 8:30-15:30.</div>-->\n\n                  <!--<div style=\"margin-top: 5px;\"><strong>Solu??ionarea cererilor</strong></div>-->\n                  <!--<div style=\"margin-top: 5px;\">1.\tFunc??ionarii publici desemna??i, solu??ioneaz?? cererile privind transcrierea certificatelor /extraselor de stare civil?? ??n conformitate cu prevederile legale ??n materie.</div>-->\n                  <!--<div style=\"margin-top: 5px;\">2.\tEliberarea certificatelor de stare civil?? transcrise se face ??n zilele lucr??toare de mar??i ??n intervalul orar 8:30-18:30 ??i joi 08:30-16:30.</div>-->\n                  <!--<div style.md=\"height:80px\" style.gt-lg=\"height:80px\"></div>-->\n                <!--</div>-->\n              <!--</div>-->\n              <div fxFlex *ngIf=\"date_programare\">\n                <div *ngIf=\"error_message\" style=\"color:red; margin-top:10px\">\n                  <h3>{{ error_message }}</h3>\n                </div>\n                <div *ngIf=\"date_programare.length === 0\">\n                  <h3>S-au finalizat toate program??rile pe luna aceasta</h3>\n                </div>\n                <form [formGroup]=\"step3Form\"  (ngSubmit)=\"submitFormStep3(step3Form.value)\" style=\"margin-top:10px\" *ngIf=\"date_programare.length > 0\">\n                  <h3>Date disponibile:</h3>\n                  <!--V?? rug??m s?? alege??i o zi pentru program??ri ??i apoi num??rul de program??ri dorite din ziua respectiv??. Pentru o nou?? rezervare ??n alt?? zi accesa??i din nou platforma-->\n                  V?? rug??m s?? alege??i o zi pentru program??ri.\n                  <div style=\"margin-top:10px\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n                    <div fxFlex style=\"margin-bottom:10px\">\n                      <md-select placeholder=\"Zi programare\" class=\"full-width\" formControlName=\"zi_programare\" [(value)]=\"selectedZi\" [disabled]=\"!form3enabled\">\n                        <md-option *ngFor=\"let entry of date_programare\" [value]=\"entry\">{{ entry }}</md-option>\n                      </md-select>\n                    </div>\n                  </div>\n                  <div fxLayout=\"row\">\n                    <div fxFlex=\"200px\" fxLayoutAlign=\"start center\"><button md-raised-button color=\"primary\" [disabled]=\"!step3Form.valid || !form3enabled\">Programeaz??</button></div>\n                    <div fxFlex fxLayoutAlign=\"end center\">{{ mins }} : {{ secs }}</div>\n                  </div>\n                </form>\n                <div *ngIf=\"!form3enabled\" fxLayout=\"row\">\n                  <div fxFlex></div>\n                  <div fxFlex='100px'><md-spinner></md-spinner></div>\n                  <div fxFlex></div>\n                </div>\n                <div style=\"height:80px\"></div>\n              </div>\n            </div>\n          </div>\n        </md-tab>\n        <md-tab label=\"4. Confirmare programare\" [disabled]=\"currentStep !== CONFIRMED\" class=\"demo-tab-content\">\n          <div class=\"demo-tab-content\">\n            <h3>V?? mul??umim</h3>\n            Programarile solicitate au fost inregistrate. In scurt timp veti primi emailuri de confirmare cu care trebuie s?? v?? prezenta??i ??n ziua program??rilor.\n          </div>\n        </md-tab>\n    </md-tab-group>\n</div>\n<div *ngIf=\"channelStatus === 0\" fxLayoutAlign=\"center center\" class=\"full-height\">\n  <div><md-spinner></md-spinner></div>\n</div>\n<div *ngIf=\"channelStatus === 2\" style=\"color: red\" class=\"full-height\" fxLayoutAlign=\"center center\">\n  <div style=\"text-align: center\">\n    <md-icon>hourglass_empty</md-icon><br/>\n    <h3>{{ fatal_error_message }}</h3><br/>\n    <button md-raised-button color=\"primary\" (click)=\"refresh()\">Refresh</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/formular/formular.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo-tab-group {\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/formular/formular.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_version__ = __webpack_require__("../../../../../src/app/app.version.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FormularComponent = (function () {
    function FormularComponent(formBuilder, snackBar, cdRef, logger) {
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.cdRef = cdRef;
        this.logger = logger;
        this.channelStatus = 0;
        this.currentStep = 0;
        this._selectedZi = null;
        this.closed = false;
        this.loadedTickets = false;
        this.CONNECTED = 0;
        this.QUEUED = 1;
        this.ACTIVE = 2;
        this.CONFIRMED = 3;
        this.FINISHED = 4;
        this.EXPIRED = 5;
        this.MAX_QUOTA = 6;
        this.MAX_COUNT = 7;
        this.ERROR = 8;
        this.CLOSED = 9;
        this.error_message = '';
        this.fatal_error_message = '';
        this.date_programare = [];
        this.form3enabled = true;
        this.siteKey = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].siteKey;
        this.captchaResponse = '';
        this.myTicket = 0;
        this.firstTicket = 0;
        this.timeout_count = 5 * 60;
        this.mins = '05';
        this.secs = '00';
        this.formBuilder = formBuilder;
        this.step1Form = formBuilder.group({
            'nume': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'cnp': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email],
            'accept': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.step2Form = formBuilder.group({
            'myTicket': [''],
            'firstTicket': [''],
        });
        this.step3Form = this.formBuilder.group({});
        this.snackBar = snackBar;
    }
    Object.defineProperty(FormularComponent.prototype, "selectedZi", {
        get: function () {
            return this._selectedZi;
        },
        set: function (value) {
            this._selectedZi = value;
        },
        enumerable: true,
        configurable: true
    });
    FormularComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.log("channelStatus: " + this.channelStatus);
        var ws_scheme = window.location.protocol === 'https:' ? 'wss' : 'ws';
        var ws_url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].base_url.split('://')[1];
        this.chatSocket = new WebSocket(ws_scheme + '://' + ws_url + 'core/');
        this.timer = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].timer(0, 5000);
        this.timer.subscribe(function (t) {
            if (_this.currentStep === _this.QUEUED || _this.currentStep === _this.ACTIVE) {
                _this.chatSocket.send(JSON.stringify({ 'status': 0 }));
            }
        });
        this.timeout_timer = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].timer(0, 1000);
        this.timeout_timer.subscribe(function (t) {
            if (_this.currentStep === _this.ACTIVE && _this.timeout_count > 0) {
                _this.timeout_count--;
                var ms = (_this.timeout_count - _this.timeout_count % 60) / 60;
                var ss = _this.timeout_count % 60;
                if (ms < 10) {
                    _this.mins = '0' + ms;
                }
                else {
                    _this.mins = '' + ms;
                }
                if (ss < 10) {
                    _this.secs = '0' + ss;
                }
                else {
                    _this.secs = '' + ss;
                }
            }
        });
        var self = this;
        this.chatSocket.onmessage = function (message) {
            self.logger.log('Message received');
            self.logger.log(message);
            var data = JSON.parse(message.data);
            if (data.hasOwnProperty('status')) {
                if (data['status'] === 'error') {
                    if (data['step'] === self.CLOSED) {
                        self.closed = true;
                        self.fatal_error_message = data['message'];
                        self.channelStatus = 2;
                        self.chatSocket.close();
                    }
                    else {
                        self.snackBar.open(data['message'], '??nchide', {
                            duration: 0,
                            extraClasses: ['errormsg',],
                            verticalPosition: 'top'
                        });
                    }
                }
                else {
                    self.channelStatus = 1;
                    if (data['step'] === self.CLOSED) {
                        self.closed = true;
                        self.channelStatus = 2;
                        self.chatSocket.close();
                    }
                    else if (data['step'] === self.ERROR) {
                        self.fatal_error_message = data['error_message'];
                        self.channelStatus = 2;
                        self.chatSocket.close();
                        self.snackBar.open(data['error_message'], '??nchide', {
                            duration: 0,
                            extraClasses: ['errormsg',],
                            verticalPosition: 'top'
                        });
                    }
                    else if (self.currentStep === self.CONNECTED) {
                        if (data.hasOwnProperty('config')) {
                            self.config = data['config'];
                            self.logger.log("config is " + self.config);
                        }
                        else if (data['step'] === self.QUEUED) {
                            self.currentStep = self.QUEUED;
                            self.firstTicket = data['first'];
                            self.myTicket = data['ticket'];
                            self.loadedTickets = true;
                        }
                    }
                    else if (self.currentStep === self.QUEUED) {
                        if (data.hasOwnProperty('step')) {
                            if (data['step'] === self.ACTIVE) {
                                self.updateForm3(data);
                                self.key = data['key'];
                                self.currentStep = self.ACTIVE;
                            }
                        }
                        else if (data.hasOwnProperty('first')) {
                            self.firstTicket = data['first'];
                        }
                    }
                    else if (self.currentStep === self.ACTIVE) {
                        if (data.hasOwnProperty('step')) {
                            if (data['step'] === self.ACTIVE) {
                                self.updateForm3(data);
                            }
                        }
                        if (data.hasOwnProperty('step')) {
                            if (data['step'] === self.CONFIRMED) {
                                self.currentStep = self.CONFIRMED;
                                self.channelStatus = 3;
                                self.chatSocket.close();
                            }
                        }
                    }
                }
            }
        };
        this.chatSocket.onclose = function (e) {
            self.logger.log('Disconnected!');
            if (self.channelStatus === 1) {
                self.fatal_error_message = 'Sesiunea dvs a expirat. V?? rug??m s?? da??i refresh la pagin??.';
                self.channelStatus = 2;
                self.snackBar.open('Sesiunea dvs a expirat. V?? rug??m s?? da??i refresh la pagin??.', '', {
                    duration: 5000
                });
            }
            self.logger.log("channelStatus: " + self.channelStatus);
        };
    };
    FormularComponent.prototype.updateForm3 = function (data) {
        if (this.version !== data['version']) {
            var formConfig = {};
            formConfig['zi_programare'] = ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required];
            var dp = [];
            for (var entry in data['date_disponibile']) {
                if (data['date_disponibile'][entry] > 0) {
                    dp.push(entry);
                }
            }
            if (dp.length > 0) {
                this.date_programare = dp.sort(function (a, b) { return a.localeCompare(b); });
            }
            else {
                this.date_programare = [];
            }
            this.step3Form = this.formBuilder.group(formConfig);
            this.version = data['version'];
            console.log('bubu should enable ', this.date_programare);
            // this.step3Form.enable();
            this.form3enabled = true;
        }
    };
    FormularComponent.prototype.submitFormStep1 = function () {
        if (!this.step1Form.value['accept']) {
            this.error_message = 'V?? rug??m s?? confirma??i c?? a??i citit ??i sunte??i de acord cu regulamentul.';
            return;
        }
        if (!this.captchaResponse) {
            this.error_message = 'V?? rug??m s?? completa??i validarea ??mpotriva robo??ilor.';
            return;
        }
        this.error_message = '';
        var form = {
            'nume': this.step1Form.value['nume'],
            'cnp': this.step1Form.value['cnp'].replace(/[^0-9a-zA-Z]/g, ''),
            'email': this.step1Form.value['email'],
            'captcha': this.captchaResponse
        };
        var md5 = new __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__["Md5"]();
        var str = "" + __WEBPACK_IMPORTED_MODULE_7__app_version__["b" /* secretKey */] + form['nume'] + form['cnp'] + form['email'] + __WEBPACK_IMPORTED_MODULE_7__app_version__["a" /* appVersion */];
        md5.appendStr(str);
        form['session'] = md5.end();
        this.step1Form.disable();
        this.logger.log(form);
        this.chatSocket.send(JSON.stringify(form));
    };
    FormularComponent.prototype.submitFormStep3 = function () {
        if (!this._selectedZi) {
            this.error_message = 'Nu a??i selectat o dat??';
            return;
        }
        this.error_message = '';
        var result = {};
        result[this._selectedZi] = 1;
        var form = { 'code': this.key, 'programari': result };
        var str = "" + __WEBPACK_IMPORTED_MODULE_7__app_version__["b" /* secretKey */] + this.key + __WEBPACK_IMPORTED_MODULE_7__app_version__["a" /* appVersion */];
        var md5 = new __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__["Md5"]();
        md5.appendStr(str);
        form['session'] = md5.end();
        this.logger.log(form);
        // this.step3Form.disable();
        this.form3enabled = false;
        this.chatSocket.send(JSON.stringify(form));
    };
    FormularComponent.prototype.refresh = function () {
        window.location.reload();
    };
    FormularComponent.prototype.resolved = function (captchaResponse) {
        this.captchaResponse = captchaResponse;
    };
    return FormularComponent;
}());
FormularComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-formular',
        template: __webpack_require__("../../../../../src/app/components/formular/formular.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/formular/formular.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_logger_service__["a" /* LoggerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_logger_service__["a" /* LoggerService */]) === "function" && _d || Object])
], FormularComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=formular.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (logMsg) {
        if (!__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            console.log(logMsg);
        }
    };
    return LoggerService;
}());
LoggerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LoggerService);

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    // base_url: 'http://127.0.0.1:8000/'
    base_url: 'http://programari.starecivila1.ro/api/',
    siteKey: '6Lc6s1kcAAAAAJFZF7bEztSBUEDeBU_0jl4qUtWA'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map