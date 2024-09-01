//Definitions
let city = document.querySelector("#city");
let temperature = document.querySelector("#temperature");
let form = document.querySelector("#city-form");
let newCity = document.querySelector("#city-input");
let apiKey = "3ab87d04f7c37deb36b8t663978f41oc";

//Change Temperature
function changeTemperature(response) {
  city.innerHTML = response.data.city;
  let newTemperature = Math.round(response.data.temperature.current);
  console.log(newTemperature);
  temperature.innerHTML = `${newTemperature}`;
}

// Form
function changeCity(event) {
  event.preventDefault();
  let cityName = newCity.value;

  //Call API
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}`;
  axios.get(apiUrl).then(changeTemperature);
}

form.addEventListener("submit", changeCity);

// Date & Time
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentTime = new Date();
let weekDay = weekDays[currentTime.getDay()];
let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();
let date = document.querySelector("#time");
let formatedDate = `${weekDay} ${hour}:${minutes}`;

date.innerHTML = `${formatedDate}`;
