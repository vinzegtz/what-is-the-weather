const axios = require('axios');

const getOpenWeatherConfig = () => {
    const openWeatherConfig = require('./../../config/index.json');

    return openWeatherConfig.openWeather;
}

const getCurrentTemperatureByCoord = async (lat, lon) => {
    const config = getOpenWeatherConfig();
    const response = await axios(config.endPoint, {
        params: {
            lat,
            lon,
            units: config.units,
            appid: config.apiKey
        }
    });

    if (!response.data.main) {
        throw new Error(`Not found temperature for lat: ${lat} and lon: ${lon}`);
    }

    return response.data.main.temp;
}

module.exports = {
    getCurrentTemperatureByCoord
}