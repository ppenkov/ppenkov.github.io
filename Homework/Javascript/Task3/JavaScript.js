function Check2() {
	var x = 15;
	var check = "";

	if (x % 4 == 0) {
		if (x % 7 == 0) {
			check = "ДА";
		}
		else {
			check = "НЕ";
		}
	}
	else {
		check = "НЕ";
	};

	document.getElementById("result").innerHTML = "Числото " + x + " се дели едновременно на 4 и на 7: " + check;
}