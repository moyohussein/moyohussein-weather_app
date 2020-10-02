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

import {storedData, unixDateConverter, unixTimeConverter, rearrangeString} from './utils.js';

const tomorrowTemp = document.querySelector('h1.tomorrow-temp');
const timezone = document.querySelector('.timezone');
const paraTomorrow = document.querySelectorAll('.tomorrow');
const [tomorrowDateTime, tomorrowSunrise, tomorrowSunset, tomorrowWind, tomorrowCloud, tomorrowHumidity, tomorrowUVIndex, tomorrowPressure] = paraTomorrow;
const tomorrowImage = document.querySelector('.img-tomorrow');
const tomorrowImageCaption = document.querySelector('.description-tomorrow');
const progressBar = document.querySelector('.progress-bar');
const weather = document.querySelector('.weather');

function tomorrowInfo(item) {
    timezone.textContent = rearrangeString(item);
    tomorrowTemp.textContent = `${(item['daily']['1']['temp']['max']).toFixed(0)}/${(item['daily']['1']['temp']['min']).toFixed(0)} °C`;
    tomorrowSunrise.textContent += unixTimeConverter(item['daily']['1']['sunrise']);
    tomorrowSunset.textContent += unixTimeConverter(item['daily']['1']['sunset']);
    tomorrowDateTime.textContent += unixDateConverter(item['daily']['1']['dt']);
    tomorrowWind.textContent += ` ${item['daily']['1']['wind_speed'].toFixed(1)} m/s`;
    tomorrowCloud.textContent += ` ${item['daily']['1']['clouds']} %`;
    tomorrowPressure.textContent += ` ${item['daily']['1']['pressure']} hpa`;
    tomorrowUVIndex.textContent += ` ${item['daily']['1']['uvi']}`;
    tomorrowHumidity.textContent +=  ` ${item['daily']['1']['humidity']} %`;
    tomorrowImageCaption.textContent = `${item['daily']['1']['weather']['0']['description']}`;
    tomorrowImage.src = `https://openweathermap.org/img/wn/${item['daily']['0']['weather']['0']['icon']}@2x.png`;
};
tomorrowInfo(storedData);

function progressScroll () {
    const scrolled = (weather.scrollLeft / (weather.scrollWidth - weather.clientWidth)) * 100;
    progressBar.style.width = scrolled + '%';
}

weather.addEventListener('scroll', progressScroll);