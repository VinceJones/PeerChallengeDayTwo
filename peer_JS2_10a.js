var value = 42;
//----------------------

if ( value >= 53) {
	value += 42;
} else {
	value -= 13;
}
console.log(value);

//---------------------

value = value + "11";



//---------------------

var array =[];
var i;

for (i=0; i<value.length; i++) {
	array[i] = value.charAt(i);
}

console.log(array);

//-----------------------

array.pop();
array.shift();

console.log("array" + array +" "+ value);

//---------------------
var newVar="";

for (i = array.length-1; i >= 0; i--) {
	newVar = newVar + array[i];
}

console.log(newVar);

//---------------------

newVar = parseInt(newVar);
value = parseInt(value);

console.log(value);
console.log(newVar);
//---------------------
value = value + newVar;
console.log(value);
//---------------------
console.log("Here " + value);
if(value < 60){
	value = 14;
}else if (value == 2930) {
	value = 27;
}else {
	value =2;
}
console.log(value);

//---------------------
i = 10;
while (i > 0){
	value++; 
	i--;
}
console.log(value);
//---------------------

function dropChar(val){
	val = val.toString();
	console.log(val);
	if (val.length > 1) {
		val = val.slice(1);
	}
	return val;
}
console.log("Here Scott: " + value);
//---------------------
value = dropChar(value);

//---------------------
console.log(value);

document.getElementById("endValue").innerHTML = value;


