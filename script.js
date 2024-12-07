const button = document.getElementById('search-button')
const val = document.getElementById('input')


const city_loc = document.getElementById('city_location')
const city_temperature = document.getElementById('city_temperature')
const city_timezone = document.getElementById('city_timezone')
const city_hummidity = document.getElementById('city_hummidity')
const city_longitude = document.getElementById('city_longitude')
const city_latitude = document.getElementById('city_latitude')


async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=3ec5e8c8365343da96a132810240712&q=${cityName}&aqi=yes`
    )
    return await promise.json()
}

button.addEventListener('click' , async () => {
    const input = val.value
    const result = await getData(input)
    city_loc.innerText = `${result.location.name} - ${result.location.region}, ${result.location.country}`
    city_temperature.innerText = result.current.temp_c
    city_timezone.innerText = result.location.tz_id
    city_hummidity.innerText = result.current.humidity
    city_longitude.innerText = result.location.lon
    city_latitude.innerText = result.location.lat

})


