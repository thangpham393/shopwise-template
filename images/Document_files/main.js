var overlay = document.querySelector('.overlay');
var search = document.querySelector('.header .header__top .header__top-menu .menu__item .menu__item-search');
search.addEventListener('click', function() {
    overlay.classList.add('show');
});
var closee = document.querySelector('.overlay .overlay__search-close');
closee.addEventListener('click', function() {
    overlay.classList.add('close__show');
});
// ---------
var buttonn = document.querySelector('.get__button-send');
buttonn.addEventListener('click', function() {

    buttonn.classList.add('sendd__left');
})