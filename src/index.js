import "./styles.css";
import { getWeather } from "./getWeather";

let city = "Łomża";
let cityFormatted = city.toLowerCase().split(" ").join("%20");
console.log(cityFormatted);

const data = await getWeather(cityFormatted);
console.log(data);
