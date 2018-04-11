const descrip = {
    demand: true,
    alias: 'd',
    desc: "Descripción de tarea por hacer"
}

const completa = {
    alias: 'c',
    default: true,
    desc: "Marca como completada o pendiente la tarea"
}

const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        descripcion: descrip
    })
    .command("actualizar", "Actualiza el estado completado de una tarea", {
        descripcion: descrip,
        completado: completa
    })
    .command("borrar", "Borra una tarea completa", {
        descripcion: descrip
    })
    .help()
    .argv;


///viejo: no óptimo, muy repetitivo

// const argv = require("yargs")
//     .command("crear", "Crear un elemento por hacer", {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: "Descripción de tarea por hacer"
//         }
//     })
//     .command("actualizar", "Actualiza el estado completado de una tarea", {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: "Descripción de tarea por hacer"
//         },
//         completado: {
//             alias: 'c',
//             default: true,
//             desc: "Marca como completada o pendiente la tarea"
//         }
//     })
//     .command("borrar", "Borra una tarea completa", {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: "Descripción de la tarea por borrar"
//         }
//     })
//     .help()
//     .argv;

module.exports = {
    argv
}