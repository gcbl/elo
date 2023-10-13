versao = 0;

function gerarNumeroAleatorio() {
    const instanteAtual = new Date().getTime();
    const numeroAleatorio = Math.floor(Math.random() * instanteAtual);
    return numeroAleatorio;
}

// Função para carregar o script dinamicamente
function loadScript(url, callback) {
   console.log("Vai carregar o script:");
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.async = true;
    script.onload = callback;
    document.head.appendChild(script);
    console.log("Alemento appendado no HEAD");
}

// Função de retorno de chamada a ser executada quando o script for carregado
function setaVersaoJSONPCallback(data) {
    // Aqui você pode manipular os dados recebidos do script carregado dinamicamente
    console.log("Dados recebidos via JSONP:", data);
    versao = data
    console.log("Versao setada:" + versao);
}

// URL do script externo que você deseja carregar
var versaoUrl = "https://cdn.jsdelivr.net/gh/gcbl/elo/versao?callback=setaVersaoJSONPCallback&rnd=" + gerarNumeroAleatorio();

// Carregando o script dinamicamente
loadScript(versaoUrl);


/* Injeta tag script */

function injetarScript(scriptNome) {
    var script = document.createElement('script');
    script.src = scriptNome;

    script.onload = function() {
        console.log('Script "' + scriptNome + '" injetado com sucesso.');
        // Aqui voce pode adicionar codigo que depende do script injetado
    };

    document.head.appendChild(script);
}

