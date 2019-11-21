import axios from "axios";
const weatherKey = process.env.REACT_APP_WEATHERBIT_KEY;


// export the whole object and any key value pairs inside
export default {
    getWeather: function(city) {
        // return promise object
        return axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?days=7&units=I&key=${weatherKey}&city=${city}`);
    }
}