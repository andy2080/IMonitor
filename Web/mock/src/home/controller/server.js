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
      'servers|1-6': [{
          "id|+1": 1,
          "name|1": "Server-@first"
      }]
    })

    this.success(data)
  }
}