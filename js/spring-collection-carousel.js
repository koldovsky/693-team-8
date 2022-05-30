(function() {
    const slides = [
'<div class ="slide"><img src = "img/collection/spring-collection-carousel-slide-5.png" alt = "Furniture-slide-5"></div>',
'<div class ="slide"><img src = "img/collection/spring-collection-carousel-slide-3.jpg" alt = "Furniture-slide-3"></div>',
'<div class ="slide"><img src = "img/collection/spring-collection-background.jpg" alt = "Furniture-slide-1"></div>'
    ];

    let currentSlide = 0;

    function renderCarousel() {
        const carouselContainer = document.querySelector('.');
        carouselContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    setInterval(nextSlide, 2000);

    renderCarousel();

})(); 