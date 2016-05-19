import './style/style.css';

let Router = ($urlRouterProvider, $stateProvider) => {
    $stateProvider
        .state('monitor', {
            url: '/monitor',
            abstract: true,
            controller: 'MonitorCtrl as MonitorVm',
            template: '<div ui-view></div>',
            resolve: {
                asyncLoadCtrl: ($q, $ocLazyLoad) => {
                    return $q(resolve => {
                        require.ensure([], () => {
                            let ngModule = require('./index').default;
                            $ocLazyLoad.load({name: ngModule.name});
                            resolve(ngModule.controller);
                        }, 'monitor.vm')
                    })
                }
            }
        })
        .state('monitor.alarmPolicy', {
            url: '/alarmPolicy/:currentServer',
            controller: 'AlarmPolicyCtrl as AlarmPolicyVm',
            data: { breadcrumb: ['监控系统', '报警策略'] },
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/monitor.alarmPolicy.tpl'));
                    }, 'monitor.alarmPolicy.tpl');
                });
            }
        })
        .state('monitor.alive', {
            url: '/alive/:currentServer',
            controller: 'AliveMonitorCtrl as AliveMonitorVm',
            data: { breadcrumb: ['监控系统', '存活监控'] },
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/monitor.alive.tpl'));
                    }, 'monitor.alive.tpl');
                });
            }
        })
        .state('monitor.base', {
            url: '/base/:currentServer',
            controller: 'BaseMonitorCtrl as BaseMonitorVm',
            data: { breadcrumb: ['监控系统', '基础监控'] },
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/monitor.base.tpl'));
                    }, 'monitor.base.tpl');
                });
            }
        })
        .state('monitor.custom', {
            url: '/custom/:currentServer',
            controller: 'CustomMonitorCtrl as CustomMonitorVm',
            data: { breadcrumb: ['监控系统', '自定义监控'] },
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/monitor.custom.tpl'));
                    }, 'monitor.custom.tpl');
                });
            }
        })
        .state('monitor.log', {
            url: '/log/:currentServer',
            controller: 'LogMonitorCtrl as LogMonitorVm',
            data: { breadcrumb: ['监控系统', '日志监控'] },
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/monitor.log.tpl'));
                    }, 'monitor.log.tpl');
                });
            }
        })
        .state('monitor.history', {
            url: '/history/:currentServer',
            controller: 'HistoryMonitorCtrl as HistoryMonitorVm',
            data: { breadcrumb: ['监控系统', '历史监控'] },
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/monitor.history.tpl'));
                    }, 'monitor.history.tpl');
                });
            }
        })
};

Router.$inject = ['$urlRouterProvider', '$stateProvider'];

export default angular.module('IMonitor.MonitorRouter', []).config(Router);