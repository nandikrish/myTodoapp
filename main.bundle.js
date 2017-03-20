webpackJsonp([1,4],{

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    /******* from udemy  *******/
    UserService.prototype.getUsers = function () {
        return this.http.get("https://jsonplaceholder.typicode.com/users")
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.addUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        //console.log(body);
        return this.http.post('https://myfirstapp-f40a6.firebaseio.com/users.json', body, { headers: headers });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = (function () {
    function TodoComponent(todoService) {
        this.todoService = todoService;
        this.counter = 0;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos()
            .subscribe(function (data) {
            var myArray = [];
            for (var key in data) {
                myArray.push(data[key]);
            }
            _this.todos = myArray;
        });
    };
    TodoComponent.prototype.checkbox = function (todo) {
        if (todo.selected) {
            this.counter++;
        }
        else {
            this.counter--;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], TodoComponent.prototype, "counter", void 0);
    TodoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'fa-todo',
            template: __webpack_require__(514),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === 'function' && _a) || Object])
    ], TodoComponent);
    return TodoComponent;
    var _a;
}());
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(176);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get("https://jsonplaceholder.typicode.com/todos")
            .map(function (response) { return response.json(); });
    };
    TodoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], TodoService);
    return TodoService;
    var _a;
}());
//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAddComponent = (function () {
    function UserAddComponent(userService) {
        this.userService = userService;
        this.user = [];
    }
    UserAddComponent.prototype.onSubmit = function (user) {
        //console.log(user);
        var status = this.userService.addUser(user);
        console.log(status);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], UserAddComponent.prototype, "user", void 0);
    UserAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-user-add',
            template: __webpack_require__(515),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], UserAddComponent);
    return UserAddComponent;
    var _a;
}());
//# sourceMappingURL=user-add.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (data) {
            var myArray = [];
            for (var key in data) {
                myArray.push(data[key]);
            }
            _this.users = myArray;
        });
        /*this.userService.getUsers().then(users => this.users = users);*/
    };
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'fa-user',
            template: __webpack_require__(516),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], UserComponent);
    return UserComponent;
    var _a;
}());
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 335;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(457);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'fa-root',
            template: __webpack_require__(513),
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_add_component__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todo_component__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_add_component__["a" /* UserAddComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_9__user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_add_component__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var APP_ROUTES = [
    { path: '', redirectTo: '/todo', pathMatch: 'full' },
    { path: 'todo', component: __WEBPACK_IMPORTED_MODULE_1__todo_component__["a" /* TodoComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */] },
    { path: 'addUser', component: __WEBPACK_IMPORTED_MODULE_3__user_add_component__["a" /* UserAddComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 513:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\"><strong>ToDo List</strong></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['todo']\">ToDo</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['user']\">User</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n<!--div class=\"alert alert-danger\">\n  Selected Todos :<p [counter]></p>\n</div-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\">\n  Selected Todos : {{counter}}\n</div>\n<div class=\"container\">\n  <div class=\"hpanel\">\n    <div class=\"panel panel-primary\">\n      <!-- Default panel contents -->\n      <div class=\"panel-heading\">ToDo List</div>\n\n      <!-- Table -->\n      <table class=\"table\">\n        <thead>\n          <th></th>\n          <th>User Id</th>\n          <th>Title</th>\n          <th>Status</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let todo of todos;\">\n              <td><input type=\"checkbox\" [(ngModel)]=\"todo.selected\" (change)=\"checkbox(todo)\"></td>\n              <td>{{todo.userId}}</td>\n              <td>{{todo.title}}</td>\n              <td>{{todo.completed}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"hpanel\">\n    <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"user-name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"user-name\" [(ngModel)]=\"user.name\" name=\"name\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"user-email\">E-Mail</label>\n        <input type=\"text\" class=\"form-control\" id=\"user-email\" [(ngModel)]=\"user.email\" name=\"email\" required pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n          #email=\"ngModel\">\n        <div *ngIf=\"!email.valid\">\n          Invalid email\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"user-phone\">Phone Number</label>\n        <input type=\"text\" class=\"form-control\" id=\"user-phone\" [(ngModel)]=\"user.phone\" name=\"phone\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"user-website\">Website</label>\n        <input type=\"text\" class=\"form-control\" id=\"user-website\" [(ngModel)]=\"user.website\" name=\"website\" required>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!f.valid\">Save</button>\n      <button type=\"submit\" class=\"btn btn-danger\">Clear</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"hpanel\">\n    <div class=\"text-right\">\n      <button type=\"button\" class=\"btn btn-warning\"><a [routerLink]=\"['/addUser']\">Add User</a></button>\n    </div><br>\n    <div class=\"panel panel-primary\">\n      <!-- Default panel contents -->\n      <div class=\"panel-heading\">User List</div>\n\n      <!-- Table -->\n      <table class=\"table\">\n        <thead>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Phone</th>\n          <th>Website</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of users\">\n            <td>{{user.name}}</td>\n            <td>{{user.email}}</td>\n            <td>{{user.phone}}</td>\n            <td>{{user.website}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);


/***/ })

},[534]);
//# sourceMappingURL=main.bundle.js.map