var path = require("path"),
    glob = require("glob");

function requirer(pattern, options) {
    var modules = {},
        files;

    if (typeof pattern !== "string" || !(pattern = pattern.trim())) {
        throw new Error("Pattern must be a valid String");
    }

    if (arguments.length === 2)

    if (Object.prototype.toString.call(options) === "[object Object]") {
        throw new Error("Options must be a valid Object");
    }

    files = glob.sync(pattern, options);

    files.forEach(function(currentFile) {
        var fileName = path.basename(currentFile);
        fileName = fileName.substring(0, fileName.lastIndexOf(".js"));
        modules[fileName] = require(currentFile);
    });

    return modules;
}

module.exports = requirer;