
let frase = document.querySelector('textarea');

let botao = document.getElementById('botao');
botao.addEventListener('click', seila);

function seila(evento) {
    evento.preventDefault();
    let novaFrase = frase.value;
    let texto = document.querySelector('.texto');
    transformaEmAsterisco(novaFrase);
    texto.classList.add('p-4');
    texto.textContent = fraseSplit.join('');
}

function transformaEmAsterisco(frase) {
    fraseSplit = frase.split('');
    for (i = 0; i < fraseSplit.length; i++) {
        if (fraseSplit[i] !== ' ') {
          fraseSplit[i] = '*'
        }
      }
    return fraseSplit;
}