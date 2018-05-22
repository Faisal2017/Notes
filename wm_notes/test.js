//using callbacks example

var ourForEach = function (array, callbackForItem) {
  for (var item of array) {
    callbackForItem(item);
  }
};

var logOut = function(param) {
	console.log('number is: ' + param);
}

var numbers = [1, 2, 3, 4, 5];

// ourForEach(numbers, function (number) {
//   console.log('the number is:', number);
// });

ourForEach(numbers, logOut);

// const async = require('async');

// async.parallel([
//     function(callback) {
//         setTimeout(function() {
//             callback(null, 'one');
//         }, 3000);
//     },
//     function(callback) {
//         setTimeout(function() {
//             callback(null, 'two');
//         }, 100);
//     }
// ],
// // optional callback
// function(err, results) {
// 	console.log(results)
//     // the results array will equal ['one','two'] even though
//     // the second function had a shorter timeout.
// });