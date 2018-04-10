var preloaderEl = document.querySelector('.preloaderSeciton');
window.addEventListener('load', function () {
    preloaderEl.classList.add('preloader-hiding');
    preloaderEl.addEventListener('transitionend', function () {
        this.classList.add('preloader-hidden')
        this.classList.remove('preloader-hiding')
    })
});