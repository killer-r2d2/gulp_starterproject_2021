// Change the view between list and tiles of the festivals site

// select the list icon with a variable
const viewList = document.querySelector(".overviewSection__labelContainer--list");
// we check if the variable viewList (class .overviewSection__labelContainer--list) exist
if (viewList) {
    viewList.addEventListener('click', listView);
}

// listView function
function listView() {
    console.log("hallo hölle");
    const listShow = document.querySelector(".overviewSection__cardContainerTiles");
    // listShow.classList.remove("overviewSection__cardContainerTiles");
    listShow.classList.add("overviewSection__cardContainerlist");
}

// select the list icon with a variable
const viewTiles = document.querySelector(".overviewSection__labelContainer--tiles");
// we check if the variable viewTiles(class .overviewSection__labelContainer--tiles) exist
if (viewTiles) {
    viewTiles.addEventListener('click', tilesView);
}

// tilesView function
function tilesView() {
    console.log("hallo frucht");
    const tilesShow = document.querySelector(".overviewSection__cardContainerTiles");
    tilesShow.classList.remove("overviewSection__cardContainerlist");
}