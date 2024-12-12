import { useState } from 'react';
import './App.css'
// import FetchingComponent from './components/FetchComponent/FetchingComponent'

function App() {

  const [weather, setweather] = useState(null);
  const [city, setCity] = useState("");
  async function fetchData () {
    try {
      let name = city;
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=f56276e952b84ee8872125839241212&q=${name}&aqi=no`)
      const data = await response.json();
      setweather(data);
    } catch (error) {
      console.error(error);
    }

  }

  function handleTextContent(event) {
    setCity(event.target.value)
    console.log(event.target.value);
  }

  function handleButtonClick() {
    fetchData();
    setCity("")
  }
  


  console.log(weather)
  
  return (
    <>
      <h1>This is a weather app</h1>
      <input type="text" placeholder="Enter the city name" onChange={handleTextContent} value={city}/>
      <button onClick={handleButtonClick}>Click</button>
      { 
        (weather)? (
          <>
            <h2>Location: {weather.location.name}</h2>
            <h2>Weather: {weather.current.condition.text}</h2>
            <h2>Temperature: {weather.current.temp_c}</h2>
          </>
        ): <h2>Loading...</h2>
      } 
      
    </>
  )
}

export default App
