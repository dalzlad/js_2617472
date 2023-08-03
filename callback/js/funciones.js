const productos = ['Agua','Sal', 'Azúcar', 'Panela']
const precios = [1500, 2000, 3500, 4500]

function buscarProducto(datoBuscar, callback){
    //productos.forEach(registro => {
    let encontrado = false
    for(let i = 0; i < productos.length; i++){
        if(productos[i] == datoBuscar){
            encontrado = true 
            alert(`El precio de ${datoBuscar} es: ${callback(i)}`)//Llamado a la segunda función            
            break;
        }
    }
    if(!encontrado){
        alert('Producto no encontrado')
    }
}

function buscarPrecio(i){
    return(precios[i])
}

/*
Ejercicio 1.
implementar el registro de producto y precio
con un callback. Solo se registra el precio si
el producto no existe

Ejercicio 2.
Dados los siguientes arrays.
TempAm701 = [24, 29, 31, 33, 34, 33.2, 32.2]
TempAm702 = [25, 30, 31.5, 32.5, 33.9, 33.5, 32.9]
TempAm703 = [26, 31, 31.1, 32.8, 33.5, 31, 32.2]

Crear un función llamada promedios que reciba 3
procedimientos(callback) que permitan calcular y mostrar los
promedios y máximos de cada array

*/


//document.querySelector('#btnBuscar')
//.addEventListener('click', buscarProducto(document.getElementById('datoBuscar').value, buscarPrecio))