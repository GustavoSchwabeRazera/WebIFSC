


console.log(window.screen)
document.body.innerHTML="<p> OLA <p>"
document.body.style.backgroundColor="gray"

let div = document.createElement("div");

let pnome = document.createElement("p");
pnome.innerHTML="Informe seu nome"
div.appendChild(pnome);
div.appendChild(document.createElement("input"));

let peso = document.createElement("p")
peso.innerHTML="Informe seu peso"
div.appendChild(peso);
div.appendChild(document.createElement("input"));

let idade = document.createElement("p")
idade.innerHTML="Informe sua idade"
div.appendChild(idade);
div.appendChild(document.createElement("input"));



document.body.appendChild(div);
