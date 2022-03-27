const playBtn = document.querySelector('.play-btn');
const logoEl = document.querySelector('.logo');
let isPlay = false;
const audio = new Audio();
let elems = document.querySelectorAll('.menu__list-item');

function playAudio() {
  audio.src = './audio/forest.mp3';
  audio.currentTime = 0;
  
  if(!isPlay){
    isPlay = true;
    audio.play();
  } else {
    isPlay = false;
    audio.pause();
  }
}

function playItem() {
  if(!isPlay){
    isPlay = true;
    audio.play();
} else {
    isPlay = true;
    audio.play();
  }
}

function toggleBtn() {
  if(!isPlay){
      playBtn.classList.remove('play-btn');
      playBtn.classList.add('pause-btn');
    } else {
      playBtn.classList.add('play-btn');
      playBtn.classList.remove('pause-btn');
    }
}

function addActiveClass(elem) {
    elem.classList.add('active');
}
function removeActiveClass(elem) {
    elem.classList.remove('active');
}
playBtn.addEventListener('click', toggleBtn);
playBtn.addEventListener('click', playAudio);
logoEl.addEventListener('click', () => {
    if(!isPlay){
        playBtn.classList.remove('play-btn');
        playBtn.classList.add('pause-btn');
      }
    contentEl.style.background = "url('./img/forest.jpg') no-repeat center/cover"
    audio.src = './audio/forest.mp3';
    audio.currentTime = 0;

    playItem();

});

const contentEl = document.querySelector('.content');
const soloveyEl = document.querySelector('#solovey');
const drozdEl = document.querySelector('#drozd');
const zarynkaEl = document.querySelector('#zarynka');
const javoronokEl = document.querySelector('#javoronok');
const slavkaEl = document.querySelector('#slavka');

soloveyEl.addEventListener('click', () => {
    if(!isPlay){
        playBtn.classList.remove('play-btn');
        playBtn.classList.add('pause-btn');
      }
    contentEl.style.background = "url('./img/solovey.jpg') no-repeat center/cover";
    audio.src = './audio/solovey.mp3';
    audio.currentTime = 0;
    
    playItem()
  addActiveClass(soloveyEl);
  removeActiveClass(drozdEl);
  removeActiveClass(zarynkaEl);
  removeActiveClass(javoronokEl);
  removeActiveClass(slavkaEl);
});

drozdEl.addEventListener('click', () => {
  if(!isPlay){
      playBtn.classList.remove('play-btn');
      playBtn.classList.add('pause-btn');
    }
  contentEl.style.background = "url('./img/drozd.jpg') no-repeat center/cover"
  audio.src = './audio/drozd.mp3';
  audio.currentTime = 0;

  playItem()
  addActiveClass(drozdEl);
  removeActiveClass(soloveyEl);
  removeActiveClass(zarynkaEl);
  removeActiveClass(javoronokEl);
  removeActiveClass(slavkaEl);
});

zarynkaEl.addEventListener('click', () => {
    if(!isPlay){
        playBtn.classList.remove('play-btn');
        playBtn.classList.add('pause-btn');
      }
    contentEl.style.background = "url('./img/zarynka.jpg') no-repeat center/cover"
    audio.src = './audio/zarynka.mp3';
    audio.currentTime = 0;

    playItem()
  addActiveClass(zarynkaEl);
  removeActiveClass(soloveyEl);
  removeActiveClass(drozdEl);
  removeActiveClass(javoronokEl);
  removeActiveClass(slavkaEl);
});

javoronokEl.addEventListener('click', () => {
  if(!isPlay){
      playBtn.classList.remove('play-btn');
      playBtn.classList.add('pause-btn');
    }
  contentEl.style.background = "url('./img/javoronok.jpg') no-repeat center/cover"
  audio.src = './audio/javoronok.mp3';
  audio.currentTime = 0;

  playItem()
  addActiveClass(javoronokEl);
  removeActiveClass(soloveyEl);
  removeActiveClass(drozdEl);
  removeActiveClass(zarynkaEl);
  removeActiveClass(slavkaEl);
});

slavkaEl.addEventListener('click', () => {
  if(!isPlay){
      playBtn.classList.remove('play-btn');
      playBtn.classList.add('pause-btn');
    }
  contentEl.style.background = "url('./img/slavka.jpg') no-repeat center/cover"
  audio.src = './audio/slavka.mp3';
  audio.currentTime = 0;

  playItem()
  addActiveClass(slavkaEl);
  addActiveClass(javoronokEl);
  removeActiveClass(soloveyEl);
  removeActiveClass(drozdEl);
  removeActiveClass(zarynkaEl);
  removeActiveClass(javoronokEl);
});