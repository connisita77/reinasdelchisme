// classes/EstudianteEspia.js
const Chismosa = require('./Chismosa');


class EstudianteEspia extends Chismosa {
recolectarInfo() {
console.log('📱 Estudiante Espía: Lee chats ajenos desde el último puesto del salón');
this._sumarNivel(2); // sube rápido y simple
if (Math.random() < 0.3) this._sumarReputacion(-1);
}


contarChisme() {
console.log('🟢 Estudiante Espía: Filtra el chisme por estados en WhatsApp');
this._sumarNivel(2); // también rápido
if (Math.random() < 0.4) this._sumarReputacion(-1);
}
}


module.exports = EstudianteEspia;