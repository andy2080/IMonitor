webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _router = __webpack_require__(7);

	var _router2 = _interopRequireDefault(_router);

	var _router3 = __webpack_require__(13);

	var _router4 = _interopRequireDefault(_router3);

	var _router5 = __webpack_require__(19);

	var _router6 = _interopRequireDefault(_router5);

	var _router7 = __webpack_require__(49);

	var _router8 = _interopRequireDefault(_router7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ngModules = [// 公共/第三方模块
	'ui.router', 'oc.lazyLoad', 'ui.bootstrap', _index2.default.name];

	;[_router2.default, _router4.default, _router6.default, _router8.default] // 自定义模块
	.forEach(function (ngMod) {
	    ngModules.push(ngMod.name);
	});

	var DefaultRouter = function DefaultRouter($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/home');
	};

	DefaultRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

	angular.module('IMonitor', ngModules).config(DefaultRouter);

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(2);

	var _PollingFactory = __webpack_require__(6);

	exports.default = angular.module('IMonitor.Common', []).factory('polling', _PollingFactory.PollingFactory);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 6:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PollingFactory = PollingFactory;
	function PollingFactory($timeout) {
	    return function polling(fn, clock, isAsync) {
	        if (isAsync) {
	            $timeout(function () {
	                fn().then(function () {
	                    return polling(fn, clock, isAsync);
	                });
	            }, clock);
	        } else {
	            $timeout(function () {
	                fn();
	                polling(fn, clock, isAsync);
	            }, clock);
	        }
	    };
	}
	PollingFactory.$inject = ['$timeout'];

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(8);

	var Router = function Router($urlRouterProvider, $stateProvider) {
	    $stateProvider.state('home', {
	        url: '/home',
	        controller: 'HomeCtrl as HomeVm',
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(1, function () {
	                    resolve(__webpack_require__(10));
	                });
	            });
	        },
	        resolve: {
	            asyncLoadCtrl: function asyncLoadCtrl($q, $ocLazyLoad) {
	                return $q(function (resolve) {
	                    __webpack_require__.e/* nsure */(2, function () {
	                        var ngModule = __webpack_require__(11).default;
	                        $ocLazyLoad.load({ name: ngModule.name });
	                        resolve(ngModule.controller);
	                    });
	                });
	            }
	        }
	    });
	};

	Router.$inject = ['$urlRouterProvider', '$stateProvider'];

	exports.default = angular.module('IMonitor.HomeRouter', []).config(Router);

/***/ },

/***/ 8:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(14);

	var Router = function Router($urlRouterProvider, $stateProvider) {
	    $stateProvider.state('help', {
	        url: '/help',
	        controller: 'HelpCtrl as HelpVm',
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(3, function () {
	                    resolve(__webpack_require__(16));
	                });
	            });
	        },
	        resolve: {
	            asyncLoadCtrl: function asyncLoadCtrl($q, $ocLazyLoad) {
	                return $q(function (resolve) {
	                    __webpack_require__.e/* nsure */(4, function () {
	                        var ngModule = __webpack_require__(17).default;
	                        $ocLazyLoad.load({ name: ngModule.name });
	                        resolve(ngModule.controller);
	                    });
	                });
	            }
	        }
	    });
	};

	Router.$inject = ['$urlRouterProvider', '$stateProvider'];

	exports.default = angular.module('IMonitor.HelpRouter', []).config(Router);

/***/ },

/***/ 14:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(20);

	var Router = function Router($urlRouterProvider, $stateProvider) {
	    $urlRouterProvider.when('/info', '/info/server');
	    $stateProvider.state('info', {
	        url: '/info',
	        //controller: 'InfoCtrl as InfoVm',
	        abstract: true,
	        template: '<div ui-view></div>',
	        resolve: {
	            asyncLoadCtrl: function asyncLoadCtrl($q, $ocLazyLoad) {
	                return $q(function (resolve) {
	                    __webpack_require__.e/* nsure */(5, function () {
	                        var ngModule = __webpack_require__(22).default;
	                        $ocLazyLoad.load({ name: ngModule.name });
	                        resolve(ngModule.controller);
	                    });
	                });
	            }
	        }
	    }).state('info.users', {
	        url: '/users',
	        controller: 'UsersInfoCtrl as UsersInfoVm',
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(6, function () {
	                    resolve(__webpack_require__(46));
	                });
	            });
	        }
	    }).state('info.authority', {
	        url: '/authority',
	        controller: 'AuthorityInfoCtrl as AuthorityInfoVm',
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(7, function () {
	                    resolve(__webpack_require__(47));
	                });
	            });
	        }
	    }).state('info.server', {
	        url: '/server',
	        controller: 'ServerInfoCtrl as ServerInfoVm',
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(8, function () {
	                    resolve(__webpack_require__(48));
	                });
	            });
	        }
	    });
	};

	Router.$inject = ['$urlRouterProvider', '$stateProvider'];

	exports.default = angular.module('IMonitor.InfoRouter', []).config(Router);

/***/ },

/***/ 20:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(50);

	var Router = function Router($urlRouterProvider, $stateProvider) {
	    $stateProvider.state('monitor', {
	        url: '/monitor',
	        abstract: true,
	        controller: 'MonitorCtrl as MonitorVm',
	        template: '<div ui-view></div>',
	        resolve: {
	            asyncLoadCtrl: function asyncLoadCtrl($q, $ocLazyLoad) {
	                return $q(function (resolve) {
	                    __webpack_require__.e/* nsure */(9, function () {
	                        var ngModule = __webpack_require__(52).default;
	                        $ocLazyLoad.load({ name: ngModule.name });
	                        resolve(ngModule.controller);
	                    });
	                });
	            }
	        }
	    }).state('monitor.alarmPolicy', {
	        url: '/alarmPolicy',
	        controller: 'AlarmPolicyCtrl as AlarmPolicyVm',
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(10, function () {
	                    resolve(__webpack_require__(62));
	                });
	            });
	        }
	    }).state('monitor.alive', {
	        url: '/alive',
	        controller: 'AliveMonitorCtrl as AliveMonitorVm',
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(11, function () {
	                    resolve(__webpack_require__(63));
	                });
	            });
	        }
	    }).state('monitor.base', {
	        url: '/base',
	        controller: 'BaseMonitorCtrl as BaseMonitorVm',
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(12, function () {
	                    resolve(__webpack_require__(64));
	                });
	            });
	        }
	    }).state('monitor.custom', {
	        url: '/custom',
	        controller: 'CustomMonitorCtrl as CustomMonitorVm',
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(13, function () {
	                    resolve(__webpack_require__(65));
	                });
	            });
	        }
	    }).state('monitor.log', {
	        url: '/log',
	        controller: 'LogMonitorCtrl as LogMonitorVm',
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(14, function () {
	                    resolve(__webpack_require__(66));
	                });
	            });
	        }
	    }).state('monitor.history', {
	        url: '/history',
	        controller: 'HistoryMonitorCtrl as HistoryMonitorVm',
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(15, function () {
	                    resolve(__webpack_require__(67));
	                });
	            });
	        }
	    });
	};

	Router.$inject = ['$urlRouterProvider', '$stateProvider'];

	exports.default = angular.module('IMonitor.MonitorRouter', []).config(Router);

/***/ },

/***/ 50:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});