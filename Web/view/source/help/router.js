import './style/style.css';

let Router = ($urlRouterProvider, $stateProvider) => {
    $stateProvider.state('help', {
        url: '/help',
        controller: 'HelpCtrl as HelpVm',
        templateProvider: $q => {
            return $q(resolve => {
                require.ensure([], () => {
                    resolve(require('./template/help.tpl'));
                }, 'help.tpl');
            });
        },
        resolve: {
            asyncLoadCtrl: ($q, $ocLazyLoad) => {
                return $q(resolve => {
                    require.ensure([], () => {
                        let ngModule = require('./index').default;
                        $ocLazyLoad.load({name: ngModule.name});
                        resolve(ngModule.controller);
                    }, 'help.vm')
                })
            }
        }
    });
};

Router.$inject = ['$urlRouterProvider', '$stateProvider'];

export default angular.module('IMonitor.HelpRouter', []).config(Router);