export function HttpInterceptorFactory($q, $injector){
  return {
    'request': function (config) {
      return config;
    },
    'response': function (response) {
      return response;
    },
    'responseError': function (response) {
      return $q.reject(response);
    }
  }
}

HttpInterceptorFactory.$injector = ['$q', '$injector'];