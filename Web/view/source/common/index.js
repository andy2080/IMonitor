import './style/style.css';
import { PollingFactory } from './service/PollingFactory'

export default angular
    .module('IMonitor.Common', [])
    .factory('polling', PollingFactory)