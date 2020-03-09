const opts = {
    descripcion: {
        demand: true,
        alias: "d"
    },
    compleado: {
        alias: "c",
        default: true
    }
};
const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", opts)
    .command("actualizar", "Actualiza el estado completado de una tarea", opts)
    .command("borrar", "Elimina un elemento del arreglo", opts)
    .help().argv;

module.exports = {
    argv
};