import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.setCurrentTime(
//   JSON.parse(localStorage.getItem('videoplayer-current-time'))
// );

// player.on(
//   'timeupdate',
//   throttle(data => {
//     localStorage.setItem(
//       'videoplayer-current-time',
//       JSON.stringify(data.seconds)
//     );
//   }, 1000)
// );
