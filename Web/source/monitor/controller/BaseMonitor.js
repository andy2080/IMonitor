// 基础监控
export class BaseMonitorController{
  constructor($scope, $uibModal, $log, getBaseMonitorList){
    let vm = this;
    vm.$scope = $scope;
    vm.$uibModal = $uibModal;
    vm.$log = $log;
    this.table = {};
    getBaseMonitorList().then((list)=>this.table.data = list);
  }
  addPolicy(id){

  }
}
BaseMonitorController.$inject = ['$scope', '$uibModal', '$log', 'getBaseMonitorList'];