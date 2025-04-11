// 31. Contar números pares
const numerosPares = [2, 7, 10, 15, 22, 33];
let conteoPares = 0;
for (let i = 0; i < numerosPares.length; i++) {
    if (numerosPares[i] % 2 === 0) {
        conteoPares++;
    }
}
console.log(`Cantidad de números pares: ${conteoPares}`);
