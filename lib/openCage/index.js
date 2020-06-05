const axios = require('axios');

const getOpenCageConfig = () => {
    const openCageConfig = require('./../../config/index.json');

    return openCageConfig.openCage;
}

const getCoordenates = async city => {
    let coordenates = {};
    
    const config = getOpenCageConfig();
    const response = await axios.get(config.endPoint, {
        params: {
            q: city,
            key: config.apiKey
        }
    });

    if (response.data.results.length == 0) {
        throw new Error(`Not found coordenates for ${city}`);
    }

    coordenates.lat = response.data.results[0].geometry.lat;
    coordenates.lon = response.data.results[0].geometry.lng;

    return coordenates;
}

module.exports = {
    getCoordenates
}