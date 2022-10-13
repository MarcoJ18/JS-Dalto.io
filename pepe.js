const test = document.querySelector('.pepe');
const code = document.querySelector('.code');
const hola = document.querySelector('.hola');

test.addEventListener('click',()=>{
    
   code.classList.toggle('popup');
   hola.classList.toggle('hola');
})


let popTest = () =>{
    let nombres = ['pedro','paco','maria'];

    hola.innerHTML += ('<b>Original: </b>' + nombres + '<br>');

    let resultado = nombres.pop(); // Remueve el ultimo y lo devuele

    hola.innerHTML += ('<b>POP: </b>' + resultado + '<br>');

    hola.innerHTML += ('<b>Resultado: </b>' + nombres);

}

popTest();
