export class RootController{
    constructor($rootScope, $location, $state, getServerInfo){
        let vm = this;
        vm.$rootScope = $rootScope;
        vm.$location = $location;
        vm.$state = $state;

        vm.$rootScope.currentServer = {};

        vm.serverList = [];
        vm.breadcrumb = false;
        vm.sidebar = false;
        getServerInfo().then((list)=>{
            vm.serverList = list;
            if(!vm.$rootScope.currentServer.id){
                vm.$rootScope.currentServer = list[0];
            }
        });
        vm.$rootScope.$on('$stateChangeStart', function(event, toState){
            let breadcrumb = toState.data && toState.data.breadcrumb;
            if(breadcrumb){
                vm.breadcrumb = breadcrumb;
            }else{
                vm.breadcrumb = false;
            }
            let sidebar = toState.data && toState.data.sidebar;
            if(sidebar === false){
                vm.sidebar = false;
            }else{
                vm.sidebar = true;
            }
        })
    }
    toggleServer(id){
        let vm = this;
        if(vm.$rootScope.currentServer.id == id){
            return false;
        }
        for(let i = 0; i < vm.serverList.length; i++){
            if(vm.serverList[i].id == id){
                vm.$rootScope.currentServer = vm.serverList[i];
                break;
            }
        }
        vm.$state.transitionTo(vm.$state.current, {currentServer: id});
    }
}
RootController.$inject = ['$rootScope', '$location', '$state', 'getServerInfo'];