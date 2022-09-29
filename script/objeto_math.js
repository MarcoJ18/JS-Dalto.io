
function sqrtTest(){
    let numero = Math.sqrt(25); // calcular la raiz cuadrada

    document.write(numero);
}


function cbrtTest(){
    let numero = Math.cbrt(27); // raiz cubica

    document.write(numero);
}

function maxTest(){
    let numero = Math.max(5,52,421,34,34,512,54,2452,13,1,13135,4556); // no recibe arrys , ni objetos , solo numeros

    document.write(numero); //muestra el más grande
}


function minTest(){
    let numero = Math.min(5,52,421,34,34,512,54,2452,13,1,13135,4556);

    document.write(numero); // muestra el más pequeño
}


function randomTest(){
    let numero = Math.random();// un numero entre 0 y 1 random

    document.write(numero + '<br>');

    //entre 0 y 100 pero esta no es la mejor forma para eso esta round

    let numero2 = Math.random()*100;
    numero2 = numero2.toString();
    num = numero2[0] + numero2[1];

    document.write(num);

}


function roundTest(){
    //numero entre 0 y 100 incluyendo el 0 y el 100
    let numero = Math.random()*100; 
    let num = Math.round(numero); //redondea un numero

    document.write(num);
}

function froundTest(){
    let numero = Math.fround(9.55555555555555555555555555555555555555); //porque es de presición simple (4bytes)

    document.write(numero);
}


function floorTest(){
    let numero = Math.floor(4.99999); // devuelve un entero redondeando hacia abajo

    document.write(numero + '<br>');

    //numero entre 0 y 100 si no ponemos más uno puede salir 0 

    let numero2 = Math.random()*99;
    num = Math.floor(numero2+1);

    document.write(num);

}

function truncTest(){
    let numero = Math.trunc(9.6); //es como round , trunc no redondea te saca la fraccioón

    document.write(numero + '<br>');//quita los digitos o quita lo decimales

    let numero2 = Math.round(9.6);

    document.write(numero2);
}


function otrosTest(){
    let numero = Math.PI;//Esta usando fround 

    document.write(numero + '<br>');

    let numero2 = Math.SQRT1_2;

    document.write(numero2 + '<br>');

    let numero3 = Math.SQRT2;

    document.write(numero3 + '<br>');
    
    let numero4 = Math.E;

    document.write(numero4 + '<br>');

    let numero5 = Math.LN2;

    document.write(numero5 + '<br>');

    let numero6 = Math.LN10;

    document.write(numero6 + '<br>');

    let numero7 = Math.LOG2E;

    document.write(numero7 + '<br>');

    let numero8 = Math.LOG10E;

    document.write(numero8 + '<br>');
    

}