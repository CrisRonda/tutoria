function miPromesa(mensaje) {
  new Promise((resolver, rechazar) => {
    console.log("Procesando la acción....");
    // Escribir en la base de DB
    resolver({ mensaje });
    // rechazar("Fallo en escribi en la base");
  })
    .then((data) => {
      // Notificar al usuario
      // throw new Error("Fallo al notificar al user");
      console.log(
        `Hemos resuelto tu petición:\n Tu mensaje fue: ${data.mensaje}`
      );
      return { data, caracteres: 32 };
    })
    .then((data) => {
      // Analitica
      // throw new Error("Fallo en las analiticas");
      console.log("analitica", data);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      console.log("Ejecutare esto siempre....");
    });
}
console.log(miPromesa("Hola Sandy"));
