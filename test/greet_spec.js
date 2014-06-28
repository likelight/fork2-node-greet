var greet = require("../index");
describe('greet',function(){
  var name = "likelight";
  it("should greet a person by name ",function(){
  expect(greet(name)).to.equal("hello, likelight");
});

  it("should greet a person flirtaiously if drunk",function(){
  expect(greet(name,true)).to.equal("hello likelight, you look sexy today");
});

});
