let listaDeNumerosSorteados = [];
let limiteDeTentativas = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
        {rate:1.2});

}
function exibirMensagemIniciar(){
    exibirTextoNaTela('h1','Jogo do Número Secreto.');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
exibirMensagemIniciar();

function verificarChute(){
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas =`Você descobiu o número Secerto, com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if (chute> numeroSecreto) {
            exibirTextoNaTela('p', 'O número é menor que o chute.');
        } else{
            exibirTextoNaTela ('p', 'O número secreto é maior que o chute.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolido = parseInt(Math.random() * limiteDeTentativas + 1);
   let quatidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quatidadeDeElementosNaLista == limiteDeTentativas){
        listaDeNumerosSorteados=[];
    }
   if (listaDeNumerosSorteados.includes(numeroEscolido)){
    return gerarNumeroAleatorio();
   } else{
    listaDeNumerosSorteados.push(numeroEscolido);
        return numeroEscolido;
   }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIniciar();
    document.getElementById('reiniciar'). setAttribute('disabled', true);
}