// 46. Calcular promedio de notas
const notasPromedio = [80, 90, 70, 100];
const sumaNotas = notasPromedio.reduce((acumulador, nota) => acumulador + nota, 0);
console.log(`Promedio: ${sumaNotas / notasPromedio.length}`);
