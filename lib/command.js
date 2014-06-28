(function() {
  var greet, parseArgs;

  parseArgs = require("minimist");

  greet = require("../lib/index");

  module.exports = function() {
    var argv;
    argv = parseArgs(process.argv.slice(2));
    return console.log(greet(argv._[0], argv.drunk));
  };

}).call(this);
