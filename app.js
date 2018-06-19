const { argv } = require('./config/yargs');

const { crear } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch ( comando ) {
    case 'crear':
        let creado = crear( argv.descripcion );
        console.log(creado);
        break;
    case 'listar':
        console.log('Listar');
        break;
    case 'actualizar':
        console.log('Actualizar');
        break;
    case 'eliminar':
        console.log('Eliminar');
        break;

    default:
        console.log('Comando no reconocido');
        break;
}