import "./styles.css";
import { getWeather } from "./getWeather";
import { drawResults } from "./drawResults";
import { drawError } from "./drawError";

let city = "Łomża";
let cityFormatted = city.toLowerCase().split(" ").join("%20");
console.log(cityFormatted);

const body = document.body;
console.log(body);
const queryForm = document.querySelector(".query-form");
const cityInput = document.querySelector("#city");
queryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  body?.setAttribute("class", "");
  city = cityInput.value;
  cityFormatted = city.toLowerCase().split(" ").join("%20");
  getWeather(cityFormatted)
    .then((data) => {
      console.log(data.conditions.toLowerCase().split(" ").join("-"));
      drawResults(city, data);
      body.classList.add(
        `${data.conditions.toLowerCase().split(" ").join("-")}`
      );
    })
    .catch(() => {
      console.log(new Error("This city doesn't exist"));
      drawError(city);
    })
    .finally(() => {
      queryForm.reset();
    });
});
