// 35. Invertir un arreglo
const numerosInvertidos = [1, 2, 3, 4, 5];
let arregloInvertido = [];
for (let i = numerosInvertidos.length - 1; i >= 0; i--) {
    arregloInvertido.push(numerosInvertidos[i]);
}
console.log(`Arreglo invertido: ${arregloInvertido}`);
