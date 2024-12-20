const baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const apiKey =
  "?unitGroup=uk&include=current&key=AVW8NL5LTDLKH7TBJMKYDWJ53&contentType=json";

const getWeather = async (city) => {
  const response = await fetch(`${baseURL}${city}${apiKey}`);
  const weatherData = await response.json();
  return weatherData.currentConditions;
};

export { getWeather };
