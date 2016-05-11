export class DistSpaceController {
    constructor($http, $timeout){
        console.log('DistSpaceController');
        let vm = this;
        vm.isUpdated = false;
        vm.option = {
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

        ;(function repeat(){
            $timeout(()=>{
                vm.option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                vm.isUpdated = true;
                repeat();
            }, 2000);
        }());
    }
}

DistSpaceController.$injector = ['$http', '$timeout'];