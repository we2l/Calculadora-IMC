const calcular = document.querySelector('.button_calcular');
const limpar = document.querySelector('.button_limpar');
let imc = document.querySelector('.imc');
const img = document.querySelector('.img')


function calculaImc() {
    const altura = document.querySelector('.altura').value;
    const peso = document.querySelector('.peso').value;
    let result = parseFloat(peso/(altura*altura));
    imc.innerHTML = result.toFixed(2);
    if (result > 18,5 && result <= 24.9   ) 
    img.src = "./imgs/feliz.png"
    else 
    img.src = './imgs/triste.png' 
}

function limpaImc() {
    document.querySelector('.altura').value = '';
    document.querySelector('.peso').value = '';
    imc.innerHTML = '';
    img.src = ''
}

limpar.addEventListener('click',limpaImc)
calcular.addEventListener('click', calculaImc )


