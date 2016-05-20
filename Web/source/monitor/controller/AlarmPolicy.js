import addAlarmPolicyWindowTpl from '../template/addAlarmPolicy-window.tpl';
import delAlarmPolicyWindowTpl from '../template/deleteAlarmPolicy-window.tpl';
// 报警策略
export class AlarmPolicyController{
  constructor($scope, $stateParams, $uibModal, $log, getAlarmPolicyList){
    let vm = this;
    vm.$scope = $scope;
    vm.$uibModal = $uibModal;
    vm.$log = $log;
    vm.table = {};
    vm.currentServer = $stateParams.currentServer;
    if(vm.currentServer){
      getAlarmPolicyList({serverId: vm.currentServer}).then((data)=>{
        vm.table.data = data;
      })
    }
  }
  addAlarmPolicy(){
    let vm = this;
    var modalInstance = vm.$uibModal.open({
      animation: true,
      template: addAlarmPolicyWindowTpl,
      controller: AddAlarmPolicyWindowController,
      controllerAs: 'AddAlarmPolicyWindowVm',
      resolve: {}
    });

    modalInstance.result.then(function () {
      vm.$log.info('ok');
    }, function () {
      vm.$log.info('Modal dismissed at: ' + new Date());
    });
  }
  viewDetail(id){
    console.log('查看详情[' + id +']')
  }
  editAlarmPolicy(id){
    console.log('编辑[' + id +']')
    let vm = this;
    var modalInstance = vm.$uibModal.open({
      animation: true,
      template: addAlarmPolicyWindowTpl,
      controller: AddAlarmPolicyWindowController,
      controllerAs: 'AddAlarmPolicyWindowVm',
      resolve: {
        items: function () {
          return vm.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      vm.selected = selectedItem;
    }, function () {
      vm.$log.info('Modal dismissed at: ' + new Date());
    });
  }
  deleteItem(id){
    console.log('删除[' + id +']')
    let vm = this;
    var modalInstance = vm.$uibModal.open({
      animation: true,
      template: delAlarmPolicyWindowTpl,
      controller: DelAlarmPolicyWindowController,
      controllerAs: 'DelAlarmPolicyWindowVm',
    });

    modalInstance.result.then(function (selectedItem) {
      vm.$log.info('Modal ok at: ' + new Date());
    }, function () {
      vm.$log.info('Modal dismissed at: ' + new Date());
    });
  }
  toggleApply(id){
    console.log('应用[' + id +']');
    for(let i = 0, len = this.table.data.length; i<len; i ++){
      if(this.table.data[i].id == id){
        this.table.data[i].isApply = this.table.data[i].isApply == 1 ? 0 : 1;
        break;
      }
    }
  }
}

AlarmPolicyController.$inject = ['$scope', '$stateParams', '$uibModal', '$log', 'getAlarmPolicyList'];

class AddAlarmPolicyWindowController {
  constructor($scope, $uibModalInstance){
    let vm = this;
    vm.$scope = $scope;
    vm.$uibModalInstance = $uibModalInstance;
  }
  ok(){
    this.$uibModalInstance.close('ok');
  }
  cancel(){
    this.$uibModalInstance.dismiss('cancel');
  }
}

AddAlarmPolicyWindowController.$inject = ['$scope', '$uibModalInstance'];

class DelAlarmPolicyWindowController {
  constructor($scope, $uibModalInstance){
    let vm = this;
    vm.$scope = $scope;
    vm.$uibModalInstance = $uibModalInstance;
  }
  ok(){
    this.$uibModalInstance.close('ok');
  }
  cancel(){
    this.$uibModalInstance.dismiss('cancel');
  }
}

DelAlarmPolicyWindowController.$inject = ['$scope', '$uibModalInstance'];