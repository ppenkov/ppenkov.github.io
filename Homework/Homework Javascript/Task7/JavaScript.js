function Interval() {
	var i;
	var a = 50;
	var b = 100;
	var numbers = "";

	for (i = a; i < (b + 1); i++) {
		if (i % 7 == 0) {
			numbers += i + " ";
		}
	}

	document.getElementById("result").innerHTML = "Всички числа в този интервал, делими на 7 са: " + numbers;
}