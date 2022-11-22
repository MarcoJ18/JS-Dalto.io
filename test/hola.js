
const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
    let input = document.createElement('input');
    input.value = 'text';
    document.body.appendChild(input);
    input.select();
    navigator.clipboard.writeText(input.value);
    document.body.removeChild(input);
});
