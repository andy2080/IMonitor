import GaugeModule from './gauge/index';
import LineModule from './line/index';

export default angular.module('imMap', [
    GaugeModule.name,
    LineModule.name
]);