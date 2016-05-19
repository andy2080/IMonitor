export function GetAlarmPolicyListFactory($http, $q){
  return (reqData)=>$http({
    url: '/alarmpolicy/list',
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
GetAlarmPolicyListFactory.$inject = ['$http', '$q'];