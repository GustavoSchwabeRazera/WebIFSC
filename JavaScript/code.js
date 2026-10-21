let h1titulo=document.getElementById("titulo");
h1titulo.innerHTML="I62026";

let h1 = document.createElement("h1");
h1.innerHTML="ola";
document.body.appendChild(h1);

let inputPeso = document.getElementById("IPeso");
let inputAltura = document.getElementById("IAltura");
let calcular = document.querySelector("#button")
let img = document.getElementById("img");
let resultado = document.querySelector("#IMC");
let desc = document.getElementById("desc");

calcular.addEventListener("click",function(){
let peso = Number.parseFloat(inputPeso.value);
let altura = Number.parseFloat(inputAltura.value);

let imc = peso/ (altura * altura);

switch (true) {
        case (imc < 18.5):
            desc.innerHTML="Abaixo do peso";
            img.src = "img/abaixopeso.png"
            
            break;
        case (imc >= 18.5 && imc <= 24.9):
            desc.innerHTML= "Peso normal";
            img.src = "img/normal.png"
            break;
        case (imc >= 25.0 && imc <= 29.9):
            desc.innerHTML= "Sobrepeso";
           img.src = "img/sobrepeso.png"
            break;
        case (imc >= 30.0 && imc <= 34.9):
            desc.innerHTML= "Obesidade grau 1";
            img.src = "img/obesidade1.png"
            break;
        case (imc >= 35.0 && imc <= 39.9):
            desc.innerHTML= "Obesidade grau 2";
            img.src = "img/obesidade2.png"
            break;
        default:
            desc.innerHTML= "Obesidade grau 3";
            img.src = "img/obesidade3.png"
            break;
    }
console.log(imc);


resultado.innerHTML=imc.toFixed(2);

})


