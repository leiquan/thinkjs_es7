'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      host: '45.32.22.14',
      port: '3306',
      database: 'think_js',
      user: 'root',
      password: '930102@root',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};