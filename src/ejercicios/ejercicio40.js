// 40. Validar correo electrónico
function validarCorreo(correo) {
    return correo.includes('@') && correo.includes('.') ? "Correo válido" : "Correo inválido";
}
console.log(validarCorreo('ejemplo@correo.com'));
