var total = 0;

for (var i = 1; i <= 3; i++) {
	
	var givenNumber = prompt("Enter marks " + i + ": ");
	
	var total = total + givenNumber;
}

var avg = total / 3;
document.write("Your Total is: " + total);
document.write("<br>")
document.write("Your Average is: " + avg);
document.write("<br>")
gradeChecker(avg);

function gradeChecker() {
	
	if (avg >= 81) {
		document.write("Your Grade is: A");
	} else if (avg >= 61){
		document.write("Your Grade is: B");
	} else if (avg >= 41) {
		document.write("Your Grade is: C");
	} else {
		document.write("Your Grade is: F");
	}
}





