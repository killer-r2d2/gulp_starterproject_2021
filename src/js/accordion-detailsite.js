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
    if (event.target.classList.contains("knowledgeSection__btn")) {
        console.log('hallo');
        const hideMore = event.target.parentNode.querySelector('.knowledgeSection__btn--chooseMore');
        hideMore.classList.toggle('knowledgeSection__btn--hide');
        const showLess = event.target.parentNode.querySelector('.knowledgeSection__btn--chooseLess');
        showLess.classList.toggle('knowledgeSection__btn--show');
        const lowerText = event.target.parentNode.parentNode.parentNode.querySelector('.knowledgeSection__lowerContainer');
        lowerText.classList.toggle('knowledgeSection__lowerContainer--show');
    }
}