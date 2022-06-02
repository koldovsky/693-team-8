// (function() {
//     const slides = [
// '<div class ="slide"><img src = "img/collection/spring-collection-carousel-slide-5.png" alt = "Furniture-slide-5"></div>',
// '<div class ="slide"><img src = "img/collection/spring-collection-carousel-slide-3.jpg" alt = "Furniture-slide-3"></div>',
// '<div class ="slide"><img src = "img/collection/spring-collection-background.jpg" alt = "Furniture-slide-1"></div>'
//     ];

//     let currentSlide = 0;

//     function renderCarousel() {
//         const carouselContainer = document.querySelector('.');
//         carouselContainer.innerHTML = slides[currentSlide];
//     }

//     function nextSlide() {
//         currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
//         renderCarousel();
//     }

//     setInterval(nextSlide, 2000);

//     renderCarousel();

// })(); 

const button = document.querySelector('.fast-order');

const modal = document.querySelector('.modal-window-spring2020');
const span = document.querySelector('.close-modal-window-spring2020');

button.addEventListener('click', modalWindow );

function modalWindow(){
    modal.style.display = 'block';
}

span.addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = 'none';
}

window.addEventListener('click', closeBtn);
function closeBtn (event) {
    if (event.target == modal){
        modal.style.display = 'none';
    }
}