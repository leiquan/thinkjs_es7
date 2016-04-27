'use strict';
/**
 * rest controller
 * @type {Class}
 */
export default class extends think.controller.rest {
  /**
   * init
   * @param  {Object} http []
   * @return {}      []
   */
  init(http){
    super.init(http);
    this._method = "_method"; //指定请求类型从 GET 参数 _method 里获取,用于处理不支持 delete 操作的客户端
  }
  /**
   * before magic method
   * @return {Promise} []
   */
  __before(){
    
  }
}