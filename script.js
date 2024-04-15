class Personagem  {

   constructor(nome, cps, custo, quantidade){
    this.nome = nome;
    this.cps = cps;
    this.custo = custo;
    this.quantidade = quantidade;
   }

}

async function clicar(personagem){
  totalCookies += personagem.cps*personagem.quantidade;
  console.log(totalCookies);
  quantidadeCookies.textContent = parseInt(totalCookies);
  setTimeout(() => clicar(personagem), 1000);


}

let cursor_personagem = new Personagem("Cursor", 0.1, 15, 0);

let totalCookies = 0;
let cookiesPorClick = 1;  

let cookiesPorSegundo = 0;
let cookie = document.querySelector("#cookie");

let cursor = document.querySelector("#cursor");


let quantidadeCookies = document.querySelector("#quantidade");
let elementoRotativo = document.querySelector(".rotacoes");
cookie.addEventListener("click",function(event){
  totalCookies += cookiesPorClick;
  quantidadeCookies.textContent = totalCookies;
})

cursor.addEventListener("click",function(){
  if (totalCookies >= cursor_personagem.custo){
    totalCookies -= cursor_personagem.custo;
    cursor_personagem.quantidade += 1;
    if (cursor_personagem.quantidade == 1){
      clicar(cursor_personagem);}
  }  
  
})