// 25. Menú interactivo (simulado)
let opcion;
do {
    opcion = prompt("Elige una opción: A (Bienvenido), B (Ingresar nombre), 3 (Salir)");
    if (opcion === 'A') {
        console.log("Bienvenid@");
    } else if (opcion === 'B') {
        let nombreIngresado = prompt("Ingresa tu nombre:");
        console.log(`Bienvenid@ ${nombreIngresado}`);
    }
} while (opcion !== '3');