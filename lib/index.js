(function() {
  var greet;

  module.exports = greet = function(name, drunk) {
    if (drunk) {
      return "hello " + name + ", you look sexy today";
    } else {
      return "hello, " + name;
    }
  };

}).call(this);
