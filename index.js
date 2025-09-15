// index.js (versión sencilla y robusta)
orange: (s) => (chalk && chalk.hex ? chalk.hex('#FFA500')(String(s)) : String(s)),
black: (s) => (chalk && chalk.black ? chalk.black(String(s)) : String(s)),
};


const participantes = [
new TiaVecina('Doña Paca', 6, 1),
new CompaneraCuriosa('Lina del Piso 3', 5, 0),
new EstudianteEspia('Valen del 11B', 7, 2),
];


const RONDAS = 2; // al menos 2


function repColor(rep) {
if (rep >= 7) return color.orange(`🟠 Rep. Alta: ${rep}`);
if (rep <= 3) return color.black(`⚫ Rep. Baja: ${rep}`);
return `Rep.: ${rep}`;
}


function nivelColor(n) {
if (n >= 8) return color.magenta(`🟣 Chisme VIRAL: ${n}`);
return `Nivel: ${n}`;
}


console.log(color.bold('
🔥 ¡Batalla de Chismes (simple)!'));
console.log('Reglas: reputación y nivel entre 0 y 10; 2 rondas por participante.
');


for (let r = 1; r <= RONDAS; r++) {
console.log(color.bold(`
— RONDA ${r} —`));
for (const p of participantes) {
console.log(color.underline(`
${p.nombre}`));
p.recolectarInfo();
p.contarChisme();
console.log(` ${repColor(p.getReputacion())} | ${nivelColor(p.getNivelChisme())}`);
}
}


console.log(color.bold('
📈 Marcador final'));
for (const p of participantes) {
console.log(`• ${color.bold(p.nombre)} → ${repColor(p.getReputacion())} | ${nivelColor(p.getNivelChisme())}`);
}


let ganadora = participantes[0];
for (const p of participantes) {
if (p.getNivelChisme() > ganadora.getNivelChisme()) ganadora = p;
else if (p.getNivelChisme() === ganadora.getNivelChisme() && p.getReputacion() > ganadora.getReputacion()) ganadora = p;
}


console.log(`
🏆 Ganadora: ${color.bold(ganadora.nombre)} con nivel ${color.magenta(String(ganadora.getNivelChisme()))} y reputación ${ganadora.getReputacion()}`);