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
      "servers": [
        {
          "id": 1,
          "name": "Server-1234"
        },
        {
          "id": 2,
          "name": "Server-2234"
        }
      ]
    })
  }
}