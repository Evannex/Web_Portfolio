var myString = "  ";

document.getElementById("reverseBtn").addEventListener("click", reverseString);


function reverseString() {	
	myString=document.getElementById("inputString").value;

	var strArr = [];
	for(var i = 0; i < myString.length; i++) {
		console.log(myString.charAt(i));
		strArr[i] = myString.charAt(i);
	}
	
	strArr.reverse();
	myString= "";
	for(var j = 0; j < strArr.length; j++) {
		myString += strArr[j];
	}
	document.getElementById("answer").innerHTML = myString;
}