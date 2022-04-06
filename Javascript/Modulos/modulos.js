/* 
Exportar funções

export function exemplo(){

}

function exemplo2(){}
ou 

export{
    exemplo,
    exemplo1
}

export default exemplo; // só pode haver um export por arquivo!! so retornará esta função


import {exemplo, exemplo2} from './file.js'

os modulos sempre estão em strict mode!

o fato de se ter os imports, facilita a o "trackeamento" de informações e módulos.

default import

import valorDefault from './file.js'

trocando nome dos imports
import {arquivo as Apelido} from './arquivo.js'

import * as INFOS from './file.js'
INFOS.metodo();
console.log(INFOS.variavel);


Vinculando ao HTML{
    <script type="module" src="./main.js"></script>

}

-> pesquisar strict mode
-> extensoes podem ser .js e .mjs
-> para testes locais é necessário utilizar um servidor
-> lembar de importar sempre usando a extensao no nome do arquivo (.js, .mjs)]
-> lembrar de sempre utilizar o ./ como ponto de partida do caminho do arquivo



*/

function mostrarIdade(nome, idade){
    return `A idade de ${nome} é ${idade} anos.`
}

function mostraCidade(nome, cidade){
    return `${nome} mora na cidade de ${cidade}.`
}

function mostrarHobby(nome, hobby){
    return `${nome} tem o hobby de ${hobby}.`
}

export{
    mostrarIdade,
    mostraCidade,
    mostrarHobby
}