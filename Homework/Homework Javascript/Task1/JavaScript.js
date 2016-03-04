function Numbers() {
	var numbers = "";
	var i;

	for (i = 1; i < 301; i++) {
		numbers += i + " ";
	}

	document.getElementById("result").innerHTML = numbers;
}