'use strict'

Array.prototype.toTwenty = function() {
    var x = [];
    for(var i = 1; i <= 20; i++){
      x.push(i);  
    }
    return x;
}

Array.prototype.toForty = function() {
    var x = [];
    for(var i = 2; i <= 40; i+=2){
      x.push(i);  
    }
    return x;
}

Array.prototype.toOneThousand = function() {
    var x = [];
    for(var i = 10; i <= 1000; i+=10){
      x.push(i);  
    }
    return x;
}	  

Array.prototype.search = function(searchElement){
	var x = {
	    "count": 0,
	    "index": 0,
	    "length": 0
	}
  	x.length = this.length;
    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;
 	
	if(searchElement === this[this.length-1]){
		// Checks if the search item is the last item 
		x.count = 1;
		x.index = this.length-1;
		return x;
	}

	if(searchElement <= this[3]){
		// Checks if the search item is among the first 4 items
		for (var i = 0; i <= 3; i++) {
			if(searchElement === this[i]){
				// Element Found
				x.index = i;
				x.count++;
				return x;
			}
		}
		
	}

	// Else perform a binary search to locate the search item
    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = this[currentIndex];
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
        	x.index = currentIndex;
	        return x;
        }
        x.count++;
    }
 
    x.index = -1;
  	return x;	
}

module.exports = Array;