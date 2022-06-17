
function llenarTabla(data) {
    var i;
    var textJson = data;
    var table="<tr><th scope=\"col\">CODPROV</th><th scope=\"col\">NOMBRE_PROVINCIA</th><th scope=\"col\">CODAUTON</th><th scope=\"col\">COMUNIDAD_CIUDAD_AUTONOMA</th><th scope=\"col\">CAPITAL_PROVINCIA</th></tr>";
    var obj = JSON.parse(textJson);
	//console.log(obj.provincias);
	let provincias= obj.provincias;

		for ( j = 0; j < provincias.length; j++) {
			table += "<tr><td scope=\"row\">" +
				provincias[j].CODPROV + "</td><td scope=\"row\">" +
				provincias[j].NOMBRE_PROVINCIA + "</td><td scope=\"row\">" +
				provincias[j].CODAUTON + "</td><td scope=\"row\">" +
				provincias[j].COMUNIDAD_CIUDAD_AUTONOMA + "</td><td scope=\"row\">" +
				provincias[j].CAPITAL_PROVINCIA + "</td><td scope=\"row\">"+
				"</td></tr scope=\"row\">";
		}


    document.getElementById("demo").innerHTML = table;
}



function loadAgenda() {
	const options = {
	  method: "GET",
	};
	
	fetch("https://www.el-tiempo.net/api/json/v2/provincias", options)
  		.then(response => response.text())
  		.then(data => llenarTabla(data));
}