var myName = "Dileep";

function printName(){
	var myName = "Ananda";
	document.write("My name is :" + myName);
}

printName();

document.write("<br>")
document.write("My name is :" + myName);
document.write("<br>")


var givenNumber = prompt("Enter any number: ");

function checkNumber(){
	if (givenNumber == 0){
		document.write("The given number " + givenNumber + " is equal to 0 .")
	}else if (givenNumber <= 0) {
		document.write("The given number " + givenNumber + " is a Negative Number.")
	}else {
		document.write("The given number " + givenNumber + " is a Positive Number.")
	}
}	

checkNumber();