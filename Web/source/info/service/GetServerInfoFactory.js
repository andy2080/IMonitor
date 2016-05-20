export function GetServerInfoFactory($http, $q){
  return (reqData) => $http({
    url: '/server/info',
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