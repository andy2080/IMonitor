webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _router = __webpack_require__(10);

	var _router2 = _interopRequireDefault(_router);

	var _router3 = __webpack_require__(16);

	var _router4 = _interopRequireDefault(_router3);

	var _router5 = __webpack_require__(46);

	var _router6 = _interopRequireDefault(_router5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ngModules = [// 公共/第三方模块
	'ui.router', 'oc.lazyLoad', 'ui.bootstrap', _index2.default.name];

	;[_router2.default, _router4.default, _router6.default] // 自定义模块
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

	var _RootCtrl = __webpack_require__(6);

	var _PollingFactory = __webpack_require__(7);

	var _HttpInterceptorFactory = __webpack_require__(8);

	var _GetServerInfoFactory = __webpack_require__(9);

	exports.default = angular.module('IMonitor.Common', []).controller('RootCtrl', _RootCtrl.RootController).factory('getServerInfo', _GetServerInfoFactory.GetServerInfoFactory).factory('httpInterceptor', _HttpInterceptorFactory.HttpInterceptorFactory).factory('polling', _PollingFactory.PollingFactory).config(['$httpProvider', function ($httpProvider) {
	    $httpProvider.interceptors.push('httpInterceptor');
	}]);

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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RootController = exports.RootController = function () {
	    function RootController($rootScope, $location, $state, getServerInfo) {
	        _classCallCheck(this, RootController);

	        var vm = this;
	        vm.$rootScope = $rootScope;
	        vm.$location = $location;
	        vm.$state = $state;

	        vm.$rootScope.currentServer = {};

	        vm.serverList = [];
	        vm.breadcrumb = false;
	        vm.sidebar = false;
	        getServerInfo().then(function (list) {
	            vm.serverList = list;
	            if (!vm.$rootScope.currentServer.id) {
	                vm.$rootScope.currentServer = list[0];
	            }
	        });
	        vm.$rootScope.$on('$stateChangeStart', function (event, toState) {
	            var breadcrumb = toState.data && toState.data.breadcrumb;
	            if (breadcrumb) {
	                vm.breadcrumb = breadcrumb;
	            } else {
	                vm.breadcrumb = false;
	            }
	            var sidebar = toState.data && toState.data.sidebar;
	            if (sidebar === false) {
	                vm.sidebar = false;
	            } else {
	                vm.sidebar = true;
	            }
	        });
	    }

	    _createClass(RootController, [{
	        key: 'toggleServer',
	        value: function toggleServer(id) {
	            var vm = this;
	            if (vm.$rootScope.currentServer.id == id) {
	                return false;
	            }
	            for (var i = 0; i < vm.serverList.length; i++) {
	                if (vm.serverList[i].id == id) {
	                    vm.$rootScope.currentServer = vm.serverList[i];
	                    break;
	                }
	            }
	            vm.$state.transitionTo(vm.$state.current, { currentServer: id });
	        }
	    }]);

	    return RootController;
	}();

	RootController.$inject = ['$rootScope', '$location', '$state', 'getServerInfo'];

/***/ },

/***/ 7:
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

/***/ 8:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HttpInterceptorFactory = HttpInterceptorFactory;
	function HttpInterceptorFactory($q, $injector) {
	    return {
	        'request': function request(config) {
	            return config;
	        },
	        'response': function response(_response) {
	            return _response;
	        },
	        'responseError': function responseError(response) {
	            return $q.reject(response);
	        }
	    };
	}

	HttpInterceptorFactory.$injector = ['$q', '$injector'];

/***/ },

