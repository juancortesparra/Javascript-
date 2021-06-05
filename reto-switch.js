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
  
  