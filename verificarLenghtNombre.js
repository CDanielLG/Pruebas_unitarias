//programa para ingresar correos

function nombreCompleto(nombre1, nombre2, apellido) {
  var nombreTam1 = nombre1.length;
  var nombreTam2 = nombre2.length;
  var apellidoTam = apellido.length;
total=nombreTam1+nombreTam2+apellidoTam;
  var result;
  if (total < 30) {
    result = "correcto";
   } 
  if(total >= 30){
     result = "error";
   }
  return result;
 
}

const funciones = {
  nombreCompleto,
};

 module.exports = funciones;

