// classes/TiaVecina.js
const Chismosa = require('./Chismosa');


class TiaVecina extends Chismosa {
recolectarInfo() {
console.log('🫖 Tía Vecina: Aprovecha la reunión del barrio para escuchar discretamente');
// Subida clara del chisme, leve riesgo a reputación
const subir = 1 + Math.floor(Math.random() * 2); // 1–2
this._sumarNivel(subir);
if (Math.random() < 0.3) this._sumarReputacion(-1); // 30% baja 1
}


contarChisme() {
console.log('☕ Tía Vecina: Difunde el chisme mientras ofrece café');
const subir = 2 + Math.floor(Math.random() * 2); // 2–3
this._sumarNivel(subir);
if (Math.random() < 0.4) this._sumarReputacion(-1); // 40% baja 1
}
}


module.exports = TiaVecina;