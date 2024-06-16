import { useDispatch, useSelector } from 'react-redux';
import store from './utils/store';
import { changeMode } from './utils/toggleMode';
import { useState } from 'react';
import './App.css';
import DisplayWeather from './components/DisplayWeather';

function App() {
  let [input, setInput] = useState("")
  let [weather, setWeather] = useState(null)
  let [error, setError] = useState(null);
  const dispatch = useDispatch()
  
  const updateMode = ()=>{
    dispatch(changeMode())
  }
  const toggleMenu = useSelector(store => store.mode.modeStatus)
  console.log(store)
  const getUserInput = (e) =>{
    setInput(e.target.value)
  }
  const getWeatherDetailsByCityname = async () =>{
    try{
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=e6dde2de77261aceeb51dddfac5ff0d4')
      if (!response.ok) {
        throw new Error('City not found. Please enter a valid city name.');
      }
      const weatherDetails = await response.json()
      setWeather(weatherDetails)
      setError("")
    }
    catch(err){
      setError(err.message);
      setWeather(null)
      
    }

  }
  const  getWeatherDetailsByZipCode = async () =>{
    try{
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip='+input+',IN&appid=e6dde2de77261aceeb51dddfac5ff0d4')
      if(!response.ok){
        throw new Error('ZIP code not found. Please enter a valid ZIP code.')
      }
      const weatherDetails = await response.json()
      setWeather(weatherDetails)
      setError("")
      
    }
    catch(err){
      setError(err.message)
      setWeather(null)
    }

  }
  const getWeatherDetails = () =>{
    const trimmedInput = input.trim();
    const zipCodePattern = /^\d{5}(?:[-\s]\d{4})?$|^\d{6}$/;
    if (zipCodePattern.test(trimmedInput)) {
      getWeatherDetailsByZipCode()
    } 
    else {
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
      <input type='text' className='weather-input' placeholder='Enter the city name or ZIP code' onChange={getUserInput} required/>
      <button onClick={getWeatherDetails} className='weather-btn'>Get Weather Details</button>
      {error && <h3 className='error-message'>{error}</h3>}
      <DisplayWeather weatherData={weather}/>
      
    </div>
  );
}

export default App;
