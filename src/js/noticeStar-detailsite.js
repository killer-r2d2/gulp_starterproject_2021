
// start notice star detailsite
const clickStar2 = document.querySelector('.textSection__noticeContainer--1');
if(clickStar2) {
    clickStar2.addEventListener('click', ()=> {
        const whiteNoticeStar = document.querySelector('.textSection__starWhite');
        whiteNoticeStar.classList.toggle('textSection__starWhite--hide');
        const blackNoticeStar = document.querySelector('.textSection__starBlack');
        blackNoticeStar.classList.toggle('textSection__starBlack--show');
    });
}