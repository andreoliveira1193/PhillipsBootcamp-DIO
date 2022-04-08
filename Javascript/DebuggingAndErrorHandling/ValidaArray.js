function validar(array, number){
try{
    if(!array && !number) throw new ReferenceError("Insira os parâmetros para continuar!");
    if(typeof array !== 'object') throw new TypeError("O Array precisa ser do tipo objeto!");
    if(typeof array !== 'number') throw new TypeError("O Numero não é do tipo number");
    if(array.length !== number) throw new RangeError("O tamanho do vetor está diferente do numero enviado!")
    return array;
}catch(e){
    if (e instanceof ReferenceError){
        console.log("Este erro é de ReferenceError!");
        console.log(e.message);
    }else if (e instanceof TypeError){
        console.log("Este erro é de TypeError!");
        console.log(e.message);
    }else if (e instanceof RangeError){
        console.log("Este erro é de RangeError!");
        console.log(e.message);
    }else{
        console.log("Tipo de erro não esperado: " + e);
    }
   }
    
    
}

console.log(validar());
console.log(validar([], 5));;
console.log(validar([1, 2, 3, 4, 5], 5));