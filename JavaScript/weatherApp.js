const searchBar = document.querySelector('input')
const form = document.querySelector('form')
const daytimeImageOnUI = document.querySelector('.time-img')
const weatherImageOnUI = document.querySelector('.weather-img')
const cityNameOnUI = document.querySelector('.city-name')
const weatherConditionOnUI = document.querySelector('.weather-condition')
const temperatureOnUI = document.querySelector('span')

const updateCity = async (city) => {
    const cityDetails = await getCity(city)  // Calling the city information API
    const cityWeather = await getWeather(cityDetails.Key)  // Calling the searched city weather API

    return {
        cityDetails: cityDetails,
        cityWeather: cityWeather
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const city = form.city.value.trim()
    form.reset()
    updateCity(city).then(updateCityData => {
        console.log(updateCityData)
        if(updateCityData.cityWeather.IsDayTime) {
            daytimeImageOnUI.setAttribute('src', 'Images/weather-imgs/day.svg')
        } 
        else {
            daytimeImageOnUI.setAttribute('src', 'Images/weather-imgs/night.svg')
        }
        weatherImageOnUI.setAttribute('src', `Images/weather-imgs/icons/${updateCityData.cityWeather.WeatherIcon}.svg`)
        cityNameOnUI.innerText = updateCityData.cityDetails.EnglishName + ', ' + updateCityData.cityDetails.Country.EnglishName
        weatherConditionOnUI.innerText = updateCityData.cityWeather.WeatherText
        temperatureOnUI.innerText = updateCityData.cityWeather.Temperature.Metric.Value
    
    }).catch(err => console.log(err))
})