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
    if (event.target.classList.contains("knowledgeSection__choose")) {
        console.log(event.target.parentNode.parentNode.querySelector('.knowledgeSection__lowerContainer'));
        const showInfo = event.target.parentNode.parentNode.querySelector('.knowledgeSection__lowerContainer');
        showInfo.classList.toggle("knowledgeSection__lowerContainer--show");
        // change the text also
        const textMore = event.target.parentNode.parentNode.querySelector('.knowledgeSection__choose');
        if (textMore.innerHTML === "Mehr") {
            textMore.innerHTML = "Weniger";
        } else {
            textMore.innerHTML = "Mehr";
        }
    }
}