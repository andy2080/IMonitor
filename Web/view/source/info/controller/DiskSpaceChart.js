export class DiskSpaceController {
    constructor(drawDiskSpaceChart){
        console.log('DistSpaceController');
        let vm = this;
        vm.isUpdated = false;
        vm.option = {};
        drawDiskSpaceChart(vm, {serverId: 1}, 1000);
    }
}

DiskSpaceController.$injector = ['drawDiskSpaceChart'];