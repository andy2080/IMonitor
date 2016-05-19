webpackJsonp([7],{

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Monitor = __webpack_require__(50);

	var _AlarmPolicy = __webpack_require__(51);

	var _AliveMonitor = __webpack_require__(54);

	var _BaseMonitor = __webpack_require__(55);

	var _CustomMonitor = __webpack_require__(56);

	var _HistoryMonitor = __webpack_require__(57);

	var _LogMonitor = __webpack_require__(58);

	var _GetAlarmPolicyListFactory = __webpack_require__(59);

	exports.default = angular.module('IMonitor.Monitor', ['ui.bootstrap']).controller('MonitorCtrl', _Monitor.MonitorController).controller('AlarmPolicyCtrl', _AlarmPolicy.AlarmPolicyController).controller('AliveMonitorCtrl', _AliveMonitor.AliveMonitorController).controller('BaseMonitorCtrl', _BaseMonitor.BaseMonitorController).controller('CustomMonitorCtrl', _CustomMonitor.CustomMonitorController).controller('HistoryMonitorCtrl', _HistoryMonitor.HistoryMonitorController).controller('LogMonitorCtrl', _LogMonitor.LogMonitorController).factory('getAlarmPolicyList', _GetAlarmPolicyListFactory.GetAlarmPolicyListFactory);

/***/ },

/***/ 50:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 监控

	var MonitorController = exports.MonitorController = function MonitorController() {
	    _classCallCheck(this, MonitorController);
	};

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AlarmPolicyController = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _addAlarmPolicyWindow = __webpack_require__(52);

	var _addAlarmPolicyWindow2 = _interopRequireDefault(_addAlarmPolicyWindow);

	var _deleteAlarmPolicyWindow = __webpack_require__(53);

	var _deleteAlarmPolicyWindow2 = _interopRequireDefault(_deleteAlarmPolicyWindow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 报警策略

	var AlarmPolicyController = exports.AlarmPolicyController = function () {
	    function AlarmPolicyController($scope, $stateParams, $uibModal, $log, getAlarmPolicyList) {
	        _classCallCheck(this, AlarmPolicyController);

	        var vm = this;
	        vm.$scope = $scope;
	        vm.$uibModal = $uibModal;
	        vm.$log = $log;
	        vm.table = {};
	        vm.currentServer = $stateParams.currentServer;
	        if (vm.currentServer) {
	            getAlarmPolicyList({ serverId: vm.currentServer }).then(function (data) {
	                vm.table.data = data;
	            });
	        }
	    }

	    _createClass(AlarmPolicyController, [{
	        key: 'addAlarmPolicy',
	        value: function addAlarmPolicy() {
	            var vm = this;
	            var modalInstance = vm.$uibModal.open({
	                animation: true,
	                template: _addAlarmPolicyWindow2.default,
	                controller: AddAlarmPolicyWindowController,
	                controllerAs: 'AddAlarmPolicyWindowVm',
	                resolve: {}
	            });

	            modalInstance.result.then(function () {
	                vm.$log.info('ok');
	            }, function () {
	                vm.$log.info('Modal dismissed at: ' + new Date());
	            });
	        }
	    }, {
	        key: 'viewDetail',
	        value: function viewDetail(id) {
	            console.log('查看详情[' + id + ']');
	        }
	    }, {
	        key: 'editAlarmPolicy',
	        value: function editAlarmPolicy(id) {
	            console.log('编辑[' + id + ']');
	            var vm = this;
	            var modalInstance = vm.$uibModal.open({
	                animation: true,
	                template: _addAlarmPolicyWindow2.default,
	                controller: AddAlarmPolicyWindowController,
	                controllerAs: 'AddAlarmPolicyWindowVm',
	                resolve: {
	                    items: function items() {
	                        return vm.items;
	                    }
	                }
	            });

	            modalInstance.result.then(function (selectedItem) {
	                vm.selected = selectedItem;
	            }, function () {
	                vm.$log.info('Modal dismissed at: ' + new Date());
	            });
	        }
	    }, {
	        key: 'deleteItem',
	        value: function deleteItem(id) {
	            console.log('删除[' + id + ']');
	            var vm = this;
	            var modalInstance = vm.$uibModal.open({
	                animation: true,
	                template: _deleteAlarmPolicyWindow2.default,
	                controller: DelAlarmPolicyWindowController,
	                controllerAs: 'DelAlarmPolicyWindowVm'
	            });

	            modalInstance.result.then(function (selectedItem) {
	                vm.$log.info('Modal ok at: ' + new Date());
	            }, function () {
	                vm.$log.info('Modal dismissed at: ' + new Date());
	            });
	        }
	    }, {
	        key: 'setException',
	        value: function setException(id) {
	            console.log('设置例外[' + id + ']');
	        }
	    }, {
	        key: 'toggleApply',
	        value: function toggleApply(id) {
	            console.log('应用[' + id + ']');
	            for (var i = 0, len = this.table.data.length; i < len; i++) {
	                if (this.table.data[i].id == id) {
	                    this.table.data[i].isApply = this.table.data[i].isApply == 1 ? 0 : 1;
	                    break;
	                }
	            }
	        }
	    }]);

	    return AlarmPolicyController;
	}();

	AlarmPolicyController.$inject = ['$scope', '$stateParams', '$uibModal', '$log', 'getAlarmPolicyList'];

	var AddAlarmPolicyWindowController = function () {
	    function AddAlarmPolicyWindowController($scope, $uibModalInstance) {
	        _classCallCheck(this, AddAlarmPolicyWindowController);

	        var vm = this;
	        vm.$scope = $scope;
	        vm.$uibModalInstance = $uibModalInstance;
	    }

	    _createClass(AddAlarmPolicyWindowController, [{
	        key: 'ok',
	        value: function ok() {
	            this.$uibModalInstance.close('ok');
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel() {
	            this.$uibModalInstance.dismiss('cancel');
	        }
	    }]);

	    return AddAlarmPolicyWindowController;
	}();

	AddAlarmPolicyWindowController.$inject = ['$scope', '$uibModalInstance'];

	var DelAlarmPolicyWindowController = function () {
	    function DelAlarmPolicyWindowController($scope, $uibModalInstance) {
	        _classCallCheck(this, DelAlarmPolicyWindowController);

	        var vm = this;
	        vm.$scope = $scope;
	        vm.$uibModalInstance = $uibModalInstance;
	    }

	    _createClass(DelAlarmPolicyWindowController, [{
	        key: 'ok',
	        value: function ok() {
	            this.$uibModalInstance.close('ok');
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel() {
	            this.$uibModalInstance.dismiss('cancel');
	        }
	    }]);

	    return DelAlarmPolicyWindowController;
	}();

	DelAlarmPolicyWindowController.$inject = ['$scope', '$uibModalInstance'];

/***/ },

/***/ 52:
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-header\">\n    <button type=\"button\" class=\"close\"  ng-click=\"AddAlarmPolicyWindowVm.cancel()\"><span aria-hidden=\"true\">&times;</span></button>\n    <h4 class=\"modal-title\" id=\"exampleModalLabel\">添加报警策略</h4>\n</div>\n<div class=\"modal-body\">\n    <form class=\"form-horizontal\">\n        <div class=\"form-group\">\n            <label for=\"input1\" class=\"col-sm-2 control-label\">\n                <span class=\"text-danger\">*</span>监控类型:\n            </label>\n            <div class=\"col-sm-10\">\n                <select name=\"monitor_name\" id=\"input1\" class=\"form-control\">\n                    <option value=\"常用监控项\">常用监控项</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"input2\" class=\"col-sm-2 control-label\">\n                <span class=\"text-danger\">*</span>监控项:\n            </label>\n            <div class=\"col-sm-10\">\n                <select name=\"monitor_item\" id=\"input2\" class=\"form-control\">\n                    <option value=\"一分钟平均负载\">一分钟平均负载</option>\n                    <option value=\"物理内存使用率\">物理内存使用率</option>\n                    <option value=\"运行进程数\">运行进程数</option>\n                    <option value=\"阻塞进程数\">阻塞进程数</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"input3\" class=\"col-sm-2 control-label\">\n                <span class=\"text-danger\">*</span>策略名称:\n            </label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"input3\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"input4\" class=\"col-sm-2 control-label\">\n                <span class=\"text-danger\">*</span>报警组:\n            </label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"input4\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">\n                <span class=\"text-danger\">*</span>报警条件:\n            </label>\n            <div class=\"col-sm-10\">\n                当您选择监控项值持续\n                <input type=\"text\" class=\"form-control\" style=\"width: 50px; display: inline-block;\">秒\n                <select name=\"condition\" id=\"\" class=\"form-control\" style=\"width: 50px; display: inline-block;\">\n                    <option value=\"1\">&gt;</option>\n                    <option value=\"0\">=</option>\n                    <option value=\"-1\">&lt;</option>\n                </select>\n                <input type=\"text\" class=\"form-control\" style=\"width: 50px; display: inline-block;\">\n                就发出报警\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">例子:</label>\n            <div class=\"col-sm-10\" style=\"height: 34px; line-height: 34px;\">\n                当您选择监控项值持续60秒大于80MB就发出报警.\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" ng-click=\"AddAlarmPolicyWindowVm.cancel()\">关闭</button>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"AddAlarmPolicyWindowVm.ok()\">确定</button>\n</div>";

/***/ },

/***/ 53:
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" ng-click=\"DelAlarmPolicyWindowVm.cancel()\"><span aria-hidden=\"true\">&times;</span></button>\n    <h4 class=\"modal-title\">删除报警策略</h4>\n</div>\n<div class=\"modal-body\">\n    <p>确定要删除报警策略?</p>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" ng-click=\"DelAlarmPolicyWindowVm.cancel()\">关闭</button>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"DelAlarmPolicyWindowVm.ok()\">删除</button>\n</div>";

/***/ },

/***/ 54:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 存活监控

	var AliveMonitorController = exports.AliveMonitorController = function () {
	    function AliveMonitorController() {
	        _classCallCheck(this, AliveMonitorController);

	        this.table = {
	            data: [{
	                id: 1,
	                period: '60秒',
	                policy: '4/0'
	            }]
	        };
	    }

	    _createClass(AliveMonitorController, [{
	        key: 'addPolicy',
	        value: function addPolicy(id) {}
	    }]);

	    return AliveMonitorController;
	}();

/***/ },

