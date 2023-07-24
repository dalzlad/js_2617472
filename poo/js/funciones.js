let intentos = [] //Array vacio
class Rectangulo{
    //Definir atributos
    largo;
    ancho;

    //Definir el constructor
    constructor(largo, ancho){
        this.largo = largo
        this.ancho = ancho
    }

    //Definir los métodos
    getArea(){
        return this.largo * this.ancho
    }

    getPerimetro(){
        return (2*this.largo) + (2*this.ancho)
    }
}

//const calcular = () => {
function calcular(){
    //querySelector Captura todo el objeto(inputs, radios, ...)
    const largo = document.querySelector('#largo')
    const ancho = document.querySelector('#ancho')
    console.log(largo)
    const rectangulo1 = new Rectangulo(largo.value,ancho.value) //Instanciar objeto
    //document.write('El área es: '+rectangulo1.getArea()+'<br>')
    //document.write('El perímetro es: '+rectangulo1.getPerimetro()+'<br>')
    document.getElementById('resultado').innerHTML = `El área es:" " ${rectangulo1.getArea()} \n`+
    `El perímetro es: ${rectangulo1.getPerimetro()} `
    registrarIntentos()
}

function registrarIntentos(){
    intentos.push()
    console.log('Total Intentos: '+intentos.length)
    //console.log(intentos)
}

document.querySelector('#btnCalcular')
.addEventListener('click', calcular)

