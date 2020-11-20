const lineUp = document.querySelector(".lineUpSection__btnContainer");
if(lineUp) {
    lineUp.addEventListener('click', lineupToggle);
}

function hideLineup() {
    let statuslineup = document.querySelectorAll(".lineUpSection__scheduleContainer");
    for (let i = 0; i < statuslineup.length; i++) {
        statuslineup[i].classList.remove('lineUpSection__scheduleContainer--show');
    }
}

function lineupToggle(event) {
    let isHide = "";
    if(event.target.classList.contains("lineUpSection__scheduleContainer--show")) {
        isHide = "true";
    }
    hideLineup();
    if (isHide === "") {
            const schedule = event.target.parentNode.querySelector('.lineUpSection__scheduleContainer');
            schedule.classList.add('lineUpSection__scheduleContainer--show');
    }
}


