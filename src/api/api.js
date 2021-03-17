import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.openweathermap.org/data/2.5/weather";

const weatherData = async (city) => {
  try {
    const { data } = await axios.get(baseURL, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export default weatherData;
