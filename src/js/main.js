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
// we check if the variable viewList (class .overviewSection__labelContainer--list) exist
if(viewList) {
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
if(viewTiles) {
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


function initMap() {
    // Map options
    var options = {
        zoom:14,
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
    if(event.target.classList.contains("knowledgeSection__choose")) {
        console.log(event.target.parentNode.parentNode.querySelector('.knowledgeSection__lowerContainer'));
        const showInfo = event.target.parentNode.parentNode.querySelector('.knowledgeSection__lowerContainer');
        showInfo.classList.toggle("knowledgeSection__lowerContainer--show");
    }
    // change the text
    const textMore = document.querySelector(".knowledgeSection__choose");
    if (textMore.innerHTML === "Mehr") {
        textMore.innerHTML = "Weniger";
    } else {
        textMore.innerHTML = "Mehr";
    }
}









