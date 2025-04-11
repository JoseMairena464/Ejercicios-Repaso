// 39. Suma de arreglo
function sumarArreglo(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
console.log(`Suma del arreglo: ${sumarArreglo([5, 10, 15])}`);
