const opts = {
	descripcion:{
		demand: true,
		alias: 'd',
		desc: 'Descripcion de la tarea por hacer'
	},
	completado:{
		demand: true,
		alias: 'c',
		default: true,
		desc: 'Marca como completada la tarea'
	}
}
const argv = require('yargs')
				.command('crear', 'Crea una nueva tarea por hacer', 
				{
					descripcion: {
						demand: true,
						alias: 'd',
						desc: 'Descripcion de la tarea por hacer'
					}
				})
				.command('actualizar', 'Actualiza una tarea', opts)
				.command('eliminar', 'Elimina una tarea', {})
				.command('listar', 'Lista las tareas por hacer', {})
				.help()
				.argv;

module.exports = {
	argv
}