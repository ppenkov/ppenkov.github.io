function Check() {
	var x = 9;
	var check = "";

	if (x % 3 == 0) {
		check = "ДА";
	}
	else {
		check = "НЕ";
	};

	document.getElementById("result").innerHTML = "Числото " + x + " се дели на 3: " + check;
}