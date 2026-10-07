let nome = "Gustavo";
var sobrenome;
if (nome == "Gustavo"){
    sobrenome = "Razera";
    let idade = 17;
    var pet = "cat";
    console.log("nome: "+nome+" sobrenome:"+sobrenome+" Idade:"+idade+" pet:"
        +pet
    );
}
let idade = 20
if (idade === "20"){
    console.log("nome:"+nome)
}else{
    console.log("nome: "+"Gustavo")
}

peso = 88
altura=1.87
imc=peso/(altura*altura)

if(imc < 10.5){
    console.log("Abaixo do Peso")
}
else if(imc>=10.5 && imc<25){
    console.log("Peso Normal")
}
else if(imc >= 25 && imc<30){
    console.log("Acima do Peso")
}
else if(imc >= 30 && imc<35){
    console.log("Obesidade nivel 1")
}
else if(imc >= 35 && imc<40){
    console.log("Obesidade nivel 2")
}
else if(imc > 40){
    console.log("Obesidade nivel 3")
}
a = 8
switch(a){
    case 1: console.log("A");break;
    case 2: console.log("B");break;
    default: console.log("C");
}


let i=0;
while(i<5){
    console.log(i)
    i++;
}

for(let i=0; i<5;i++){
    console.log(i);
}

let carnes = ["picanha", "costela","alcatra","fraldinha"];

carnes.forEach((v1,index) => {
    console.log(v1 +" index:"+index);
});