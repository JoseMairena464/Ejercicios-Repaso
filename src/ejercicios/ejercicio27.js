// 27. Juego del número secreto
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1;
let intento;
do {
    intento = parseInt(prompt("Adivina el número secreto (1-100):"));
    if (intento === NUMERO_SECRETO) {
        console.log("¡Adivinaste!");
    } else {
        console.log("Intenta de nuevo");
    }
} while (intento !== NUMERO_SECRETO);
