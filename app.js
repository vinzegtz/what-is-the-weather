const argv = require('./lib/yargs').argv;
const openCage = require('./lib/openCage')

const getWeather = async (city) => {
    const coordenates = await openCage.getCoordenates(city);

    console.log(`City: ${argv.city}`);
    console.log(`Lat: ${coordenates.lat}, Lon: ${coordenates.lon}`);
}

const command = argv._[0];

switch (command) {
    case 'weather':
        getWeather(argv.city)
        break;
    
    default:
        console.log('Invalid command');
        break;
}