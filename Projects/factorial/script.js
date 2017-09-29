var number = 0;
var total;
document.getElementById("factorialBtn").addEventListener("click", setNumber);

function setNumber(){
	number=document.getElementById("inputString").value;
	console.log(number);
	total = 1;
	document.getElementById("answer").innerHTML = "" + factorial(number);
}

function factorial(num) {
	console.log("factorial");
	if(num > 1) {
		total *= num * factorial(num-1);
	}
	console.log(total);
	return total;

}
