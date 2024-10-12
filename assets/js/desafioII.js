// desarrolloII.js

import usersModule from './usersModule.js'; // llamando el modulo (patron de modulo)

async function traerUserInfo(noUser) {  // funcion asincronica para llamar la funcion del módulo
  const userData = await usersModule.showUsers(noUser); //llamamos a la función que se realizo en el modulo
  if (userData) {  // para probar que todo esta bien
    console.log(userData);
  } else {
    console.log(`User no encontrado.`);
  }
}

// Llamamos a la función con un No. de usuarios
traerUserInfo(10);
