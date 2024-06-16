import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import store from './utils/store';
import { changeMode } from './utils/toggleMode';

function App() {
  const dispatch = useDispatch()
  
  const updateMode = ()=>{
    dispatch(changeMode())
  }
  const toggleMenu = useSelector(store => store.mode.modeStatus)
  console.log(toggleMenu)
  const getWeatherDetails = () =>{
    
  }
  const appStyles = {
    backgroundColor: toggleMenu ? ' #3C3C3C' : '#d7eaf3',
    color: toggleMenu ? ' #fff' : '#000'
  };
  return (
    <div style={appStyles} className='weather-main-container'>
      <button className= "mode-toggle-btn" onClick={updateMode}>{toggleMenu?"Light Mode":"Dark Mode"}</button>
      <img src='https://static.vecteezy.com/system/resources/previews/022/538/958/original/3d-rendering-rain-with-cloud-and-sun-icon-3d-render-weather-sun-with-rain-drops-and-cloud-rain-with-cloud-and-sun-png.png' alt='Weather image'  className='weather-image'/>
      <h1 className='weather-main-heading'>Discover the Weather in Your City</h1>
      <p>Enter the city name or ZIP code to get the weather details</p>
      <input type='text' className='weather-input' placeholder='Enter the city name or ZIP code'/>
      <button onClick={getWeatherDetails} className='weather-btn'>Get Weather Details</button>
    </div>
  );
}

export default App;
