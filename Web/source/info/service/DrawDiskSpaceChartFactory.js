export function DrawDiskSpaceChartFactory($http, $timeout, polling){
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
                name: '磁盘空间',
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: [{value: 50, name: '磁盘空间'}]
            }
        ]
    };
    return function (vm, reqData, clock) {
        vm.option = option;
        polling(()=>$timeout(()=>{
            vm.option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            vm.isUpdated = true;
        }, 500), clock, true)
    }
}
DrawDiskSpaceChartFactory.$inject = ['$http', '$timeout', 'polling'];