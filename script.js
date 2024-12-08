alert("Enter city name or click on Get Location");

const button = document.getElementById("search-button");
const val = document.getElementById("input");
const loc_button = document.getElementById("location-button");

const city_loc = document.getElementById("city_location");
const city_temperature = document.getElementById("city_temperature");
const city_timezone = document.getElementById("city_timezone");
const city_hummidity = document.getElementById("city_hummidity");
const city_longitude = document.getElementById("city_longitude");
const city_latitude = document.getElementById("city_latitude");



async function getData(cityname) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=3ec5e8c8365343da96a132810240712&q=${cityname}&aqi=yes`
  );
  return await response.json();
}



async function getDataByLocation(lat, long) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=3ec5e8c8365343da96a132810240712&q=${lat},${long}&aqi=yes`
  );
  return await response.json();
}



function updateUI(result) {
  city_loc.innerText = `${result.location.name} - ${result.location.region}, ${result.location.country}`;
  city_temperature.innerText = result.current.temp_c;
  city_timezone.innerText = result.location.tz_id;
  city_hummidity.innerText = result.current.humidity;
  city_longitude.innerText = result.location.lon;
  city_latitude.innerText = result.location.lat;
}



button.addEventListener("click", async () => {
  const input = val.value.trim();
  if (input) {
    const result = await getData(input);
    updateUI(result);
  } else {
    alert("Please enter a city name or click 'Current Location'!");
  }
});


loc_button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const result = await getDataByLocation(latitude, longitude);
      updateUI(result);
    },
    () => {
      alert("Failed to get location. Please enable location services and reload the page.");
    }
  );
});
