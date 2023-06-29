// Sample music data
const musicData = [
    { number: 1, title: 'Nothing', artist: 'Bruno Major', src: 'songs/song1.mp3' },
    { number: 2, title: 'Ndoshta', artist: 'Dren Abazi', src: 'songs/song2.mp3' },
    { number: 3, title: 'KAJE', artist: 'YLL LIMANI x DAFINA ZEQIRI', src: 'songs/song3.mp3' },
    { number: 4, title: 'E Keni Dit', artist: 'Romeo Veshaj x Ledri Vula', src: 'songs/song4.mp3' },
    { number: 5, title: 'Alaz Alaz', artist: 'Buray', src: 'songs/song5.mp3' },
  ];
  
  const tableBody = document.querySelector('#music-table tbody');
  musicData.forEach((music) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${music.number}</td>
      <td>${music.title}</td>
      <td>${music.artist}</td>
      <td>
        <div>
          <audio id="audio-${music.number}" ontimeupdate="updateTime(${music.number})">
            <source src="${music.src}" type="audio/mpeg">
          </audio>
          <div>
            <button class="play-pause-btn" onclick="togglePlay(${music.number})">Play/Pause</button>
            <span id="time-${music.number}">0:00</span> / <span id="duration-${music.number}">0:00</span>
          </div>
          <input id="progress-${music.number}" type="range" min="0" max="100" value="0" step="0.1" onchange="seek(${music.number}, this.value)">
        </div>
      </td>
      <td>
        <span class="favorite-heart active">&#10084;</span>
      </td>
    `;
    tableBody.appendChild(row);
  });
  
  // Function to toggle play/pause of audio
  function togglePlay(number) {
    const audio = document.querySelector(`#audio-${number}`);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
  // Function to update time and duration
  function updateTime(number) {
    const audio = document.querySelector(`#audio-${number}`);
    const timeDisplay = document.querySelector(`#time-${number}`);
    const durationDisplay = document.querySelector(`#duration-${number}`);
    const progress = document.querySelector(`#progress-${number}`);
  
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    const percentage = (audio.currentTime / audio.duration) * 100;
  
    timeDisplay.textContent = currentTime;
    durationDisplay.textContent = duration;
    progress.value = percentage;
  }
  
  // Function to format time (mm:ss)
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  
  // Function to seek audio
  function seek(number, value) {
    const audio = document.querySelector(`#audio-${number}`);
    const seekTime = (value * audio.duration) / 100;
    audio.currentTime = seekTime;
  }