const searches = document.querySelectorAll(".icon-list");
const hideMenu = document.querySelector('#hide-menu');
const itemBoxs = document.querySelectorAll('.item-box');
const hiddenMenu = document.querySelector('#hidden-menu');
const search = document.getElementById('search');
const searchBox = document.getElementById('search-box');




searches.forEach((search) => {
    search.addEventListener("click", () => {
        hideMenu.classList.toggle('hide-menu');
        hideMenu.classList.toggle('mobile-menu')
    })
})


itemBoxs.forEach((itemBox) => {
    itemBox.addEventListener('click', () => {
        hiddenMenu.classList.toggle('open-dropdown');
    })
})


function toggleSearch() {
    searchBox.classList.toggle('show');
}