/***/ 55:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 基础监控

	var BaseMonitorController = exports.BaseMonitorController = function () {
	    function BaseMonitorController($scope, $uibModal, $log) {
	        _classCallCheck(this, BaseMonitorController);

	        var vm = this;
	        vm.$scope = $scope;
	        vm.$uibModal = $uibModal;
	        vm.$log = $log;
	        this.table = {
	            data: [{
	                id: '1',
	                name: 'MEM_FREE',
	                alias: '剩余物理内存',
	                type: '常用基础项',
	                unit: 'KB',
	                period: '10',
	                status: '无效',
	                policy: '0/0'
	            }, {
	                id: '2',
	                name: 'MEM_URATE',
	                alias: '物理内存使用率',
	                type: '常用基础项',
	                unit: '百分率',
	                period: '10',
	                status: '正常',
	                policy: '4/1'
	            }]
	        };
	    }

	    _createClass(BaseMonitorController, [{
	        key: 'addPolicy',
	        value: function addPolicy(id) {}
	    }]);

	    return BaseMonitorController;
	}();

	BaseMonitorController.$inject = ['$scope', '$uibModal', '$log'];

/***/ },

/***/ 56:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 自定义监控

	var CustomMonitorController = exports.CustomMonitorController = function () {
	    function CustomMonitorController($scope, $uibModal, $log) {
	        _classCallCheck(this, CustomMonitorController);

	        var vm = this;
	        vm.$scope = $scope;
	        vm.$uibModal = $uibModal;
	        vm.$log = $log;
	        vm.table = {
	            data: [{
	                id: '1',
	                name: 'MySQL连接数',
	                shell_path: '/home/monitor/mysql-conn.sh',
	                account: 'tester',
	                period: '10',
	                status: 1,
	                policy: '0/0'
	            }]
	        };
	    }

	    _createClass(CustomMonitorController, [{
	        key: 'toggleApply',
	        value: function toggleApply(id) {
	            var vm = this;
	            for (var i = 0, len = vm.table.data.length; i < len; i++) {
	                if (vm.table.data[i].id == id) {
	                    vm.table.data[i].status = vm.table.data[i].isApply == 1 ? 0 : 1;
	                    break;
	                }
	            }
	        }
	    }, {
	        key: 'addCustomMonitor',
	        value: function addCustomMonitor() {}
	    }, {
	        key: 'editMonitor',
	        value: function editMonitor() {}
	    }, {
	        key: 'deleteMonitor',
	        value: function deleteMonitor() {}
	    }, {
	        key: 'addPolicy',
	        value: function addPolicy() {}
	    }, {
	        key: 'downloadShell',
	        value: function downloadShell() {}
	    }]);

	    return CustomMonitorController;
	}();

/***/ },

/***/ 57:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 历史监控

	var HistoryMonitorController = exports.HistoryMonitorController = function HistoryMonitorController() {
	    _classCallCheck(this, HistoryMonitorController);
	};

/***/ },

/***/ 58:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 日志监控

	var LogMonitorController = exports.LogMonitorController = function LogMonitorController() {
	    _classCallCheck(this, LogMonitorController);
	};

/***/ },

/***/ 59:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.GetAlarmPolicyListFactory = GetAlarmPolicyListFactory;
	function GetAlarmPolicyListFactory($http, $q) {
	    return function (reqData) {
	        return $http({
	            url: './json/alarmPolicy_list.json',
	            method: 'GET',
	            data: reqData
	        }).then(function (res) {
	            var data = res.data;
	            if (data.status == 0) {
	                return $q.resolve(data.data);
	            }
	        }).catch(function (err) {});
	    };
	}
	GetAlarmPolicyListFactory.$inject = ['$http', '$q'];

/***/ }

});