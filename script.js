const code = document.querySelector('.code');
const debug = document.querySelector('.debug');


let popTest = () =>{
    let nombres = ['pedro','paco','maria'];

    debug.innerHTML = '<b>Original: </b>' + nombres + '<br>';

    let resultado = nombres.pop(); // Remueve el ultimo y lo devuele

    debug.innerHTML += '<b>POP: </b>' + resultado + '<br>';

    debug.innerHTML += '<b>Resultado: </b>' + nombres;


}


let test = `
<span class="purple">let</span> <span class="yellow">popTest</span> <span class="red">=</span> <span class="yellow">()</span> <span class="purple">=></span><span class="yellow">{</span>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="purple">let</span> <span class="blue">nombres</span> <span class="yellow">=</span> <span class="yellow">[</span><span class="green">'pedro','paco','maria'</span><span>]</span>;
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="orange">debug</span>.<span class="blue">innerHTML</span> <span class="red">=</span> '<b>Original: </b>' + nombres + '<br>';

    let resultado = nombres.pop(); // Remueve el ultimo y lo devuele

    debug.innerHTML += '<b>POP: </b>' + resultado + '<br>';

    debug.innerHTML += '<b>Resultado: </b>' + nombres;


}

`
code.innerHTML = test;

popTest();





