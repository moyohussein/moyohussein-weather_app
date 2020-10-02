import {storedData, unixTimeConverter, rearrangeString} from './utils.js';

const currentTemp = document.querySelector('h1.current');
const timezone = document.querySelector('.timezone');
const paraToday = document.querySelectorAll('.today');
const [todayDateTime, todayFeelsLike, todaySunrise, todaySunset, todayWind, todayCloud, todayHumidity, todayUVIndex, todayPressure] = paraToday;
const todayImage = document.querySelector('.img-today');
const todayImageCaption = document.querySelector('.description-today');
const progressBar = document.querySelector('.progress-bar');
const weather = document.querySelector('.weather');
const dom = document.querySelector('body');

function todayInfo(item) {
    timezone.textContent = rearrangeString(item);
    currentTemp.textContent = `${(item['current']['temp']).toFixed(1)} °C`;
    todaySunrise.textContent += unixTimeConverter(item['current']['sunrise']);
    todaySunset.textContent += unixTimeConverter(item['current']['sunset']);
    todayDateTime.textContent += unixDateTimeConverter(item['current']['dt']);
    todayFeelsLike.textContent += ` ${item['current']['feels_like'].toFixed(1)} °`;
    todayWind.textContent += ` ${item['current']['wind_speed'].toFixed(1)} m/s`;
    todayCloud.textContent += ` ${item['current']['clouds']} %`;
    todayPressure.textContent += ` ${item['current']['pressure']} hpa`;
    todayUVIndex.textContent += ` ${item['current']['uvi']}`;
    todayHumidity.textContent +=  ` ${item['current']['humidity']} %`;
    todayImageCaption.textContent = `${item['current']['weather']['0']['description']}`;
    todayImage.src = `https://openweathermap.org/img/wn/${item['daily']['0']['weather']['0']['icon']}@2x.png`;
}
todayInfo(storedData);

function currentNyTime() {
    const nyTime = setInterval(unixDateTimeConverter, 1000);
    return nyTime;
};

function unixDateTimeConverter () {
    const date = new Date();
    const options = {timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', day: 'numeric', weekday: 'short', month: 'short'};
    const dateTime = date.toLocaleDateString("en-GB", options); 
    return todayDateTime.textContent = dateTime;
};

function progressScroll () {
    const scrolled = (weather.scrollLeft / (weather.scrollWidth - weather.clientWidth)) * 100;
    progressBar.style.width = scrolled + '%';
}

function displayBackground() {
    const currentTime = unixTimeConverter(storedData['current']['dt']);
    const currentHour = currentTime.substr(0, 2);
    switch(currentHour) {
        case '00':
            dom.style.backgroundImage = 'linear-gradient(305deg, #0cbaba 0%, #380036 74%)';
            break;
        
        case '01':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #020111 85%,#191621 100%)';
            break;

        case '02':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #020111 60%,#20202c 100%)';
            break;

        case '03':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #020111 10%,#3a3a52 100%)';
            break;

        case '04':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #20202c 0%,#515175 100%)';
            break;

        case '05':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%)';
            break;

        case '06':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #4a4969 0%,#7072ab 50%,#cd82a0 100%)';
            break;

        case '07':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #4a4969 0%,#7072ab 50%,#cd82a0 100%)';
            break;

        case '08':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%)';
            dom.style.color = 'black';
            break;

        case '09':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)';
            dom.style.color = 'black';
            break;

        case '10':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #b7eaff 0%,#94dfff 100%)';
            dom.style.color = 'black';
            break;

        case '11':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #9be2fe 0%,#67d1fb 100%)';
            dom.style.color = 'black';
            break;

        case '12':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)';
            dom.style.color = 'black';
            break;

        case '13':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #57c1eb 0%,#246fa8 100%)';
            dom.style.color = 'black';
            break;

        case '14':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #2d91c2 0%,#1e528e 100%)';
            dom.style.color = 'black';
            break;

        case '15':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #2473ab 0%,#1e528e 70%,#5b7983 100%)';
            dom.style.color = 'black';
            break;

        case '16':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #1e528e 0%,#265889 50%,#9da671 100%)';
            dom.style.color = 'black';
            break;

        case '17':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #1e528e 0%,#728a7c 50%,#e9ce5d 100%)';
            dom.style.color = 'black';
            break;

        case '18':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)';
            dom.style.color = 'black';
            break;

        case '19':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%)';
            break;

        case '20':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #071B26 0%,#071B26 30%,#8A3B12 80%,#240E03 100%)';
            break;

        case '21':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #010A10 30%,#59230B 80%,#2F1107 100%)';
            break;

        case '22':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #090401 50%,#4B1D06 100%)';
            break;

        case '23':
            dom.style.backgroundImage = 'linear-gradient(to bottom, #00000c 80%,#150800 100%)';
            break;

        default:
            dom.style.backgroundImage = 'linear-gradient(305deg, #0cbaba 0%, #380036 74%)';
    }
};
displayBackground(storedData);
 
window.addEventListener('load', currentNyTime);

weather.addEventListener('scroll', progressScroll);

// Many thanks to Chris Coyier of CSS Tricks whose work on skygraidents was adopted in the UI of this page