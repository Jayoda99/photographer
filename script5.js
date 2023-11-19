var total = parseFloat(0);

for (var i = 1; i <= 3; i++) {
	
	var givenNumber = parseFloat(prompt("Enter marks " + i + ": "));
	
	var total = total + givenNumber;
}

var avg = total / 3;
document.write("Your Total is: " + total);
document.write("<br>")
document.write("Your Average is: " + avg);
document.write("<br>")
gradeChecker(avg);

function gradeChecker(x) {
	
	if (x >= 81) {
		document.write("Your Grade is: A");
	} else if (x >= 61){
		document.write("Your Grade is: B");
	} else if (x >= 41) {
		document.write("Your Grade is: C");
	} else {
		document.write("Your Grade is: F");
	}
}





