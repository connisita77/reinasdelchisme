// classes/Chismosa.js
// Clase base (abstracta por convenio). No usamos campos privados.
function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }


class Chismosa {
constructor(nombre, reputacion, nivelChisme) {
if (new.target === Chismosa) {
throw new Error('Chismosa es abstracta. Crea una subclase.');
}
this.nombre = nombre || 'Anónima';
this.reputacion = clamp(reputacion ?? 5, 0, 10);
this.nivelChisme = clamp(nivelChisme ?? 0, 0, 10);
}


// Métodos "abstractos" (se sobrescriben en subclases)
recolectarInfo() { throw new Error('Implementa recolectarInfo() en la subclase'); }
contarChisme() { throw new Error('Implementa contarChisme() en la subclase'); }


getReputacion() { return this.reputacion; }
getNivelChisme() { return this.nivelChisme; }


_sumarReputacion(delta) { this.reputacion = clamp(this.reputacion + delta, 0, 10); }
_sumarNivel(delta) { this.nivelChisme = clamp(this.nivelChisme + delta, 0, 10); }
}


module.exports = Chismosa;