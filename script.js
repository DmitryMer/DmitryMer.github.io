   function change() {
	 	var chbox; 
		chbox = document.getElementById('checkBox');

		var colorTxt;
		colorTxt = document.getElementById('colorTxt');
		
		if (chbox.checked) {
			colorTxt.style.color = "#00cc99";
		} 	else {
			colorTxt.style.color = "#000";
		}
	};




document.querySelector('.burger__menu').onclick = function() {
  document.getElementById("nav").classList.toggle("nav-burger");
};


