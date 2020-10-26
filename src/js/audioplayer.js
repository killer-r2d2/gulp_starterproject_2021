const musicBox = document.querySelector(".discoverySection__imgContainer");
musicBox.addEventListener('click', playMusic);

function playMusic(event) {
    if(event.target.classList.contains("discoverySection__play")) {
        const hideBtn = event.target.parentNode.querySelector('.discoverySection__play');
        hideBtn.classList.toggle("discoverySection__play--hide");
        const stopBtn = event.target.parentNode.querySelector('.discoverySection__stop');
        stopBtn.classList.toggle("discoverySection__stop--show");
    }

    // const playBtn = document.querySelector('.discoverySection__play');
    // playBtn.classList.toggle("discoverySection__play--hide");
    // const stopBtn = document.querySelector('.discoverySection__stop');
    // stopBtn.classList.toggle("discoverySection__stop--show");
}

