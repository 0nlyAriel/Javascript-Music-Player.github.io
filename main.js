let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Barely Holdin' On",
    artist: "Polo G",
    image: "https://a10.gaanacdn.com/gn_img/albums/XYybzNrb2g/ybzg2vroK2/size_l.jpg",
    path: "https://media.vistanaij.com.ng/wp-content/songs/2023/08/Polo_G_-_Barely_Holdin_On_Vistanaij.com.ng.mp3"
  },
  {
    name: "Sum 2 Prove",
    artist: "Lil Baby",
    image: "https://i0.wp.com/hiphopkit.com/uploads/2020/11/Lil-Baby-Sum-2-Prove-artwork?ulb=false&ssl=1&resize=320,350",
    path: "https://www.nobadsong.com/wp-content/uploads/2023/04/Lil-Baby-Sum-2-Prove.mp3"
  },
  {
    name: "Hotel Lobby",
    artist: "Quavo & Takeoff",
    image: "https://upload.wikimedia.org/wikipedia/en/4/48/Quavo_%26_Takeoff_-_Hotel_Lobby_%28Unc_%26_Phew%29.jpg",
    path: "https://hiptopjamz.com/wp-content/uploads/2022/10/Quavo_Takeoff_-_Hotel_Lobby_Unc_Phew__.mp3?_=1",
  },
  {
    name: "Crazy Story",
    artist: "King Von",
    image: "https://upload.wikimedia.org/wikipedia/en/d/da/King_Von_-_Crazy_Story.jpg",
    path: "https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2023/06/King_Von_-_Crazy_Story.mp3?_=2",
  },
  {
    name: "Spin Bout U",
    artist: "Drake, 21 Savage",
    image: "https://i0.wp.com/hiphopmood.com/uploads/2023/08/Drake-Spin-Bout-U-artwork.jpeg?ulb=false&ssl=1&resize=320,350",
    path: "https://bidwish.com.ng/files/Drake,%2021%20Savage%20-%20Spin%20Bout%20U.mp3",
  },
  {
    name: " Married with Millions",
    artist: "Gucci Mane",
    image: "https://i0.wp.com/justnaija.com/uploads/2023/07/Gucci-Mane-Married-With-Millions-artwork.jpeg?ulb=false&ssl=1&resize=320,350",
    path: "https://connectloaded.com/uploads/2023/07/Gucci_Mane_-_Married_with_Millions-CONNECTLOADED.COM.mp3?_=1",
  },
  {
    name: "Pushin P",
    artist: "Gunna, Young Thug",
    image: "https://i0.wp.com/hiphopmood.com/uploads/2023/08/Gunna-Pushin-P-artwork.jpeg?ulb=false&ssl=1&resize=320,350",
    path: "https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2023/07/Gunna_ft_Future_Young_Thug_-_Pushin_P.mp3?_=2",
  },
  {
    name: "Knife Talk",
    artist: "Drake Ft. 21 Savage & Project Pat",
    image: "https://i0.wp.com/justnaija.com/uploads/2023/07/Drake-Knife-Talk-artwork.jpeg?ulb=false&ssl=1&resize=320,350",
    path: "https://open.spotify.com/track/2BcMwX1MPV6ZHP4tUT9uq6?si=f1bddefcf82043a9",
  },
  {
    name: "Dope",
    artist: "Nle Choppa, Fivio Foreign",
    image: "https://i0.wp.com/justnaija.com/uploads/2023/04/NLE-Choppa-Dope-artwork.jpeg?ulb=false&ssl=1&resize=320,350",
    path: "https://nobadsong.com/wp-content/uploads/2023/04/NLE_Choppa_-_Dope_Nobadsong.com.mp3"
  },
  {
    name: "Crazy Story",
    artist: "King Von",
    image: "https://upload.wikimedia.org/wikipedia/en/d/da/King_Von_-_Crazy_Story.jpg",
    path: "https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2023/06/King_Von_-_Crazy_Story.mp3?_=2",
  },
  {
    name: "Crazy Story",
    artist: "King Von",
    image: "https://upload.wikimedia.org/wikipedia/en/d/da/King_Von_-_Crazy_Story.jpg",
    path: "https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2023/06/King_Von_-_Crazy_Story.mp3?_=2",
  },
  {
    name: "Crazy Story",
    artist: "King Von",
    image: "https://upload.wikimedia.org/wikipedia/en/d/da/King_Von_-_Crazy_Story.jpg",
    path: "https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2023/06/King_Von_-_Crazy_Story.mp3?_=2",
  },
  {
    name: "Crazy Story",
    artist: "King Von",
    image: "https://upload.wikimedia.org/wikipedia/en/d/da/King_Von_-_Crazy_Story.jpg",
    path: "https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2023/06/King_Von_-_Crazy_Story.mp3?_=2",
  },
  {
    name: "Crazy Story",
    artist: "King Von",
    image: "https://upload.wikimedia.org/wikipedia/en/d/da/King_Von_-_Crazy_Story.jpg",
    path: "https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2023/06/King_Von_-_Crazy_Story.mp3?_=2",
  },
  {
    name: "Crazy Story",
    artist: "King Von",
    image: "https://upload.wikimedia.org/wikipedia/en/d/da/King_Von_-_Crazy_Story.jpg",
    path: "https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2023/06/King_Von_-_Crazy_Story.mp3?_=2",
  },

];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


