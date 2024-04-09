let totalCookies = 0;
let cookiesPorClick = 1;  

let cookiesPorSegundo = 0;
let cookie = document.querySelector("#cookie");

let quantidade = document.querySelector("#quantidade");

cookie.addEventListener("click",function(){
  totalCookies += cookiesPorClick;
  quantidade.textContent = totalCookies;
})