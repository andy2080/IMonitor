'use strict';

import Mock from 'mockjs';
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

    let data = Mock.mock({
      'list|1-8': [{
        'id|+1': 1,
        'policyName|2': '@first',
        'alarmGroup|2': '@first',
        'monitorItem|2': '@first',
        'compare|1': ['>=100百分率', '>60秒', '>=66MB'],
        'during|1-60': 1,
        'maxAlarmTime|1-5': 1,
        'isApply|1': [0, 1]
      }]
    })

    this.success(data)
  }
}