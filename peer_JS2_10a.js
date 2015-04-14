var value = 42;
//----------------------

if ( value >= 53) {
	value += 42;
} else {
	value -= 13;
}
console.log(value);

//---------------------

var string = value + "11";

console.log(string);

//---------------------

var array =[];
var i;

for (i=0; i<string.length; i++) {
	array[i] = string.charAt(i);
}

console.log(array);

//-----------------------

array.pop();
array.shift();

console.log(array);

//---------------------
var newVar="";

for (i = array.length; i > 0; i--) {
	newVar = newVar + array[i-1];
}

console.log(newVar);

//---------------------

newVar = parseInt(newVar);
value = parseInt(value);

console.log(value);
console.log(newVar);