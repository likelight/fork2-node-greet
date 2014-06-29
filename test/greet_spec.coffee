greet = require("../lib/index")
describe "greet lib", ->
  it "should greet a person by name", ->
    expect(greet("likelight")).to.eql "hello, likelight"
    return

  it "should greet a person flirtatiously if drunk", ->
    expect(greet("likelight", "--drunk")).to.eql "hello likelight, you look sexy today"
    return
  return
