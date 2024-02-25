"use strict"



class Metodos_arrays{
    constructor(method){
        this.method = method
        this.result = document.getElementById('result');
        
    }


    popTest = () => {
        let nombres = ['pedro','paco','maria'];
    
        let data = ('<b>Original: </b>' + nombres + '<br>');
    
        let resultado = nombres.pop(); // Remueve el ultimo y lo devuele
    
        data += ('<b>POP: </b>' + resultado + '<br>');
        data += ('<b>Resultado: </b>' + nombres);
    
        return data;
    
    }

    shiftTest = () =>{
        let nombres = ['pedro','paco','maria'];
    
        let data = ('<b>Original: </b>' + nombres + '<br>');
    
        let resultado = nombres.shift(); // Remueve el primero y lo devuele
    
        data += ('<b>Shift: </b>' + resultado + '<br>');
    
        data += ('<b>Resultado: </b>' + nombres);

        return data;
    
    }

    pushTest = () =>{  
        let nombres = ['pedro','paco','maria'];
    
        let data = ('<b>Original: </b>' + nombres + '<br>');
    
        let resultado = nombres.push('test','pepe'); // Añade un elemento al final del array y nos devuelve la cantidad de elementos o la posición del ultimo elemento que agregamos
    
        data += ('<b>Push: </b>' + resultado + '<br>');
    
        data += ('<b>Resultado: </b>' + nombres);

        return data;
    
    }
    

    getData(data,solve){
        this.result.innerHTML = data;
        this.result.innerHTML += `<span class="solve">${solve}</span>`;
    }

}




function setModal(id,method){
    id.addEventListener('click',()=>{
    
        window.dialog.showModal();
        method();
    
    })
    window.cerrar.addEventListener('click',()=>{
        window.dialog.close();
    })
}


let popF = new Metodos_arrays();
let shiftF = new Metodos_arrays();
let pushF = new Metodos_arrays();


const all = {
    pop: [
        document.getElementById('pop'),
        ()=> popF.getData(popF.popTest,popF.popTest())
    ],
    shift:[
        document.getElementById('shift'),
        ()=> shiftF.getData(shiftF.shiftTest,shiftF.shiftTest()) //encapsulamos funcion para se ejecute explisitamente cuando se llame 
    ],
    push: [
        document.getElementById('push'),
        ()=> pushF.getData(pushF.pushTest,pushF.pushTest())
    ]

}

for (const i in all) {

    setModal(all[i][0],all[i][1]);
}















//const result = document.getElementById('result');
//const pop = document.getElementById('pop');

/*function modal(id) {
    
    id.addEventListener('click',()=>{
        window.dialog.showModal();
    })
    window.cerrar.addEventListener('click',()=>{
        window.dialog.close();
    })
} */




//result.innerHTML = popTest;
//result.innerHTML += popTest();

/*
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

