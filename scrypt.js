document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-wrapper');

    carousels.forEach(carouselWrapper => {
        const prevButton = carouselWrapper.querySelector('.prev');
        const nextButton = carouselWrapper.querySelector('.next');
        const carousel = carouselWrapper.querySelector('.carousel');
        const items = Array.from(carousel.children);
        const itemCount = items.length;
        const itemsPerPage = 4; // Number of items to show per page
        const maxIndex = Math.ceil(itemCount / itemsPerPage) - 1;
        let currentIndex = 0;

        function updateCarousel() {
            const itemWidth = items[0].getBoundingClientRect().width;
            carousel.style.transform = `translateX(-${currentIndex * itemWidth * itemsPerPage}px)`;
        }

        function showPrevItem() {
            currentIndex = (currentIndex - 1 + (maxIndex + 1)) % (maxIndex + 1);
            updateCarousel();
        }

        function showNextItem() {
            currentIndex = (currentIndex + 1) % (maxIndex + 1);
            updateCarousel();
        }

        prevButton.addEventListener('click', showPrevItem);
        nextButton.addEventListener('click', showNextItem);

        // Initial update
        updateCarousel();
    });
});
