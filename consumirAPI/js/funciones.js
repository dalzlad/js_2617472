const consumirAPI =() =>{

   const departamento = 'ANTIOQUIA'
   const vigenciadesde = new Date('2024/05/23');
   let formatted_date = vigenciadesde.getFullYear()+'-'+(vigenciadesde.getMonth() +1)+'-'+vigenciadesde.getDate()
   console.log(formatted_date)
   formatted_date = new Date(formatted_date)
   console.log(formatted_date.getMonth())

   if(formatted_date > new Date()){
    alert('Fecha Mayor')
   }
   else {
    alert('Fecha Menor')
   }

   function formatoFecha(fecha, formato) {
     //
   }
   
  
    //const url = 'https://www.datos.gov.co/resource/d4fr-sbn2.json?vigenciadesde='+vigenciadesde

    const url = 'https://www.datos.gov.co/resource/d4fr-sbn2.json?departamento=ANTIOQUIA'


    //Obtener(GET) los datos de una API con JSCRIPT
    $.ajax({
        url: url,
        type: "GET",
        data: {
          "$limit" : 10
        }
    }).done(function(data) {
      //alert("Total Registros " + data.length);
      let impresion = '<table border="1" align="center">'
      impresion += '<thead><tr><th>Departamento</th>'+
      '<th>Ciudad</th>'+
      '<th>Tipo Hurto</th>'+
      '</tr></thead>'+
      '<tbody>'
        data.forEach(registro => {
        //console.log(registro.departamento);
        impresion += '<tr>'+
                     `<td>${registro.departamento}</td>`+
                     `<td>${registro.municipio}</td>`+
                     `<td>${registro.tipo_de_hurto}</td>`+
                     '</tr>'
      });
      impresion += '</tbody></tabla>'
      document.getElementById('listaDatos').innerHTML = impresion
    });

 //Agregar una lista desplegable(select) con todos los
 //Departamentos que permita filtrar búsqueda por
 //Departamentose.
 //También permitir parametrizar la paginación
   
}