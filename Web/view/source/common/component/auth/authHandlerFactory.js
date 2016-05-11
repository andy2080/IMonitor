export default class authHandlerFactory{
    constructor($q, $injector){
        this.$q = $q;
        this.$injector = $injector;
    }
    responseError(rejection){
        if(rejection.status == 401){// unauthorized
            // 登录
            return $http(rejection.config);
        } else {
            // 其他拦截器
            return $q.reject(rejection);
        }
    }

}