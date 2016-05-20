export function AddServerUserFactory($http, $q){
  return (reqData)=>$http({
    url: '/users/add',
    method: 'POST',
    data: reqData
  }).then((res)=>{
    let data = res.data;
    if(data.errno == 0){
      return $q.resolve(data.data.list)
    }
  }).catch((err)=>{

  })
}
AddServerUserFactory.$inject = ['$http', '$q'];