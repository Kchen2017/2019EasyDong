/**
 * Created by wangchao on 4/15/15.
 */
'use strict';

var config = require('config');

var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' }
    ],
    replaceConsole: true
});

exports.getLogger=function(name){
    console.log("getLogger name:" + name);
    var logger = log4js.getLogger(name);
    logger.setLevel(config.get('logLevel'));
    return logger;
};
