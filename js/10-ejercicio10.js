//10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

var i,j;
var filas = Number(prompt("Introduce numero de filas"));
var colum = Number(prompt("Introduce numero de columnas"));
var resultado = filas * colum;
document.write("<table border>");
for (i = 0; i < filas; i++) {
    for (j = 0; j < colum; j++) {
        document.write("<td>");
        document.write(resultado);
        resultado--;
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");