// 41. Generar contraseña aleatoria
function generarContraseña(longitud) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let contraseña = '';
    for (let i = 0; i < longitud; i++) {
        contraseña += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    return contraseña;
}
console.log(`Contraseña generada: ${generarContraseña(6)}`);
