const code = document.querySelector('.code');
const debug = document.querySelector('.debug');


let popTest = () =>{
    let nombres = ['pedro','paco','maria'];

    debug.innerHTML = '<b>Original: </b>' + nombres + '<br>';

    let resultado = nombres.pop(); // Remueve el ultimo y lo devuele

    debug.innerHTML += '<b>POP: </b>' + resultado + '<br>';

    debug.innerHTML += '<b>Resultado: </b>' + nombres;
   

}



popTest();




