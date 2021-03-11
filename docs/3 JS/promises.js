function miPromesa(mensaje) {
  new Promise((resolver, rechazar) => {
    console.log("Procesando la acción");
    resolver(mensaje);
    // rechazar("Hemos rechazado la petición");
  })
    .then((data) => {
      console.log(`Hemos resuelto tu petición:\n${data}`);
      return data;
    })
    .catch((err) => console.log(err))
    .finally(() => {
      console.log("Ejecutare esto siempre....");
    });
}
console.log(miPromesa("Test"));
