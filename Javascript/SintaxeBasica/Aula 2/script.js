//tiposPrimitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

var nome = "Andre"
console.log(typeof(nome));

//declararVariavel

var variavel = 'Andre';
variavel = 'Andre1';
console.log(variavel);

let variavel2 = 'Teste';
variavel2 = 'Teste2';
console.log(variavel2);

const constante = 'Teste3';
//constantesNãoPodemSerReatribuídas
    //constante = 'Teste4';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuição é o sinal de  =  
//comparação é == retorna boolean
//comparação identica, considera inclusive o tipo === retorna boolean 
//Operados Aritméticos +(soma) -(subração) *(multiplicação) /(divisão) %(mod) **(potenciação)
//Operadores Relacionais < > >= <=
//Operadores Lógicos &&(and) ||(or) !(not)

