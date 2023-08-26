import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const saveCurrentTime = throttle((timeupdate) => {
  localStorage.setItem('videoplayer-current-time', timeupdate);
}, 1000);


player.on('timeupdate', (data) => {
  const currentTime = data.seconds;
  saveCurrentTime(currentTime);
});


const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime).catch((error) => {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});

