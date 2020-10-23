import React, { useState } from 'react';
import Header from "./components/Header"
import Search from "./components/Search"
import Card from "./components/Card"

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const search = press => {
    if (press.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=a45a51fdddc083093ee4a0cd64d98371`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setCity('');
        });
    }
  }

  return (
    <div className="rocky">
      <main>
        <Header />
        <Search onChange={e => setCity(e.target.value)} onKeyPress={search} value={city} />
        {(typeof weather.main != "undefined") ? 
        <Card 
          location={weather.name} 
          temperature={Math.round(weather.main.temp)}
          condition={weather.weather[0].main} 
          icon={weather.weather[0].icon}
          /> 
          : ('')}
      </main>
    </div>
  );
}

export default App;