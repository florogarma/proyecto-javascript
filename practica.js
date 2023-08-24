/*let horasTrabajadas = parseInt(prompt("Ingrese cantidad de horas diaras que trabaja"))
let horasExtras = parseInt(prompt("Ingrese cantidad de horas extras que hizo hoy"))
let horasTotales = prompt(horasTrabajadas + horasExtras)
console.log ("La cantidad de horas que trabajò hoy es" +parseInt(horasTrabajadas + horasExtras))




let charly = "Charly García"
let flaco = "Luis Alberto Spinetta"
let gus = "Gustavo Cerati"
let otro = "Otro"


let preguntaUno = prompt("Cuál es tu instrumento favorito? \n1-Guitarra \n2-Bajo \n3-Batería \n4-Pandereta");

if (instrumento == "Guitarra")
*/



// Definición de la función para verificar si una canción es popular
function esCancionPopular(reproducciones) {
    return reproducciones >= 1000000;
  }
  
  // Ciclo para ingresar y evaluar canciones
  let continuar = true;
  
  while (continuar) {
    const reproduccionesUsuario = prompt("Ingrese la cantidad de reproducciones de la canción (o escriba 'salir' para terminar):");
  
    if (reproduccionesUsuario.toLowerCase() === 'salir') {
      continuar = false;
      continue;
    }
  
    const reproducciones = parseInt(reproduccionesUsuario);
  
    const esPopular = esCancionPopular(reproducciones);
  
    if (esPopular) {
      alert("¡Esta canción es popular! 🎉");
    } else {
      const faltanReproducciones = 1000000 - reproducciones;
      
      if (faltanReproducciones < 200) {
        alert(`¡Faltan pocas reproducciones (${faltanReproducciones}) para que esta canción sea popular! 🚀`);
      } else {
        alert(`Esta canción necesita ${faltanReproducciones} reproducciones más para ser popular.`);
      }
    }
  }