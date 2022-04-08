function getAdmins(map){
    let admins = [];

    for([key, value] of map){
        if(value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios  = new Map();

usuarios.set('Andre', 'Admin');
usuarios.set('Karine', 'Admin');
usuarios.set('Gaia', 'User');
usuarios.set('Alfredo', 'User');

console.log(getAdmins(usuarios));


const meuArray = [30, 30, 40, 5, 223, 3049, 4034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; // reticencias quer dizer spread um metodo de espelhamento
}

console.log(valoresUnicos(meuArray));