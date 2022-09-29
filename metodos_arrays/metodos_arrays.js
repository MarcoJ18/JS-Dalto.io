let popTest = () =>{
    let nombres = ['pedro','paco','maria'];

    document.write('<b>Original: </b>' + nombres + '<br>');

    let resultado = nombres.pop(); // Remueve el ultimo y lo devuele

    document.write('<b>POP: </b>' + resultado + '<br>');

    document.write('<b>Resultado: </b>' + nombres);

}


let shiftTest = () =>{
    let nombres = ['pedro','paco','maria'];

    document.write('<b>Original: </b>' + nombres + '<br>');

    let resultado = nombres.shift(); // Remueve el primero y lo devuele

    document.write('<b>Shift: </b>' + resultado + '<br>');

    document.write('<b>Resultado: </b>' + nombres);

}


let pushTest = () =>{  
    let nombres = ['pedro','paco','maria'];

    document.write('<b>Original: </b>' + nombres + '<br>');

    let resultado = nombres.push('test','pepe'); // Añade un elemento al final del array y nos devuelve la cantidad de elementos o la posición del ultimo elemento que agregamos

    document.write('<b>Push: </b>' + resultado + '<br>');

    document.write('<b>Resultado: </b>' + nombres);

}


let reverseTest = () => {
    let nombres = ['pedro','paco','maria'];
    
    document.write('<b>Original: </b>' + nombres + '<br>');

    let resultado = nombres.reverse();// array invertido

    document.write('<b>Reverse: </b>' + resultado + '<br>');

    document.write('<b>Resultado: </b>' + nombres); 
}

let unshiftTest = () => {
    let nombres = ['pedro','paco','maria'];
    
    document.write('<b>Original: </b>' + nombres + '<br>');

    let resultado = nombres.unshift('Pepedos');// add new elements to arrays in the begining y devuelve la longitud

    document.write('<b>Unshift: </b>' + resultado + '<br>');

    document.write('<b>Resultado: </b>' + nombres); 
}

/*
push() es el opuesto a pop()

unshift es el opuesto a shift()
*/


let sortTest = () => {
    let nombres = ['zero','pedro','paco','maria','apel'];
    
    document.write('<b>Original: </b>' + nombres + '<br>');

    let resultado = nombres.sort(); // ordena 

    document.write('<b>Sort: </b>' + resultado + '<br>');

    document.write('<b>Resultado: </b>' + nombres); 
}


let spliceTest = () => {
    let nombres = ['zero','pedro','paco','maria','apel'];
    
    document.write('<b>Original: </b>' + nombres + '<br>');

    let resultado = nombres.splice(0,1,0); // posición , cantidad a eliminar , agregar 

    document.write('<b>Splice: </b>' + resultado + '<br>');

    document.write('<b>Resultado: </b>' + nombres + '<br>'); 

    nombres.splice(2,3,'pepe','cebolla');

    document.write('<b>Resultado2: </b>' + nombres + '<br>'); 

    nombres.splice(-1,0,'hika');//pones al final (mejor usar push()) y no eliminas ninguno
    
    document.write('<b>Resultado2: </b>' + nombres + '<br>'); 

    
}


let joinTest = () => {
    let nombres = ['zero','pedro','paco','maria','apel'];
    
    document.write('<b>Original: </b>' + nombres + '<br>');

    let resultado = nombres.join(' - '); // convierte a cadena , (separador que querramos)

    document.write('<b>Resultado: </b>' + resultado + '<br>');

    document.write('<b>Original2: </b>' + nombres[0] + '<br>');

    document.write('<b>Resultado2: </b>' + resultado[0]);

    
}


let sliceTest = () => {
    let nombres = ['zero','pedro','paco','maria','apel'];
    
    document.write('<b>Original: </b>' + nombres + '<br>');

    let resultado = nombres.slice(1,3); // seleciona de un elemento a otro

    document.write('<b>Resultado: </b>' + resultado + '<br>');
 
    let todos = nombres.slice(0);

    document.write('<b>Resultado2: </b>' + todos + '<br>');
}

let otrosTest = () => {
    let nombres = ['zero','pedro','paco','maria','apel'];
    
    document.write('<b>Original: </b>' + nombres + '<br>');

    let resultado = nombres.includes('zero'); // seleciona de un elemento a otro

    document.write('<b>Resultado: </b>' + resultado + '<br>');
 
    let resultado2 = nombres.includes('adfka');

    document.write('<b>Resultado2: </b>' + resultado2 + '<br>');


     
    let resultado3 = nombres.indexOf('pedro');

    document.write('<b>Resultado3: </b>' + resultado3 + '<br>');


    let resultado4 = nombres.indexOf('pedfgsaddro');

    document.write('<b>Resultado4: </b>' + resultado4 + '<br>');


         
    let resultado5 = nombres.lastIndexOf('o'); //coge el elemento entero

    document.write('<b>Resultado5: </b>' + resultado5 + '<br>');


    let resultado6 = nombres.lastIndexOf('zero');

    document.write('<b>Resultado6: </b>' + resultado6 + '<br>');



}





let filterTest = () => { //Hacer lo mismo que el forEach pero con un filtro
    let nombres = ['zero','pedro','paco','maria','apel'];
    
    nombres.filter(numero => document.write(numero + '<br>'));//funcion flecha

    let resultado = nombres.filter(numero => numero.length > 4);//numero de letras

    document.write('<hr>'+resultado);

}


let forEachTest = () => {
    let nombres = ['zero','pedro','paco','maria','apel'];
    
    nombres.forEach(numero => document.write(numero + '<br>'));

}

