//Realizar un programa que pida un valor entero que equivale a un monto de dinero,calcule cuantos billetes de 200, 100, 50, 20 y 10 soles contiene
/* let cantidad = +prompt("Ingrese su monto de dinero");
let sueldo=0;
let billetes=0;
let billetes2=0; */

/* if(sueldo<=1000){
    billetes="2,3,4,3,4"
    //document.write(cantidad + "<br>");
    
}else if(sueldo<=2000){
    billetes2="5,4,6,10,10"
    //console.log("El sueldo es " + cantidad + " y la cantidad de billetes son:" + billetes)
}
alert("El sueldo es " + cantidad + " y la cantidad de billetes son:" + billetes || billetes2) */    

let sueldo= +prompt("Ingrese su monto");
let billetes = {};

billetes.billetes_200 = Math.trunc(sueldo/200);
let montoRestante = sueldo - (200*Math.trunc(sueldo/200));

billetes.billetes_100 = Math.trunc(montoRestante/100);
montoRestante = montoRestante - (100*Math.trunc(montoRestante/100)) ;

billetes.billetes_50 = Math.trunc(montoRestante/50);
montoRestante = montoRestante - (50*Math.trunc(montoRestante/50));

billetes.billetes_20 = Math.trunc(montoRestante/20);
montoRestante = montoRestante - (20*Math.trunc(montoRestante/20));

billetes.billetes_10 = Math.trunc(montoRestante/10);
montoRestante = montoRestante - (10*Math.trunc(montoRestante/10));

//console.log(sueldo + [billetes])
//document.getElementById("letra").innerHTML
/* document.getElementsByClassName("enunciados").innerHTML=billetes.billetes_200 + " billetes 200";
document.getElementsByClassName("enunciados").innerHTML=billetes.billetes_100 + " billetes 100";
document.getElementsByClassName("enunciados").innerHTML=billetes.billetes_50 + " billetes 50";
document.getElementsByClassName("enunciados").innerHTML=billetes.billetes_20 + " billetes 20";
document.getElementsByClassName("enunciados").innerHTML=billetes.billetes_10 + " billetes 10";  */

document.write(sueldo + "<br>" + (billetes.billetes_200) + "<br>" + (billetes.billetes_100) + "<br>" + (billetes.billetes_50) + "<br>" + (billetes.billetes_20) + "<br>" + (billetes.billetes_10))

/* alert(billetes.billetes_200 + " billetes 200");
alert(billetes.billetes_100 + " billetes 100");
alert(billetes.billetes_50 + " billetes 50");
alert(billetes.billetes_20 + " billetes 20");
alert(billetes.billetes_10 + " billetes 10");  */ 