//mostrando as variáveis
let listaAmigos = [];  // pra armazenar os nomes dos amigos que vão ser adicionados
let listaElement = document.getElementById('listaAmigos');  //lista de amigos no html
let resultadoElement = document.getElementById('resultado');  // mostra o resultado do sorteio
//para adicionar um amigo na lista
function adicionarAmigo() {
    let input = document.getElementById('amigo');  // Pega a referência do campo de entrada
    let nomeAmigo = input.value.trim();  //faz 

    if (nomeAmigo === "") {  // se não houver um nome vai fazer um alerta
        alert("Ei, você precisa digitar alguma palavra!");
        return;  //interrompe a verificação do if
    }

    listaAmigos.push(nomeAmigo);  // adiciona a palavra digitada na lista
    atualizarLista(); 
    input.value = "";  // limpa oque foi digitado após aplicar o nome
}

// atualiza lista de amigos abaixop 
function atualizarLista() {
    listaElement.innerHTML = ""; //limpa a lista
    listaAmigos.forEach((amigo, index) => {  //olha os nomes da lista
        let li = document.createElement('li'); //cria o 'li'
        li.textContent = amigo; //coloca o 'li' pra aparecer a palavra digitada
        listaElement.appendChild(li);  //adiciona a lista abaixo
    });
}

// sorteio da palavra aleatoria
function sortearAmigo() {
    if (listaAmigos.length === 0) { //verifica se o local da palavra ta vazio 
        alert("Eita, vc esqueceu de digitar um nome :c"); // alerta se a lista estiver vazia
        return;  // interrompe a função
    }
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);  // sorteio aleatorio dos nomes
    let amigoSorteado = listaAmigos[indiceSorteado];  // seleciona o nome
    resultadoElement.innerHTML = `Amigo Secreto sorteado: <strong>${amigoSorteado}</strong>`;  // mostra no nome na pagina
}
