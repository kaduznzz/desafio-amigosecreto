
//variáveis

let contadorAmigos =  0;
let listaNomes=[];
let listaAmigos = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado')

alert ('Boas vindas ao jogo do Amigo Secreto!');

//função para inserir nomes no input

function adicionarAmigo(){
    let nomes = document.querySelector('#amigo').value;

    if (nomes === '') {
        alert('Por favor, insira um nome válido')
    }   else {
        console.log('O botão foi clicado!')
        listaNomes.push(nomes)
        listaAmigos.innerHTML =  listaNomes.map(nome => `<li>${nome}</li>`).join('');
        console.log(listaNomes);

        let limparCampo = document.querySelector('#amigo')
        limparCampo.value = '';

        contadorAmigos++;
        console.log(listaAmigos);
    }
}

//sortear amigo
function sortearAmigo() {
    if (contadorAmigos <= 1) {
        alert('Por favor, insira mais um nome')
    } else {
        let amigoSorteado = parseInt(Math.random() * contadorAmigos);
        resultado.innerHTML = listaNomes[amigoSorteado];
        console.log(`O amigo sorteado é... ${amigoSorteado}`)
    }
  
}