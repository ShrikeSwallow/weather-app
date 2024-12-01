import "./styles.css";

const baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const apiKey =
  "?unitGroup=uk&include=current&key=AVW8NL5LTDLKH7TBJMKYDWJ53&contentType=json";

const showData = (data) => {
  console.log(data);
};

const getWeather = async () => {
  let city = "london";
  const response = await fetch(`${baseURL}${city}${apiKey}`);
  const weatherData = await response.json();
  return weatherData;
};

const data = await getWeather();
console.log(data);
