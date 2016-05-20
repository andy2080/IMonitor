webpackJsonp([9],{

/***/ 61:
/***/ function(module, exports) {

	module.exports = "<!--\n    存活监控\n    AliveMonitorVm\n-->\n<style>\n  .component-panel {\n    border-left: none;\n    border-right: none;\n    border-radius: 0;\n    box-shadow: 0 0 4px 2px rgba(0,0,0,.1);\n  }\n  .component-panel > .panel-heading {\n    background-color: #FFFFFF;\n  }\n  .component-panel > .panel-heading .iconfont {\n    font-size: 12px;\n  }\n  .component-panel-table {\n    border-bottom: 1px solid #ddd;\n  }\n  .component-panel-table > thead > tr > th, .component-panel-table > tbody > tr > td {\n    text-align: center;\n    vertical-align: middle;\n  }\n</style>\n<div class=\"panel panel-default component-panel\">\n  <div class=\"panel-heading clearfix\">\n    存活监控\n  </div>\n  <div class=\"panel-body\">\n    <p>存活监控是测试主机是否存活。</p>\n  </div>\n  <table class=\"table table-hover component-panel-table\">\n    <thead>\n    <tr>\n      <th>名称</th>\n      <th>别名</th>\n      <th>采集周期</th>\n      <th>操作</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng-repeat=\"data in AliveMonitorVm.table.data track by $index\">\n      <td>PING</td>\n      <td>存活监控</td>\n      <td>{{data.period}}</td>\n      <td>\n        <button class=\"btn btn-sm btn-default\" ng-click=\"AliveMonitorVm.addPolicy(data.id)\">修改采集周期</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>";

/***/ }

});