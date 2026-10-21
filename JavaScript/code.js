let h1titulo=document.getElementById("titulo");
h1titulo.innerHTML="I62026";

let h1 = document.createElement("h1");
h1.innerHTML="ola";
document.body.appendChild(h1);

let inputPeso = document.getElementById("IPeso");
let inputAltura = document.getElementById("IAltura");
let calcular = document.querySelector("#button")

let resultado = document.querySelector("#IMC");

calcular.addEventListener("click",function(){
let peso = Number.parseFloat(inputPeso.value);
let altura = Number.parseFloat(inputAltura.value);

let imc = peso/ (altura * altura);

console.log(imc);
imc.toString;
resultado.innerHTML=imc

})


