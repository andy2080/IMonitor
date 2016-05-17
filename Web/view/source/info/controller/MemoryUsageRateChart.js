export class MemoryUsageRateController{
    constructor(drawMemoryUsageRateChart){
        console.log('MemoryUsageRateController');
        let vm = this;
        vm.isUpdated = false;
        vm.option = {};
        drawMemoryUsageRateChart(vm, {serverId: 1}, 1000);
    }
}
MemoryUsageRateController.$injector = ['drawMemoryUsageRateChart'];