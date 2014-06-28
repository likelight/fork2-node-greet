parseArgs = require("minimist")
greet = require("../lib/index")

module.exports = ->
	argv = parseArgs(process.argv.slice(2))
	console.log greet(argv._[0],argv.drunk)
