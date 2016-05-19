import editUserWindowTpl from '../template/editUser-window.tpl';

export class UsersInfoController{
    constructor($uibModal, $log){
        let vm = this;
        vm.$uibModal = $uibModal;
        vm.$log = $log;
        vm.table = {
            data: [{
                id: 1,
                loginName: 'David',
                cnName: '大卫',
                email: 'david@gmail.com',
                phone: '15530008080',
                status: '正常',
                limit: '系统管理员'
            }]
        }
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
UsersInfoController.$inject = ['$uibModal', '$log']

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