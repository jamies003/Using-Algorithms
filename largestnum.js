function largestOfFour(arr) {
  let count = arr.length;
  var highestNumbers = [];

  for (var i = 0; i < count; i++) {

   ///We have just sorted the sub array 
   var sortedArray = arr[i].sort(function(a, b){return a - b});
   //console.log(sortedArray);

  //because array is already sorted,
  //we know last object in array, 
  //will be greatest value
   highestNumbers.push(sortedArray[sortedArray.length - 1]) 
   
   console.log(highestNumbers);

  }

  return highestNumbers;
}