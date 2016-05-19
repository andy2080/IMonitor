// 自定义监控
export class CustomMonitorController{
    constructor($scope, $uibModal, $log){
        let vm = this;
        vm.$scope = $scope;
        vm.$uibModal = $uibModal;
        vm.$log = $log;
        vm.table = {
            data: [
                {
                    id: '1',
                    name: 'MySQL连接数',
                    shell_path: '/home/monitor/mysql-conn.sh',
                    account: 'tester',
                    period: '10',
                    status: 1,
                    policy: '0/0'
                }
            ]
        };
    }
    toggleApply(id){
        let vm = this;
        for(let i = 0, len = vm.table.data.length; i<len; i ++){
            if(vm.table.data[i].id == id){
                vm.table.data[i].status = vm.table.data[i].isApply == 1 ? 0 : 1;
                break;
            }
        }
    }
    addCustomMonitor(){

    }
    editMonitor(){

    }
    deleteMonitor(){

    }
    addPolicy(){

    }
    downloadShell(){

    }
}