import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
  console.log(data.seconds);
}

let time = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(JSON.parse(time));
