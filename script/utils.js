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

(async () => {
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=40.7308619&lon=-73.9871558&units=metric&appid=c19b3062e70d36001c26410c649e5ff9')
    .then(response => response.json())
    .then(data => localStorage.setItem('data', JSON.stringify(data)))
.catch(err => {
    console.log(`There was this error: ${err}`);
});
})();

const storedData = JSON.parse(localStorage.getItem('data'));

setTimeout("location.reload(true);", 3600000);
setTimeout('localStorage.clear;', 3600000);

function unixDateConverter (item) {
    let date = new Date(item * 1000);
    const options = {timeZone: 'America/New_York', day: 'numeric', weekday: 'long', month: 'short'};
    date = date.toLocaleDateString("en-GB", options); 
    return date;
};

function unixTimeConverter (item) {
    const options = {timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit'};
    let time = new Date(item * 1000);
    time = time.toLocaleTimeString('en-GB', options);
    return time;
};

function rearrangeString(item) {
    const timezone = item['timezone'];
    const country = timezone.substring(0, timezone.indexOf('/'));
    let state = timezone.substring(timezone.indexOf('/') + 1, timezone.length);
    state = state.replace('_', ' ');
    return state + ', ' + country;
};

export {storedData, unixDateConverter, unixTimeConverter, rearrangeString}