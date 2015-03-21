var path = require("path"),
    glob = require("glob");

function requirer(pattern) {
    var modules = {},
        files = glob.sync(pattern);

    files.forEach(function(currentFile) {
        var fileName = path.basename(currentFile);
        fileName = fileName.substring(0, fileName.lastIndexOf(".js"));
        modules[fileName] = require(currentFile);
    });

    return modules;
}

module.exports = requirer;
