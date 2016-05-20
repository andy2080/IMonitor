export function GetUsersListFactory($http, $q){
  return (reqData)=>$http({
    url: '/users/list',
    method: 'GET',
    data: reqData
  }).then((res)=>{
    let data = res.data;
    if(data.errno == 0){
      return $q.resolve(data.data.list)
    }
  }).catch((err)=>{

  })
}
GetUsersListFactory.$inject = ['$http', '$q'];