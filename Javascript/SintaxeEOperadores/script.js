var numero1;
var numero2;
var resultado;
var iguais;
var menor20;
var maior10;

// var,const,let

//numero1 = Number(prompt('Digite o Primeiro Número:'));
//numero2 = Number(prompt('Digite o Segundo Número: '));

function funcao (numero1, numero2){
    if(numero1 == numero2){
       iguais = 'São Iguais'
    }else{
        iguais = 'Não São Iguais'
    }
    resultado = numero1 + numero2

    if(resultado < 20){
        menor20 = 'Menor'
    }else{
        menor20 = 'Maior'
    }
    if (resultado > 10){
        maior10 = 'Maior'
    }else{
        maior10 = 'Menor'
    }

    console.log(`Os números ${numero1} e ${numero2} ${iguais}. Sua soma é ${resultado}, que é ${maior10} que 10 e ${menor20} que 20.`);
}

funcao(1, 2);