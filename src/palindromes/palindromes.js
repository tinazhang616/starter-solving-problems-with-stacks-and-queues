const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your solution here
  let middle =Math.floor(sentence.length/2)
  let stack = new Stack()
  for(let i=0;i<middle;i++){
    let char = sentence[i]
    stack.push(char)
  }
  let compareFrom=middle
  if(sentence.length%2!==0){
    compareFrom=middle+1
  }
  for(let i=compareFrom;i<sentence.length;i++){
    if(stack.pop()!==sentence[i]){
      return false
    }
  }
  return true

};

module.exports = isPalindrome;
