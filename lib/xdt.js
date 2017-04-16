'use strict';

var path = require('path'),
    exec = require('child_process').exec;
var xdtExe = '../bin/xdt.exe';
var chalk = require('chalk');

function xdtTransform (options,callback) {
    var xdtExePath = path.join(__dirname, xdtExe);
    var exec_command =  options.useMono === false
        ? [ xdtExePath ]
        : [ 'mono', xdtExePath ];
    exec_command.push(options.src);
    exec_command.push(options.transform);
    exec_command.push(options.dest);
    exec(exec_command.join(' '), function (error, stdout, stderr) {
        if (error) {
            console.error(chalk.red(error));
            callback(error);
        } else {
            console.log(chalk.green(stdout));
            callback();
        }
    });
};

module.exports = xdtTransform;
