import CommonModule from './common/index';

import HomeRouter from './home/router';
import HelpRouter from './help/router';
import InfoRouter from './info/router';
import MonitorRouter from './monitor/router';

let ngModules = [// 公共/第三方模块
    'ui.router',
    'oc.lazyLoad',
    'ui.bootstrap',
    CommonModule.name
];

;[HomeRouter, HelpRouter, InfoRouter, MonitorRouter]// 自定义模块
    .forEach(ngMod => { ngModules.push(ngMod.name) });

let DefaultRouter = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
};

DefaultRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('IMonitor', ngModules).config(DefaultRouter);