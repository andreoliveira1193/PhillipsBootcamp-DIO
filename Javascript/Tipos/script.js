/* Estrutura de dados!
JS tem tipagem dinâmica. TypeScript é uma linguagem tipada de JS.
Ponto e vírgula é opcional, mas é sempre bom usar!!!

String{
Type of - verifica tipo de variável.
Texto é inserido dentro de ''(aspasSimples) ou ""(aspasDuoplas) ou ``(Crases). 
Quando crases, podemos usar texto corrido e por as variaveis dentro de ${}. 

Quando instancia com String(S maiúsculo), aí será um objeto.
String é um tipo iterável, podemos navegar pelo index string[0]

"\n" é uma quebra de linha, pode ser utilizados quatas forem necessárias

com a crase não precisa por quebra de linha, ou espaços entre variáveis `${nome} ${sobrenome}` = 'nome sobrenome' 

para usar uma " ou ' dentro de "" ou '' posso usar um scape \ para retonar como string. exemplo '\'', "\"" 

Métodos importantes
-> Concatenar
-> Length
-> Iterabilidade (navegar pelo indice)
-> Formatação toLowerCase - Uppercase - CamelCase etc...

}
 
Numbers {
Usa operações básicas, e pode ser declarado como let também onde let indica o escopo da variável, e não o tipo.

operadores / * + - % ** 

Métodos como no Java Math.
Math.floor arredonda para baixo
Math.ceil arredonda para cima
    
}

Boolean{
    True, False... And that is it!

    Utilizado com operadores de comparação == ou ===(valida valor e tipo) && || !

    Lembrete:

//comparação identica, considera inclusive o tipo === retorna boolean 
//Operados Aritméticos +(soma) -(subração) *(multiplicação) /(divisão) %(mod) **(potenciação)
//Operadores Relacionais < > >= <=
//Operadores Lógicos &&(and) ||(or) !(not)
}

Array{
    Array é declarado como [], onde pode ser definido o tipo de array String[]

    array.push adiciona valor no final do array
    array.pop remove o ultimo valor do array
    array.shift remove o primeiro elemento do array
    array.unshifit adciona na primeira posição do array

}

Object {

    São chamados de estruturas chave -> valor

    let person{
    Keys    name: 'John'  values
            age: 20
    }
}

Empty, undefined, Null{
   Empty -> 0, '', {}, []
   Null -> nulo, não existe
   undefined -> indefinido - sem tipo

}






*/
let um = "um";

typeof um;

let exemplo = new String("TesteDeObjeto");
typeof exemplo;

let teste1 = um;
console.log(teste1);
console.log(um.charAt(1));


console.log(teste1.toUpperCase());

let num = 100;

let tenByFive = 10/5;

Math.ceil(tenByFive);

validation = 3>4;
console.log(validation);

validation = undefined;

validation = teste1 && tenByFive;
console.log(validation);

let array = [1,2,3];

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

console.log(array.includes(4)); 

console.log(array.every(item => item === 4));

console.log(array.some(item => item === 3));

let obj = {};

obj.name = "Andre";

obj.age = 28;

Object.keys(obj);

let person = {
    name : "Andre",
    age  : 28,
    adress: "Do Eng"

}
console.log(person);