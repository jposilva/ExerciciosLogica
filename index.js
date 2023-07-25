const prompt=require("prompt-sync")();

function Exercicio1(){
    console.log ("Hello World");
}

//Exercicio1();

function Exercicio2(){
   const nome = prompt ("Digite seu nome:");
   console.log (`O nome digitado foi ${nome}`);
}
//Exercicio2();

function Exercicio3(){
    const num1 = parseInt (prompt ("Digite o primeiro número:"));
    const num2 = parseInt (prompt ("Digite o segundo número:"));
    console.log (`A média dos dois números é ${(num1+num2)/2}`)
}
Exercicio3()