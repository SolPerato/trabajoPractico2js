//15- Realiza un script que cuente el número de vocales que tiene un texto.
var cadena = prompt("Introduce una cadena de texto:");
var numerochar = cadena.length;  
cadena = cadena.toUpperCase();  
var contador = 0;
var i;
for (i = 0; i < numerochar; i++) {
    car = cadena.charAt(i);    
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");