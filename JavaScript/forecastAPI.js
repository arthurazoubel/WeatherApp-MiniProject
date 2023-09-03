const KEY = 't093bnWPRt13lz0I8w1kx4xDKx3BWZET'

// Getting random cities information for initial screen


// Getting city information
const getCity = async (city) => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${KEY}&q=${city}`
    const response = await fetch(baseURL + query)
    const data = await response.json()
    return data[0]
}


// Getting city weather
const getWeather = async (cityKey) => {
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${cityKey}?apikey=${KEY}`
    const response = await fetch(baseURL + query)
    const data = await response.json()
    return data[0]
}
