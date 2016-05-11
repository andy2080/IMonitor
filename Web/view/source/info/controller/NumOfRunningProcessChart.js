export class NumOfRunningProcessController{
    constructor($http, $timeout){
        console.log('NumOfRunningProcessController');
        let vm = this;
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
        for (var i = 0; i < 1000; i++) {
            data.push(randomData());
        }
        vm.isUpdated = false;
        vm.option = {
            title: { text: '运行进程数(单位:个)' },
            legend: {
                left: 'right',
                data: ['进程数']
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    var val = params[0].value;
                    return val[0] + ': ' + val[1] + '个';
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: { show: false }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: { show: false }
            },
            series: [{
                name: '进程数',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
        };

        ;(function repeat(){
            $timeout(()=>{
                for (var i = 0; i < 5; i++) {
                    data.shift();
                    data.push(randomData());
                }
                vm.isUpdated = true;
                repeat();
            }, 1000);
        }());
    }
}

NumOfRunningProcessController.$injector = ['$http', '$timeout'];