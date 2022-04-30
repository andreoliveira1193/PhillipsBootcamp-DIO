/*
______________MAP___________________________
_______________Estrutura___________________

é uma coleção de arrays no formato [chave, valor];
Pode ser iterado por um loop for...of


const map = new Map();


const myMap = new Map()

myMap.set('apple', 'fruit');
// map(1) {"apple" => "fruit"}

myMap.get(apple);
// fruit

myMap.delete("apple");
// true

myMap.get("apple")
// undefined


Maps podem ter chaves de qualquer tipo
possuem a propriedade de length
maps sao mais faceis de iterar
utilizado quando o valor das chaves é desconhecido
os valores do map tem o mesmo tipo


______________SET___________________________
_______________Estrutura___________________

Sâo estruturas que armazenam apenas valores únicos.

const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];

const mySet = new Set(myArray);


const mySet = new Set();

mySet.add(1);
mySet.add(4);

mySet.has(2);
// false

myset.has(4);
// true

mySet.delete(1);


Set vs Array

set possui valores únicos

em sets em vez da propriedade length, consulta-se o número de registros pela propriedade size;
não possui os métodos map, filter, reduce etc...





*/