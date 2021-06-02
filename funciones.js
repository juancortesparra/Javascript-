/* eslint-disable no-shadow */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-console */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */

//Funciones Declarativas // 
function saludar(nombre) {
  console.log('Hola ${nombre}');
}
saludar('Juan');

//Expresion de Funcion //

var nombre = function(nombre) {
   console.log('Hola ${nombre}');
};

nombre('Juan');
