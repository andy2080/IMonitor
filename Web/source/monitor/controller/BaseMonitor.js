// 基础监控
export class BaseMonitorController{
    constructor($scope, $uibModal, $log){
        let vm = this;
        vm.$scope = $scope;
        vm.$uibModal = $uibModal;
        vm.$log = $log;
        this.table = {
            data: [
                {
                    id: '1',
                    name: 'MEM_FREE',
                    alias: '剩余物理内存',
                    type: '常用基础项',
                    unit: 'KB',
                    period: '10',
                    status: '无效',
                    policy: '0/0'
                },
                {
                    id: '2',
                    name: 'MEM_URATE',
                    alias: '物理内存使用率',
                    type: '常用基础项',
                    unit: '百分率',
                    period: '10',
                    status: '正常',
                    policy: '4/1'
                }
            ]
        };
    }
    addPolicy(id){

    }
}
BaseMonitorController.$inject = ['$scope', '$uibModal', '$log'];