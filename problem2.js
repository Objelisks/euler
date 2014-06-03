var lastlast = 1;
var last = 2;
var sum = 0;
while(last < 4000000) {
	if(last % 2 == 0)
		sum += last;
	var temp = last + lastlast;
	lastlast = last;
	last = temp;
}
console.log(sum);