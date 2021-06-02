const datousuario = 'Piedra'; // para probar la funcion se introduce aqui la opcion del usuario
const datomaquina = 'Papel'; // para probar la funcion se introduce aqui el dato de la maquina 
const ganador = 'Usted'; // se inicializa la variable en algun valor


if (datousuario == datomaquina) {ganador == 'Empate'}

else if(datousuario == 'Piedra' && datomaquina == 'Tijera') { ganador =='La Maquina'}

else if(datousuario == 'Tijera' && datomaquina == 'Papel');
 { ganador == ' La Maquina'}

else {datomaquina == 'Piedra' ? true: ganador='La maquina'}
console.log('El ganador es; ', ganador, 'usado metodo IF');

//Ahora usando el metodo switch
ganador='Usted'; // se inicia esta variable en usted, si la maquina gana se cambia la variable

switch (true) {
  case 
  (datousuario == datomaquina):
  ganador = 'Empate';
  break;

  case 
  (datousuario == 'papel' && datomaquina == 'Piedra'):;
  break;

  case
  (datousuario == 'tijera' && datomaquina == 'Papel'):;
  break;

  case
  (datousuario == 'piedra' && datomaquina == 'tijera'):;
  break;
  default: ganador = 'La maquina';
}
console.log ('El ganador es', ganador, 'usando metodo switch');

