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
        const closeText = event.target.parentNode.parentNode.querySelector(".magazineSection__btn--close");
        closeText.classList.toggle('magazineSection__btn--closeOpen')
        const readText = event.target.parentNode.parentNode.querySelector('.magazineSection__btn--read');
        readText.classList.toggle('magazineSection__btn--readHide');

    }
}
