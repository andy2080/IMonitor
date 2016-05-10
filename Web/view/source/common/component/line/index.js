import LineDirective from './lineDirective';

export default angular
    .module('imMap.Line', [])
    .directive('imMapLine', ()=>new LineDirective);