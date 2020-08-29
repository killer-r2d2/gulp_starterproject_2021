import {initMap} from './map.js';

window.initMap = initMap;

// select the hamburger box with a variable
const menutoggler = document.querySelector(".headerSection__hamburgerBox");
menutoggler.addEventListener('click', togglermenu);

// // togglermenu function
function togglermenu() {
    // select the hamburger with the id
    const hamburger = document.querySelector("#hamburger");
    // add the headerSection__hamburger-close with toggle to the headerSection__hamburger
    hamburger.classList.toggle("headerSection__hamburger-close");
    hamburger.classList.toggle("headerSection__hamburger");
    const layer = document.querySelector("#navSection");
    layer.classList.toggle("navSection--show");
    const headerSection = document.querySelector(".headerSection")
    headerSection.classList.toggle("headerSection--changeColor");
    const ticket = document.querySelector("#navigation__ticketkauf");
    ticket.classList.toggle("navigation__ticket--white");
    const login = document.querySelector("#navigation_login");
    login.classList.toggle("navigation__login--white");
    const like = document.querySelector("#detail_like_filled");
    like.classList.toggle("navigation__like--white");
    const headerLogoBlack = document.querySelector("#flLogo");
    headerLogoBlack.classList.toggle("headerSection__flLogo--hide");
    const headerLogoWhite = document.querySelector("#flLogoWhite");
    headerLogoWhite.classList.toggle("headerSection__flLogoWhite--show");
    const text = document.querySelector(".headerSection__text");
    // change the text
    if (text.innerHTML === "Menu") {
        text.innerHTML = "Schliessen";
        text.style.color = "white";
    } else {
        text.innerHTML = "Menu";
        text.style.color = "black"
    }
}


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




// Change the view between list and tiles of the festivals site

// select the list icon with a variable
const viewList = document.querySelector(".overviewSection__labelContainer--list");
// we check if the variable viewList (class .overviewSection__labelContainer--list) exist
if (viewList) {
    viewList.addEventListener('click', listView);
}

// listView function
function listView() {
    console.log("hallo hölle");
    const listShow = document.querySelector(".overviewSection__cardContainerTiles");
    // listShow.classList.remove("overviewSection__cardContainerTiles");
    listShow.classList.add("overviewSection__cardContainerlist");
}

// select the list icon with a variable
const viewTiles = document.querySelector(".overviewSection__labelContainer--tiles");
// we check if the variable viewTiles(class .overviewSection__labelContainer--tiles) exist
if (viewTiles) {
    viewTiles.addEventListener('click', tilesView);
}

// tilesView function
function tilesView() {
    console.log("hallo frucht");
    const tilesShow = document.querySelector(".overviewSection__cardContainerTiles");
    tilesShow.classList.remove("overviewSection__cardContainerlist");
}

// change the color of the notice star by a click. I use an arrow function of ES6
const changeColor = document.querySelector(".overviewSection__noticeContainer");
// we check if the variable changeColor(class .overviewSection__noticeContainer) exist
if (changeColor) {
    changeColor.addEventListener('click', () => {
        console.log('sonne');

    });
}


// select the accordionContainer
const knowledgeWrappper = document.querySelector(".knowledgeSection__accordionContainer");
// we check if the variable knowledgeWrappper(class .knowledgeSection__accordionContainer) exist
if (knowledgeWrappper) {
    knowledgeWrappper.addEventListener('click', showMe);
}

// show function for accordionBox with delegate approach
function showMe(event) {
    // the event.target represents the choose button and whatched if there is (contains) a choose button with
    // the class (classList) knowledgeSection__choose.
    if (event.target.classList.contains("knowledgeSection__choose")) {
        console.log(event.target.parentNode.parentNode.querySelector('.knowledgeSection__lowerContainer'));
        const showInfo = event.target.parentNode.parentNode.querySelector('.knowledgeSection__lowerContainer');
        showInfo.classList.toggle("knowledgeSection__lowerContainer--show");
        // change the text also
        const textMore = event.target.parentNode.parentNode.querySelector('.knowledgeSection__choose');
        if (textMore.innerHTML === "Mehr") {
            textMore.innerHTML = "Weniger";
        } else {
            textMore.innerHTML = "Mehr";
        }
    }
}

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

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// slider Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


// // slider Counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;
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


// start the notice function for overviewSection








