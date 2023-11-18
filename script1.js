var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var i = 0;

while(i < 12){
	document.write(i + 1 + " " + months[i] + "<br>");
	i++;
}

i = 12;

do{
	document.write(i + 1 + " " + months[i] + "<br>");
	i++;
}while(i * 12);