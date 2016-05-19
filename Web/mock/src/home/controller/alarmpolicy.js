'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    //return this.display();
  }

  listAction(){
    this.success({
      "list": [
        {
          "id": "0",
          "policyName": "测试CPU报警",
          "alarmGroup": "Falcon_backend",
          "monitorItem": "CPU_IDLE",
          "compare": ">=100百分率",
          "during": "60",
          "maxAlarmTime": "2",
          "isApply": "1"
        },
        {
          "id": "1",
          "policyName": "测试CPU报警",
          "alarmGroup": "Falcon_backend",
          "monitorItem": "CPU_IDLE",
          "compare": ">=100百分率",
          "during": "60",
          "maxAlarmTime": "2",
          "isApply": "1"
        },
        {
          "id": "2",
          "policyName": "测试CPU报警",
          "alarmGroup": "Falcon_backend",
          "monitorItem": "CPU_IDLE",
          "compare": ">=100百分率",
          "during": "60",
          "maxAlarmTime": "2",
          "isApply": "0"
        }
      ]
    })
  }
}