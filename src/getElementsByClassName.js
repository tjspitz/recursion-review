// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*
I:
O:
C:
E:

Strategy:
use document.body, element.childNodes, and element.classList
we want to iterate over each child Node (recurse in here, don't need base case)
does element.classList have length? (if so, do stuff)
does className exist in element.classList? (if so, put in result array)


Pseudo:

*/
var getElementsByClassName = function(className, element) {
  element = element || document.body;
  // assign child param to itself or document.body
  // declare result array
  var result = [];

  // if element.classList contains 'className'
  // console.log(element.classList);
  // console.log('current element: ', element)
  if (Object.values(element.classList).includes(className)) {
    // push current element into result array
    result.push(element);
  }

  // recursive
  // iterate over each element's childNode
  // console.log(element.children);

  // element.childNodes.forEach(function(child) {
  element.children.forEach(function(child) {

    //concat each array together since the stack is coming up and up and up.
    console.log()
    result = result.concat(getElementsByClassName(className, child));
  });



  // return result array
  return result;

};
