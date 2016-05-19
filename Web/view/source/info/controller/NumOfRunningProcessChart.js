export class NumOfRunningProcessController{
    constructor(drawNumOfRunningProcessChart){
        console.log('NumOfRunningProcessController');
        let vm = this;
        vm.isUpdated = false;
        vm.option = {};
        drawNumOfRunningProcessChart(vm, {serverId: 1}, 1000);
    }
}
NumOfRunningProcessController.$injector = ['drawNumOfRunningProcessChart'];