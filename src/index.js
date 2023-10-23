function updateTime() {
  //Vancouver
  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDateElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");
    let vancouverTime = moment().tz("America/Vancouver");

    vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
    vancouverTimeElement.innerHTML = vancouverTime.format("HH:mm:ss");
  }
  //Buenos Aires
  let buenosAiresElement = document.querySelector("#buenos-aires");
  if (buenosAiresElement) {
    let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
    let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
    let buenosAiresTime = moment().tz("America/Argentina/Buenos_Aires");

    buenosAiresDateElement.innerHTML = buenosAiresTime.format("MMMM Do YYYY");
    buenosAiresTimeElement.innerHTML = buenosAiresTime.format("HH:mm:ss");
  }
  //Rome
  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDateElement = romeElement.querySelector(".date");
    let romeTimeElement = romeElement.querySelector(".time");
    let romeTime = moment().tz("Europe/Rome");

    romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
    romeTimeElement.innerHTML = romeTime.format("HH:mm:ss");
  }
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("HH:mm:ss");
  }
}

//Select Cities
let intervalId; // Declare a variable to hold the interval ID

function updateCity(event) {
  let cityTimezone = event.target.value;
  function updateCityTime() {
    if (cityTimezone === "currentLocation") {
      cityTimezone = moment.tz.guess();
    }
    let citiesElement = document.querySelector("#cities");
    let cityTime = moment().tz(cityTimezone);
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("HH:mm:ss")}</div>
  </div>
  <a href="/">Homepage</a>`;
  }
  // Clear previous interval
  clearInterval(intervalId);
  // Call the function once immediately
  updateCityTime();
  // Set a new interval and store the ID
  intervalId = setInterval(updateCityTime, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
