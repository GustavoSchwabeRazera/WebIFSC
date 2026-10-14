var b;
let a;
const c = 3.14;

// string, number, null, undefined
// if, else, for, switch
// tipagem dinamica

b = 2.0;

if(a===b){
    console.log("O Valor é igual");
}
if(!a===b){
    console.log("O Valor é diferente");
}

var ItensChurrasco = [];
ItensChurrasco.push("Costela");
ItensChurrasco.push("pão de alho");
ItensChurrasco.push("Linguiça");

for ( let i =0; i < ItensChurrasco.length -1 ; i++){

}
ItensChurrasco.forEach((e,i) => {
    console.log(i+"-"+e);
})

nome = "João Henrique Macelo Boss"
console.log(nome.split("").reverse().join(""));


