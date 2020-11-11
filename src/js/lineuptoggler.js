const lineUp = document.querySelector(".lineUpSection__btnContainer");
if(lineUp) {
    lineUp.addEventListener('click', lineupToggle);
}

function lineupToggle(event) {
    console.log("funktioniert");
    if(event.target.classList.contains("lineUpSection__btn--1")) {
        const scheduleFriday = document.querySelector(".lineUpSection__scheduleContainer");
        scheduleFriday.classList.toggle("lineUpSection__scheduleContainer--show");
    }


}