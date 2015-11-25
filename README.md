# Chmod plus

## Install

    npm install chmod-plus -g

## Usage

    var chmod-plus = require('chmod-plus');
    chmod-plus.directory(755, file);
    chmod-plus.file(755, dir);

Directories can also be recursive:

    chmod-plus.directory(755, file, {
        recursive: true
    });

## LISENCE

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
