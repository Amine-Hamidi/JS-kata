const url= "https://api.openweathermap.org/data/2.5/weather?q=PARIS&appid=3e5ba5ac853229bef50ff0e983215766&units=metric&lang=fr";

async function getWeather(url) {
    const response= await fetch(url);
    const data= await response.json();
   
    return {city: data.name,
            temp:data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon
    }
}

 getWeather(url).then(weather=>{
    displayWeather(weather);
 });

function displayWeather(weather){

    const container= document.getElementById("weatherResult");
    container.innerHTML= `<h2>${weather.city}</h2>
                            <p>${weather.description}</p>
                            <p>${weather.temp} °C</p>
                            <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="Icône météo"/>`;

    
}
function filterWeather() {
  document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("searchInput").value.trim();

    if (city !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e5ba5ac853229bef50ff0e983215766&units=metric&lang=fr`;

      getWeather(url)
        .then(weather => {
          displayWeather(weather);
        })
        .catch(() => {
          displayError("Ville introuvable ou erreur réseau.");
        });
    }
  });
}
filterWeather();