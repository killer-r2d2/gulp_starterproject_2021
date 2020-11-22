const  heartLike = document.querySelector(".newsSection__container");
if (heartLike) {
    heartLike.addEventListener('click', beaterLike);
}


function beaterLike (event) {
    if (event.target.classList.contains("newsSection__heart")) {
        const heartBeat = event.target.parentNode.querySelector('.newsSection__heart');
        heartBeat.classList.add('newsSection__heart--beat');
    }
}

