/*this is a function to say hello*/
function greet(name,drunk){
  if(drunk){
	  return "hello "+ name+", you look sexy today";
  }else{
	  return "hello, "+name;
  }
}

module.exports = greet;
