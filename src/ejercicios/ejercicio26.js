// 26. Suma hasta 100
const numeros = [10, 15, 20, 25, 30, 5];
let suma = 0, cantidad = 0, i = 0;
while (i < numeros.length && suma < 100) {
    suma += numeros[i];
    cantidad++;
    i++;
}
console.log(`Suma total: ${suma}, Números usados: ${cantidad}`);
