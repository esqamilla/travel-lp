(function() {
    const header = document.querySelector('.header');
    var introH = document.getElementById('intro').offsetHeight;
    var benefitsTitleH = document.getElementById('benefits__title').offsetHeight;

    window.onscroll = () => {
        if (window.pageYOffset > introH - benefitsTitleH - 93) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    };
}());
