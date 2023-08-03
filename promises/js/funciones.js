//Calcular el factorial de números enteros
//entre 1 y 17. Resolver con una Promesa
const calcularFactorial = (numero) =>{
    let factorial = 1
    return new Promise((resolve, reject) => {
        if(numero >=1 && numero<= 17){
            for(let i=1; i<=numero; i++){
                factorial=factorial*i
            }
            resolve(`El factorial de ${numero} es ${factorial}`)
        }
        else{
            reject('No se puede calcular. Número fuera de rango')
        }
    })
}

calcularFactorial(17)
.then(mensaje => {
    console.log(mensaje)
})
.catch(error => {
    console.log(error)
})

//Implementar la validación  de acceso del 
//login con promise