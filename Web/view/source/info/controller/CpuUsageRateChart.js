export class CpuUsageRateController{
    constructor(drawCpuUsageRateChart){
        console.log('CpuUsageRateController');
        let vm = this;
        vm.isUpdated = false;
        vm.option = {};
        drawCpuUsageRateChart(vm, {serverId: 1}, 1000);
    }
}

CpuUsageRateController.$injector = ['drawCpuUsageRateChart'];