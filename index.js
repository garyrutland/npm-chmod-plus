'use strict';

var fs = require('fs');
var path = require('path');

exports.directory = function(mode, dir, options) {
    dir = path.normalize(dir);

    validateMode(mode);
    validatePath(dir);

    changePermissions(mode, dir);
    if (typeof options !== 'undefined') {
        if (typeof options.recursive !== 'undefined' && options.recursive === true) {
            readDir(mode, dir);
        }
    }
}

exports.file = function(mode, file) {
    validateMode(mode);
    validatePath(file);

    changePermissions(mode, file);
}

function validateMode(mode) {
    if (typeof mode !== 'number') {
        throw new TypeError('Expected a number for mode');
    }
}

function validatePath(path) {
    fs.access(path, fs.F_OK, function (err) {
        if (err) throw err;
    });
}

function readDir(mode, dir, root) {
    if (root !== dir) root = dir;

    var files = fs.readdirSync(dir);
    for (var i in files) {
        var file = path.join(root, files[i]);
        var stats = fs.statSync(file);

        changePermissions(mode, file);

        if (stats.isDirectory()) {
            readDir(mode, file, root);
        }
    }

}

function changePermissions(mode, path) {
    fs.chmodSync(path, parseInt(mode, 8));
}
