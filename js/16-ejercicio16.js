//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
var cadena =prompt("Introduce una oracion:");
var numerochar = cadena.length;
var i;
var car;
var salida = "";
for (i = 0; i < numerochar; i++) {
    car = cadena.charAt(i);
    salida = car + salida;
}
document.write(salida);