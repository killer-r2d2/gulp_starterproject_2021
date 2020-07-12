// select the hamburger box with a variable
const menutoggler = document.querySelector(".headerSection__hamburgerBox");
menutoggler.addEventListener('click', toggler);

// toggler function
function toggler() {
    // select the hamburger with the id
    const hamburger = document.querySelector("#hamburger");
    // add the headerSection__hamburger-close with toggle to the headerSection__hamburger
    hamburger.classList.toggle("headerSection__hamburger-close");
    const layer = document.querySelector(".navSection");
    layer.style.display = "inline-block";
    const text = document.querySelector(".headerSection__text");
    text.innerText = 'Schliessen';
    // add the headerSection__hamburger with toggle to the headerSection__hamburger-close
    hamburger.classList.toggle("headerSection__hamburger");
}



