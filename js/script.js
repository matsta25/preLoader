var preloaderEl = document.querySelector('.preloaderSeciton');
var mainSection = document.querySelector('.mainSection-showing');

window.addEventListener('load', function () {
    preloaderEl.classList.add('preloader-hiding');
    mainSection.classList.remove('mainSection-showing');
    preloaderEl.addEventListener('transitionend', function () {
        this.classList.add('preloader-hidden')
        this.classList.remove('preloader-hiding')
    })
});