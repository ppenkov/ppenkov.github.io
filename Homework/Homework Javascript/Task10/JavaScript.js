function ActualDate() {
	var today = new Date();
	var day = today.getDay();
	var day = ["Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота", "Неделя"];
	var date = today.getDate();
	var month = today.getMonth();
	var month = ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"];
	var year = today.getFullYear();
	var hour = today.getHours();
	var min = today.getMinutes();

	var info = (day[today.getDay()] + ", " + date + " " + month[today.getMonth()] + " " + year + ", " + hour + ":"+ min + "ч.");

	document.getElementById("result").innerHTML = info;
}
