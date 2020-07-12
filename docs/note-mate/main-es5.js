function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/main-layout/main-layout.component */
    "./src/app/pages/main-layout/main-layout.component.ts");
    /* harmony import */


    var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/notes-list/notes-list.component */
    "./src/app/pages/notes-list/notes-list.component.ts");
    /* harmony import */


    var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/note-details/note-details.component */
    "./src/app/pages/note-details/note-details.component.ts");

    var routes = [{
      path: '',
      component: _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"],
      children: [{
        path: '',
        component: _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__["NotesListComponent"]
      }, {
        path: 'new',
        component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_4__["NoteDetailsComponent"]
      }, {
        path: ':id',
        component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_4__["NoteDetailsComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'note-mate';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/main-layout/main-layout.component */
    "./src/app/pages/main-layout/main-layout.component.ts");
    /* harmony import */


    var _pages_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/top-bar/top-bar.component */
    "./src/app/pages/top-bar/top-bar.component.ts");
    /* harmony import */


    var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/notes-list/notes-list.component */
    "./src/app/pages/notes-list/notes-list.component.ts");
    /* harmony import */


    var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./note-card/note-card.component */
    "./src/app/note-card/note-card.component.ts");
    /* harmony import */


    var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/note-details/note-details.component */
    "./src/app/pages/note-details/note-details.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"], _pages_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__["TopBarComponent"], _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_7__["NotesListComponent"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_8__["NoteCardComponent"], _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_9__["NoteDetailsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"], _pages_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__["TopBarComponent"], _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_7__["NotesListComponent"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_8__["NoteCardComponent"], _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_9__["NoteDetailsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/note-card/note-card.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/note-card/note-card.component.ts ***!
    \**************************************************/

  /*! exports provided: NoteCardComponent */

  /***/
  function srcAppNoteCardNoteCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoteCardComponent", function () {
      return NoteCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/note.service */
    "./src/app/shared/note.service.ts");

    var NoteCardComponent =
    /*#__PURE__*/
    function () {
      function NoteCardComponent(noteService) {
        _classCallCheck(this, NoteCardComponent);

        this.noteService = noteService;
      }

      _createClass(NoteCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "delete",
        value: function _delete() {
          this.noteService.deleteOne(this.noteId);
        }
      }]);

      return NoteCardComponent;
    }();

    NoteCardComponent.ɵfac = function NoteCardComponent_Factory(t) {
      return new (t || NoteCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]));
    };

    NoteCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NoteCardComponent,
      selectors: [["app-note-card"]],
      inputs: {
        title: "title",
        body: "body",
        noteId: "noteId"
      },
      decls: 10,
      vars: 2,
      consts: [[1, "note-card-container"], [1, "note-card-content"], [1, "note-card-title"], [1, "note-card-body"], [1, "fade-out-truncation"], [1, "delete-button", 3, "click"], [1, "fa", "fa-times"]],
      template: function NoteCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteCardComponent_Template_div_click_8_listener() {
            return ctx["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.body);
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n.note-card-container[_ngcontent-%COMP%] {\n  background: #eeeeee;\n  border-radius: 5px;\n  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.068);\n  padding: 15px;\n  margin-bottom: 5px;\n  position: relative;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 0.8rem;\n  max-height: 80px;\n  overflow: hidden;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%]   .fade-out-truncation[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  height: 50%;\n  width: 100%;\n  background: linear-gradient(to top, #eeeeee 0%, rgba(238, 238, 238, 0.2) 50%, rgba(238, 238, 238, 0) 100%);\n  pointer-events: none;\n}\n.note-card-container[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.068);\n}\n.note-card-container[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]:hover {\n  color: #FF7582;\n  cursor: pointer;\n}\n.note-card-container[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]:active {\n  color: #ff4254;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS1jYXJkL0Q6XFxQcm9qZWN0c1xcTm90ZXMgQXBwXFxVSVxcbm90ZS1tYXRlL3NyY1xcbWFpbi5zY3NzIiwic3JjL2FwcC9ub3RlLWNhcmQvRDpcXFByb2plY3RzXFxOb3RlcyBBcHBcXFVJXFxub3RlLW1hdGUvc3JjXFxhcHBcXG5vdGUtY2FyZFxcbm90ZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ub3RlLWNhcmQvbm90ZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHFFQUFBO0FDQ1I7RUFDSSxtQkRLSTtFQ0pKLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ1E7RUFDSSxnQkFBQTtBQ0NaO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NaO0FEQVk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBHQUFBO0VBQ0Esb0JBQUE7QUNFaEI7QURFSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7QUNBUjtBRENRO0VBQ0ksY0QvQkw7RUNnQ0ssZUFBQTtBQ0NaO0FEQ1E7RUFDSSxjQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9ub3RlLWNhcmQvbm90ZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMCcpO1xyXG4vLyBTZXQgeW91ciBicmFuZCBjb2xvcnNcclxuJHB1cnBsZTogIzM1NUM3RDtcclxuJHBpbms6ICNGRjc1ODI7XHJcbiRicm93bjogIzcyNUE3QTtcclxuJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xyXG4kYmVpZ2UtbGlnaHRlcjogI0VGRjBFQjtcclxuJHdoaXRlOiAjZWVlZWVlO1xyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIixcclxuc2Fucy1zZXJpZjtcclxuJGdyZXktZGFyazogJGJyb3duO1xyXG4kZ3JleS1saWdodDogJGJlaWdlLWxpZ2h0O1xyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJHNlY29uZGFyeTogJGJyb3duO1xyXG4kbGluazogJHBpbms7XHJcbiR3aWRlc2NyZWVuLWVuYWJsZWQ6IGZhbHNlO1xyXG4kZnVsbGhkLWVuYWJsZWQ6IGZhbHNlO1xyXG4vLyBVcGRhdGUgc29tZSBvZiBCdWxtYSdzIGNvbXBvbmVudCB2YXJpYWJsZXNcclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogJGJlaWdlLWxpZ2h0ZXI7XHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuQG1peGluIHRyYW5zaXRpb24tc21vb3RoKCkge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbn0iLCJAaW1wb3J0ICcuLi8uLi9tYWluLnNjc3MnO1xyXG4ubm90ZS1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggMnB4IHJnYmEoYmxhY2ssIDAuMDY4KTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubm90ZS1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIC5ub3RlLWNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90ZS1jYXJkLWJvZHkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAuZmFkZS1vdXQtdHJ1bmNhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJHdoaXRlIDAlLCByZ2JhKCR3aGl0ZSwgMC4yKSA1MCUsIHJnYmEoJHdoaXRlLCAwKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggMnB4IHJnYmEoYmxhY2ssIDAuMDY4KTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkY29sb3I6ICRwaW5rLCAkYW1vdW50OiAxMCUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDBcIik7XG4ubm90ZS1jYXJkLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubm90ZS1jYXJkLWNvbnRhaW5lciAubm90ZS1jYXJkLWNvbnRlbnQgLm5vdGUtY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4ubm90ZS1jYXJkLWNvbnRhaW5lciAubm90ZS1jYXJkLWNvbnRlbnQgLm5vdGUtY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyIC5ub3RlLWNhcmQtY29udGVudCAubm90ZS1jYXJkLWJvZHkgLmZhZGUtb3V0LXRydW5jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZWVlZWVlIDAlLCByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuMikgNTAlLCByZ2JhKDIzOCwgMjM4LCAyMzgsIDApIDEwMCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyIC5kZWxldGUtYnV0dG9uIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNjgpO1xufVxuLm5vdGUtY2FyZC1jb250YWluZXIgLmRlbGV0ZS1idXR0b246aG92ZXIge1xuICBjb2xvcjogI0ZGNzU4MjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5vdGUtY2FyZC1jb250YWluZXIgLmRlbGV0ZS1idXR0b246YWN0aXZlIHtcbiAgY29sb3I6ICNmZjQyNTQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-note-card',
          templateUrl: './note-card.component.html',
          styleUrls: ['./note-card.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        noteId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/main-layout/main-layout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/main-layout/main-layout.component.ts ***!
    \************************************************************/

  /*! exports provided: MainLayoutComponent */

  /***/
  function srcAppPagesMainLayoutMainLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
      return MainLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../top-bar/top-bar.component */
    "./src/app/pages/top-bar/top-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainLayoutComponent =
    /*#__PURE__*/
    function () {
      function MainLayoutComponent() {
        _classCallCheck(this, MainLayoutComponent);
      }

      _createClass(MainLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainLayoutComponent;
    }();

    MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
      return new (t || MainLayoutComponent)();
    };

    MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainLayoutComponent,
      selectors: [["app-main-layout"]],
      decls: 5,
      vars: 0,
      consts: [[1, "layout-box"], [1, "topbar"], [1, "page-content"]],
      template: function MainLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-top-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".layout-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.layout-box[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 68px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1sYXlvdXQvRDpcXFByb2plY3RzXFxOb3RlcyBBcHBcXFVJXFxub3RlLW1hdGUvc3JjXFxhcHBcXHBhZ2VzXFxtYWluLWxheW91dFxcbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC50b3BiYXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjhweDtcclxuICAgIH1cclxuICAgIC5wYWdlLWNvbnRlbnQge31cclxufSIsIi5sYXlvdXQtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmxheW91dC1ib3ggLnRvcGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY4cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-layout',
          templateUrl: './main-layout.component.html',
          styleUrls: ['./main-layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/note-details/note-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/note-details/note-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: NoteDetailsComponent */

  /***/
  function srcAppPagesNoteDetailsNoteDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoteDetailsComponent", function () {
      return NoteDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_note_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/note.model */
    "./src/app/shared/note.model.ts");
    /* harmony import */


    var src_app_shared_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/note.service */
    "./src/app/shared/note.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        error: a0
      };
    };

    var NoteDetailsComponent =
    /*#__PURE__*/
    function () {
      function NoteDetailsComponent(noteService, router, route) {
        _classCallCheck(this, NoteDetailsComponent);

        this.noteService = noteService;
        this.router = router;
        this.route = route;
      }

      _createClass(NoteDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (params) {
            if (params.id) {
              _this.note = _this.noteService.getByIndex(params.id);
              _this.noteId = params.id;
              _this["new"] = false;
            } else {
              _this["new"] = true;
              _this.note = new src_app_shared_note_model__WEBPACK_IMPORTED_MODULE_1__["Note"]();
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(f) {
          if (f.valid) {
            if (this["new"]) {
              this.noteService.add(f.value.title, f.value.body);
            } else {
              this.noteService.updateByIndex(this.noteId, f.value.title, f.value.body);
            }

            this.router.navigateByUrl('');
          }
        }
      }]);

      return NoteDetailsComponent;
    }();

    NoteDetailsComponent.ɵfac = function NoteDetailsComponent_Factory(t) {
      return new (t || NoteDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    NoteDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NoteDetailsComponent,
      selectors: [["app-note-details"]],
      decls: 20,
      vars: 5,
      consts: [[1, "note-details-container"], [3, "ngSubmit"], ["noteDetailsForm", "ngForm"], [1, "field"], [1, "label"], [1, "control"], ["type", "text", "name", "title", "required", "", "placeholder", "Note Title", 1, "input", 3, "ngModel", "ngClass"], ["name", "body", "placeholder", "Note Message", 1, "textarea", 3, "ngModel"], [1, "field", "is-grouped", "is-grouped-right"], ["routerLink", "", 1, "button", "is-link", "is-light"], ["type", "submit", 1, "button", "is-primary"]],
      template: function NoteDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NoteDetailsComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.onSubmit(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, _r3.submitted && _r3.controls.title.invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note.body);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n.note-details-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 10px auto;\n  max-width: 500px;\n}\n.error[_ngcontent-%COMP%] {\n  border: 2px solid #FF7582;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90ZS1kZXRhaWxzL0Q6XFxQcm9qZWN0c1xcTm90ZXMgQXBwXFxVSVxcbm90ZS1tYXRlL3NyY1xcbWFpbi5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3RlLWRldGFpbHMvRDpcXFByb2plY3RzXFxOb3RlcyBBcHBcXFVJXFxub3RlLW1hdGUvc3JjXFxhcHBcXHBhZ2VzXFxub3RlLWRldGFpbHNcXG5vdGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90ZS1kZXRhaWxzL25vdGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxxRUFBQTtBQ0NSO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDSSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90ZS1kZXRhaWxzL25vdGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDAnKTtcclxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXHJcbiRwdXJwbGU6ICMzNTVDN0Q7XHJcbiRwaW5rOiAjRkY3NTgyO1xyXG4kYnJvd246ICM3MjVBN0E7XHJcbiRiZWlnZS1saWdodDogI0QwRDFDRDtcclxuJGJlaWdlLWxpZ2h0ZXI6ICNFRkYwRUI7XHJcbiR3aGl0ZTogI2VlZWVlZTtcclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsXHJcbnNhbnMtc2VyaWY7XHJcbiRncmV5LWRhcms6ICRicm93bjtcclxuJGdyZXktbGlnaHQ6ICRiZWlnZS1saWdodDtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRzZWNvbmRhcnk6ICRicm93bjtcclxuJGxpbms6ICRwaW5rO1xyXG4kd2lkZXNjcmVlbi1lbmFibGVkOiBmYWxzZTtcclxuJGZ1bGxoZC1lbmFibGVkOiBmYWxzZTtcclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICRiZWlnZS1saWdodGVyO1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbkBtaXhpbiB0cmFuc2l0aW9uLXNtb290aCgpIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG59IiwiQGltcG9ydCAnLi4vLi4vLi4vbWFpbi5zY3NzJztcclxuLm5vdGUtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRwaW5rO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDBcIik7XG4ubm90ZS1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4uZXJyb3Ige1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkY3NTgyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-note-details',
          templateUrl: './note-details.component.html',
          styleUrls: ['./note-details.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/notes-list/notes-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/notes-list/notes-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: NotesListComponent */

  /***/
  function srcAppPagesNotesListNotesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesListComponent", function () {
      return NotesListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/note.service */
    "./src/app/shared/note.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../note-card/note-card.component */
    "./src/app/note-card/note-card.component.ts");

    function NotesListComponent_app_note_card_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-note-card", 11);
      }

      if (rf & 2) {
        var note_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", i_r2)("noteId", i_r2)("title", note_r1.title)("body", note_r1.body);
      }
    }

    var _c0 = function _c0() {
      return ["/new"];
    };

    var NotesListComponent =
    /*#__PURE__*/
    function () {
      function NotesListComponent(noteService) {
        _classCallCheck(this, NotesListComponent);

        this.noteService = noteService;
      }

      _createClass(NotesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.notes = this.noteService.getAll();
        }
      }]);

      return NotesListComponent;
    }();

    NotesListComponent.ɵfac = function NotesListComponent_Factory(t) {
      return new (t || NotesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]));
    };

    NotesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotesListComponent,
      selectors: [["app-notes-list"]],
      decls: 12,
      vars: 4,
      consts: [[1, "main-container"], [1, "search-bar-container"], [1, "field"], [1, "control", "has-icons-left"], ["type", "text", "placeholder", "Search notes", 1, "input", 3, "ngModel", "ngModelChange"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-search"], [1, "notes-list"], [3, "routerLink", "noteId", "title", "body", 4, "ngFor", "ngForOf"], [1, "add-note-button-container"], [1, "button", "is-success", 3, "routerLink"], [3, "routerLink", "noteId", "title", "body"]],
      template: function NotesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotesListComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotesListComponent_app_note_card_8_Template, 1, 4, "app-note-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+ Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_5__["NoteCardComponent"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n.main-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: 10px auto;\n  max-width: 500px;\n}\n.main-container[_ngcontent-%COMP%]   .search-bar-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.068);\n}\n.main-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  margin-top: 20px;\n  margin-bottom: 70px;\n  padding: 10px;\n  height: 70vh;\n}\n.main-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   app-note-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.main-container[_ngcontent-%COMP%]   .add-note-button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px;\n  width: 100%;\n}\n.main-container[_ngcontent-%COMP%]   .add-note-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #355C7D;\n  height: 7vh;\n  width: 100%;\n  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.068);\n  transition: all 0.2s ease-out;\n}\n.main-container[_ngcontent-%COMP%]   .add-note-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #725A7A;\n  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.2);\n}\n.main-container[_ngcontent-%COMP%]   .add-note-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background: #FF7582;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90ZXMtbGlzdC9EOlxcUHJvamVjdHNcXE5vdGVzIEFwcFxcVUlcXG5vdGUtbWF0ZS9zcmNcXG1haW4uc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90ZXMtbGlzdC9EOlxcUHJvamVjdHNcXE5vdGVzIEFwcFxcVUlcXG5vdGUtbWF0ZS9zcmNcXGFwcFxccGFnZXNcXG5vdGVzLWxpc3RcXG5vdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGVzLWxpc3Qvbm90ZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxxRUFBQTtBQ0NSO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLGlEQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRVI7QURBWTtFQUNJLGVBQUE7QUNFaEI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNBUjtBRENRO0VBQ0ksbUJEekJIO0VDMEJHLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7RURMUiw2QkFBQTtBRU9KO0FEQVk7RUFDSSxtQkQ3QlI7RUM4QlEsK0NBQUE7QUNFaEI7QURBWTtFQUNJLG1CRGxDVDtBRW9DUCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGVzLWxpc3Qvbm90ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDAnKTtcclxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXHJcbiRwdXJwbGU6ICMzNTVDN0Q7XHJcbiRwaW5rOiAjRkY3NTgyO1xyXG4kYnJvd246ICM3MjVBN0E7XHJcbiRiZWlnZS1saWdodDogI0QwRDFDRDtcclxuJGJlaWdlLWxpZ2h0ZXI6ICNFRkYwRUI7XHJcbiR3aGl0ZTogI2VlZWVlZTtcclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsXHJcbnNhbnMtc2VyaWY7XHJcbiRncmV5LWRhcms6ICRicm93bjtcclxuJGdyZXktbGlnaHQ6ICRiZWlnZS1saWdodDtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRzZWNvbmRhcnk6ICRicm93bjtcclxuJGxpbms6ICRwaW5rO1xyXG4kd2lkZXNjcmVlbi1lbmFibGVkOiBmYWxzZTtcclxuJGZ1bGxoZC1lbmFibGVkOiBmYWxzZTtcclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICRiZWlnZS1saWdodGVyO1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbkBtaXhpbiB0cmFuc2l0aW9uLXNtb290aCgpIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG59IiwiQGltcG9ydCAnLi4vLi4vLi4vbWFpbi5zY3NzJztcclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgLnNlYXJjaC1iYXItY29udGFpbmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggMnB4IHJnYmEoYmxhY2ssIDAuMDY4KTtcclxuICAgIH1cclxuICAgIC5ub3Rlcy1saXN0IHtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICAgIGFwcC1ub3RlLWNhcmQge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZGQtbm90ZS1idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgIGhlaWdodDogN3ZoO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IDJweCByZ2JhKGJsYWNrLCAwLjA2OCk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tc21vb3RoO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggMnB4IHJnYmEoYmxhY2ssIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHBpbms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcbi5tYWluLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG4ubWFpbi1jb250YWluZXIgLnNlYXJjaC1iYXItY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcbn1cbi5tYWluLWNvbnRhaW5lciAubm90ZXMtbGlzdCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuLm1haW4tY29udGFpbmVyIC5ub3Rlcy1saXN0IGFwcC1ub3RlLWNhcmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbi1jb250YWluZXIgLmFkZC1ub3RlLWJ1dHRvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluLWNvbnRhaW5lciAuYWRkLW5vdGUtYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMzU1QzdEO1xuICBoZWlnaHQ6IDd2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTVweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2OCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLm1haW4tY29udGFpbmVyIC5hZGQtbm90ZS1idXR0b24tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3MjVBN0E7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLm1haW4tY29udGFpbmVyIC5hZGQtbm90ZS1idXR0b24tY29udGFpbmVyIGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjRkY3NTgyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notes-list',
          templateUrl: './notes-list.component.html',
          styleUrls: ['./notes-list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/top-bar/top-bar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/top-bar/top-bar.component.ts ***!
    \****************************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppPagesTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TopBarComponent =
    /*#__PURE__*/
    function () {
      function TopBarComponent() {
        _classCallCheck(this, TopBarComponent);
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
      return new (t || TopBarComponent)();
    };

    TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBarComponent,
      selectors: [["app-top-bar"]],
      decls: 4,
      vars: 0,
      consts: [[1, "topbar"], ["routerLink", "/", "routerLinkActive", "router-link-active"]],
      template: function TopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Note Mate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n.topbar[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #355C7D, #725A7A, #FF7582);\n  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.068);\n}\n.topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 68px;\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9wLWJhci9EOlxcUHJvamVjdHNcXE5vdGVzIEFwcFxcVUlcXG5vdGUtbWF0ZS9zcmNcXG1haW4uc2NzcyIsInNyYy9hcHAvcGFnZXMvdG9wLWJhci9EOlxcUHJvamVjdHNcXE5vdGVzIEFwcFxcVUlcXG5vdGUtbWF0ZS9zcmNcXGFwcFxccGFnZXNcXHRvcC1iYXJcXHRvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxxRUFBQTtBQ0NSO0VBQ0ksZ0VBQUE7RUFDQSxpREFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMCcpO1xyXG4vLyBTZXQgeW91ciBicmFuZCBjb2xvcnNcclxuJHB1cnBsZTogIzM1NUM3RDtcclxuJHBpbms6ICNGRjc1ODI7XHJcbiRicm93bjogIzcyNUE3QTtcclxuJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xyXG4kYmVpZ2UtbGlnaHRlcjogI0VGRjBFQjtcclxuJHdoaXRlOiAjZWVlZWVlO1xyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIixcclxuc2Fucy1zZXJpZjtcclxuJGdyZXktZGFyazogJGJyb3duO1xyXG4kZ3JleS1saWdodDogJGJlaWdlLWxpZ2h0O1xyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJHNlY29uZGFyeTogJGJyb3duO1xyXG4kbGluazogJHBpbms7XHJcbiR3aWRlc2NyZWVuLWVuYWJsZWQ6IGZhbHNlO1xyXG4kZnVsbGhkLWVuYWJsZWQ6IGZhbHNlO1xyXG4vLyBVcGRhdGUgc29tZSBvZiBCdWxtYSdzIGNvbXBvbmVudCB2YXJpYWJsZXNcclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogJGJlaWdlLWxpZ2h0ZXI7XHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuQG1peGluIHRyYW5zaXRpb24tc21vb3RoKCkge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9tYWluLnNjc3MnO1xyXG4udG9wYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHByaW1hcnksICRzZWNvbmRhcnksICRwaW5rKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCAycHggcmdiYShibGFjaywgMC4wNjgpO1xyXG4gICAgaDEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjhweDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDBcIik7XG4udG9wYmFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzU1QzdELCAjNzI1QTdBLCAjRkY3NTgyKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcbn1cbi50b3BiYXIgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA2OHB4O1xuICBjb2xvcjogI2VlZWVlZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-bar',
          templateUrl: './top-bar.component.html',
          styleUrls: ['./top-bar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/note.model.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/note.model.ts ***!
    \**************************************/

  /*! exports provided: Note */

  /***/
  function srcAppSharedNoteModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Note", function () {
      return Note;
    });

    var Note = function Note() {
      _classCallCheck(this, Note);
    };
    /***/

  },

  /***/
  "./src/app/shared/note.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/note.service.ts ***!
    \****************************************/

  /*! exports provided: NoteService */

  /***/
  function srcAppSharedNoteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoteService", function () {
      return NoteService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _note_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./note.model */
    "./src/app/shared/note.model.ts");

    var NoteService =
    /*#__PURE__*/
    function () {
      function NoteService() {
        _classCallCheck(this, NoteService);

        this.notes = [{
          title: "Buy Cookies",
          body: "Buy Tiger for Sartaj, OREO for Joe"
        }, {
          title: "Buy Sandles",
          body: "Buy Sandles for Sartaj"
        }, {
          title: "Complete NoteMate",
          body: "Complete NoteApp development by Thursday"
        }, {
          title: "Buy Vegetables",
          body: "Buy Vegies"
        }];
      }

      _createClass(NoteService, [{
        key: "getAll",
        value: function getAll() {
          return this.notes;
        }
      }, {
        key: "getByIndex",
        value: function getByIndex(index) {
          return this.notes[index];
        }
      }, {
        key: "add",
        value: function add(title, body) {
          var note = new _note_model__WEBPACK_IMPORTED_MODULE_1__["Note"]();
          note.title = title;
          note.body = body;
          this.notes.push(note);
          return this.notes;
        }
      }, {
        key: "updateByIndex",
        value: function updateByIndex(index, title, body) {
          this.notes[index.valueOf()].title = title;
          this.notes[index.valueOf()].body = body;
          return this.notes;
        }
      }, {
        key: "deleteOne",
        value: function deleteOne(index) {
          this.notes.splice(index.valueOf(), 1);
          return this.notes;
        }
      }]);

      return NoteService;
    }();

    NoteService.ɵfac = function NoteService_Factory(t) {
      return new (t || NoteService)();
    };

    NoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NoteService,
      factory: NoteService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projects\Notes App\UI\note-mate\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map