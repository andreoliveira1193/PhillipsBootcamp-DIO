let array = ['String', true, 1]
console.log(array);

let array1 = ['string', 1, true, ['array2'], ['array3'], ['array4']];
console.log(array1[2]);

array1.forEach(function(item,index){console.log(item,index)});

array1.push('newItem');
console.log(array1);

//remove o ultimo item do array
array1.pop();
console.log(array1);

//remove o primeiro item do array
array1.shift();
console.log(array1);

//adiciona intem no inicio do array
array1.unshift('Novoarray');
console.log(array1);

console.log(array1.indexOf(true));

array1.splice(0,3);
console.log(array1);

let novoArray = array.slice(0,3);
console.log(novoArray);

///////// Objetos ///////


let object = {string: 'String', Number: 1, array: ["array"]}