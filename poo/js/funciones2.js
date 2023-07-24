//Array de objetos
const aprendices = [
    {
        documento: 1111,
        nombres: 'Diego',
        nota1: 3.7,
        nota2: 4
    },
    {
        documento: 7777,
        nombres: 'Sintia',
        nota1: 4.7,
        nota2: 4.3
    }
]

const listar =() =>{
    //console.log(aprendices.length)
    aprendices.forEach(elemento => {
        console.log(`${elemento.documento} ${elemento.nombres} \n\n`)
    });
}

const agregar = () => {
    aprendices.push({
        documento: 8888,
        nombres: 'Lindelia',
        nota1: 3.1,
        nota2: 1.5
    })
}


document.querySelector('#btnListar')
.addEventListener('click', () => { listar() })

document.querySelector('#btnAgregar')
.addEventListener('click', () => { agregar() })

/*Para mañana
Cada integrante del equipo escoge una tabla del
proyecto formativo

Diseña el formulario que permita:
Almancenar en un array de objetos los datos digitados.
Listar los datos.
Imprimir los datos.
*/