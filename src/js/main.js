import * as TicketCounter from './ticket-counter.js';
import * as Menu from './menu-toggler.js';
import * as NoticeStarOverview from './noticeStar-overviewFestivals.js';
import * as listTilesView from './list-tiles-view.js';
import * as AccordionDetailsite from './accordion-detailsite.js';
import {initMap} from './map.js';

window.initMap = initMap;








// select the login Icon with a variable
const logintoggler = document.querySelector(".headerSection__IconLogin");
logintoggler.addEventListener('click', togglerlogin);

// togglerlogin function
function togglerlogin() {
    const loginshow = document.querySelector('#loginSection__containter');
    loginshow.classList.toggle("loginSection__containter--open");
    const logincolor = document.querySelector("#navigation_login");
    logincolor.classList.toggle("navigation__login--black");
    const changeColor = document.querySelector(".headerSection__IconLoginText");
    changeColor.classList.toggle("headerSection__IconLoginText--color");
}

// add stopPropagation to the login container.
const loginview = document.querySelector('.loginSection__containter');
loginview.addEventListener('click', function (event) {
    event.stopPropagation();
})









// select the magazinSection__container
const magazineWrapper = document.querySelector(".magazineSection__container");
// we check if the variable magazineWrapper(class .magazineSection__container) exist
if (magazineWrapper) {
    magazineWrapper.addEventListener('click', showMeMore);
}

// show function for magazineSection__box with delegate approach
function showMeMore(event) {
    if (event.target.classList.contains("magazineSection__btn")) {
        const showText = event.target.parentNode.parentNode.querySelector(".magazineSection__lower");
        showText.classList.toggle("magazineSection__lower--show");

        // change the text also
        const textChange = event.target.parentNode.parentNode.querySelector('.magazineSection__btn');
        if (textChange.innerHTML === "LESEN") {
            textChange.innerHTML = "ZUKLAPPEN";
        } else {
            textChange.innerHTML = "LESEN";
        }
    }
}

// start with slider
//
// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');
//
//     // slider Buttons
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');
//

    // // slider Counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;
//
//
// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//
//     // Button listeners
// nextBtn.addEventListener('click',() => {
//     if(counter >= carouselImages.length -1) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });
//
// prevBtn.addEventListener('click',() => {
//     if(counter <= 0) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });
//
// carouselSlide.addEventListener('transitionend', ()=> {
//     if(carouselImages[counter].id === 'lastClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length -2 ;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if(carouselImages[counter].id === 'firstClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - counter ;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });

// end of the slider





// // start the counter for the tickets
//
// // admit function (increment) with delegate approach
// const countWrapper = document.querySelector(".ticketChooseSection");
// // we check if the variable viewList (class .ticketChooseSection__btn--plus) exist
// if (countWrapper) {
//     countWrapper.addEventListener('click', plus);
// }
//
// function plus(event) {
//     if(event.target.classList.contains('ticketChooseSection__btn--plus')) {
//         console.log('oya');
//         // console.log(event.target.parentNode.parentNode.querySelector('.ticketChooseSection__number'));
//         const numberPlus = event.target.parentNode.parentNode.querySelector('.ticketChooseSection__number');
//         console.log(numberPlus.innerText);
//         let numberTickets = parseInt(numberPlus.innerText); //parseInt(): takes a string and gives an number back.
//         numberTickets++; // increment
//         numberPlus.innerText = numberTickets;
//     }
//
// }
//
// // admit function (decrement) with delegate approach
// const countWrapper2 = document.querySelector(".ticketChooseSection");
// // we check if the variable viewList (class .ticketChooseSection__btn--plus) exist
// if (countWrapper2) {
//     countWrapper2.addEventListener('click', minus);
// }
//
// function minus(event) {
//     if(event.target.classList.contains('ticketChooseSection__btn--minus')) {
//         console.log(event.target.parentNode.parentNode.querySelector('.ticketChooseSection__number'));
//         const numberMinus = event.target.parentNode.parentNode.querySelector('.ticketChooseSection__number');
//         let numberTick = parseInt(numberMinus.innerText); //parseInt(): takes a string and gives an number back.
//         if(numberTick != 0) {
//             numberTick--; // decrement
//             numberMinus.innerText = numberTick;
//         }
//
//     }
//
// }





// start notice star detailsite
const clickStar2 = document.querySelector('.textSection__noticeContainer--1');
if(clickStar2) {
    clickStar2.addEventListener('click', ()=> {
        const whiteNoticeStar = document.querySelector('.textSection__starWhite');
        whiteNoticeStar.classList.toggle('textSection__starWhite--hide');
        const blackNoticeStar = document.querySelector('.textSection__starBlack');
        blackNoticeStar.classList.toggle('textSection__starBlack--show');

    });
}



