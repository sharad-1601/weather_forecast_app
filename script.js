const button = document.getElementById('search-button')
const val = document.getElementById('input')

async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=3ec5e8c8365343da96a132810240712&q=${cityName}&aqi=yes`
    )
    return await promise.json()
}

button.addEventListener('click' , async () => {
    const input = val.value
    const result = await getData(input)
    console.log(result)
})


