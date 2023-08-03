/*
*/

const sumarPares = () =>{
    let sumaPares = 0
    for(let i= 2; i<1000; i=i+2){
        sumaPares += i
    }
    return sumaPares
}

const sumarImpares = () =>{
    let sumaImpares = 0
    for(let i= 1; i<1000; i=i+2){
        sumaImpares += i
    }

    return sumaImpares
}

const sumarMultiplosTres =() =>{
    let sumaMultiplos = 0
    for(let i= 3; i<1000; i=i+3){
        sumaMultiplos += i
    }
    return sumaMultiplos
}


setTimeout(() => {
    console.log(`1. Suma de Pares: ${sumarPares()} `)
}, 5000);
setTimeout(() => {
    console.log(`2. Suma de Impares: ${sumarImpares()} `)
}, 10000);
setTimeout(() => {
    console.log(`3. Suma de Múltiplos de 3: ${sumarMultiplosTres()} `)
}, 8000);
