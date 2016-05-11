// 报警策略
export class AlarmPolicyController{
    constructor(){
        this.table = {};
        this.table.data = [
            {
                id: '0',
                policyName: '测试CPU报警',
                alarmGroup: 'Falcon_backend',
                monitorItem: 'CPU_IDLE',
                compare: '>=100百分率',
                during: '60',
                maxAlarmTime: '2',
                isApply: '1'
            },
            {
                id: '1',
                policyName: '测试CPU报警',
                alarmGroup: 'Falcon_backend',
                monitorItem: 'CPU_IDLE',
                compare: '>=100百分率',
                during: '60',
                maxAlarmTime: '2',
                isApply: '1'
            },
            {
                id: '2',
                policyName: '测试CPU报警',
                alarmGroup: 'Falcon_backend',
                monitorItem: 'CPU_IDLE',
                compare: '>=100百分率',
                during: '60',
                maxAlarmTime: '2',
                isApply: '0'
            }
        ]
    }
    viewDetail(id){
        console.log('查看详情[' + id +']')
    }
    editItem(id){
        console.log('编辑[' + id +']')
    }
    deleteItem(id){
        console.log('删除[' + id +']')
    }
    setException(id){
        console.log('设置例外[' + id +']')
    }
    toggleApply(id){
        console.log('应用[' + id +']')
    }

}