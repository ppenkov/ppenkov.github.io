function TwoArrays() {
	var oldArray = [6, 4, 3, 0, 9];
	var newArray = [oldArray.length];
	var oldElements = "";
	var newElements = "";

	for (i = 0; i < oldArray.length; i++) {
		oldElements += oldArray[i] + " ";
	};

	for (i = 0; i < oldArray.length; i++) {
		newElements += (i * 7) + " ";
	};

	document.getElementById("result").innerHTML = "Стария масив съдържа елементи: [ " + oldElements + "]" + ", новият масив съдържа елементи: [ " + newElements + "].";
}