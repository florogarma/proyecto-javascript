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