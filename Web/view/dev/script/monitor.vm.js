webpackJsonp([9],{

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Monitor = __webpack_require__(51);

	var _AlarmPolicy = __webpack_require__(52);

	var _AliveMonitor = __webpack_require__(53);

	var _BaseMonitor = __webpack_require__(54);

	var _CustomMonitor = __webpack_require__(55);

	var _HistoryMonitor = __webpack_require__(56);

	var _LogMonitor = __webpack_require__(57);

	exports.default = angular.module('IMonitor.Monitor', ['ui.bootstrap']).controller('MonitorCtrl', _Monitor.MonitorController).controller('AlarmPolicyCtrl', _AlarmPolicy.AlarmPolicyController).controller('AliveMonitorCtrl', _AliveMonitor.AliveMonitorController).controller('BaseMonitorCtrl', _BaseMonitor.BaseMonitorController).controller('CustomMonitorCtrl', _CustomMonitor.CustomMonitorController).controller('HistoryMonitorCtrl', _HistoryMonitor.HistoryMonitorController).controller('LogMonitorCtrl', _LogMonitor.LogMonitorController);

/***/ },

/***/ 51:
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

/***/ 52:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 报警策略

	var AlarmPolicyController = exports.AlarmPolicyController = function () {
	    function AlarmPolicyController() {
	        _classCallCheck(this, AlarmPolicyController);

	        this.table = {};
	        this.table.data = [{
	            id: '0',
	            policyName: '测试CPU报警',
	            alarmGroup: 'Falcon_backend',
	            monitorItem: 'CPU_IDLE',
	            compare: '>=100百分率',
	            during: '60',
	            maxAlarmTime: '2',
	            isApply: '1'
	        }, {
	            id: '1',
	            policyName: '测试CPU报警',
	            alarmGroup: 'Falcon_backend',
	            monitorItem: 'CPU_IDLE',
	            compare: '>=100百分率',
	            during: '60',
	            maxAlarmTime: '2',
	            isApply: '1'
	        }, {
	            id: '2',
	            policyName: '测试CPU报警',
	            alarmGroup: 'Falcon_backend',
	            monitorItem: 'CPU_IDLE',
	            compare: '>=100百分率',
	            during: '60',
	            maxAlarmTime: '2',
	            isApply: '0'
	        }];
	    }

	    _createClass(AlarmPolicyController, [{
	        key: 'viewDetail',
	        value: function viewDetail(id) {
	            console.log('查看详情[' + id + ']');
	        }
	    }, {
	        key: 'editItem',
	        value: function editItem(id) {
	            console.log('编辑[' + id + ']');
	        }
	    }, {
	        key: 'deleteItem',
	        value: function deleteItem(id) {
	            console.log('删除[' + id + ']');
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
	        }
	    }]);

	    return AlarmPolicyController;
	}();

/***/ },

/***/ 53:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 存活监控

	var AliveMonitorController = exports.AliveMonitorController = function AliveMonitorController() {
	    _classCallCheck(this, AliveMonitorController);
	};

/***/ },

/***/ 54:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 基础监控

	var BaseMonitorController = exports.BaseMonitorController = function BaseMonitorController() {
	    _classCallCheck(this, BaseMonitorController);
	};

/***/ },

/***/ 55:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 自定义监控

	var CustomMonitorController = exports.CustomMonitorController = function CustomMonitorController() {
	    _classCallCheck(this, CustomMonitorController);
	};

/***/ },

/***/ 56:
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

/***/ 57:
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

/***/ }

});