const citiesArray = ['brasília', 'new york', 'tel aviv', 'santa cruz de la sierra', 'recife', 'manchester', 'london', 'hong kong', 'paris']

// Picking up a random city from the array
const randomCityPicker = (citiesArray) => {
    const index = Math.floor(Math.random() * citiesArray.length)
    return citiesArray[index]
}
const randomCity = randomCityPicker(citiesArray)

updateCity(randomCity).then(updateCityData => {
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