import "./styles.css";
import { getWeather } from "./getWeather";
import { drawResults } from "./drawResults";

let city = "Łomża";
let cityFormatted = city.toLowerCase().split(" ").join("%20");
console.log(cityFormatted);

const data = await getWeather(cityFormatted);
console.log(data);

drawResults(city, data);
