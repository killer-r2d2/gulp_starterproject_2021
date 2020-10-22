const musicBox = document.querySelector(".discoverySection__imgBox");
musicBox.addEventListener('click', playMusic);

function playMusic() {
    const playBtn = document.querySelector('.discoverySection__play');
    playBtn.classList.toggle("discoverySection__play--hide");
    const stopBtn = document.querySelector('.discoverySection__stop');
    stopBtn.classList.toggle("discoverySection__stop--show");
}