// Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
var cadena = prompt("Introduce una cadena de texto:");
var numerochar = cadena.length;   
var caracter;
var i;
for (i = 0; i < numerochar; i++) {
caracter = cadena.charAt(i); 
if (i == numerochar - 1) {
    document.write(caracter);
}
else {
    document.write(caracter + "-");
}
}