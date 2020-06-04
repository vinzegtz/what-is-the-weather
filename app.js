const argv = require('./lib/yargs').argv;

const command = argv._[0];

switch (command) {
    case 'weather':
        console.log(`City: ${argv.city}`);
        break;
    
    default:
        console.log('Invalid command');
        break;
}