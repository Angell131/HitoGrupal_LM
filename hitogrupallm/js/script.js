
function llenarTabla(data) {
    var i;
    var textJson = data;
    var table="<tr><th scope=\"col\">ID</th><th scope=\"col\">NOMBRE</th><th scope=\"col\">Temperatura Max.</th><th scope=\"col\">Temperatura Min.</th></tr>";
    var obj = JSON.parse(textJson);
	//console.log(obj.provincias);
	let ciudades= obj.ciudades;

		for ( j = 0; j < ciudades.length; j++) {
			table += "<tr><td scope=\"row\">" +
            ciudades[j].id + "</td><td scope=\"row\">" +
            ciudades[j].name + "</td><td scope=\"row\">" +
            ciudades[j].temperatures.max + "</td><td scope=\"row\">" +
            ciudades[j].temperatures.min + "</td><td scope=\"row\">" +
				"</td></tr scope=\"row\">";
		}


    document.getElementById("demo").innerHTML = table;
}



function loadAgenda() {
	const options = {
	  method: "GET",
	};
	
	fetch("https://www.el-tiempo.net/api/json/v2/home", options)
  		.then(response => response.text())
  		.then(data => llenarTabla(data));
}