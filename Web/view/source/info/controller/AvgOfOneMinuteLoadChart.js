export class AvgOfOneMinuteLoadController{
    constructor($http, $timeout){
        console.log('AvgOfOneMinuteLoadController');
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
        this.isUpdated = false;
        this.option = {
            title: { text: '一分钟平均负载(单位:个)' },
            legend: {
                left: 'right',
                data: ['平均负载']
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
                name: '平均负载',
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

AvgOfOneMinuteLoadController.$injector = ['$http', '$timeout'];