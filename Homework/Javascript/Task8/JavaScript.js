function Interval2() {
	var i;
	var a = 20;
	var b = 60;
	var numbers = "";

	for (i = a; i < (b + 1); i++) {
		if (i % 4 == 0) {
			if (i % 9 == 0) {
				numbers += i + " ";
			}
		}
	}

	document.getElementById("result").innerHTML = "Всички числа в този интервал, делими на 4 и на 9 са: " + numbers;
}