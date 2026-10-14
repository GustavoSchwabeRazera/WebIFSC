console.log(window.screen);

document.body.innerHTML = "<p> OLA </p>";
document.body.style.backgroundColor = "cyan";

let div = document.createElement("div");


let pnome = document.createElement("p");
pnome.innerHTML = "Informe seu nome";
let inputNome = document.createElement("input");
inputNome.id = "inputNome"; 
div.appendChild(pnome);
div.appendChild(inputNome);


let peso = document.createElement("p");
peso.innerHTML = "Informe seu peso (ex: 70)";
let inputPeso = document.createElement("input");
inputPeso.id = "inputPeso"; 
div.appendChild(peso);
div.appendChild(inputPeso);


let altura = document.createElement("p");
altura.innerHTML = "Informe sua altura (ex: 1.75)";
let inputAltura = document.createElement("input");
inputAltura.id = "inputAltura";
div.appendChild(altura);
div.appendChild(inputAltura);

div.appendChild(document.createElement("br"));


let btnCalcular = document.createElement("button");
btnCalcular.id = "btnCalcular";
btnCalcular.innerHTML = "Calcular";
div.appendChild(btnCalcular);


btnCalcular.addEventListener("click", () => {
    
    let valPeso = Number(document.getElementById("inputPeso").value);
    let valAltura = Number(document.getElementById("inputAltura").value);
    let nome = document.getElementById("inputNome").value;

   
        let imc = valPeso / (valAltura * valAltura);
        console.log(imc);
   
});

document.body.appendChild(div);