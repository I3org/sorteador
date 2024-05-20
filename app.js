function sortear() {
    let quantidade = parseInt(document.querySelector('#quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    console.log(`quantidade : ${quantidade}`);
    console.log(`de : ${de}`);
    console.log(`ate : ${ate}`);

    if (quantidade > (ate - de + 1)) {
        console.error('Quantidade solicitada é maior que o intervalo disponível');
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Quantidade solicitada é maior que o intervalo disponível</label>';
        return;
    }

    let sorteados = new Set();
    let numero;

    while (sorteados.size < quantidade) {
        numero = gerarNumeroAleatorio(de, ate);
        sorteados.add(numero);
    }

    sorteados = Array.from(sorteados);

    console.log(sorteados);

    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;

    alterarStatusBotao()
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
    } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
    }
}


function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao()
}

function gerarNumeroAleatorio(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Os parâmetros devem ser números');
    }
    if (min > max) {
        throw new Error('O valor mínimo não pode ser maior que o valor máximo');
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
