const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch ( comando ) {
	case 'crear':
		let creado = porHacer.crear( argv.descripcion );
		console.log(creado);
		break;
	case 'listar':
		let listado = porHacer.getListado();
		for( let tarea of listado ){
			console.log( '=========Por Hacer========='.green );
			console.log( tarea.descripcion );
			console.log( 'Estado:', colors.yellow( tarea.completado ) );
			console.log( '==========================='.green );
		}
		break;
	case 'actualizar':
		let actualizado = porHacer.actualizar( argv.descripcion, argv.completado);
		if( actualizado ){
			console.log('Actualizado');
		}else{
			console.log( 'No actualizado' );
		}
		break;
	case 'borrar':
		let borrado = porHacer.borrar( argv.descripcion );
		if ( borrado ) {
			console.log('Borrado');
		} else {
			console.log('No se pudo borrar');
		}
		break;

	default:
		console.log('Comando no reconocido');
		break;
}