import { useDispatch, useSelector } from 'react-redux';
import store from './utils/store';
import { changeMode } from './utils/toggleMode';
import { useState } from 'react';
import './App.css';
import DisplayWeather from './components/DisplayWeather';

function App() {
  let [input, setInput] = useState("")
  let [weather, setWeather] = useState(null)
  const dispatch = useDispatch()
  
  const updateMode = ()=>{
    dispatch(changeMode())
  }
  const toggleMenu = useSelector(store => store.mode.modeStatus)
  const getUserInput = (e) =>{
    setInput(e.target.value)
  }
  const getWeatherDetailsByCityname = async () =>{
    try{
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=e6dde2de77261aceeb51dddfac5ff0d4')
      const weatherDetails = await response.json()
      setWeather(weatherDetails)
      
    }
    catch(err){
      console.log(err.message)
    }

  }
  const  getWeatherDetailsByZipCode = async () =>{
    try{
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip='+input+',IN&appid=e6dde2de77261aceeb51dddfac5ff0d4')
      const weatherDetails = await response.json()
      setWeather(weatherDetails)
      
    }
    catch(err){
      console.log(err.message)
    }

  }
  const getWeatherDetails = () =>{
    const trimmedInput = input.trim();
    const zipCodePattern = /^\d{5}(?:[-\s]\d{4})?$|^\d{6}$/;
    if (zipCodePattern.test(trimmedInput)) {
      // console.log("it is zip code")
      // return 'zipCode';
      getWeatherDetailsByZipCode()
    } 
    else {
      // console.log("city name")
      // return 'cityName';
      getWeatherDetailsByCityname()
    }
  }
  const appStyles = {
    backgroundColor: toggleMenu ? ' #3C3C3C' : '#d7eaf3',
    color: toggleMenu ? ' #fff' : '#000'
  };
  return (
    <div style={appStyles} className='weather-main-container'>
      <button className= "mode-toggle-btn" onClick={updateMode}>{toggleMenu?"Light Mode":"Dark Mode"}</button>

      <img src='https://static.vecteezy.com/system/resources/previews/022/538/958/original/3d-rendering-rain-with-cloud-and-sun-icon-3d-render-weather-sun-with-rain-drops-and-cloud-rain-with-cloud-and-sun-png.png' alt='Weather icon'  className='weather-image'/>

      <h1 className='weather-main-heading'>Discover the Weather in Your City</h1>
      <p>Enter the city name or ZIP code to get the weather details</p>
      <input type='text' className='weather-input' placeholder='Enter the city name or ZIP code' onChange={getUserInput}/>
      <button onClick={getWeatherDetails} className='weather-btn'>Get Weather Details</button>
      <DisplayWeather weatherData={weather}/>
    </div>
  );
}

export default App;
