import echarts from 'echarts';
import GaugeController from './gaugeController';

export default class GaugeDirective {
    constructor() {
        this.restrict = 'EA';

        this.controller = GaugeController;
        this.controllerAs = 'GaugeVm';
        this.bindToController = true;
        this.scope = {
            'width': '@mapWidth',
            'height': '@mapHeight',
            'val': '='
        };

    }
    link(scope, element, attributes) {
        let option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 0, name: '完成率'}]
                },
            ]
        };
        element.css({ width: scope.GaugeVm.width, height: scope.GaugeVm.height });
        var myChart = echarts.init(element[0]);
        scope.$watch('GaugeVm.val', function (newVal) {
            newVal = newVal || 0;
            option.series[0].data[0].value = newVal;
            myChart.setOption(option, true);
        })
    }
}