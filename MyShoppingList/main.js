/// referintele initiale la buton, input si lista .
var input = document.querySelector("input"); 
var button = document.querySelector("button");
var ulLista = document.querySelector("ul");

// creeaza un nou <li>
button.addEventListener("click", function(){ 
    var nouLi = document.createElement("li");
    nouLi.textContent = input.value;
   // alert(nouLi);
    ulLista.appendChild(nouLi);
});
