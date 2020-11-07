const musicBox = document.querySelector(".discoverySection__imgContainer");
if(musicBox) {
    musicBox.addEventListener('click', playMusic);
}


function playMusic(event) {
    if(event.target.classList.contains("discoverySection__musicBtn")) {
        const hideBtn = event.target.parentNode.querySelector('.discoverySection__musicBtn--play');
        hideBtn.classList.toggle("discoverySection__musicBtn--hide");
        const stopBtn = event.target.parentNode.querySelector('.discoverySection__musicBtn--stop');
        stopBtn.classList.toggle("discoverySection__musicBtn--show");
    }
}




