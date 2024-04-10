let totalCookies = 0;
let cookiesPorClick = 1;  

let cookiesPorSegundo = 0;
let cookie = document.querySelector("#cookie");


let quantidade = document.querySelector("#quantidade");
let elementoRotativo = document.querySelector(".rotacoes");
cookie.addEventListener("click",function(event){
  totalCookies += cookiesPorClick;
  quantidade.textContent = totalCookies;

 
  
})