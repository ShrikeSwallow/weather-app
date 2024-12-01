import "./styles.css";

const baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const apiKey =
  "?unitGroup=uk&include=current&key=AVW8NL5LTDLKH7TBJMKYDWJ53&contentType=json";

let city = "stratford-upon-avon";
let cityFormatted = city.toLowerCase().split(" ").join("%20");
console.log(cityFormatted);

const getWeather = async () => {
  try {
    const response = await fetch(`${baseURL}${cityFormatted}${apiKey}`);
    const weatherData = await response.json();
    return weatherData.currentConditions;
  } catch (err) {
    console.error(err);
  }
};

const data = await getWeather();
console.log(data);
