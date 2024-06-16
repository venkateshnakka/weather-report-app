A simple weather application built with React that allows users to retrieve current weather information by entering a city name or ZIP code. The application uses the OpenWeatherMap API to fetch weather data.

Features
1. Dark/Light Mode Toggle: Users can switch between dark and light modes.
2. Weather Data Display: Displays current weather information including temperature, humidity, wind speed, and weather description.
3. Error Handling: Provides error messages for invalid city names or ZIP codes.
4. Responsive Design: Ensures a great user experience across devices.


Technologies Used
1. HTML, JavaScript and React
2. Redux (for state management)
3. fetch (for HTTP requests)
4. OpenWeatherMap API
5. CSS (for styling)

Usage
1. Enter a city name or ZIP code into the input field.
2. Click on "Get Weather Details" to fetch and display the weather information.
3. Toggle between dark and light modes using the "Light Mode"/"Dark Mode" button.


Component Details
App Component (App.js)
The main component of the application responsible for rendering the UI, handling user input, and making API calls to fetch weather data.

DisplayWeather Component (DisplayWeather.js)
A functional component that receives weatherData as a prop and displays the current weather details.

Redux Integration (store.js and toggleMode.js)
store.js: Configures the Redux store.
toggleMode.js: Defines actions and reducers for toggling between dark and light modes.


API Reference
The application uses the OpenWeatherMap API to fetch weather data. You need to sign up and get an API key to use the service.
