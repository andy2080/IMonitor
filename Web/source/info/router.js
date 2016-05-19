import './style/style.css';

let Router = ($urlRouterProvider, $stateProvider) => {
  $urlRouterProvider.when('/info', '/info/server');
  $stateProvider
    .state('info', {
      url: '/info',
      controller: 'InfoCtrl as InfoVm',
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
      url: '/users/:currentServer',
      controller: 'UsersInfoCtrl as UsersInfoVm',
      data: { breadcrumb: ['基础信息', '用户信息'] },
      templateProvider: $q => {
        return $q(resolve => {
          require.ensure([], () => {
            resolve(require('./template/info.users.tpl'));
          }, 'info.users.tpl');
        });
      }
    })
    .state('info.authority', {
      url: '/authority/:currentServer',
      controller: 'AuthorityInfoCtrl as AuthorityInfoVm',
      data: { breadcrumb: ['基础信息', '用户权限'] },
      templateProvider: $q => {
        return $q(resolve => {
          require.ensure([], () => {
            resolve(require('./template/info.authority.tpl'));
          }, 'info.authority.tpl');
        });
      }
    })
    .state('info.server', {
      url: '/server/:currentServer',
      controller: 'ServerInfoCtrl as ServerInfoVm',
      data: { breadcrumb: ['基础信息', '服务器信息'] },
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