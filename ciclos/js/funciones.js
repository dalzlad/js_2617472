const documentos = [1010, 1240, 2121, 7766, 9999];
const nombres = ['Ana', 'Diana', 'Inés', 'Delia', 'Sor'];
const listarDatos =()=>{

    //console.log('En construcción...')
    let mensaje = '';
    for(let i=0; i < documentos.length; i++){
        //console.log(documentos[i]+' '+nombres[i])
        mensaje += '<tr><td>'+documentos[i]+
                   '</td><td>'+nombres[i]+'</td></tr>';
    }

    document.getElementById('resultado').innerHTML = mensaje
}