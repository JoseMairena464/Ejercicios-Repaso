// 19. Calculadora básica
let num1 = 12, num2 = 3, operacion = '+';
let resultado;
if (operacion === '+') {
    resultado = num1 + num2;
} else if (operacion === '-') {
    resultado = num1 - num2;
} else if (operacion === '*') {
    resultado = num1 * num2;
} else if (operacion === '/') {
    resultado = num1 / num2;
} else {
    resultado = "Operación no válida";
}
console.log(`Resultado: ${resultado}`);
