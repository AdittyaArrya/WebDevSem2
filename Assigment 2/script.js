// const API_KEY="b38910a99a886dea253129e8f991464e"
// const city= document.querySelector("#city")
// const search= document.querySelector("#search")
// const container= document.querySelector(".info")
// const searchHistory= document.querySelector(".searchHistory")
// let visitedCities=[]

// search.addEventListener('click', async(e)=>{
//     e.preventDefault()
//     const data=city.value
    
//     searchWeather(data)
// })

// async function searchWeather(city){
//     if(city){
//         try{
//             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
//             const weatherData= await response.json()
//             console.log(weatherData)

//             if(weatherData.cod === 200){
//                 container.innerHTML= `<h3>Weather Info</h3>
//                 <p>City: ${weatherData.name}</p>
//                 <p>Temp: ${(weatherData.main.temp-273).toFixed(1)}C</p>
//                 <p>Weather: ${weatherData.weather[0].main}</p>
//                 <p>Humidity: ${weatherData.main.humidity}%</p>
//                 <p>Wind: ${weatherData.wind.speed} miles/hr</p>`

//                 if(!visitedCities.includes(city)){
//                     visitedCities.push(city)
//                     localStorage.setItem("visitedCities", JSON.stringify(visitedCities))
//                 }
//                 showHistory()
//             }else{
//                 container.innerHTML= `<h3>Weather Info</h3>
//                 <p>${weatherData.message}</p>`
//             }
//         }catch(e){
//             console.error(e)
//         }
//     }
// }

// function showHistory(){
//     searchHistory.innerHTML=""
//     const cities= JSON.parse(localStorage.getItem("visitedCities"))
//     if(cities){
//         cities.forEach(city=>{
//             const li= document.createElement("button")
//             li.textContent= city
//             li.addEventListener("click", ()=>{
//                 searchWeather(city)
//             })
//             searchHistory.appendChild(li)
//         })
//     }
// }

const API_KEY = "b38910a99a886dea253129e8f991464e";
const weatherForm = document.querySelector("#weather_Form");
const cityInput = document.querySelector("#city");
const weatherResult = document.querySelector("#weather-result");
const searchHistory = document.querySelector(".searchHistory");
const consoleBox = document.querySelector("#console-box");

let visitedCities = JSON.parse(localStorage.getItem("visitedCities")) || [];

// Helper to log to our UI "Console"
function logToConsole(msg, type) {
    const p = document.createElement("p");
    p.className = `log-${type}`;
    p.innerHTML = `<code>> ${msg}</code>`;
    consoleBox.appendChild(p);
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

async function searchWeather(city) {
    if (!city) return;

    logToConsole("[ASYNC] Start fetching...", "async");

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        
        logToConsole("Promise.then (Microtask) - Response received", "micro");
        
        const data = await response.json();

        if (data.cod === 200) {
            logToConsole("[ASYNC] Data received successfully", "async");
            
            weatherResult.innerHTML = `
                <span>City</span> <span class="val">${data.name}, ${data.sys.country}</span>
                <span>Temp</span> <span class="val">${data.main.temp.toFixed(1)} °C</span>
                <span>Weather</span> <span class="val">${data.weather[0].main}</span>
                <span>Humidity</span> <span class="val">${data.main.humidity}%</span>
                <span>Wind</span> <span class="val">${data.wind.speed} m/s</span>
            `;

            if (!visitedCities.includes(data.name)) {
                visitedCities.push(data.name);
                localStorage.setItem("visitedCities", JSON.stringify(visitedCities));
                showHistory();
            }
        } else {
            // Updated: Logs 'Data not received' when API returns error (like 404)
            logToConsole("[ASYNC] Data not received", "async");
            weatherResult.innerHTML = `<div style="grid-column: 1/span 2; color:red; text-align:center;">City not found</div>`;
        }
    } catch (err) {
        logToConsole("[ASYNC] Data not received (Network Error)", "async");
    }
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    
    consoleBox.innerHTML = ""; // Reset console for new search
    logToConsole("Sync Start", "sync");
    
    searchWeather(city);
    
    logToConsole("Sync End", "sync");
    cityInput.value = "";
});

function showHistory() {
    searchHistory.innerHTML = "";
    visitedCities.forEach(city => {
        const btn = document.createElement("button");
        btn.className = "history-tag";
        btn.textContent = city;
        btn.onclick = () => {
            consoleBox.innerHTML = "";
            searchWeather(city);
        };
        searchHistory.appendChild(btn);
    });
}

showHistory();
