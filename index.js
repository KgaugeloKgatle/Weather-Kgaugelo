function refreshWeather(response){
    let tempElement = document.querySelector("#temp");
    let temperature = response.data.temp.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    tempElement.innerHTML=Math.round(temperature);

}

function searchCity(city){
    let apiKey =  "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event){
    event.preventDefault();

    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = searchInput.value;
}

let searchFormElemet = document.querySelector("#search-form");
searchFormElemet.addEventListener("submit",handleSearchSubmit);

searchCity("Tzaneen");