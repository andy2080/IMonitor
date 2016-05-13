import addAlarmPolicyWindowTpl from '../template/addAlarmPolicy-window.tpl';
import delAlarmPolicyWindowTpl from '../template/deleteAlarmPolicy-window.tpl';
// 报警策略
export class AlarmPolicyController{
    constructor($scope, $uibModal, $log){
        let vm = this;
        vm.$scope = $scope;
        vm.$uibModal = $uibModal;
        vm.$log = $log;
        this.table = {};
        this.table.data = [
            {
                id: '0',
                policyName: '测试CPU报警',
                alarmGroup: 'Falcon_backend',
                monitorItem: 'CPU_IDLE',
                compare: '>=100百分率',
                during: '60',
                maxAlarmTime: '2',
                isApply: '1'
            },
            {
                id: '1',
                policyName: '测试CPU报警',
                alarmGroup: 'Falcon_backend',
                monitorItem: 'CPU_IDLE',
                compare: '>=100百分率',
                during: '60',
                maxAlarmTime: '2',
                isApply: '1'
            },
            {
                id: '2',
                policyName: '测试CPU报警',
                alarmGroup: 'Falcon_backend',
                monitorItem: 'CPU_IDLE',
                compare: '>=100百分率',
                during: '60',
                maxAlarmTime: '2',
                isApply: '0'
            }
        ];

        // 添加报警策略
        vm.items = ['item1', 'item2', 'item3'];
    }
    addAlarmPolicy(){
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
    setException(id){
        console.log('设置例外[' + id +']')
    }
    toggleApply(id){
        console.log('应用[' + id +']')
        for(let i = 0, len = this.table.data.length; i<len; i ++){
            if(this.table.data[i].id == id){
                this.table.data[i].isApply = this.table.data[i].isApply == 1 ? 0 : 1;
                debugger;
                break;
            }
        }
    }
}

AlarmPolicyController.$inject = ['$scope', '$uibModal', '$log'];

class AddAlarmPolicyWindowController {
    constructor($scope, $uibModalInstance, items){
        let vm = this;
        vm.$scope = $scope;
        vm.items = items;
        vm.$uibModalInstance = $uibModalInstance;
        vm.selected = {
            item: vm.items[0]
        };
    }
    ok(){
        this.$uibModalInstance.close(this.selected.item);
    }
    cancel(){
        this.$uibModalInstance.dismiss('cancel');
    }
}

AddAlarmPolicyWindowController.$inject = ['$scope', '$uibModalInstance', 'items'];

class DelAlarmPolicyWindowController {
    constructor($scope, $uibModalInstance){
        let vm = this;
        vm.$scope = $scope;
        vm.$uibModalInstance = $uibModalInstance;
    }
    ok(){
        this.$uibModalInstance.close(this.selected.item);
    }
    cancel(){
        this.$uibModalInstance.dismiss('cancel');
    }
}

DelAlarmPolicyWindowController.$inject = ['$scope', '$uibModalInstance'];