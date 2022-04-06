import { mostrarIdade } from "./modulos.js";
import { mostraCidade } from "./modulos.js";
import { mostrarHobby } from "./modulos.js";

// como é do mesmo arquivo poderia ter importado separado por virgula
//ex import {mostrarIdade, mostraCidade, mostrarHobby} from "./modulos.js" OBS: é imprescindível colocar a extensão do arquivo no import!!!!!!


console.log(mostrarIdade("Andre", 28));
console.log(mostraCidade("Andre", "BNU"));
console.log(mostrarHobby("Andre", "Eletronica"));
