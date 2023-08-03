/*
Dado el siguiente array 
Ventas= 1000, 10000, 1000, 320, 400, 421] 
consultar el promedio y si el promedio
es superior a 200 generar el promedio
del array Ventas2 = [300, 210, 456, 297, 233] 
Si el promedio del array Ventas 2 es superior a 
220 calcular e imprimir el promedio de 
Ventas3 = [888, 777, 666, 999, 555, 444]
Emplear un callback e Imprimir promedios
*/
const Ventas = [1000, 10000, 1000, 320, 400, 421] 
const Ventas2 = [300, 210, 456, 297, 233]

const calcularPromedio1 = (Ventas, Ventas2, callback) => {
    let promedio = 0
    for(let i = 0; i < Ventas.length; i++){
        promedio += Ventas[i]
    }
    promedio = promedio / Ventas.length
    console.log(`El promedio de ventas 1 es: ${promedio}`)

    if(promedio > 200){
        setTimeout(() => {
            callback(Ventas2)//Llamado a la función calcularPromedio2
        }, 15000);
     }

}

const calcularPromedio2 = (Ventas2) => {
    let promedio = 0
    for(let i = 0; i < Ventas2.length; i++){
        promedio += Ventas2[i]
    }
    promedio = promedio / Ventas2.length
    console.log(`El promedio de ventas 2 es: ${promedio}`)

}
//Llamado al callback
calcularPromedio1(Ventas, Ventas2, calcularPromedio2) 

