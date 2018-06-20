const descripcion = {
		demand: true,
		alias: 'd',
		desc: 'Descripcion de la tarea por hacer'
	}

const completado = {
		demand: true,
		alias: 'c',
		default: true,
		desc: 'Marca como completada la tarea'
	}

const argv = require('yargs')
				.command('crear', 'Crea una nueva tarea por hacer', { descripcion })
				.command('actualizar', 'Actualiza una tarea', { descripcion, completado })
				.command('borrar', 'Borra una tarea', { descripcion })
				.command('listar', 'Lista las tareas por hacer', {})
				.help()
				.argv;

module.exports = {
	argv
}