export class NumOfBlockProcessController{
    constructor(drawNumOfBlockProcessChart){
        console.log('NumOfBlockProcessController');
        let vm = this;
        vm.isUpdated = false;
        vm.option = {};
        drawNumOfBlockProcessChart(vm, {serverId: 1}, 1000);
    }
}

NumOfBlockProcessController.$injector = ['drawNumOfBlockProcessChart'];