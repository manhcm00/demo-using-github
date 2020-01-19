// function countFromAtoB(a, b) {
//     return new Promise(function(resolve) {
//         var i = a;
//         var intervalId = setInterval(function() {
//             console.log(i);
//             i++
//             if (i == b) {
//                 clearInterval(intervalId);
//                 resolve('');
//             }
//         }, 1000);
//     });
// }

// countFromAtoB(1,100).then(function(value) {
//     console.log('Done');
// });

function capitalize(str) {
	// viết code ở đây
	var splitString = str.split(' ');
	var mapResult = splitString.map(function(str) {
        return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    });
    
    return mapResult.join(' ');
}

console.log(capitalize('asd sdg mac'));

// var str = 'mansfkshf';
// var result = str.charAt(0).toUpperCase() + str.substr(1);
// console.log(result);
  
function findmaxDiff(arr){
    // Viết code tại đây
    arr.sort(function(a, b) {
        if (a > b) return 1;
        else return -1;
    });
    console.log(arr);
    return arr[arr.length - 1] - arr[0];
  }

 console.log(findmaxDiff([1, 2, 3, 18, 9]));

 console.log('hello');
 
  
