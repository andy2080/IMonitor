export class AvgOfOneMinuteLoadController{
    constructor(drawAvgOfOneMinuteChart){
        console.log('AvgOfOneMinuteLoadController');
        let vm = this;
        vm.isUpdated = false;
        vm.option = {};
        drawAvgOfOneMinuteChart(vm, {serverId: 1}, 1000)
    }
}

AvgOfOneMinuteLoadController.$injector = ['drawAvgOfOneMinuteChart'];