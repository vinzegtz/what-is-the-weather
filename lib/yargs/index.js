const argv = require('yargs')
    .command('weather', 'Get the weather from a city', {
        city: {
            demand: true,
            alias: 'c',
            desc: 'Name of the city'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}