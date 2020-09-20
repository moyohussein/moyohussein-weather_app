if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then((reg) => {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch((error) => {
      // registration failed
      console.log('Registration failed with ' + error);
    });
};

import {storedData, unixDateConverter, unixTimeConverter} from './utils.js';

const unorderedList = document.querySelector('ul');

function fillList(result) {
    unorderedList.innerHTML = 
    `${Array(8).fill().map((elem, i) => 
    `<li>
        <details class="border-gradient">
            <summary>
                <div class="date-weather">
                    <h4 class="date">${(unixDateConverter(result['daily'][i]['dt']) == unixDateConverter(result['daily'][0]['dt'])) ? 'Today' : unixDateConverter(result['daily'][i]['dt'])}</h4>
                    <p>${result['daily'][i]['weather']['0']['description']}</p>
                </div>
                <div class= "img-max-min-temp">
                    <img src= "https://openweathermap.org/img/wn/${result['daily'][i]['weather']['0']['icon']}@2x.png" alt="weather icon">
                    <div class= "max-min-temp">
                        <p class="max-temp">${(result['daily'][i]['temp']['max']).toFixed(0)}°</p>
                        <p class="min-temp">${(result['daily'][i]['temp']['min']).toFixed(0)}°</p>
                    </div>
                    </div>
            </summary>
                <div class="details">
                    <h6><span>Sunrise/Sunset</span> <span>${unixTimeConverter(result['daily'][i]['sunrise'])} / ${unixTimeConverter(result['daily'][i]['sunset'])}</span></h6>
                    <h6><span>Clouds</span> <span>${result['daily'][i]['clouds']} %</span></h6>
                    <h6><span>Winds</span> <span>${result['daily'][i]['wind_speed']} m/s</span></h6>
                    <h6><span>Humidity</span> <span>${result['daily'][i]['humidity']} %</span></h6>
                    <h6><span>UV index</span> <span>${result['daily'][i]['uvi']}</span></h6>
                    <h6><span>Pressure</span> <span>${result['daily'][i]['pressure']} hpa</span></h6>
                </div>
        </details>
    </li>`).join('')}`
};
fillList(storedData);