import './style/style.css';

let Router = ($urlRouterProvider, $stateProvider) => {
    $urlRouterProvider.when('/info', '/info/server');
    $stateProvider
        .state('info', {
            url: '/info',
            //controller: 'InfoCtrl as InfoVm',
            abstract: true,
            template: '<div ui-view></div>',
            resolve: {
                asyncLoadCtrl: ($q, $ocLazyLoad) => {
                    return $q(resolve => {
                        require.ensure([], () => {
                            let ngModule = require('./index').default;
                            $ocLazyLoad.load({name: ngModule.name});
                            resolve(ngModule.controller);
                        }, 'info.vm')
                    })
                }
            }
        })
        .state('info.users', {
            url: '/users',
            controller: 'UsersInfoCtrl as UsersInfoVm',
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/info.users.tpl'));
                    }, 'info.users.tpl');
                });
            }
        })
        .state('info.authority', {
            url: '/authority',
            controller: 'AuthorityInfoCtrl as AuthorityInfoVm',
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/info.authority.tpl'));
                    }, 'info.authority.tpl');
                });
            }
        })
        .state('info.server', {
            url: '/server',
            controller: 'ServerInfoCtrl as ServerInfoVm',
            templateProvider: $q => {
                return $q(resolve => {
                    require.ensure([], () => {
                        resolve(require('./template/info.server.tpl'));
                    }, 'info.server.tpl');
                });
            }
        })
};

Router.$inject = ['$urlRouterProvider', '$stateProvider'];

export default angular.module('IMonitor.InfoRouter', []).config(Router);