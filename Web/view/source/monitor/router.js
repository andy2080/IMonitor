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
            url: '/alarmPolicy',
            controller: 'AlarmPolicyCtrl as AlarmPolicyVm',
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/monitor.alarmPolicy.tpl'));
                    }, 'monitor.alarmPolicy.tpl');
                });
            }
        })
        .state('monitor.alive', {
            url: '/alive',
            controller: 'AliveMonitorCtrl as AliveMonitorVm',
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/monitor.alive.tpl'));
                    }, 'monitor.alive.tpl');
                });
            }
        })
        .state('monitor.base', {
            url: '/base',
            controller: 'BaseMonitorCtrl as BaseMonitorVm',
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/monitor.base.tpl'));
                    }, 'monitor.base.tpl');
                });
            }
        })
        .state('monitor.custom', {
            url: '/custom',
            controller: 'CustomMonitorCtrl as CustomMonitorVm',
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/monitor.custom.tpl'));
                    }, 'monitor.custom.tpl');
                });
            }
        })
        .state('monitor.log', {
            url: '/log',
            controller: 'LogMonitorCtrl as LogMonitorVm',
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/monitor.log.tpl'));
                    }, 'monitor.log.tpl');
                });
            }
        })
        .state('monitor.history', {
            url: '/history',
            controller: 'HistoryMonitorCtrl as HistoryMonitorVm',
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