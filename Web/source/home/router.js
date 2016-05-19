import './style/style.css';

let Router = ($urlRouterProvider, $stateProvider) => {
  $stateProvider.state('home', {
    url: '/home',
    controller: 'HomeCtrl as HomeVm',
    data: { sidebar: false },
    templateProvider: $q => {
      return $q(resolve => {
        require.ensure([], () => {
          resolve(require('./template/home.tpl'));
        }, 'home.tpl');
      });
    },
    resolve: {
      asyncLoadCtrl: ($q, $ocLazyLoad) => {
        return $q(resolve => {
          require.ensure([], () => {
            let ngModule = require('./index').default;
            $ocLazyLoad.load({name: ngModule.name});
            resolve(ngModule.controller);
          }, 'home.vm')
        })
      }
    }
  });
};

Router.$inject = ['$urlRouterProvider', '$stateProvider'];

export default angular.module('IMonitor.HomeRouter', []).config(Router);