// start the counter for the tickets

// admit function (increment) with delegate approach
const countWrapper = document.querySelector(".ticketChooseSection");
// we check if the variable viewList (class .ticketChooseSection__btn--plus) exist
if (countWrapper) {
    countWrapper.addEventListener('click', plus);
}

function plus(event) {
    if(event.target.classList.contains('ticketChooseSection__btn--plus')) {
        console.log('oya');
        // console.log(event.target.parentNode.parentNode.querySelector('.ticketChooseSection__number'));
        const numberPlus = event.target.parentNode.parentNode.querySelector('.ticketChooseSection__number');
        console.log(numberPlus.innerText);
        let numberTickets = parseInt(numberPlus.innerText); //parseInt(): takes a string and gives an number back.
        numberTickets++; // increment
        numberPlus.innerText = numberTickets;
    }

}

// admit function (decrement) with delegate approach
const countWrapper2 = document.querySelector(".ticketChooseSection");
// we check if the variable viewList (class .ticketChooseSection__btn--plus) exist
if (countWrapper2) {
    countWrapper2.addEventListener('click', minus);
}

function minus(event) {
    if(event.target.classList.contains('ticketChooseSection__btn--minus')) {
        console.log(event.target.parentNode.parentNode.querySelector('.ticketChooseSection__number'));
        const numberMinus = event.target.parentNode.parentNode.querySelector('.ticketChooseSection__number');
        let numberTick = parseInt(numberMinus.innerText); //parseInt(): takes a string and gives an number back.
        if(numberTick != 0) {
            numberTick--; // decrement
            numberMinus.innerText = numberTick;
        }

    }

}