const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const crear = ( descripcion ) => {

	let porHacer = {
		descripcion,
		completado: false
	}

	listadoPorHacer.push( porHacer );

	return porHacer;

}

module.exports = {
	crear
}