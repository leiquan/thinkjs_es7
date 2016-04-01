'use strict';

import Base from './base.js';

export default class extends Base {

  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    this.assign({'title': '前台-添加用户'});
    return this.display();
  }

}