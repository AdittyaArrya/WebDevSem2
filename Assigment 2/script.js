const API_KEY="b38910a99a886dea253129e8f991464e"
const city= document.querySelector("#city")
const search= document.querySelector("#search")
const container= document.querySelector(".info")
let visitedCities=[]

search.addEventListener('click', async(e)=>{
    e.preventDefault()
    const data=city.value
    if(data){
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_KEY}`)
            const weatherData= await response.json()
            console.log(weatherData)

            if(weatherData.cod === 200){
                container.innerHTML= `<h3>Weather Info</h3>
                <p>City: ${weatherData.name}</p>
                <p>Temp: ${(weatherData.main.temp-273).toFixed(1)}C</p>
                <p>Weather: ${weatherData.weather[0].main}</p>
                <p>Humidity: ${weatherData.main.humidity}%</p>
                <p>Wind: ${weatherData.wind.speed} miles/hr</p>`

                visitedCities.push(data)
                localStorage.setItem("visitedCities", JSON.stringify(visitedCities))
            }else{
                container.innerHTML= `h3>Weather Info</h3>
                <p>${weatherData.message}</p>`
            }
        }catch(e){
            console.error(e)
        }
    }
})