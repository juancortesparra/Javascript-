/* eslint-disable no-var */
/* Forma de declarar objetos con informacion dentro del objeto en Javascript */
var miAuto = {
  Brand: 'Toyota',
  Model: 'Supra',
  Year: 1998,
  detalledelAuto: function(detalledelAuto){
    console.log(`Auto ${this.Model} ${this.Year}`);
  }
};

/* Mandamos a llamar Auto.detalledelAuto(); y nos imprime mas detalles. */
miAuto.detalledelAuto();
