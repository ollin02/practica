console.log("Se nota que todabia me extrañas");

setInterval(cambiarSaludo, 2000);

/**
 * Cambia la frase en el titulo h2
 */

function cambiarSaludo() {
  //console.log("Me parece una falta de respecto");
  // Estoy asignando a una variable el valor de h2
  let frase = document.getElementsByTagName("h2")[1];

  if (frase.innerHTML == "¡Ganando como siempre!") {
    //frase = "Impongo moda para las niñas!";
    frase.innerHTML = "¡Impongo moda para las niñas!";
  } else {
    //frase = "Ganando como siempre";
        frase.innerHTML = "¡Ganando como siempre!";
  }
  console.log("frase :" + frase);
}
