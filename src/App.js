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
  return (
    <div className="App">
      <button onClick={updateMode}>toggleMode</button>
      <h1>Discover the Weather in Your City</h1>
      <p>Enter the city name or ZIP code to get the weather details</p>
      <input type='text' placeholder='Enter the city name or ZIP code'/>
      <button onClick={getWeatherDetails}>Get Weather Details</button>
    </div>
  );
}

export default App;
