/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

var num, rep;
    for (num = 1; num <= 30; num++) {
        for (rep = 0; rep < num; rep++) {
            document.write(num);
        }
        document.write("<br>");
    }
