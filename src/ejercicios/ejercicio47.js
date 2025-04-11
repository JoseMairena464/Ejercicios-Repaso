// 47. Ordenar productos por precio
const productosOrdenados = [
    { nombre: 'Monitor', precio: 300 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 100 }
];
productosOrdenados.sort((a, b) => a.precio - b.precio);
console.log(`Productos ordenados: ${JSON.stringify(productosOrdenados)}`);

