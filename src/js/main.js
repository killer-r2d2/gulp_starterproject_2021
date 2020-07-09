const menutoggler = document.querySelector(".headerSection__hamburgerBox");
menutoggler.addEventListener('click', toggler);

function toggler() {
    const hamburger = document.querySelector("#hamburger");
    hamburger.classList.toggle("headerSection__hamburger-close");
    hamburger.classList.toggle("headerSection__hamburger");
}