# Chmod plus

## Install

    npm install chmod-plus -g

## Usage

    var chmod-plus = require('chmod-plus');
    chmod-plus.directory(755, dir);
    chmod-plus.file(755, file);

Directories can also be recursive:

    chmod-plus.directory(755, dir, {
        recursive: true
    });

## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
