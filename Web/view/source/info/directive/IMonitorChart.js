import echarts from 'echarts';

class IMonitorChartController {
    constructor() {
        console.log('IMonitorChartController');
        let vm = this;
        if(typeof vm.isUpdated === 'undefined') vm.isUpdated = false;
        if(typeof vm.option === 'undefined') vm.option = {};
        if(typeof vm.chartWidth === 'undefined') vm.chartWidth = '500px';
        if(typeof vm.chartHeight === 'undefined') vm.chartHeight = '300px';
    }
}

export class IMonitorChartDirective {
    constructor(){
        console.log('IMonitorChartDirective');
        let vm = this;
        vm.restrict = 'EA';
        vm.controller = IMonitorChartController;
        vm.replace = true;
        vm.controllerAs = 'vm';
        vm.bindToController = true;
        vm.scope = {
            option: '=',
            isUpdated: '=',
            chartWidth: '@',
            chartHeight: '@'
        };
    }
    link(scope, element, attributes){
        let myChart = null;
        element.css({
            width: scope.vm.chartWidth,
            height: scope.vm.chartHeight
        });
        myChart = echarts.init(element[0]);
        myChart.setOption(scope.vm.option, true);
        scope.$watch('vm.isUpdated', function (newVal) {
            if(!newVal) return false;
            myChart.setOption(scope.vm.option);
            scope.vm.isUpdated = false;
        });
    }
}