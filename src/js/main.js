// select the hamburger box with a variable
const menutoggler = document.querySelector(".headerSection__hamburgerBox");
menutoggler.addEventListener('click', toggler);

// toggler function
function toggler() {
    // select the hamburger with the id
    const hamburger = document.querySelector("#hamburger");
    // add the headerSection__hamburger-close with toggle to the headerSection__hamburger
    hamburger.classList.toggle("headerSection__hamburger-close");
    hamburger.classList.toggle("headerSection__hamburger");
    const layer = document.querySelector(".navSection");
    layer.style.display = "inline-block";
    // change the Menu to Schliessen
    const headerSection = document.querySelector(".headerSection");
    headerSection.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    const text = document.querySelector(".headerSection__text");
    text.innerText = 'Schliessen';
    text.style.color = "white";
    const ticket = documenKt.querySelector(".navigation__ticket");
    ticket.classList.add("navigation__ticket--white");
    const login = document.querySelector(".navigation__login");
    login.classList.add("navigation__login--white");
    const like = document.querySelector(".navigation__like");
    like.classList.add("navigation__like--white");
    // add the headerSection__hamburger with toggle to the headerSection__hamburger-close
}



