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