const nav = document.querySelector('.navbar-links');

function updateScrollFade() {
    const canScrollLeft = nav.scrollLeft > 0;
    const canScrollRight = nav.scrollLeft < (nav.scrollWidth - nav.clientWidth - 1);

    console.log('canScrollLeft:', canScrollLeft, '| canScrollRight:', canScrollRight);
}

updateScrollFade();