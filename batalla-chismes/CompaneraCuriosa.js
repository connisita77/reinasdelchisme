// classes/CompaneraCuriosa.js
const Chismosa = require('./Chismosa');


class CompaneraCuriosa extends Chismosa {
recolectarInfo() {
console.log('🗂️ Compañera Curiosa: Hace preguntas aparentemente profesionales a los compañeros de trabajo');
this._sumarNivel(Math.floor(Math.random() * 2)); // 0–1
if (Math.random() < 0.7) this._sumarReputacion(1); // 70% sube 1
}


contarChisme() {
console.log('📊 Compañera Curiosa: Comenta el chisme como ejemplo de vida en el trabajo');
this._sumarNivel(Math.floor(Math.random() * 2)); // 0–1
this._sumarReputacion(Math.floor(Math.random() * 2)); // 0–1
}
}


module.exports = CompaneraCuriosa;// classes/CompaneraCuriosa.js
const Chismosa = require('./Chismosa');


class CompaneraCuriosa extends Chismosa {
recolectarInfo() {
console.log('🗂️ Compañera Curiosa: Hace preguntas aparentemente profesionales a los compañeros de trabajo');
this._sumarNivel(Math.floor(Math.random() * 2)); // 0–1
if (Math.random() < 0.7) this._sumarReputacion(1); // 70% sube 1
}


contarChisme() {
console.log('📊 Compañera Curiosa: Comenta el chisme como ejemplo de vida en el trabajo');
this._sumarNivel(Math.floor(Math.random() * 2)); // 0–1
this._sumarReputacion(Math.floor(Math.random() * 2)); // 0–1
}
}


module.exports = CompaneraCuriosa;