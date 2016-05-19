import './style/style.css';
import { RootController } from './controller/RootCtrl'
import { PollingFactory } from './service/PollingFactory';
import { HttpInterceptorFactory } from './service/HttpInterceptorFactory';
import { GetServerInfoFactory } from './service/GetServerInfoFactory';

export default angular
  .module('IMonitor.Common', [])
  .controller('RootCtrl', RootController)
  .factory('getServerInfo', GetServerInfoFactory)
  .factory('httpInterceptor', HttpInterceptorFactory)
  .factory('polling', PollingFactory)
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
  }])