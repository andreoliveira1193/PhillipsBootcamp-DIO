/*

_______________Promisses_____________________

É um objeto de processamento assincrono

inicialmente seu valor é desconhecido. elde pode, então, ser resolvida ou rejeitada.

uma promise pode ter 3 estados

pending
fulfilled
Rejected

___________________Async______________

funçoes assincronas precisam das duas palavras chave async await

funcoes assincronas tambem retornam promisses! então para receber o resultado também deve ser chamada passando o await.
Ex: await resolvePrimisse()

________________Await______________________

para o codigo até que seja resolvida 



_____________________APIS______________________

Application Programming Interface

JSON: Javascript Object Notation


____________________fetch___________________

o fetch retorna sempre uma promisse, então para consumir o valor é necessário passar para json. Também é necessário
passar o await para chamar quando precisar do resultado.

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))


As operações no banco são POST, GET, PUT, DELETE, etc..

fetch('https://endereco-api.com/', {
    method: 'GET'
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json))

// retorna uma promisse.

*/


const myPromisse = new Promise((resolve, reject) =>{
    window.setTimeout(() => {
        resolve('Resolvida');
    }, 2000);
});

await myPromisse
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

    //apos 2 segundos, retornara o valor
    // "Resolvida passando pelo then e agora acabou!"