//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

var vocales = ["a", "e", "i", "o", "u"];
var texto = prompt("Introduce un texto");
var textomin = texto.toLowerCase();
var posicion = 0;
var parar = false;
for (var i = 1; i < textomin.length; i++) {
    for (var j = 1; j < vocales.length; j++) {
        if (vocales[j] == textomin.charAt(i)) {
            posicion = i;
            parar = true;
            break;
        }
    }
    if (parar) {
        break;
    }
}
document.write("La primera vocal está en la posición " + posicion);