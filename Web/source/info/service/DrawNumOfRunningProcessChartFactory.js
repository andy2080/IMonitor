export function DrawNumOfRunningProcessChartFactory($http, $timeout, polling){
    let option = {
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
            data: []
        }]
    };
    return function (vm, reqData, clock) {
        /*return $http({
         method:'GET',
         url:'./json/CpuUsageRate.json',
         data: reqData
         }).then((res) => {
         // 处理数据
         vm.isUpdated = true;
         }).catch((res) => {
         // 处理错误
         })*/
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
        vm.option = option;
        vm.option.series[0].data = data;
        polling(()=>$timeout(()=>{
            for (var i = 0; i < 5; i++) {
                data.shift();
                data.push(randomData());
            }
            vm.isUpdated = true;
        }, 500), clock, true);
    }
}
DrawNumOfRunningProcessChartFactory.$inject = ['$http', '$timeout', 'polling'];