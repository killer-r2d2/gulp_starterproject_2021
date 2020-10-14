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
    // change the text
    const closeText = document.querySelector(".headerSection__textClose");
    closeText.classList.toggle("headerSection__textClose--show");
    const showText = document.querySelector(".headerSection__textMenu");
    showText.classList.toggle("headerSection__textMenu--hidden");
}