webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alert [playerOneWins]=\"playerOneWins\"></app-alert>\n<div class=\"playground\">\n  <app-player [playerName]=\"playerOneName\" [playerPenalty]=\"playerOnePenalty\"></app-player>\n  <app-rope [playerOnePenalty]=\"playerOnePenalty\" [playerTwoPenalty]=\"playerTwoPenalty\"></app-rope>\n  <app-player [playerName]=\"playerTwoName\" [playerPenalty]=\"playerTwoPenalty\"></app-player>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".playground {\n  max-width: 1200px;\n  height: 100px;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  margin: auto; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_globals__ = __webpack_require__("./src/globals/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ending_ending_service__ = __webpack_require__("./src/app/services/ending/ending.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(endingService) {
        this.endingService = endingService;
        this.playerOnePenalty = __WEBPACK_IMPORTED_MODULE_1__globals_globals__["a" /* DEFAULT_PLAYER_PENALTY */];
        this.playerTwoPenalty = __WEBPACK_IMPORTED_MODULE_1__globals_globals__["a" /* DEFAULT_PLAYER_PENALTY */];
        this.playerOneName = __WEBPACK_IMPORTED_MODULE_1__globals_globals__["c" /* PLAYER_ONE */];
        this.playerTwoName = __WEBPACK_IMPORTED_MODULE_1__globals_globals__["e" /* PLAYER_TWO */];
        this.gameEnded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.gameEndedSubscribe();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.gameEndedSubscription.unsubscribe();
    };
    /**
     * Subscribe to game end events. Restart game if it is ended
     */
    AppComponent.prototype.gameEndedSubscribe = function () {
        var _this = this;
        this.gameEndedSubscription = this.endingService.endedEmitter.subscribe(function (gameEnded) {
            if (gameEnded !== null && gameEnded !== undefined) {
                _this.gameEnded = gameEnded;
                if (!gameEnded) {
                    _this.restartGame();
                }
            }
        });
    };
    /**
     * Listens for keyboard press. Detects pressed keys
     * @param event
     */
    AppComponent.prototype.handleKeyboardEvent = function (event) {
        if (!this.gameEnded) {
            if (event.keyCode === __WEBPACK_IMPORTED_MODULE_1__globals_globals__["d" /* PLAYER_ONE_KEY_CODE */]) {
                this.playerScore(true);
            }
            else if (event.keyCode === __WEBPACK_IMPORTED_MODULE_1__globals_globals__["f" /* PLAYER_TWO_KEY_CODE */]) {
                this.playerScore(false);
            }
        }
    };
    /**
     * Set player score and checks for victory
     * @param playerOneScore
     */
    AppComponent.prototype.playerScore = function (playerOneScore) {
        if (playerOneScore) {
            this.playerTwoPenalty++;
            if (this.playerOnePenalty > 0) {
                this.playerOnePenalty--;
            }
            this.checkForVictory(this.playerTwoPenalty, true);
        }
        else {
            this.playerOnePenalty++;
            if (this.playerTwoPenalty > 0) {
                this.playerTwoPenalty--;
            }
            this.checkForVictory(this.playerOnePenalty, false);
        }
    };
    /**
     * Check for victory and fire game end if so. Define winner
     * @param playerPenalty
     * @param playerOneWins
     */
    AppComponent.prototype.checkForVictory = function (playerPenalty, playerOneWins) {
        if (playerPenalty >= __WEBPACK_IMPORTED_MODULE_1__globals_globals__["i" /* VICTORY_PENALTY */]) {
            this.endingService.gameEnded();
            this.playerOneWins = playerOneWins;
        }
    };
    /**
     * Reset player penalties
     */
    AppComponent.prototype.restartGame = function () {
        this.playerOnePenalty = __WEBPACK_IMPORTED_MODULE_1__globals_globals__["a" /* DEFAULT_PLAYER_PENALTY */];
        this.playerTwoPenalty = __WEBPACK_IMPORTED_MODULE_1__globals_globals__["a" /* DEFAULT_PLAYER_PENALTY */];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('document: keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "handleKeyboardEvent", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_ending_ending_service__["a" /* EndingService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_rope_rope_component__ = __webpack_require__("./src/app/components/rope/rope.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_player_player_component__ = __webpack_require__("./src/app/components/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_alert_alert_component__ = __webpack_require__("./src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_ending_ending_service__ = __webpack_require__("./src/app/services/ending/ending.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_rope_rope_component__["a" /* RopeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_alert_alert_component__["a" /* AlertComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_ending_ending_service__["a" /* EndingService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class]=\"gameEnded ? 'alert-holder popup' : 'alert-holder'\">\n  <div *ngIf=\"gameEnded\">\n    <h1 *ngIf=\"playerOneWins\" class=\"purple-title\">Bill Wins!!!</h1>\n    <h1 *ngIf=\"!playerOneWins\" class=\"green-title\">Steve Wins!!!</h1>\n    <button [class]=\"playerOneWins ? 'btn btn-purple' : 'btn btn-green'\" (click)=\"restartGame()\">Restart</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/alert/alert.component.scss":
/***/ (function(module, exports) {

module.exports = ".alert-holder {\n  width: 300px;\n  height: 120px;\n  position: relative;\n  text-align: center;\n  top: 30px;\n  margin: auto auto 200px; }\n  .alert-holder h1 {\n    margin: 0 0 20px 0; }\n  .alert-holder .purple-title {\n    color: #43547d; }\n  .alert-holder .green-title {\n    color: #159da9; }\n  .popup {\n  -webkit-animation: popup 0.7s;\n          animation: popup 0.7s; }\n  @-webkit-keyframes popup {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4); }\n  60% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  70% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  80% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  90% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes popup {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4); }\n  60% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  70% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  80% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  90% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ending_ending_service__ = __webpack_require__("./src/app/services/ending/ending.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(endingService) {
        this.endingService = endingService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        this.gameEndedSubscribe();
    };
    AlertComponent.prototype.ngOnChanges = function () {
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.gameEndedSubscription.unsubscribe();
    };
    /**
     * Subscribe to game end events
     */
    AlertComponent.prototype.gameEndedSubscribe = function () {
        var _this = this;
        this.gameEndedSubscription = this.endingService.endedEmitter.subscribe(function (gameEnded) {
            if (gameEnded !== null && gameEnded !== undefined) {
                _this.gameEnded = gameEnded;
            }
        });
    };
    /**
     * Fire game restart event
     */
    AlertComponent.prototype.restartGame = function () {
        this.endingService.gameStarted();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "playerOneWins", void 0);
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-alert',
            template: __webpack_require__("./src/app/components/alert/alert.component.html"),
            styles: [__webpack_require__("./src/app/components/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ending_ending_service__["a" /* EndingService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"player-holder\" [style.left]=\"isPlayerOne() ? playerPosition : null\"\n     [style.right]=\"!isPlayerOne() ? playerPosition : null\">\n  <div class=\"hint-holder\" [style.left]=\"isPlayerOne() ? 0 : null\" [style.right]=\"!isPlayerOne() ? 0 : null\">\n    <div *ngIf=\"isPlayerOne()\" [class]=\"isPlayerOne() ? 'player-one-hint' : 'player-two-hint'\">\n      <div class=\"name-holder\">Bill</div>\n      <div *ngIf=\"!gameEnded\" class=\"hint\">Press D</div>\n    </div>\n    <div *ngIf=\"!isPlayerOne()\" [class]=\"isPlayerOne() ? 'player-one-hint' : 'player-two-hint'\">\n      <div class=\"name-holder\">Steve</div>\n      <div *ngIf=\"!gameEnded\" class=\"hint\">Press P</div>\n    </div>\n  </div>\n  <img class=\"player\" [src]=\"isPlayerOne() ? '/assets/img/player1.png' : '/assets/img/player2.png'\" alt=\"Player\"\n       [ngClass]=\"{'player-one': isPlayerOne(), 'player-two': !isPlayerOne()}\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/player/player.component.scss":
/***/ (function(module, exports) {

module.exports = ".player-holder {\n  width: 100px;\n  height: 100px;\n  position: absolute; }\n  .player-holder img {\n    width: 100%;\n    height: auto; }\n  .player-holder .player-one {\n    left: 0px; }\n  .player-holder .player-two {\n    right: 0px; }\n  .player-holder .hint-holder {\n    width: 100px;\n    position: absolute;\n    top: -80px;\n    text-align: center; }\n  .player-holder .hint-holder .player-one-hint {\n      color: #43547d; }\n  .player-holder .hint-holder .player-two-hint {\n      color: #159da9; }\n  .player-holder .hint-holder .name-holder {\n      font-size: 1.5rem; }\n  .player-holder .hint-holder .hint {\n      -webkit-animation: blinker 1s linear infinite;\n              animation: blinker 1s linear infinite; }\n  @-webkit-keyframes blinker {\n  50% {\n    opacity: .15; } }\n  @keyframes blinker {\n  50% {\n    opacity: .15; } }\n"

/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals__ = __webpack_require__("./src/globals/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ending_ending_service__ = __webpack_require__("./src/app/services/ending/ending.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(sanitizer, endingService) {
        this.sanitizer = sanitizer;
        this.endingService = endingService;
        this.gameEnded = false;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.gameEndedSubscribe();
        this.innerWidth = window.innerWidth;
    };
    PlayerComponent.prototype.ngOnChanges = function () {
        this.setPlayerPosition(this.playerPenalty);
    };
    PlayerComponent.prototype.ngOnDestroy = function () {
        this.gameEndedSubscription.unsubscribe();
    };
    /**
     * Listens for window resize
     */
    PlayerComponent.prototype.onResize = function () {
        this.innerWidth = window.innerWidth;
    };
    /**
     * Subscribe to game end events. Reset player position if so
     */
    PlayerComponent.prototype.gameEndedSubscribe = function () {
        var _this = this;
        this.gameEndedSubscription = this.endingService.endedEmitter.subscribe(function (gameEnded) {
            if (gameEnded !== null && gameEnded !== undefined) {
                _this.gameEnded = gameEnded;
                if (gameEnded) {
                    _this.setPlayerPosition(__WEBPACK_IMPORTED_MODULE_2__globals_globals__["a" /* DEFAULT_PLAYER_PENALTY */]);
                }
            }
        });
    };
    /**
     * Set player position. Stronger hands for small screens
     * @param playerPenalty
     */
    PlayerComponent.prototype.setPlayerPosition = function (playerPenalty) {
        this.playerPosition = this.innerWidth <= __WEBPACK_IMPORTED_MODULE_2__globals_globals__["b" /* MINIMUM_WINDOW_WIDTH */] ?
            this.sanitizer.bypassSecurityTrustStyle('calc(' + playerPenalty * __WEBPACK_IMPORTED_MODULE_2__globals_globals__["h" /* STEP */] + '% / 2') :
            this.sanitizer.bypassSecurityTrustStyle('calc(' + playerPenalty * __WEBPACK_IMPORTED_MODULE_2__globals_globals__["h" /* STEP */] + '%');
    };
    /**
     * Define is current player player one or not
     */
    PlayerComponent.prototype.isPlayerOne = function () {
        return this.playerName === __WEBPACK_IMPORTED_MODULE_2__globals_globals__["c" /* PLAYER_ONE */];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], PlayerComponent.prototype, "playerPenalty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], PlayerComponent.prototype, "playerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PlayerComponent.prototype, "onResize", null);
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-player',
            template: __webpack_require__("./src/app/components/player/player.component.html"),
            styles: [__webpack_require__("./src/app/components/player/player.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__services_ending_ending_service__["a" /* EndingService */]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/rope/rope.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rope\" [style.left]=\"ropePosition\" [style.width]=\"ropeWidth\"></div>\n"

/***/ }),

/***/ "./src/app/components/rope/rope.component.scss":
/***/ (function(module, exports) {

module.exports = ".rope {\n  height: 100px;\n  width: calc(100% - 200px);\n  left: 100px;\n  display: inline-block;\n  position: absolute;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAFoCAMAAABUueotAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkRFQzU0NDFCMDZBMTFFODg0RkM5RjA2RUVBNzdCNDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkRFQzU0NDBCMDZBMTFFODg0RkM5RjA2RUVBNzdCNDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ODhBMkEyNUQwMjUxMUU3QTBBRUM4NzlCNjJCQUIxRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3ODhBMkEyNkQwMjUxMUU3QTBBRUM4NzlCNjJCQUIxRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpfrG4cAAAFcUExURSQfHNXU1SYdGL+TcNjX1zYtJiMkKNSjeykeGiAgIiIlKiMdHScfHBkaHiEdHsGUbSkhHlVIQCUgHMKdgjQsKsrJyjMpJxgYGiYfGT4zLTs0LtqpgDgwLrm4uk08NLm4uc+ie7qVeNKmebW1ttSqhCknKMO/vdOlg8C8ulJHQdSledOmfNbU1NKheM7O0NCjetCjfNfX2ODg4NKlhEtCPSsdFCUdG86hdyceGVM3ITstJDkvLSocEyMdH2NVTCQgITUtK727u8CUbRwfJCIiIk5DPdHR0mBTS6eHcMvKy9WlfdOngotsV9zc3LSztUM1LMfFxNTV19GlgLeMbMSXcCAaGrq4uDcsJiYmJiEfICgiIigeHLyPZdCgeJ6CbLS0s09EPtinfs6kftOmf9Kier2UdhscHichIScfHYpvWl9ORtOid9Ckfx0cIaJ9Yh8gJVpJQaOFa8TCwf///3l6ay0AAAB0dFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A9nTFawAAALVJREFUeNpiKEYCDKOcUc4oZ5QzyhnljHJGOaOcUQ42TlGAmoajaFi8vKyfMkOkuDMXL2cuQ7otNwODlRhbvki4pJSMgzUrQ7CHnKlPqmIIMzN/DEOisL9NnrSXdpC3vhJDUmaEapyCiq5BTqwWg5Nlmkthtjm7unFyCkOCBY+AiatgQZaduyaDWag9X1RGNAcTk4QQg6ehXqAbiw4LI6Ov0WgsjHJGOaOcUc4oZ5QzCDgAAQYAnRl4x2pIM38AAAAASUVORK5CYII=) repeat-x;\n  background-size: contain; }\n"

/***/ }),

/***/ "./src/app/components/rope/rope.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RopeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals__ = __webpack_require__("./src/globals/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ending_ending_service__ = __webpack_require__("./src/app/services/ending/ending.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RopeComponent = /** @class */ (function () {
    function RopeComponent(sanitizer, endingService) {
        this.sanitizer = sanitizer;
        this.endingService = endingService;
    }
    RopeComponent.prototype.ngOnInit = function () {
        this.gameEndedSubscribe();
        this.innerWidth = window.innerWidth;
    };
    RopeComponent.prototype.ngOnChanges = function () {
        this.setRopePosition(this.playerOnePenalty);
        this.setRopeWidth(this.playerOnePenalty, this.playerTwoPenalty);
    };
    RopeComponent.prototype.ngOnDestroy = function () {
        this.gameEndedSubscription.unsubscribe();
    };
    /**
     * Listens for window resize
     */
    RopeComponent.prototype.onResize = function () {
        this.innerWidth = window.innerWidth;
    };
    /**
     * Subscribe to game end events. Reset rope position and width if so
     */
    RopeComponent.prototype.gameEndedSubscribe = function () {
        var _this = this;
        this.gameEndedSubscription = this.endingService.endedEmitter.subscribe(function (gameEnded) {
            if (gameEnded !== null && gameEnded !== undefined) {
                if (gameEnded) {
                    _this.setRopePosition(__WEBPACK_IMPORTED_MODULE_2__globals_globals__["a" /* DEFAULT_PLAYER_PENALTY */]);
                    _this.setRopeWidth(__WEBPACK_IMPORTED_MODULE_2__globals_globals__["a" /* DEFAULT_PLAYER_PENALTY */], __WEBPACK_IMPORTED_MODULE_2__globals_globals__["a" /* DEFAULT_PLAYER_PENALTY */]);
                }
            }
        });
    };
    /**
     * Set rope position based on player penalties
     * @param playerOnePenalty
     */
    RopeComponent.prototype.setRopePosition = function (playerOnePenalty) {
        this.ropePosition = this.innerWidth <= __WEBPACK_IMPORTED_MODULE_2__globals_globals__["b" /* MINIMUM_WINDOW_WIDTH */] ?
            this.sanitizer.bypassSecurityTrustStyle('calc(' + playerOnePenalty * __WEBPACK_IMPORTED_MODULE_2__globals_globals__["h" /* STEP */] + '% / 2' + ' + ' + __WEBPACK_IMPORTED_MODULE_2__globals_globals__["g" /* PLAYER_WIDTH */] + 'px)') :
            this.sanitizer.bypassSecurityTrustStyle('calc(' + playerOnePenalty * __WEBPACK_IMPORTED_MODULE_2__globals_globals__["h" /* STEP */] + '%' + ' + ' + __WEBPACK_IMPORTED_MODULE_2__globals_globals__["g" /* PLAYER_WIDTH */] + 'px)');
    };
    /**
     * Set rope width based on both players penalties. Rope is shorter for small screens
     * @param playerOnePenalty
     * @param playerTwoPenalty
     */
    RopeComponent.prototype.setRopeWidth = function (playerOnePenalty, playerTwoPenalty) {
        this.ropeWidth = this.innerWidth <= __WEBPACK_IMPORTED_MODULE_2__globals_globals__["b" /* MINIMUM_WINDOW_WIDTH */] ?
            this.sanitizer.bypassSecurityTrustStyle('calc(' + (100 - ((playerOnePenalty * __WEBPACK_IMPORTED_MODULE_2__globals_globals__["h" /* STEP */] / 2) + (playerTwoPenalty * __WEBPACK_IMPORTED_MODULE_2__globals_globals__["h" /* STEP */] / 2))) + '% - ' + 2 * __WEBPACK_IMPORTED_MODULE_2__globals_globals__["g" /* PLAYER_WIDTH */] + 'px') :
            this.sanitizer.bypassSecurityTrustStyle('calc(' + (100 - ((playerOnePenalty * __WEBPACK_IMPORTED_MODULE_2__globals_globals__["h" /* STEP */]) + (playerTwoPenalty * __WEBPACK_IMPORTED_MODULE_2__globals_globals__["h" /* STEP */]))) + '% - ' + 2 * __WEBPACK_IMPORTED_MODULE_2__globals_globals__["g" /* PLAYER_WIDTH */] + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], RopeComponent.prototype, "playerOnePenalty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], RopeComponent.prototype, "playerTwoPenalty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RopeComponent.prototype, "onResize", null);
    RopeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-rope',
            template: __webpack_require__("./src/app/components/rope/rope.component.html"),
            styles: [__webpack_require__("./src/app/components/rope/rope.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__services_ending_ending_service__["a" /* EndingService */]])
    ], RopeComponent);
    return RopeComponent;
}());



/***/ }),

/***/ "./src/app/services/ending/ending.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EndingService = /** @class */ (function () {
    function EndingService() {
        this.endedState = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.endedEmitter = this.endedState.asObservable();
    }
    EndingService.prototype.gameEnded = function () {
        this.endedState.next(true);
    };
    EndingService.prototype.gameStarted = function () {
        this.endedState.next(false);
    };
    EndingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EndingService);
    return EndingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/globals/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PLAYER_ONE_KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PLAYER_TWO_KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return VICTORY_PENALTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_PLAYER_PENALTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PLAYER_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PLAYER_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PLAYER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MINIMUM_WINDOW_WIDTH; });
var PLAYER_ONE_KEY_CODE = 100;
var PLAYER_TWO_KEY_CODE = 112;
var STEP = 5;
var VICTORY_PENALTY = 10;
var DEFAULT_PLAYER_PENALTY = 0;
var PLAYER_ONE = 'Player One';
var PLAYER_TWO = 'Player Two';
var PLAYER_WIDTH = 100;
var MINIMUM_WINDOW_WIDTH = 400;


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map