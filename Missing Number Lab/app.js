'use strict'
// Missing Number Function

function sum(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++)
  {
    sum += arr[i];
  }
  return sum;
}

module.exports = {
	findMissing: function(arr1, arr2){
		if(arr1.length === arr2.length)
		{
			return 0;
		}
		else{
		    return sum(arr2) - sum(arr1);
		}
	}

}