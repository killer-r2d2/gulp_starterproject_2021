// start notice star overview-festivals

// admit function with delegate approach
const clickStar = document.querySelector('.overviewSection');
// we check if the variable clickStar (class .overviewSection) exist
if(clickStar) {
    clickStar.addEventListener('click', noticeFestival);
}

function noticeFestival(event) {
    if(event.target.classList.contains('overviewSection__noticeContainer')) {
        const whiteStar = event.target.parentNode.querySelector('.overviewSection__noticeStarWhite');
        whiteStar.classList.toggle('overviewSection__noticeStarWhite--hidde');
        const blackStar = event.target.parentNode.querySelector('.overviewSection__noticeStarBlack');
        blackStar.classList.toggle('overviewSection__noticeStarBlack--show');
    }
}