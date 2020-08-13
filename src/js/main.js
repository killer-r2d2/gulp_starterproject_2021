// import * as googleMaps from ' ./google-maps';
// import { initMap } from './google-maps.js'; // import a single function

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
    layer.classList.toggle("navSection");
    const headerSection = document.querySelector(".headerSection")
    headerSection.classList.toggle("headerSection--changeColor");
    const ticket = document.querySelector("#navigation__ticketkauf");
    ticket.classList.toggle("navigation__ticket--white");
    ticket.classList.toggle("navigation__ticket");
    const login = document.querySelector("#navigation_login");
    login.classList.toggle("navigation__login--white");
    login.classList.toggle("navigation__login");
    const like = document.querySelector("#detail_like_filled");
    like.classList.toggle("navigation__like");
    like.classList.toggle("navigation__like--white");
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
    loginshow.classList.toggle("loginSection__container");
    const logincolor = document.querySelector("#navigation_login");
    logincolor.classList.toggle("navigation__login--black");
    logincolor.classList.toggle("navigation__login");
    const changeColor = document.querySelector(".headerSection__IconLoginText");
    changeColor.classList.toggle("headerSection__IconLoginText--color");
}


// Change the view between list and tiles of the festivals site

// select the list icon with a variable
const viewList = document.querySelector(".overviewSection__labelContainer--list");
viewList.addEventListener('click', listView);

// listView function
function listView() {
    console.log("hallo hölle");
    const listShow = document.querySelector(".overviewSection__cardContainerTiles");
    // listShow.classList.remove("overviewSection__cardContainerTiles");
    listShow.classList.add("overviewSection__cardContainerlist");
}

// select the list icon with a variable
const viewTiles = document.querySelector(".overviewSection__labelContainer--tiles");
viewTiles.addEventListener('click', tilesView);

// tilesView function
function tilesView() {
    console.log("hallo frucht");
    const tilesShow = document.querySelector(".overviewSection__cardContainerTiles");
    tilesShow.classList.remove("overviewSection__cardContainerlist");
}

// change the color of the notice star by a click. I use an arrow function of ES6

const changeColor = document.querySelector(".overviewSection__noticeContainer");
changeColor.addEventListener('click', () => {
    console.log('sonne');

});

function initMap() {
    // Map options
    var options = {
        zoom:8,
        center:{lat:47.4250593,lng:9.3765878},
        mapId: '2ab83db5f283fb46',
        disableDefaultUI: true
    }

    var map = new
    google.maps.Map(document.getElementById('map'),options);

    // Add your marker
    var marker = new google.maps.Marker({
        position:{lat:47.4425183,lng:9.4704406},
        map:map,
        icon:'detail_place.svg'
    });
}


// show function for accordionBox
const showBtn = documen.querySelector(".knowledgeSection__choose");
showBtn.addEventListener('click', showMe);

function showMe() {
    console.log("hallo hölle");
}










