const consultarPrecios = () => {
  let fechaDesde = document.getElementById('fechaDesde').value

  //Convertir a formato Date
  fechaDesde = new Date(fechaDesde)
  
  
  if(fechaDesde > new Date()){
    alert('No se pueden consultar fechas mayores a la actual')
  }
  else{
  const url = `https://www.datos.gov.co/resource/ceyp-9c7c.json?vigenciadesde=${fechaDesde}&vigenciahasta=${fechaDesde}`
  const limite = 20

  $.ajax({
    url: url,
    type: "GET",
    data: {
      "$limit" : limite
    }
}).done(function(data) {
  //alert("Total Registros " + data.length);
  let impresion = '<table border="1" align="center">'
  impresion += '<thead><tr><th>Fecha Inicio</th>'+
  '<th>Fecha Fin</th>'+
  '<th>Precio</th>'+
  '</tr></thead>'+
  '<tbody>'
    data.forEach(registro => {

    impresion += '<tr>'+
                 `<td>${registro.vigenciadesde}</td>`+
                 `<td>${registro.vigenciahasta}</td>`+
                 `<td>${registro.valor}</td>`+
                 '</tr>'
  });
  
  impresion += '</tbody></tabla>'
  document.getElementById('listaPrecios').innerHTML = impresion

});
  }
}

document.querySelector('#fechaDesde')
.addEventListener('change', () => { consultarPrecios() })


















/*
document.getElementById("inputFileToRead")
  .addEventListener("change", function () {
    let results = []
    var fr = new FileReader();
    fr.readAsText(this.files[0]);
    fr.onload = function () {
        document.getElementById('listaDatos').innerHTML = fr.result; //array where I would like to store results
     }; 
  
  });



*/





/*
Taller JS
Emplear Sweet Alert, Boostrap o material o CSS puro o el framework css de sus gusto.

1.Implementar un formulario en HTML que permita convertir
una cantidad de pesos colombianos a euros y dólares 
americanos.
No se permiten cantidades negativas

2.Consumir API: Implementar un formulario que permita buscar por 
rango de fechas el precio del dólar.
Devolver el promedio del precio del dólar de las fechas consultadas.
La url de la API: https://www.datos.gov.co/resource/ceyp-9c7c.json

3. Leer y mostrar el archivo aprendices.txt en una página html

*/

//https://github.com/dalzlad/js_2617472

//https://linuxhint.com/read-local-text-file-javascript/#:~:text=To%20read%20a%20locally%20placed,operation%3A%20reading%20a%20text%20file.
//https://es.javascript.info/date