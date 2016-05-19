export function GetBaseMonitorListFactory($http, $q){
  return (reqData)=>$http({
    url: '/basemonitor/list',
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
GetBaseMonitorListFactory.$inject = ['$http', '$q'];