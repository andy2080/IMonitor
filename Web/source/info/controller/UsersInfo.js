import editUserWindowTpl from '../template/editUser-window.tpl';

export class UsersInfoController{
  constructor($uibModal, $log, getUsersList, addServerUser, editServerUser){
    let vm = this;
    vm.$uibModal = $uibModal;
    vm.$log = $log;
    vm.table = {};
    getUsersList().then((list)=>vm.table.data = list);
  }
  editUser(id){
    let vm = this;
    var modalInstance = vm.$uibModal.open({
      animation: true,
      template: editUserWindowTpl,
      controller: EditUserWindowController,
      controllerAs: 'EditUserWindowVm',
    });

    modalInstance.result.then(function () {
      vm.$log.info('Modal ok at: ' + new Date());
    }, function () {
      vm.$log.info('Modal dismissed at: ' + new Date());
    });
  }
}
UsersInfoController.$inject = ['$uibModal', '$log', 'getUsersList', 'addServerUser', 'editServerUser'];

class EditUserWindowController{
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

EditUserWindowController.$inject = ['$scope', '$uibModalInstance'];