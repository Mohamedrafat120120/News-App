let w=document.querySelector(".sunicon-temprature")
export async function weatherApi() {
  const data = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=e64080ae7c9d45f1bfa164830262803&q=Cairo"
  );

  const response = await data.json();
  
  let weather=response.current
  let weatherSeaction = `
  <div class="temp-icon">
  <div class="temp">🌡 Temp: ${weather.temp_c}°C</div><img src="https:${weather.condition.icon}" /></div>
    
    <div>🌤 Condition: ${weather.condition.text}</div>
    <div>💨 Wind: ${weather.wind_kph} kph</div>
    <div>💧 Humidity: ${weather.humidity}%</div>
    
  `;

    w.innerHTML=weatherSeaction;
  
}
