function findObjectForPath(input, path) {	
	if (!path || !input){
	//input validation, just to make sure that if anyone calling our method is passing all input values needed for the method
		return "Either the input or the path is undefined. Hence not found";
	}
	
	var pathArray = path.split("/");
	for(var i=0;i<pathArray.length;i++) {
		obj = obj[""+pathArray[i]+""]; //so after each iteration the obj keep changing to its smaller sub object. 
		// 1st obj becomes {"a":{"b":{"c":"d"}}}
		//2nd obj becomes {"b":{"c":"d"}}
		//3rd obj becomes {"c":"d"}
		if(!obj){ //next level obj not found
			return "Not found";
		}
	}
	return "Object Found is "+obj;
} 


var obj = {"a":{"b":{"c":"d"}}}

var result = findObjectForPath(obj, "a/b/c");
console.log(result);
