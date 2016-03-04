function BiggestNumber() {
	var x = 15;
	var y = 27;
	var z = 7;
	var max = "";

	if (x > y) {
		max = x;
		if (x < z) {
			max = z;
		}
	}
	else {
		max = y;
		if (y < z) {
			max = z;
		}
	}

	document.getElementById("result").innerHTML = "Най-голямото от трите числа " + x + ", " + y + " и " + z + " е: " + max;
}