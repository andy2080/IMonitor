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
        'name|1': '@first',
        'alias|1': '@first',
        'type|1': '@last',
        'unit|1': ['KB', 'MB', '秒'],
        'period|10-60': 10,
        'status|1': ['无效', '活跃'],
      }]
    })

    this.success(data)

  }
}