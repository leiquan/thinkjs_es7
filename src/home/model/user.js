'use strict';
/**
 * model
 */
export default class extends think.model.base {

    getAll(){
        return this.table('user', true).select();
    }

}