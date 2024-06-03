
/*document.addEventListener('DOMContentLoaded', () => {
    const indicators = document.querySelectorAll('.indicator');
    const carouselItems = document.querySelectorAll('.carousel-item');

    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const slideTo = indicator.getAttribute('data-slide-to');

            // Remove active class from all indicators and items
            document.querySelector('.indicator.active').classList.remove('active');
            document.querySelector('.carousel-item.active').classList.remove('active');

            // Add active class to the clicked indicator and corresponding item
            indicator.classList.add('active');
            carouselItems[slideTo].classList.add('active');
        });
    });
});*/




document.addEventListener('DOMContentLoaded', () => {
    const indicators = document.querySelectorAll('.indicator');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;

    const showSlide = (index) => {
        document.querySelector('.indicator.active').classList.remove('active');
        document.querySelector('.carousel-item.active').classList.remove('active');

        indicators[index].classList.add('active');
        carouselItems[index].classList.add('active');
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        showSlide(currentSlide);
    };

    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentSlide = parseInt(indicator.getAttribute('data-slide-to'));
            showSlide(currentSlide);
        });
    });

    setInterval(nextSlide, 3000);
});