/***/ 9:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GetServerInfoFactory = GetServerInfoFactory;
	function GetServerInfoFactory($http, $q) {
	  return function () {
	    return $http({
	      url: '/server/list',
	      method: 'GET'
	    }).then(function (res) {
	      var data = res.data;
	      if (data.errno == 0) {
	        return $q.resolve(data.data.servers);
	      }
	    }).catch(function (res) {});
	  };
	}

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(11);

	var Router = function Router($urlRouterProvider, $stateProvider) {
	    $stateProvider.state('home', {
	        url: '/home',
	        controller: 'HomeCtrl as HomeVm',
	        data: { sidebar: false },
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(1, function () {
	                    resolve(__webpack_require__(13));
	                });
	            });
	        },
	        resolve: {
	            asyncLoadCtrl: function asyncLoadCtrl($q, $ocLazyLoad) {
	                return $q(function (resolve) {
	                    __webpack_require__.e/* nsure */(2, function () {
	                        var ngModule = __webpack_require__(14).default;
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

/***/ 11:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(17);

	var Router = function Router($urlRouterProvider, $stateProvider) {
	    $urlRouterProvider.when('/info', '/info/server');
	    $stateProvider.state('info', {
	        url: '/info',
	        controller: 'InfoCtrl as InfoVm',
	        abstract: true,
	        template: '<div ui-view></div>',
	        resolve: {
	            asyncLoadCtrl: function asyncLoadCtrl($q, $ocLazyLoad) {
	                return $q(function (resolve) {
	                    __webpack_require__.e/* nsure */(3, function () {
	                        var ngModule = __webpack_require__(19).default;
	                        $ocLazyLoad.load({ name: ngModule.name });
	                        resolve(ngModule.controller);
	                    });
	                });
	            }
	        }
	    }).state('info.users', {
	        url: '/users/:currentServer',
	        controller: 'UsersInfoCtrl as UsersInfoVm',
	        data: { breadcrumb: ['基础信息', '用户信息'] },
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(4, function () {
	                    resolve(__webpack_require__(43));
	                });
	            });
	        }
	    }).state('info.authority', {
	        url: '/authority/:currentServer',
	        controller: 'AuthorityInfoCtrl as AuthorityInfoVm',
	        data: { breadcrumb: ['基础信息', '用户权限'] },
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(5, function () {
	                    resolve(__webpack_require__(44));
	                });
	            });
	        }
	    }).state('info.server', {
	        url: '/server/:currentServer',
	        controller: 'ServerInfoCtrl as ServerInfoVm',
	        data: { breadcrumb: ['基础信息', '服务器信息'] },
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(6, function () {
	                    resolve(__webpack_require__(45));
	                });
	            });
	        }
	    });
	};

	Router.$inject = ['$urlRouterProvider', '$stateProvider'];

	exports.default = angular.module('IMonitor.InfoRouter', []).config(Router);

/***/ },

/***/ 17:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(47);

	var Router = function Router($urlRouterProvider, $stateProvider) {
	    $stateProvider.state('monitor', {
	        url: '/monitor',
	        abstract: true,
	        controller: 'MonitorCtrl as MonitorVm',
	        template: '<div ui-view></div>',
	        resolve: {
	            asyncLoadCtrl: function asyncLoadCtrl($q, $ocLazyLoad) {
	                return $q(function (resolve) {
	                    __webpack_require__.e/* nsure */(7, function () {
	                        var ngModule = __webpack_require__(49).default;
	                        $ocLazyLoad.load({ name: ngModule.name });
	                        resolve(ngModule.controller);
	                    });
	                });
	            }
	        }
	    }).state('monitor.alarmPolicy', {
	        url: '/alarmPolicy/:currentServer',
	        controller: 'AlarmPolicyCtrl as AlarmPolicyVm',
	        data: { breadcrumb: ['监控系统', '报警策略'] },
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(8, function () {
	                    resolve(__webpack_require__(60));
	                });
	            });
	        }
	    }).state('monitor.alive', {
	        url: '/alive/:currentServer',
	        controller: 'AliveMonitorCtrl as AliveMonitorVm',
	        data: { breadcrumb: ['监控系统', '存活监控'] },
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(9, function () {
	                    resolve(__webpack_require__(61));
	                });
	            });
	        }
	    }).state('monitor.base', {
	        url: '/base/:currentServer',
	        controller: 'BaseMonitorCtrl as BaseMonitorVm',
	        data: { breadcrumb: ['监控系统', '基础监控'] },
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(10, function () {
	                    resolve(__webpack_require__(62));
	                });
	            });
	        }
	    }).state('monitor.custom', {
	        url: '/custom/:currentServer',
	        controller: 'CustomMonitorCtrl as CustomMonitorVm',
	        data: { breadcrumb: ['监控系统', '自定义监控'] },
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(11, function () {
	                    resolve(__webpack_require__(63));
	                });
	            });
	        }
	    }).state('monitor.log', {
	        url: '/log/:currentServer',
	        controller: 'LogMonitorCtrl as LogMonitorVm',
	        data: { breadcrumb: ['监控系统', '日志监控'] },
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(12, function () {
	                    resolve(__webpack_require__(64));
	                });
	            });
	        }
	    }).state('monitor.history', {
	        url: '/history/:currentServer',
	        controller: 'HistoryMonitorCtrl as HistoryMonitorVm',
	        data: { breadcrumb: ['监控系统', '历史监控'] },
	        templateProvider: function templateProvider($q) {
	            return $q(function (resolve) {
	                __webpack_require__.e/* nsure */(13, function () {
	                    resolve(__webpack_require__(65));
	                });
	            });
	        }
	    });
	};

	Router.$inject = ['$urlRouterProvider', '$stateProvider'];

	exports.default = angular.module('IMonitor.MonitorRouter', []).config(Router);

/***/ },

/***/ 47:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});