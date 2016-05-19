export function GetServerInfoFactory($http, $q){
    return ()=>$http({
        url: './json/server_list.json',
        method: 'GET'
    }).then((res)=>{
        let data = res.data;
        if(data.status == 0){
            return $q.resolve(data.servers);
        }
    }).catch((res)=>{

    })
}