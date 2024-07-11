document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const itemMargin = 8; // Set the margin value here
    const itemWidth = carouselItems[0].offsetWidth + itemMargin; // Adjust itemWidth to include the margin
    const totalItems = carouselItems.length;
    const clonedItems = 2;
    let currentIndex = 1;

    function updateCarousel() {
        const offset = currentIndex * -itemWidth;
        carousel.style.transition = `transform 0.5s ease-in-out`;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    function handleTransitionEnd() {
        if (currentIndex === 0) {
            currentIndex = totalItems - (2 * clonedItems);
            carousel.style.transition = 'none';
            const offset = currentIndex * -itemWidth;
            carousel.style.transform = `translateX(${offset}px)`;
        } else if (currentIndex === totalItems - clonedItems) {
            currentIndex = clonedItems;
            carousel.style.transition = 'none';
            const offset = currentIndex * -itemWidth;
            carousel.style.transform = `translateX(${offset}px)`;
        }
    }

    nextButton.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
    });

    carousel.addEventListener('transitionend', handleTransitionEnd);

    // Initial position
    carousel.style.transform = `translateX(${currentIndex * -itemWidth}px)`;
});