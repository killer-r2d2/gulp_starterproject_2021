const sound = document.querySelector(".sound");

//function beePer(event) {
  //  console.log("playAlter");
   // sound.play();
//}

const musicBox = document.querySelector(".discoverySection__imgContainer");

if(musicBox) {
    musicBox.addEventListener('click', playMusic2);
}

// is there an element with the class .discoverySection__musicBtn--play ?
// remove the class .discoverySection__musicBtn--play
function stopMusic() {
    let statusMusic = document.querySelectorAll(".discoverySection__musicBtn");
    for (let i = 0; i < statusMusic.length; i++) {
        statusMusic[i].classList.remove('discoverySection__musicBtn--play');
    }
}

function playMusic2(event) {
    let isPlaying = "";
    if (event.target.classList.contains("discoverySection__musicBtn--play")) {
        isPlaying = "true";
    };
//    beePer();
    stopMusic();// remove the class .discoverySection__musicBtn--play
    if (isPlaying === "") {
        const playBtn = event.target.parentNode.querySelector('.discoverySection__musicBtn');
        playBtn.classList.add("discoverySection__musicBtn--play");
    }
}




