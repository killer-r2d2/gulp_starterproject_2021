// select the overviewSection__breadCrumbContainer
const arrowDown = document.querySelector(".overviewSection__dropdownarrow");
// we check if the variable breadBox = document.querySelector(".overviewSection__breadCrumbContainer") exist.
if (arrowDown) {
    arrowDown.addEventListener('click', showdropdown);
}

function showdropdown() {
    console.log("Bier");
    const arrowUp =document.querySelector(".overviewSection__dropdownarrow");
    arrowUp.classList.toggle("overviewSection__dropdownarrow--turn");

    const dropDown = document.querySelector('.overviewSection__festivaldrope');
    dropDown.classList.toggle('overviewSection__festivaldrope--show');
}
