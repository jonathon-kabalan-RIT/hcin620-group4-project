const nav = document.querySelector('.navbar-links');

function updateScrollFade() {
    const canScrollLeft = nav.scrollLeft > 0;
    const canScrollRight = nav.scrollLeft < (nav.scrollWidth - nav.clientWidth - 1);

    nav.classList.toggle('fade-left', canScrollLeft);
    nav.classList.toggle('fade-right', canScrollRight);
}

updateScrollFade();