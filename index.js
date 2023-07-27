/*

FAP SOFTEX CARUARU - BACKEND
PROFESSOR: ALCIDES BEZERRA
ALUNO: JOAO PAULO OLIVEIRA
LÓGICA DE PROGRAMAÇÃO COM JAVASCRIPT

Lista de 15 Exercicios - 25/07/2023

*/

const prompt = require("prompt-sync")();

// Criação da constante prompt para receber dados
// que serão usados em todos os exercícios.
// Cada exercício utilizará uma função independente.
// Retirar a barra dupla para executar cada função.

/* EXERCICIO 01
Escreva um programa que imprima "Olá, Mundo!" na tela.
*/

function Exercicio01(){
    console.log ("Olá, Mundo!");
}

// Exercicio01();

/* EXERCICIO 02
Crie um programa que solicite o nome do usuário e, em seguida,
imprima uma mensagem personalizada com o nome inserido.
*/

function Exercicio02(){
   const nome = prompt ("Digite seu nome: ");
   console.log (`Seu nome é ${nome}`);
}

// Exercicio02();

/* EXERCICIO 03
Escreva um programa que calcule a soma de dois números inteiros
e exiba o resultado.
*/

function Exercicio03(){
    const n1 = parseInt (prompt ("Digite o primeiro número: "));
    const n2 = parseInt (prompt ("Digite o segundo número: "));
    const media = (n1+n2)/2;
    console.log ("A média dos dois números é ", media)
}
//Exercicio03()

/* EXERCICIO 04
Crie um programa que receba a idade de uma pessoa e informe
so ela é maior ou menor de idade.
*/

function Exercicio04(){

    const idade = prompt ("Digite sua idade: ");
    if (idade >= 18) {
        console.log("Você já é maior de idade!");
    }
        else{
        console.log("Você ainda é menor de idade!");
        console.log("Faltam", (18-idade), "anos pra sua maioridade")
    }
}
//Exercicio04()

/* EXERCICIO 05
Faça um programa que verifique se um número é par ou impar
*/

function Exercicio05() {
    const numero = prompt ("Digite um número:")
    if (numero <= 0) {
      console.log("NÚMERO DIGITADO INVÁLIDO");
    } else if (numero % 2 === 0) {
        console.log("ESSE NÚMERO É PAR");;
    } else {
        console.log("ESSE NÚMERO É ÍMPAR");;
    }
  }

//Exercicio05()

/* EXERCICIO 06
Escreva um programa que calcule a média de três números
informados pelo usuário
*/

function Exercicio06(){
    const n1 = parseInt (prompt ("Digite o primeiro número:"));
    const n2 = parseInt (prompt ("Digite o segundo número:"));
    const n3 = parseInt (prompt ("Digite o terceiro número:"));
    const media = ((n1+n2+n3)/3);
    console.log ("A Média de", n1, n2, n3, "é de", media);
}

//Exercicio06()

/* EXERCICIO 07
Crie um programa que imprima os números de 1 a 10 em ordem crescente.
*/

function Exercicio07(){
var numero = 1;
    while (numero <=10) {
    console.log (numero);
    numero++;
    }
}

//Exercicio07()

/* EXERCICIO 08
Faça um programa que imprima os números pares de 1 a 20.
*/

function Exercicio08 (){
    for (var i = 2; i <=20; i ++){
        if (i%2===0){
        console.log (i);
        }
    }
}

//Exercicio08()

/* EXERCICIO 09
Crie um programa que determine se um número é primo ou não.
*/

function Exercicio09(){
    const num = prompt("Informe um número: ");
    
    function Primo(valor){
        for(var i=0; i<valor/2; i++){
            if(valor%i===0){
                return false;
            }
        }
        return true;
    }
    if (Primo(num)){
        console.log("O número ", num, "é primo!");
    } else{
        console.log("O número ", num, "não é primo!");    
    }

}

//Exercicio09();  

/* EXERCICIO 10
Faça um programa que converta graus Celsius para Fahrenheit.
*/

function Exercicio10(){
    const grausC = prompt ("Digite a temperatura em Graus Celsius:");
    const grausF = (grausC*9/5)+32;

    console.log (grausC,"°C equivalem a", grausF,"°F");
}
//Exercicio10()

/* EXERCICIO 11
Escreva um programa que receba uma lista de números
e imprime apenas os números pares.
*/

function Exercicio11(){
    prompt ("PARA ENCERRAR A LISTA DIGITE 0");
    let lista = [];
    var numero;
    for(let i=0; numero!=0; i++){
        
        numero = parseInt(prompt("Digite um número inteiro: "));
        if (numero!=0){
            lista[i] = numero;
        }
    }
    console.log("Os Números pares informados foram:")
    for(let i=0; i<lista.length; i++){
        if (lista[i]%2===0){
            console.log(lista[i]);
        }
    }
}
//Exercicio11();

/* Escreva um programa que receba uma lista de números
e retorne o maior e o menor valor.
*/

function Exercicio12(){
    prompt ("Digite FIM para encerrar a lista.");
    var valor, menor, maior;
    let primeiro_valor = true;
    while(valor!='FIM'){
        valor = prompt("Digite um número:");
        if (valor!='FIM'){
            valor = parseInt(valor);
            if(primeiro_valor){
                menor = valor;
                maior = valor;
                primeiro_valor = false;
            } else{
                if(valor>maior){
                    maior = valor;
                }
                if(valor<menor){
                    menor = valor;
                }
            }
        }
    }
    
    console.log("Maior número:",maior, "Menor número:", menor);
}

//Exercicio12();

