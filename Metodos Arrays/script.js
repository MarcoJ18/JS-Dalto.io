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

    let resultado = nombres.push('test','pepe'); // Añade un elemento al final del array y nos devuelve la cantidad de elementos o la posición del ultimo elemento que agregamos

    document.write('<b>Push: </b>' + resultado + '<br>');

    document.write('<b>Resultado: </b>' + nombres); 
}