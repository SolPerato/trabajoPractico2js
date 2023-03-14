//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

var resultado = "" ;
do {
    var cadena = prompt("Introduce las palabras");

    if (resultado == "" ) {
        resultado = resultado + cadena;
    }
    else {
        resultado = resultado + "-" + cadena;
    }
    } 
    while (confirm("Desea seguir?"));
document.write(resultado);