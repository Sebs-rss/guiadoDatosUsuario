const usersModule = (() => {      //funcion IIFE
    async function cantUserData(noUser) {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=${noUser}`);
        if (!response.ok) {
          throw new Error('Error al recuperar los datos del usuario');
        }
        const userData = await response.json();
        console.log(userData);
        return userData.results;
      } catch (e) {
        console.error('Error al recuperar los datos del usuario:', e);
        return [];
      }
    }
  
    const showUsers = async (noUser) => {
      const users = await cantUserData(noUser)
      const contenedor = document.getElementById("user-data")
      users.forEach(element => {
        contenedor.innerHTML += `<img src="${element.picture.large}" alt="Imagen de perfil"><p>${element.name.first} - ${element.name.last}</p>
        <p>${element.email}</p><p>${element.phone}</p>`
      });
    }
  
    return {
      showUsers,
    };
  })();
  
  export default usersModule;