'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let model = this.model("user");
        let result = await model.getAll();
        this.assign({'title': '前台-添加用户', 'list': result});
        return this.display();
    }

}