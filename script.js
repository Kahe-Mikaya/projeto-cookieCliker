let menu_personagens = document.querySelector('.menu-personagens');
function adicionarPersonagem(personagem){
  let botao_adicionar = document.createElement("button");
  botao_adicionar.classList.add("personagens");
  menu_personagens.appendChild(botao_adicionar);
  let personagem_imagem = document.createElement("p")
  personagem_imagem.classList.add("personagem_imagem");
  personagem_imagem.style.backgroundImage = `url(${personagem.imagem})`;
  botao_adicionar.appendChild(personagem_imagem);
  let titulo_personagem = document.createElement("div");
  titulo_personagem.classList.add("titulo-personagem");
  let nome_personagem = document.createElement("h2");
  nome_personagem.classList.add("nome-personagem");
  nome_personagem.textContent = personagem.nome;
  titulo_personagem.appendChild(nome_personagem);
  let custo_personagem = document.createElement("p");
  custo_personagem.classList.add("custo-personagem");
  custo_personagem.textContent = `Custo: ${personagem.preco}`;
  titulo_personagem.appendChild(custo_personagem);
  async function clicar(personagem){
    totalCookies += personagem.cps*personagem.quantidade;
    console.log(totalCookies);
    quantidadeCookies.textContent = parseInt(totalCookies);
    setTimeout(() => clicar(personagem), 1000);
  }

  botao_adicionar.appendChild(titulo_personagem);
  let quantidade_personagem = document.createElement("p");
  quantidade_personagem.classList.add("quantidade-personagem");
  quantidade_personagem.textContent = personagem.quantidade;
  botao_adicionar.appendChild(quantidade_personagem);
  botao_adicionar.addEventListener("click",function(){
    console.log(personagem.nome);
    if (totalCookies >= personagem.preco){
      totalCookies -= personagem.preco;
      personagem.quantidade += 1;
      if (personagem.quantidade == 1){
        console
        clicar(personagem);}
    }  
    
  })
  
}

var request = new XMLHttpRequest();
request.open('GET', 'personagem.json');
request.responseType = "json";
request.send();
request.onload = function () {
  let perso = request.response;
  console.log(perso);
  for(i = 0; i< 4; i++){
    console.log("entrou no for")
    console.log(perso.personagens[i]);
    adicionarPersonagem(perso.personagens[i]);
  }
  
};


let totalCookies = 0;
let cookiesPorClick = 1;  

let cookiesPorSegundo = 0;
let cookie = document.querySelector("#cookie");




let quantidadeCookies = document.querySelector("#quantidade");
let elementoRotativo = document.querySelector(".rotacoes");
cookie.addEventListener("click",function(event){
  totalCookies += cookiesPorClick;
  quantidadeCookies.textContent = parseInt(totalCookies);
})
