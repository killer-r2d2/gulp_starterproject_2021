// select the overviewSection__breadCrumbContainer
const breadBox = document.querySelector(".overviewSection__breadCrumbContainer");
// we check if the variable breadBox = document.querySelector(".overviewSection__breadCrumbContainer") exist.
if (breadBox) {
    breadBox.addEventListener('click', showdropdown);
}

function showdropdown() {
    console.log("Bier");
    const dropDown = document.querySelector('.overviewSection__dropitem--hide');
    dropDown.classList.toggle('overviewSection__dropitem--hide');
}
