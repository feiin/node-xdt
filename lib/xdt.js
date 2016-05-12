'use strict';

var path = require('path'),
    exec = require('child_process').exec;
var xdtExe = '../bin/xdt.exe';
var chalk = require('chalk');

function xdtTransform (source,transform,des,callback) {
    var xdtExePath = path.join(__dirname, xdtExe);
    var exec_command = [
        'mono',
        xdtExePath
    ];
    exec_command.push(source);
    exec_command.push(transform);
    exec_command.push(des);
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
