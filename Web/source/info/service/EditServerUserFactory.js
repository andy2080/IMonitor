export function EditServerUserFactory($http, $q){
  return (reqData)=>$http({
    url: '/users/edit',
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
EditServerUserFactory.$inject = ['$http', '$q'];