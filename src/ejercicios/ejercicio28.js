// 28. Validación de contraseña
const CONTRASENA_CORRECTA = 'claveSegura';
let contrasenaIngresada;
do {
    contrasenaIngresada = prompt("Ingresa tu contraseña:");
    if (contrasenaIngresada !== CONTRASENA_CORRECTA) {
        console.log("Contraseña incorrecta");
    }
} while (contrasenaIngresada !== CONTRASENA_CORRECTA);
console.log("Acceso permitido");
