export function GetAlarmPolicyListFactory($http, $q){
    return (reqData)=>$http({
        url: './json/alarmPolicy_list.json',
        method: 'GET',
        data: reqData
    }).then((res)=>{
        let data = res.data;
        if(data.status == 0){
            return $q.resolve(data.data)
        }
    }).catch((err)=>{

    })
}
GetAlarmPolicyListFactory.$inject = ['$http', '$q'];