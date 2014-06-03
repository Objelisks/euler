var x = 0;
var sum = 0;
var max = 1000;
while(x < max) {
	if(x % 3 == 0 || x % 5 == 0)
		sum += x;
	x++;
}
console.log(sum);