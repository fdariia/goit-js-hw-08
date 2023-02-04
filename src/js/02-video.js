import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = "videoplayer-current-time";
const keyValue = localStorage.getItem(CURRENT_TIME_KEY);

//Прослуховує плеєр і записує в локал сторидж поточний час відео (evn.seconds);
const onPlay = throttle(evt => localStorage.setItem(CURRENT_TIME_KEY, evt.seconds), 1000)

//Якщо значення ключа є, тоді в плеєрі встановиться поточний час
if (keyValue) {
      player.setCurrentTime(keyValue);
      console.log(keyValue);
}

player.on('timeupdate', onPlay);