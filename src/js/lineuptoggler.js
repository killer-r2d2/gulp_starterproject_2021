const lineUp = document.querySelector(".lineUpSection__btnContainer");
if(lineUp) {
    lineUp.addEventListener('click', lineupToggle);
}

function lineupToggle(event) {
    if (event.target.classList.contains("lineUpSection__btn")) {
        console.log(event.target.classList.contains("lineUpSection__btn"));
        const schedule = event.target.parentNode.querySelector('.lineUpSection__scheduleContainer');
        schedule.classList.toggle('lineUpSection__scheduleContainer--show');



    }
}


