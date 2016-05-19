export function GetServerInfoFactory($http, $q){
  return ()=>$http({
    url: '/server/list',
    method: 'GET'
  }).then((res)=>{
    let data = res.data;
    if(data.errno == 0){
      return $q.resolve(data.data.servers);
    }
  }).catch((res)=>{

  })
}