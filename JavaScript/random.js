document.body.style.backgroundColor = "green";

let div = document.createElement("div");

let min = document.createElement("p");
min.innerHTML = "Min";
let inputMin = document.createElement("input");
inputMin.id = "inputMin"; 
div.appendChild(min);
div.appendChild(inputMin);

let max = document.createElement("p");
max.innerHTML = "Max";
let inputMax = document.createElement("input");
inputMax.id = "inputMax"; 
div.appendChild(max);
div.appendChild(inputMax);

let btnSortear = document.createElement("button");
btnSortear.id = "btnSortear";
btnSortear.innerHTML = "Sortear";
div.appendChild(btnSortear);

function gerarRandomInteiro(minVal, maxVal) {
  return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

btnSortear.addEventListener("click", () => {
    let valMax = Number(document.getElementById("inputMax").value);
    let valMin = Number(document.getElementById("inputMin").value);
    
    console.log(gerarRandomInteiro(valMin, valMax));
});

document.body.appendChild(div);