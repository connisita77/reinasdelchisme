// index.js (versión sencilla)
const chalk = require('chalk'); // v4 → funciona con require()
const TiaVecina = require('./classes/TiaVecina');
const CompaneraCuriosa = require('./classes/CompaneraCuriosa');
const EstudianteEspia = require('./classes/EstudianteEspia');


const participantes = [
new TiaVecina('Doña Paca', 6, 1),
new CompaneraCuriosa('Lina del Piso 3', 5, 0),
new EstudianteEspia('Valen del 11B', 7, 2),
];


const RONDAS = 2; // al menos 2


function repColor(rep) {
if (rep >= 7) return chalk.keyword('orange')(`🟠 Rep. Alta: ${rep}`);
if (rep <= 3) return chalk.bgBlack.white(`⚫ Rep. Baja: ${rep}`);
return `Rep.: ${rep}`;
}


function nivelColor(n) {
if (n >= 8) return chalk.magenta(`🟣 Chisme VIRAL: ${n}`);
return `Nivel: ${n}`;
}


console.log(chalk.bold('
🔥 ¡Batalla de Chismes (simple)!'));
console.log('Reglas: reputación y nivel entre 0 y 10; 2 rondas por participante.
');


for (let r = 1; r <= RONDAS; r++) {
console.log(chalk.bold(`
— RONDA ${r} —`));
for (const p of participantes) {
console.log(chalk.underline(`
${p.nombre}`));
p.recolectarInfo();
p.contarChisme();
console.log(` ${repColor(p.getReputacion())} | ${nivelColor(p.getNivelChisme())}`);
}
}


console.log(chalk.bold('
📈 Marcador final'));
participantes.forEach(p => {
console.log(`• ${chalk.bold(p.nombre)} → ${repColor(p.getReputacion())} | ${nivelColor(p.getNivelChisme())}`);
});


let ganadora = participantes[0];
for (const p of participantes) {
if (p.getNivelChisme() > ganadora.getNivelChisme()) ganadora = p;
else if (p.getNivelChisme() === ganadora.getNivelChisme() && p.getReputacion() > ganadora.getReputacion()) ganadora = p;
}
console.log(`
🏆 Ganadora: ${chalk.bold(ganadora.nombre)} con nivel ${chalk.magenta(ganadora.getNivelChisme())} y reputación ${ganadora.getReputacion()}`);