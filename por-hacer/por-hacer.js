const fs = require("fs");

let listadoPorHacer = [];
const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer); //convierte un objeto a un JSON
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardaDB();
    return porHacer;
}


const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, nuevoEstado = true) => {
    cargarDB();
    // let index = listadoPorHacer.findIndex( tarea => {
    //     return tarea.descripcion === descripcion;
    // })
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = nuevoEstado;
        guardaDB();
        return true;
    } else {
        return false;
    }
}


const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        let eliminado = listadoPorHacer.splice(index, 1);
        guardaDB();
        return true;
    } else {
        return false;
    }
}

//alternativa de borrado
//esta es distinta porque borra no el primer elemento que encuentre coincidente
//sino todos los elementos cuya descripción coincida
//esto porque el filter devuelve un arreglo, en cambio el findIndex devuelve la posición de la primera coincidencia
const borrar2 = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardaDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}