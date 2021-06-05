/* eslint-disable no-console */
var datousuario = 'Piedra'; // para probar la funcion se introduce aqui la opcion del usuario
var datomaquina = 'Papel'; // para probar la funcion se introduce aqui el dato de la maquina
var ganador = 'Usted'; // se inicializa la variable en algun valor

if (datousuario === datomaquina) { ganador = 'Empate';}
else if (datousuario === 'Piedra' && datomaquina === 'Tijera') { ganador = 'La Maquina'};
else if (datousuario === 'Tijera' && datomaquina === 'Papel') { ganador = ' La Maquina'}
else { ganador = 'La Maquina'; }
/* eslint no-console: "error" */
console.log('El ganador es; ', ganador, 'usado metodo IF');
