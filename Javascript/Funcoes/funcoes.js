// função anonima 

/*
const soma = function(a, b){
    return a+b;
}

soma(1, 5) == 6

função auto invocável
IIFE (immediately Invoked Function Expression)

(
    function (){
        let name = "Andre Oliveira"
        return name;
    }
)();

ex:

(
    function(a, b){
        return a + b;
    }
)(1, 2); // 3

ela também pode ser usada com parametros e armazenada em uma variável

const soma3 = (
    function(){
        return a + b;
    }
)(1, 2);
console.log(soma3) //3


Callbacks

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub); // 1

____________Parâmetros_________________

function exponencial(array, num = 1){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }
    return result;
}

exponencial([1, 2, 3, 4])
// [1, 2, 3, 4]

exponencial([1, 2, 3, 4], 4);

____________Arguments________________

é uma coleção com todos os parametros passados quando a função foi invocada

function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }

    return max;
}

function showArgs(){
    return arguments;
}

showArgs(1, 2, [2, 3, 4], "string");


____________Arrays______________

Spread: é uma forma de tratar separadamente os elementos do array

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

Rest: combina os elementos em um array

function confereTamanho(...args){
    console.log(argslength)
}

confereTamanho() // 0
confereTamanho(1,2) // 2
confereTamanho(3, 4, 5) // 3


_________________Objetos______________

Object Destructuring

const user = {
    id: 42,
    displayName:{
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullname: {firstname: first, lastName: last}}){
    return `${first} ${last}`;
}

userId(user)
// 42

getFullName(user);
// John Doe

_______________Switch/case_______________

equivale a uma comparação de tipo e valor (===)
sempre precisa de um valor "default"
ideal para quando se precisa comparar muitos valores


function getAnimal(id){
    switch(id){
        case 1:
            return "cão";
        case 2:
            return "gato";
        default:
            return "fish";
    }
}
getAnimal(2) // gato
getAnimal("1") // fish


_________________FOR____________

function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);
// nome
// idade
// cidade


function forInExemplo(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

// João
// 20
// Salvador


___________FOR...of______________

function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "abacaxi"

logLetras(palavra)

// a
// b
// a
// c
// a
// x
// i

function logNumeros(nums){
    for(num of nums){
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

logLetras(nums)
// 30
// 20
// 233
// 2

_________________________DO_While_________________

function exemploDoWhile(){
    let num = 6;

    do{
        console.log(num)
        num ++
    }while(num <= 5)

}

exemploDoWhile() // 6



____________________THIS___________________

A palavra this é uma referencia de contexto

const pessoa = { 
    firstName: "Andre",
    lastName: "Oliveira",
    id: 1,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

pessoa.fullName();
// "André Oliveira"

pessoa.getId(); // 1

no contexto acima o this se refere ao objeto pessoa.

______________CALL_____________


const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(animal);
// 'Murphy'


_________________APPLY______________

a diferença entre CALL e APPLY esta na passagem de argumentos para a função onde no CALL separado por virgula e no Apply
é passado dentro de um array.

const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(animal)
// 'Murphy'

____________BIND____________________

const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno();
// Bruno


________________ARROW_FUNCTIONS_______________

const helloWorld = function(){
    return "Hello World"
};

const helloWorld = () => {
    return "Hello World";
} // usa-se quando a função tem mais de uma linha

const helloWorld = () => "Hello World!";
// quando tem apenas uma linha nem return nem chaves são obrigatórios

somente var faz hoisting quer dizer que se pode chamar a variável antes de declará-la!!!!!!!!!!!!!!!!!!!!!!!!
o hoiisting so ira levar para o topo a declaracao da variavel -> var teste. A o valor real continuará sendo atribuído 
na linha original da variável.

Restrições 

this sempre sera o objeto global. Métodos para modificar o seu valor não irão funcionar;

não existe o objeto "arguments";

O construtor(ex: new MeuObjeto()) também não pode ser utilizado.



*/