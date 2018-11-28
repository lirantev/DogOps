var uploadFile = function() {
	var file = document.getElementById("myfile");
	var txt ="";
	for (var i=0; i < file.files.length; i++) {
		if (file.files[i].size > 150000) {
		//	alert("file too big!");
			document.getElementById("text").innerHTML = "File should be smaller than 150kb";
		}	else {
			txt += "name: "  + file.files[i].name + "<br>" + "size: " + file.files[i].size;
			document.getElementById("text").innerHTML = txt;
		}
	}
}