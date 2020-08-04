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
    headerSection.classList.toggle("headerSection--changeColor");
    // headerSection.classList.toggle("headerSection");
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
    // change the color of the text
    // text.classList.toggle("headerSection__text--color");
    // text.classList.toggle("headerSection__text");
    // change the text
    if (text.innerHTML === "Menu") {
        text.innerHTML = "Schliessen";
        text.style.color ="white";
    } else {
        text.innerHTML = "Menu";
        text.style.color = "black";
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
}

