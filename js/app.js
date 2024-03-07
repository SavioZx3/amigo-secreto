let amigos = [];
let nomeAmigo = document.getElementById("nome-amigo");
let lista = document.getElementById("lista-amigos");
let sorteados = document.getElementById("lista-sorteio");

function adicionar (){
    if(nomeAmigo.value === ''){
        alert('Digite o nome do amigo para adicionar');
        return;
    }
    
    amigos.push(nomeAmigo.value);
    nomeAmigo.value = '';
    
    lista.textContent = amigos.join(', ');
}

function sortear(){
    sorteados.innerHTML = '';
    
    if(amigos.length === 1){
        alert('Adicione mais um amigo para sortear');
        return;
    } 
    
    embaralhaLista(amigos);
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteados.innerHTML = sorteados.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteados.innerHTML = sorteados.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function reiniciar(){
    amigos = [];
    lista.textContent = ''
    sorteados.innerHTML = '';
}


function embaralhaLista(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}