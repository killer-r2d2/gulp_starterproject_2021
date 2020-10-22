import * as TicketCounter from './ticket-counter.js';
import * as Menu from './menu-toggler.js';
import * as NoticeStarOverview from './noticeStar-overviewFestivals.js';
import * as listTilesView from './list-tiles-view.js';
import * as AccordionDetailsite from './accordion-detailsite.js';
import * as AccordionMagazineSection from './accordion-magazineSection.js';
import * as NoticeStarDetailsite from './noticeStar-detailsite.js';
import * as LoginToggler from './loggin-toggler.js';
import * as AudioPlayer from './audioplayer.js';
import {initMap} from './map.js';
window.initMap = initMap;



// start with slider
//
// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');
//
//     // slider Buttons
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');
//

    // // slider Counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;
//
//
// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//
//     // Button listeners
// nextBtn.addEventListener('click',() => {
//     if(counter >= carouselImages.length -1) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });
//
// prevBtn.addEventListener('click',() => {
//     if(counter <= 0) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });
//
// carouselSlide.addEventListener('transitionend', ()=> {
//     if(carouselImages[counter].id === 'lastClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length -2 ;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if(carouselImages[counter].id === 'firstClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - counter ;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });

// end of the slider













