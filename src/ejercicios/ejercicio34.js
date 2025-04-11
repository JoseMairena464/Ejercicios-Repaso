// 34. Promedio por estudiante (matriz)
const notasEstudiantes = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75],  // Estudiante 2
    [88, 95, 92]   // Estudiante 3
];

for (let i = 0; i < notasEstudiantes.length; i++) {
    let suma = 0;
    for (let j = 0; j < notasEstudiantes[i].length; j++) {
        suma += notasEstudiantes[i][j];
    }
    let promedio = suma / notasEstudiantes[i].length;
    console.log(`Promedio estudiante ${i + 1}: ${promedio}`);
}
