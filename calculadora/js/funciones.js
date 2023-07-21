const sumar = () => {
    //capturar valores de caja de texto
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value

    //Proceso: Sumar
    document.getElementById('resultado').value = parseFloat(numero1) + parseFloat(numero2)
}   

const cambiarFondo = () => {
    const color = document.getElementById('colorFondo').value
    //console.log(color)
    document.getElementById('fondo').style.background = color
}

//Aprendiz Explicaciones JS o Node JS 801
//SAMUEL OSORIO FRANCO samuelosorio2004@outlook.es	

