var helper = require('./helper.js');

var number = 600851475143;

var x = 2;
var largest = x;

while(number != 1 && x < number) {
	while(number % x == 0) {
		number /= x;
		largest = x;
		console.log(largest);
	}
	x = helper.nextPrime(x);
}
console.log(x);