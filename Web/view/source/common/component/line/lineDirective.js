import echarts from 'echarts';
import LineController from './lineController';

export default class LineDirective{
    constructor(){
        this.restrict = 'EA';
        this.controller = LineController;
        this.controllerAs = 'LineVm';
        this.bindToController = true;
        this.scope = {
            width: '@mapWidth',
            height: '@mapHeight',
            title: '=mapTitle',
            baseOption: '=mapBaseOption',
            series: '=mapSeries'
        }
    }
    link(scope, element, attributes){
        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
                    Math.round(value)
                ]
            }
        }
        let data = [];
        let now = +new Date(1997, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let value = Math.random() * 1000;
        for (let i = 0; i < 1000; i++) {
            data.push(randomData());
        }
        let option = angular.extend({}, scope.LineVm.baseOption);
        option.series = [];
        scope.$watch('LineVm.series', function (newVal, oldVal) {

        });
        element.css({ width: scope.LineVm.width, height: scope.LineVm.height });
        var myChart = echarts.init(element[0]);
        myChart.setOption(option, true);

    }
}