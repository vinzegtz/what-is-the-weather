const argv = require('./lib/yargs').argv;
const openCage = require('./lib/openCage');
const openWeather = require('./lib/openWeather');

const getWeather = async (city) => {
    const coordenates = await openCage.getCoordenates(city);
    const temperature = await openWeather.getCurrentTemperatureByCoord(coordenates.lat, coordenates.lon);

    console.log(`City: ${argv.city}`);
    console.log(`Lat: ${coordenates.lat}, Lon: ${coordenates.lon}`);
    console.log(`Temperature: ${temperature}°`);
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