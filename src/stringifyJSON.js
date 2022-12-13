// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*

I:any data type
O:string

Strat:
need different cases for data types.
handle arrays and object differently.
booleans strings numbers add them to result.
becareful with where weput commas
*/

var stringifyJSON = function(obj) {
  // your code goes here
  // number
  if (typeof obj === 'number') {
    return '' + obj;
  }
  // string
  if (typeof obj === 'string') {
    return '"'+ obj + '"';
  }
  // boolean
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  // function
  if (typeof obj === 'function') {
    return undefined;
  }
  // undefined
  if (obj === undefined) {
    return obj;
  }
  // null
  if (obj === null) {
    return '' + obj;
  }
  // array
  if (Array.isArray(obj)) {
    var result = [];
    obj.forEach(function(item) {
      result.push(stringifyJSON(item));
    })
    return '['+ result.join(',') +']'
  }
  // object
  if (typeof obj) {

  }
};



// [1, 2, 3]