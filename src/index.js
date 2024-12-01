import "./styles.css";
import { getWeather } from "./getWeather";
import { drawResults } from "./drawResults";
import { drawError } from "./drawError";

let city = "Łomża";
let cityFormatted = city.toLowerCase().split(" ").join("%20");
console.log(cityFormatted);

const queryForm = document.querySelector(".query-form");
const cityInput = document.querySelector("#city");
queryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  city = cityInput.value;
  cityFormatted = city.toLowerCase().split(" ").join("%20");
  getWeather(cityFormatted)
    .then((data) => {
      console.log(data);
      drawResults(city, data);
    })
    .catch(() => {
      console.log(new Error("This city doesn't exist"));
      drawError(city);
    })
    .finally(() => {
      queryForm.reset();
    });
});
