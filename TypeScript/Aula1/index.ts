function soma (a: number, b: number){
return a + b;
}

soma(1, 2);

console.log(soma(3221541,5000));

interface Pessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{

}

const brasileiro: Brasileiro ={
    nome: 'Andre',
    idade: 28,
}

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
}


 interface IFelinos extends IAnimal{
    visaoNoturna: boolean;
    executarRugido(intensidadeEmDb: number): void;
 }

interface ICaninos extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande';
}

type IDomestico = IFelinos | ICaninos;

const animal: IAnimal = {
    domestico: false,
    nome: 'Elefante',
    tipo: "terrestre",
   }

const animal1 : IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'médio',
    tipo: 'terrestre',
}

const felino: IFelinos = {
    domestico: false,
    nome: 'Leão',
    tipo: "terrestre",
    visaoNoturna: true, 
    executarRugido: (intensidadeEmDb) => (`${intensidadeEmDb}`), 
}

felino.executarRugido(2);


// -----------------------------Inputs----------------------------

const input = document.getElementById('input') as HTMLInputElement;

//console.log(input.value);

input.addEventListener('input', (event) =>{
   // console.log('Digitei');
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});


//--------------------Generic Types---------------------------

function AddApendiceLista(array, value){
    return array.map(item => item + value);
}

AddApendiceLista('a',1)

//quando eu nao sei um tipo posso por um diamante com um <T>, pois aí ficará inferido o tipo do dado
function AddApendiceLista1<T>(array: T[], valor: T){
    return array.map(() => valor);
};

AddApendiceLista1([1,2,3], 1)


interface IUsuario{
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor'; 
}

function redirect(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        //redirecionar para área de administração
    }

    //redirecionar para a área de usuário
}

 //outra forma de fazer

 interface IUsuario1 {
     id: string;
     email: string;
     cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'
 }

 function redirect1(usuario: IUsuario1){
     if(usuario.cargo){
         //redirecionar(usuario.cargo);
     }

     //redirecionar para a área do usuário
 }

 interface Gata {
     nome: string;
     idade: number;
     parqueFavorito?: string; // o ? quer dizer que é opcional esta propriedade
 }

 type GataSomenteLeitura = {
     readonly [K in keyof Gata]-?: Gata[K]; // o -? remove os opcionais dentro dessa classe
 }

class MinhaGata implements GataSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const gata = new MinhaGata('Gaia', 14);

import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou Nova Função');
    }
})

$('body').novaFuncao()