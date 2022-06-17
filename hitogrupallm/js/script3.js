
function llenarTabla(data) {
    var i;
    var textJson = data;
    var table="<tr><th scope=\"col\">CODIGO</th><th scope=\"col\">NOMBRE</th><th scope=\"col\">Población</th><th scope=\"col\">Capital</th></tr>";
    var obj = JSON.parse(textJson);
	//console.log(obj.municipios);
	let municipios= obj.municipios;

		for ( j = 0; j < municipios.length; j++) {
			table += "<tr><td scope=\"row\">" +
				municipios[j].CODIGOINE + "</td><td scope=\"row\">" +
				municipios[j].NOMBRE + "</td><td scope=\"row\">" +
				municipios[j].POBLACION_MUNI + "</td><td scope=\"row\">" +
				municipios[j].NOMBRE_CAPITAL + "</td><td scope=\"row\">"+
				"</td></tr scope=\"row\">";
		}


    document.getElementById("demo").innerHTML = table;
}



function loadAgenda() {
	const options = {
	  method: "GET",
	};
	
	fetch("https://www.el-tiempo.net/api/json/v2/provincias/28/municipios", options)
  		.then(response => response.text())
  		.then(data => llenarTabla(data));
}