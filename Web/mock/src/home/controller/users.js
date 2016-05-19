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
      'list|1-9': [{
        'id|+1': 1,
        'loginName|1': '@name',
        'cnName|1': '@cname',
        'email|1': '@email',
        'phone|1': '15530008080',
        'status|1': ['正常', '异常'],
        'limit|1': ['系统管理员', '普通管理员']
      }]
    })

    this.success(data)
  }

  addAction(){

  }

  editAction(){

  }
}