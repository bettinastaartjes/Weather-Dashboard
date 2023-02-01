// THESE ARE THE GLOBAL VARIABLES
var searchHistory = [];
var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';

// THESE ARE DOM ELEMENTS
var searchForm = document.querySelector ('#search-form');
var searchInput = document.querySelector('#search-input');
var todayDiv = document.querySelector('#today');
var forecastDiv = document.querySelector('#forecast');
var historyDiv = document.querySelector('#history');

// HERE YOU ADD PLUG IN FOR TIMEZONE TO DAY.JS
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);


//fetch function is an interface to make calls to other servers on the web; need a URL; when we make a call to a server it's asynchronous and don't know if that server will get back to us (ajax). Fetch function returns a prompt (fulfilled/unfulfilled); use this/then after fetch call. 

//endpoint = different entrypoint to that server (URL)