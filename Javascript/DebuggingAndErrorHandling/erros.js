/*
__________ECMASCRIPTERROR_________________________

Erros que ocorrem em tempo de execução

composto por

mensagem
nome 
linha
call stack

______________DOMException_________________

Document Obeject Model.

erros relacionados a uma pagina que esta consumindo os dados. Ou sobre a estrutura de elementos de uma pagina da web.

Return como tratamento de erro vai retornar a string literal.
Throw -> lança exceção em tempo de execução. é tratado pelo navegador como erro. com todo o tratamento de erros.

Try ... catch finally

function verificaPalindromo(string){
    if(!string) throw "String inválida!";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    }
    catch(e){
        console.log(e)
    }
    finally{
        console.log('A string enviaada foi: ' + string);
    }
}

tryCatchExemplo('');


_____________ERROR_OBJECT______________


new Error(message, filename, lineNumber)

const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';
throw MeuErro;















*/