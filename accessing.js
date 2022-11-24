// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const weatherH2 = document.getElementById('weather-head');
weatherH2.innerHTML = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"
const sunLi = document.getElementsByClassName('sun');
for(let i = 0; i < sunLi.length; i++) {
    sunLi[i].style.color = 'orange';
}

// Change the class of the second <li> from to "sun" to "cloudy"
const secondSunLi = document.querySelector('#weather :nth-child(2)');
secondSunLi.className = 'cloudy';