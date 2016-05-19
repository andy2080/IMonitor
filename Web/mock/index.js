var thinkjs = require('thinkjs');
var path = require('path');

var rootPath = __dirname;

var instance = new thinkjs({
    APP_PATH: rootPath + path.sep + 'app',
    RUNTIME_PATH: rootPath + path.sep + 'runtime',
    ROOT_PATH: rootPath,
    RESOURCE_PATH: __dirname,
    env: 'mock'
});

//compile src/ to app/
instance.compile({
    log: true
});

instance.run();