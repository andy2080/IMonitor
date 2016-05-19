export class EthernetFlowController{
    constructor(drawEthernetFlowChart){
        console.log('EthernetFlowController');
        let vm = this;
        vm.isUpdated = false;
        vm.option = {};
        drawEthernetFlowChart(vm, {serverId: 1}, 1000);
    }
}

EthernetFlowController.$injector = ['drawEthernetFlowChart'];