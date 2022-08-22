	//получаем все необходимые элементы (таблицу, поля ввода)
	var	table = document.getElementById("Tbl");
	var nameF = document.getElementById("NewName");
	var ageF = document.getElementById("NewAge");
	var sexF = document.getElementById("NewSex");
	var heiF = document.getElementById("NewH");
	var telF = document.getElementById("NewTel");
	var mailF = document.getElementById("NewMail");

	var R;
	var Rtxt;
	var isRed = false;

	//добавление строк
	function addRow(){
		var N = document.createElement("tr"); //создаем новую строку

		N.innerHTML = "<th>" + nameF.value + "</th>" +
					  "<th>" + ageF.value + "</th>" +
					  "<th>" + sexF.value + "</th>" +
					  "<th>" + heiF.value + "</th>" +
					  "<th><a href=\"tel:" + telF.value +"\">" + telF.value + "</a></th>" +
					  "<th><a href=\"mailto:" + mailF.value +"\">"+ mailF.value + "</a></th>"+
					  "<th><button id=\"Del\" onclick=\"deleteRow(event)\">X</button></th>" +
					  "<th><button id=\"Red\" onclick=\"redactRow(event)\">/</button></th>";  //заполняем значения
		table.appendChild(N); //добавляем новую строку в таблицу
	}

	//удаление строк
	function deleteRow(event){
		event.target.parentElement.parentElement.remove();
	}

	//редактирование строк
	function redactRow(event){
		if(isRed)return;
		isRed = true;

		R = event.target.parentElement.parentElement
		Rtxt = R.innerHTML;

		R1 = R.children[0].innerHTML;
		R2 = R.children[1].innerHTML;
		R3 = R.children[2].innerHTML;
		R4 = R.children[3].innerHTML;
		R5 = R.children[4].children[0].innerHTML;
		R6 = R.children[5].children[0].innerHTML;

		R.innerHTML = "<th><input type=\"text\" id=\"NewNameR\" placeholder=\"ФИО\" value=\""+ R1 +"\"></th>" +
					  "<th><input type=\"number\" id=\"NewAgeR\" placeholder=\"18\" value=\""+ R2 +"\"></th>" +
					  "<select id=\"NewSexR\" placeholder=\"М\"> <option value=\"М\""+(R3=="М"?"selected=\"selected\"":"") +">М</option> <option value=\"Ж\""+ (R3=="Ж"?"selected=\"selected\"":"") +">Ж</option> </select>" +
					  "<th><input type=\"number\" id=\"NewHR\" placeholder=\"18\" value=\""+ R4 +"\"></th>" +
					  "<th><input type=\"tel\" id=\"NewTelR\" placeholder=\"deliveryPeriod\" value=\""+ R5 +"\"></th>" +
					  "<th><input type=\"email\" id=\"NewMailR\" placeholder=\"deliverySchedule\" value=\""+ R6 +"\"></th>" +
					
					  "<th><button id=\"Del\" onclick=\"cancelRed()\">Отмена</button></th>" +
					  "<th><button id=\"Red\" onclick=\"saveRed()\">Сохранить</button></th>";
	}

	function saveRed(){
		var nameFR = document.getElementById("NewNameR");
		var ageFR = document.getElementById("NewAgeR");
		var sexFR = document.getElementById("NewSexR");
		var heiFR = document.getElementById("NewHR");
		var telFR = document.getElementById("NewTelR");
		var mailFR = document.getElementById("NewMailR");

		R.innerHTML = "<th>" + nameFR.value + "</th>" +
					  "<th>" + ageFR.value + "</th>" +
					  "<th>" + sexFR.value + "</th>" +
					  "<th>" + heiFR.value + "</th>" +
					  "<th><a href=\"tel:" + telFR.value +"\">" + telFR.value + "</a></th>" +
					  "<th><a href=\"mailto:" + mailFR.value +"\">"+ mailFR.value + "</a></th>"+
					  "<th><button id=\"Del\" onclick=\"deleteRow(event)\">X</button></th>" +
					  "<th><button id=\"Red\" onclick=\"redactRow(event)\">/</button></th>";

		isRed = false;
	}
	function cancelRed(){
		R.innerHTML = Rtxt;
		isRed = false;
	}