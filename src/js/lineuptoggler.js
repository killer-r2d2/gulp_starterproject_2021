const lineUp = document.querySelector(".lineUpSection__btnContainer");
if(lineUp) {
    lineUp.addEventListener('click', lineupToggle);
}

function hideLineup() {

    console.log('toggleWorks');
    let statuslineup = document.querySelectorAll(".lineUpSection__scheduleContainer");
    for (let i = 0; i < statuslineup.length; i++) {
        statuslineup[i].classList.remove('lineUpSection__scheduleContainer--show');
    }
}

function lineupToggle(event) {
    hideLineup();
    if (event.target.classList.contains("lineUpSection__btn")) {
        const schedule = event.target.parentNode.querySelector('.lineUpSection__scheduleContainer');
        schedule.classList.toggle('lineUpSection__scheduleContainer--show');



    }
}


