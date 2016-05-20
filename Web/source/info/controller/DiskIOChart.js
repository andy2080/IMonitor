export class DiskIOController{
  constructor(drawDiskIOChart){
    console.log('DiskIOController');
    let vm = this;
    vm.isUpdated = false;
    vm.option = {};
    drawDiskIOChart(vm, {serverId: 1}, true)
  }
}

DiskIOController.$injector = ['drawDiskIOChart'];